import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
   incompleteCDE;
}

@Component({
  selector: 'app-completeness-dialog',
  templateUrl: './completeness-dialog.component.html',
  styleUrls: ['./completeness-dialog.component.scss']
})
export class CompletenessDialogComponent implements OnInit {
   
   constructor(public dialogRef: MatDialogRef<CompletenessDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
   
  
  ngOnInit() {
  }
  onNoClick(): void {
   this.dialogRef.close();
 }

}
