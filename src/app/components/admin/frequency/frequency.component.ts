import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';
import { CreateEditFrequencyComponent } from './create-edit-frequency/create-edit-frequency.component';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.scss']
})
export class FrequencyComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  frequencyList: any = [];

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router) {
   }

   ngOnInit() {
     this.getFrequencyList();
   }


   getFrequencyList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading frequency...';
    this.http.getFrequencyList().subscribe((result: any) => {
      this.frequencyList = result.frequencyList ? result.frequencyList : [];
      this.isLoading = false;
    }, (error) => {
       this.isLoading = false;
    });
  }

  createEditFrequency(frequency, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving frequency details...';
    this.http.createEditFrequency(frequency, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.getFrequencyList();
    }, (error) => {
      this.isLoading = false;
    });
  }

  showAddEditFrequency(frequency, mode) {
    const dialogRef = this.dialog.open(CreateEditFrequencyComponent, {
        width: '450px',
        data: {frequency: frequency ? frequency : {}, mode}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createEditFrequency(result.frequency, result.mode);
      }
     });
   }

}

