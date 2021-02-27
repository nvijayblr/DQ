import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { CreateSourceRoutingModule } from './create-source-routing.module';
import { CreateSourceComponent } from './create-source.component';


@NgModule({
  declarations: [CreateSourceComponent],
  imports: [
    CommonModule,
    CreateSourceRoutingModule,
    SharedModule
  ]
})
export class CreateSourceModule { }
