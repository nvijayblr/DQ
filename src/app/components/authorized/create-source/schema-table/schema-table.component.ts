import { Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Hydrogen'},
  { name: 'Helium' },
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Hydrogen'},
  { name: 'Helium' },
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Hydrogen'},
  { name: 'Helium' },
  {name: 'Hydrogen'},
  { name: 'Helium' },
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Hydrogen'},
  { name: 'Helium' },
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Hydrogen'},
  { name: 'Helium' },
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Hydrogen'},
  {name: 'Helium'}
];

@Component({
  selector: 'app-schema-table',
  templateUrl: './schema-table.component.html',
  styleUrls: ['./schema-table.component.scss']
})
export class SchemaTableComponent implements OnInit {
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['select', 'name'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
 
  constructor() {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
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
      this.selection.selected.forEach(s => console.log(s.name));
    }
}
