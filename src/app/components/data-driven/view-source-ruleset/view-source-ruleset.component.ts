import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-view-source-ruleset',
  templateUrl: './view-source-ruleset.component.html',
  styleUrls: ['./view-source-ruleset.component.scss']
})
export class ViewSourceRulesetComponent {
  @Input() summary: any = {};
  @Input() isSource: any = false;
  @Input() isRuleset: any = false;
  @Input() set rulesetValue(value: any) {
    this.ruleset = value;
  }

  title: any = '';
  ruleset: any = {};
  isDialog: boolean = false;

  constructor(public dialogRef: MatDialogRef<ViewSourceRulesetComponent>,
    public commonService: CommonService,
    @Inject(MAT_DIALOG_DATA) public data) {
    if (data.isSource) {
      this.summary = data.summary;
      this.isSource = data.isSource;
      this.isDialog = data.isDialog;
      this.title = 'Source';
    }
    if (data.isRuleset) {
      const list = data.selectedColumns || [];
      this.ruleset = data;
      data.selectedColumns = Object.assign(list.map((name: any) => ({ title: name })));
      this.isRuleset = data.isRuleset;
      this.isDialog = data.isDialog;
      this.title = 'Ruleset';
    }
  }

  onClose() {
    this.dialogRef.close();
  }

}
