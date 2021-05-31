import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-completeness-dialog',
  templateUrl: './completeness-dialog.component.html',
  styleUrls: ['./completeness-dialog.component.scss']
})
export class CompletenessDialogComponent implements OnInit {
  @ViewChild('owlCar', { static: false }) owlCar;
  isLoading = false;
  defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
  columnDefs: any = [];
  rowData: any = [];
  showDetails = false;
  selectedColumn: any = {};
  analysisItem: any = {};
  analysisKeys: any = {};
  key = '';
  selectedKey = '';
  selectedValue = '';
  selectedTabIndex = 0;
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
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    autoWidth: true,
    nav: false,
 };
  constructor(
    public dialogRef: MatDialogRef<CompletenessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpService,
    private router: Router
  ) {
    this.key = data.key;
    this.selectedKey = data.selectedKey;
    this.selectedValue = data.selectedValue;
    this.analysisItem = data.analysisItem;
    this.analysisKeys = data.analysisKeys;
    const index = this.analysisKeys.indexOf(this.key);
    this.selectedTabIndex = index;
  }

  ngOnInit() {
    this.loadFirstItem();
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
    this.isLoading = true;
    this.columnDefs = [];
    this.rowData = [];
    this.http.launchAnalysisDetails(rowItem.outlier).subscribe((res: any) => {
      const details: any = res.result ? res.result : {};
      Object.keys(details).map((key, index) => {
        this.rowData.push({
          ROW_ID: key,
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
      this.isLoading = false;
      this.showDetails = true;
    }, (error) => {
      this.isLoading = false;
    });
  }

  selectedTabChange(tab) {
    this.selectedColumn = {};
    this.selectedTabIndex = tab.index;
    this.showDetails = false;
    this.key = this.analysisKeys[tab.index];
    this.loadFirstItem();
  }

  launchDataCleaning(sourceData, mode= ''): void {
    const analysis = localStorage.getItem('selected-analysis');
    if (analysis) {
      localStorage.setItem('dq-source-data', analysis);
      this.router.navigate(
         [`auth/data-cleaning`],
         { queryParams: { sourceId: sourceData.sourceId } }
      );
      this.dialogRef.close();
    }
 }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
