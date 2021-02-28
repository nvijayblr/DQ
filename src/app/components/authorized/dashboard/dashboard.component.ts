import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  styleUrls: ['./dashboard.component.scss']
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
      colorCtr: 'green',
    }, {
      min: '90',
      max: '100',
      colorCtr: 'red',
    }]
  };

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
    this.getAllAnalysis();
  }

  getAllAnalysis() {
    this.isLoading = true;
    this.loaderMsg = 'Saving Ruleset...';
    this.http.getAllAnalysis().subscribe((result: any) => {
      this.analysisList = result.Analysis ? result.Analysis : [];
      // console.log(this.analysisList);
      this.isLoading = false;
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
      analysisId: analysis.analysisId,
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
      analysisId: this.selectedAnalysis.analysisId,
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
        integrity: [],
        uniqueness: []
      };
      this.analyseKeyData.map(data => {
        chartData.labels.push(data[this.selectedKey]);
        chartData.validity.push(data.Validity.value);
        chartData.completeness.push(data.completness.value);
        chartData.integrity.push(+data.Integrity.value);
        chartData.uniqueness.push(+data.Uniqueness.value);
        this.tooltipDET.push(data.completness.details);
      });

      this.tooltipDET.map((item, i) => {
          if (item[i] !== undefined) {
             this.nullCount = item[i];
          }
       });

      this.finalCount = `Flight number is missing for ${this.nullCount.nullcount} records`;
      this.originAirport = `Origin Airport is missing for ${this.nullCount.nullcount} records`;
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
    let rules = data.rules.filter((rule) => data.rulesetId === rule.rulesetId);
    rules = (rules && rules.length) ? rules[0] : {columns: [], selectedColumns: []};
    console.log(rules);
    // If create ruleset take the columns list from default ruleset.
    if (!data.rulesetId) {
      rules.columns = data.rules && data.rules.length ? data.rules[0].columns : [];
    }
    const columns = [];
    rules.columns.map((column, index) => {
      columns.push({id: (index + 1), title: column});
    });

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
      {queryParams: {analysisId: analysis.analysisId, rulesetId: analysis.rulesetId, mode: analysis.mode}}
    );
  }

  gotoList() {
    this.showAnalysis = false;
    this.showAnalysisByKey = false;
  }

  onSourceCSVSelected(file) {
    const formData: any = new FormData();
    formData.append('file[]', file);
    formData.append('data', JSON.stringify({
      sourceFilename: file.name
    }));
    this.isLoading = true;
    this.isSourceUploaded = false;
    this.loaderMsg = 'Uploading the source cvs...';
    this.http.uploadSourceCSV(formData).subscribe((result: any) => {
      this.isLoading = false;
      this.isSourceUploaded = true;
    }, (error) => {
      this.isLoading = false;
      this.isSourceUploaded = false;
    });
  }

   openHighlightSettingsDialog(): void {
    const dialogRef = this.dialog.open(ColorDialogComponent, {
      width: '800px',
      data: this.settings
    });
     dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        this.settings = result;
    });
  }

   openDialogColor() {
     this.dialog.open(CompletenessDialogComponent, {
      width: '660px',
      data: {incompleteCDE: this.nullCount }
     });
 }

}
