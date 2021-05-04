import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { query } from '@angular/animations';
import {PageEvent} from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColorDialogComponent } from '../../../shared/color-dialog/color-dialog.component';
import { CompletenessDialogComponent } from '../../../shared/completeness-dialog/completeness-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

   analyseKeyChartData: any = {};
   analyseKeyData = [];
   selectedAnalysis: any = {};
   selectedKey = '';
   showAnalysisByKey = false;
   isLoading = false;
   isLoadingDetails = false;
   loaderMsg = '';
   selectedColumns: any = [];
   selectedCDE: any = '';
   settings: any = {
      bgSettings: [{
         min: '100',
         max: '100',
         color: '#14960b'
      }, {
         min: '90',
         max: '100',
         color: '#ff2900'
      }]
   };

   uploadsHistory: any = [];
   highlightDates: any = [];
   analysisKeys: any = [];
   isLoadChart = false;

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router) {
   }

   ngOnInit() {
      const analysis = localStorage.getItem('selected-analysis');
      if (analysis) {
         this.launchAnalysis(JSON.parse(analysis));
      }
   }

   launchAnalysis(analysis) {
      this.selectedAnalysis = analysis;
      const payload = {
         sourceId: analysis.sourceId,
         rulesetId: analysis.rulesetId
      };
      // tslint:disable-next-line: max-line-length
      this.selectedColumns = (this.selectedAnalysis.source && this.selectedAnalysis.source.categorialColumns) ? this.selectedAnalysis.source.categorialColumns : [];
      if (this.selectedColumns && this.selectedColumns.length) {
         this.selectedCDE = this.selectedColumns[0];
         this.launchAnalysisByKey(this.selectedCDE);
      }
      this.analyseKeyData = [];
   }

   launchAnalysisByKey(keyname) {
      const uploadDate = this.selectedAnalysis.uploadDate ? moment(this.selectedAnalysis.uploadDate).format('MM-DD-YYYY') : '';
      const uploadsHistory = this.selectedAnalysis.UploadsHistory ? this.selectedAnalysis.UploadsHistory : [];

      if (uploadsHistory.length && !uploadDate) {
         alert('Please select the upload date.');
         this.gotoDashboard();
         return;
      }

      if (uploadsHistory.length && uploadDate && !this.selectedAnalysis.highlightDates.includes(uploadDate)) {
         alert('There is no source for selected date.');
         this.gotoDashboard();
         return;
      }

      let uploadId = '';
      uploadsHistory.map(history => {
         if (moment(history.uploadDate).format('MM-DD-YYYY') === uploadDate) {
            uploadId = history.uploadId;
         }
      });
      this.showAnalysisByKey = true;
      this.isLoadingDetails = true;
      this.selectedKey = keyname;

      const payload = {
         sourceId: this.selectedAnalysis.sourceId,
         rulesetId: this.selectedAnalysis.rulesetId,
         uploadId,
         keyname
      };

      this.loaderMsg = 'Launching analysis...';
      this.analyseKeyData = [];
      this.isLoadChart = false;
      this.http.launchAnalysisByKey(payload).subscribe((result: any) => {
         this.isLoadingDetails = false;
         if (result.errorCode && result.errorMsg) {
            alert(result.errorMsg);
            return;
         }
         this.analyseKeyData = result ? result : [];
         this.analysisKeys = [];
         const analyseRowItem = (this.analyseKeyData && this.analyseKeyData.length) ? this.analyseKeyData[0] : [];
         const chartData = {
            labels: [],
         };
         Object.keys(analyseRowItem).map(key => {
            if (key !== this.selectedKey) {
               this.analysisKeys.push(key);
               chartData[key] = [];
            }
         });

         this.analyseKeyData.map(data => {
            chartData.labels.push(data[this.selectedKey]);
            this.analysisKeys.map(key => {
               chartData[key].push(data[key] ? +data[key].value : 0);
            });
         });
         this.analyseKeyChartData = chartData;
         this.isLoadChart = true;
      }, (error) => {
         this.analyseKeyData = [];
         this.isLoadingDetails = false;
      });
   }

   gotoDashboard() {
      this.router.navigate([`auth/dashboard`]);
   }

   openHighlightSettingsDialog(): void {
      const dialogRef = this.dialog.open(ColorDialogComponent, {
         width: '800px',
         data: this.settings
      });
      dialogRef.afterClosed().subscribe(result => {
         if (result) {
            this.settings = result;
         }
      });
   }

   showDetails(details) {
      this.dialog.open(CompletenessDialogComponent, {
         width: '95%',
         height: '95%',
         data: details ? details : []
      });
   }

   onOpenDatePicker(data: any) {
      this.uploadsHistory = data.UploadsHistory ? data.UploadsHistory : [];
      this.highlightDates = [];
      this.uploadsHistory.map(history => {
         this.highlightDates.push(moment(history.uploadDate).format('MM-DD-YYYY'));
      });
      data.highlightDates = this.highlightDates;
   }

   dateClass = (d: Date) => {
      const date = moment(d).format('MM-DD-YYYY');
      return (this.highlightDates.includes(date)) ? 'highlight-dates' : undefined;
   }
}
