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

   visible = true;
   selectable = true;
   removable = true;
   addOnBlur = true;
   separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
   fruitCtrl = new FormControl();
   filteredFruits: Observable<string[]>;
   fruits: string[] = [];
   allFruits: string[] = ['(', ')', '+', '-', 'AIRLINE', 'AIRPORT', 'COUNTRY', 'STATE', 'ARRIVAL_TIME', 'DEPATURE_TIME'];

   @ViewChild('fruitInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
   @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;


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

      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
         startWith(null),
         map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));

   }

   ngOnInit() {
      localStorage.removeItem('dq-source-names');
      this.getAllSources();
      // this.getAllAnalysis();
   }


   add(event: MatChipInputEvent): void {
      // Add fruit only when MatAutocomplete is not open
      // To make sure this does not conflict with OptionSelected Event
      if (!this.matAutocomplete.isOpen) {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
          this.fruits.push(value.trim());
        }

        // Reset the input value
        if (input) {
          input.value = '';
        }

        this.fruitCtrl.setValue(null);
      }
    }

    remove(fruit: string): void {
      const index = this.fruits.indexOf(fruit);

      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
      this.fruits.push(event.option.viewValue);
      this.fruitInput.nativeElement.value = '';
      this.fruitCtrl.setValue(null);
    }

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
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
      localStorage.setItem('dq-source-data', JSON.stringify(sourceData));
      this.router.navigate(
         [`auth/attribute-details-data`],
         { queryParams: { sourceId: sourceData.sourceId } }
      );
   }

   launchDataCleaning(sourceData): void {
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

   showEditDetails(ind) {
      if (this.visibleIndex === ind) {
         this.visibleIndex = -1;
      } else {
         this.visibleIndex = ind;
      }
   }
}
