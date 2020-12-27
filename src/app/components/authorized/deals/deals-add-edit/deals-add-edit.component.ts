import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { HttpService } from '../../../../services/http-service.service';
import { InputValidation } from '../../../../services/InputValidation';
import { AuthGuardService } from '../../../../services/auth-guard.service';
import { MessageService } from '../../../../services/message.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-deals-add-edit',
  templateUrl: './deals-add-edit.component.html',
  styleUrls: ['./deals-add-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DealsAddEditComponent implements OnInit {

  userOptions: Observable<any[]>;
  dealsForm: FormGroup;
  deals: any = {};
  isConfirmPasswordError = false;
  loaderMsg = 'Loading deals...';
  user: any = {};
  usersList: any = [];
  isLoading = false;
  isUserLoggedIn = false;
  userId = '';
  isStatusOnly = false;
  minDate = new Date();

  dealTypes = [{
    value: 'Open',
    title: 'Open',
  }];

  statusTypes = [{
    value: 'New',
    title: 'New',
  }
  // , {
  //   value: 'Assigned',
  //   title: 'Assigned',
  // }, {
  //   value: 'Accepted',
  //   title: 'Accepted',
  // }, {
  //   value: 'Rejected',
  //   title: 'Rejected',
  // }, {
  //   value: 'Inprogress',
  //   title: 'Inprogress',
  // }, {
  //   value: 'Completed',
  //   title: 'Completed',
  // }, {
  //   value: 'Closed',
  //   title: 'Closed',
  // }
];

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private authGuardService: AuthGuardService,
    private messageService: MessageService,
    private router: Router,
    public inputValidation: InputValidation,
    public dialogRef: MatDialogRef<DealsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
    this.deals = data;
    this.isStatusOnly = data.isStatusOnly;
    if (this.isStatusOnly) {
      this.dialogRef.addPanelClass('status-only');
    }
    this.initDealsDetails(this.deals.deals);
  }

  ngOnInit() {
    this.userOptions = this.dealsForm.get('assignedto').valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap(value => {
        if (value !== '') {
          return this.initTypeahead(value);
        } else {
          return of(null);
        }
      })
    );
  }

  initTypeahead(value: string): Observable<any> {
    return this.http.getUsernameTypeahead(value.toLowerCase()).pipe(
      map(results => {
        return results;
      }),
      catchError(_ => {
        return of(null);
      })
    );
  }


  initDealsDetails(deals) {
    this.dealsForm = this.fb.group({
      id: [deals.id],
      name: [deals.name, [Validators.required]],
      description: [deals.description, [Validators.required]],
      location: [deals.location, [Validators.required]],
      amount: [deals.amount, [Validators.required]],
      due_date: [deals.due_date, [Validators.required]],
      assignedto: [deals.assignedto],
      status: [deals.status ? deals.status : 'New'],
      owner: [{ value: this.user.username, disabled: true }],
      // type: [deals.type ? deals.type : 'Open', [Validators.required]],
      path: [deals.path],
    });
  }

  onUploadCompleted(e, formControl) {
    formControl.controls.path.setValue(e.path);
  }

  saveDealsDetails() {
    this.dealsForm.markAllAsTouched();
    if (this.dealsForm.invalid) {
      return;
    }
    this.loaderMsg = 'Saving deals...';
    this.isLoading = true;
    const payload = this.dealsForm.getRawValue();
    if (payload.due_date) {
      payload.due_date = moment(payload.due_date).format('YYYY-MM-DD');
    }
    if (payload.id) {
      this.http.updateUserDeals(this.userId, payload).subscribe((result: any) => {
        this.isLoading = false;
        this.dialogRef.close({isCancelled: false});
      }, (error) => {
        this.isLoading = false;
      });
    } else {
      this.http.createUserDeals(this.userId, payload).subscribe((result: any) => {
        this.isLoading = false;
        this.dialogRef.close({isCancelled: false});
      }, (error) => {
        this.isLoading = false;
      });
    }
  }

  getUsernameTypeahead(username) {
    this.http.cancelGetUsernameTypeahead();
    this.http.getUsernameTypeahead(username).subscribe((result: any) => {
      this.usersList = result;
      console.log(this.usersList);
    }, (error) => {
    });
  }

  changeTypeaheadLoading(e) {
  }

  onCloseClick() {
    this.dialogRef.close({isCancelled: true, isStatusOnly: this.isStatusOnly});
  }

}
