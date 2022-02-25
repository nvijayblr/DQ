import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as _ from 'lodash';

@Component({
  selector: 'app-clean-logs',
  templateUrl: './clean-logs.component.html',
  styleUrls: ['./clean-logs.component.scss']
})
export class CleanLogsComponent implements OnInit {
  cleanLogSource: MatTableDataSource<any>;
  cleanLogDetails: any = {};
  displayedColumns = ["processTime", "action"];

  constructor(public dialogRef: MatDialogRef<CleanLogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
    this.cleanLogDetails = this.data[0] || {};
    this.cleanLogSource = new MatTableDataSource(this.data || []);
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
