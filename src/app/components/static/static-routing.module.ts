import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticComponent } from './static.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

const routes: Routes = [
  {
    path: '',
    component: StaticComponent,
    children: [
      {
        path: '',
        redirectTo: 'about-us',
        pathMatch: 'full'
      }, {
        path: 'about-us',
        component: AboutusComponent
      }, {
        path: 'contact-us',
        component: ContactusComponent

      }, {
        path: 'privacy',
        component: PrivacyComponent
      }, {
        path: 'terms-conditions',
        component: TermsComponent
      }, {
        path: 'disclaimer',
        component: DisclaimerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
