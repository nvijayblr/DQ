import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGaurd } from 'src/app/services/auth-guard.service';
import { UsersListComponent } from './users-list/users-list.component';
import { RolesComponent } from './roles/roles.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
  }, {
    path: 'roles',
    component: RolesComponent,
  }, {
    path: 'departments',
    component: DepartmentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

