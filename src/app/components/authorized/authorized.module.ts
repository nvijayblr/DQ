import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGaurd } from './../../services/auth-guard.service';
import { SharedModule } from './../../shared/shared.module';

import { AuthorizedRoutingModule } from './authorized-routing.module';
import { AuthorizedComponent } from './authorized.component';
import { DelayAnalysisComponent } from './delay-analysis/delay-analysis.component';
import { CreateSourceComponent } from './create-source/create-source.component';
import { ProfileComponent } from './profile/profile.component';
import { AttributeDetailsComponent } from './attribute-details/attribute-details.component';


@NgModule({
  declarations: [AuthorizedComponent, DelayAnalysisComponent, CreateSourceComponent, ProfileComponent, AttributeDetailsComponent],
   imports: [
      HighchartsChartModule,
      NgxSliderModule,
    CommonModule,
    AuthorizedRoutingModule,
     SharedModule
     
  ]
})
export class AuthorizedModule { }
