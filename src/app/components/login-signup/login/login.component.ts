import { Component, OnInit, Inject, ViewEncapsulation,ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Subscriber } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { HttpService } from '../../../services/http-service.service';
import { InputValidation } from '../../../services/InputValidation';
import { MessageService } from '../../../services/message.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class LoginComponent implements OnInit {
  @ViewChild("content", {static: false}) modalContent: TemplateRef<any>;
  loginForm: FormGroup;
  otpForm: FormGroup;
  user: SocialUser;
  isSubmitted = false;
  isLoading = false;
  errorMessage = '';
  alertMessage = '';
  loaderMsg = '';
  isOtpScreen = false;
  isOtpGenerated = false;
  users = [{
    id: 1,
    userName: 'admin',
    password: 'admin',
    role: 'ADMIN'
  }];
  constructor(
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
    private http: HttpService,
    public inputValidation: InputValidation,
    private router: Router,
    private messageService: MessageService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      if (!user) {
        return;
      }
      this.user = user;
      this.doSocialLogin(this.user);
    });

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.otpForm = this.fb.group({
      phoneno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      otpnum: ['']
    });
  }


  doLogin() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const user = this.loginForm.value;
    // const loggedUser = this.users.filter((data) => {
    //   return (data.userName === user.userName && data.password === user.password);
    // });
    // if (loggedUser.length) {
    //   this.setLoginSessionAndRouting(loggedUser[0]);
    //   return;
    // }
    this.isLoading = true;
    this.http.loginRequest(this.loginForm.value).subscribe((result: any) => {
      this.isLoading = false;
      if (result.errorMsg) {
        this.alertMessage = result.errorMsg;
        this.modalService.open(this.modalContent, { windowClass: 'modal-holder' });
        
       // alert(result.errorMsg);
        return;
      }
      const loggedUserDet = {
        ...result.userdetail,
        role: result.userdetail.role[0],
        rights: result.roleRights,
        response: {...result}
      };

      // loggedUserDet.role = loggedUserDet.role[0];
      // loggedUserDet.rights = result.roleRights;
      // loggedUserDet.response = {...result};
      this.setLoginSessionAndRouting(loggedUserDet);
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error.message ? error.error.message : 'Invalid username or passowrd.';
    });
  }

  showHideOTPScreen(option) {
    this.errorMessage = '';
    this.isOtpGenerated = false;
    this.otpForm.reset();
    this.isOtpScreen = option;
  }

  validateUserAndGenerateOtp() {
    if (this.otpForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.loaderMsg = 'Sending OTP to your phone.';
    this.http.loginRequest({phoneno: this.otpForm.controls.phoneno.value}).subscribe((result: any) => {
      this.errorMessage = '';
      this.generateOtp();
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = 'Entered mobile number is not regiester with DQ. Please sign up to DQ.';
    });
  }


  generateOtp() {
    if (this.otpForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.loaderMsg = 'Sending OTP to your phone.';
    this.http.generateOTP(this.otpForm.controls.phoneno.value).subscribe((result: any) => {
      this.isLoading = false;
      this.isOtpGenerated = true;
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
      this.setLoginSessionAndRouting(result, false);
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = 'Invalid OTP. Please try again.';
    });
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
        LastName: user.lastName,
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
    console.log(result);
    const session = {
      ...result,
      id: result.userName,
      isLoggedIn: true,
      isSocial
    };
    localStorage.setItem('dq_token', JSON.stringify(session));
    localStorage.setItem('dq_rights', JSON.stringify(session));
    localStorage.setItem('isInitLoad', JSON.stringify({isInitLoad: true}));
    this.router.navigate([`auth/dashboard`]);
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

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

}
