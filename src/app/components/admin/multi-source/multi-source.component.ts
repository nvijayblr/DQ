import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatSort } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-multi-source',
  templateUrl: './multi-source.component.html',
  styleUrls: ['../admin.component.scss']
})
export class MultiSourceComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  editIndex = -1;

  multisourceList: any = [];
  multisourceForm: FormGroup;

  displayedColumns: string[] = ['value', 'label', 'status', 'action'];

  @ViewChild(MatTable, { static: true }) sourceTable: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    private service: AdminService
  ) { };

  ngOnInit() {
    this.getSourceList();
    this.initSourceForm({});
  }

  getSourceList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading multisource...';
    this.http.getMultisourceList().subscribe((result: any) => {
      this.multisourceList = result.multiSourceList ? result.multiSourceList : [];
      this.isLoading = false;
    }, (error) => {
       this.isLoading = false;
    });
  }

  createEditMultisource(source, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving multisource details...';
    this.http.createEditMultisource(source, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.getSourceList();
    }, (error) => {
      this.isLoading = false;
    });
  }

  initSourceForm(source: any) {
    this.multisourceForm = this.formBuilder.group({
      value: [source.value ? source.value : '', [Validators.required]],
      label: [source.label ? source.label : '', [Validators.required]],
      status: [source.status ? source.status : '']
    });
  }

  editSource(source, index) {
    this.editIndex = this.service.editRow(source, index, this.multisourceList, this.sourceTable, this.editIndex);
    this.initSourceForm(source);
  }

  addNewSource() {
    this.editIndex = this.service.addNew(this.multisourceList, this.sourceTable, this.editIndex);
    this.initSourceForm({});
  }

  saveSource(source) {
    this.createEditMultisource(this.multisourceForm.value, source.mode);
  }

  cancel(source) {
    this.editIndex = this.service.cancel(source, this.multisourceList, this.sourceTable, this.editIndex);
  }

  sortData(sort: MatSort) {
    this.service.onSortData(sort, this.multisourceList, this.sourceTable);
  }

}