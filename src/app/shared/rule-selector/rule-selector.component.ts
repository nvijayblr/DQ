import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rule-selector',
  templateUrl: './rule-selector.component.html',
  styleUrls: ['./rule-selector.component.scss']
})
export class RuleSelectorComponent implements OnInit {
  @Input() ruleItems: any;
  // @Input() chartType;
  @Output() selectionChange = new EventEmitter<any>();
  ruleItem = '';
  selectedRule: any = {};
  constructor() { }

  ngOnInit() {
  }

  modelChange(e) {
    this.selectedRule = this.ruleItems.filter(rule => rule.value === e)[0];
    this.selectionChange.emit({value: e});
    if (this.selectedRule) {
    }
  }

  addRuleItem() {
    this.selectedRule = {
      label: this.ruleItem,
      value: this.ruleItem,
      type: 'CUSTOM'
    };
    this.ruleItems.push(this.selectedRule);
  }

  deleteRuleItem(rule) {
    const index = this.ruleItems.findIndex(item => item.value === rule.value);
    this.ruleItems.splice(index, 1);
    this.selectedRule = {};
    this.ruleItem = '';
  }
}
