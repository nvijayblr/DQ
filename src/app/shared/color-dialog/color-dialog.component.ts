import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
// import { Color } from '@angular-material-components/color-picker';

@Component({
  selector: 'app-color-dialog',
  templateUrl: './color-dialog.component.html',
  styleUrls: ['./color-dialog.component.scss']
})
export class ColorDialogComponent implements OnInit {
   settingsForm: FormGroup;
   public colorTemplate: ThemePalette = 'primary';
   public touchUi = false;
   colorCtr: FormGroup;
   formVal: any = [];

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
         bgSettings: this.fb.array([]),
      });
      const bgSettings = this.settingsForm.controls.bgSettings as FormArray;
      const bgList = this.data.bgSettings || [];
      console.log(bgList);
      bgList.map(bg => {
         bgSettings.push(this.intiFormArrays('bgSettings', bg));
      });
      // Object.keys(this.settingsForm.controls).forEach((key: string) => {
      //    this.formVal = this.settingsForm.controls[key].value;
      //    console.log(this.formVal);
      // });

   }

  intiFormArrays(field, value: any = {}) {
    if (field === 'bgSettings') {
      const tColor = this.hexToRgb(value.color);
      return this.fb.group({
        min: [value.min, [Validators.required]],
        max: [value.max, [Validators.required]],
        // color: [new Color(tColor.r, tColor.g, tColor.b), [Validators.required]]
        color: [tColor.r, tColor.g, tColor.b, [Validators.required]]
      });
    }
  }

  hexToRgb(hex) {
    console.log(hex);
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
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
    const { bgSettings } = this.settingsForm.value;
    const settings = bgSettings.map((setting) => {
      return {
        ...setting,
        color: `#${setting.color.hex}`
      };
    });
    this.dialogRef.close({bgSettings: settings});
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
