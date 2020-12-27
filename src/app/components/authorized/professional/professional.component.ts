import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfessionalComponent implements OnInit, OnDestroy {

  isLoading = true;

  user: any = {};
  professional: any = [];
  services: any = [];
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};
  isCurrentUser = false;
  isProfessionalTab = true;
  loaderMsg = '';

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
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.isCurrentUser = true;
      if (queryParams.id) {
        if (this.userId !== queryParams.id) {
          this.isCurrentUser = false;
        }
        this.userId = queryParams.id;
      }
      this.getUsersProfessionalDetails();
    });

  }

  getUsersProfessionalDetails() {
    this.isLoading = true;
    this.loaderMsg = 'Loading professional details...';
    this.http.getProfessionalDetails(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.professional = result;
    }, (error) => {
      this.isLoading = false;
    });
  }

  getUsersServicesDetails() {
    this.isLoading = true;
    this.loaderMsg = 'Loading professional details...';
    this.http.getServicesDetails(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.services = result;
    }, (error) => {
      this.isLoading = false;
    });
  }

  shareWithCommunity(item, shareKey) {
    this.isLoading = true;
    this.loaderMsg = 'Sharing the content to your community...';
    const payload = {
      [shareKey]: item.id
    };
    this.http.shareWithCommunity(this.userId, payload).subscribe((result: any) => {
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  tabChange(tab) {
    if (tab.index === 0) {
      this.isProfessionalTab = true;
    }
    if (tab.index === 1) {
      this.isProfessionalTab = false;
      this.getUsersServicesDetails();
    }
  }

  navigateToSection(element) {
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  ngOnDestroy() {
    this.http.cancelGetProfessionalDetails();
  }

}
