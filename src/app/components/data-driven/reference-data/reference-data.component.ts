import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http-service.service';
import { AlertService } from 'src/app/shared/alert-dialog/alert-dialog.service';
import { CreateReferenceComponent } from '../create-reference/create-reference.component';
import { DataDrivenService } from '../data-driven.service';

@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
  styleUrls: ['./reference-data.component.scss']
})
export class ReferenceDataComponent {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: any = [];
  tableDataSource: MatTableDataSource<any>;
  subscription: Subscription;
  isChecked: boolean = false;
  isLoading: boolean = false;
  searchValue: any;

  constructor(private http: HttpService,
    private ds: DataDrivenService,
    private dialog: MatDialog,
    private alertService: AlertService) {
    this.subscription = this.ds.getReferenceData().subscribe((data) => {
      if (data) {
        this.getPreviewData(data);
      }
    });
  }

  getPreviewData(data: any) {
    const payload = {
      client_url: '',
      db: data.key,
      collection: data.id,
      start_index: 0,
      end_index: 100
    };
    this.displayedColumns = [];
    this.isLoading = true;
    this.http.getDBPreview(payload).subscribe((result: any) => {
      let list = result.Preview || [];
      if (list.length) {
        Object.keys(list[0]).map((key) => {
          this.displayedColumns.push(key);
        });
      }
      this.tableDataSource = new MatTableDataSource(list);
      this.tableDataSource.paginator = this.paginator;
      this.isLoading = false;
    }, (error) => {
      this.alertService.showError(error.message);
      this.isLoading = false;
    });
  }

  createReference() {
    const dialogRef = this.dialog.open(CreateReferenceComponent, {
      width: '800px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(data => { });
  }

  applySearch(searchValue: any) {
    const payload: any = {
      query: searchValue,
      client_url: ""
    };
    if (this.isChecked) {
      payload.matchcase = "";
    }
    this.http.getSearchCollections(payload).subscribe((result: any) => {
    }, (error) => {
      this.alertService.showError(error.message);
    });
  }

  onChange($event) {

  }

}
