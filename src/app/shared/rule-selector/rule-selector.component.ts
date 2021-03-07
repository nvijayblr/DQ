import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rule-selector',
  templateUrl: './rule-selector.component.html',
  styleUrls: ['./rule-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RuleSelectorComponent implements OnInit {
  @Input() ruleItems: any = [];
  @Input() showAddItem = true;
  @Input() initValue: any;
  @Input() multiple = false;

  @Output() selectionChange = new EventEmitter<any>();
  ruleItem = '';
  selectedRule: any = [];
  showAdd = false;
  constructor() { }

  ngOnInit() {
    if (this.initValue) {
      if (this.multiple) {
        this.selectedRule = this.initValue;
      } else {
        this.selectedRule = [this.initValue];
      }
    }
    this.ruleItem = this.initValue;
  }

  modelChange(e) {
    if (!this.ruleItems) {
      this.ruleItems = [];
    }
    let selectedRule = [];
    this.selectedRule = [];
    if (this.multiple) {
      selectedRule = this.ruleItems.filter(rule => e.includes(rule.value));
    } else {
      selectedRule = this.ruleItems.filter(rule => rule.value === e);
    }
    selectedRule.map(rule => {
      this.selectedRule.push(rule.label);
    });

    this.selectionChange.emit({value: e});
  }

  addRuleItem(selectedRule) {
    this.selectedRule = {
      label: this.ruleItem,
      value: this.ruleItem,
      type: 'CUSTOM'
    };
    this.ruleItems.push(this.selectedRule);
  }

  deleteRuleItem(ev, rule) {
    ev.stopPropagation();
    ev.preventDefault();
    const index = this.ruleItems.findIndex(item => item.value === rule.value);
    this.ruleItems.splice(index, 1);
    this.selectedRule = {};
    this.ruleItem = '';
  }

  showHideAddInput(isShow) {
    this.showAdd = isShow;
  }
}
