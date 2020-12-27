import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthGuardService } from '../../services/auth-guard.service';
import { MessageService } from '../../services/message.service';
import { HttpService } from '../../services/http-service.service';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-recent-deals',
  templateUrl: './recent-deals.component.html',
  styleUrls: ['./recent-deals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecentDealsComponent implements OnInit, OnDestroy {
  user: any = {};
  userId = '';
  isCurrentUser = false;
  appConfig: any = {};
  subscription: Subscription;
  isLoading = false;
  loaderMsg = 'Loading recent deals...';
  deals: any = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private authGuardService: AuthGuardService,
    private messageService: MessageService,
  ) {
    this.appConfig = appConfig;
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
  }

  ngOnInit() {
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.subscription = this.messageService.getLoginMessage().subscribe(user => {
      this.user = user;
      this.getRecentDeails();
    });
    this.getRecentDeails();
  }

  getRecentDeails() {
    this.loaderMsg = 'Loading recent details...';
    this.isLoading = true;
    this.http.getRecentDeals().subscribe((result: any) => {
      this.isLoading = false;
      this.deals = result;
    }, (error) => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
