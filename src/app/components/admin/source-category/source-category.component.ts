import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';
import { CreateEditSourceCategoryComponent } from './create-edit-source-category/create-edit-source-category.component';

@Component({
  selector: 'app-source-category',
  templateUrl: './source-category.component.html',
  styleUrls: ['./source-category.component.scss']
})

export class SourceCategoryComponent implements OnInit {
  isLoading = false;
  loaderMsg = '';
  categoryList: any = [];
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
     this.getCategoryList();
   }

   getDepartmentsList() {
    this.http.getDepartmentsList().subscribe((result: any) => {
      this.departmentsList = result.department ? result.department : [];
    }, (error) => {
    });
  }

   getCategoryList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading category...';
    this.http.getSourceCategoryList().subscribe((result: any) => {
      this.categoryList = result.categoryList ? result.categoryList : [];
      this.isLoading = false;
    }, (error) => {
       this.isLoading = false;
    });
  }

  createEditCategory(category, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving category details...';
    this.http.createEditSourceCategory(category, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.getCategoryList();
    }, (error) => {
      this.isLoading = false;
    });
  }

  showAddEditCategory(category, mode) {
    const dialogRef = this.dialog.open(CreateEditSourceCategoryComponent, {
        width: '450px',
        data: {category: category ? category : {}, mode, departmentsList: this.departmentsList}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createEditCategory(result.category, result.mode);
      }
     });
   }

}
