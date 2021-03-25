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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

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

  constructor(
    public dialog: MatDialog,
    private http: HttpService,
    private messageService: MessageService,
    private auth: AuthGuardService,
    private router: Router) {
      const role = this.auth.getUserRole().role;
      this.role = role ? role : 'VIEWER';
  }

  ngOnInit() {
    this.getAllSources();
    // this.getAllAnalysis();
  }


  getAllSources() {
    this.isLoading = true;
    this.loaderMsg = 'Loading Sources...';
    this.http.getSources().subscribe((result: any) => {
      this.sourceList = result ? result : [];
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
      {queryParams: {sourceId: sourceData.sourceId, mode: 'edit'}}
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


  uploadSource(analysis) {
    console.log(analysis);
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
    const payload =  {
      sourceId: analysis.sourceId,
      rulesetId: analysis.rules.length ? analysis.rules[0].rulesetId : '',
      isMultiSource: isMultiSource ? 'Yes' : 'No',
      multiSourceKey: analysis.multisource ? analysis.multisource : '',
      uploadDate: analysis.uploadDate,
      uploadTime: '20:28',
      sourceObj: analysis.source
    };
    const formData: any = new FormData();
    formData.append('file[]', analysis.file);
    formData.append('data', JSON.stringify(payload));
    this.isLoading = true;
    this.loaderMsg = 'Saving Source data...';
    this.http.uploadSource(formData).subscribe((result: any) => {
      this.isLoading = false;
      alert('Source has been uploaded successfully.');
    }, (error) => {
      this.isLoading = false;
    });

  }

  launchAnalysis(analysis) {
    this.showAnalysis = true;
    // this.isLoading = true;
    this.selectedAnalysis = analysis;
    this.loaderMsg = 'Launching analysis...';
    const payload = {
      sourceId: analysis.sourceId,
      rulesetId: analysis.rulesetId
    };
    this.selectedColumns = this.selectedAnalysis.rules[0].selectedColumns;
    if (this.selectedColumns && this.selectedColumns.length) {
      this.selectedCDE = this.selectedColumns[0];
      this.launchAnalysisByKey(this.selectedCDE);
    }
    this.analyseData = [];
    this.analyseKeyData = [];
    // this.http.launchAnalysis(payload).subscribe((result: any) => {
    //   this.isLoading = false;
    //   this.analyseData = result ? result : [];
    //   const chartData = {
    //     labels: [],
    //     validity: [],
    //     completeness: []
    //   };

    //   this.analyseData.map(data => {
    //     chartData.labels.push(data.airline);
    //     chartData.validity.push(data.Validity.value);
    //     chartData.completeness.push(data.completness.value);
    //   });
    //   this.analyseChartData = chartData;
    // }, (error) => {
    //   this.analyseData = [];
    //   this.isLoading = false;
    // });
  }

  launchAnalysisByKey(keyname) {
    this.showAnalysisByKey = true;
    this.isLoadingDetails = true;
    this.selectedKey = keyname;
    this.loaderMsg = 'Launching analysis...';
    const payload = {
      sourceId: this.selectedAnalysis.sourceId,
      rulesetId: this.selectedAnalysis.rulesetId,
      keyname
    };
    this.analyseKeyData = [];
    this.http.launchAnalysisByKey(payload).subscribe((result: any) => {
      this.isLoadingDetails = false;
      this.analyseKeyData = result ? result : [];
      const chartData = {
        labels: [],
        validity: [],
        completeness: [],
        // integrity: [],
        uniqueness: []
      };
      this.analyseKeyData.map(data => {
        chartData.labels.push(data[this.selectedKey]);
        chartData.validity.push(data.Validity ? data.Validity.value : 0);
        chartData.completeness.push(data.completness ? data.completness.value : 0);
        // chartData.integrity.push(data.Integrity ? +data.Integrity.value : 0);
        chartData.uniqueness.push(data.Uniqueness ? +data.Uniqueness.value : 0);
      });

      this.analyseKeyChartData = chartData;
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
     console.log(data);
     let rules = data.rules.filter((rule) => data.rulesetId === rule.rulesetId);
     rules = (rules && rules.length) ? rules[0] : {columns: [], selectedColumns: []};
     console.log(rules);
    // If create ruleset take the columns list from default ruleset.
     if (!data.rulesetId) {
      rules.columns = data.rules && data.rules.length ? data.rules[0].columns : [];
    }
     const columns = [];
     if (data.source.availableColumns) {
      data.source.availableColumns.map((column, index) => {
        columns.push({id: (index + 1), title: column});
      });
     }

     const selectedColumns = [];
     rules.selectedColumns.map((column, index) => {
      selectedColumns.push({id: (index + 1), title: column});
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
      {queryParams: {sourceId: analysis.sourceId, rulesetId: analysis.rulesetId, mode: analysis.mode}}
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

  dateClass = (d: Date) => {
    const date = d.getDay();
    // Highlight saturday and sunday.
    return (date === 4) ? 'highlight-dates' : undefined;
  }

}
