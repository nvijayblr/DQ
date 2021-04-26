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
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router) {
      const role = this.auth.getUserRole().role;
      this.role = role ? role : 'VIEWER';
   }

   analysisList = [];
   analyseData = [];
   analyseChartData: any = {};
   analyseKeyChartData: any = {};
   analyseKeyData = [];
   selectedAnalysis: any = {};
   selectedKey = '';
   showAnalysis = false;
   showAnalysisByKey = false;
   isLoading = false;
   isLoadingDetails = false;
   loaderMsg = '';
   role = '';
   isSourceUploaded = false;
   selectedRule = '';
   isShowAnalysisTable = false;
   isShowAnalysisKeyTable = false;
   selectedColumns: any = [];
   selectedCDE: any = '';
   minValue: number;
   maxValue: number;
   colorValue: string;
   tooltipDET: any = [];
   nullCount;
   finalCount;
   originAirport;
   showTd = false;
   valArray = [];
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

   sourceList: any = [];
   uploadsHistory: any = [];
   highlightDates: any = [];
   analysisKeys: any = [];
   isLoadChart = false;
   visibleIndex = -1;

   length = 10;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100];

   // MatPaginator Output
   pageEvent: PageEvent;

   ngOnInit() {
      this.getAllSources();
      // this.getAllAnalysis();
   }


   getAllSources() {
      this.isLoading = true;
      this.loaderMsg = 'Loading Sources...';
      this.http.getSources().subscribe((result: any) => {
         this.sourceList = (result && result.Analysis) ? result.Analysis : [];
         const sourceNames = [];
         this.sourceList.map(item => {
            sourceNames.push(item.source.sourceDataName);
         });
         localStorage.setItem('dq-source-names', JSON.stringify(sourceNames));

         this.isLoading = false;
      }, (error) => {
         this.isLoading = false;
      });
   }

   editSourceData(sourceData) {
      localStorage.setItem('dq-source-data', JSON.stringify(sourceData));
      this.router.navigate(
         [`auth/create-source-data`],
         { queryParams: { sourceId: sourceData.sourceId, mode: 'edit' } }
      );
   }



   getAllAnalysis() {
      this.isLoading = true;
      this.loaderMsg = 'Loading Analysis...';
      this.http.getAllAnalysis().subscribe((result: any) => {
         this.analysisList = result.Analysis ? result.Analysis : [];
         // console.log(this.analysisList);
         this.isLoading = false;
      }, (error) => {
         this.isLoading = false;
      });
   }

   onSourceCSVSelected(file, analysis) {
      analysis.file = file;
   }


   uploadSource(analysis, reason = '') {
      if (!analysis.rules || (analysis.rules && !analysis.rules.length)) {
         alert('Please create the ruleset to upload the source.');
         return;
      }

      this.selectedAnalysis = analysis;
      let isMultiSource = false;
      if (analysis.settings && analysis.settings.multiSourceOptions && analysis.settings.multiSourceOptions.length > 1) {
         isMultiSource = true;
      }
      if (isMultiSource && !analysis.multisource) {
         alert('Please select the source name.');
         return;
      }

      if (!analysis.file) {
         alert('Please select the source file to upload.');
         return;
      }
      if (!analysis.uploadDate) {
         alert('Please select the upload date.');
         return;
      }
      const payload = {
         sourceId: analysis.sourceId,
         rulesetId: analysis.rules.length ? analysis.rules[0].rulesetId : '',
         isMultiSource: isMultiSource ? 'Yes' : 'No',
         multiSourceKey: analysis.multisource ? analysis.multisource : '',
         uploadDate: analysis.uploadDate,
         uploadTime: '20:28',
         uploadReason: reason ? reason : '',
         settings: analysis.settings,
         sourceObj: analysis.source
      };
      const formData: any = new FormData();
      formData.append('file[]', analysis.file);
      formData.append('data', JSON.stringify(payload));
      this.isLoading = true;
      this.loaderMsg = 'Saving Source data...';
      this.http.uploadSource(formData).subscribe((result: any) => {
         this.isLoading = false;
         if (result.errorMsg) {
            this.showUploadError(result.errorMsg);
         } else {
            this.getAllSources();
            alert('Source has been uploaded successfully.');
         }
      }, (error) => {
         this.isLoading = false;
      });
   }

   showUploadError(msg) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
         width: '400px',
         data: {
            title: 'Upload Error',
            message: msg,
            showReason: true,
            reasongMsg: 'Please provide the reason to upload again. ',
            cancelLable: 'Cancel',
            okLable: 'OK'
         }
      });

      dialogRef.afterClosed().subscribe(data => {
         if (data.action === 'ok' && data.reason) {
            this.uploadSource(this.selectedAnalysis, data.reason);
         }
      });
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
      this.analyseData = [];
      this.analyseKeyData = [];
   }

   launchAnalysisByKey(keyname) {
      const uploadDate = this.selectedAnalysis.uploadDate ? moment(this.selectedAnalysis.uploadDate).format('MM-DD-YYYY') : '';
      const uploadsHistory = this.selectedAnalysis.UploadsHistory ? this.selectedAnalysis.UploadsHistory : [];

      if (uploadsHistory.length && !uploadDate) {
         alert('Please select the upload date.');
         return;
      }

      if (uploadsHistory.length && uploadDate && !this.selectedAnalysis.highlightDates.includes(uploadDate)) {
         alert('There is no source for selected date.');
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

      this.showAnalysis = true;
      this.loaderMsg = 'Launching analysis...';
      this.analyseKeyData = [];
      this.isLoadChart = false;
      this.http.launchAnalysisByKey(payload).subscribe((result: any) => {
         this.isLoadingDetails = false;
         if (result.errorCode && result.errorMsg) {
            this.showAnalysis = false;
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

   launchDelayAnalysis(analysis) {
      this.selectedAnalysis = analysis;
      localStorage.setItem('delay-analysis', JSON.stringify(this.selectedAnalysis));
      this.router.navigate(['auth/delay-analysis']);
   }

   xLableClicked(event) {
      this.launchAnalysisByKey(event.label);
   }

   createEditRuleset(data, mode) {
      let rules = data.rules.filter((rule) => data.rulesetId === rule.rulesetId);
      rules = (rules && rules.length) ? rules[0] : { columns: [], selectedColumns: [] };
      console.log(rules);
      // If create ruleset take the columns list from default ruleset.
      if (!data.rulesetId) {
         rules.columns = data.rules && data.rules.length ? data.rules[0].columns : [];
      }
      const columns = [];
      if (data.source.availableColumns) {
         data.source.availableColumns.map((column, index) => {
            columns.push({ id: (index + 1), title: column });
         });
      }

      const selectedColumns = [];
      rules.selectedColumns.map((column, index) => {
         selectedColumns.push({ id: (index + 1), title: column });
      });
      const analysis = {
         ...data,
         mode,
         columns,
         selectedColumns,
         rulesetName: rules.rulesetName,
         rules
      };
      localStorage.setItem('analysis', JSON.stringify(analysis));
      this.router.navigate(
         [`auth/analysis`],
         { queryParams: { sourceId: analysis.sourceId, rulesetId: analysis.rulesetId, mode: analysis.mode } }
      );
   }

   gotoList() {
      this.showAnalysis = false;
      this.showAnalysisByKey = false;
   }

   // onSourceCSVSelected(file) {
   // const formData: any = new FormData();
   // formData.append('file[]', file);
   // formData.append('data', JSON.stringify({
   //   sourceFilename: file.name
   // }));
   // this.isLoading = true;
   // this.isSourceUploaded = false;
   // this.loaderMsg = 'Uploading the source cvs...';
   // this.http.uploadSourceCSV(formData).subscribe((result: any) => {
   //   this.isLoading = false;
   //   this.isSourceUploaded = true;
   // }, (error) => {
   //   this.isLoading = false;
   //   this.isSourceUploaded = false;
   // });
   // }

   launchProfileView(sourceData): void {
      localStorage.setItem('dq-source-data', JSON.stringify(sourceData));
      this.router.navigate(
         [`auth/attribute-details-data`],
         { queryParams: { sourceId: sourceData.sourceId } }
      );
   }

   openHighlightSettingsDialog(): void {
      const dialogRef = this.dialog.open(ColorDialogComponent, {
         width: '800px',
         data: this.settings
      });
      dialogRef.afterClosed().subscribe(result => {
         if (result) {
            console.log(result);
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
   showEditDetails(ind) {
      if (this.visibleIndex === ind) {
         this.visibleIndex = -1;
      } else {
         this.visibleIndex = ind;
      }
   }

}
