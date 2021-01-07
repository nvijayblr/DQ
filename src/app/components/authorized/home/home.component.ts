import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  availableColumns: any = [{
    id: 1,
    title: 'Column 1'
  }, {
    id: 2,
    title: 'Column 2'
  }, {
    id: 3,
    title: 'Column 3'
  }, {
    id: 4,
    title: 'Column 4'
  }, {
    id: 5,
    title: 'Column 5'
  }, {
    id: 6,
    title: 'Column 6'
  }, {
    id: 7,
    title: 'Column 7'
  }];

  selectedColumns: any = [];
  columnsForm: FormGroup;

  ruleTypes = [{
    value: 'Type',
    label: 'Type'
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
      sourceCSV: ['Community'],
      referenceCSV: this.fb.array([]),
      rules: this.fb.array([]),
      rules1: this.fb.array([]),
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

    const rules = this.analysisForm.controls.rules as FormArray;
    const ruleList = [{
      id: 1,
      type: '',
      value: '',
    }]
    ruleList.map(rule => {
      rules.push(this.intiFormArrays('rules', rule));
    });

    const rules1 = this.analysisForm.controls.rules1 as FormArray;
    ruleList.map(rule => {
      rules1.push(this.intiFormArrays('rules', rule));
    });

  }

  intiFormArrays(field, value: any = {}) {
    if (field === 'referenceCSV') {
      return this.fb.group({
        id: [value.id],
        csv: [value.csv],
      });
    }
    if (field === 'rules') {
      return this.fb.group({
        id: [value.id],
        rule: [value.rule],
        value: [value.value],
        type: [value.type],
      });
    }
  }

  get f(): any { return this.analysisForm.controls; }

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

  shareWithCommunity() {
    if (this.analysisForm.invalid) {
      return;
    }
    const post = this.analysisForm.value;
    this.isShareLoading = true;
    this.loaderMsg = 'Creating Post...';
    const payload = {
      "userSharedSet": [
        {
            "image_type": "Community",
            "name": post.name,
            "path": post.path,
            "description": post.description
        }
      ]
    }
    this.http.createPost(this.userId, payload).subscribe((result: any) => {
      this.isShareLoading = false;
      this.analysisForm.controls.name.setValue('');
      this.analysisForm.controls.path.setValue('');
      this.analysisForm.controls.description.setValue('');
      this.getMyPosts();
    }, (error) => {
      this.isShareLoading = false;
    });
  }

  getAllPosts() {
    this.isLoading = true;
    this.loaderMsg = 'Loading community details...';
    this.http.sharedByOthers(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.posts = result && result.communityResponse ? result.communityResponse : [];
    }, (error) => {
      this.isLoading = false;
    });
  }

  getMyPosts() {
    this.isLoading = true;
    this.loaderMsg = 'Loading my community details...';
    this.http.sharedByMe(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.posts = result && result.communityResponse ? result.communityResponse : [];
    }, (error) => {
      this.isLoading = false;
    });
  }

  likeUnlikePost(post, isLiked) {
    this.http.likeUnlikePost(this.userId, post.id, isLiked).subscribe((result: any) => {
      if (isLiked) {
        post.likesCount = post.likesCount + 1;
        post.isLiked = true;
      } else {
        post.likesCount = post.likesCount - 1;
        post.isLiked = false;
      }
    }, (error) => {
      this.isLoading = false;
    });
  }

  removePost(post, index) {
    this.isLoading = true;
    this.loaderMsg = 'Removing post from community...';
    this.http.removePost(this.userId, post.id).subscribe((result: any) => {
      this.isLoading = false;
      this.posts.splice(index, 1);
    }, (error) => {
      this.isLoading = false;
    });
  }

  showVerifyEmailPhoneDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Notification',
        message: `Please verify you email or phone number to create deals.`,
        cancelLable: '',
        okLable: 'Close'
      }
    });

    dialogRef.afterClosed().subscribe(action => {
    });
  }

  tabChange(tab) {
    if (tab.index === 0) {
      this.getAllPosts();
    }
    if (tab.index === 1) {
      this.getMyPosts();
    }
  }



}
