import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
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
  rightsList: any = [];
  rightsListAll: any = [];

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router,
      private cd: ChangeDetectorRef) {
   }

   ngOnInit() {
      this.getRightsList();
   }


   getRightsList() {
    this.http.getRightsList().subscribe((result: any) => {
      const rightsList = result.rights ? result.rights : [];
      this.rightsListAll = result.rights ? result.rights : [];
      this.rightsList = rightsList.map(rights => {
        return {
          value: rights.Value,
          label: rights.Text,
        };
      });
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
        data: {role: role ? role : {}, mode, rights: this.rightsList}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const rights = result.role.rights;
        const selectedRights = [];
        rights.map(right => {
          selectedRights.push(this.rightsListAll.filter(rlist => rlist.Value === right)[0]);
        });
        result.role.rights = selectedRights;
        this.createEditRole(result.role, result.mode);
      }
     });
   }

   showHideAssignRights(role, isShow) {
    this.rolesList.map(r => {
      r.isShowRights = false;
    });
    this.rightsList.map(r => {
      r.selected = false;
    });
    role.isShowRights = isShow;
    role.rightsList = [...this.rightsList];
    if (isShow) {
      if (role.rights && role.rights.length) {
        role.rightsList.map(rlist => {
          const rights = role.rights.filter(right => rlist.value === right.Value);
          if (rights.length) {
            rlist.selected = true;
          }
        });
        // this.cd.detectChanges();
      }
    }
   }

   onRightClick(right) {
     right.selected = !right.selected;
   }

   saveRights(role) {
    role.isShowRights = false;
    const selectedRights = [];
    role.rightsList.map(right => {
      if (right.selected) {
        selectedRights.push({
          Value: right.value,
          Text: right.label
        });
      }
    });
    role.rights = selectedRights;
    this.createEditRole(role, 'edit');
   }

}
