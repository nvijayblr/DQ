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
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  otpForm: FormGroup;
  user: SocialUser;
  isSubmitted = false;
  isLoading = false;
  errorMessage = '';
  loaderMsg = '';
  isOtpScreen = false;
  isOtpGenerated = false;
  users = [{
    id: 1,
    username: 'admin',
    password: 'admin',
    role: 'ADMIN'
  }];
  constructor(
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
    private http: HttpService,
    public inputValidation: InputValidation,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  doLogin() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const user = this.loginForm.value;
    const loggedUser = this.users.filter((data) => {
      return (data.username === user.username && data.password === user.password);
    });
    if (loggedUser.length) {
      this.setLoginSessionAndRouting(loggedUser[0]);
    }
    // this.isLoading = true;
    // this.http.loginRequest(this.loginForm.value).subscribe((result: any) => {
    //   this.isLoading = false;
    //   this.setLoginSessionAndRouting(result);
    // }, (error) => {
    //   this.isLoading = false;
    //   this.errorMessage = error.error.message ? error.error.message : 'Invalid username or passowrd.';
    // });
  }


  setLoginSessionAndRouting(result, isSocial?) {
    const session = {
      ...result,
      isLoggedIn: true,
      isSocial
    };
    localStorage.setItem('dq_admin_token', JSON.stringify(session));
    localStorage.setItem('isInitLoad', JSON.stringify({isInitLoad: true}));
    this.router.navigate([`admin/users`]);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }
}
