import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatSort } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['../admin.component.scss']
})
export class CategoryComponent implements OnInit {

  isLoading = false;
  loaderMsg = '';
  editIndex = -1;

  categoryList: any = [];
  categoryForm: FormGroup;

  displayedColumns: string[] = ['label', 'value', 'action'];

  @ViewChild(MatTable, { static: true }) categoryTable: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    private service: AdminService
  ) { };

  ngOnInit() {
    this.getCategoryList();
    this.initCategoryForm({});
  }

  getCategoryList() {
    this.isLoading = true;
    this.loaderMsg = 'Loading category...';
    this.http.getCategoryList().subscribe((result: any) => {
      this.categoryList = result.categoryList ? result.categoryList : [];
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  createEditCategory(category, mode) {
    this.isLoading = true;
    this.loaderMsg = 'Saving category details...';
    this.http.createEditCategory(category, mode).subscribe((result: any) => {
      this.isLoading = false;
      this.getCategoryList();
    }, (error) => {
      this.isLoading = false;
    });
  }

  initCategoryForm(category: any) {
    this.categoryForm = this.formBuilder.group({
      label: [category.label ? category.label : '', [Validators.required]],
      value: [category.value ? category.value : '', [Validators.required]],
    });
  }

  editCategory(category, index) {
    this.editIndex = this.service.editRow(category, index, this.categoryList, this.categoryTable, this.editIndex);
    this.initCategoryForm(category);
  }

  addNewCategory() {
    this.editIndex = this.service.addNew(this.categoryList, this.categoryTable, this.editIndex);
    this.initCategoryForm({});
  }

  saveCategory(category) {
    this.createEditCategory(this.categoryForm.value, category.mode);
  }

  cancel(category) {
    this.editIndex = this.service.cancel(category, this.categoryList, this.categoryTable, this.editIndex);
  }

  sortData(sort: MatSort) {
    this.service.onSortData(sort, this.categoryList, this.categoryTable);
  }

}