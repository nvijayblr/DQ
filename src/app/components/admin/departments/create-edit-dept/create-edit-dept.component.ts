import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-create-edit-dept',
  templateUrl: './create-edit-dept.component.html',
  styleUrls: ['./create-edit-dept.component.scss']
})
export class CreateEditDeptComponent implements OnInit {
  deptForm: FormGroup;
  colorCtr: FormGroup;
  formVal: any = [];
  dept: any = {};
  mode = '';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEditDeptComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.dept = this.data.dept;
    this.mode = this.data.mode;
    this.deptForm = this.fb.group({
      departName: [this.dept.Name, [Validators.required]],
      departText: [this.dept.Display, [Validators.required]],
      status: [this.dept.status, [Validators.required]],
    });
  }

  saveDept() {
    this.deptForm.markAllAsTouched();
    if (!this.deptForm.valid) {
      return;
    }
    this.dialogRef.close({dept: this.deptForm.value, mode: this.mode});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
