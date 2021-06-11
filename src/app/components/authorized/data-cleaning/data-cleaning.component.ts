import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from '@angular-slider/ngx-slider';
import { MessageService } from 'src/app/services/message.service';
import { HttpService } from 'src/app/services/http-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-data-cleaning',
  templateUrl: './data-cleaning.component.html',
  styleUrls: ['./data-cleaning.component.scss'],
})
export class DataCleaningComponent implements OnInit {
   @ViewChild('stickyMenu', {static: false}) menuElement: ElementRef;
   rules: any = [];
   statistics: any = {};
   attrubute: any = '';
   isLoading = false;
   loaderMsg = '';
   source: any = {};
   profiles: any = [];
   profile: any = {};
   show = false;
   frequencyShow = false;
   patternShow = false;
   maskShow = false;

   sliderOptions: any = {
      floor: 0,
      ceil: 100,
      step: 10,
      showTicks: true
   };

   impute: any = {
      sourcepath: '',
      column: '',
      column_data_type: '',
      value : ''
   };

   operators = ['', '=', '>', '>=', '<', '<='];
   delete: any = {
      sourcepath: '',
      type: 'column',
      category: 'col_nan',
      column_name: '',
      values: '',
      formula: {operator1 : '=', cond_value1 : '', operator2 : '', cond_value2 : ''},
      threshold : 50
   };

   mask: any = {
      sourcepath: '',
      column: '',
      value: ''
   };

   duplicate: any = {
      sourcepath: '',
      column_name: '',
      columns: [],
      option: 'all'
   };

   profileSummary = {
      sourcepath: '',
      records: '',
      numeric: 0,
      alphabetic: 0,
      alphanumeric: 0,
      nullcounts: 0,
      duplicates: 0
   };


   analysis: any = {};

   isPreviewLoaded = false;
   isPreviewLoading = false;
   defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
   rowData: any = [];
   columnDefs: any = [];

   isSaveEnable = false;

   constructor(
      private messageService: MessageService,
      private http: HttpService,
      private dialog: MatDialog,
   ) {
   }
   highcharts = Highcharts;
   chartOptions = {
      chart: {
        type: 'bar'
     },
     title: {
        text: 'Historic World Population by Region'
     },
     subtitle : {
        text: 'Source: Source Name'
     },
     legend : {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 250,
        y: 100,
        floating: true,
        borderWidth: 1,

        backgroundColor: (
             '#FFFFFF'), shadow: true
        },
        xAxis: {
           categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
           text: null
        }
     },
     yAxis : {
        min: 0, title: {
           text: 'Population (millions)', align: 'high'
        },
        labels: {
           overflow: 'justify'
        }
     },
     tooltip : {
        valueSuffix: ' millions'
     },
     plotOptions : {
        bar: {
           dataLabels: {
              enabled: true
           }
        }
     },
     credits: {
        enabled: false
     },
     series: [
        {
           name: 'Year 1800',
           data: [107, 31, 635, 203, 2]
        },
        {
           name: 'Year 1900',
           data: [133, 156, 947, 408, 6]
        },
        {
           name: 'Year 2008',
           data: [973, 914, 4054, 732, 34]
        }
     ]
  };

  ngOnInit() {
   this.isLoading = true;
   setTimeout(() => {
      this.analysis = this.messageService.getSource();
      this.source = this.analysis.source ? this.analysis.source : {};
      if (this.source) {
         this.mask.sourcepath = this.source.templateSourcePath;
         this.impute.sourcepath = this.source.templateSourcePath;
         this.delete.sourcepath = this.source.templateSourcePath;
         this.duplicate.sourcepath = this.source.templateSourcePath;
         this.profileSummary.sourcepath = this.source.templateSourcePath;
         this.loadProfile(this.source);
      }
   }, 10);
  }

  changeProfile(profile) {
      this.profile = profile;
      this.resetPreview();
      this.attrubute = profile.column;
      this.mask.column = profile.column;
      this.impute.column = profile.column;
      this.delete.column_name = profile.column;
      this.duplicate.column_name = profile.column;
   }

   loadProfile(source, profile: any = '') {
      this.isLoading = true;
      this.loaderMsg = 'Loading Profile...';
      const payload = {
         sourcepath: source.templateSourcePath
      };
      this.http.getProfiles(payload).subscribe((result: any) => {
         this.profiles = result.profile ? result.profile : [];
         if (this.profiles.length) {
            if (profile) {
               const selectedProfile = this.profiles.filter(data => {
                  return data.column === profile.column;
               })[0];
               this.isSaveEnable = true;
               this.changeProfile(selectedProfile);
            } else {
               this.changeProfile(this.profiles[0]);
            }
         }
         this.profileSummary.duplicates = result.nr_duplicates ? result.nr_duplicates : 0;
         this.profiles.map(data => {
            if (data.attributeSummary) {
               this.profileSummary.records = data.attributeSummary.records ? data.attributeSummary.records : this.profileSummary.records;
               if (data.attributeSummary.dataType === 'Numeric') {
                  this.profileSummary.numeric = this.profileSummary.numeric + 1;
               }
               if (data.attributeSummary.dataType === 'Alphabetic') {
                  this.profileSummary.alphabetic = this.profileSummary.alphabetic + 1;
               }
               if (data.attributeSummary.dataType === 'Alphanumeric') {
                  this.profileSummary.alphanumeric = this.profileSummary.alphanumeric + 1;
               }
               this.profileSummary.nullcounts = this.profileSummary.nullcounts + parseInt(data.attributeSummary.null_records, 0);
            }
         });
         this.isLoading = false;
      }, (error) => {
         this.isLoading = false;
      });
  }

   updateSourcePath(path) {
      this.source.templateSourcePath = path;
      this.mask.sourcepath = path;
      this.impute.sourcepath = path;
      this.delete.sourcepath = path;
      const profileCopy = {...this.profile};
      this.profile = {};
      this.loadProfile(this.source, profileCopy);
   }

   imputeColumns(datatype) {
      this.impute.column_data_type = datatype;
      this.impute = {
         ...this.impute,
         sourceFileName: this.impute.sourcepath,
         sourceId: this.analysis.sourceId,
         uploadId: this.analysis.recentsourceUpload.uploadId,
         rulesetId: this.analysis.rulesetId,
         uploadDate: this.analysis.recentsourceUpload.uploadDate,
      };
      this.isLoading = true;
      this.loaderMsg = 'Imputing columns...';
      this.http.imputeColumnsReq(this.impute).subscribe((result: any) => {
         this.isLoading = false;
         if (result.outputpath) {
            this.updateSourcePath(result.outputpath);
         }
         // this.loadProfile(this.source, this.profile);
         // alert('Impution has been successfully completed.');
      }, (error) => {
         this.isLoading = false;
      });
   }

   deleteColumnsRows() {
      this.isLoading = true;
      this.loaderMsg = 'Imputing columns...';
      this.delete.threshold = (this.delete.category === 'col_nan' || this.delete.category === 'row_nan')
         ? this.delete.threshold : undefined;
      const payload = {...this.delete};
      delete payload.type;
      this.http.deleteColumnsRowsReq(this.delete).subscribe((result: any) => {
         this.isLoading = false;
         // this.loadProfile(this.source, this.profile);
         alert(`${this.delete === 'column' ? 'Columns' : 'Rows'} are deleted successfully.`);
      }, (error) => {
         this.isLoading = false;
      });
   }

   deleteDuplicates() {
      this.isLoading = true;
      this.loaderMsg = 'Deleting duplicate records...';
      const payload = {
         sourcepath: this.source.templateSourcePath,
         action: 'remove_duplicates' ,
         select_cols: this.duplicate.columns.length ? this.duplicate.columns : '',
         keep: 'first',
         sourceFileName: this.impute.sourcepath,
         sourceId: this.analysis.sourceId,
         uploadId: this.analysis.recentsourceUpload.uploadId,
         rulesetId: this.analysis.rulesetId,
         uploadDate: this.analysis.recentsourceUpload.uploadDate,
      };
      this.http.deleteDuplicatesReq(payload).subscribe((result: any) => {
         this.isLoading = false;
         alert(`Duplicate records are deleted successfully.`);
      }, (error) => {
         this.isLoading = false;
      });
   }

   loadPreview(type, mask = '') {
      this.delete.formula.cond_value1 = this.delete.formula.cond_value1 ? this.delete.formula.cond_value1 : '';
      this.delete.formula.cond_value2 = this.delete.formula.cond_value2 ? this.delete.formula.cond_value2 : '';

      const payloads = {
         duplicate: {
            sourcepath: this.source.templateSourcePath,
            action: 'preview' ,
            select_cols: this.duplicate.columns.length ? this.duplicate.columns : '',
            keep: '',
            sourceFileName: this.impute.sourcepath,
            sourceId: this.analysis.sourceId,
            uploadId: this.analysis.recentsourceUpload.uploadId,
            rulesetId: this.analysis.rulesetId,
            uploadDate: this.analysis.recentsourceUpload.uploadDate,
         },
         mask: {
            sourcepath: this.source.templateSourcePath,
            column_name: this.profile.column,
            mask_query_value : mask
         },
         nan: {
            sourcepath: this.source.templateSourcePath,
            column_name: this.profile.column,
         },
         data_remove: {
            sourcepath: this.source.templateSourcePath,
            category: this.delete.category,
            column_name: this.delete.category === 'col_with_value' ? this.delete.column_name : '',
            values: this.delete.values ? [this.delete.values] : '',
            formula: this.delete.values ? '' : this.delete.formula,
            threshold : (this.delete.category === 'col_nan' || this.delete.category === 'row_nan')
                           ? (this.delete.threshold / 100) : ''
         }
      };
      this.loadProfilePreview(payloads[type], type);
   }

   loadProfilePreview(payload, type) {
      this.loaderMsg = 'Loading preview...';
      this.isPreviewLoaded = false;
      this.isPreviewLoading = true;
      this.columnDefs = [];
      this.rowData = [];
      this.http.getProfilePreview(payload, type).subscribe((res: any) => {
         console.log('res', res);
         const details: any = res.Preview ? res.Preview : {};
         this.parseSourcePreview(details);
         this.isLoading = false;
      }, (error) => {
         console.log(error);
         this.isLoading = false;
         this.isPreviewLoaded = false;
         this.isPreviewLoading = false;
      });
   }

   resetPreview() {
      this.columnDefs = [];
      this.rowData = [];
      this.isPreviewLoaded = false;
   }

    parseSourcePreview(details) {
      Object.keys(details).map((key, index) => {
        this.rowData.push({
          ...details[key]
        });
      });
      if (this.rowData.length) {
        Object.keys(this.rowData[0]).map((key, index) => {
          this.columnDefs.push({
            field: key,
            ...this.defaultColDefs
          });
        });
      }
      this.isPreviewLoaded = true;
      this.isPreviewLoading = false;
    }

    changeRemoveCategory(type) {
      if (type === 'column') {
         this.delete.category = 'col_nan';
      } else {
         this.delete.category = 'row_nan';
      }
    }

    showSaveConfirm() {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
         width: '400px',
         data: {
           title: 'Save soruce',
           message: `Are you sure want to save this updated source?` ,
           cancelLable: 'No',
           okLable: 'OK'
         }
       });

      dialogRef.afterClosed().subscribe(data => {
         if (data.action === 'ok') {
         } else {
         }
       });

    }

   // ngAfterViewInit(){
   //    this.elementPosition = this.menuElement.nativeElement.offsetTop;
   // }

   // @HostListener('window:scroll', ['$event'])
   //  handleScroll(){
   //    const windowScroll = window.pageYOffset;
   //    if(windowScroll >= this.elementPosition){
   //      this.sticky = true;
   //    } else {
   //      this.sticky = false;
   //    }
   //  }

}
