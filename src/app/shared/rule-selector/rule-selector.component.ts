import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rule-selector',
  templateUrl: './rule-selector.component.html',
  styleUrls: ['./rule-selector.component.scss']
})
export class RuleSelectorComponent implements OnInit {
  @Input() ruleItems: any = [];
  @Input() showAddItem = true;

  @Output() selectionChange = new EventEmitter<any>();
  ruleItem = '';
  selectedRule: any = {};
  showAdd = false;
  constructor() { }

  ngOnInit() {
  }

  modelChange(e) {
    if (!this.ruleItems) {
      this.ruleItems = [];
    }
    const selectedRule = this.ruleItems.filter(rule => rule.value === e);
    this.selectedRule = selectedRule ? selectedRule[0] : {};
    this.selectionChange.emit({value: e});
    if (this.selectedRule) {
    }
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
