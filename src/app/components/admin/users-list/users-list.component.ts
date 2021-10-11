import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss', '../admin.component.scss']
})
export class UsersListComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  editIndex = -1;
  usersList: any = [];
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
  mode: any = {
    EDIT: 'edit',
    CREATE: 'create'
  };
  displayedColumns: string[] = ['userName', 'name', 'role', 'category', 'type', 'department', 'email', 'password', 'status', 'action'];

  @ViewChild(MatTable, { static: true }) userTable: MatTable<any>;

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder
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
      this.usersList = result.userList ? result.userList : [];
      this.userTable.dataSource = this.usersList;
      this.userTable.renderRows();
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
      this.getUsersList();
      alert('User detail saved successfully');
    }, (error) => {
      this.isLoading = false;
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

  addNewUser() {
    if (this.usersList[0].mode !== this.mode.CREATE) {
      if (this.editIndex >= 0 && this.usersList[this.editIndex]) {
        this.cancel(this.usersList[this.editIndex]);
      }
      this.editIndex = 0;
      this.usersList.unshift({
        edit: true,
        mode: this.mode.CREATE
      });
      this.userTable.dataSource = this.usersList;
      this.userTable.renderRows();
      this.initUserForm({});
    }
  }

  editUser(user, index) {
    if (this.editIndex >= 0 && this.usersList[this.editIndex]) {
      if (this.usersList[this.editIndex].mode === this.mode.CREATE) {
        index -= 1;
      }
      this.cancel(this.usersList[this.editIndex]);
    }
    this.editIndex = index;
    user.edit = true;
    user.mode = this.mode.EDIT;
    this.initUserForm(user);
  }

  saveUser(user) {
    this.editIndex = -1;
    user.edit = false;
    this.createEditUser(this.userForm.value, user.mode);
  }
  
  cancel(user) {
    this.editIndex = -1;
    user.edit = false;
    if (user.mode === this.mode.CREATE) {
      this.usersList.splice(0, 1);
      this.userTable.dataSource = this.usersList;
      this.userTable.renderRows();
    }
  }

}