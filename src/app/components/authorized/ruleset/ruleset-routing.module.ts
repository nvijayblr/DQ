import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesetComponent } from './ruleset.component';
import { CanDeactivateRules } from '../candeactivate.route';

const routes: Routes = [{ path: '', component: RulesetComponent,  canDeactivate: [CanDeactivateRules] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesetRoutingModule { }
