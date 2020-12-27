import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/http-service.service';
import { MatPaginatorIntl } from '@angular/material';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-accounts',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class PersonalComponent implements OnInit, OnDestroy {

  isLoading = true;

  user: any = {};
  personal: any = {};
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};

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
    this.getUsersPersonalDetails();
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

  getUsersPersonalDetails() {
    this.isLoading = true;
    this.http.getPersonalDetails(this.userId, true).subscribe((result: any) => {
      this.isLoading = false;
      this.personal = result;
    }, (error) => {
      this.isLoading = false;
    });
  }

  navigateToSection(element) {
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  ngOnDestroy() {
    this.http.cancelGetPersonalDetailsReq();
  }

}
