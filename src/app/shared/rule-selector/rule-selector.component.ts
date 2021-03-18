import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rule-selector',
  templateUrl: './rule-selector.component.html',
  styleUrls: ['./rule-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RuleSelectorComponent implements OnInit {
  @ViewChild('ruleSelect', {static: true}) ruleSelect;

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
    if (this.initValue && !this.multiple) {
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
      this.selectedRule = [this.initValue.label];
      this.ruleOptionItem = this.initValue.value;
    }
    if (this.initValue && this.multiple) {
      this.initValue.map(initItem => {
        if (this.ruleItems && this.ruleItems.length) {
          const isFound  = this.ruleItems.filter(item => item.value === initItem)[0];
          if (!isFound) {
            initItem = {
              value: initItem,
              label: initItem
            };
            this.ruleItems.push(initItem);
          }
        }
      });
      this.selectedRule = this.initValue;
      this.ruleOptionItem = this.initValue;
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
    const isItemFound = this.ruleItems.filter(item => item.value === this.ruleItem);
    if (isItemFound.length) {
      alert('The value already found in the list.');
      return;
    }

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
    this.showHideAddInput(false);
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
    this.ruleSelect.close();
    this.ruleItem = '';
    this.showAdd = isShow;
  }
}
