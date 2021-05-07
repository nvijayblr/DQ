import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-completeness-dialog',
  templateUrl: './completeness-dialog.component.html',
  styleUrls: ['./completeness-dialog.component.scss']
})
export class CompletenessDialogComponent implements OnInit {
  isLoading = false;
  defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
  columnDefs: any = [];
  rowData: any = [];
  showDetails = false;
  selectedColumn: any = {};
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
