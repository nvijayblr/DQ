import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  appConfig: any = {};
  user: any = {};

  constructor(private router: Router,
    private authGuardService: AuthGuardService,
    private socialAuthService: SocialAuthService) {
    this.navLinks = [
      {
        label: 'User Settings',
        icon: 'assignment_ind',
        children: [{
          label: 'Users',
          link: 'users',
          index: 0
        }, {
          label: 'Roles',
          link: 'roles',
          index: 1
        }]
      }, {
        label: 'Settings',
        icon: 'settings',
        children: [{
          label: 'Departments',
          link: 'departments',
          index: 2
        }, {
          label: 'User Category',
          link: 'category',
          index: 3
        }, {
          label: 'Source Category',
          link: 'source-category',
          index: 4
        }, {
          label: 'Frequency',
          link: 'frequency',
          index: 5
        }, {
          label: 'Multi Source',
          link: 'multi-source',
          index: 6
        }]
      }
    ];
  }

  ngOnInit() {
    this.setUserDetail();
  }

  setUserDetail() {
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.appConfig = appConfig;
    if (!this.user.rights) {
      this.logout();
    }
  }

  logout() {
    const userSession = this.authGuardService.getLoggedUser();
    if (userSession.isSocial) {
      this.socialAuthService.signOut();
    }
    localStorage.removeItem('dq_token');
    this.router.navigate([`/login`]);
  }
}
