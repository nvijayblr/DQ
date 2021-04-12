import { Component, OnInit, OnChanges, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgGridComponent implements OnInit, OnChanges {

  @Input() rowData;
  @Input() floatingFilter;
  @Input() columnDefs = [];
  @Input() isLoading = false;
  @Input() pageSize = 25;
  @Input() rowHeight = 30;
  @Input() rowSelection;
  @Input() firstRowSelected = false;
  @Input() suppressRowClickSelection = false;
  @Input() isCheckboxSelection = false;
  @Input() singleClickEdit = false;
  @Input() sizeColumnsToFit = true;
  @Input() colResizeDefault = 'shift';
  @Output() rowSelectionChange = new EventEmitter<string>();
  @Output() sortFilterApplied = new EventEmitter<string>();

  public gridApi: any;
  public gridOptions: any;
  public defaultColDef: any;
  public isGridRendered = false;

  constructor() { }

  ngOnInit() {
    this.defaultColDef = {
      sortable: true,
      filter: false
    };
  }

  ngOnChanges(changes) {
  }

  createColumnDefsWithOptions() {
    if (!this.rowData.length) { return []; }
    const colDefs = this.columnDefs.map(columnDef => {
      const columnDefObj = columnDef;
      const columnValues = [];

      this.rowData.forEach(rowDataItem => {
        if (rowDataItem[columnDefObj.field]) {
          columnValues.push(rowDataItem[columnDefObj.field]);
        }
      });
      if (!columnValues.length) {
        columnDefObj.hide = false;
      } else {
        columnDefObj.hide = false;
      }
      return columnDefObj;
    });
    this.columnDefs = colDefs;
    this.gridApi.setColumnDefs();
  }

  onGridModelUpdated(e) {
  }

  gridReady(params) {
    this.gridApi = params.api;
    this.gridOptions = params.api.gridOptionsWrapper.gridOptions;
    this.gridApi.hideOverlay();
  }

  paginationChanged(params) {
    if (this.isGridRendered) {
      if (this.firstRowSelected && this.rowData.length) {
        this.gridApi.getDisplayedRowAtIndex(0).setSelected(true);
      }
    }
  }

  onFirstDataRendered(params) {
    if (this.sizeColumnsToFit) {
      this.gridApi.sizeColumnsToFit();
    }
    if (this.firstRowSelected && this.rowData.length) {
      this.gridApi.getDisplayedRowAtIndex(0).setSelected(true);
    }
    // this.createColumnDefsWithOptions();
    this.isGridRendered = true;
  }

  onGridSizeChanged(params) {
    if (this.sizeColumnsToFit) {
      this.gridApi.sizeColumnsToFit();
    }
  }

  onRowSelectionChanged(e) {
    const rowData = this.gridApi.getSelectedRows();
    if (this.isCheckboxSelection) {
      this.rowSelectionChange.next(rowData);
      return;
    }
    // Send first record if the single row selection
    this.rowSelectionChange.next(rowData[0]);
  }

  onCellFocused(e) {
    if (this.gridOptions) {
      if (e.column && (e.column.colId === 'img' || e.column.colId === 'screenshot')) {
        const focusedCellData = this.gridOptions.api.getDisplayedRowAtIndex(e.rowIndex).data;
        const data: any = {data: focusedCellData, index: e.rowIndex};
        if (focusedCellData.img) {
          this.rowSelectionChange.next(data);
        }
        return;
      }
      if (e.column && e.column.colId === 'action_column') {
        this.gridOptions.rowSelection = false;
      } else {
        this.gridOptions.rowSelection = this.rowSelection;
      }
    }
  }

  onSortFilterChanged() {
    const rowData: any = [];
    this.gridApi.forEachNodeAfterFilterAndSort(node => rowData.push(node.data));
    this.sortFilterApplied.next(rowData);
  }

}
