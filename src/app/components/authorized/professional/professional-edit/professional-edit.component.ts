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
  selector: 'app-professional-edit',
  templateUrl: './professional-edit.component.html',
  styleUrls: ['./professional-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfessionalEditComponent implements OnInit, OnDestroy {

  professionalDetailsForm: FormGroup;

  skillTypes = [{
    value: 'Beginner',
    title: 'Beginner'
  }, {
    value: 'Intermediate',
    title: 'Intermediate'
  }, {
    value: 'Expert',
    title: 'Expert'
  }];

  workTypes = [{
    value: 'Deal',
    title: 'Deal'
  }, {
    value: 'Task',
    title: 'Task'
  }];


  user: any = {};
  isLoading = false;
  isUserLoggedIn = false;
  userId = '';
  professional: any = {};
  loaderMsg = 'Loading professional details...';
  errorMessage = '';
  separatorKeysCodes: number[] = [ENTER, COMMA];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  isDeleting: any = {};

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
    this.initProfessionalDetailsForm({});
    this.getUsersProfessionalDetails();
  }

  getUsersProfessionalDetails() {
    this.isLoading = true;
    this.http.getProfessionalDetails(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.professional = result;
      this.initProfessionalDetailsForm(this.professional);
    }, (error) => {
      this.isLoading = false;
    });
  }

  initProfessionalDetailsForm(professional) {
    this.professionalDetailsForm = this.fb.group({
      company: [professional.company, [Validators.required]],
      profession: [professional.profession, [Validators.required]],
      qualification: [professional.qualification, [Validators.required]],
      location: [professional.location, [Validators.required]],
      exp: [professional.exp, [Validators.required]],
      perwebsite: [professional.perwebsite],
      offwebsite: [professional.offwebsite],
      skilltype: [professional.skilltype, [Validators.required]],
      rating: [professional.rating, [Validators.required, Validators.max(10)]],
      skills: [professional.skills ? professional.skills : []],
      serLocations: [professional.serLocations ? professional.serLocations : []],
      description: [professional.description, [Validators.required]],
      street: [professional.street, [Validators.required]],
      city: [professional.city, [Validators.required]],
      state: [professional.state, [Validators.required]],
      country: [professional.country, [Validators.required]],
      zipcode: [professional.zipcode, [Validators.required, Validators.maxLength(6)]],
      achivements: this.fb.array([]),
      clients: this.fb.array([]),
    });
    if (professional.achivements) {
      const achivementFA = this.professionalDetailsForm.controls.achivements as FormArray;
      professional.achivements.map(achivement => {
        achivementFA.push(this.intiFormArrays('achivements', achivement));
      });
    }

    if (professional.clients) {
      const clientsFA = this.professionalDetailsForm.controls.clients as FormArray;
      professional.clients.map(client => {
        clientsFA.push(this.intiFormArrays('clients', client));
      });
    }
  }

  intiFormArrays(field, value: any = {}) {
    if (field === 'achivements') {
      return this.fb.group({
        id: [value.id],
        image_type: ['Achivements'],
        name: [value.name, [Validators.required, Validators.maxLength(50)]],
        description: [value.description, [Validators.maxLength(255)]],
        imgname: [value.imgname],
        path: [value.path],
      });
    }
    if (field === 'clients') {
      return this.fb.group({
        id: [value.id],
        clientname: [value.clientname, [Validators.required]],
        // work_type: [value.work_type, [Validators.required]],
        email: [value.email],
        phoneno: [value.phoneno, [Validators.required]],
        imgname: [value.imgname],
        path: [value.path],
      });
    }
  }

  onUploadCompleted(e, formControl) {
    formControl.controls.imgname.setValue(e.name);
    formControl.controls.path.setValue(e.path);
  }

  saveProfessionalDetails() {
    this.errorMessage = '';
    this.professionalDetailsForm.markAllAsTouched();
    if (this.professionalDetailsForm.status === 'INVALID') {
      this.errorMessage = 'Please fill all the required details.';
      return;
    }
    this.isLoading = true;
    this.loaderMsg = 'Saving professional details...';
    const payload = this.professionalDetailsForm.getRawValue();
    this.http.saveProfessionalDetails(this.userId, payload).subscribe((result: any) => {
      this.isLoading = false;
      this.router.navigate([`/auth/professional`]);
    }, (error) => {
      this.isLoading = false;
    });
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


  addFormItem(arrayName) {
    const fbArray = this.professionalDetailsForm.get(arrayName) as FormArray;
    fbArray.push(this.intiFormArrays(arrayName));
  }

  removeFormItem(arrayName, index) {
    const fbArray = this.professionalDetailsForm.get(arrayName) as FormArray;
    fbArray.removeAt(index);
    this.professional[arrayName].splice(index, 1);
  }

  addTags(event: MatChipInputEvent, formControlName): void {
    const input = event.input;
    const value = event.value;
    const formControl = this.professionalDetailsForm.get(formControlName) as FormControl;

    if ((value || '').trim()) {
      formControl.value.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeTags(value, formControlName): void {
    const formControl = this.professionalDetailsForm.get(formControlName) as FormControl;
    const index = formControl.value.indexOf(value);
    if (index >= 0) {
      formControl.value.splice(index, 1);
    }
  }

  ngOnDestroy() {
    this.http.cancelGetProfessionalDetails();
  }

}
