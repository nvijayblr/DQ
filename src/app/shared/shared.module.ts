import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingModule } from 'ng-starrating';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ColorPickerModule } from 'ngx-color-picker';
import { AgGridModule } from 'ag-grid-angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FileFormatPipe } from '../services/file-format-pipe';
import { FormatCellsPipe } from '../services/format-cells-pipe';
import { MnCarouselComponent } from './mn-carousel/mn-carousel.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ColumnSelectorComponent } from './column-selector/column-selector.component';
import { DragDropListComponent } from './column-selector/drag-drop-list/drag-drop-list.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CylinderChartComponent } from './cylinder-chart/cylinder-chart.component';
import { ColorDialogComponent } from './color-dialog/color-dialog.component';
import { CompletenessDialogComponent } from './completeness-dialog/completeness-dialog.component';
import { RuleSelectorComponent } from './rule-selector/rule-selector.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { FormulaEditorComponent } from './formula-editor/formula-editor.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { AnalysisChartComponent } from './analysis-chart/analysis-chart.component';
import { CorelationSummaryComponent } from './corelation-summary/corelation-summary.component';
import { AdvancedFormulaEditorComponent } from './advanced-formula-editor/advanced-formula-editor.component';
import { ToleranceLevelDialogComponent } from './tolerance-level-dialog/tolerance-level-dialog.component';

@NgModule({
   imports: [
      HighchartsChartModule,
    CommonModule,
    MaterialModule,
    ImageCropperModule,
    CarouselModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    RatingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ColorPickerModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent,
    ImageCropperComponent,
    ConfirmDialogComponent,
    FileFormatPipe,
    FormatCellsPipe,
    MnCarouselComponent,
    AccountDetailsComponent,
    ColumnSelectorComponent,
    DragDropListComponent,
    BarChartComponent,
    CylinderChartComponent,
    ColorDialogComponent,
    CompletenessDialogComponent,
    RuleSelectorComponent,
    AgGridComponent,
    FormulaEditorComponent,
    HeatMapComponent,
    AnalysisChartComponent,
    CorelationSummaryComponent,
    AdvancedFormulaEditorComponent,
    ToleranceLevelDialogComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ImageCropperModule,
    CarouselModule,
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent,
    ImageCropperComponent,
    ConfirmDialogComponent,
    AccountDetailsComponent,
    MnCarouselComponent,
    FileFormatPipe,
    FormatCellsPipe,
    RatingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AgGridModule,
    ColumnSelectorComponent,
    DragDropListComponent,
    BarChartComponent,
    CylinderChartComponent,
    ColorDialogComponent,
    CompletenessDialogComponent,
    RuleSelectorComponent,
    AgGridComponent,
    FormulaEditorComponent,
    HeatMapComponent,
    AnalysisChartComponent,
    CorelationSummaryComponent,
    AdvancedFormulaEditorComponent
  ],
  providers: [
     DatePipe,
  ],
  entryComponents: [
     ConfirmDialogComponent,
     ColorDialogComponent,
     CompletenessDialogComponent,
     FormulaEditorComponent,
    AdvancedFormulaEditorComponent,
    ToleranceLevelDialogComponent
  ]
})
export class SharedModule {}
