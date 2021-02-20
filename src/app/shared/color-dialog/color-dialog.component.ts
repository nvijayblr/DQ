import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
   animal: string;
   name: string;
   minValue: number;
   maxValue: number;
   colorValue: string;
 }

@Component({
  selector: 'app-color-dialog',
  templateUrl: './color-dialog.component.html',
  styleUrls: ['./color-dialog.component.scss']
})
export class ColorDialogComponent {
   constructor(
      public dialogRef: MatDialogRef<ColorDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
   
   numberOnly(event): boolean {
   const charCode = (event.which) ? event.which : event.keyCode;
   if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      return false;
   }
   return true;
   }
 
}
