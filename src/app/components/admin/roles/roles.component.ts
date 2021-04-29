import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';
import { CreateEditRoleComponent } from './create-edit-role/create-edit-role.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  rolesList: any = [];

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router) {
   }

   ngOnInit() {
     this.getRolesList();
   }


   getRolesList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading role...';
    this.http.getRolesList().subscribe((result: any) => {
      this.rolesList = result.roles ? result.roles : [];
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

  showAddEditRole(role, mode) {
    const dialogRef = this.dialog.open(CreateEditRoleComponent, {
        width: '450px',
        data: {role: role ? role : {}, mode}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createEditRole(result.role, result.mode);
      }
     });
   }

}
