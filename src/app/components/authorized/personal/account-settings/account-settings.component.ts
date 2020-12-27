import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../../services/http-service.service';
import { AuthGuardService } from '../../../../services/auth-guard.service';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit, OnDestroy {

  userDetailsForm: FormGroup;
  resetPasswordForm: FormGroup;
  notification = {
    isEmail: false,
    isPhone: false
  };

  user: any = {};
  isLoading = false;
  isUserLoggedIn = false;
  userId = '';

  isSubmitted = false;
  errorMessage = '';
  passwordErrorMessage = '';
  isConfirmPasswordError = false;
  loaderMsg = 'Loading account details...';

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private authGuardService: AuthGuardService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
  }

  ngOnInit() {
    this.initPersonalDetails(this.user);
    this.getUsersAccountDetails();
  }

  getUsersAccountDetails() {
    this.isLoading = true;
    this.http.getAccountDetails(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.initPersonalDetails(result);
    }, (error) => {
      this.isLoading = false;
    });
  }

  initPersonalDetails(user) {
    this.userDetailsForm = this.fb.group({
      username: [user.username, [Validators.required]],
      email: [user.email, [Validators.required, Validators.email]],
      password: [user.password, [Validators.required]],
      phoneno: [user.phoneno, [Validators.required]],
      fullname: [user.fullname, [Validators.required, Validators.maxLength(100)]],
      image_type: [user.image_type ? user.image_type : 'Profile'],
      imgname: [user.pimgnameassword],
      path: [user.path],
    });

    this.resetPasswordForm = this.fb.group({
      username: [user.username, [Validators.required]],
      current_password: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    });

    const pref = user.notificationPreferences;
    this.notification = {
      isEmail: pref.indexOf('Email') >= 0 ? true : false,
      isPhone: pref.indexOf('Phone') >= 0 ? true : false
    };
  }

  onUploadCompleted(e, formControl) {
    formControl.controls.imgname.setValue(e.name);
    formControl.controls.path.setValue(e.path);
  }

  saveAccountDetails() {
    this.isSubmitted = true;
    this.isConfirmPasswordError = false;
    const signup = {...this.userDetailsForm.value};
    this.userDetailsForm.markAllAsTouched();
    if (this.userDetailsForm.invalid) {
      return;
    }
    this.loaderMsg = 'Saving account details...';
    this.isLoading = true;
    this.http.saveAccountDetails(this.userId, this.userDetailsForm.value).subscribe((result: any) => {
      this.isLoading = false;
      this.updateUserSession(result);
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error.message ? error.error.message : 'The username or email or phone number already found.';
    });
  }

  updateUserSession(result) {
    const session = {
      ...result,
      isLoggedIn: true,
    };
    this.messageService.sendLoginMessage(session);
    localStorage.setItem('dq_token', JSON.stringify(session));
    this.router.navigate([`/auth/personal`]);
  }

  resetPassword() {
    this.passwordErrorMessage = '';
    this.isConfirmPasswordError = false;
    this.resetPasswordForm.markAllAsTouched();
    if (this.resetPasswordForm.invalid) {
      return;
    }
    const resetPassword = {...this.resetPasswordForm.value};
    if (resetPassword.current_password !== this.userDetailsForm.value.password) {
      this.passwordErrorMessage = 'The entered current password is wrong.';
      return;
    }
    if (resetPassword.password !== resetPassword.confirm_password) {
      this.isConfirmPasswordError = true;
      return;
    }

    this.loaderMsg = 'Resetting account password...';
    this.isLoading = true;
    delete resetPassword.current_password;
    delete resetPassword.confirm_password;
    this.http.resetPassword(resetPassword).subscribe((result: any) => {
      this.isLoading = false;
      this.router.navigate(['login']);
    }, (error) => {
      this.isLoading = false;
    });

  }

  updateNotificationPref(type, state) {
    this.loaderMsg = 'Updating notification prefrences...';
    this.isLoading = true;
    this.http.updateNotificationPref(this.userId, type, state).subscribe((result: any) => {
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });

  }


  ngOnDestroy() {
    this.http.cancelGetAccountDetailsReq();
  }

}
