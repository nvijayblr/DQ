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
  getDBCollections() {
    this.isLoadingDB = true;
    this.showAllDetails = false
    this.http.getDBCollections().subscribe((result: any) => {
      this.newDB = result.Cluster_Contents;
      this.db = _.keys(result.Cluster_Contents);
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
  collectionValue : any = [];
  getDBPreview() {    
    const payload = {
      client_url : "",
      db: this.getDB.controls.database.value,
      collection : this.getDB.controls.databaseCollection.value
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

}

