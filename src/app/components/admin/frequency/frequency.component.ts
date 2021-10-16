import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
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

  frequencyList = new MatTableDataSource();
  frequencyForm: FormGroup;
  displayedColumns: string[] = ['value', 'label', 'status', 'action'];
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
      this.frequencyList.data = result.frequencyList ? result.frequencyList : [];
      this.frequencyList.sort = this.sort;
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
      this.editIndex = -1;
      this.getFrequencyList();
      alert('Frequency detail saved successfully');
    }, (error) => {
      this.isLoading = false;
       alert('Unable to save the frequency details');
    });
  }

  initFrequencyForm(frequency: any) {
    this.frequencyForm = this.formBuilder.group({
      value: [frequency.value ? frequency.value : '', [Validators.required]],
      label: [frequency.label ? frequency.label : '', [Validators.required]],
      status: [frequency.status ? frequency.status : '']
    });
  }

  doFilter(value: string) {
    this.frequencyList.filter = value.trim().toLocaleLowerCase();
  }

  editFrequency(frequency, index) {
    this.editIndex = this.service.editRow(frequency, index, this.frequencyList, this.editIndex);
    this.initFrequencyForm(frequency);
  }

  addNewFrequency() {
    this.editIndex = this.service.addNew(this.frequencyList, this.editIndex);
    this.initFrequencyForm({});
  }

  saveFrequency(frequency) {
    this.createEditFrequency(this.frequencyForm.value, frequency.mode);
  }

  cancel(frequency) {
    this.editIndex = this.service.cancel(frequency, this.frequencyList, this.editIndex);
  }
}