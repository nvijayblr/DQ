import {AfterViewInit, Component, ViewChild, OnInit, TemplateRef} from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
// import { Angular2Csv } from 'angular2-csv';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-data-quality',
  templateUrl: './data-quality.component.html',
  styleUrls: ['./data-quality.component.scss']
})




export class DataQualityComponent implements OnInit {
  constructor(private http: HttpService, private fb: FormBuilder, private modalService: NgbModal) {

  }
  @ViewChild('contentMsg', { static: false }) modalContent: TemplateRef<any>;
  @ViewChild('contentErr', {static: false}) modalErrContent: TemplateRef<any>;
  isPreviewLoaded = false;
  isPreviewLoading = false;
  defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
  rowData: any = [];
  columnDefs: any = [];
  getDB: FormGroup;
  closeResult = '';
  globalData;
  globalDataPath;
  loadingGlobalData = false;
  loadingLocalData = false;





  searchValue;
  searchResult: any = [];
  isLoading = false;
  allObjHeader: any = [];
  allObjKeys: any = [];
  allObjKeysExt;
  allObjValues: any = [];
  collections: any = [];

  db;
  dbCollections;
  showAllDetails = false;
  isLoadingDB = false;
  newDB;
  dbValues: any = [];
  clientUrl;
  uploadButton = false;
  alertErrMessage;
  isLoadingCDB = false;


  isLoadingCO = false;
  isLoadingBt = false;
  collectionTable: any = [];
  cityKey;
  collectionKey: any = [];
  collectionValue: any = [];
  selectdItem;
  selectedColumn;
  isButtonShow = false;
  startIndex = 0;
  endIndex = 100;

  collectionResult;
  titleSrc;


  dataSource;
  urlValue;
  fileName;
  alertMessage;
  savePath;
  clientUrlLog: any = [];
  showConnectionList:boolean = false;
  
  private options: string[] = ["10", "20", "50"];
  selectedQuantity = "10";


  status: any[];
  formula = 'mongoDb';
  selected;
  dbSaveLogs: any = [];

  ngOnInit() {
    this.getDB = this.fb.group({
      database: ['', []],
      databaseCollection: ['', []],
    });
    this.globalData = localStorage.getItem('globalData');
    if (!this.globalData) {
      this.loadingLocalData = true;
      this.getDBCollections();
    } else {
      this.loadingGlobalData = true;
      this.globalDataPath = JSON.parse(this.globalData);
    }

    console.log(this.globalDataPath)
    this.getMongoDBClientHistoryURL();
    this.getMongoDBSaveLog();
  }


  getMongoDBClientHistoryURL() {
    this.http.getMongoDBClientHistory().subscribe((result: any) => {
      this.clientUrlLog = result.ClientHist;
      if (result.ClientHist.length) {
        this.clientUrl = result.ClientHist[0].client_url;
        this.showConnectionList = false;
      } else {
        this.showConnectionList = true;
      }     
    })
  }

  showDbCollectionName:boolean = false;


  onWriterChange() {
    if (this.clientUrl === 'others') {
      this.showDbCollectionName = true;
    } else {
      this.showDbCollectionName = false;
      this.getDBCollections();
    }
  }


  getMongoDBSaveLog() {
    this.http.getMongoDBSaveLog().subscribe((result: any) => {    
      this.dbSaveLogs = result.SavedFilesLog;
    })
  }

  applySearch(event: Event) {
    this.searchValue = event;
    const payload = {
      query: this.searchValue
    };
    this.isLoading = true;
    this.http.getSearchCollections(payload).subscribe((result: any) => {
      this.isLoading = false;
      this.searchResult = result;
      this.allObjHeader = _.keys(this.searchResult);
      this.allObjValues = _.values(this.searchResult);
      for (let i = 0; i < this.allObjValues.length; i++) {
        this.allObjKeys.push(_.keys(this.allObjValues[i][0]));
      }
      for (let i = 0; i < this.allObjHeader.length; i++) {
        this.allObjKeysExt = this.searchResult[this.allObjHeader[i]].map(function(key, value) {
          return _.values(key);
        });
        this.collections.push(this.allObjKeysExt);
      }

    }, (error) => {
      alert(error.message);
    });
  }
  

  getDBCollections() {
    this.isLoadingDB = true;
    this.showAllDetails = false;
    const payload = {
      client_url: '',
    };
    this.http.getDBCollections(payload).subscribe((result: any) => {
      this.newDB = result.Cluster_Contents;
      this.db = _.keys(result.Cluster_Contents);
      this.dbValues.push(this.newDB);
      this.dataSource = _.values(result.Cluster_Contents);
      this.isLoadingDB = false;
      this.showAllDetails = true;
    }, (error) => {
      alert(error.message);
    });
  }

  newDBClient;
  dbValuesClient: any = [];
  dbClient;
  dataSourceClient;
  loadingClientDetails:boolean = false;
  getDBCollectionsClient() {
    this.isLoadingCDB = true;
    this.showAllDetails = false;
    this.uploadButton = false;
    const payload = {
      client_url: this.clientUrl || '',
    };
    this.http.getDBCollections(payload).subscribe((result: any) => {
      this.uploadButton = true;
      this.newDBClient = result.Cluster_Contents;
      this.dbClient = _.keys(result.Cluster_Contents);
      this.dbValuesClient.push(this.newDBClient);
      this.dataSourceClient = _.values(result.Cluster_Contents);
      this.isLoadingCDB = false;
      this.loadingClientDetails = true;
    }, (error) => {
      this.alertErrMessage = error.message;
      this.isLoadingCDB = false;
      this.modalService.open(this.modalErrContent, { windowClass: 'modal-holder' });
    });
  }

  onOptionsSelected(value: string) {
    this.dbCollections = this.newDB[value];
  }

  loadMoreDb() {
    this.startIndex = this.endIndex;
    this.endIndex = this.endIndex + 100;
    const payload = {
      client_url: '',
      db: this.selectdItem,
      collection: this.selectedColumn,
      start_index: this.startIndex,
      end_index: this.endIndex
    };
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
    });
  }

  getClusterKeys;
  selectdItems: any = [];
  getDBPreviewCluster(item, column) {
    const colName = column.toString();
    this.isButtonShow = false;
    this.getClusterKeys = _.find(this.dbSaveLogs, item, item)

    if (this.getClusterKeys) {
      this.titleSrc = this.getClusterKeys[item][colName].outputpath;
      this.loadReferencePreview(this.titleSrc);
      this.isButtonShow = false;
    } else {
      this.selectedColumn = column.toString();
      this.selectdItem = item;
      this.isButtonShow = false;
      const payload = {
        client_url : this.clientUrlConnection,
        db: this.selectdItem,
        collection: this.selectedColumn,
        start_index: this.startIndex,
        end_index : this.endIndex
      };
      this.isLoadingCO = true;
      this.http.getDBPreview(payload).subscribe((result: any) => {
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
      });
    }
    
    
  }

  getDBPreview(item, column) {
    this.selectedColumn = column.toString();
    this.selectdItem = item;
    this.isButtonShow = false;
    const payload = {
      client_url : '',
      db: this.selectdItem,
      collection: this.selectedColumn,
      start_index: this.startIndex,
      end_index : this.endIndex
    };
    this.isLoadingCO = true;
    this.http.getDBPreview(payload).subscribe((result: any) => {
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
    });
  }

  loadReferencePreview(path) {
    this.isButtonShow = false;
    this.titleSrc = path;
    const payload = {
      sourcepath: this.titleSrc
    };
    this.isLoadingCO = true;
    this.http.getProfileView(payload).subscribe((res: any) => {
      this.collectionResult = res.Preview;
      this.isLoadingCO = false;
      this.rowData = [];
      this.columnDefs = [];
      this.collectionTable = res.Preview;
      if (this.collectionTable) {
        this.previewTable();
    }

      this.isPreviewLoaded = true;
      this.isPreviewLoading = false;
    }, (error) => {
      this.isLoadingCO = false;
        this.isPreviewLoaded = false;
      this.isPreviewLoading = false;
      
      alert(error.message);
      });

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


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openSave(saveLocalFile, item, column) {
    this.modalService.open(saveLocalFile, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      const payload = {
          client_url: result.clientUrl || '',
          db: item,
          collection: column,
          //source_path: outputpath,
          output_filename : result.fileName + '.csv',
      };
      this.isLoadingCO = true;
      this.http.saveMangoDbCollection(payload).subscribe((result: any) => {
        this.isLoadingCO = false;
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

  open(saveFile, item, column, outputpath) {
    this.modalService.open(saveFile, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      const payload = {
          client_url: result.clientUrl || '',
          db: item,
          collection: column,
          source_path: outputpath,
          //output_filename : result.fileName + '.csv',
      };
      this.isLoadingCO = true;
      this.http.copyMangoDbCollection(payload).subscribe((result: any) => {
        this.isLoadingCO = false;
        this.alertMessage = result.message || result.errorMsg;
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
  clientUrlConnection;
  openSm(content) {
    this.modalService.open(content, { windowClass: 'modal-holder' }).result.then((result) => {
      this.clientUrl = result;
      this.clientUrlConnection = result;
      this.getDBCollectionsClient();
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

  downloadCSV() {
    // this.status = ['approved', 'rejected', 'pending'];
    // const data = this.collectionResult;
    // console.log(data);

    // const fileHeaders = [];
    // Object.keys(this.collectionResult[0]).map((key, index) => {
    //   fileHeaders.push(key);
    // });
    // const options = {
    //   title: '',
    //   fieldSeparator: ',',
    //   quoteStrings: '"',
    //   decimalseparator: '.',
    //   // showLabels: true,
    //   // showTitle: true,
    //   // useBom: true,
    //   headers: fileHeaders
    // };

    // new Angular2Csv(data, this.formula, options);
  }

}

