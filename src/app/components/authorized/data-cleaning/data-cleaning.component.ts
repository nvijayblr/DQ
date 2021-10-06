import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Angular2Csv } from 'angular2-csv';
import { MessageService } from 'src/app/services/message.service';
import { HttpService } from 'src/app/services/http-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { CleanLogsComponent } from 'src/app/shared/clean-logs/clean-logs.component';
import { PreviewDialogComponent } from '../../../shared/preview-dialog/preview-dialog.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-cleaning',
  templateUrl: './data-cleaning.component.html',
  styleUrls: ['./data-cleaning.component.scss'],
})
export class DataCleaningComponent implements OnInit {

   constructor(
      private messageService: MessageService,
      private http: HttpService,
      private dialog: MatDialog,
      private route: ActivatedRoute,
     private router: Router,
     private modalService: NgbModal
   ) {
   }
  @ViewChild('stickyMenu', { static: false }) menuElement: ElementRef;
  profileOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
       '<i class=\'fa fa-angle-left\'></i>',
       '<i class=\'fa fa-angle-right\'></i>'
    ],
    autoplay: false,
    autoplayHoverPause: true,
    autoWidth: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 600,
      items: 6,
      responsive: {
        0: {
          items: 3,
          center: true,
          loop: true,
        },
        740: {
          items: 6,
          center: false,
          loop: false,
        }
      }
  };
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
  showAllDetails = false;
  allSourceCategory;
  sourceByCategory;
  selectedCategoryKey: any = '';
  mode: string;
  // selectedSource: any = {};
  initLoadProfile = true;
  titleSrc;
  uploadId;
  processTime;
  savedFiles;
  removeItemMessage;
  messageDisplay;
  showMessage: boolean = false;
  newMessage:any = [];
  showtable = true;
  chartData: any = [];
  domainType: any = {};
  showDomainType = false;

   sliderOptions: any = {
      floor: 0,
      ceil: 100,
      step: 1,
     showTicks: false,
     draggableRange: false,
     sliderControl : false,
   };

   impute: any = {
      sourcepath: '',
      sourceFileName: '',
      column: '',
      column_data_type: '',
      value : ''
   };

   operators = ['', '=', '>', '>=', '<', '<='];
   delete: any = {
      sourcepath: '',
      sourceFileName: '',
      type: 'column',
      category: 'col_nan',
      column_name: '',
      values: '',
      formula: {operator1 : '=', cond_value1 : '', operator2 : '', cond_value2 : ''},
      threshold : 50
   };

   mask: any = {
      sourcepath: '',
      sourceFileName: '',
      column: '',
      value: ''
   };

   duplicate: any = {
      sourcepath: '',
      sourceFileName: '',
      column_name: '',
      columns: [],
      option: 'all'
   };

   profileSummary = {
      sourcepath: '',
      sourceFileName: '',
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
  dqId;

   isSaveEnable = false;

   profileDetails = {
      nr_duplicates: 0,
      nr_totalcols: 0,
      nr_totalrecords: 0
   };

  cleanLogs: any = [];
  cleanedFilesLog;
   isLogsLoading = false;

   removeItems: any = '';
   previewProfile: any = '';
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
  previewTable;
  colPreviewData: boolean = true;
  hideOptions:boolean = true;

  ngOnInit() {
    this.mode = this.route.snapshot.queryParamMap.get('mode');
    localStorage.removeItem('dataDq');
    if (this.mode === 'dqm') {      
      this.getProfileFromMonitoring();
      this.hideOptions = false;
    } else {
      this.getProfileSource();
      this.hideOptions = true;
    }
    // if (this.analysis.recentsourceUpload) {
    //    this.uploadId = this.analysis.recentsourceUpload.uploadId
    // } else {
    //   this.uploadId = ""
    // }


  }

getProfileFromMonitoring() {
    this.isLoading = true;
  
  let dataGetDq = JSON.parse(localStorage.getItem('dataDq'));
  let payload;
  if (!dataGetDq) {
    this.analysis = this.messageService.getSource();
    payload = {      
      db : 'clean',
      SourceSettings: {
        sourcePath : this.analysis.source.templateSourcePath ,
        sourceId: this.analysis.sourceId,
        sourceDataName: this.analysis.source.sourceDataName ,
        sourceDataDescription: this.analysis.source.sourceDataDescription,
        sourceFileName: this.analysis.source.sourceFileName ,
        sourceCategory: this.analysis.source.sourceCategory,
        dataOwner: this.analysis.source.dataOwner,
        uploadDate: this.analysis.uploadDate,
        department : this.analysis.source.department
      },
    };
  } else {
    this.analysis = dataGetDq;
     payload = {      
      db : 'clean',
      SourceSettings: {
        sourcePath :  this.analysis.templateSourcePath,
        sourceId: this.analysis.sourceId,
        sourceDataName: this.analysis.sourceDataName,
        sourceDataDescription: this.analysis.sourceDataDescription,
        sourceFileName: this.analysis.sourceFileName,
        sourceCategory: this.analysis.sourceCategory,
        dataOwner: this.analysis.dataOwner,
        uploadDate: this.analysis.uploadDate,
        department : this.analysis.department
      },
    };
  }
  
    // const payload = {      
    //   db : 'clean',
    //   SourceSettings: {
    //     sourcePath : this.analysis.source.templateSourcePath ? this.analysis.source.templateSourcePath : this.analysis.templateSourcePath,
    //     sourceId: this.analysis.sourceId,
    //     sourceDataName: this.analysis.source.sourceDataName ? this.analysis.source.sourceDataName : this.analysis.sourceDataName,
    //     sourceDataDescription: this.analysis.source.sourceDataDescription ? this.analysis.source.sourceDataDescription : this.analysis.sourceDataDescription,
    //     sourceFileName: this.analysis.source.sourceFileName ? this.analysis.source.sourceFileName : this.analysis.sourceFileName,
    //     sourceCategory: this.analysis.source.sourceCategory ? this.analysis.source.sourceCategory : this.analysis.sourceCategory,
    //     dataOwner: this.analysis.source.dataOwner ? this.analysis.source.dataOwner : this.analysis.dataOwner,
    //     uploadDate: this.analysis.uploadDate,
    //     department : this.analysis.source.department ? this.analysis.source.department : this.analysis.department
    //   },
    // };
    const formData: any = new FormData();
    formData.append('file[]', "");
    formData.append('data', JSON.stringify(payload));
  this.http.saveSourceProfile(formData, this.mode === 'edit' ? 'put' : 'post').subscribe((result: any) => {
    if (result.errorMsg) {
      alert(result.errorMsg)
    }
      if (result) {       
        this.http.getCleanSource().subscribe((result: any) => {
          //console.log(result)
          this.allSourceCategory = result.SourceDetailsList;
          let dqId = this.route.snapshot.queryParamMap.get('sourceId');
          const dataFromDq = _.find(result.SourceDetailsList, function (o) {
            return o.sourceId === dqId;
          })
          localStorage.setItem('dataDq', JSON.stringify(dataFromDq));
          this.uploadId = dataFromDq.sourceId;
          this.processTime = dataFromDq.uploadDate;
          this.source = dataFromDq;
          this.sourcePathSelected();
          this.uploadId = this.source.sourceId;
          this.loadProfile(this.source);
          //console.log(dataFromDq)
          this.source = dataFromDq;
          this.sourceByCategory =
            _.chain(this.allSourceCategory).
              groupBy('sourceCategory')
              .map((sourcesList, key) => {
                sourcesList.map(source => {
                  if (source.sourceId === this.source.sourceId) {
                    this.selectedCategoryKey = key;
                  }
                });
                return { category: key, sources: sourcesList };
              }).value();
        });
        
      }       
    }, (error) => {
      console.log(error.errorMsg);
    })
    //this.allSourceCategory = this.analysis.ProfiledBHistory;
    //console.log(this.analysis)

     
  }

  getProfileSource() {
    this.http.getCleanSource().subscribe((result: any) => {      
      this.allSourceCategory = result.SourceDetailsList;
      // this.cleanedFilesLog = result.SourceDetailsList[0].CleanedFilesLog ? result.SourceDetailsList[0].CleanedFilesLog : [];
      this.analysis = this.messageService.getSource();
      const cleanedFiles = JSON.parse(localStorage.getItem('dq-saved-data'));
      const uploadMethod = localStorage.getItem('dq-upload-data');
      if (this.analysis && uploadMethod === "clean") {
        this.uploadId = this.analysis.sourceId;
        this.processTime = this.analysis.uploadDate;
        this.source = this.analysis;
        this.sourcePathSelected();
        this.uploadId = this.source.sourceId;
       
      } else {
        this.analysis = result.SourceDetailsList.length ? result.SourceDetailsList[0] : [];
        this.source = this.analysis;        
        this.sourcePathSelected();
        this.uploadId = this.source.sourceId;
        this.processTime = this.analysis.uploadDate;
        if (cleanedFiles) {
          this.cleanedFilesPath = cleanedFiles.outputPath;
        }    
        if (this.source.length === 0) {
          this.showAllDetails = true;
          return;
        }
      }
      
     
      
      this.loadProfile(this.source);
      this.sourceByCategory =
        _.chain(this.allSourceCategory).
        groupBy('sourceCategory')
        .map((sourcesList, key) => {
          sourcesList.map(source => {
            if (source.sourceId === this.source.sourceId) {
              this.selectedCategoryKey = key;
            }
          });
          return { category: key, sources: sourcesList };
        }).value();
    });
  }

  sourcePathSelected() {
    this.mask.sourcepath = this.source.templateSourcePath;
    this.impute.sourcepath = this.source.templateSourcePath;
    this.delete.sourcepath = this.source.templateSourcePath;
    this.duplicate.sourcepath = this.source.templateSourcePath;
    this.profileSummary.sourcepath = this.source.templateSourcePath;
    this.mask.sourceFileName = this.source.templateSourcePath;
    this.impute.sourceFileName = this.source.templateSourcePath;
    this.delete.sourceFileName = this.source.templateSourcePath;
    this.duplicate.sourceFileName = this.source.templateSourcePath;
    this.profileSummary.sourceFileName = this.source.templateSourcePath;
    this.loadProfile(this.source);
  }
  cleanedFilesPath;
  hideClass=true;
  changeCategory(source, path) {
    this.analysis = source;
    // localStorage.setItem('dq-source-data', JSON.stringify(source));
    localStorage.removeItem('dq-source-data');
    localStorage.removeItem('dq-upload-data');
    localStorage.removeItem('dq-saved-data');
    this.source = source;
    this.cleanedFilesPath = path;
    this.initLoadProfile = false;
    if (path) {
      this.titleSrc = this.cleanedFilesPath;
      this.hideClass = false;
      //source.sourceId = source.CleanedFilesLog.cleanSourceId
    } else {
      this.titleSrc = source.templateSourcePath;
      this.hideClass = true;
    }
    this.getCleanedLogs();
    this.loadProfile(source);
    // this.loadReferencePreview();
    // this.loadCorrelation(this.selectedSource, this.datatype, this.method);
  }

  deleteSourceData(source) {
    const confirm = window.confirm('Are you sure you want to delete');
    const payload = {
      action: 'remove',
      db : 'clean',
      old_source: {
        sourceDataName: source.sourceDataName,
        sourceFileName: source.sourceFileName,
        sourceCategory: source.sourceCategory,
        dataOwner: source.dataOwner,
        sourceId: source.sourceId,
      },
      new_source: ''
    };
    if (confirm) {
      localStorage.removeItem('dq-source-data');
      localStorage.removeItem('dq-upload-data');
      this.http.deleteSource(payload).subscribe((res: any) => {
        //this.reloadCurrentRoute();
        this.ngOnInit();
      });
    }

  }

  editSourceData(sourceData) {
    localStorage.setItem('dq-source-data', JSON.stringify(sourceData));
    this.router.navigate(
       [`auth/create-profile-data`],
       { queryParams: { sourceId: sourceData.sourceId, mode: 'edit', method: 'clean'} }
    );
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/auth/data-cleaning', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
  domainMatches;
  changeProfile(profile) {
    this.domainMatches = _.keys(this.domainType.Domain_Matches); 
    this.profile = profile;
    const extractValues = ({ unique_values, counts }) => [unique_values.toString(), counts];   
    this.chartData = this.profile.frequncyAnalysis.map(extractValues);
      this.resetPreview();
      this.attrubute = profile.column;
      this.mask.column = profile.column;
      this.impute.column = profile.column;
      this.delete.column_name = profile.column;
      this.duplicate.column_name = profile.column;
   }

   
  loadProfile(source, profile: any = '') {
    if (this.cleanedFilesPath) {
      this.titleSrc =this.cleanedFilesPath;
    } else {
      this.titleSrc = source.templateSourcePath;
    }

    this.isLoading = true;
    this.loaderMsg = 'Loading Profile...';
    const payload = {
         sourcepath: this.titleSrc
    };
    // if (this.cleanLogs) {
    //   this.getCleanedLogs();
    // } else {
    //   console.log('here we go....')
    // }
    
    this.http.getProfiles(payload).subscribe((result: any) => {
      this.profiles = result.profile ? result.profile : [];
        this.profileDetails = {
            nr_duplicates: result.nr_duplicates,
            nr_totalcols: result.nr_totalcols,
            nr_totalrecords: result.nr_totalrecords
         };

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

        this.profileSummary.numeric = 0;
        this.profileSummary.alphabetic = 0;
        this.profileSummary.alphanumeric = 0;
        this.profileSummary.nullcounts = 0;

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
        this.getCleanedLogs();
        this.isLoading = false;
      }, (error) => {
         this.isLoading = false;
      });
   }
   isCleanLog : boolean = false;
  getCleanedLogs() {
     this.isLogsLoading = true;
     const payload = {
         query_col : 'sourceId',
         query_val : this.analysis.sourceId
      };
    this.http.getCleanedLogs(payload).subscribe((result: any) => {
         this.isLogsLoading = false;
       this.cleanLogs = result ? result : [];
       if (this.cleanLogs) {
         this.isCleanLog = true;
       }
      }, (error) => {
         this.isLogsLoading = false;
      });
   }

  updateSourcePath(path, outputFileName) {
      this.source.templateSourcePath = path;
      this.mask.sourcepath = path;
      this.impute.sourcepath = path;
      this.delete.sourcepath = path;
      this.mask.sourceFileName = outputFileName;
      this.impute.sourceFileName = outputFileName;
      this.delete.sourceFileName = outputFileName;
      const profileCopy = {...this.profile};
      this.profile = {};
      this.loadProfile(this.source, profileCopy);
   }

   imputeColumns(datatype) {
      this.showConfirmDialog({
         title: 'Impute columns',
         message: `Are you sure want to impute the "${this.profile.column}" column with "${this.impute.value}" value?` ,
         cancelLable: 'No',
         okLable: 'Yes'
       }, () => {
         this.impute.column_data_type = datatype;
         this.impute = {
            ...this.impute,
            sourceFileName: this.impute.sourceFileName,
            sourceId: this.analysis.sourceId,
            uploadId: this.uploadId,
            processTime: this.processTime,
         };
         this.isLoading = true;
         this.loaderMsg = 'Imputing columns...';
         this.http.imputeColumnsReq(this.impute).subscribe((result: any) => {
            this.isLoading = false;
            if (result.outputpath) {
               this.updateSourcePath(result.outputpath, result.outputFileName);
            }
            // this.loadProfile(this.source, this.profile);
            this.showConfirmDialog({
               title: 'Delete',
               message: `Impution has been successfully completed.`,
               cancelLable: '',
               okLable: 'Ok'
             }, () => {
             }, () => {
             });
            this.getCleanedLogs();
         }, (error) => {
            this.isLoading = false;
         });
       }, () => {
       });

   }

   deleteColumnsRows() {
      const deleteObj = {...this.delete};

      if (!this.removeItems) {
         this.loadPreview('data_remove', '', this.deleteColumnsRows.bind(this));
         return;
      }

      if (deleteObj.category === 'row_nan' || deleteObj.category === 'col_nan') {
         deleteObj.formula = '';
      }

      let msg = `Are you sure want to delete the ${this.delete.type} with "Null" values?` ;
      if (this.delete.category === 'col_nan' && this.removeItems) {
         msg = `Are you sure want to delete the "${this.removeItems.cols_removed.join(', ')}" columns with "Null" values?`;
      }

      if (this.delete.category === 'row_nan' && this.removeItems) {
         msg = `Are you sure want to delete the ${this.removeItems.nr_rows_post} rows with Null values?`;
      }

      if (this.delete.category === 'col_with_value') {
         if (deleteObj.formula) {
            if (this.profile.attributeSummary.dataType === 'Numeric') {
               msg = `Are you sure want to delete the rows with the ${this.delete.column_name}
               column values
               "${this.delete.formula.operator1} ${this.delete.formula.cond_value1} and
               ${this.delete.formula.operator2} ${this.delete.formula.cond_value2}"?`;
            } else {
               msg = `Are you sure want to delete the rows with the ${this.delete.column_name}
               value = ${this.delete.values}?`;
            }
         }
      }

      this.showConfirmDialog({
         title: `Delete ${this.delete.type}`,
         message: msg,
         cancelLable: 'No',
         okLable: 'Yes'
       }, () => {
         this.isLoading = true;
         this.loaderMsg = 'Deleting columns...';
         this.delete.threshold = (this.delete.category === 'col_nan' || this.delete.category === 'row_nan')
            ? (this.delete.threshold / 100) : '';
         const payload = {
            ...this.delete,
            sourceFileName: this.delete.sourceFileName,
            sourceId: this.analysis.sourceId,
            uploadId: this.uploadId,
            processTime: this.processTime,
         };
         delete payload.type;
         if (payload.category === 'row_nan' || this.delete.category === 'col_nan') {
            payload.formula = '';
            payload.values = '';
         }

         if (payload.category === 'col_with_value' && this.profile.attributeSummary.dataType !== 'Numeric') {
            payload.formula = '';
         }

         payload.values = payload.values ? [payload.values] : '';

         this.http.deleteColumnsRowsReq(payload).subscribe((result: any) => {
            this.isLoading = false;
            if (result.outputpath) {
               this.updateSourcePath(result.outputpath, result.outputFileName);
            }
            // this.loadProfile(this.source, this.profile);
            this.showConfirmDialog({
               title: 'Delete',
               message: `${this.delete === 'column' ? 'Columns' : 'Rows'} are deleted successfully.`,
               cancelLable: '',
               okLable: 'Ok'
             }, () => {
             }, () => {
             });
            this.removeItems = '';
         }, (error) => {
            this.isLoading = false;
         });
       }, () => {
         this.removeItems = '';
       });

   }

   deleteDuplicates() {
      this.showConfirmDialog({
         title: 'Remove duplicate rows',
         message: `Are you sure want to delete the duplicate rows ${this.duplicate.columns.length ? 'based on the ' + this.duplicate.columns.join(', ') + ' columns' : ''}?` ,
         cancelLable: 'No',
         okLable: 'Yes'
       }, () => {
         this.isLoading = true;
         this.loaderMsg = 'Deleting duplicate records...';
         const payload = {
            sourcepath: this.source.templateSourcePath,
            action: 'remove_duplicates' ,
            select_cols: this.duplicate.columns.length ? this.duplicate.columns : '',
            keep: 'first',
            sourceFileName: this.impute.sourceFileName,
            sourceId: this.analysis.sourceId,
            uploadId: this.uploadId,
            processTime: this.processTime,
         };
         this.http.deleteDuplicatesReq(payload).subscribe((result: any) => {
            this.isLoading = false;
            if (result.outputpath) {
               this.updateSourcePath(result.outputpath, result.outputFileName);
            }
            this.showConfirmDialog({
               title: 'Delete',
               message: `Duplicate records are deleted successfully.`,
               cancelLable: '',
               okLable: 'Ok'
             }, () => {
             }, () => {
             });

         }, (error) => {
            this.isLoading = false;
         });
       }, () => {

       });


   }

  showPreviewTable:boolean = false;
  loadPreview(type, mask = '', callBack: any = '') {
    this.showPreviewTable = true;
      this.delete.formula.cond_value1 = this.delete.formula.cond_value1 ? this.delete.formula.cond_value1 : '';
      this.delete.formula.cond_value2 = this.delete.formula.cond_value2 ? this.delete.formula.cond_value2 : '';

      const payloads = {
         duplicate: {
            sourcepath: this.source.templateSourcePath,
            action: 'preview' ,
            select_cols: this.duplicate.columns.length ? this.duplicate.columns : '',
            keep: '',
            sourceFileName: this.impute.sourceFileName,
            sourceId: this.analysis.sourceId,
            uploadId: this.uploadId,
            processTime: this.processTime,
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
            formula:
               (this.delete.category === 'col_with_value' && this.profile.attributeSummary.dataType === 'Numeric')
                  ? this.delete.formula : '',
            threshold : (this.delete.category === 'col_nan' || this.delete.category === 'row_nan') ? (this.delete.threshold / 100) : ''
         }
    };
    
     this.loadProfilePreview(payloads[type], type, callBack);     
  }
  

  loadProfilePreview(payload, type, callBack) {
     this.loaderMsg = 'Loading preview...';
     this.isPreviewLoaded = false;
     this.isPreviewLoading = true;
     this.columnDefs = [];
     this.rowData = [];
     this.removeItems = '';
     this.http.getProfilePreview(payload, type).subscribe((res: any) => {
       const details: any = res.Preview ? res.Preview : {};
       this.colPreviewData = _.isEmpty(details);
       this.removeItemMessage = res.Preview;
         if (type === 'data_remove') {
            this.removeItems = {
               cols_removed: res.cols_removed,
               nr_cols_post: res.nr_cols_post,
               nr_cols_prior: res.nr_cols_prior,
               nr_rows_post: res.nr_rows_post,
               nr_rows_prior: res.nr_rows_prior
            };
       }
       this.showMessage = false;
       if (this.delete.category === 'col_nan') {
         if (this.removeItemMessage && this.removeItemMessage.length > 0) {
          this.showMessage = true;
           this.messageDisplay = this.removeItemMessage.join(', ') ? this.removeItemMessage : [];
           this.newMessage = this.messageDisplay ? this.messageDisplay : [];
         }        
      }
         this.parseSourcePreview(details);
         this.isLoading = false;
         if (callBack) {
            callBack();
         }
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
            ...this.defaultColDefs,
           //cellClass: this.cellClass,
            headerClass: this.newMessage.map((item, index) => {
              if (key === item) {
                return 'rag-green';
              } 
            }),
          });
        });
      }           
      this.isPreviewLoaded = true;
      this.isPreviewLoading = false;
  }
  
  // cellClass(params) {
  //   return params.value === 'None' ? 'rag-green' : 'rag-amber';
  // }
  // headerClass(params) {
  //   console.log(this.newMessage);
  //   console.log(params.colDef.field)
  //   if (params.colDef.field === 'CANCELLATION_REASON') {
  //     return 'rag-green';
  //   }
    //return params.value === 'Cabin' ? 'rag-green2' : 'rag-amber';
  //}

    changeRemoveCategory(type) {
      if (type === 'column') {
         this.delete.category = 'col_nan';
      } else {
         this.delete.category = 'row_nan';
      }
    }

    showConfirmDialog(msg, successCallback, failureCallback) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
         width: '400px',
         data: {
           title: msg.title,
           message: msg.message,
           cancelLable: msg.cancelLable,
           okLable: msg.okLable
         }
       });

      dialogRef.afterClosed().subscribe(data => {
         if (data.action === 'ok') {
            if (successCallback) {
               successCallback();
            }
         } else {
            if (failureCallback) {
               failureCallback();
            }
         }
       });
    }

  showSaveConfirm(source) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Save soruce',
         message: `Are you sure want to save this updated source?` ,
         cancelLable: 'No',
        okLable: 'Yes',
        showReason: true,
        reasonLabel : 'File Name'
      }
    });
   
    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok') {
        const payload = {
          sourceId : source.sourceId,
          sourcePath : source.templateSourcePath,
          uploadId : source.sourceId,
          uploadTime : source.uploadDate,
          outputPath : 'cleaned_data',
          outputFileName : data.reason + '.csv'
        };
        this.http.saveCleanSource(payload).subscribe((result: any) => {
          if (result.errorflag === 'True') {
            alert(result.errorMsg);
            return;
          }
          this.savedFiles = result.SourceDetailsList[0].CleanedFilesLog[result.SourceDetailsList[0].CleanedFilesLog.length - 1];
          localStorage.setItem('dq-cleaned-data', JSON.stringify(result));
         
          if (this.savedFiles) {
            this.updateSourcePath(this.savedFiles.outputPath, this.savedFiles.outputFileName);           
          }
          localStorage.setItem('dq-saved-data', JSON.stringify(this.savedFiles));
          if (this.mode === 'dqm') {
            this.router.navigate([`auth/data-quality-monitoring`], {queryParams: {from: 'cleaning'}});
          } else {
            this.ngOnInit();
            //this.reloadCurrentRoute();
            //window.location.reload();
          }
        });
      }
     
    });
      // this.showConfirmDialog({
      //    title: 'Save soruce',
      //    message: `Are you sure want to save this updated source?` ,
      //    cancelLable: 'No',
      //   okLable: 'Yes',
      //   showReason: true,
      //  }, () => {
      //   console.log('Okay');
      //   console.log(source);
      //   const payload = {
      //     source_ID : source.sourceId,
      //     source_path : source.templateSourcePath,
      //     upload_ID : source.sourceId,
      //     upload_time : source.uploadDate,
      //     output_path : "cleaned_data",
      //     output_filename : source.sourceDataName + "_updated"
      //   }
      //   this.http.saveCleanSource(payload).subscribe((res: any) => {
      //   })
      //  }, () => {
      //    console.log('Cancel');
      //  });
    }

    calulateRowNanThreshold() {
      const value = (this.profileDetails.nr_totalcols - ((this.delete.threshold / 100) * this.profileDetails.nr_totalcols));
      return value.toFixed(0);
   }


   calulateColNanThreshold() {
      const value = ((this.delete.threshold / 100) * this.profileDetails.nr_totalrecords);
      return value.toFixed(0);
  }
  changeMenu(menu) {
    if (menu === 'preview') {
      this.previewTable = true;
    } else {
      this.previewTable = true;
    }
  }

  showCleanLogs() {
        this.dialog.open(CleanLogsComponent, {
          width: '900px',
          data: this.cleanLogs     
        });
  }
  
    nullcounts : any;
  showPreviewDetails() {
    const payload = {
      sourcepath: this.source.templateSourcePath,
      column_name: this.profile.column,
    };
    this.http.getNullCounts(payload).subscribe((res: any) => {
      this.nullcounts = res.Preview ? res.Preview : {};
      this.dialog.open(PreviewDialogComponent, {
        width: '95%',
        // height: '95%',
        data: {
         ...this.nullcounts
        }
     });
      }, (error) => {
        this.isPreviewLoaded = false;
        this.isPreviewLoading = false;
      });
   
 }
  
    changeView(view) {
      if (view === 'table') {
        this.showtable = true;
      } else {
        this.showtable = false;
      }
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
  

   uniqueName;
   domainTypeIdentity() {
     const payload = {
       sourcepath: this.titleSrc
     };
     this.http.getDomainTypeIdentity(payload).subscribe((result: any) => {
      
       this.domainType = result;
       this.uniqueName = result.Unique_values.DESTINATION_AIRPORT;
       
     }, (error) => {
       console.log('ERROR', error);
     })
   }
 
   newVal;
   isLoad = false;
   getAllSearchRequest() {
       this.http.getStartRequests().subscribe((result: any) => {
         this.newVal = _.values(result);
         this.isLoad = true;
         if (this.closeResult) {
           return;
         }
       });
   }
 
   searchMultipleNumbers() {
     const payload = this.uniqueName;
     this.http.startRequests(payload)
     this.getAllSearchRequest();
     if (this.closeResult) {
       return;
     }
    
   }
   
   closeResult: string;
   openScrollableContent(longContent) {
      this.searchMultipleNumbers(); 
     this.modalService.open(longContent, { scrollable: true, size: 'xl' }).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       //window.location.reload();
     });       
   }
 
   private getDismissReason(reason: any): string {
     if (reason === ModalDismissReasons.ESC) {
       return 'by pressing ESC';
     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
       return 'by clicking on a backdrop';
     } else {
       return  `with: ${reason}`;
     }
  }
  collectionResult: any;
  downloadSrcName:string;
  downloadSource(sourcepath, fileName) {
    this.downloadSrcName = fileName;
    const payload = {
      sourcepath: sourcepath,
      seeMoreEnabled: 'YES',
    };
    this.http.getProfileView(payload).subscribe((res: any) => {
      this.collectionResult  = res.Preview ? res.Preview : {};
      this.downloadCSV();
      }, (error) => {
        this.isPreviewLoaded = false;
        this.isPreviewLoading = false;
      });
  }

  status: any[];
  
  
  downloadCSV() {
    const formula = this.downloadSrcName;
    this.status = ['approved', 'rejected', 'pending'];
    let data = _.values(this.collectionResult);
    let fileHeaders = [];
    Object.keys(this.collectionResult[0]).map((key, index) => {     
      fileHeaders.push(key);
    });
    let options = {
      title: '',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      //showLabels: true,
      //showTitle: true,
      //useBom: true,
      headers: fileHeaders
    };

    new Angular2Csv(data, formula, options);
  }
 }


