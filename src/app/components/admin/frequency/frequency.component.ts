import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatSort } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['../admin.component.scss']
})
export class FrequencyComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  editIndex = -1;

  frequencyList: any = [];
  frequencyForm: FormGroup;

  displayedColumns: string[] = ['value', 'label', 'status', 'action'];

  @ViewChild(MatTable, { static: true }) frequencyTable: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    private service: AdminService
  ) { };

  ngOnInit() {
    this.getFrequencyList();
    this.initFrequencyForm({});
  }

  getFrequencyList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading frequency...';
    this.http.getFrequencyList().subscribe((result: any) => {
      this.frequencyList = result.frequencyList ? result.frequencyList : [];
      this.isLoading = false;
    }, (error) => {
       this.isLoading = false;
    });
  }

  createEditFrequency(frequency, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving frequency details...';
    this.http.createEditFrequency(frequency, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.getFrequencyList();
    }, (error) => {
      this.isLoading = false;
    });
  }

  initFrequencyForm(frequency: any) {
    this.frequencyForm = this.formBuilder.group({
      value: [frequency.value ? frequency.value : '', [Validators.required]],
      label: [frequency.label ? frequency.label : '', [Validators.required]],
      status: [frequency.status ? frequency.status : '']
    });
  }

  editFrequency(frequency, index) {
    this.editIndex = this.service.editRow(frequency, index, this.frequencyList, this.frequencyTable, this.editIndex);
    this.initFrequencyForm(frequency);
  }

  addNewFrequency() {
    this.editIndex = this.service.addNew(this.frequencyList, this.frequencyTable, this.editIndex);
    this.initFrequencyForm({});
  }

  saveFrequency(frequency) {
    this.createEditFrequency(this.frequencyForm.value, frequency.mode);
  }

  cancel(frequency) {
    this.editIndex = this.service.cancel(frequency, this.frequencyList, this.frequencyTable, this.editIndex);
  }

  sortData(sort: MatSort) {
    this.service.onSortData(sort, this.frequencyList, this.frequencyTable);
  }

}