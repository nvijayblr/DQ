import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*', display: 'block' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild('sourceTable', { read: MatSort, static: true }) sort: MatSort;
  @ViewChild('detailTable', { read: MatSort, static: true }) sortDetails: MatSort;

  searchValue: any = '';
  userLogin: any;
  allSourceCategory: any;
  detailedResults: any;
  sourceByCategory: any;
  showDetailedTable: boolean = false;

  displayedColumns: string[] = ['Completeness', 'Accuracy', 'Uniqueness', 'Validity'];
  displayedColumnsDetails: string[] = ['sourceName', 'completeness', 'Accuracy', 'Uniqueness', 'Validity'];

  tableDataSource: MatTableDataSource<any>;
  dataSourceDetails: MatTableDataSource<any>;

  constructor(private http: HttpService, private authService: AuthGuardService) {
    this.userLogin = this.authService.getLoggedInUserDetails();
  }

  ngOnInit() {
    this.tableDataSource = new MatTableDataSource([]);
    this.getSourceResults();
  }

  applySearch(value) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();

    if (this.tableDataSource.paginator) {
      this.tableDataSource.paginator.firstPage();
    }

    this.dataSourceDetails.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceDetails.paginator) {
      this.dataSourceDetails.paginator.firstPage();
    }
  }

  getSourceResults() {
    const payload = {
      username: this.userLogin.name,
    }
    this.http.getSourceResults(payload).subscribe((result: any) => {
      this.allSourceCategory = result.Aggresults;
      this.detailedResults = result.detailedResults;
      this.sourceByCategory = [];
      this.detailedResults.map((result, i) => {
        this.sourceByCategory.push({
          'sourceID': result.sourceId,
          'sourceName': result.sourceName,
          'sourceDesc': result.sourceDesc,
          'sourceType': result.sourceType,
          "description": result.detailedResults,
          "subResult": result.AggSubResults
        });
      })
      const ELEMENT_DATA: PeriodicElement[] = [this.allSourceCategory];
      this.tableDataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.tableDataSource.sort = this.sort;
      this.tableDataSource.paginator = this.paginator;
    });
  }

  getDetailedResults() {
    this.showDetailedTable = true;
    const ELEMENT_DATA: PeriodicElementDetails[] = this.sourceByCategory;
    this.dataSourceDetails = new MatTableDataSource<PeriodicElementDetails>(ELEMENT_DATA);
    this.dataSourceDetails.sort = this.sortDetails;
    this.dataSourceDetails.paginator = this.paginator;
  }

  goPrevious() {
    this.showDetailedTable = false;
  }

}

export interface PeriodicElement {
  completeness: number;
  Accuracy: number;
  Uniqueness: number;
  Validity: number;
}

export interface PeriodicElementDetails {
  sourceName: string;
  uploadDate: string;
  completeness: number;
  Accuracy: number;
  Uniqueness: number;
  Validity: number;
  description: string;
}