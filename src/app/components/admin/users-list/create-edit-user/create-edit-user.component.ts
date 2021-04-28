import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent implements OnInit {
  userForm: FormGroup;
  colorCtr: FormGroup;
  formVal: any = [];
  user: any = {};
  mode = '';
  roleList = [{
    label: 'Admin',
    value: 'DQ_ADMIN',
  }, {
    label: 'Rule Analyst',
    value: 'DQ_MANAGER',
  }, {
    label: 'Source Manager',
    value: 'DQ_SOURCE_MANAGER',
  }, {
    label: 'Rule Manager',
    value: 'DQ_RULE_MANAGER',
  }, {
    label: 'Operation Analyst',
    value: 'DQ_OPERATION',
  }, {
    label: 'Viewer',
    value: 'DQ_VIEWER',
  }];

  deptList = [{
    value: 'DEPT-1',
    label: 'Department 1'
  }, {
    value: 'DEPT-2',
    label: 'Department 2'
  }, {
    value: 'DEPT-3',
    label: 'Department 3'
  }];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.user = this.data.user;
    this.mode = this.data.mode;
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      userName: [this.user.userName, [Validators.required]],
      password: [this.user.password, [Validators.required]],
      role: [this.user.role, [Validators.required]],
      department: [this.user.department],
      status: [this.user.status, [Validators.required]],
    });
  }

  saveUser() {
    this.userForm.markAllAsTouched();
    if (!this.userForm.valid) {
      return;
    }
    this.dialogRef.close({user: this.userForm.value, mode: this.mode});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
