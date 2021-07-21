import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



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
  closeResult = '';
  constructor(private http: HttpService, private fb: FormBuilder,private modalService: NgbModal) {
  
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
  collections: any = [];
    
  applySearch(event: Event) {
    this.searchValue = event;
    const payload = {
      query: this.searchValue
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
      for (let i = 0; i < this.allObjHeader.length; i++) {
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
  dbValues: any = [];
  clientUrl;
  getDBCollections() {
    this.isLoadingDB = true;
    this.showAllDetails = false;
    const payload = {
      client_url: this.clientUrl || "",
    }
    this.http.getDBCollections(payload).subscribe((result: any) => {
      this.newDB = result.Cluster_Contents;
      this.db = _.keys(result.Cluster_Contents);
      this.dbValues.push(this.newDB);
      this.dataSource = _.values(result.Cluster_Contents);
      this.isLoadingDB = false;
      this.showAllDetails = true
    })
  }

  onOptionsSelected(value: string) {
    this.dbCollections = this.newDB[value]
  }
  

  isLoadingCO: boolean = false;
  isLoadingBt: boolean = false;
  collectionTable: any = [];
  cityKey;
  collectionKey: any = [];
  collectionValue: any = [];
  selectdItem;
  selectedColumn;
  isButtonShow: boolean = false;
  startIndex: number = 0;
  endIndex: number = 100;

  loadMoreDb() {
    this.startIndex = this.endIndex;
    this.endIndex = this.endIndex + 100;
    const payload = {
      client_url: "",
      db: this.selectdItem,
      collection: this.selectedColumn,
      start_index: this.startIndex,
      end_index: this.endIndex
    }
    this.isLoadingBt = true;
    this.http.getDBPreview(payload).subscribe((result: any) => {
      this.isLoadingBt = false;
      this.collectionTable = result.Preview;
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
      this.rowData = JSON.parse(JSON.stringify(this.rowData));
    })
  }

  getDBPreview(item, column) {
    this.selectedColumn = column.toString();
    this.selectdItem = item;
    this.isButtonShow = false;
    const payload = {
      client_url : "",
      db: this.selectdItem,
      collection: this.selectedColumn,
      start_index: this.startIndex,
      end_index : this.endIndex
    }
    this.isLoadingCO = true;
    this.http.getDBPreview(payload).subscribe((result: any) => {
      this.isLoadingCO = false;
      this.isButtonShow = true;
      this.rowData = [];
      this.columnDefs = [];
      this.collectionTable = result.Preview;
      if (this.collectionTable) {     
        this.previewTable();
    }
  
      this.isPreviewLoaded = true;
      this.isPreviewLoading = false;

    }, (error) => {
      this.isLoadingCO = false;
      alert(error.message);
    })
  }

  previewTable() {
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
  

  dataSource;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.clientUrl = result;
      this.getDBCollections();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

