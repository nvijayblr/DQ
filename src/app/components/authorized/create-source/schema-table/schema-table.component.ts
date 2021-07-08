import { Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpService } from 'src/app/services/http-service.service';

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
 
  constructor(private http: HttpService,) {
    const schema = JSON.parse(localStorage.getItem('schema'));
    this.schemaTable = schema.schema;
    const dataTable = JSON.parse(localStorage.getItem('dataTable'));    
    this.connectionTable = dataTable;
  }

  ngOnInit() {
    this.getconnectionTables(this.schemaTable[0].USERNAME);
    
  }

  newTable;
  newTable2: any = [];
  selectedItem;

  getconnectionTables(item) {
    console.log(item)
    this.selectedItem = item;
    this.newTable2 = [];
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
         this.newTable2.push(item[1]);
       })
       const ELEMENT_DATA: PeriodicElement[] = this.newTable2;
       //console.log('ELEMENT_DATA', ELEMENT_DATA)
       this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
       this.dataSource.paginator = this.paginator;
    }, (error) => {
      
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
  
    logSelection() {
      this.selection.selected.forEach(s => console.log(s.TABLE_NAME));
    }
  
  // getAbc() {
  //   const ELEMENT_DATA: PeriodicElement[] = [
  //     {name: 'Hydrogen'},
  //     {name: 'Helium'},
  //     {name: 'Hydrogen'},
  //     { name: 'Helium' },
  //     {name: 'Hydrogen'},
  //     {name: 'Helium'},
  //     {name: 'Hydrogen'},
  //     { name: 'Helium' },
  //     {name: 'Hydrogen'},
  //     {name: 'Helium'},
  //     {name: 'Hydrogen'},
  //     { name: 'Helium' },
  //     {name: 'Hydrogen'},
  //     { name: 'Helium' },
  //     {name: 'Hydrogen'},
  //     {name: 'Helium'},
  //     {name: 'Hydrogen'},
  //     {name: 'Helium'},
  //     {name: 'Hydrogen'},
  //     { name: 'Helium' },
  //     {name: 'Hydrogen'},
  //     {name: 'Helium'},
  //     {name: 'Hydrogen'},
  //     { name: 'Helium' },
  //     {name: 'Hydrogen'},
  //     {name: 'Helium'},
  //     {name: 'Hydrogen'},
  //     {name: 'Helium'}
  //   ];
  //   this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // }
    
}


