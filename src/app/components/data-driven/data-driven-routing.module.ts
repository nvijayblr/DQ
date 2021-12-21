import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { DataQualityComponent } from './data-quality-monitor/data-quality.component'
import { DataDrivenComponent } from './data-driven.component';

const routes: Routes = [
    {
        path: '', component: DataDrivenComponent,
        children: [
            { path: 'data-profile', component: DataProfileComponent },
            { path: 'data-quality-monitoring', component: DataQualityComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataDrivenRoutingModule {

}