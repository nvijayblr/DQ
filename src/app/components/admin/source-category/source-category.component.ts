import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-source-category',
  templateUrl: './source-category.component.html',
  styleUrls: ['../admin.component.scss']
})
export class SourceCategoryComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  editIndex = -1;

  SCategoryList = new MatTableDataSource();
  departmentsList: any = [];
  SCategoryForm: FormGroup;

  displayedColumns: string[] = ['value', 'label', 'status', 'action'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    public service: AdminService
  ) { };

  ngOnInit() {
    this.getCategoryList();
    this.initCategoryForm({});
  }

  getCategoryList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading category...';
    this.http.getSourceCategoryList().subscribe((result: any) => {
      this.SCategoryList.data = result.sourceCategory ? result.sourceCategory : [];
      this.SCategoryList.sort = this.sort;
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  createEditCategory(category, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving category details...';
    this.http.createEditSourceCategory(category, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.getCategoryList();
    }, (error) => {
      this.isLoading = false;
    });
  }

  initCategoryForm(category: any) {
    this.SCategoryForm = this.formBuilder.group({
      label: [category.label ? category.label : '', [Validators.required]],
      value: [category.value ? category.value : '', [Validators.required]],
      status: [category.status ? category.status : '']
    });
  }
  doFilter(value: string) {
    this.SCategoryList.filter = value.trim().toLocaleLowerCase();
  }

  editCategory(category, index) {
    this.editIndex = this.service.editRow(category, index, this.SCategoryList, this.editIndex);
    this.initCategoryForm(category);
  }

  addNewCategory() {
    this.editIndex = this.service.addNew(this.SCategoryList, this.editIndex);
    this.initCategoryForm({});
  }

  saveCategory(category) {
    this.createEditCategory(this.SCategoryForm.value, category.mode);
  }

  cancel(category) {
    this.editIndex = this.service.cancel(category, this.SCategoryList, this.editIndex);
  }

}