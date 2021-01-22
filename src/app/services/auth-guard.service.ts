import { P } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()

export class AuthGuardService implements CanActivate {

  session: any = {};

  constructor(public router: Router) {
    this.isAuthenticated();
  }

  public isAuthenticated(): boolean {
    let token: any = localStorage.getItem('dq_token');
    if (token) {
      token = JSON.parse(token);
    }
    this.session = token;
    return token && token.id ? true : false;
  }

  public getToken() {
    return this.session && this.session.id ? this.session.id : '';
  }

  public getLoggedUser() {
    return this.session && this.session ? this.session : {};
  }

  public getUserRole() {
    console.log(this.session);
    return this.session && this.session ? this.session : {};
  }


  public getLoggedInUserDetails() {
    return this.session ? this.session : {};
  }

  public isAdminUser() {
    const user = this.session ? this.session : {};
    if (user.role === 'admin') {
      return true;
    }
    return false;
  }

  get isUserLoggedIn() {
    return this.isAuthenticated;
  }

  get isAdmin() {
    return this.isAdminUser;
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
