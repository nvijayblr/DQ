import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Subscriber } from 'rxjs';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { HttpService } from '../../../services/http-service.service';
import { InputValidation } from '../../../services/InputValidation';
import { MessageService } from '../../../services/message.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  otpForm: FormGroup;
  user: SocialUser;
  isSubmitted = false;
  isLoading = false;
  errorMessage = '';
  loaderMsg = '';
  mode = 'login';
  isOtpScreen = false;
  isConfirmPasswordError = false;
  registerUser: any = {};

  constructor(
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
    private http: HttpService,
    public inputValidation: InputValidation,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      if (!user) {
        return;
      }
      this.user = user;
      this.doSocialLogin(this.user);
    });

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      fullname: ['', Validators.required],
    });

    this.otpForm = this.fb.group({
      phoneno: ['', [Validators.required]],
      otpnum: ['', Validators.required]
    });
  }


  doSignup() {
    this.isSubmitted = true;
    this.isConfirmPasswordError = false;
    const signup = {...this.signupForm.value};
    if (this.signupForm.invalid) {
      return;
    }

    if (signup.password !== signup.confirm_password) {
      this.isConfirmPasswordError = true;
      return;
    }
    delete signup.confirm_password;
    this.isLoading = true;
    this.http.signupRequest(this.signupForm.value).subscribe((result: any) => {
      this.generateOtp();
      this.isLoading = false;
      this.otpForm.controls.phoneno.setValue(this.signupForm.value.phoneno);
      this.isOtpScreen = true;
      this.errorMessage = '';
      this.registerUser = result;
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error.message ? error.error.message : 'The username or email or phone number already found.';
    });
  }


  generateOtp() {
    this.isLoading = true;
    this.loaderMsg = 'Sending OTP to your phone.';
    this.http.generateOTP(this.signupForm.value.phoneno).subscribe((result: any) => {
      this.isLoading = false;
      this.errorMessage = '';
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error.ResponseMsg;
    });
  }

  validateOtp() {
    if (this.otpForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.loaderMsg = 'Validating OTP...';
    this.http.validateOTP(this.otpForm.value).subscribe((result: any) => {
      this.isLoading = false;
      this.errorMessage = '';
      this.setLoginSessionAndRouting(this.registerUser, false);
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = 'Invalid OTP. Please try again.';
    });
  }

  verifyOTPLater() {
      this.setLoginSessionAndRouting(this.registerUser, false);
  }

  reloadCurrentRoute() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([location.pathname]));
  }

  doSocialLogin(user) {
    let payload = {};
    if (user.provider === 'GOOGLE') {
      payload = {
        userName: user.email,
        fullname: user.firstName + ' ' + user.lastName,
        DPPath: user.photoUrl,
        provider: user.provider,
        AId: user.id,
      };
    } else {
      payload = {
        userName: user.email,
        fullname: user.firstName + ' ' + user.lastName,
        DPPath: user.photoUrl,
        provider: user.provider,
        AId: user.id,
      };
    }
    this.isSubmitted = true;
    this.isLoading = true;
    this.http.socialLoginRequest(payload).subscribe((result: any) => {
      this.isLoading = false;
      this.setLoginSessionAndRouting(result, true);
      this.reloadCurrentRoute();
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error.ResponseMsg;
    });
  }

  setLoginSessionAndRouting(result, isSocial?) {
    const session = {
      ...result,
      isLoggedIn: true,
      isSocial
    };
    localStorage.setItem('dq_token', JSON.stringify(session));
    localStorage.setItem('isInitLoad', JSON.stringify({isInitLoad: true}));
    this.messageService.sendLoginMessage(session);
    this.router.navigate([`auth/home`]);
  }

  signInWithGoogle(): void {
    const fbLoginOptions = {
      scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages'
    }; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    const googleLoginOptions = {
      scope: 'https://www.googleapis.com/auth/userinfo.email'
    }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

}
