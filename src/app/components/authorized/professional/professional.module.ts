import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { ProfessionalEditComponent } from './professional-edit/professional-edit.component';
import { ServicesEditComponent } from './services-edit/services-edit.component';


@NgModule({
  declarations: [ProfessionalComponent, ProfessionalEditComponent, ServicesEditComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    SharedModule
  ],
  exports: [
    ProfessionalComponent,
    ProfessionalEditComponent,
    ServicesEditComponent
  ]
})
export class ProfessionalModule { }
