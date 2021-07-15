import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http-service.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class MainDashboardComponent implements OnInit {
  displayedColumns: string[] = ['completeness', 'Accuracy', 'Uniqueness', 'Validity'];
  dataSource;
  displayedColumnsDetails: string[] = ['uploadDate', 'sourceName', 'completeness', 'Accuracy', 'Uniqueness', 'Validity'];
  dataSourceDetails;
  expandedElement: PeriodicElementDetails | null;

  @ViewChild(MatPaginator, { static:false}) paginator: MatPaginator;
  @ViewChild('table1', { read: MatSort, static: true }) sort: MatSort;
  @ViewChild('table2', { read: MatSort, static: true }) sortDetails: MatSort;
  userLogin;
  getDB: FormGroup;
  constructor(private http: HttpService, private fb: FormBuilder,) {
    this.userLogin = JSON.parse(localStorage.getItem('dq_rights'));    
  }

  
  ngOnInit() {
    this.getSourceResults();
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    this.dataSourceDetails.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceDetails.paginator) {
      this.dataSourceDetails.paginator.firstPage();
    }
  }
  allSourceCategory;
  sourceByCategory:any = [];;
  newObj;
  taskDetails: any = [];
  uploadDate: any = [];
  detailedResults: any;
  showDetailedTable: boolean = false;
  getSourceResults() {
    const payload = {
      username : this.userLogin.name,
    }
    this.http.getSourceResults(payload).subscribe((result: any) => {
      this.allSourceCategory = result.Aggresults;
      this.detailedResults = result.detailedResults;
      console.log(this.detailedResults);
      this.detailedResults.map((result, i) => {
       
        result.detailedResults.map((res, i) => {
          this.taskDetails.push({
            'sourceName': result.sourceName,
            'uploadDate': res.uploadDate,
            'completeness': res.results.completeness,
            'Accuracy': res.results.Accuracy,
            'Uniqueness': res.results.Uniqueness,
            'Validity': res.results.Validity,
            "description": result.AggSubResults
          })
        })
        
      })
      console.log(this.taskDetails)

      const ELEMENT_DATA: PeriodicElement[] = [this.allSourceCategory];
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
    });
  }

  getDetailedResults() {
    this.showDetailedTable = true;
    const ELEMENT_DATA: PeriodicElementDetails[] = this.taskDetails;
      this.dataSourceDetails = new MatTableDataSource<PeriodicElementDetails>(ELEMENT_DATA);
      this.dataSourceDetails.sort = this.sortDetails;
       this.dataSourceDetails.paginator = this.paginator;   
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
