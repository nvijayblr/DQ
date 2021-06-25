import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  usersList: any = [];
  rolesList: any = [];
  departmentsList: any = [];
  categoryList: any = [];

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router) {
   }

   ngOnInit() {
    this.getRolesList();
    this.getDepartmentsList();
    this.getCategoryList();
    this.isLoading = true;
    this.loaderMsg = 'Loading users...';
    setTimeout(() => {
      this.getUsersList();
    }, 1000);
  }

   getRolesList() {
    this.http.getRolesList().subscribe((result: any) => {
      this.rolesList = result.roles ? result.roles : [];
    }, (error) => {
    });
  }

  getDepartmentsList() {
    this.http.getDepartmentsList().subscribe((result: any) => {
      this.departmentsList = result.department ? result.department : [];
    }, (error) => {
    });
  }

  getCategoryList() {
    this.http.getCategoryList().subscribe((result: any) => {
      this.categoryList = result.categoryList ? result.categoryList : [];
    }, (error) => {
    });
  }


   getUsersList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading users...';
    this.http.getUsersList().subscribe((result: any) => {
      this.usersList = result.userList ? result.userList : [];
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
    }, (error) => {
      this.isLoading = false;
    });
  }

  showAddEditUser(user, mode) {
    const dialogRef = this.dialog.open(CreateEditUserComponent, {
        width: '450px',
        data: {
          user: user ? user : {},
          mode,
          rolesList: this.rolesList,
          departmentsList: this.departmentsList,
          categoryList: this.categoryList
        }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createEditUser(result.user, result.mode);
      }
    });
  }

}
