import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDrivenComponent } from './data-driven.component';
import { DataDrivenRoutingModule } from './data-driven-routing.module';
import { DataDrivenService } from './data-driven.service';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { DataQualityComponent } from './data-quality-monitor/data-quality.component';
import { CorrelationDetailComponent } from './correlation-detail/correlation-detail.component';
import { PreviewDetailComponent } from './preview-detail/preview-detail.component';
import { AnalysisDetailComponent } from './analysis-detail/analysis-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/modules/material.module';
import { MatTreeModule, MatStepperModule } from '@angular/material';
import { MatSelectFilterModule } from 'mat-select-filter';
import { SharedModule } from './../../shared/shared.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { DdStepperComponent } from './dd-stepper/dd-stepper.component';
import { CreateSourceComponent } from './create-source/create-source.component';
import { DDRulesetComponent } from './ruleset/ruleset.component';
import { SourceAnalysisComponent } from './source-analysis/source-analysis.component';
import { CompletenessDetailComponent } from './completeness-detail/completeness-detail.component';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { CreateReferenceComponent } from './create-reference/create-reference.component';
import { DataCleaningComponent } from './data-cleaning/data-cleaning.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewSourceRulesetComponent } from './view-source-ruleset/view-source-ruleset.component';

@NgModule({
    declarations: [
        DataDrivenComponent,
        DataProfileComponent,
        DataQualityComponent,
        CorrelationDetailComponent,
        PreviewDetailComponent,
        AnalysisDetailComponent,
        DdStepperComponent,
        CreateSourceComponent,
        DDRulesetComponent,
        SourceAnalysisComponent,
        CompletenessDetailComponent,
        ReferenceDataComponent,
        CreateReferenceComponent,
        DataCleaningComponent,
        ProfileDetailComponent,
        DashboardComponent,
        ViewSourceRulesetComponent
    ],
    imports: [
        FlexLayoutModule,
        MatTreeModule,
        MatStepperModule,
        FontAwesomeModule,
        DataDrivenRoutingModule,
        CommonModule,
        MaterialModule,
        SharedModule,
        CdkStepperModule,
        MatSelectFilterModule
    ],
    providers: [DataDrivenService],
    entryComponents: [CreateSourceComponent, DDRulesetComponent, CompletenessDetailComponent, CreateReferenceComponent, ViewSourceRulesetComponent],
    exports: []
})
export class DataDrivenModule { }