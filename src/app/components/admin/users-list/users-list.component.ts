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

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router) {
   }

   ngOnInit() {
     this.getUsersList();
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

  createNewUser() {
    this.isLoading = true;
    this.loaderMsg = 'Create new user...';
    const payload = {
      userName: 'analyst',
      password: 'analyst'
    };
    this.http.createUser(payload).subscribe((result: any) => {
        this.isLoading = false;
    }, (error) => {
        this.isLoading = false;
    });
  }

   showAddEditUser(user, mode) {
      const dialogRef = this.dialog.open(CreateEditUserComponent, {
         width: '450px',
         data: {user: user ? user : {}, mode}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
        }
     });
   }

}
