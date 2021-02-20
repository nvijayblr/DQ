import { Component, Input, ViewEncapsulation, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-column-selector',
  templateUrl: './column-selector.component.html',
  styleUrls: ['./column-selector.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ColumnSelectorComponent implements ControlValueAccessor {
    @Input() availableColumnsLabel: string;
    @Input() selectedColumnsLabel: string;
    @Input() availableColumns = [];
    @Input() selectedColumns = [];

    selectedAvailableItems = [];
    selectedSelectedItems = [];
    lastSelectedItemIndex = 0;
    isDisabled = false;

    constructor(@Self() @Optional() public ngControl: NgControl) {
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }

    writeValue(selectedcolumns: any) {
        if (Array.isArray(selectedcolumns)) {
            this.selectedColumns = selectedcolumns;
        }
    }

    registerOnChange(fn: any) { }

    registerOnTouched(fn: any) { }

    selectedItemIndexChanged($event) {
        this.lastSelectedItemIndex = $event;
    }

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;
    }

    availableSelectionChanged(ev) {
        this.selectedAvailableItems = ev;
    }

    selectedSelectionChanged(ev) {
        this.selectedSelectedItems = ev;
    }

    selectedColumnOrderChanged(selectedColumnsFromList) {
        this.selectedColumns = this.rebuildId(selectedColumnsFromList);
        this.ngControl.control.setValue(this.selectedColumns);
    }

    droppedInToSelectedColumns() {
        this.selectedColumns = this.rebuildId(this.selectedColumns);
        this.ngControl.control.setValue(this.selectedColumns);
    }

    droppedInToAvailableColumns() {
        this.availableColumns = this.rebuildId(this.availableColumns);
        this.ngControl.control.setValue(this.selectedColumns);
    }

    moveItemsToSelected() {
        this.availableColumns = this.getupdatedSourceColumns(this.availableColumns, this.selectedAvailableItems);
        this.selectedColumns = this.getupdatedDestinationColumns(this.selectedColumns, this.selectedAvailableItems);
        this.selectedAvailableItems = [];
        this.ngControl.control.setValue(this.selectedColumns);
    }

    moveItemsToAvailable() {
        this.selectedColumns = this.getupdatedSourceColumns(this.selectedColumns, this.selectedSelectedItems);
        this.availableColumns = this.getupdatedDestinationColumns(this.availableColumns, this.selectedSelectedItems, true);
        this.selectedSelectedItems = [];
        this.ngControl.control.setValue(this.selectedColumns);
    }

    moveAllItemsToSelected() {
        this.selectedColumns = this.getupdatedDestinationColumns(this.selectedColumns, this.availableColumns);
        this.availableColumns = [];
        this.ngControl.control.setValue(this.selectedColumns);
    }

    moveAllItemsToAvaiable() {
        this.availableColumns = this.getupdatedDestinationColumns(this.availableColumns, this.selectedColumns, true);
        this.selectedColumns = [];
        this.ngControl.control.setValue(this.selectedColumns);
    }

    getupdatedSourceColumns(sourceColumns, selectedItemFromList) {
        const selectedItemIds = selectedItemFromList.map(obj => obj.id);
        sourceColumns = sourceColumns.filter(obj => selectedItemIds.indexOf(obj.id) < 0);
        sourceColumns = this.rebuildId(sourceColumns);
        return sourceColumns;
    }

    getupdatedDestinationColumns(destinationColumns, selectedItemFromList, sortDestination = false) {
        if (sortDestination) {
            destinationColumns.push(...selectedItemFromList);
            destinationColumns = destinationColumns.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            destinationColumns.splice(this.lastSelectedItemIndex, 0, ...selectedItemFromList);
        }
        destinationColumns = this.rebuildId(destinationColumns);
        return destinationColumns;
    }

    rebuildId(columns: any) {
        return columns.map((obj, index) => {
            obj.id = index + 1;
            return obj;
        });
    }
}
