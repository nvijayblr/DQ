import { Component, OnInit, Inject, ViewChild } from '@angular/core';
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
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as moment from 'moment';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
   @ViewChild('owlCar', { static: false }) owlCar;

   analyseKeyChartData: any = {};
   analyseKeyData = [];
   selectedAnalysis: any = {};
   selectedKey = '';
   uploadId = '';
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

   OwlCategoryOptions: OwlOptions = {
      loop: false,
      autoplay: false,
      autoplayTimeout: 6000,
      autoplaySpeed: 700,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      margin: 5,
      navSpeed: 700,
      navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
      autoWidth: true,
      nav: false,
      items: 6,
      responsive: {
        0: {
          items: 3,
          center: true,
          loop: true,
        },
        740: {
          items: 5,
          center: false,
          loop: false,
        }
      },
   };

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
         this.initAnalysis(JSON.parse(analysis));
      }
   }

   initAnalysis(analysis) {
      console.log(analysis);
      this.selectedAnalysis = analysis;
      this.uploadsHistory = analysis.UploadsHistory ? analysis.UploadsHistory : [];
      const payload = {
         sourceId: analysis.sourceId,
         rulesetId: analysis.rulesetId
      };
      // tslint:disable-next-line: max-line-length
      this.selectedColumns = (this.selectedAnalysis.source && this.selectedAnalysis.source.categorialColumns) ? this.selectedAnalysis.source.categorialColumns : [];
      if (this.selectedColumns && this.selectedColumns.length) {
         this.selectedCDE = this.selectedColumns[0];
         this.validateAnalysis(this.selectedCDE);
      }
      this.analyseKeyData = [];
   }

   validateAnalysis(keyname) {
      const uploadDate = this.selectedAnalysis.uploadDate ? moment(this.selectedAnalysis.uploadDate).format('MM-DD-YYYY') : '';
      const uploadsHistory = this.selectedAnalysis.UploadsHistory ? this.selectedAnalysis.UploadsHistory : [];

      if (!uploadsHistory.length) {
         alert('Please upload the source to launch the analysis.');
         this.gotoDashboard();
         return;
      }

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

      uploadsHistory.map(history => {
         if (moment(history.uploadDate).format('MM-DD-YYYY') === uploadDate) {
            this.uploadId = history.uploadId;
         }
      });
      this.showAnalysisByKey = true;
      this.isLoadingDetails = true;
      this.selectedKey = keyname;
      this.launchAnalysisByKeyDate(this.selectedKey, this.uploadId);
   }

   launchAnalysisByKeyDate(keyname, uploadId) {
      this.selectedKey = keyname;
      const payload = {
         sourceId: this.selectedAnalysis.sourceId,
         rulesetId: this.selectedAnalysis.rulesetId,
         uploadId,
         keyname
      };
      this.loaderMsg = 'Launching analysis...';
      this.isLoading = true;
      this.isLoadChart = false;
      this.http.launchAnalysisByKey(payload).subscribe((result: any) => {
         this.isLoadingDetails = false;
         if (result.errorCode && result.errorMsg) {
            alert(result.errorMsg);
            this.gotoDashboard();
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
         this.isLoading = false;
      }, (error) => {
         this.isLoading = false;
         this.analyseKeyData = [];
         this.isLoadingDetails = false;
      });
   }

   onRulesetChange(rulesetId) {
      this.selectedAnalysis.rulesetId = rulesetId;
      this.launchAnalysisByKeyDate(this.selectedKey, this.uploadId);
   }

   tapDateCarouselItem(history) {
      this.uploadId = history.uploadId;
      this.launchAnalysisByKeyDate(this.selectedKey, this.uploadId);
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

   showDetails(details, key, selectedKey, selectedValue) {
      this.dialog.open(CompletenessDialogComponent, {
         width: '95%',
         //height: '95%',
         data: {details : details ? details : [], key, selectedKey, selectedValue, selectedAnalysis: this.selectedAnalysis }
      });
   }

   formatDate(date) {
      return moment(date).format('MMM, DD YYYY');
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
