import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './personal.component';
import { PersonalEditComponent } from './personal-edit/personal-edit.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  { path: '', component: PersonalComponent },
  { path: 'update', component: PersonalEditComponent },
  { path: 'settings', component: AccountSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
