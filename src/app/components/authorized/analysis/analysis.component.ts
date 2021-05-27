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
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { _ } from 'ag-grid-community';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  @ViewChild('owlCar', { static: false }) owlCar;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public stores: any[];

   analyseKeyChartData: any = {};
   analyseKeyData: any = [];
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

  displayedColumns = [];

  private gridApi;
  private gridColumnApi;
  defaultColDef = {
   sortable: true,
   resizable: true,
   filter: true,
 };
  columnDefs: ColDef[];
  rowData = [];

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

   analysisByTimeData: any = [];

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
      this.viewAnalysisByTime(keyname, uploadId);
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
            this.displayedColumns.push(key);
            if (key !== this.selectedKey) {
               this.analysisKeys.push(key);
               chartData[key] = [];
            }
         });
         this.analyseKeyData.map(data => {
            chartData.labels.push(data[this.selectedKey]);
            this.analysisKeys.map(key => {
               chartData[key].push(data[key]);
            });
         });
         this.analyseKeyChartData = chartData;
         this.isLoadChart = true;
         this.isLoading = false;
         this.genrateColDefs();
      }, (error) => {
         this.isLoading = false;
         this.analyseKeyData = [];
         this.isLoadingDetails = false;
      });
   }

   viewAnalysisByTime(keyname, uploadId) {
      this.selectedKey = keyname;
      const payload = {
         sourceId: this.selectedAnalysis.sourceId,
         rulesetId: this.selectedAnalysis.rulesetId,
         uploadId,
         keyname
      };
      this.http.getAnalysisByTime(payload).subscribe((result: any) => {
         this.analysisByTimeData = result ? result : [];
      }, (error) => {
      });
   }

   onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
   }

   genrateColDefs() {
      const columnDefs = [];
      columnDefs.push({
         field: this.selectedKey
      });
      this.analysisKeys.map(col => {
         columnDefs.push({
            field: col,
            filter: false, // 'agNumberColumnFilter'
            cellRenderer: (params) => {
               if (params.value && params.value.value) {
                  return params.value.value;
               }
               return params.value;
            },
            comparator: (valueA, valueB) => {
               return (+valueA.value === +valueB.value) ? 0 : (+valueA.value > +valueB.value) ? 1 : -1;
            },
            filterParams: {
               comparator: (a, b) => {
                  console.log(a, b);
                  const valA = parseFloat(a);
                  const valB = parseFloat(b);
                  if (valA === valB) { return 0; }
                  return valA > valB ? 1 : -1;
               }
           },
            cellStyle: params => {
               const { value } = params.value;
               const { bgSettings } = this.settings || [];
               const bg = bgSettings.filter(setting => (+value >= +setting.min && +value <= +setting.max));
               if (bg && bg.length) {
                 return {color: '#fff', backgroundColor: bg[0].color};
               }
               return 'transparent';
            }
         });
      });
      this.columnDefs = columnDefs;
      this.rowData = this.analyseKeyData;
   }

   onCellClicked(e) {
      const analysisItem = e.data;
      const key = e.colDef.field;
      const details = analysisItem[key].details ? analysisItem[key].details : [];
      const selectedValue = analysisItem[this.selectedKey];
      this.showDetails(details, key, this.selectedKey, selectedValue, analysisItem);
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
            this.columnDefs = null;
            setTimeout(() => {
               this.genrateColDefs();
               // this.gridApi.setColumnDefs(this.columnDefs);
            }, 100);
         }
      });
   }

   onBarClicked(event) {
      this.showDetails(event.details, event.key, this.selectedKey, event.selectedValue, this.analyseKeyData[event.rowIndex]);
   }

   showDetails(details, key, selectedKey, selectedValue, analysisItem?) {
      this.dialog.open(CompletenessDialogComponent, {
         width: '95%',
         // height: '95%',
         data: {
            details : details ? details : [],
            key,
            selectedKey,
            selectedValue,
            selectedAnalysis: this.selectedAnalysis,
            analysisItem,
            analysisKeys: this.analysisKeys
         }
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
