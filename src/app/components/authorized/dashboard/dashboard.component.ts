import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';

import {ElementRef, ViewChild} from '@angular/core';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

   analysisList = [];
   selectedAnalysis: any = {};
   uploadsHistory: any = [];
   isLoading = false;
   loaderMsg = '';
   role = '';
   rights = '';
   sourceList: any = [];
   highlightDates: any = [];
   visibleIndex = -1;
   showDetails = true;
   showFirst = true;
   actionTabId;

   itemsAsObjects = [{id: 0, name: 'Angular'}, {id: 1, name: 'React'}];

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router) {
      const rights = this.auth.getUserRole().rights;
      this.rights = rights ? rights : [];

      const role = this.auth.getUserRole().role;
      this.role = role ? role : 'VIEWER';
   }

   ngOnInit() {
      localStorage.removeItem('dq-source-names');
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
      // this.isLoading = true;
      // this.loaderMsg = 'Saving Source data...';
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
      const uploadDate = this.selectedAnalysis.uploadDate ? moment(this.selectedAnalysis.uploadDate).format('MM-DD-YYYY') : '';
      const uploadsHistory = this.selectedAnalysis.UploadsHistory ? this.selectedAnalysis.UploadsHistory : [];
      if (!uploadsHistory.length) {
         alert('Please upload the source to launch the analysis.');
         return;
      }
      if (uploadsHistory.length && !uploadDate) {
         alert('Please select the upload date.');
         return;
      }

      if (uploadsHistory.length && uploadDate && !this.selectedAnalysis.highlightDates.includes(uploadDate)) {
         alert('There is no source for selected date.');
         return;
      }

      localStorage.setItem('selected-analysis', JSON.stringify(this.selectedAnalysis));
      this.router.navigate(['auth/analysis']);
      return;
   }

   launchDelayAnalysis(analysis) {
      this.selectedAnalysis = analysis;
      localStorage.setItem('selected-analysis', JSON.stringify(this.selectedAnalysis));
      this.router.navigate(['auth/delay-analysis']);
   }

   createEditRuleset(data, mode) {
      if (mode === 'add') {
         data.rulesetId = '';
      }
      let rules = data.rules.filter((rule) => data.rulesetId === rule.rulesetId);
      rules = (rules && rules.length) ? rules[0] : { columns: [], selectedColumns: [] };
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

      const rulesetNames = [];
      data.rules.map((rule) => {
         rulesetNames.push(rule.rulesetName);
      });

      const analysis = {
         ...data,
         mode,
         columns,
         selectedColumns,
         rulesetName: rules.rulesetName,
         rules,
         rulesetNames
      };
      localStorage.setItem('analysis', JSON.stringify(analysis));
      localStorage.setItem('dq-source-data', JSON.stringify(analysis));
      this.router.navigate(
         [`auth/ruleset`],
         { queryParams: { sourceId: analysis.sourceId, rulesetId: analysis.rulesetId, mode: analysis.mode } }
      );
   }


   launchProfileView(sourceData): void {
      if (!sourceData.UploadsHistory.length || (sourceData.UploadsHistory.length && !sourceData.uploadDate)) {
         alert('Please select the upload date.');
         return;
      }
      localStorage.setItem('dq-source-data', JSON.stringify(sourceData));
      this.router.navigate(
         [`auth/attribute-details-data`],
         { queryParams: { sourceId: sourceData.sourceId } }
      );
   }

   launchDataCleaning(sourceData): void {
      if (!sourceData.UploadsHistory.length || (sourceData.UploadsHistory.length && !sourceData.uploadDate)) {
         alert('Please select the upload date.');
         return;
      }
      const selectedSource = sourceData.UploadsHistory.filter(history => history.uploadDate === sourceData.uploadDate);
      if (selectedSource && selectedSource.length) {
         sourceData.source.templateSourcePath = selectedSource[0].sourceFileName;
      }
      localStorage.setItem('dq-source-data', JSON.stringify(sourceData));
      this.router.navigate(
         [`auth/data-cleaning`],
         { queryParams: { sourceId: sourceData.sourceId } }
      );
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

   showEditDetails(index, data) {
      const uploadsHistory = data.UploadsHistory;
      if (uploadsHistory && uploadsHistory.length) {
         const upload = uploadsHistory[uploadsHistory.length - 1];
         this.onOpenDatePicker(data);
         data.uploadDate = upload.uploadDate;
      }
      const rules = data.rules;
      if (rules && rules.length) {
         const ruleset = rules[rules.length - 1];
         data.rulesetId = ruleset.rulesetId;
      }

      if (this.visibleIndex === index) {
        this.visibleIndex = -1;
        this.actionTabId = -1;
      } else {
        this.visibleIndex = index;
        this.actionTabId = '1';
        this.showFirst = true;
      }
  }

  showTab(id) {
    this.actionTabId = id;
    if (id === '1') {
      this.showFirst = true;
    } else {
      this.showFirst = false;
    }
    if (id === this.actionTabId) {
        this.showDetails = true;
    } else {
      this.showDetails = false;
    }

  }
}
