import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGaurd } from 'src/app/services/auth-guard.service';
import { AuthorizedComponent } from './authorized.component';
import { DelayAnalysisComponent } from './delay-analysis/delay-analysis.component';
import { CreateSourceComponent } from './create-source/create-source.component';
import { ProfileComponent } from './profile/profile.component';
import { AttributeDetailsComponent } from './attribute-details/attribute-details.component';

const routes: Routes = [
  {
    path: '', component: AuthorizedComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'delay-analysis',
        component: DelayAnalysisComponent,
        // canActivate: [AuthGaurd]
      },
      {
        path: 'analysis',
        loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule),
        // canActivate: [AuthGaurd]
       },
       { path: 'add-source-data', component: ProfileComponent },
       { path: 'create-source-data', component: CreateSourceComponent },
       { path: 'attribute-details-data', component: AttributeDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule { }

