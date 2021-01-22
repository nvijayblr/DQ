import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis.component';


@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    SharedModule
  ]
})
export class AnalysisModule { }
