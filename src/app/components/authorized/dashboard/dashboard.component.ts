import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  analysisList = [];
  analyseData = [];
  analyseChartData: any = {};
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

  constructor(
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
      console.log(this.analysisList);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  launchAnalysis(analysis) {
    this.showAnalysis = true;
    this.isLoading = true;
    this.selectedAnalysis = analysis;
    this.loaderMsg = 'Launching analysis...';
    const payload = {
      analysisId: analysis.analysisId,
      rulesetId: analysis.rulesetId
    };
    this.analyseData = [];
    this.http.launchAnalysis(payload).subscribe((result: any) => {
      this.isLoading = false;
      this.analyseData = result ? result : [];
      const chartData = {
        labels: [],
        validity: [],
        completeness: []
      };

      this.analyseData.map(data => {
        chartData.labels.push(data.airline);
        chartData.validity.push(data.Validity.value);
        chartData.completeness.push(data.completness.value);
      });
      this.analyseChartData = chartData;
    }, (error) => {
      this.analyseData = [];
      this.isLoading = false;
    });
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
    }, (error) => {
      this.analyseKeyData = [];
      this.isLoadingDetails = false;
    });
  }

  createEditRuleset(data) {
    let rules = data.rules.filter((rule) => data.rulesetId === rule.rulesetId);
    rules = (rules && rules.length) ? rules[0] : {columns: [], selectedColumns: []};

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
      columns,
      selectedColumns,
      rulesetName: rules.rulesetName,
      rules: rules.ruleset ? rules.ruleset : []
    };
    localStorage.setItem('analysis', JSON.stringify(analysis));
    this.router.navigate(
      [`auth/analysis`],
      {queryParams: {analysisId: analysis.analysisId, rulesetId: analysis.rulesetId}}
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

}
