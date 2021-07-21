import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSelectFilterModule } from 'mat-select-filter';
import {MatSelectModule, MatFormFieldModule} from '@angular/material';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGaurd } from './../../services/auth-guard.service';
import { SharedModule } from './../../shared/shared.module';
import { CanDeactivateContact , CanDeactivateSource} from './candeactivate.route';

import { AuthorizedRoutingModule } from './authorized-routing.module';
import { AuthorizedComponent } from './authorized.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DelayAnalysisComponent } from './delay-analysis/delay-analysis.component';
import { CreateSourceComponent } from './create-source/create-source.component';
import { ProfileComponent } from './profile/profile.component';
import { AttributeDetailsComponent } from './attribute-details/attribute-details.component';
import { CorrelationDetailsComponent } from './correlation-details/correlation-details.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { DataCleaningComponent } from './data-cleaning/data-cleaning.component';
import { DataQualityComponent } from './data-quality/data-quality.component';
import { CreateProfileDataComponent } from './create-profile-data/create-profile-data.component';
import { OracleComponent } from './create-source/oracle/oracle.component';
import { SchemaTableComponent } from './create-source/schema-table/schema-table.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MangoDBComponent } from './create-source/mango-db/mango-db.component';


@NgModule({
  declarations: [
    AuthorizedComponent,
    DashboardComponent,
    DelayAnalysisComponent,
    CreateSourceComponent,
    ProfileComponent,
    AttributeDetailsComponent,
    CorrelationDetailsComponent,
    AnalysisComponent,
    DataCleaningComponent,
    DataQualityComponent,
    CreateProfileDataComponent,
    OracleComponent,
    SchemaTableComponent,
    MainDashboardComponent,
    MangoDBComponent,
    
  ],
   imports: [
    HighchartsChartModule,
    NgxSliderModule,
    CommonModule,
    AuthorizedRoutingModule,
    SharedModule,
    MatSelectModule,
    MatFormFieldModule,
     MatSelectFilterModule,
     NgbModule,
     Ng2SearchPipeModule
  ],
  providers:[CanDeactivateContact, CanDeactivateSource],
   exports: [AttributeDetailsComponent, CorrelationDetailsComponent,NgbModule]

})
export class AuthorizedModule { }
