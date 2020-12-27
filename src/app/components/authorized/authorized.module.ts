import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGaurd } from './../../services/auth-guard.service';
import { SharedModule } from './../../shared/shared.module';

import { AuthorizedRoutingModule } from './authorized-routing.module';
import { AuthorizedComponent } from './authorized.component';


@NgModule({
  declarations: [AuthorizedComponent],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    SharedModule
  ]
})
export class AuthorizedModule { }
