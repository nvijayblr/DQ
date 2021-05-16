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
  roleList: any = [];
  deptList: any = [];
  userTypes: any = [{
    label: 'DATA_OWNER',
    value: 'DATA_OWNER'
  }, {
    label: 'DATA_USER',
    value: 'DATA_USER'
  }, {
    label: 'DATA_STEWARD',
    value: 'DATA_STEWARD'
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
    const roleList = this.data.rolesList;
    const deptList = this.data.departmentsList;
    roleList.map(role => {
      this.roleList.push({
        label: role.roleText,
        value: role.roleName,
      });
    });
    deptList.map(dept => {
      this.deptList.push({
        label: dept.Display,
        value: dept.Name,
      });
    });
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      userName: [this.user.userName, [Validators.required]],
      password: [this.user.password, [Validators.required]],
      role: [this.user.role, [Validators.required]],
      type: [this.user.type, [Validators.required]],
      department: [this.user.department],
      status: [this.user.status, [Validators.required]],
    });
  }

  get fc() {
    return this.userForm.controls;
  }

  saveUser() {
    this.userForm.markAllAsTouched();
    console.log(this.userForm.controls.type.errors.required);
    if (!this.userForm.valid) {
      return;
    }
    this.dialogRef.close({user: this.userForm.value, mode: this.mode});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
