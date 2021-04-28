import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateEditUserComponent } from './users-list/create-edit-user/create-edit-user.component';
import { RolesComponent } from './roles/roles.component';
import { DepartmentsComponent } from './departments/departments.component';


@NgModule({
  declarations: [AdminComponent, UsersListComponent, CreateEditUserComponent, RolesComponent, DepartmentsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  entryComponents: [CreateEditUserComponent]
})
export class AdminModule { }
