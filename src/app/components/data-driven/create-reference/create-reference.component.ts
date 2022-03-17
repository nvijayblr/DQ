import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { HttpService } from 'src/app/services/http-service.service';
import { AlertService } from 'src/app/shared/alert-dialog/alert-dialog.service';
import { DataDrivenService } from '../data-driven.service';

@Component({
  selector: 'app-create-reference',
  templateUrl: './create-reference.component.html',
  styleUrls: ['./create-reference.component.scss']
})
export class CreateReferenceComponent implements OnInit {
  referenceForm: FormGroup;
  categoryList: any = [];
  referenceFile: any;
  chooseOptions: any = [];

  constructor(private http: HttpService,
    public dialogRef: MatDialogRef<CreateReferenceComponent>,
    private alertService: AlertService,
    private ds: DataDrivenService,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    this.initForm();
    this.getCategoryList();
  }

  initForm() {
    this.referenceForm = this.fb.group({
      db: ['', [Validators.required]],
      collection: ['', [Validators.required]]
    })
  }

  getCategoryList() {
    this.http.getDBCategoryGlobal().subscribe((result: any) => {
      this.categoryList = result.Databases || [];
    }, (error) => {
      this.alertService.showError(error.message);
    });
  }

  onSourceFileSelected(file) {
    this.referenceFile = file;
  }

  saveReference() {
    const formData: any = new FormData();
    if (this.referenceForm.invalid) return;
    if (!this.referenceFile.name) {
      this.alertService.showWarning('Please upload the reference file.');
      return;
    }
    formData.append('file[]', this.referenceFile);
    const payload = this.referenceForm.value;
    formData.append('data', JSON.stringify(payload));

    this.http.saveSourceMangoDB(formData, 'post').subscribe((result: any) => {
      if (result.errorMsg) {
        this.alertService.showError(result.errorMsg);
        return;
      }
      this.alertService.showAlert(result.message);
      this.ds.setRefreshMenu({}, 3);
      this.dialogRef.close();

    }, (error) => {
      this.alertService.showError(error);
    });

  }

  onClose() {

  }

}