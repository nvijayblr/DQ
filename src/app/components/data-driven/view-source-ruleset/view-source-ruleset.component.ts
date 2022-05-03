import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-source-ruleset',
  templateUrl: './view-source-ruleset.component.html',
  styleUrls: ['./view-source-ruleset.component.scss']
})
export class ViewSourceRulesetComponent {
  @Input() summary: any = {};
  @Input() isSource: any = false;
  @Input() analysis: any = {};
  @Input() ruleset: any = {};
  @Input() rulesList: any = {};
  @Input() selectedColumns: any = [];
  @Input() isRuleset: any = false;

  title: any = '';
  isDialog: boolean = false;

  constructor(public dialogRef: MatDialogRef<ViewSourceRulesetComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    if (data.isSource) {
      this.summary = data.summary;
      this.isSource = data.isSource;
      this.isDialog = data.isDialog;
      this.title = 'Source';
    }
    if (data.isRuleset) {
      this.analysis = data.analysis;
      this.ruleset = data.ruleset;
      this.isRuleset = data.isRuleset;
      this.isDialog = data.isDialog;
      this.title = 'Ruleset';
      if (data.ruleset) {
        const list = data.ruleset.selectedColumns || [];
        this.selectedColumns = Object.assign(list.map((name: any) => ({ title: name })));
        this.rulesList = data.ruleset.ruleset || [];
      }
    }
  }

  onClose() {
    this.dialogRef.close();
  }

}
