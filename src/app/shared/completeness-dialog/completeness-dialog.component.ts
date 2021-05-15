import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
    items: 6,
    responsive: {
      0: {
        items: 3,
        center: true,
        loop: true,
      },
      740: {
        items: 5,
        center: false,
        loop: false,
      }
    },
 };
  constructor(
    public dialogRef: MatDialogRef<CompletenessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpService,
  ) {
  }


  ngOnInit() {
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

  onNoClick(): void {
    this.dialogRef.close();
  }

}
