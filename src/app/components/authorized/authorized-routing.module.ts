import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGaurd } from 'src/app/services/auth-guard.service';
import { AuthorizedComponent } from './authorized.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { DelayAnalysisComponent } from './delay-analysis/delay-analysis.component';
import { CreateSourceComponent } from './create-source/create-source.component';
import { ProfileComponent } from './profile/profile.component';
import { AttributeDetailsComponent } from './attribute-details/attribute-details.component';
import { DataCleaningComponent } from './data-cleaning/data-cleaning.component';
import { DataQualityComponent } from './data-quality/data-quality.component';
import { CreateProfileDataComponent } from './create-profile-data/create-profile-data.component';
import { OracleComponent } from './create-source/oracle/oracle.component';
import { SchemaTableComponent } from './create-source/schema-table/schema-table.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MangoDBComponent } from './create-source/mango-db/mango-db.component';
import { CanDeactivateContact, CanDeactivateSource } from './candeactivate.route';

const routes: Routes = [
  {
    path: '', component: AuthorizedComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        //path: 'dashboard',
        path: 'data-quality-monitoring',
        component: DashboardComponent,
        // canActivate: [AuthGaurd]
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'analysis',
        component: AnalysisComponent,
        // canActivate: [AuthGaurd]
      },
      {
        path: 'delay-analysis',
        component: DelayAnalysisComponent,
        // canActivate: [AuthGaurd]
      },
      {
        path: 'ruleset',
        loadChildren: () => import('./ruleset/ruleset.module').then(m => m.RulesetModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule),
        // canActivate: [AuthGaurd]
       },
       { path: 'add-source-data', component: ProfileComponent },
       { path: 'create-source-data', component: CreateSourceComponent, canDeactivate: [CanDeactivateSource] },
       { path: 'attribute-details-data', component: AttributeDetailsComponent },
       { path: 'data-cleaning', component: DataCleaningComponent },
       { path: 'reference-data', component: DataQualityComponent },
      { path: 'create-profile-data', component: CreateProfileDataComponent,canDeactivate: [CanDeactivateContact] },
      { path: 'add-source-data/oracle', component: OracleComponent },
      { path: 'catalog/sources', component: SchemaTableComponent },
      { path: 'dashboard', component: MainDashboardComponent },
      { path: 'add-source-data/mango-db', component: MangoDBComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule {
  
 }

