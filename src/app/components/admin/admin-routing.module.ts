import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGaurd } from 'src/app/services/auth-guard.service';
import { UsersListComponent } from './users-list/users-list.component';
import { RolesComponent } from './roles/roles.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { MultiSourceComponent } from './multi-source/multi-source.component';
import { CategoryComponent } from './category/category.component';
import { SourceCategoryComponent } from './source-category/source-category.component';

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
  }, {
    path: 'category',
    component: CategoryComponent,
  }, {
    path: 'frequency',
    component: FrequencyComponent,
  }, {
    path: 'multi-source',
    component: MultiSourceComponent,
  }, {
    path: 'source-category',
    component: SourceCategoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

