import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent, ButtonRendererComponent } from './contacts.component';
import { ContactsAddEditDialogComponent } from './contacts-add-edit-dialog/contacts-add-edit-dialog.component';
import { ImportContactsDialogComponent } from './import-contacts-dialog/import-contacts-dialog.component';


@NgModule({
  declarations: [ContactsComponent, ButtonRendererComponent, ContactsAddEditDialogComponent, ImportContactsDialogComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  entryComponents: [
    ButtonRendererComponent,
    ContactsAddEditDialogComponent,
    ImportContactsDialogComponent
  ],
  exports: [ContactsComponent, ButtonRendererComponent, ContactsAddEditDialogComponent, ImportContactsDialogComponent]
})
export class ContactsModule { }
