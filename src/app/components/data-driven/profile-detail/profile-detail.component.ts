import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  showDetail = false;
  profile: any = {};
  profileDetails: any = {};
  chartData: any = [];

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
  @Input() isDataClean: boolean = false;
  @Output() impute = new EventEmitter<string>();

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

  imputeColumn(column, event) {
    this.impute.emit(column);
    event.stopPropagation();
  }

}
