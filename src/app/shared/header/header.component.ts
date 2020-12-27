import { Component, OnInit, OnDestroy, HostListener, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { CommonService } from '../../services/common.service';
import { Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { HttpService } from '../../services/http-service.service';
import { query } from '@angular/animations';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('serachWrapper', {static: true}) serachWrapper: ElementRef;
  @ViewChild('header', {static: true}) header: ElementRef;

  searchForm: FormGroup;

  isSticky = false;
  isHidden = false;
  prevOffset = 0;
  categories = [];
  categoryName = '';
  user: any = {};
  subscription: Subscription;
  commonSub: Subscription;
  isUserLoggedIn = false;
  search: any = {};
  notificationsCount = 0;
  isShowSearch = false;
  searchOptions = [{
    value: 'profession',
    title: 'Professions'
  }, {
    value: 'zipcode',
    title: 'Porfessional by Zipcode'
  }, {
    value: 'deals',
    title: 'Deals'
  }, {
    value: 'email',
    title: 'Email'
  }, {
    value: 'phoneno',
    title: 'Phoneno'
  }, {
    value: 'fullname',
    title: 'Full name'
  }];

  notifications: any = [];
  isLoading = false;
  loaderMsg = 'Loading notifications...';
  userId = '';
  appConfig: any = {};
  isAdmin = false;

  @HostListener('window:scroll')
  checkScroll() {
    const curOffset = window.pageYOffset;
    this.isSticky = curOffset >= 100;
    if (curOffset >= 200 && (curOffset > this.prevOffset)) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.prevOffset = curOffset;
  }


  @HostListener('document:click', ['$event'])
  documentClick(e) {
    if (this.header.nativeElement.contains(e.target) || e.target.className === 'mat-option-text') {
      return;
    }
    if (!this.serachWrapper.nativeElement.contains(e.target)) {
      this.isShowSearch = false;
    }
  }
  
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public common: CommonService,
    private router: Router,
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private authGuardService: AuthGuardService,
    private socialAuthService: SocialAuthService) {
    }

  ngOnInit() {
    this.appConfig = appConfig;
    // console.log(this.categoryName, this.authGuardService.getLoggedInUserDetails());
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.isAdmin = this.authGuardService.isAdmin();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.router.events.subscribe(params => {
      // console.log(this.router.routerState.root);
      // this.categoryName = params.categoryId;
    });
    this.subscription = this.messageService.getLoginMessage().subscribe(user => {
      this.user = user;
    });
    this.commonSub = this.messageService.getCommonMessage().subscribe(message => {
      if (message.topic === 'logout') {
        this.doLogout();
      }
      if (message.topic === 'showLogin' ) {
        this.doLogin('create');
      }
      if (message.topic === 'notifications' ) {
        this.getNotificationsCount();
      }
    });
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.search = queryParams;
      this.searchForm = this.fb.group({
        option: [this.search.option ? this.search.option : 'profession'],
        q: [this.search.q ? this.search.q : ''],
        location: [this.search.location ? this.search.location : ''],
      });
    });
    // this.getNotificationsCount();
  }

  initSearch() {
    this.router.navigate([`/auth/search`], {queryParams: this.searchForm.value});
  }

  getNotificationsCount() {
    this.http.getNotificationsCount(this.user.user_id).subscribe((result: any) => {
      this.notificationsCount = result.count;
    }, (error) => {
    });
  }

  doLogin(option) {
    // const dialogRef = this.dialog.open(LoginSignupComponent, {
    //   width: '700px',
    //   panelClass: ['login-singup'],
    //   disableClose: true,
    //   data: {mode: 'login', option}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    //   this.user = this.authGuardService.getLoggedInUserDetails();
    // });
  }

  showCloseSerach() {
    this.isShowSearch = !this.isShowSearch;
  }

  doLogout() {
    const userSession = this.authGuardService.getLoggedUser();
    if (userSession.isSocial) {
      this.socialAuthService.signOut();
    }
    this.user.isLoggedIn = false;
    this.isUserLoggedIn = false;
    localStorage.removeItem('dq_token');
    this.router.navigate([`/login`]);
  }


  drawerOpen(event) {
    this.notifications = [];
   if (event) {
    this.userId = this.user.user_id;
    this.getAllNotifications();
   }
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
    this.subscription.unsubscribe();
    this.commonSub.unsubscribe();
  }

}
