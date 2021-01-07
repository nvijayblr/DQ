import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter,
  HostListener, Input, Output, TemplateRef, ViewEncapsulation
} from '@angular/core';
import { CdkDragDrop, CdkDragStart, DragRef } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

@Component({
  selector: 'app-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DragDropListComponent {
  @Input() items: any[];
  @Input() isDisabled: boolean;
  @Output() itemsRemoved = new EventEmitter<any[]>();
  @Output() itemsAdded = new EventEmitter<any[]>();
  @Output() itemsUpdated = new EventEmitter<any[]>();
  @Output() selectionChanged = new EventEmitter<any[]>();
  @Output() selectedItemIndexChange = new EventEmitter<number>();
  @ContentChild(TemplateRef, { static: false }) templateRef;

  public dragging: DragRef = null;
  public selections: number[] = [];
  private currentSelectionSpan: number[] = [];
  private lastSingleSelection: number;

  constructor(
    private eRef: ElementRef,
    private cdRef: ChangeDetectorRef,
  ) { }

  dragStarted(ev: CdkDragStart, index: number): void {
    this.dragging = ev.source._dragRef;
    const indices = this.selections.length ? this.selections : [index];
    ev.source.data = {
      indices,
      values: indices.map(i => this.items[i]),
      source: this,
    };
    this.cdRef.detectChanges();
  }

  dragEnded(): void {
    this.dragging = null;
    this.cdRef.detectChanges();
  }

  dropped(ev: CdkDragDrop<any>): void {
    if (!ev.isPointerOverContainer || !_.get(ev, 'item.data.source')) {
      return;
    }
    const data = ev.item.data;

    if (data.source === this) {
      const removed = _.pullAt(this.items, data.indices);
      if (ev.previousContainer !== ev.container) {
        this.itemsRemoved.emit(removed);
        // this.itemsUpdated.emit(this.items);
      }
    }
    this.dragging = null;
    setTimeout(() => this.clearSelection());
  }

  droppedIntoList(ev: CdkDragDrop<any>): void {
    if (!ev.isPointerOverContainer || !_.get(ev, 'item.data.source')) {
      return;
    }
    const data = ev.item.data;
    let spliceIntoIndex = ev.currentIndex;
    if (ev.previousContainer === ev.container && this.selections.length > 1) {
      this.selections.splice(-1, 1);
      const sum = _.sumBy(this.selections, selectedIndex => selectedIndex <= spliceIntoIndex ? 1 : 0);
      spliceIntoIndex -= sum;
    }
    this.items.splice(spliceIntoIndex, 0, ...data.values);

    if (ev.previousContainer !== ev.container) {
      this.itemsAdded.emit(data.values);
    } else {
      this.itemsUpdated.emit(this.items);
    }
    setTimeout(() => this.cdRef.detectChanges());
  }

  isSelected(i: number): boolean {
    return this.selections.indexOf(i) >= 0;
  }

  select(event, index) {
    this.selectedItemIndexChange.emit(index);
    const shiftSelect = event.shiftKey &&
      (this.lastSingleSelection || this.lastSingleSelection === 0) &&
      this.lastSingleSelection !== index;

    if (!this.selections || this.selections.length < 1) {
      // if nothing selected yet, init selection mode and select.
      this.selections = [index];
      this.lastSingleSelection = index;
    } else if (event.metaKey || event.ctrlKey) {
      // if holding ctrl / cmd
      const alreadySelected = _.find(this.selections, s => s === index);
      if (alreadySelected) {
        _.remove(this.selections, s => s === index);
        this.lastSingleSelection = null;
      } else {
        this.selections.push(index);
        this.lastSingleSelection = index;
      }
    } else if (shiftSelect) {
      // if holding shift, add group to selection and currentSelectionSpan
      const newSelectionBefore = index < this.lastSingleSelection;
      const count = (
        newSelectionBefore ? this.lastSingleSelection - (index - 1) :
          (index + 1) - this.lastSingleSelection
      );

      // clear previous shift selection
      if (this.currentSelectionSpan && this.currentSelectionSpan.length > 0) {
        _.each(this.currentSelectionSpan, i => {
          _.remove(this.selections, s => s === i);
        });
        this.currentSelectionSpan = [];
      }
      // build new currentSelectionSpan
      _.times(count, c => {
        if (newSelectionBefore) {
          this.currentSelectionSpan.push(this.lastSingleSelection - c);
        } else {
          this.currentSelectionSpan.push(this.lastSingleSelection + c);
        }
      });
      // select currentSelectionSpan
      _.each(this.currentSelectionSpan, (i) => {
        if (!_.includes(this.selections, i)) {
          this.selections.push(i);
        }
      });
    } else {
      // Select only this item or clear selections.
      const alreadySelected = _.find(this.selections, s => s === index);
      if ((!alreadySelected && !event.shiftKey) || (alreadySelected && this.selections.length > 1)) {
        this.clearSelection();
        this.selections = [index];
        this.lastSingleSelection = index;
      } else if (alreadySelected) {
        this.clearSelection();
      }
    }

    if (!event.shiftKey) {
      this.currentSelectionSpan = [];
    }
    this.selectionChanged.emit(this.selections.map(i => this.items[i]));
    this.cdRef.detectChanges();
  }

  clearSelection() {
    if (this.selections.length) {
      this.selections = [];
      this.currentSelectionSpan = [];
      this.lastSingleSelection = null;
      this.selectionChanged.emit(this.selections.map(i => this.items[i]));
      this.cdRef.detectChanges();
    }
  }

  selectAll() {
    if (this.selections.length !== this.items.length) {
      this.selections = _.map(this.items, (item, i) => i);
      this.currentSelectionSpan = [];
      this.lastSingleSelection = null;
      this.selectionChanged.emit(this.items);
      this.cdRef.detectChanges();
    }
  }

  // handles "ctrl/command + a" to select all
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'a' &&
      (event.ctrlKey || event.metaKey) &&
      this.selections.length &&
      document.activeElement.nodeName !== 'INPUT'
    ) {
      event.preventDefault();
      this.selectAll();
    } else if (event.key === 'Escape' && this.dragging) {
      this.dragging.reset();
      document.dispatchEvent(new Event('mouseup'));
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.selections.length && !this.eRef.nativeElement.contains(event.target)) {
      this.clearSelection();
    }
  }

}
