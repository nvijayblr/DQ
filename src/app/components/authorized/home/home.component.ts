import { Component, OnDestroy, OnInit, ViewEncapsulation, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('owlCar', {static: false}) owlCar;

  user: any = {};
  professional: any = {};
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};
  isCurrentUser = false;
  isLoading = false;
  loaderMsg = '';
  posts: any = [];
  analysisForm: FormGroup;
  isShareLoading = false;

  OwlCategoryOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 5,
    navSpeed: 700,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    autoWidth: true,
    nav: false,
    items: 6,
    responsive: {
      0: {
        items: 3,
        center: true,
        loop: true,
      },
      740: {
        items: 5,
        center: false,
        loop: false,
      }
    },
  };


  stepIndex = 0;
  availableColumns: any = [];
  selectedColumns: any = [];
  columnsForm: FormGroup;

  selectedRuleColumn = '';
  ruleTypes = [{
    value: 'DataType',
    label: 'Data Type'
  }, {
    value: 'Length',
    label: 'Length'
  }, {
    value: 'MinLength',
    label: 'Min Length'
  }, {
    value: 'MaxLength',
    label: 'Max Length'
  }, {
    value: 'Custom',
    label: 'Custom'
  }];

  dataTypes = [{
    value: 'Numeric',
    label: 'Numeric'
  }, {
    value: 'Text',
    label: 'Text'
  }, {
    value: 'AlhpaNumberic',
    label: 'Alhpa Numberic'
  }];

  
  rulesList = [{
    column: 'YEAR',
    rules: [{rule: 'DataType', value: 'Numeric'}, {rule: 'Length', value: 4}]
  }, {
    column: 'MONTH',
    rules: [{rule: 'DataType', value: 'AlhpaNumberic'}, {rule: 'Length', value: 2}]
  }, {
    column: 'DAY',
    rules: [{rule: 'DataType', value: 'Text'}, {rule: 'Length', value: 3}]
  }]
  showCDECar = false;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authGuardService: AuthGuardService,
    private messageService: MessageService) {
      this.appConfig = appConfig;
    }

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
    if (localStorage.getItem('isInitLoad') && !this.user.emailVerified && !this.user.phonenoVerified) {
      // this.showVerifyEmailPhoneDialog();
    }
    localStorage.removeItem('isInitLoad');
    // this.getAllPosts();
    
    this.analysisForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      sourceCSV: ['sourceCSV'],
      referenceCSV: this.fb.array([]),
      selectedColumns: this.fb.array([]),
    });

    this.columnsForm = this.fb.group({
      columns: ['', [Validators.required]],
    });

    const referenceCSV = this.analysisForm.controls.referenceCSV as FormArray;
    const refCSVList = [{
      id: 1,
      csv: ''
    }]
    refCSVList.map(achivement => {
      referenceCSV.push(this.intiFormArrays('referenceCSV', achivement));
    });

    const selectedColumns = this.analysisForm.controls.selectedColumns as FormArray;

    this.rulesList.map(rule => {
      selectedColumns.push(this.intiFormArrays('selectedColumns', rule));
    });

  }

  intiFormArrays(field, value: any = {}) {
    if (field === 'referenceCSV') {
      return this.fb.group({
        id: [value.id],
        csv: [value.csv],
      });
    }
    if (field === 'selectedColumns') {
      const rulesGroup = value.rules.map((rule => {
        return this.fb.group({
          rule: [rule.rule],
          value: [rule.value],
        })
      }))
      console.log(rulesGroup)
      return this.fb.group({
        column: [value.column],
        rules: this.fb.array(rulesGroup)
      });
    }
  }

  get f(): any { return this.analysisForm.controls; }

  addRules(columns, arrayName) {
    const fbRules = columns.get(arrayName) as FormArray;
    fbRules.push(
      this.fb.group({
        rule: [''],
        value: [''],
      })
    );
  }

  removeRules(columns, arrayName, index) {
    const fbRules = columns.get(arrayName) as FormArray;
    fbRules.removeAt(index);
  }

  addFormItem(arrayName) {
    const fbArray = this.analysisForm.get(arrayName) as FormArray;
    fbArray.push(this.intiFormArrays(arrayName));
  }

  removeFormItem(arrayName, index) {
    const fbArray = this.analysisForm.get(arrayName) as FormArray;
    fbArray.removeAt(index);
  }


  onUploadCompleted(e, formControl) {
    formControl.controls.path.setValue(e.path);
  }

  onSourceCSVSelected(file) {
    const formData: any = new FormData();
    formData.append('file[]', file);
    this.isLoading = true;
    this.loaderMsg = 'Uploading the source cvs...';
    this.http.uploadSourceCSV(formData).subscribe((result: any) => {
      this.isLoading = false;
      const columns = ['YEAR','MONTH','DAY','DAY_OF_WEEK','AIRLINE','FLIGHT_NUMBER','TAIL_NUMBER'];
      this.availableColumns = result[0]['flights_new.csv'].map((column, index) => {
        return {
            id: (index+1),
            title: column
        }
      });
    }, (error) => {
      this.isLoading = false;
    });
  }

  getColumnRules() {
    this.isLoading = true;
    this.loaderMsg = 'Fetching column rules...';
    const columns = [];
    this.selectedColumns.map(column => {
      columns.push(column.title)
    })
    this.http.getColumnsRules(columns).subscribe((result: any) => {
      this.isLoading = false;
      console.log(result);
    }, (error) => {
      this.isLoading = false;
    });
  }

  gotoStepper(index) {
    this.stepIndex = index;
  }

  stepperSelectionChange(event) {
    this.stepIndex = event.selectedIndex;
    console.log('stepperSelectionChange', event)
  }

  stepperAnimationDone() {
    console.log(this.stepIndex)
    if (this.stepIndex === 2) {
      this.showCDECar = true;
    } else {
      this.showCDECar = false;
    }
    console.log('stepperAnimationDone')
  }

  gotoRuleColumn(column) {
    this.selectedRuleColumn = column;
  }

  owlInitialized() {
    // this.owlCar.to('YEAR');
  }


  // shareWithCommunity() {
  //   if (this.analysisForm.invalid) {
  //     return;
  //   }
  //   const post = this.analysisForm.value;
  //   this.isShareLoading = true;
  //   this.loaderMsg = 'Creating Post...';
  //   const payload = {
  //     "userSharedSet": [
  //       {
  //           "image_type": "Community",
  //           "name": post.name,
  //           "path": post.path,
  //           "description": post.description
  //       }
  //     ]
  //   }
  //   this.http.createPost(this.userId, payload).subscribe((result: any) => {
  //     this.isShareLoading = false;
  //     this.analysisForm.controls.name.setValue('');
  //     this.analysisForm.controls.path.setValue('');
  //     this.analysisForm.controls.description.setValue('');
  //     this.getMyPosts();
  //   }, (error) => {
  //     this.isShareLoading = false;
  //   });
  // }

  // getAllPosts() {
  //   this.isLoading = true;
  //   this.loaderMsg = 'Loading community details...';
  //   this.http.sharedByOthers(this.userId).subscribe((result: any) => {
  //     this.isLoading = false;
  //     this.posts = result && result.communityResponse ? result.communityResponse : [];
  //   }, (error) => {
  //     this.isLoading = false;
  //   });
  // }

  // getMyPosts() {
  //   this.isLoading = true;
  //   this.loaderMsg = 'Loading my community details...';
  //   this.http.sharedByMe(this.userId).subscribe((result: any) => {
  //     this.isLoading = false;
  //     this.posts = result && result.communityResponse ? result.communityResponse : [];
  //   }, (error) => {
  //     this.isLoading = false;
  //   });
  // }

  // likeUnlikePost(post, isLiked) {
  //   this.http.likeUnlikePost(this.userId, post.id, isLiked).subscribe((result: any) => {
  //     if (isLiked) {
  //       post.likesCount = post.likesCount + 1;
  //       post.isLiked = true;
  //     } else {
  //       post.likesCount = post.likesCount - 1;
  //       post.isLiked = false;
  //     }
  //   }, (error) => {
  //     this.isLoading = false;
  //   });
  // }

  // removePost(post, index) {
  //   this.isLoading = true;
  //   this.loaderMsg = 'Removing post from community...';
  //   this.http.removePost(this.userId, post.id).subscribe((result: any) => {
  //     this.isLoading = false;
  //     this.posts.splice(index, 1);
  //   }, (error) => {
  //     this.isLoading = false;
  //   });
  // }

  // showVerifyEmailPhoneDialog() {
  //   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  //     width: '400px',
  //     data: {
  //       title: 'Notification',
  //       message: `Please verify you email or phone number to create deals.`,
  //       cancelLable: '',
  //       okLable: 'Close'
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(action => {
  //   });
  // }

  // tabChange(tab) {
  //   if (tab.index === 0) {
  //     this.getAllPosts();
  //   }
  //   if (tab.index === 1) {
  //     this.getMyPosts();
  //   }
  // }



}
