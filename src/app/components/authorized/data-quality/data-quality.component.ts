import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http-service.service';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-data-quality',
  templateUrl: './data-quality.component.html',
  styleUrls: ['./data-quality.component.scss']
})
  
export class DataQualityComponent implements OnInit {

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
  isLoadingDB : boolean = false;
  getDBCollections() {
    this.isLoadingDB = true;
    this.showAllDetails = false
    this.http.getDBCollections().subscribe((result: any) => {
      this.db = _.keys(result.Cluster_Contents);
      this.dbCollections = _.keys(result.Collection_Contents);
      this.isLoadingDB = false;
      this.showAllDetails = true
    })
  }
  isLoadingCO: boolean = false;
  collectionTable;
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
      this.collectionTable = result.Preview;
      this.cityKey = _.keys(result.Preview);
      console.log(this.cityKey);
      this.collectionKey.push(_.keys(result.Preview[0]));
      for (var i = 0; i < this.cityKey.length; i++) {
        //console.log(_.keys(result.Preview[i]));
        //console.log(_.values(result.Preview[i]));        
        this.collectionValue.push(_.values(result.Preview[i]));
        this.isLoadingCO = false;
      }
      //console.log(this.collectionValue);
    }, (error) => {
      alert(error.message);
    })
  }

}

