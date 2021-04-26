import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGaurd } from 'src/app/services/auth-guard.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: AdminLoginComponent,
  }, {
    path: 'users',
    component: UsersListComponent,
  }, {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }, {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

