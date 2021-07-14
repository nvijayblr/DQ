import { Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PreviewDialogComponent } from '../../../../shared/preview-dialog/preview-dialog.component';

export interface PeriodicElement {
  OWNER: string;
  TABLE_NAME:string
}



@Component({
  selector: 'app-schema-table',
  templateUrl: './schema-table.component.html',
  styleUrls: ['./schema-table.component.scss']
})
export class SchemaTableComponent implements OnInit {
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['select', 'name'];
  dataSource;
  selection = new SelectionModel<PeriodicElement>(true, []);
  schemaTable: any = {};
  connectionTable: any = {};
  dataframe: any;
  newTable;
  newTableItem: any = [];
  selectedItem;
  defaultSelected = 0
  selectionNew: string
  getConfigureSourceForOracle;
  profileType: string;
 
  constructor(private http: HttpService,public dialog: MatDialog,private router: Router,private route: ActivatedRoute) {
    const schema = JSON.parse(localStorage.getItem('schema'));
    this.schemaTable = schema.schema;
    const dataTable = JSON.parse(localStorage.getItem('dataTable'));    
    this.connectionTable = dataTable;
    this.getConfigureSourceForOracle = JSON.parse(localStorage.getItem('configureSourceForOracle'));
    console.log(this.getConfigureSourceForOracle);
  }

  ngOnInit() {
    this.getconnectionTables(this.schemaTable[0].USERNAME);
    this.profileType = this.route.snapshot.queryParamMap.get('method');

  }

  getconnectionTables(item) {
    this.selectedItem = item;
    this.newTableItem = [];
    const payload = {
      host: this.connectionTable.host,
      port: this.connectionTable.port,
      dbName: this.connectionTable.dbName,
      userName: this.connectionTable.userName,
      password: this.connectionTable.password,
      schema : item
    }
    this.http.getconnectionTables(payload).subscribe((result: any) => {
       this.newTable = result.tables;
       Object.entries(this.newTable).map(item => {
         this.newTableItem.push(item[1]);
       })
       const ELEMENT_DATA: PeriodicElement[] = this.newTableItem;
       //console.log('ELEMENT_DATA', ELEMENT_DATA)
       this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
       this.dataSource.paginator = this.paginator;
    }, (error) => {
      
    });
  }

  getdataframeFromTable(item ,table) {
    const payload = {
      host: this.connectionTable.host,
      port: this.connectionTable.port,
      dbName: this.connectionTable.dbName,
      userName: this.connectionTable.userName,
      password: this.connectionTable.password,
      schema : item,
      table : table
    }

    this.http.getDataframeFromTable(payload).subscribe((result: any) => {
      this.dataframe = result.dataframe ? result.dataframe : {};
      this.dialog.open(PreviewDialogComponent, {
        width: '95%',
        // height: '95%',
        data: {
         ...this.dataframe
        }
     });
   }, (error) => {
     
   });
  }

  tableErr:boolean = false;
  profileConfigureSourceForOracle() {
    const formData: any = new FormData();
    let item = this.selectionNew;
    const table = this.selectionValue    
    if (!item) {
      item = this.schemaTable[0].USERNAME;
    }
    if (!table) {
      this.tableErr = true;
      return;
    } else {
      this.tableErr = false;
    }
    console.log(table);
    const payload = {
        source: {
          sourceDataName: this.getConfigureSourceForOracle.source.sourceDataName,
          sourceDataDescription: this.getConfigureSourceForOracle.source.sourceDataDescription,
          sourceFileName: "",
          templateSourcePath: "",
          dataOwner: [],
          dataUser: [],
          dataProcessingOwner: [],
          type: "oracle",
          connectionDetails: {
            host: this.connectionTable.host,
            port: this.connectionTable.port,
            dbName: this.connectionTable.dbName,
            username: this.connectionTable.userName,
            password: this.connectionTable.password,
            schema: item,
            sourceTableName: table
          }
        },
        reference: [],
        settings: {},
      
    }

    formData.append('data', JSON.stringify(payload));
    this.http.profileConfigureSourceForOracle(formData).subscribe((result: any) => {
      localStorage.setItem('dq-oracle-data', JSON.stringify(result));
      if (this.profileType === 'profile') {
        this.router.navigate(
          [`auth/attribute-details-data`]
        );
      }
   }, (error) => {
     console.log(error.message);
   });
  }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
  
  // logSelection() {
  //   console.log(this.selection.selected);
  //     this.selection.selected.forEach(s => console.log(s.TABLE_NAME));
  // }
  selectionValue;
  selectRow($event: any, row: Element) {    
    this.selectionValue = row;
    //console.log(this.selectionValue);
  }
      
}


