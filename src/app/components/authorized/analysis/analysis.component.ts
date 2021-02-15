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
import { S } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
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
  analysis: any = {};

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
  availableReferenceColumns: any = [];
  selectedReferenceColumns: any = [];
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
    value: 'ReferenceCDE',
    label: 'Reference CDE'
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
  analysisId = '';
  rulesetId = '';

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
      this.route.queryParams.subscribe(params => {
        this.analysisId = params.analysisId;
        this.rulesetId = params.rulesetId;
        if (!params.analysisId) {
          localStorage.removeItem('analysis');
        }
      });

    }

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;

    if (localStorage.getItem('isInitLoad') && !this.user.emailVerified && !this.user.phonenoVerified) {
      // this.showVerifyEmailPhoneDialog();
    }
    localStorage.removeItem('isInitLoad');

    this.columnsForm = this.fb.group({
      columns: ['', [Validators.required]],
      sourceColumns: [''],
      refernceColumns: [[]]
    });

    // this.getAllPosts();
    const analysis = this.messageService.getAnalysis();
    this.analysisForm = this.fb.group({
      name: [analysis.sourceName || '', [Validators.required, Validators.maxLength(100)]],
      sourceFilename: [analysis.sourceFilename || ''],
      description: [analysis.description || ''],
      sourcepath: [analysis.sourcepath || ''],
      rulesetName: [analysis.rulesetName || '', [Validators.required, Validators.maxLength(100)]],
      sourceCSV: [''],
      startDate: [''],
      endDate: [''],
      referenceCSV: this.fb.array([]),
      columnRules: this.fb.array([]),
    });

    if (analysis) {
      this.rulesList = analysis.rules;
      this.selectedColumns = analysis.selectedColumns;
      this.availableColumns = analysis.columns.filter((column) => {
        const colFound = analysis.selectedColumns.filter((col) => {
          return column.title === col.title;
        });
        return !colFound.length;
      });
      this.columnsForm.controls.columns.setValue(this.selectedColumns);
      this.initRulesFormArray();
    }

    const referenceCSV = this.analysisForm.controls.referenceCSV as FormArray;
    const refCSVList = [{
      id: 1,
      csv: ''
    }];
    refCSVList.map(refCSV => {
      referenceCSV.push(this.intiFormArrays('referenceCSV', refCSV));
    });
  }

  intiFormArrays(field, value: any = {}) {
    if (field === 'referenceCSV') {
      return this.fb.group({
        id: [value.id],
        referenceColumns: [[]],
        referencePath: ''
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

//   Analysis View
// - By Column Selection (Single Column, Multiple Column)
// - Chart View
// - Chart Drill View
// - Highliht settings

// - Ruleset - start and end
// - Reference CDE (REF1 - COL_NAME)



  get afControls(): any { return this.analysisForm.controls; }

  initRulesFormArray() {
    // TODO: Start Needs to update the logic here.
    const selectedSourceColumns = this.columnsForm.value.sourceColumns;
    if (selectedSourceColumns.length) {

    }
    // TODO: End Needs to update the logic here.
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

  onSourceCSVUpload(file) {
    const formData: any = new FormData();
    formData.append('file[]', file);
    formData.append('data', JSON.stringify({
        sourceFilename: file.name
      })
    );
    const filename = file.name.split('.')[0];
    this.afControls.sourceFilename.setValue(file.name);
    this.afControls.name.setValue(filename);
    this.afControls.rulesetName.setValue(filename);
    this.isLoading = true;
    this.isSourceUploaded = false;
    this.loaderMsg = 'Uploading the source csv...';
    this.http.uploadSourceCSV(formData).subscribe((result: any) => {
      this.isLoading = false;
      this.afControls.sourcepath.setValue(result.sourcepath);
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

  onReferenceCSVUpload(file, reference) {
    const formData: any = new FormData();
    formData.append('file[]', file);
    this.isLoading = true;
    this.isSourceUploaded = false;
    this.loaderMsg = 'Uploading the reference csv...';

    this.http.uploadReferenceCSV(formData).subscribe((result: any) => {
      console.log(result);
      if (result && result.length) {
        const refData = result && result.length ? result[0] : {};
        reference.controls.referenceColumns.setValue(refData.referenceColumns);
        reference.controls.referencePath.setValue(refData.referencePath);
        const refColumns = reference.value.referenceColumns.map((column, index) => {
          return {
              id: (index + 1),
              title: column
          };
        });
        this.availableReferenceColumns = refColumns;
      }
      this.isLoading = false;
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
    this.selectedColumns = [...selectedColumns];
    // Remove the column from ruleset if the column are removed form the list
    const updatedRulesList = [];
    selectedColumns.map(col => {
      this.rulesList.map(rule => {
        if (col.title === rule.column) {
          updatedRulesList.push(rule);
        }
      });
    });
    this.rulesList = [...updatedRulesList];

    selectedColumns.map(col => {
      // Add only newly selected columns
      const ruleColumn = this.rulesList.filter(rule => col.title === rule.column);
      if (!ruleColumn.length) {
        columns.push(col.title);
      }
    });

    const payload = {
      selectedColumns: columns,
      sourcepath: this.afControls.sourcepath.value
    };
    // Clear the columns array
    this.afControls.columnRules = this.fb.array([]);
    this.http.getColumnsRules(payload).subscribe((result: any) => {
      this.isLoading = false;
      this.rulesList = this.rulesList.concat(result);
      if (this.rulesList.length) {
        this.selectedRuleColumn = this.rulesList[0].column;
      }
      this.initRulesFormArray();
    }, (error) => {
      this.isLoading = false;
    });
  }

  generatePreview() {
    this.analysis = {
      sourceName: this.afControls.name.value,
      description: this.afControls.description.value,
      rulesetName: this.afControls.rulesetName.value,
      columns: this.availableColumns,
      selectedColumns: this.selectedColumns,
      rules: this.afControls.columnRules.value,
    };
    if (!this.analysis.sourceName || !this.analysis.rulesetName) {
      return;
    }
    this.gotoStepper(3);
  }

  saveAnalysis() {
    this.isLoading = true;
    this.loaderMsg = 'Saving Source...';
    console.log(this.afControls.referenceCSV);
    const analysis = {
      analysisId: this.analysisId ? this.analysisId : undefined,
      sourceFilename: this.afControls.sourceFilename.value,
      sourceName: this.afControls.name.value,
      description: this.afControls.description.value,
      sourcepath: this.afControls.sourcepath.value,
      columns: this.availableColumns.map(col => col.title),
      reference: this.afControls.referenceCSV.value
    };
    this.http.saveAnalysis(analysis, this.analysisId ? 'put' : 'post').subscribe((result: any) => {
      this.createEditRuleset(result.analysisId);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  createEditRuleset(analysisId) {
    this.isLoading = true;
    this.loaderMsg = 'Saving Ruleset...';
    const ruleset = {
      rulesetId: this.rulesetId ? this.rulesetId : undefined,
      sourcepath: this.afControls.sourcepath.value,
      selectedColumns: this.selectedColumns.map(col => col.title),
      rulesetName: this.afControls.rulesetName.value,
      ruleset: this.afControls.columnRules.value,
      startDate: this.afControls.startDate.value,
      endDate: this.afControls.endDate.value,
      reference: this.afControls.referenceCSV.value,
      analysisId
    };
    this.http.createEditRuleset(ruleset, this.rulesetId ? 'put' : 'post').subscribe((result: any) => {
      this.isLoading = false;
      this.router.navigate([`auth/dashboard`]);
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
