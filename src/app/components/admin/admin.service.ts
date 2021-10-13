import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  mode: any = {
    EDIT: 'edit',
    CREATE: 'create'
  };

  constructor() { }

  editRow(rowData, index, list, table, editIndex) {
    if (editIndex >= 0 && list[editIndex]) {
      if (list[editIndex].mode === this.mode.CREATE) {
        this.removeEmptyRow(list, table);
        index -= 1;
      }
      list[editIndex].edit = false;
    }

    rowData.edit = true;
    rowData.mode = this.mode.EDIT;
    return index;
  }

  addNew(list, table, editIndex) {
    if (list[0].mode !== this.mode.CREATE) {
      if (editIndex >= 0 && list[editIndex]) {
        list[editIndex].edit = false;
      }
      list.unshift({
        edit: true,
        mode: this.mode.CREATE
      });
      table.dataSource = list;
      table.renderRows();
    }
    return 0;
  }

  removeEmptyRow(list, table) {
    list.splice(0, 1);
    table.dataSource = list;
    table.renderRows();
  }

  cancel(rowData, list, table, editIndex) {
    rowData.edit = false;
    if (list[editIndex].mode === this.mode.CREATE) {
      this.removeEmptyRow(list, table);
    }
    return -1;
  }

  onSortData(sort, list, table) {
    const data = list;
    if (!sort.active || sort.direction === '') {
      sort.active = 'Name';
      sort.direction = 'asc';
    }
    data.sort((a, b) => {
      const aValue = (a as any)[sort.active];
      const bValue = (b as any)[sort.active];
      return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
    })
    table.dataSource = data;
    table.renderRows();
  }

}
