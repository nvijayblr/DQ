import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerachComponent } from './serach.component';


const routes: Routes = [
  { path: '', component: SerachComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
