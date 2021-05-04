import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AuthorizedModule } from '../authorized.module';

import { RulesetRoutingModule } from './ruleset-routing.module';
import { RulesetComponent } from './ruleset.component';



@NgModule({
  declarations: [RulesetComponent],
  imports: [
    CommonModule,
    RulesetRoutingModule,
    SharedModule,
    AuthorizedModule
  ]
})
export class RulesetModule { }
