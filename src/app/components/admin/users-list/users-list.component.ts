import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AdminService } from '../admin.service';
import { AlertService } from '../../../shared/alert-dialog/alert-dialog.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['../admin.component.scss']
})
export class UsersListComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  editIndex = -1;

  usersList = new MatTableDataSource();
  rolesList: any = [];
  departmentsList: any = [];
  categoryList: any = [];

  roleTextList: any = {};
  departTextList: any = {};
  categoryTextList: any = {};
  userForm: FormGroup;

  userTypes: any = {
    DATA_OWNER: 'Data Owner',
    DATA_USER: 'Data User',
    DATA_STEWARD: 'Data Steward'
  };
  displayedColumns: string[] = ['userName', 'name', 'role', 'category', 'type', 'department', 'email', 'password', 'status', 'action'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    public service: AdminService,
    private alertService : AlertService
  ) { };

  ngOnInit() {
    this.getRolesList();
    this.getDepartmentsList();
    this.getCategoryList();
    this.getUsersList();
    this.initUserForm({});
  }

  getRolesList() {
    this.http.getRolesList().subscribe((result: any) => {
      this.rolesList = result.roles ? result.roles : [];
      this.getRoleTextList();
    }, (error) => {
    });
  }

  getDepartmentsList() {
    this.http.getDepartmentsList().subscribe((result: any) => {
      this.departmentsList = result.department ? result.department : [];
      this.getDepartTextList();
    }, (error) => {
    });
  }

  getCategoryList() {
    this.http.getCategoryList().subscribe((result: any) => {
      this.categoryList = result.categoryList ? result.categoryList : [];
      this.getCategoryTextList();
    }, (error) => {
    });
  }

  getUsersList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading users...';
    this.http.getUsersList().subscribe((result: any) => {
      this.usersList.data = result.userList ? result.userList : [];
      this.usersList.sort = this.sort;
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  createEditUser(user, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving user details...';
    user.isDashboardNotification = 1;
    user.isEMailNotification = 1;
    this.http.createEditUser(user, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.editIndex = -1;
      this.getUsersList();
      this.alertService.showAlert('User detail saved successfully');
    }, (error) => {
      this.isLoading = false;
      this.alertService.showError('Unable to save the user details');
    });
  }

  getRoleTextList() {
    this.rolesList.map(role => {
      this.roleTextList[role.roleName] = role.roleText;
    });
  }

  getDepartTextList() {
    this.departmentsList.map(d => {
      this.departTextList[d.name] = d.Display;
    });
  }

  getCategoryTextList() {
    this.categoryList.map(c => {
      this.categoryTextList[c.value] = c.label;
    });
  }

  initUserForm(user: any) {
    this.userForm = this.formBuilder.group({
      name: [user.name ? user.name : '', [Validators.required]],
      email: [user.email ? user.email : '', [Validators.required, Validators.email]],
      userName: [user.userName ? user.userName : '', [Validators.required]],
      password: [user.password ? user.password : '', [Validators.required]],
      role: [user.role ? user.role : '', [Validators.required]],
      type: [user.type ? user.type : '', [Validators.required]],
      department: [user.department ? user.department : ''],
      status: [user.status ? user.status : '', [Validators.required]],
      userCategory: [user.userCategory ? user.userCategory : '', [Validators.required]],
    });
  }

  doFilter(value: string) {
    this.usersList.filter = value.trim().toLocaleLowerCase();
  }

  addNewUser() {
    this.editIndex = this.service.addNew(this.usersList, this.editIndex);
    this.initUserForm({});
  }

  editUser(user, index) {
    this.editIndex = this.service.editRow(user, index, this.usersList, this.editIndex);
    this.initUserForm(user);
  }

  saveUser(user) {
    this.createEditUser(this.userForm.value, user.mode);
  }

  cancel(user) {
    this.editIndex = this.service.cancel(user, this.usersList, this.editIndex);
  }

}