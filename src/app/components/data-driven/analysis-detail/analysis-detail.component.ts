import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-analysis-detail',
  templateUrl: './analysis-detail.component.html',
  styleUrls: ['./analysis-detail.component.scss']
})
export class AnalysisDetailComponent implements OnInit {
  @ViewChild('previewDetail', { static: false }) preview: any;
  @ViewChild('correlationDetail', { static: false }) correlation: any;

  profileDetails = [];
  chartData: any = [];
  showDetail = false;
  profile: any = {};
  selectedSource: any = {};
  selectedTab: any = 0;


  attributeSummary = [{
    column: 'Type',
    value: 'Alphabetic'
  }, {
    column: 'Null Counts',
    value: 0
  }];
  datatypeIcon = {
    Alphabetic: ['AB', 'red'],
    Numeric: ['12', 'green'],
    Alphanumeric: ['A1', 'blue'],
    DateTime: ['DT', 'brown']
  };
  detailColumns: string[] = ['column', 'dataType', 'nullCount', 'minLength', 'maxLength', 'averageLength', 'medianLength'];
  displayedCorColumns: string[] = ['column', 'value'];
  displayedColumns: string[] = [];

  tableDataSource: MatTableDataSource<any>;

  @Input() set profileData(value: string) {
    this.profile = value;
    this.tableDataSource = new MatTableDataSource(this.profile);
    this.hideDetailView();
  }

  @Input() set source(value: string) {
    this.selectedSource = value;
    this.onSelectTab(this.selectedTab);
  }

  ngOnInit() {
    this.tableDataSource = new MatTableDataSource([]);
    this.hideDetailView();
  }

  showDetailView(value) {
    let foundIndex: any;
    if (!this.showDetail) {
      this.displayedColumns = [this.detailColumns[0]];
      this.showDetail = true;
    }
    this.tableDataSource.data.forEach((elem, index) => {
      elem.active = false;
      if (elem.column === value.column) {
        foundIndex = index;
      }
    });
    this.tableDataSource.data[foundIndex].active = true;
    const extractValues = ({ unique_values, counts }) => [unique_values.toString(), counts];
    this.chartData = this.tableDataSource.data[foundIndex].frequncyAnalysis.map(extractValues);
    this.profileDetails = this.tableDataSource.data[foundIndex];

  }
  hideDetailView() {
    this.showDetail = false;
    this.displayedColumns = this.detailColumns;
    this.chartData = [];
    this.profileDetails = [];
  }

  onSelectTab(index) {
    if (index == '1') {
      this.preview.loadSourcePreview();
    } else if (index == '2') {
      this.correlation.loadCorrelation()
    }
    this.selectedTab = index;
  }

}