import { Component, OnDestroy, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/http-service.service';
import { MatPaginatorIntl } from '@angular/material';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.scss']
})
export class SerachComponent implements OnInit {

  isLoading = true;

  user: any = {};
  search: any = {};
  professionsList = [];
  professionsListFull = [];
  dealsList = [];
  dealsListFull = [];
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};
  openDeals = [];
  loaderMsg = 'Loading search results...';
  isDealsView = false;

  pageEvent: any = {};
  total = 0;
  page = 0;
  pageSize = 5;
  private _eref: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authGuardService: AuthGuardService,
    private messageService: MessageService) {
      this.appConfig = appConfig;
    }

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
    this.initUsersOpenDeails();
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.search = queryParams;
      if (this.search.option === 'deals') {
        this.initDealsSearch(this.search);
      } else {
        this.initProfessionalsSearch(this.search);
      }
    });
  }

  initDealsSearch(search) {
    this.isLoading = true;
    this.professionsList = [];
    this.professionsListFull = [];
    this.http.getDealsSearch(search).subscribe((result: any) => {
      this.isLoading = false;
      const dealsList = [...result ? result : []];
      this.page = 0;
      this.dealsList = dealsList.splice(0, this.pageSize)
      this.dealsListFull = result ? result : [];
      this.total = this.dealsListFull.length;
      this.isDealsView = true;
    }, (error) => {
      this.isLoading = false;
    });
  }

  initProfessionalsSearch(search) {
    this.isLoading = true;
    this.dealsList = [];
    this.dealsListFull = [];
    this.http.getProfessionsSearch(search).subscribe((result: any) => {
      this.isLoading = false;
      const professionsList = [...result ? result : []];
      this.page = 0;
      this.professionsList = professionsList.splice(0, this.pageSize)
      this.professionsListFull = result ? result : [];
      this.total = this.professionsListFull.length;
      this.isDealsView = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  // Get users open deals list
  initUsersOpenDeails() {
    this.openDeals = [];
    this.http.getDealsByStatus(this.userId, 'New').subscribe((result: any) => {
      this.openDeals = result ? result : [];
    }, (error) => {
    });
  }

  showRequestComment(deals, isShow) {
    deals.req_description = '';
    deals.showComment = isShow;
  }

  onRequestDeals(deals) {
    this.isLoading = true;
    this.loaderMsg = 'Sending your request...';
    const payload = {
        deal_id: deals.id,
        user_id: this.userId,
        req_description: deals.req_description
    };
    this.http.sendRequestDeal(payload).subscribe((result: any) => {
      this.isLoading = false;
      deals.showComment = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  showAssignDealComment(profession, isShow) {
    profession.req_description = '';
    profession.selectedDeal = {};
    profession.showComment = isShow;
  }

  onAssignDeals(profession) {
    this.isLoading = true;
    this.loaderMsg = 'Assigning deal...';
    const payload = {
        deal_id: profession.selectedDeal.id,
        user_id: this.userId,
        description: profession.comment,
        status: 'Assigned',
        assigned_userId: profession.id,
    };
    this.http.updateDealsStatus(payload).subscribe((result: any) => {
      profession.showComment = false;
      this.isLoading = false;
      this.router.navigate(['/auth/deals'])
      // this.initUsersOpenDeails();
    }, (error) => {
      this.isLoading = false;
    });
  }

  onPaginationChange(event) {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    if (this.isDealsView) {
      this.dealsList = this.dealsListFull.slice(this.page * this.pageSize, (this.page * this.pageSize) + this.pageSize);
    } else {
      this.professionsList = this.professionsListFull.slice(this.page * this.pageSize, (this.page * this.pageSize) + this.pageSize);
    }
    window.scrollTo(0, 0);
  }

}
