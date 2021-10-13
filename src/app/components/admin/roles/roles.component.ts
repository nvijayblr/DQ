import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatSort } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['../admin.component.scss']
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
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    private service: AdminService
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

  compareRights(role1, role2): boolean {
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
    this.editIndex = this.service.addNew(this.rolesList, this.roleTable, this.editIndex);
    this.initRoleForm({});
  }

  editRole(department, index) {
    this.editIndex = this.service.editRow(department, index, this.rolesList, this.roleTable, this.editIndex);
    this.initRoleForm(department);
  }

  saveRole(department) {
    this.createEditRole(this.roleForm.value, department.mode);
  }

  cancel(role) {
    this.editIndex = this.service.cancel(role, this.rolesList, this.roleTable, this.editIndex);
  }

  sortData(sort: MatSort) {
    this.service.onSortData(sort, this.rolesList, this.roleTable);
  }

}