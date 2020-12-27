import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../../services/http-service.service';
import { InputValidation } from '../../../services/InputValidation';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';
import { DealsAddEditComponent } from './deals-add-edit/deals-add-edit.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DealsComponent implements OnInit, OnDestroy {

  isLoading = true;
  loadingMsg = 'Loading deals...';
  user: any = {};
  dealsList: any = [];
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};
  dealStatus = '';
  accountLoading = false;
  tabIndex = 0;
  
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private http: HttpService,
    public inputValidation: InputValidation,
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
    this.getUsersAccountDetails();
    this.getUserDeals();
    // this.activatedRoute.params.subscribe(routeParams => {
    //   // this.userId = this.route.snapshot.params.userId;
    //   if (this.userId === this.user.UserId) {
    //     this.getUsersPersonalDetails();
    //     this.isEditMode = true;
    //   } else {
    //     this.isEditMode = false;
    //     this.user = {};
    //     this.getUsersPersonalDetails();
    //   }
    // });

  }

  getUsersAccountDetails() {
    this.accountLoading = true;
    this.http.getAccountDetails(this.userId).subscribe((result: any) => {
      this.user = result;
      this.accountLoading = false;
    }, (error) => {
      this.accountLoading = false;
    });
  }

  getUserDeals() {
    this.isLoading = true;
    this.loadingMsg = 'Loading deals...';
    this.http.getUserDealsList(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.dealsList = result;
    }, (error) => {
      this.isLoading = false;
    });
  }

  getAssigedDeals() {
    this.isLoading = true;
    this.loadingMsg = 'Loading assigned deals...';
    this.http.getAssignedDealsList(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.dealsList = result;
    }, (error) => {
      this.isLoading = false;
    });
  }

  showCreateEditDeals(deals = {}, isStatusOnly = false) {
    const dialog = this.dialog.open(DealsAddEditComponent, {
      disableClose: true,
      panelClass: 'deals-dialog',
      data: {deals, isStatusOnly}
    });
    dialog.afterClosed().subscribe(result => {
      if (!result.isCancelled) {
        if (!isStatusOnly) {
          this.getUserDeals();
        } else {
          this.getAssigedDeals();
        }
      }
    });
  }

  deleteDeals(deals, index) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete deal',
        message: `Are you sure want to delete the deal?`,
        cancelLable: 'No',
        okLable: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe(action => {
      if (action === 'ok') {
        this.isLoading = true;
        this.loadingMsg = 'Deleting deal...';
        this.http.deleteUserDeals(this.userId, deals.id).subscribe((result: any) => {
          this.isLoading = false;
          this.dealsList.splice(index, 1);
        }, (error) => {
          this.isLoading = false;
        });
      } else {
      }
    });
  }

  activeDeactiveUserDeals(deals, status, index) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: status ? 'Activate deal' : 'Deactivate deal',
        message: `Are you sure want to ${status ? 'activate' : 'deactivate'} the deal?`,
        cancelLable: 'No',
        okLable: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe(action => {
      if (action === 'ok') {
        this.isLoading = true;
        this.loadingMsg = `${status ? 'Activating' : 'Deactivating'} the deal...`;
        this.http.activeDeactiveUserDeals(this.userId, deals.id, status).subscribe((result: any) => {
          this.isLoading = false;
          this.getUserDeals();
        }, (error) => {
          this.isLoading = false;
        });
      } else {
      }
    });
  }

  showHideRequestors(deals, isShow) {
    deals.showReqestors = isShow;
    deals.showHistory = false;
    if (isShow) {
      this.isLoading = true;
      this.loadingMsg = 'Loading requestors...';
      deals.requestors = [];
      this.http.getDealsRequestors(deals.id).subscribe((result: any) => {
        this.isLoading = false;
        deals.requestors = result;
      }, (error) => {
        this.isLoading = false;
      });
    }
  }

  showHideHistory(deals, isShow) {
    deals.showHistory = isShow;
    deals.showReqestors = false;
    if (isShow) {
      this.isLoading = true;
      this.loadingMsg = 'Loading history...';
      deals.history = [];
      this.http.getDealsHistory(deals.id).subscribe((result: any) => {
        this.isLoading = false;
        deals.history = result;
      }, (error) => {
        this.isLoading = false;
      });
    }
  }

  showHideStatusComment(obj, isShow, status = '') {
    obj.showReqestors = false;
    obj.showHistory = false;
    obj.status_path = '';
    if (status === 'Completed' || status === 'Closed') {
      obj.showRating = true;
    } else {
      obj.showRating = false;
    }
    this.dealStatus = status;
    obj.comment = '';
    obj.showComment = isShow;
  }

  onAcceptDealsRequest(obj, deals) {
    this.isLoading = true;
    this.loadingMsg = 'Assigning deal...';
    const payload = {
        deal_id: obj.deal_id,
        user_id: obj.user_id,
        description: obj.comment
    };
    this.http.acceptDealsRequest(payload).subscribe((result: any) => {
      obj.showComment = false;
      deals.showReqestors = false;
      deals.status = 'Accepted';
      this.onTabChange(this.tabIndex);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  onUpdateDealsStatus(obj) {
    this.isLoading = true;
    const payload = {
        deal_id: obj.id,
        user_id: this.userId,
        assigned_userId: this.dealStatus === 'New' ? '' : obj.assigned_userId,
        status: this.dealStatus,
        description: obj.comment,
        assignerating: obj.assignerating,
        ownerrating: obj.ownerrating,
        amountpaid: obj.amountpaid,
        path: obj.status_path,
    };
    this.http.updateDealsStatus(payload).subscribe((result: any) => {
      obj.showComment = false;
      this.isLoading = false;
      obj.status = this.dealStatus;
      this.onTabChange(this.tabIndex);
    }, (error) => {
      this.isLoading = false;
    });
  }

  onRatting($event, deals, key) {
    deals[key] = $event.newValue;
  }

  onUploadCompleted(e, deals) {
    deals.status_path = e.path;
  }

  tabChange(tab) {
    this.tabIndex = tab.index;
    this.onTabChange(this.tabIndex);
  }

  onTabChange(tabIndex) {
    this.http.cancelGetUserDealsList();
    this.http.cancelGetAssignedDealsList();
    if (tabIndex === 0) {
      this.getUserDeals();
    }
    if (tabIndex === 1) {
      this.getAssigedDeals();
    }
  }

  ngOnDestroy() {
    this.http.cancelGetUserDealsList();
    this.http.cancelGetAssignedDealsList();
  }
}
