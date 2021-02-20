import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingModule } from 'ng-starrating';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FileFormatPipe } from '../services/file-format-pipe';
import { MnCarouselComponent } from './mn-carousel/mn-carousel.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ColumnSelectorComponent } from './column-selector/column-selector.component';
import { DragDropListComponent } from './column-selector/drag-drop-list/drag-drop-list.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CylinderChartComponent } from './cylinder-chart/cylinder-chart.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ImageCropperModule,
    CarouselModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    RatingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent,
    ImageCropperComponent,
    ConfirmDialogComponent,
    FileFormatPipe,
    MnCarouselComponent,
    AccountDetailsComponent,
    ColumnSelectorComponent,
    DragDropListComponent,
     BarChartComponent,
     CylinderChartComponent
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
    RatingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ColumnSelectorComponent,
    DragDropListComponent,
     BarChartComponent,
     CylinderChartComponent
  ],
  providers: [
    DatePipe
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule {}
