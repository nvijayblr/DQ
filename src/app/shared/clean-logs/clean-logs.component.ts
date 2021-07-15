import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as _ from 'lodash';

@Component({
  selector: 'app-clean-logs',
  templateUrl: './clean-logs.component.html',
  styleUrls: ['./clean-logs.component.scss']
})
export class CleanLogsComponent implements OnInit {
  cleanLogSource;
  cleanLogDetails: any = [];
  constructor(public dialogRef: MatDialogRef<CleanLogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,) { }
  
    ngOnInit() {
      this.cleanLogSource = this.data.Preview[0];
      this.cleanLogDetails.push(_.values(this.data.Preview));
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    closeSettings() {
      this.dialogRef.close();
    }

}
