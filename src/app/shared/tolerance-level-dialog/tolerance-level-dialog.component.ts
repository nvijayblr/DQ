import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tolerance-level-dialog',
  templateUrl: './tolerance-level-dialog.component.html',
  styleUrls: ['./tolerance-level-dialog.component.scss']
})
export class ToleranceLevelDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ToleranceLevelDialogComponent>,) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  closeSettings() {
    this.dialogRef.close();
  }
}
