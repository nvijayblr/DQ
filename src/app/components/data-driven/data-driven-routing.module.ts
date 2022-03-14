import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { DataQualityComponent } from './data-quality-monitor/data-quality.component'
import { DataDrivenComponent } from './data-driven.component';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { DataCleaningComponent } from './data-cleaning/data-cleaning.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '', component: DataDrivenComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'data-profile', component: DataProfileComponent },
            { path: 'data-quality-monitoring', component: DataQualityComponent },
            { path: 'data-cleaning', component: DataCleaningComponent },
            { path: 'reference-data', component: ReferenceDataComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataDrivenRoutingModule {

}