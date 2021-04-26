import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { CreateEditUserComponent } from './users-list/create-edit-user/create-edit-user.component';


@NgModule({
  declarations: [AdminComponent, AdminLoginComponent, UsersListComponent, AdminHeaderComponent, CreateEditUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  entryComponents: [CreateEditUserComponent]
})
export class AdminModule { }
