import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesetComponent } from './ruleset.component';

const routes: Routes = [{ path: '', component: RulesetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesetRoutingModule { }
