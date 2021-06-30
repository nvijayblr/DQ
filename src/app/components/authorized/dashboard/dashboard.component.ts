import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Options } from '@angular-slider/ngx-slider';
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
import { map, startWith } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as Highcharts from 'highcharts';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

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
      const rights = this.auth.getUserRole().rights;
      this.rights = rights ? rights : [];

      const role = this.auth.getUserRole().role;
      this.role = role ? role : 'VIEWER';
  }

   analysisList = [];
   selectedAnalysis: any = {};
   selectedAnalysisIndex = 0;
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
   showtable = true;

   isOverviewLoading = true;
   showAnalysisOverview = false;
   overviewErrorMsg = '';

   isPreviewLoaded = false;
   isPreviewLoading = false;
 
   defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
   rowData: any = [];
   columnDefs: any = [];

  customOptions: OwlOptions = {
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

  currentlyOpenedItemIndex = -1;
  previewTable = false;
  previewProfile = true;
  previewCorrelation = false;
  titleSrc;
  selectedSource;
  initLoadProfile;
  profiles: any = [];
  profile: any = {};
  attrubute: any = '';
  profileDetails = {
    nr_duplicates: 0,
    nr_totalcols: 0,
    nr_totalrecords: 0
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
  minValue = 0;
  maxValue = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    showTicks: true
  };

  coMatrix: any = {};
  datatype = 'mixed';
  method = '';


   ngOnInit() {
      localStorage.removeItem('dq-source-names');
      this.getAllSources();
      // this.getAllAnalysis();
  }
  
  changeProfile(profile) {
    this.profile = profile;
    if (this.profile.LengthStatistics) {
       this.options.floor = profile.LengthStatistics.Min ? profile.LengthStatistics.Min : 0;
       this.options.ceil = profile.LengthStatistics.Max ? profile.LengthStatistics.Max : 0;
    }
    this.attrubute = profile.column;
    // console.log(this.profile);
}


  changeCategory(source) {
    console.log('change category', source);
    //localStorage.setItem('dq-source-data', JSON.stringify(source));
    localStorage.removeItem('dq-source-data');    
    this.selectedSource = source;
    this.initLoadProfile = false;
    this.titleSrc = source.templateSourcePath;
  }

  loadProfile(source) {
      console.log('source.templateSourcePath', source)
      this.isLoading = true;
      this.loaderMsg = 'Loading Profile...';
      this.titleSrc = source.templateSourcePath;
      const payload = {
        sourcepath: source.templateSourcePath
    };
  this.http.getProfiles(payload).subscribe((result: any) => {
    this.profiles = result.profile ? result.profile : [];
    this.profileDetails = {
      nr_duplicates: result.nr_duplicates,
      nr_totalcols: result.nr_totalcols,
      nr_totalrecords: result.nr_totalrecords
   };
    if (this.profiles.length) {
       this.changeProfile(this.profiles[0]);
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
    this.isLoading = false;
 }, (error) => {
    this.isLoading = false;
 });
}

   getAllSources() {
      this.isLoading = true;
      this.loaderMsg = 'Loading Sources...';
     this.http.getSources().subscribe((result: any) => {
        console.log('result', result);
       this.sourceList = (result && result.Analysis) ? result.Analysis : [];
       console.log('sourceList', this.sourceList);
         const sourceNames = [];
         this.sourceList.map(item => {
            sourceNames.push(item.source.sourceDataName);
         });
         localStorage.setItem('dq-source-names', JSON.stringify(sourceNames));
         if (this.sourceList.length) {
            this.showEditDetails(0, this.sourceList[0]);
         }
       this.isLoading = false;
       this.loadProfile(this.sourceList[0].source);
      //  this.selectedSource = this.sourceList[0].source;
      //  console.log('this.selectedSource', this.sourceList[0].source.templateSourcePath)
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
  
  deleteSourceData(source) {
    const confirm = window.confirm('Are you sure you want to delete');
    const payload = {
      action: 'remove',
      db : "profile",
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
      this.http.deleteSource(payload).subscribe((res: any) => {
        this.reloadCurrentRoute();
      });
    }

  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
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

  showEditDetails(index, data) {
    console.log('data', data);
      this.isOverviewLoading = true;
      this.showAnalysisOverview = false;

      this.selectedAnalysis = data;
      this.selectedAnalysisIndex = index;

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
    this.initOverview(this.selectedAnalysis);
    this.changeCategory(data);    
    this.loadProfile(data.source);
    this.loadReferencePreview();
    this.loadCorrelation(data.source, this.datatype, this.method);
  }

  loadCorrelation(source, type, method) {
    this.isLoading = true;
    this.loaderMsg = 'Loading Correlation...';
    const payload = {
      sourcepath: source.templateSourcePath,
      cols_data_type: type,
      method
    };
    this.http.getCorrMatrix(payload).subscribe((result: any) => {
      this.coMatrix = result ? result : {};
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.coMatrix = {};
  });
  }



  loadReferencePreview() {
    this.isPreviewLoaded = false;
    this.isPreviewLoading = true;
    this.columnDefs = [];
    this.rowData = [];
    const payload = {
      sourcepath: this.titleSrc
    };
    this.http.getProfileView(payload).subscribe((res: any) => {
      const details: any = res.Preview ? res.Preview : {};
      this.parseSourcePreview(details);
      }, (error) => {
        this.isPreviewLoaded = false;
        this.isPreviewLoading = false;
      });

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
         type: "",
         connectionDetails: {},
         sourceId: analysis.sourceId,
         rulesetId: analysis.rules.length ? analysis.rules[0].rulesetId : '',
         isMultiSource: isMultiSource ? 'Yes' : 'No',
         multiSourceKey: analysis.multisource ? analysis.multisource : '',
         uploadDate: analysis.uploadDate,
         uploadTime: '20:28',
         uploadReason: reason ? reason : '',
         settings: analysis.settings,
       sourceObj: {
         ...analysis.source,
         type: "",
         connectionDetails: {
         },
         } 
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

   initOverview(analysis) {
      console.log('initOverview');
      this.selectedAnalysis = analysis;
      const uploadDate = this.selectedAnalysis.uploadDate ? moment(this.selectedAnalysis.uploadDate).format('MM-DD-YYYY') : '';
      const uploadsHistory = this.selectedAnalysis.UploadsHistory ? this.selectedAnalysis.UploadsHistory : [];

      this.overviewErrorMsg = '';

      if (!uploadsHistory.length) {
         this.overviewErrorMsg = 'Please upload the source to preview the analysis.';
      }
      if (uploadsHistory.length && !uploadDate) {
         this.overviewErrorMsg = 'Please the upload date to preview the analysis.';
      }

      if (uploadsHistory.length && uploadDate && !this.selectedAnalysis.highlightDates.includes(uploadDate)) {
         this.overviewErrorMsg = 'There is no source for selected date.';
      }

      localStorage.setItem('selected-analysis', JSON.stringify(this.selectedAnalysis));

      this.isOverviewLoading = false;
      this.showAnalysisOverview = true;
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

      this.isOverviewLoading = false;
      this.showAnalysisOverview = true;

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
         { queryParams: { sourceId: sourceData.sourceId, mode: 'dqm' } }
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

  setOpened(itemIndex) {
    this.currentlyOpenedItemIndex = itemIndex;
  }

  setClosed(itemIndex) {
    if (this.currentlyOpenedItemIndex === itemIndex) {
      this.currentlyOpenedItemIndex = -1;
    }
  }

  changeView(view) {
    if (view === 'table') {
      this.showtable = true;
    } else {
      this.showtable = false;
    }
  }

  changeMenu(menu) {
    if (menu === 'preview') {
      this.previewTable = true;
      this.previewProfile = false;
      this.previewCorrelation = false;
    } else if (menu === 'profile') {
      this.previewTable = false;
      this.previewProfile = true;
      this.previewCorrelation = false;
    } else if (menu === 'correlation') {
      this.previewTable = false;
      this.previewProfile = false;
      this.previewCorrelation = true;
    } else {
      this.previewTable = false;
      this.previewProfile = true;
      this.previewCorrelation = false;
    }
    console.log(menu);
  }
}

