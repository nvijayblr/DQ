import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalComponent } from './professional.component';
import { ProfessionalEditComponent } from './professional-edit/professional-edit.component';
import { ServicesEditComponent } from './services-edit/services-edit.component';

const routes: Routes = [
  { path: '', component: ProfessionalComponent },
  { path: 'update', component: ProfessionalEditComponent },
  { path: 'services', component: ServicesEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule { }
