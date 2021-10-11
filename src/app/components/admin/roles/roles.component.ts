import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss', '../admin.component.scss']
})
export class RolesComponent implements OnInit {
  isLoading = false;
  loaderMsg = '';
  editIndex = -1;

  rolesList: any = [];
  rightsList: any = [];
  roleForm: FormGroup;

  mode: any = {
    EDIT: 'edit',
    CREATE: 'create'
  };
  displayedColumns: string[] = ['name', 'display', 'rights', 'action'];

  @ViewChild(MatTable, { static: true }) roleTable: MatTable<any>;

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder
  ) { };

  ngOnInit() {
    this.getRightsList();
    this.initRoleForm({});
  }

  getRightsList() {
    this.http.getRightsList().subscribe((result: any) => {
      this.rightsList = result.rights ? result.rights : [];
      this.getRolesList();
    }, (error) => {
      this.rightsList = [];
      this.getRolesList();
    });
  }

  getRolesList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading role...';
    this.http.getRolesList().subscribe((result: any) => {
      this.rolesList = result.roles ? result.roles : [];
      this.roleTable.dataSource = this.rolesList;
      this.roleTable.renderRows();
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  createEditRole(role, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving role details...';
    this.http.createEditRole(role, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.getRolesList();
    }, (error) => {
      this.isLoading = false;
    });
  }

  compareRights(role1, role2) : boolean{
    return role1 && role2 ? role1.Value === role2.Value : role1 === role2;
  }

  initRoleForm(role: any) {
    this.roleForm = this.formBuilder.group({
      roleName: [role.roleName ? role.roleName : '', [Validators.required]],
      roleText: [role.roleText ? role.roleText : '', [Validators.required]],
      rights: [role.rights ? role.rights : '', [Validators.required]]
    });
  }

  addNewRole() {
    if (this.rolesList[0].mode !== this.mode.CREATE) {
      if (this.editIndex >= 0 && this.rolesList[this.editIndex]) {
        this.cancel(this.rolesList[this.editIndex]);
      }
      this.editIndex = 0;
      this.rolesList.unshift({
        edit: true,
        mode: this.mode.CREATE
      });
      this.roleTable.dataSource = this.rolesList;
      this.roleTable.renderRows();
      this.initRoleForm({});
    }
  }

  editRole(role, index) {
    if (this.editIndex >= 0 && this.rolesList[this.editIndex]) {
      if (this.rolesList[this.editIndex].mode === this.mode.CREATE) {
        index -= 1;
      }
      this.cancel(this.rolesList[this.editIndex]);
    }
    this.editIndex = index;
    role.edit = true;
    role.mode = this.mode.EDIT;
    this.initRoleForm(role);
  }

  saveRole(role) {
    this.editIndex = -1;
    role.edit = false;
    this.createEditRole(this.roleForm.value, role.mode);
  }

  cancel(role) {
    this.editIndex = -1;
    role.edit = false;
    if (role.mode === this.mode.CREATE) {
      this.rolesList.splice(0, 1);
      this.roleTable.dataSource = this.rolesList;
      this.roleTable.renderRows();
    }
  }

}