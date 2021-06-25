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
  category: any = {};
  mode = '';
  deptList = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    const deptList = this.data.departmentsList;
    deptList.map(dept => {
      this.deptList.push({
        label: dept.Display,
        value: dept.Name,
      });
    });

    this.category = this.data.category;
    this.mode = this.data.mode;
    this.catForm = this.fb.group({
      label: [this.category.label, [Validators.required]],
      value: [this.category.value, [Validators.required]],
      department: [this.category.department, [Validators.required]],
    });
  }

  get fc() {
    return this.catForm.controls;
  }

  saveCategory() {
    this.catForm.markAllAsTouched();
    if (!this.catForm.valid) {
      return;
    }
    this.dialogRef.close({category: this.catForm.value, mode: this.mode});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
