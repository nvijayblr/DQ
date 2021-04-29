import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';
import { CreateEditDeptComponent } from './create-edit-dept/create-edit-dept.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  departmentsList: any = [];

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router) {
   }

   ngOnInit() {
     this.getDepartmentsList();
   }


   getDepartmentsList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading departments...';
    this.http.getDepartmentsList().subscribe((result: any) => {
      this.departmentsList = result.department ? result.department : [];
      this.isLoading = false;
    }, (error) => {
       this.isLoading = false;
    });
  }

  createEditDept(dept, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving department details...';
    this.http.createEditDepartment(dept, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.getDepartmentsList();
    }, (error) => {
      this.isLoading = false;
    });
  }

  showAddEditDept(dept, mode) {
    const dialogRef = this.dialog.open(CreateEditDeptComponent, {
        width: '450px',
        data: {dept: dept ? dept : {}, mode}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createEditDept(result.dept, result.mode);
      }
     });
   }

}
