import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { HttpService } from '../../../../services/http-service.service';
import { AuthGuardService } from '../../../../services/auth-guard.service';
import { MessageService } from '../../../../services/message.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-tasks-add-edit',
  templateUrl: './tasks-add-edit.component.html',
  styleUrls: ['./tasks-add-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TasksAddEditComponent implements OnInit {

  userOptions: Observable<any[]>;
  tasksForm: FormGroup;
  tasks: any = {};
  isConfirmPasswordError = false;
  loaderMsg = 'Loading deals...';
  user: any = {};
  usersList: any = [];
  isLoading = false;
  isUserLoggedIn = false;
  userId = '';
  minDate = new Date();

  dealTypes = [{
    value: 'Open',
    title: 'Open',
  }];

  repetiveTypes = [{
    value: 'Daily',
    title: 'Daily',
  }, {
    value: 'Weekly',
    title: 'Weekly',
  }, {
    value: 'Monthly',
    title: 'Monthly',
  }, {
    value: 'Yearly',
    title: 'Yearly',
  }];

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private authGuardService: AuthGuardService,
    private messageService: MessageService,
    private router: Router,
    public dialogRef: MatDialogRef<TasksAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
    this.tasks = data;
    this.initDealsDetails(this.tasks);
  }

  ngOnInit() {
  }

  initDealsDetails(tasks) {
    this.tasksForm = this.fb.group({
      id: [tasks.id ? tasks.id : undefined],
      name: [tasks.name, [Validators.required]],
      description: [tasks.description],
      from_date: [tasks.from_date, [Validators.required]],
      to_date: [tasks.to_date, [Validators.required]],
      rem_date: [tasks.rem_date, [Validators.required]],
      reminder: [tasks.reminder],
      repetive: [tasks.repetive],
      repetive_type: [tasks.repetive_type ? tasks.repetive_type : 'Daily'],
    });
  }

  onUploadCompleted(e, formControl) {
    formControl.controls.path.setValue(e.path);
  }

  saveTaskDetails() {
    this.tasksForm.markAllAsTouched();
    if (this.tasksForm.invalid) {
      return;
    }
    this.loaderMsg = 'Saving task...';
    this.isLoading = true;
    const payload = this.tasksForm.getRawValue();
    this.http.createUpdateTasks(this.userId, payload).subscribe((result: any) => {
      this.isLoading = false;
      this.dialogRef.close({isCancelled: false});
    }, (error) => {
      this.isLoading = false;
    });
  }

  onCloseClick() {
    this.dialogRef.close({isCancelled: true});
  }
}

