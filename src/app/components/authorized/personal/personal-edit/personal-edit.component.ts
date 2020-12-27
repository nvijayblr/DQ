import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../../services/http-service.service';
import { AuthGuardService } from '../../../../services/auth-guard.service';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.scss']
})
export class PersonalEditComponent implements OnInit, OnDestroy {

  personalDetailsForm: FormGroup;

  relationTypes = {
    spouse: {
      value: 'Spouse',
      title: 'Spouse'
    },
    friends: {
      value: 'Friend',
      title: 'Friend'
    },
    relatives: {
      value: 'Relatives',
      title: 'Relatives'
    },
  };

  serviceProvidersTypes = {
    doctors: {
      value: 'Doctor',
      title: 'Doctor'
    },
    accountant: {
      value: 'Accountant',
      title: 'Accountant'
    },
    drivers: {
      value: 'Driver',
      title: 'Driver'
    },
    lawyers: {
      value: 'Lawyer',
      title: 'Lawyer'
    },
    servants: {
      value: 'Servant',
      title: 'Servant'
    },
  };

  recordTypes = {
    awards: {
      value: 'Awards',
      title: 'Awards'
    },
    assets: {
      value: 'Assets',
      title: 'Assets'
    },
    homeAppliances: {
      value: 'HomeAppliances',
      title: 'HomeAppliances'
    },
    idproofs: {
      value: 'Idproofs',
      title: 'Idproofs'
    },
    libilities: {
      value: 'Libilities',
      title: 'Libilities'
    },
    medicals: {
      value: 'Medicals',
      title: 'Medicals'
    },
  };

  educationTypes = [{
    value: 'SSLC',
    title: 'SSLC'
  }, {
    value: 'HSC',
    title: 'HSC'
  }, {
    value: 'UG',
    title: 'UG'
  }, {
    value: 'PG',
    title: 'PG'
  }];

  user: any = {};
  isLoading = false;
  isUserLoggedIn = false;
  userId = '';
  personal: any = {};
  maxDate = new Date();
  loaderMsg = 'Loading personal details...';
  errorMessage = '';
  isDeleting: any = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private authGuardService: AuthGuardService,
    private router: Router,
  ) {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
  }

  ngOnInit() {
    this.initPersonalDetails({});
    this.getUsersPersonalDetails();
  }

  getUsersPersonalDetails() {
    this.isLoading = true;
    this.http.getPersonalDetails(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.personal = result;
      this.initPersonalDetails(this.personal);
    }, (error) => {
      this.isLoading = false;
    });
  }

  initPersonalDetails(personal) {
    this.personalDetailsForm = this.fb.group({
      gender: [personal.gender],
      fathername: [personal.fathername],
      mothername: [personal.mothername],
      dob: [personal.dob],
      maritalstatus: [personal.maritalstatus],
      birthcity: [personal.birthcity],
      leavingcity: [personal.leavingcity],
      bloodgroup: [personal.bloodgroup],
      comapanyname: [personal.comapanyname],
      comapanyloc: [personal.comapanyloc],
      designation: [personal.designation],
      companyemail: [personal.companyemail],
      education: this.fb.array([]),
      relations: this.fb.array([]),
      serviceproviders: this.fb.array([]),
      records: this.fb.array([]),
    });
    if (personal.education) {
      const educationFA = this.personalDetailsForm.controls.education as FormArray;
      personal.education.map(education => {
        educationFA.push(this.intiFormArrays('education', education));
      });
    }

    if (personal.relations) {
      const relationsFA = this.personalDetailsForm.controls.relations as FormArray;
      personal.relations.map(relations => {
        relationsFA.push(this.intiFormArrays('relations', relations));
      });
    }

    if (personal.serviceproviders) {
      const serviceprovidersFA = this.personalDetailsForm.controls.serviceproviders as FormArray;
      personal.serviceproviders.map(serviceproviders => {
        serviceprovidersFA.push(this.intiFormArrays('serviceproviders', serviceproviders));
      });
    }

    if (personal.records) {
      const recordsFA = this.personalDetailsForm.controls.records as FormArray;
      personal.records.map(record => {
        recordsFA.push(this.intiFormArrays('records', record));
      });
    }
  }

  intiFormArrays(field, value: any = {}) {
    if (field === 'education') {
      return this.fb.group({
        id: [value.id],
        qualifiation: [value.qualifiation, [Validators.required]],
        institution: [value.institution, [Validators.required]],
        year: [value.year, [Validators.required]],
        image_type: ['Education'],
        imgname: [value.imgname ? value.imgname : 'blank.png'],
        path: [value.path],
      });
    }
    if (field === 'relations') {
      return this.fb.group({
        id: [value.id],
        relation_type: [value.relation_type, [Validators.required]],
        name: [value.name, [Validators.required]],
        email: [value.email],
        phoneno: [value.phoneno, [Validators.required]],
        location: [value.location, [Validators.required]],
      });
    }
    if (field === 'serviceproviders') {
      return this.fb.group({
        id: [value.id],
        relation_type: [value.relation_type, [Validators.required]],
        name: [value.name, [Validators.required]],
        email: [value.email],
        phoneno: [value.phoneno, [Validators.required]],
        location: [value.location, [Validators.required]],
      });
    }
    if (field === 'records') {
      return this.fb.group({
        id: [value.id],
        image_type: [value.image_type, [Validators.required]],
        name: [value.name, [Validators.required, Validators.maxLength(50)]],
        imgname: [value.imgname],
        path: [value.path],
      });
    }
  }

  onUploadCompleted(e, formControl) {
    formControl.controls.imgname.setValue(e.name);
    formControl.controls.path.setValue(e.path);
  }

  onRecordsUploadCompleted(e, formControl) {
    formControl.controls.imgname.setValue(e.name);
    formControl.controls.path.setValue(e.path);
  }

  savePersonalDetails() {
    this.errorMessage = '';
    this.personalDetailsForm.markAllAsTouched();
    if (this.personalDetailsForm.status === 'INVALID') {
      this.errorMessage = 'Please fill all the required details.';
      return;
    }
    this.isLoading = true;
    const payload = this.personalDetailsForm.getRawValue();
    if (payload.dob) {
      payload.dob = moment(payload.dob).format('YYYY-MM-DD');
    }
    this.loaderMsg = 'Saving personal details...';
    this.isLoading = true;
    this.http.savePersonalDetails(this.userId, payload).subscribe((result: any) => {
      this.isLoading = false;
      this.router.navigate([`/auth/personal`]);
    }, (error) => {
      this.isLoading = false;
    });
  }

  addFormItem(arrayName) {
    const fbArray = this.personalDetailsForm.get(arrayName) as FormArray;
    fbArray.push(this.intiFormArrays(arrayName));
  }

  deleteRecord(record, arrayName, path, index) {
    this.isDeleting[arrayName] = true;
    this.http.deleteRecord(this.userId, record.value.id, path).subscribe((result: any) => {
      this.isDeleting[arrayName] = false;
      this.removeFormItem(arrayName, index);
    }, (error) => {
      this.isDeleting[arrayName] = false;
    });
  }

  removeFormItem(arrayName, index) {
    const education = this.personalDetailsForm.get(arrayName) as FormArray;
    education.removeAt(index);
    this.personal[arrayName].splice(index, 1);
  }

  parseRelations() {
    Object.keys(this.relationTypes).map(key => {
      this.personal[key] = _.map(this.personal[key], o => _.extend({relation_type: this.relationTypes[key].value}, o));
    });
    this.personal.relations = [];
    Object.keys(this.relationTypes).map(key => {
      this.personal.relations = _.concat(this.personal.relations, this.personal[key]);
    });
  }

  parseRecords() {
    Object.keys(this.recordTypes).map(key => {
      this.personal[key] = _.map(this.personal[key], o => _.extend({image_type: this.recordTypes[key].value}, o));
    });
    this.personal.records = [];
    Object.keys(this.recordTypes).map(key => {
      this.personal.records = _.concat(this.personal.records, this.personal[key]);
    });
  }

  navigateToSection(element) {
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  ngOnDestroy() {
    this.http.cancelGetPersonalDetailsReq();
  }

}
