import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthGuardService } from '../../services/auth-guard.service';
import { MessageService } from '../../services/message.service';
import { HttpService } from '../../services/http-service.service';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountDetailsComponent implements OnInit, OnDestroy {
  user: any = {};
  userId = '';
  isCurrentUser = false;
  appConfig: any = {};
  subscription: Subscription;
  isLoading = false;
  loaderMsg = 'Loading account details...';
  showVerifyOTP = false;
  otpForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authGuardService: AuthGuardService,
    private messageService: MessageService,
    private fb: FormBuilder,
  ) {
    this.appConfig = appConfig;
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
  }

  ngOnInit() {
    this.otpForm = this.fb.group({
      phoneno: ['', Validators.required],
      otpnum: ['', Validators.required]
    });

    this.user = this.authGuardService.getLoggedInUserDetails();
    this.subscription = this.messageService.getLoginMessage().subscribe(user => {
      this.user = user;
    });

    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.isCurrentUser = true;
      if (queryParams.id) {
        if (this.userId !== queryParams.id) {
          this.isCurrentUser = false;
        }
        this.user = {};
        this.userId = queryParams.id;
      }
      this.getUserAccount();
    });
  }

  getUserAccount() {
    this.loaderMsg = 'Loading account details...';
    this.isLoading = true;
    this.http.getAccountDetails(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.user = result;
      const session = {
        ...result,
        isLoggedIn: true,
      };
      localStorage.setItem('dq_token', JSON.stringify(session));
    }, (error) => {
      this.isLoading = false;
    });
  }

  verifyEmail() {
    this.loaderMsg = 'Sending verify email...';
    this.isLoading = true;
    this.http.resedVerifyEmail(this.user.email).subscribe((result: any) => {
      this.isLoading = false;
      this.messageService.sendCommonMessage({topic: 'notifications', reason: 'Sent Notification'});
    }, (error) => {
      this.isLoading = false;
    });
  }

  generateOtp() {
    this.loaderMsg = 'Sending OTP to your phone...';
    this.isLoading = true;
    this.http.generateOTP(this.user.phoneno).subscribe((result: any) => {
      this.isLoading = false;
      this.showVerifyOTP = true;
      this.messageService.sendCommonMessage({topic: 'notifications', reason: 'Sent Notification'});
    }, (error) => {
      this.isLoading = false;
    });
  }

  validateOtp() {
    this.otpForm.controls.phoneno.setValue(this.user.phoneno);
    if (this.otpForm.invalid) {
      return;
    }
    this.loaderMsg = 'Validating OTP...';
    this.isLoading = true;
    this.http.validateOTP(this.otpForm.value).subscribe((result: any) => {
      this.isLoading = false;
      this.showVerifyOTP = false;
      this.getUserAccount();
    }, (error) => {
      this.isLoading = false;
      this.showVerifyOTP = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
