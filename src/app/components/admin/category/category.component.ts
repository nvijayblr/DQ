import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
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

  categoryList = new MatTableDataSource();
  categoryForm: FormGroup;

  displayedColumns: string[] = ['value', 'label', 'action'];
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
      this.categoryList.data = result.categoryList ? result.categoryList : [];
      this.categoryList.sort = this.sort;
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
      this.editIndex = -1;
      this.getCategoryList();
      alert('Category detail saved successfully');
    }, (error) => {
      this.isLoading = false;
      alert('Unable to save the Category details');
    });
  }

  initCategoryForm(category: any) {
    this.categoryForm = this.formBuilder.group({
      label: [category.label ? category.label : '', [Validators.required]],
      value: [category.value ? category.value : '', [Validators.required]],
      department: [category.department ? category.department : '']
    });
  }

  doFilter(value: string) {
    this.categoryList.filter = value.trim().toLocaleLowerCase();
  }

  editCategory(category, index) {
    this.editIndex = this.service.editRow(category, index, this.categoryList, this.editIndex);
    this.initCategoryForm(category);
  }

  addNewCategory() {
    this.editIndex = this.service.addNew(this.categoryList, this.editIndex);
    this.initCategoryForm({});
  }

  saveCategory(category) {
    this.createEditCategory(this.categoryForm.value, category.mode);
  }

  cancel(category) {
    this.editIndex = this.service.cancel(category, this.categoryList, this.editIndex);
  }
}