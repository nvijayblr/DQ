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
  ruleOptionItem = '';
  ruleItem = '';
  selectedRule: any = [];
  showAdd = false;
  constructor() { }

  ngOnInit() {
    if (this.initValue) {
      if (this.ruleItems && this.ruleItems.length) {
        const isFound  = this.ruleItems.filter(item => item.value === this.initValue)[0];
        if (isFound) {
          this.initValue = isFound;
        } else {
          this.initValue = {
            value: this.initValue,
            label: this.initValue
          };
          this.ruleItems.push(this.initValue);
        }
      }
      if (!this.ruleItems || (this.ruleItems && !this.ruleItems.length)) {
        this.ruleItems = [];
        this.initValue = {
          value: this.initValue,
          label: this.initValue
        };
        this.ruleItems.push(this.initValue);
      }
      if (this.multiple) {
        this.selectedRule = this.initValue.label;
      } else {
        this.selectedRule = [this.initValue.label];
      }
      this.ruleOptionItem = this.initValue.value;
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
    if (this.multiple) {
      // this.selectedRule.push(this.ruleItem);
    } else {
      this.selectedRule = [this.ruleItem];
      this.ruleOptionItem = this.ruleItem;
      this.selectionChange.emit({value: this.ruleItem});
    }
    const ruleItem = {
      label: this.ruleItem,
      value: this.ruleItem,
      type: 'CUSTOM'
    };
    this.ruleItems.push(ruleItem);
  }

  deleteRuleItem(ev, rule) {
    ev.stopPropagation();
    ev.preventDefault();
    const index = this.ruleItems.findIndex(item => item.value === rule.value);
    this.ruleItems.splice(index, 1);
    if (this.multiple) {
      this.selectedRule.splice(index, 1);
    } else {
      this.selectedRule = [];
    }
    this.ruleItem = '';
  }

  showHideAddInput(isShow) {
    this.ruleItem = '';
    this.showAdd = isShow;
  }
}
