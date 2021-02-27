import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-color-dialog',
  templateUrl: './color-dialog.component.html',
  styleUrls: ['./color-dialog.component.scss']
})
export class ColorDialogComponent implements OnInit {
   settingsForm: FormGroup;
   public color: ThemePalette = 'primary';
   public touchUi = false;
   colorCtr: AbstractControl = new FormControl(null);

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ColorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

   ngOnInit(): void {
    this.settingsForm = this.fb.group({
      bgSettings: this.fb.array([])
    });
      const bgSettings = this.settingsForm.controls.bgSettings as FormArray;
      const bgList = this.data.bgSettings || [];
      console.log(bgList);
     bgList.map(bg => {
      bgSettings.push(this.intiFormArrays('bgSettings', bg));
    });
  }

   intiFormArrays(field, value: any = {}) {
     if (field === 'bgSettings') {
      return this.fb.group({
        min: [value.min, [Validators.required]],
        max: [value.max, [Validators.required]],
        color: [value.color, [Validators.required]]
      });
    }
  }

  addFormItem(arrayName) {
    const fbArray = this.settingsForm.get(arrayName) as FormArray;
    fbArray.push(this.intiFormArrays(arrayName));
  }

  removeFormItem(arrayName, index) {
    const fbArray = this.settingsForm.get(arrayName) as FormArray;
    fbArray.removeAt(index);
  }

  closeSettings() {
    this.settingsForm.markAllAsTouched();
    if (!this.settingsForm.valid) {
      return;
    }
     this.dialogRef.close(this.settingsForm.value);
     console.log(this.colorCtr.value.hex);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
