import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';

import { HttpService } from 'src/app/services/http-service.service';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';



@Component({
  selector: 'app-data-quality',
  templateUrl: './data-quality.component.html',
  styleUrls: ['./data-quality.component.scss']
})
  
export class DataQualityComponent implements OnInit {
  isPreviewLoaded = false;
  isPreviewLoading = false;
  defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
  rowData: any = [];
  columnDefs: any = [];


  getDB: FormGroup;
  constructor(private http: HttpService, private fb: FormBuilder,) {
  
  }

  ngOnInit() {
    this.getDB = this.fb.group({
      database: ['', []],
      databaseCollection: ['', []],
    });
    this.getDBCollections();

  }


  
  searchValue;
  searchResult: any = [];
  isLoading: boolean = false;
  allObjHeader: any = [];
  allObjKeys: any = [];
  allObjKeysExt;
  allObjValues: any = [];
  collections:any = [];
    
  applySearch(event: Event) {  
    this.searchValue = event;
    const payload = {
      query : this.searchValue
    }
    this.isLoading = true;
    this.http.getSearchCollections(payload).subscribe((result: any) => {
      this.isLoading = false;
      this.searchResult = result;
      this.allObjHeader = _.keys(this.searchResult);
      this.allObjValues = _.values(this.searchResult);
      for (let i = 0; i < this.allObjValues.length; i++) {
        this.allObjKeys.push(_.keys(this.allObjValues[i][0]))
      };
      for (let i = 0; i < this.allObjHeader.length; i++){
        console.log(this.allObjHeader[i]);
        this.allObjKeysExt = this.searchResult[this.allObjHeader[i]].map(function (key, value) {
          return _.values(key);
        });
       this.collections.push(this.allObjKeysExt);
      };

    }, (error) => {
      alert(error.message);
    });
  }

  db;
  dbCollections;
  showAllDetails: boolean = false;
  isLoadingDB: boolean = false;
  newDB;
  dbValues:any = [];
  getDBCollections() {
    this.isLoadingDB = true;
    this.showAllDetails = false
    this.http.getDBCollections().subscribe((result: any) => {     
      this.newDB = result.Cluster_Contents;
      this.db = _.keys(result.Cluster_Contents);
      // console.log(this.newDB);
      // console.log(this.db);
      this.dbValues.push(this.newDB);
      this.dataSource = _.values(result.Cluster_Contents);
      console.log(this.dataSource);
      //this.dbCollections = _.keys(result.Collection_Contents);
      this.isLoadingDB = false;
      this.showAllDetails = true
    })
  }

  onOptionsSelected(value:string){
    this.dbCollections = this.newDB[value]
}
  isLoadingCO: boolean = false;
  collectionTable: any = [];
  cityKey;
  collectionKey: any = [];
  collectionValue: any = [];
  selectdItem;
  getDBPreview(item, column) {
    console.log(item, column);
    this.selectdItem = column;
    console.log(column.toString());
    const payload = {
      client_url : "",
      db: item,
      collection : column.toString()
    }
    this.isLoadingCO = true;
    this.http.getDBPreview(payload).subscribe((result: any) => {
      this.isLoadingCO = false;
      this.rowData = [];
    this.columnDefs = [];
      this.collectionTable = result.Preview;
      if (this.collectionTable) {     
      Object.keys(this.collectionTable).map((key, index) => {
        this.rowData.push({
          ...this.collectionTable[key]
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
    }
  
      this.isPreviewLoaded = true;
      this.isPreviewLoading = false;

    }, (error) => {
      this.isLoadingCO = false;
      alert(error.message);
    })
  }

  dataSource;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue);
    }
}

