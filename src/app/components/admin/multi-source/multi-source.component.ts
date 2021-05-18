import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';
import { CreateEditMultiSourceComponent } from './create-edit-multi-source/create-edit-multi-source.component';

@Component({
  selector: 'app-multi-source',
  templateUrl: './multi-source.component.html',
  styleUrls: ['./multi-source.component.scss']
})
export class MultiSourceComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  multisourceList: any = [];

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router) {
   }

   ngOnInit() {
     this.getSourceList();
   }


   getSourceList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading multisource...';
    this.http.getMultisourceList().subscribe((result: any) => {
      this.multisourceList = result.multiSourceList ? result.multiSourceList : [];
      this.isLoading = false;
    }, (error) => {
       this.isLoading = false;
    });
  }

  createEditMultisource(source, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving multisource details...';
    this.http.createEditMultisource(source, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.getSourceList();
    }, (error) => {
      this.isLoading = false;
    });
  }

  showAddEditSource(source, mode) {
    const dialogRef = this.dialog.open(CreateEditMultiSourceComponent, {
        width: '450px',
        data: {source: source ? source : {}, mode}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createEditMultisource(result.source, result.mode);
      }
     });
   }

}

