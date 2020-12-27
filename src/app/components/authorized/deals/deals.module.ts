import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals.component';
import { DealsAddEditComponent } from './deals-add-edit/deals-add-edit.component';


@NgModule({
  declarations: [DealsComponent, DealsAddEditComponent],
  imports: [
    CommonModule,
    DealsRoutingModule,
    SharedModule
  ],
  entryComponents: [DealsAddEditComponent, ]
})
export class DealsModule { }
