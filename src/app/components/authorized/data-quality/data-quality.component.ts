import {AfterViewInit, Component, ViewChild, OnInit, TemplateRef} from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Angular2Csv } from 'angular2-csv';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-data-quality',
  templateUrl: './data-quality.component.html',
  styleUrls: ['./data-quality.component.scss']
})


  
  
export class DataQualityComponent implements OnInit {
  @ViewChild("contentMsg", { static: false }) modalContent: TemplateRef<any>;
  @ViewChild("contentErr", {static: false}) modalErrContent: TemplateRef<any>;
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
  uploadButton : boolean = false;
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
    }, (error) => {
      alert(error);
    })
  }
  alertErrMessage;
  isLoadingCDB = false;
  getDBCollectionsClient() {
    this.isLoadingCDB = true;
    this.showAllDetails = false;
    this.uploadButton = false;
    const payload = {
      client_url: this.clientUrl || "",
    }
    this.http.getDBCollections(payload).subscribe((result: any) => {
      console.log(result)
      this.uploadButton = true;
      this.newDB = result.Cluster_Contents;
      this.db = _.keys(result.Cluster_Contents);
      this.dbValues.push(this.newDB);
      this.dataSource = _.values(result.Cluster_Contents);
      this.isLoadingCDB = false;
      this.showAllDetails = true
    }, (error) => {
      this.alertErrMessage = error.message;
      this.isLoadingCDB = false;
      this.modalService.open(this.modalErrContent, { windowClass: 'modal-holder' });           
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
  startIndex = "";
  endIndex = "";

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

  collectionResult;
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
      console.log(result);
      this.collectionResult = result.Preview;
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
  urlValue;
  fileName;
  alertMessage;
  savePath;
  open(saveFile, item, column) {    
    this.modalService.open(saveFile, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      const payload = {  
          client_url: result.urlValue || '',
          db: item,
          collection:column,   
          output_filename : result.fileName + '.csv',
        }
      this.http.saveMangoDbCollection(payload).subscribe((result: any) => {
          console.log(result);
          this.alertMessage = result.Message;
          this.savePath = result.outputpath;
          this.modalService.open(this.modalContent, { windowClass: 'modal-holder' });
        }, (error) => {
          this.isLoading = false;
        });
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openSm(content) {
    this.modalService.open(content, { windowClass: 'modal-holder' }).result.then((result) => {
      this.clientUrl = result;
      this.getDBCollectionsClient();
    })
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


  status: any[];
  formula: string = 'mongoDb';
  
  downloadCSV() {
    this.status = ['approved', 'rejected', 'pending'];
    let data = this.collectionResult;
    let fileHeaders = [];
    Object.keys(this.collectionResult[0]).map((key, index) => {     
      fileHeaders.push(key);
    });
    let options = {
      title: '',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      //showLabels: true,
      //showTitle: true,
      //useBom: true,
      headers: fileHeaders
    };

    new Angular2Csv(data, this.formula, options);
  }

}

