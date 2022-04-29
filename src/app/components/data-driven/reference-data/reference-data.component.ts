import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
  @ViewChild('referencePaginator', { static: true }) refPaginator: MatPaginator;
  @ViewChild('viewReference', { static: true }) dialogRef!: TemplateRef<any>;

  @ViewChild('modalPaginator', { static: false }) set paginator(value: MatPaginator) {
    this.modalPaginator = value;
  }

  displayedColumns: any = [];
  tableDataSource: MatTableDataSource<any>;
  modalDataSource: MatTableDataSource<any>;
  modalPaginator: MatPaginator;
  subscription: Subscription;
  isChecked: boolean = false;
  isLoading: boolean = false;
  searchLoading: boolean = false;
  noDataFound: boolean = false;
  searchValue: any;
  searchHeader: any = [];
  searchTables: any = [];
  searchData: any = [];
  reference: any;

  constructor(private http: HttpService,
    private ds: DataDrivenService,
    private dialog: MatDialog,
    private alertService: AlertService) {
    this.subscription = this.ds.getReferenceData().subscribe((data) => {
      this.reference = data || {};
      if (data) {
        this.getPreviewData(this.reference);
      } else {
        this.displayedColumns = [];
        this.tableDataSource = new MatTableDataSource([]);
        this.reference = '';
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
      this.tableDataSource.paginator = this.refPaginator;
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
    this.searchLoading = true;
    this.initSearch();
    this.http.getSearchCollections(payload).subscribe((result: any) => {
      result = result || {};
      if (result.msg) {
        this.noDataFound = true;
      } else {
        this.searchTables = Object.keys(result);
        this.searchTables.map((key: any) => {
          this.searchHeader.push(Object.keys(result[key][0] || {}));
          this.searchData.push(result[key]);
        });
      }
      this.searchLoading = false;
    }, (error) => {
      this.searchLoading = false;
      this.alertService.showError(error.message);
    });
  }

  initSearch() {
    this.searchHeader = [];
    this.searchTables = [];
    this.searchData = [];
    this.noDataFound = false;
  }

  resetSearch() {
    this.searchValue = '';
    this.initSearch();
  }

  viewAllData(index) {
    this.modalDataSource = new MatTableDataSource(this.searchData[index]);

    const viewDialog = this.dialog.open(this.dialogRef, {
      data: {
        title: this.searchTables[index],
        headers: this.searchHeader[index],
        dataSource: this.modalDataSource
      }
    });
    viewDialog.afterOpened().subscribe(data => {
      this.modalDataSource.paginator = this.modalPaginator;
    });
  }

}
