import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';
import { AlertService } from 'src/app/shared/alert-dialog/alert-dialog.service';
import * as moment from 'moment';
import { ColDef } from 'ag-grid-community';
import { CompletenessDialogComponent } from 'src/app/shared/completeness-dialog/completeness-dialog.component';
import { MatDialog } from '@angular/material';
import { CompletenessDetailComponent } from '../completeness-detail/completeness-detail.component';

@Component({
  selector: 'app-source-analysis',
  templateUrl: './source-analysis.component.html',
  styleUrls: ['./source-analysis.component.scss']
})
export class SourceAnalysisComponent implements OnInit {
  analysis: any;
  uploadId: any;
  selectedKey: any;

  uploadsHistory: any = [];
  analysisByTimeData: any = [];
  showErrorMessage: boolean = false;
  analyseKeyData: any;
  selectedCDE: any = '';
  analyseKeyChartData: any = {};
  analysisKeys: any = [];
  displayedColumns: any = [];
  selectedColumns: any = [];
  isGraphView: boolean = true;
  isLoading: any = 0;

  private gridApi;
  private gridColumnApi;
  defaultColDef = {
    sortable: true,
    resizable: true,
    filter: true,
  };
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
  columnDefs: ColDef[];
  rowData = [];

  constructor(private http: HttpService,
    private alertService: AlertService,
    private dialog: MatDialog) { }

  @Input() set analysisData(value: string) {
    this.initAnalysis(value);
  }

  ngOnInit() {
    this.initAnalysis({});
  }

  initAnalysis(analysis) {
    this.analysis = analysis || {};
    this.uploadsHistory = this.analysis.UploadsHistory ? this.analysis.UploadsHistory : [];
    this.selectedColumns = (this.analysis.source && this.analysis.source.categorialColumns) ? this.analysis.source.categorialColumns : [];
    if (this.selectedColumns && this.selectedColumns.length) {
      this.selectedCDE = this.selectedColumns[0];
      this.validateAnalysis(this.selectedCDE);
    }
    this.analyseKeyData = [];
  }

  validateAnalysis(keyname) {
    const uploadDate = this.analysis.uploadDate ? moment(this.analysis.uploadDate).format('MM-DD-YYYY') : '';
    const uploadsHistory = this.analysis.UploadsHistory ? this.analysis.UploadsHistory : [];

    this.uploadId = '';
    uploadsHistory.map(history => {
      if (moment(history.uploadDate).format('MM-DD-YYYY') === uploadDate) {
        this.uploadId = history.uploadId;
      }
    });
    if (this.uploadId) {
      this.selectedKey = keyname;
      this.launchAnalysisByKeyDate('', this.uploadId);
    }
  }

  onRulesetChange(rulesetId: any) {
    this.analysis.rulesetId = rulesetId;
    this.launchAnalysisByKeyDate(this.selectedKey, this.uploadId);
  }

  onUploadHistoryChange(history: any) {
    this.uploadId = history.uploadId;
    this.launchAnalysisByKeyDate(this.selectedKey, this.uploadId);
  }

  launchAnalysisByKeyDate(keyname: any, uploadId: any) {
    this.isLoading++;
    this.selectedKey = keyname;
    const payload = {
      sourceId: this.analysis.sourceId,
      rulesetId: this.analysis.rulesetId,
      uploadId,
      keyname
    };
    this.viewAnalysisByTime(keyname, uploadId);
    this.http.launchAnalysisByKey(payload).subscribe((result: any) => {
      if (result.errorCode && result.errorMsg) {
        this.showErrorMessage = true;
      } else {
        this.showErrorMessage = false;
      }
      this.analyseKeyData = result.results ? result.results : [];
      this.selectedKey = result.keyname ? result.keyname : this.selectedKey;
      this.selectedCDE = this.selectedKey;
      this.getChartData();
      this.isLoading--;
    }, (error) => {
      this.analyseKeyData = [];
      this.isLoading--;
    });
  }

  viewAnalysisByTime(keyname, uploadId) {
    this.isLoading++;
    this.selectedKey = keyname;
    const payload = {
      sourceId: this.analysis.sourceId,
      rulesetId: this.analysis.rulesetId,
      uploadId,
      keyname
    };
    this.http.getAnalysisByTime(payload).subscribe((result: any) => {
      this.analysisByTimeData = result ? result : [];
      this.isLoading--;
    }, (error) => {
      this.alertService.showError(error);
      this.isLoading--;
    });
  }

  getChartData() {
    const analyseRowItem = (this.analyseKeyData && this.analyseKeyData.length) ? this.analyseKeyData[0] : [];
    const chartData = {
      labels: []
    };

    this.displayedColumns = [];
    this.analysisKeys = [];
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
    this.genrateColDefs();
  }

  changeView(value) {
    this.isGraphView = value;
  }

  onBarClicked(event) {
    this.showDetails(event.details, event.key, this.selectedKey, event.selectedValue, this.analyseKeyData[event.rowIndex]);
  }

  showDetails(details, key, selectedKey, selectedValue, analysisItem?) {
    this.dialog.open(CompletenessDetailComponent, {
      width: '95%',
      // height: '95%',
      data: {
        details: details ? details : [],
        key,
        selectedKey,
        selectedValue,
        selectedAnalysis: this.analysis,
        analysisItem,
        analysisKeys: this.analysisKeys
      }
    });
  }

  genrateColDefs() {
    const columnDefs = [];
    columnDefs.push({
      field: this.selectedKey,
      colId: 0,
      unSortIcon: true
    });
    this.analysisKeys.map((col, index) => {
      columnDefs.push({
        field: col,
        colId: index + 1,
        //filter: false, // 'agNumberColumnFilter'
        unSortIcon: true,
        valueGetter: params => params.data[col].value,
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
          const { value } = params;
          const { bgSettings } = this.settings || [];
          const bg = bgSettings.filter(setting => (+value >= +setting.min && +value <= +setting.max));
          if (bg && bg.length) {
            return { color: '#fff', backgroundColor: bg[0].color };
          }
          return 'transparent';
        }
      });
    });
    this.columnDefs = columnDefs;
    this.rowData = this.analyseKeyData;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onCellClicked(e) {
    const analysisItem = e.data;
    const key = e.colDef.field;
    const details = analysisItem[key].details ? analysisItem[key].details : [];
    const selectedValue = analysisItem[this.selectedKey];
    this.showDetails(details, key, this.selectedKey, selectedValue, analysisItem);
  }


}
