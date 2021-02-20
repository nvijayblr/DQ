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
  isSourceUploaded = false;

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
  analysisForm: FormGroup;
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


  rulesList = [];
  showCDECar = false;
  analyseData = [];

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
      description: [''],
      rulesetName: ['', [Validators.required, Validators.maxLength(100)]],
      sourceCSV: [''],
      referenceCSV: this.fb.array([]),
      columnRules: this.fb.array([]),
    });

    this.columnsForm = this.fb.group({
      columns: ['', [Validators.required]],
    });

    const referenceCSV = this.analysisForm.controls.referenceCSV as FormArray;
    const refCSVList = [{
      id: 1,
      csv: ''
    }];
    refCSVList.map(achivement => {
      referenceCSV.push(this.intiFormArrays('referenceCSV', achivement));
    });
  }

  intiFormArrays(field, value: any = {}) {
    if (field === 'referenceCSV') {
      return this.fb.group({
        id: [value.id],
        csv: [value.csv],
      });
    }
    if (field === 'columnRules') {
      const rulesGroup = value.rules.map((rule => {
        return this.fb.group({
          rule: [rule.rule],
          value: [rule.value],
        });
      }));
      return this.fb.group({
        column: [value.column],
        rules: this.fb.array(rulesGroup)
      });
    }
  }

  get afControls(): any { return this.analysisForm.controls; }

  initRulesFormArray() {
    const selectedRuleColumns = this.afControls.columnRules as FormArray;
    this.rulesList.map(rule => {
      selectedRuleColumns.push(this.intiFormArrays('columnRules', rule));
    });
  }

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
    this.isSourceUploaded = false;
    this.loaderMsg = 'Uploading the source cvs...';
    this.afControls.sourceCSV.setValue(file.name);
    this.http.uploadSourceCSV(formData).subscribe((result: any) => {
      this.isLoading = false;
      console.log(result);
      const columns = (result && result.columns) ? result.columns : [];
      this.availableColumns = columns.map((column, index) => {
        return {
            id: (index + 1),
            title: column
        };
      });
      this.isSourceUploaded = true;
    }, (error) => {
      this.isLoading = false;
      this.isSourceUploaded = false;
    });
  }

  getColumnRules() {
    this.isLoading = true;
    this.loaderMsg = 'Fetching column rules...';
    const columns = [];
    const selectedColumns = this.columnsForm.value.columns;
    selectedColumns.map(column => {
      columns.push(column.title);
    });
    // Clear the columns array
    this.afControls.columnRules = this.fb.array([]);
    this.http.getColumnsRules(columns).subscribe((result: any) => {
      this.isLoading = false;
      this.rulesList = result;
      if (this.rulesList.length) {
        this.selectedRuleColumn = this.rulesList[0].column;
      }
      this.initRulesFormArray();
    }, (error) => {
      this.isLoading = false;
    });
  }

  launchAnalysis() {
    const analysis = {
      name: this.afControls.name.value,
      description: this.afControls.description.value,
      rulesetName: this.afControls.rulesetName.value,
      columns: this.availableColumns,
      selectedColumns: this.selectedColumns,
      rules: this.afControls.columnRules.value,
    };
    if (!analysis.name || !analysis.rulesetName) {
      return;
    }
    localStorage.setItem('analysis', JSON.stringify(analysis));
    this.isLoading = true;
    this.loaderMsg = 'Launching analysis...';
    this.gotoStepper(3);
    this.http.launchAnalysis(this.afControls.columnRules.value).subscribe((result: any) => {
      this.isLoading = false;
      this.analyseData = result ? result : [];
    }, (error) => {
      this.isLoading = false;
    });
  }

  gotoStepper(index, tab = '') {
    // if (tab === 'CSV') {
    //   console.log(this.afControls.sourceCSV);
    //   return;
    // }
    this.stepIndex = index;
  }

  stepperSelectionChange(event) {
    this.stepIndex = event.selectedIndex;
  }

  stepperAnimationDone() {
    if (this.stepIndex === 2) {
      this.showCDECar = true;
    } else {
      this.showCDECar = false;
    }
  }

  gotoRuleColumn(column) {
    this.selectedRuleColumn = column;
  }

  owlInitialized() {
  }

}
