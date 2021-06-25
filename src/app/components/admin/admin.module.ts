import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateEditUserComponent } from './users-list/create-edit-user/create-edit-user.component';
import { RolesComponent } from './roles/roles.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CreateEditDeptComponent } from './departments/create-edit-dept/create-edit-dept.component';
import { CreateEditRoleComponent } from './roles/create-edit-role/create-edit-role.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { MultiSourceComponent } from './multi-source/multi-source.component';
import { CreateEditFrequencyComponent } from './frequency/create-edit-frequency/create-edit-frequency.component';
import { CreateEditMultiSourceComponent } from './multi-source/create-edit-multi-source/create-edit-multi-source.component';
import { CategoryComponent } from './category/category.component';
import { CreateEditCategoryComponent } from './category/create-edit-category/create-edit-category.component';
import { SourceCategoryComponent } from './source-category/source-category.component';
import { CreateEditSourceCategoryComponent } from './source-category/create-edit-source-category/create-edit-source-category.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
    CreateEditUserComponent,
    RolesComponent,
    DepartmentsComponent,
    CreateEditDeptComponent,
    CreateEditRoleComponent,
    FrequencyComponent,
    MultiSourceComponent,
    CreateEditFrequencyComponent,
    CreateEditMultiSourceComponent,
    CategoryComponent,
    CreateEditCategoryComponent,
    SourceCategoryComponent,
    CreateEditSourceCategoryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    CreateEditUserComponent,
    CreateEditDeptComponent,
    CreateEditRoleComponent,
    CreateEditFrequencyComponent,
    CreateEditMultiSourceComponent,
    CreateEditCategoryComponent,
    CreateEditSourceCategoryComponent
  ]
})
export class AdminModule { }
