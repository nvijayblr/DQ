import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';
import { HttpService } from '../../../../services/http-service.service';
import { InputValidation } from '../../../../services/InputValidation';
import { AuthGuardService } from '../../../../services/auth-guard.service';
import * as _ from 'lodash';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-services-edit',
  templateUrl: './services-edit.component.html',
  styleUrls: ['./services-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesEditComponent implements OnInit, OnDestroy {

  servicesDetailsForm: FormGroup;

  user: any = {};
  isLoading = false;
  isUserLoggedIn = false;
  userId = '';
  services: any = {};
  loaderMsg = 'Loading products and services details...';
  errorMessage = '';
  productsList = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    public inputValidation: InputValidation,
    private authGuardService: AuthGuardService,
    private router: Router,
  ) {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
  }

  ngOnInit() {
    this.initServiceDetailsForm({});
    this.getServicesDetails();
  }

  getServicesDetails() {
    this.isLoading = true;
    this.http.getServicesDetails(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.services = result;
      this.initServiceDetailsForm(this.services);
    }, (error) => {
      this.isLoading = false;
    });
  }

  initServiceDetailsForm(services) {
    console.log(services);
    this.servicesDetailsForm = this.fb.group({
      services: this.fb.array([])
    });
    if (services && services.length) {
      const serviceFA = this.servicesDetailsForm.controls.services as FormArray;
      services.map(service => {
        serviceFA.push(this.intiFormArrays('services', service));
      });
    }
  }

  intiFormArrays(field, value: any = {}) {
    if (field === 'services') {
      return this.fb.group({
        id: [value.id],
        image_type: ['Proudcts'],
        name: [value.name, [Validators.required, Validators.maxLength(50)]],
        description: [value.description],
        amount: [value.amount, [Validators.required]],
        path: [value.path],
      });
    }
  }

  onUploadCompleted(e, formControl) {
    formControl.controls.path.setValue(e.path);
  }

  saveServicesDetails() {
    this.errorMessage = '';
    this.servicesDetailsForm.markAllAsTouched();
    if (this.servicesDetailsForm.status === 'INVALID') {
      this.errorMessage = 'Please fill all the required details.';
      return;
    }
    this.isLoading = true;
    this.loaderMsg = 'Saving services / products details...';
    const payload = this.servicesDetailsForm.getRawValue();
    this.http.saveServicesDetails(this.userId, payload.services).subscribe((result: any) => {
      this.isLoading = false;
      this.router.navigate([`/auth/professional`]);
    }, (error) => {
      this.isLoading = false;
    });
  }

  addFormItem(arrayName) {
    const fbArray = this.servicesDetailsForm.get(arrayName) as FormArray;
    fbArray.push(this.intiFormArrays(arrayName));
  }

  removeFormItem(arrayName, index) {
    const fbArray = this.servicesDetailsForm.get(arrayName) as FormArray;
    fbArray.removeAt(index);
    this.services.splice(index, 1);
  }

  ngOnDestroy() {
    this.http.cancelGetServicesDetails();
  }

}
