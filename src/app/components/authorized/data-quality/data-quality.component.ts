import {AfterViewInit, Component, ViewChild, OnInit, TemplateRef} from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private http: HttpService, private fb: FormBuilder, private modalService: NgbModal,private router: Router, ) {

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
  showConnectionList: boolean = false;
  globalDataGroup;
  
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
     this.globalDataGroup = 
        _.chain(this.globalDataPath.Ref_data_files)
          // Group the elements of Array based on `color` property
          .groupBy("db")
          // `key` is group's name (color), `value` is the array of objects
          .map((value, key) => ({ db: key, refdData: value }))
          .value()
      
    }
    console.log(this.globalDataGroup)
    console.log(this.globalDataPath)
    this.getMongoDBClientHistoryURL();
    this.getMongoDBSaveLog();
    // const getUrl = localStorage.getItem("client_url");
    // if (getUrl) {
    //   this.clientUrl = getUrl;
    //   this.getDBCollectionsClient()
    // }
    
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

  showDivider :boolean = false;

  applySearch(event: Event) {
    this.searchValue = event;
    const payload = {
      query: this.searchValue,
      client_url : ""
    };
    this.isLoading = true;
    this.showDivider = false;
    this.http.getSearchCollections(payload).subscribe((result: any) => {
      this.allObjKeys = [];
      this.collections = [];
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
      this.showDivider = true;

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
      console.log(result.Cluster_Contents);
      console.log(this.dbValues)
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
  selectedColumnN;
  getDBPreviewCluster(item, column) {
    this.selectedColumn = '';
    const colName = column;
    this.isButtonShow = false;
    console.log(this.dbSaveLogs);
    this.getClusterKeys = _.find(this.dbSaveLogs, item ? item : '', item ? item : '');
    //console.log('this.', this.getClusterKeys[item][colName])
    if (this.getClusterKeys && this.getClusterKeys[item][colName]) {    
      this.selectdItem = item;
      this.titleSrc = this.getClusterKeys[item][colName].outputpath;
      this.loadReferencePreview(this.titleSrc);
      this.selectedColumnN = column;
      this.titleSrc = "";
      this.isButtonShow = false;
    } else {
      this.selectedColumnN = column;
      this.selectdItem = item;
      this.isButtonShow = false;
      const payload = {
        client_url : this.clientUrlConnection,
        db: this.selectdItem,
        collection: this.selectedColumnN,
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
    this.selectedColumn = column;
    this.selectedColumnN = '';
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
    this.selectedColumnN = '';
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

  resFilename;
  openSave(saveLocalFile, item, column) {
    this.modalService.open(saveLocalFile, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.resFilename = result.fileName;
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
        //this.modalService.open(this.modalContent, { windowClass: 'modal-holder' });
        if (result) {
          this.downloadSource(result.outputpath, this.resFilename)
        }
        
        this.reloadCurrentRoute();
        }, (error) => {
          this.isLoading = false;
        });
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.reloadCurrentRoute();
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
        this.reloadCurrentRoute();
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
      localStorage.setItem('client_url', result);
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

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
      console.log(currentUrl);
    });
  }

  collectionResultDown: any;
  downloadSrcName:string;
  downloadSource(sourcepath, fileName) {
    this.downloadSrcName = fileName;
    const payload = {
      sourcepath: sourcepath
    };
    this.http.getProfileView(payload).subscribe((res: any) => {
      this.collectionResultDown  = res.Preview ? res.Preview : {};
      this.downloadCSV();
      }, (error) => {
        this.isPreviewLoaded = false;
        this.isPreviewLoading = false;
      });
  }

  //status: any[];

  downloadCSV() {
    const formula = this.downloadSrcName;
    this.status = ['approved', 'rejected', 'pending'];
    let data = _.values(this.collectionResultDown);
    let fileHeaders = [];
    Object.keys(this.collectionResultDown[0]).map((key, index) => {     
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

    new Angular2Csv(data, formula, options);
  }

}

