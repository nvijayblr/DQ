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

  editRow(rowData, index, dataSource, editIndex) {
    if (editIndex >= 0 && dataSource.data[editIndex]) {
      if (dataSource.data[editIndex].mode === this.mode.CREATE) {
        this.removeEmptyRow(dataSource);
        index -= 1;
      }
      dataSource.data[editIndex].edit = false;
    }

    rowData.edit = true;
    rowData.mode = this.mode.EDIT;
    return index;
  }

  addNew(dataSource, editIndex) {
    const list = dataSource.data;
    if (list[0].mode !== this.mode.CREATE) {
      if (editIndex >= 0 && list[editIndex]) {
        list[editIndex].edit = false;
      }
      list.unshift({
        edit: true,
        mode: this.mode.CREATE
      });
      dataSource.data = list;
    }
    return 0;
  }

  removeEmptyRow(dataSource) {
    const list = dataSource.data;
    list.splice(0, 1);
    dataSource.data = list;
  }

  cancel(rowData, dataSource, editIndex) {
    rowData.edit = false;
    if (dataSource.data[editIndex].mode === this.mode.CREATE) {
      this.removeEmptyRow(dataSource);
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
