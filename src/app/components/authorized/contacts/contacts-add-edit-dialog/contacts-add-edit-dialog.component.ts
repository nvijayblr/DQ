import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpService } from '../../../../services/http-service.service';
import { AuthGuardService } from '../../../../services/auth-guard.service';
import { MessageService } from '../../../../services/message.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-contacts-add-edit-dialog',
  templateUrl: './contacts-add-edit-dialog.component.html',
  styleUrls: ['./contacts-add-edit-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactsAddEditDialogComponent implements OnInit {

  contactsForm: FormGroup;
  contact: any = {};
  isConfirmPasswordError = false;
  loaderMsg = 'Loading contacts...';
  user: any = {};
  isLoading = false;
  isUserLoggedIn = false;
  userId = '';
  salutationTypes = [{
    value: 'Mr.',
    title: 'Mr.',
  }, {
    value: 'Mrs.',
    title: 'Mrs.',
  }, {
    value: 'Dr.',
    title: 'Dr.',
  }];
  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private authGuardService: AuthGuardService,
    private messageService: MessageService,
    private router: Router,
    public dialogRef: MatDialogRef<ContactsAddEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
    this.contact = data;
    this.initContactDetails(this.contact);
  }

  ngOnInit() {
  }

  initContactDetails(contact) {
    this.contactsForm = this.fb.group({
      id: [contact.id],
      salutation: [contact.salutation, [Validators.required]],
      firstname: [contact.firstname, [Validators.required, Validators.maxLength(50)]],
      middlename: [contact.middlename],
      surname: [contact.surname, [Validators.required, Validators.maxLength(50)]],
      email: [contact.email, [Validators.required, Validators.email]],
      mobileno: [contact.mobileno, [Validators.required]],
      phoneno: [contact.phoneno],
      birth_date: [contact.birth_date],
      street: [contact.street],
      city: [contact.city],
      state: [contact.state],
      country: [contact.country],
      zipcode: [contact.zipcode],
    });
  }

  saveContactDetails() {
    this.contactsForm.markAllAsTouched();
    if (this.contactsForm.invalid) {
      return;
    }
    this.loaderMsg = 'Saving contact...';
    this.isLoading = true;
    const payload = this.contactsForm.value;
    if (payload.birth_date) {
      payload.birth_date = moment(payload.birth_date).format('YYYY-MM-DD');
    }
    this.http.saveContacts(this.userId, payload).subscribe((result: any) => {
      this.isLoading = false;
      this.dialogRef.close({isCancelled: false});
    }, (error) => {
      this.isLoading = false;
    });
  }


  onCloseClick() {
    this.dialogRef.close({isCancelled: true});
  }
}
