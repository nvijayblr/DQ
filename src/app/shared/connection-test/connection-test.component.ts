import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-connection-test',
  templateUrl: './connection-test.component.html',
  styleUrls: ['./connection-test.component.scss']
})
export class ConnectionTestComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConnectionTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,) { }

  ngOnInit() {
    console.log('DATA', this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  closeSettings() {
    this.dialogRef.close();
  }

}
