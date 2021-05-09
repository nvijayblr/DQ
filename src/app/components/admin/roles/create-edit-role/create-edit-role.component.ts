import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-create-edit-role',
  templateUrl: './create-edit-role.component.html',
  styleUrls: ['./create-edit-role.component.scss']
})
export class CreateEditRoleComponent implements OnInit {
  roleForm: FormGroup;
  colorCtr: FormGroup;
  formVal: any = [];
  role: any = {};
  rightsList: any = [];
  mode = '';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEditRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.role = this.data.role;
    this.rightsList = this.data.rights;

    const rights = [];
    if (this.role.rights) {
      this.role.rights.map(right => {
        rights.push(right.Value);
      });
    }

    this.mode = this.data.mode;
    this.roleForm = this.fb.group({
      roleName: [this.role.roleName, [Validators.required]],
      roleText: [this.role.roleText, [Validators.required]],
      // status: [this.role.status, [Validators.required]],
      rights: [rights, [Validators.required]]
    });
  }

  saveRole() {
    this.roleForm.markAllAsTouched();
    if (!this.roleForm.valid) {
      return;
    }
    this.dialogRef.close({role: this.roleForm.value, mode: this.mode});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
