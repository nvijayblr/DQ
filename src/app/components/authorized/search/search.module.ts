import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { SearchRoutingModule } from './search-routing.module';
import { SerachComponent } from './serach.component';


@NgModule({
  declarations: [SerachComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
