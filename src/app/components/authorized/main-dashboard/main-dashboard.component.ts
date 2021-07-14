import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http-service.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  displayedColumns: string[] = ['completeness', 'Accuracy', 'Uniqueness', 'Validity'];
  dataSource;

  @ViewChild(MatPaginator, { static:false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
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
  }
  allSourceCategory;
  sourceByCategory:any = [];;
  newObj;
  taskDetails: any = [];
  uploadDate: any = [];
  getSourceResults() {
    const payload = {
      username : this.userLogin.name,
    }
    this.http.getSourceResults(payload).subscribe((result: any) => {
      this.allSourceCategory = result;
      console.log(result);
      this.allSourceCategory.map((result, i) => {
        this.taskDetails.push({'sourceID' : result.sourceId, 'sourceDes' : result.sourceDesc, 'sourceName' : result.sourceName })
      })
      Object.keys(this.allSourceCategory).map((key, index) => {
        this.newObj = this.allSourceCategory[key].results.map((val, i) => {
          return val;
        });
      });
      this.newObj.map((key, index) => {
        this.uploadDate.push(key.uploadDate);
        this.sourceByCategory.push(key.results);
      })

      console.log(this.uploadDate);

      //console.log(moment(this.uploadDate).format('MM-DD-YYYY'));
           
      const ELEMENT_DATA: PeriodicElement[] = this.sourceByCategory;
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
    });
  }
}


export interface PeriodicElement {
  completeness: string;
  Accuracy: number;
  Uniqueness: number;
  Validity: string;
}
