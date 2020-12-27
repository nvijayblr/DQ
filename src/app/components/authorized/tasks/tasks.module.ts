import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TasksAddEditComponent } from './tasks-add-edit/tasks-add-edit.component';


@NgModule({
  declarations: [TasksComponent, TasksAddEditComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ],
  entryComponents: [TasksAddEditComponent, ]
})
export class TasksModule { }
