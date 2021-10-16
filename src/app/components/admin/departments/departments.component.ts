import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['../admin.component.scss']
})
export class DepartmentsComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  editIndex = -1;

  departmentsList = new MatTableDataSource();
  departmentForm: FormGroup;
  displayedColumns: string[] = ['Name', 'Display', 'status', 'action'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    public service: AdminService
  ) { };

  ngOnInit() {
    this.getDepartmentsList();
    this.initDepartmentForm({});
  }

  getDepartmentsList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading departments...';
    this.http.getDepartmentsList().subscribe((result: any) => {
      this.departmentsList.data = result.department ? result.department : [];
      this.departmentsList.sort = this.sort;
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  createEditDept(dept, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving department details...';
    this.http.createEditDepartment(dept, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.editIndex = -1;
      this.getDepartmentsList();
      alert('Department detail saved successfully');
    }, (error) => {
      this.isLoading = false;
      alert('Unable to save the Department details');
    });
  }

  initDepartmentForm(department: any) {
    this.departmentForm = this.formBuilder.group({
      departName: [department.Name ? department.Name : '', [Validators.required]],
      departText: [department.Display ? department.Display : '', [Validators.required]],
      status: [department.status ? department.status : '']
    });
  }

  doFilter(value: string) {
    this.departmentsList.filter = value.trim().toLocaleLowerCase();
  }

  editDepart(department, index) {
    this.editIndex = this.service.editRow(department, index, this.departmentsList, this.editIndex);
    this.initDepartmentForm(department);
  }

  addNewDepart() {
    this.editIndex = this.service.addNew(this.departmentsList, this.editIndex);
    this.initDepartmentForm({});
  }

  saveDepart(department) {
    this.createEditDept(this.departmentForm.value, department.mode);
  }

  cancel(department) {
    this.editIndex = this.service.cancel(department, this.departmentsList, this.editIndex);
  }

}