import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { PersonalEditComponent } from './personal-edit/personal-edit.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [PersonalComponent, PersonalEditComponent, AccountSettingsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PersonalRoutingModule
  ],
  exports: [
    PersonalComponent,
    PersonalEditComponent,
    AccountSettingsComponent
  ]
})
export class PersonalModule { }
