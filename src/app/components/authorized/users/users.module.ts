import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent, ButtonRendererComponent } from './users.component';
import { UsersAddEditComponent } from './users-add-edit/users-add-edit.component';
import { ImportUsersDialogComponent } from './import-users-dialog/import-users-dialog.component';

@NgModule({
  declarations: [UsersComponent, ButtonRendererComponent, UsersAddEditComponent, ImportUsersDialogComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  entryComponents: [
    ButtonRendererComponent,
    UsersAddEditComponent,
    ImportUsersDialogComponent
  ],
  exports: [UsersComponent, ButtonRendererComponent, UsersAddEditComponent, ImportUsersDialogComponent]
})
export class UsersModule { }
