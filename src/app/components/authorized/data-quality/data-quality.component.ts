import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DiffContent, DiffResults } from 'ngx-text-diff/lib/ngx-text-diff.model';
import * as XLSX from 'xlsx';
type AOA = any[][];


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
  left = `some text to\nbe compared!`
  right = `A changed\n version \n of the text to\nbe compared!`
  // fileName: string = 'SheetJS.xlsx';
  // data: any;
  // headData: any; // excel row header
  constructor(private http: HttpService, private fb: FormBuilder,private modalService: NgbModal) {
  
  }

  ngOnInit() {
    this.getDB = this.fb.group({
      database: ['', []],
      databaseCollection: ['', []],
    });
    this.getDBCollections();

  }

  onCompareResults(diffResults: DiffResults) {
    console.log('diffResults', diffResults);
  }

  // onFileChange(evt: any) {
  //   /* wire up file reader */
  //   const target: DataTransfer = <DataTransfer>evt.target;
  //   if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  //   const reader: FileReader = new FileReader();
  //   reader.onload = (e: any) => {
  //     /* read workbook */
  //     const bstr: string = e.target.result;
  //     const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

  //     /* grab first sheet */
  //     const wsname: string = wb.SheetNames[0];
  //     const ws: XLSX.WorkSheet = wb.Sheets[wsname];

  //     /* save data */
  //     this.data = <AOA>(
  //       XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, range: 10 })
  //     );
  //     console.log(this.data[1]);

  //     this.headData = this.data[0];
  //     this.data = this.data.slice(1); // remove first header record

  //     const ws2: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[1]];
  //     this.readDataSheet(ws2, 10);
  //   };
  //   reader.readAsBinaryString(target.files[0]);
  // }

  // private readDataSheet(ws: XLSX.WorkSheet, startRow: number) {
  //   /* save data */
  //   let datas = <AOA>(
  //     XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, range: startRow })
  //   );
  //   console.log(datas[1]);
  //   let headDatas = datas[0];
  //   datas = datas.slice(1); // remove first header record

  //   for (let i = 0; i < this.data.length; i++) {
  //     this.data[i][this.headData.length] = datas.filter(
  //       x => x[12] == this.data[i][0]
  //     );
  //   }
  //   console.log(this.data[1]);
  // }

  // export(): void {
  //   /* generate worksheet */
  //   const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //   /* save to file */
  //   XLSX.writeFile(wb, this.fileName);
  // }


  
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

