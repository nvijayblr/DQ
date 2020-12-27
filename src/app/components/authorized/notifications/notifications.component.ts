import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsComponent implements OnInit, OnDestroy {
  user: any = {};
  userId = '';
  isCurrentUser = false;
  appConfig: any = {};
  subscription: Subscription;
  notifications: any = [];
  isLoading = false;
  loaderMsg = 'Loading notifications...';
  isUserLoggedIn = false;

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
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
  }

  ngOnInit() {
    this.getAllNotifications();
  }

  getAllNotifications() {
    this.loaderMsg = 'Loading notifications...';
    this.isLoading = true;
    this.http.getNotifications(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.notifications = result;
    }, (error) => {
      this.isLoading = false;
    });
  }

  makeNotificationRead(notification) {
    notification.showMsg = !notification.showMsg;
    if (!notification.status) {
      this.http.makeNotificationRead(this.userId, notification.id).subscribe((result: any) => {
        this.isLoading = false;
        notification.status = true;
        this.messageService.sendCommonMessage({topic: 'notifications', reason: 'Read Notification'});
      }, (error) => {
        this.isLoading = false;
      });
    }
  }

  ngOnDestroy() {
  }

}

