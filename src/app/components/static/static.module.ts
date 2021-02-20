import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { StaticRoutingModule } from './static-routing.module';
import { StaticComponent } from './static.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';


@NgModule({
  declarations: [
    StaticComponent,
    AboutusComponent,
    ContactusComponent,
    PrivacyComponent,
    TermsComponent,
    DisclaimerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StaticRoutingModule
  ]
})
export class StaticModule { }
