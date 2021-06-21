import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-create-edit-category',
  templateUrl: './create-edit-category.component.html',
  styleUrls: ['./create-edit-category.component.scss']
})
export class CreateEditCategoryComponent implements OnInit {
  catForm: FormGroup;
  colorCtr: FormGroup;
  formVal: any = [];
  dept: any = {};
  mode = '';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.dept = this.data.dept;
    this.mode = this.data.mode;
    this.catForm = this.fb.group({
      label: [this.dept.label, [Validators.required]],
      value: [this.dept.value, [Validators.required]],
    });
  }

  saveDept() {
    this.catForm.markAllAsTouched();
    if (!this.catForm.valid) {
      return;
    }
    this.dialogRef.close({dept: this.catForm.value, mode: this.mode});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
