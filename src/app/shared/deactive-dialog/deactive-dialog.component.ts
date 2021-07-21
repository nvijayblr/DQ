import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deactive-dialog',
  templateUrl: './deactive-dialog.component.html',
  styleUrls: ['./deactive-dialog.component.scss']
})
export class DeactiveDialogComponent implements OnInit {

  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<DeactiveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeactiveDialogComponent) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}
