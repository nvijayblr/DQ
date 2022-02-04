import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-completeness-detail',
  templateUrl: './completeness-detail.component.html',
  styleUrls: ['./completeness-detail.component.scss']
})
export class CompletenessDetailComponent implements OnInit {

  showDetails: boolean = false;
  tableDataSource: MatTableDataSource<any>;
  selectedColumn: any = {};
  selectedTabIndex: any;
  key: any;

  displayedColumns: string[] = [];
  selectedKey: any;
  selectedValue: any;
  analysisItem: any = {};
  analysisKeys: any = {};

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
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    autoWidth: true,
    nav: false,
  };

  constructor(public dialogRef: MatDialogRef<CompletenessDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpService) {
    this.initData(data);
  }

  ngOnInit() {
    this.tableDataSource = new MatTableDataSource([]);
    this.loadFirstItem();
  }

  initData(data) {
    this.key = data.key;
    this.selectedKey = data.selectedKey;
    this.selectedValue = data.selectedValue;
    this.analysisItem = data.analysisItem;
    this.analysisKeys = data.analysisKeys;
    const index = this.analysisKeys.indexOf(this.key);
    this.selectedTabIndex = index;
  }

  loadFirstItem() {
    const details = this.analysisItem[this.key].details;
    if (details && details.length) {
      this.launchAnalysisDetails(details[0]);
    }
  }

  launchAnalysisDetails(rowItem) {
    this.selectedColumn = rowItem;
    this.showDetails = false;
    this.http.launchAnalysisDetails(rowItem.outlier).subscribe((res: any) => {
      const details: any = res.result ? res.result : {};
      const rowData = [];
      this.displayedColumns = [];
      this.showDetails = true;
      Object.keys(details).map((key) => {
        rowData.push({
          ROW_ID: key,
          ...details[key]
        });
      });
      if (rowData.length) {
        Object.keys(rowData[0]).map((key) => {
          this.displayedColumns.push(key);
        });
      }
      this.tableDataSource = new MatTableDataSource(rowData);
    }, (error) => {

    });
  }

  selectedTabChange(tab) {
    this.selectedColumn = {};
    this.selectedTabIndex = tab.index;
    this.showDetails = false;
    this.key = this.analysisKeys[tab.index];
    this.loadFirstItem();
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
