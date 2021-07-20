import { Component, OnDestroy, OnInit, ViewEncapsulation, ViewChild, QueryList, ViewChildren } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { FormulaEditorComponent } from '../../../shared/formula-editor/formula-editor.component';
import { AdvancedFormulaEditorComponent } from '../../../shared/advanced-formula-editor/advanced-formula-editor.component';
import { ConditionalFormulaEditorComponent } from '../../../shared/conditional-formula-editor/conditional-formula-editor.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { S } from '@angular/cdk/keycodes';
import { _ } from 'ag-grid-community';
import * as moment from 'moment';

/**
 * @title Basic expansion panel
 */

@Component({
  selector: 'app-ruleset',
  templateUrl: './ruleset.component.html',
  styleUrls: ['./ruleset.component.scss']
})
export class RulesetComponent implements OnInit {

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
         this.sourceId = params.sourceId;
         this.mode = params.mode;
         this.rulesetId = params.rulesetId;
         if (!params.sourceId) {
          localStorage.removeItem('analysis');
        }
      });
    }

//   Analysis View
// - By Column Selection (Single Column, Multiple Column)
// - Chart View
// - Chart Drill View
// - Highliht settings

// - Ruleset - start and end
// - Reference CDE (REF1 - COL_NAME)



  get afControls(): any { return this.analysisForm.controls; }
  @ViewChild('owlCar', { static: false }) owlCar;
  @ViewChild(MatAccordion , { static: true }) accordion: MatAccordion;
  isLinear = true;
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
  fileTypeErr = false;
  uniqueName = false;

  OwlCategoryOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 0,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 5,
    navSpeed: 0,
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

  sourceList = [];
  selectedSource: any = {};
  rulesList = [];
  isRulesLoading = false;
  initRuleValue = false;
  selectedColumnsCopy: any = [];
  showCDECar = false;
  analyseData = [];
  sourceId = '';
  mode;
  rulesetId = '';
  cdeStatistics: any = {};
  correlationSummary: any = {};
  sourceNameText;

  // Rule Dropdowns
  ruleType = 'dataType';
  ruleOperator = '';
  ruleValue = '';
  ruleFormat = '';
  ruleDimenstion = '';

  ruleTypeList = [{
    label: 'Data Type',
    value: 'DataType',
  }, {
    label: 'Length',
    value: 'Length',
  }, {
    label: 'Value',
    value: 'Value',
  }, {
    label: 'Reference CDE',
    value: 'ReferenceCDE'
  }, {
    label: 'Formula',
    value: 'Formula'
  }];

  ruleOperatorList = {
    DataType: [{
      label: 'Should be',
      value: 'Shouldbe'
    }],
    ReferenceCDE: [{
      label: 'Should be',
      value: 'Shouldbe'
    }],
    Length: [{
        label: '=',
        value: 'euqualto'
      }, {
        label: '>=',
        value: 'greaterthanequalto'
      }, {
        label: '<=',
        value: 'lessthanequalto'
      }, {
        label: '>',
        value: 'greaterthan'
      }, {
        label: '<',
        value: 'lessthan'
      }],
    Formula: [{
        label: 'Should be',
        value: 'Shouldbe'
      }, {
        label: '=',
        value: 'euqualto'
      }, {
        label: '>=',
        value: 'greaterthanequalto'
      }, {
        label: '<=',
        value: 'lessthanequalto'
      }, {
        label: '>',
        value: 'greaterthan'
      }, {
        label: '<',
        value: 'lessthan'
      }],
    Value: [{
        label: '=',
        value: 'euqualto'
      }, {
        label: '>=',
        value: 'greaterthanequalto'
      }, {
        label: '<=',
        value: 'lessthanequalto'
      }, {
        label: '>',
        value: 'greaterthan'
      }, {
        label: '<',
        value: 'lessthan'
      }, {
        label: 'Should be',
        value: 'Shouldbe'
      }, {
        label: 'Should not include',
        value: 'shouldnotinclude'
      }, {
        label: 'Same as',
        value: 'sameas'
      }, {
        label: 'Should be in',
        value: 'shouldbein'
      }, {
        label: 'Reference data',
        value: 'referencedata'
      }, {
        label: 'Element',
        value: 'element'
      }]
  };

  ruleValueList = {
    DataType: [{
        label: 'Alpha',
        value: 'alpha'
      }, {
        label: 'Alphanumeric',
        value: 'Alphanumeric'
      }, {
        label: 'Integer',
        value: 'Integer'
      }, {
        label: 'Numeric',
        value: 'Numeric'
      }, {
        label: 'Date',
        value: 'Date'
      }, {
        label: 'DateTime',
        value: 'DateTime'
      }],
    Value: [{
        label: 'Special Characters',
        value: 'SpecialCharacters'
      }, {
        label: 'Amount',
        value: 'Amount'
      }],
    ReferenceCDE: []
  };

  ruleFormatList = {
    date: [{
        label: 'YYYYMMDD',
        value: 'YYYYMMDD'
      }, {
        label: 'DD-MMM-YYYY',
        value: 'DDMMMYYYY'
      }, {
        label: 'DD-MMM-YY',
        value: 'DD-MMM-YY'
      }],
    datetime: [{
        label: 'YYYYMMDD HH:MM',
        value: 'YYYYMMDD'
      }, {
        label: 'DD-MMM-YYYY HH:MM',
        value: 'DDMMMYYYY'
      }, {
        label: 'DD-MMM-YY HH:MM',
        value: 'DD-MMM-YY'
      }],
    amount: [{
        label: '2 Decimals',
        value: '2 Decimals'
      }, {
        label: '3 Decimals',
        value: '3 Decimals'
      }]
  };

  ruleDimenstionList = [{
    label: 'Accuracy',
    value: 'Accuracy'
  }, {
    label: 'Consistency',
    value: 'Consistency'
  }, {
    label: 'Integrity',
    value: 'Integrity'
  }, {
    label: 'Uniqueness',
    value: 'Uniqueness'
  }, {
    label: 'Validity',
    value: 'Validity'
  }];

  isPreviewLoaded = false;
  isPreviewLoading = false;
  defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
  rowData: any = [];
  columnDefs: any = [];

  minDate = moment().format('YYYY-MM-DD');
  maxDate = moment(moment().add(6, 'months')).format('YYYY-MM-DD');
  uploadedDate: any;
  rulesetNames: any = [];

  visibleIndex = -1;

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;

    this.getAllSources();
    if (localStorage.getItem('isInitLoad') && !this.user.emailVerified && !this.user.phonenoVerified) {
      // this.showVerifyEmailPhoneDialog();
    }
    localStorage.removeItem('isInitLoad');

    this.columnsForm = this.fb.group({
      columns: ['', [Validators.required]],
      sourceColumns: [''],
      refernceColumns: [[]]
    });

    const analysis = this.messageService.getAnalysis();
    // const targetDate = moment(moment().add(60, 'days')).format('YYYY-MM-DD');
    this.analysisForm = this.fb.group({

      sourceId: [{value: analysis.sourceId || '', disabled: true}],
      name: [{value: analysis.source.sourceDataName || '', disabled: true}, [Validators.required, Validators.maxLength(100)]],
      sourceFilename: [analysis.source.sourceFileName || ''],
      description: [{value: analysis.source.sourceDataDescription, disabled: true} || ''],
      sourcepath: [analysis.source.templateSourcePath || ''],
      rulesetName: [analysis.rulesetName || '', [Validators.required, Validators.maxLength(100)]],
      sourceCSV: [''],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      referenceCSV: this.fb.array([]),
      columnRules: this.fb.array([]),
    });

    this.sourceNameText = analysis.source.sourceDataName;
     // console.log(this.sourceNameText);

    if (analysis) {
      this.selectedSource = analysis;
      if (this.mode === 'edit') {
        this.rulesList = analysis.rules.ruleset;
      }
      this.selectedColumns = analysis.selectedColumns;
      this.availableColumns = analysis.columns.filter((column) => {
        const colFound = analysis.selectedColumns.filter((col) => {
          return column.title === col.title;
        });
        return !colFound.length;
      });
      this.analysisForm.controls.startDate.setValue(analysis.rules.startDate);
      this.analysisForm.controls.endDate.setValue(analysis.rules.endDate);
      this.columnsForm.controls.columns.setValue(this.selectedColumns);
      this.initRulesFormArray();
    }
    const referenceCSV = this.analysisForm.controls.referenceCSV as FormArray;
    const referenceData = analysis.reference ? analysis.reference : [];

    if (this.mode === 'edit') {
      const refSelectedColumns = analysis.rules.refSelectedColumns.map((column, index) => {
        this.ruleValueList.ReferenceCDE.push({
          label: column,
          value: column
        });
        return {
          id: (index + 1),
          title: column
        };
      });
      this.selectedReferenceColumns = refSelectedColumns;
    }
    referenceData.map(refData => {
      referenceCSV.push(this.intiFormArrays('referenceData', refData));
    });
    if (this.mode === 'edit') {
      this.columnsForm.controls.refernceColumns.setValue(this.selectedReferenceColumns);
     }

    this.minDate = moment().format('YYYY-MM-DDT[18:30:00.000Z]');
    this.maxDate = moment(moment().add(6, 'months')).format('YYYY-MM-DDT[18:30:00.000Z]');
    this.uploadedDate = analysis.settings.uploadDate;
    this.rulesetNames = analysis.rulesetNames ? analysis.rulesetNames : [];
    if (this.mode === 'add') {
      const ruleId = this.rulesetNames.length ? '-' + analysis.rulesetNames.length : '';
      this.analysisForm.controls.rulesetName.setValue(this.sourceNameText + '-ruleset' + ruleId);
      this.analysisForm.controls.startDate.setValue(this.minDate);
      this.analysisForm.controls.endDate.setValue(this.maxDate);
     }

    this.loadSourcePreview();
  }

   intiFormArrays(field, value: any = {}) {
    if (field === 'referenceData') {
      if (!value.availableRefColumns) {
        value.availableRefColumns = [];
      }
      const refAvailableColumns = value.availableRefColumns.map((column, index) => {
        return {
          id: (index + 1),
          title: column
        };
      });
      this.availableReferenceColumns = refAvailableColumns ? refAvailableColumns : [];
      console.log(this.availableReferenceColumns);
      return this.fb.group({
        id: [value.id],
        referenceDataName: [{value: value.referenceDataName, disabled: true}],
        referenceDataDescription: [{value: value.referenceDataDescription, disabled: true}],
        referenceColumns: [refAvailableColumns],
        referencePath: [{value: value.referenceFileName, disabled: true}]
      });
    }
    if (field === 'columnRules') {
      const rulesGroup = value.rules.map((rule => {
        return this.fb.group({
          rule: [rule.rule],
          operator: [rule.operator],
          value: [rule.value],
          format: [rule.format],
          dimension: [rule.dimension],
        });
      }));
      return this.fb.group({
        column: [value.column],
        rules: this.fb.array(rulesGroup)
      });
    }
  }

  initRulesFormArray() {
    // TODO: Start Needs to update the logic here.
    const selectedSourceColumns = this.columnsForm.value.sourceColumns;
    if (selectedSourceColumns.length) {

    }
    // TODO: End Needs to update the logic here.
    const selectedRuleColumns = this.afControls.columnRules as FormArray;
    this.rulesList.map(rule => {
      if (!rule.isAdded) {
        selectedRuleColumns.push(this.intiFormArrays('columnRules', rule));
      }
      rule.isAdded = true;
    });
  }

  addRules(columns, arrayName) {
    const fbRules = columns.get(arrayName) as FormArray;
    fbRules.push(
      this.fb.group({
        rule: [''],
        operator: [''],
        value: [''],
        format: [''],
        dimension: [''],
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

  getAllSources() {
    this.isLoading = true;
    this.loaderMsg = 'Loading Sources...';
    this.http.getSources().subscribe((result: any) => {
      this.sourceList = (result && result.Analysis) ? result.Analysis : [];
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  onSourceChange(e) {
    this.selectedSource = this.sourceList.filter(item => item.sourceId === e.value)[0];
    this.availableColumns = this.selectedSource.source.availableColumns.map((column, index) => {
      return {
          id: (index + 1),
          title: column
      };
    });

    this.afControls.sourcepath.setValue(this.selectedSource.source.templateSourcePath);
    this.afControls.sourceFilename.setValue(this.selectedSource.source.sourceFileName);
    this.afControls.name.setValue(this.selectedSource.source.sourceDataName);
    this.afControls.rulesetName.setValue(this.selectedSource.source.sourceDataName);
  }

  onUploadCompleted(e, formControl) {
    formControl.controls.path.setValue(e.path);
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
      refSelectedColumns: this.columnsForm.controls.refernceColumns.value.map(col => col.title),
      sourcepath: this.afControls.sourcepath.value,
    };

    if (!payload.selectedColumns.length && !payload.refSelectedColumns.length) {
      this.isLoading = false;
      if (this.rulesList.length) {
        const firstRule = this.rulesList[0];
        this.selectedRuleColumn = firstRule.column;
        this.cdeStatistics = (firstRule.statistics && firstRule.statistics.length) ? firstRule.statistics[0] : {};
        this.correlationSummary = firstRule.correlationSummary ? firstRule.correlationSummary : {};
        this.initFormulaEditor(this.rulesList);
      }
      return;
    }

    if (payload.refSelectedColumns && payload.refSelectedColumns.length) {
      this.ruleValueList.ReferenceCDE = [];
      payload.refSelectedColumns.map(column => {
        this.ruleValueList.ReferenceCDE.push({
          label: column,
          value: column
        });
      });
    }

    this.afControls.columnRules = this.fb.array([]);

    // Rules Sync loading Logic
    this.isRulesLoading = true;
    this.initRuleValue = true;
    this.selectedColumnsCopy = [...payload.selectedColumns];

    if (this.selectedColumnsCopy.length) {
      payload.selectedColumns = this.selectedColumnsCopy.slice(0, 1);
    }
    this.getColumnnRuleBySync(this.selectedColumnsCopy, payload);

    // Clear the columns array
  }

  getColumnnRuleBySync = (selectedColumns, payload) => {
    this.getColumnnRuleRequest(payload, () => {
      selectedColumns.splice(0, 1);
      console.log(selectedColumns.length);
      if (selectedColumns.length) {
        payload.selectedColumns = selectedColumns.slice(0, 1);
        this.getColumnnRuleBySync(selectedColumns, payload);
      } else {
        this.isRulesLoading = false;
      }
    });
  }

  getColumnnRuleRequest = (payload, callBack) => {
    this.http.getColumnsRules(payload).subscribe((result: any) => {
      this.isLoading = false;
      this.rulesList = this.rulesList.concat(result);
      if (this.rulesList.length && this.initRuleValue) {
        const firstRule = this.rulesList[0];
        this.selectedRuleColumn = firstRule.column;
        this.cdeStatistics = (firstRule.statistics && firstRule.statistics.length) ? firstRule.statistics[0] : {};
        this.correlationSummary = firstRule.correlationSummary ? firstRule.correlationSummary : {};
        this.initRuleValue = false;
      }
      this.initRulesFormArray();
      callBack();
    }, (error) => {
      this.isLoading = false;
      callBack();
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
    const startDate = this.afControls.startDate.value;
    const endDate = this.afControls.endDate.value;
    if (!startDate || !endDate) {
      alert('Please choose the ruleset start and end date.');
      return;
    }
    if (!this.analysis.sourceName || !this.analysis.rulesetName) {
      return;
    }
    if (this.rulesetNames.includes(this.analysis.rulesetName) && this.mode !== 'edit') {
      alert('The ruleset name already found.');
      return;
    }
    if (moment(startDate).diff(moment(endDate), 'days') >= 0) {
      alert('Ruleset end date should be less than start date.');
      return;
    }
    this.gotoStepper(3);
  }

  createEditRuleset() {
    this.isLoading = true;
    this.loaderMsg = 'Saving Ruleset...';
    // Update the rules list with the statistics
    const ruleLists = this.rulesList.map((rule, index) => {
      return {
        ...rule,
        ...this.afControls.columnRules.value[index]
      };
    });
    const ruleset = {
      sourceId: this.selectedSource.sourceId,
      rulesetId: this.rulesetId ? this.rulesetId : undefined,
      sourcepath: this.afControls.sourcepath.value,
      selectedColumns: this.selectedColumns.map(col => col.title),
      refSelectedColumns: this.columnsForm.controls.refernceColumns.value.map(col => col.title),
      rulesetName: this.afControls.rulesetName.value,
      ruleset: ruleLists,
      startDate: this.afControls.startDate.value,
      endDate: this.afControls.endDate.value,
    };
    this.http.createEditRuleset(ruleset, this.rulesetId ? 'put' : 'post').subscribe((result: any) => {
      this.isLoading = false;
      this.router.navigate([`auth/data-quality-monitoring`]);
    }, (error) => {
      this.isLoading = false;
    });
  }

  showFormulaEditor(rule) {
    const selectedColumns = [];
    this.selectedColumns.map(column => {
      selectedColumns.push(column.title);
    });
    const dialogRef = this.dialog.open(FormulaEditorComponent, {
      width: '700px',
      data: {
        columns: selectedColumns
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok' && data.formula) {
        rule.controls.value.setValue(data.formula);
      }
    });
  }

  showAdvanedFormulaEditor(rule) {
    const selectedColumns = [];
    this.selectedColumns.map(column => {
      selectedColumns.push(column.title);
    });

    const dialogRef = this.dialog.open(AdvancedFormulaEditorComponent, {
      width: '1300px',
      data: {
        columns: selectedColumns
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok' && data.formula) {
        rule.controls.value.setValue(data.formula);
      }
    });

  }

  showConditionalFormulaEditor(rule) {
    const selectedColumns = [];
    this.selectedColumns.map(column => {
      selectedColumns.push(column.title);
    });
    const dialogRef = this.dialog.open(ConditionalFormulaEditorComponent, {
      width: '1400px',
      data: {
        columns: selectedColumns
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok' && data.formula) {
        rule.controls.value.setValue(data.formula);
      }
    });

  }


   gotoStepper(index, tab = '') {
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

  gotoRuleColumn(rule) {
    this.selectedRuleColumn = rule.column;
    this.cdeStatistics = (rule.statistics && rule.statistics.length) ? rule.statistics[0] : {};
    this.correlationSummary = rule.correlationSummary ? rule.correlationSummary : {};
  }

  owlInitialized() {
    if (this.selectedRuleColumn) {
      this.owlCar.to(this.selectedRuleColumn);
    }
  }

  initFormulaEditor(ruleList) {
     console.log(ruleList);
  }

  loadSourcePreview() {
    this.isPreviewLoaded = false;
    this.isPreviewLoading = true;
    this.columnDefs = [];
    this.rowData = [];
    this.http.getSourcePreview(this.selectedSource.sourceId).subscribe((res: any) => {
      const details: any = res.sourcePreview ? res.sourcePreview : {};
      Object.keys(details).map((key, index) => {
        this.rowData.push({
          ...details[key]
        });
      });
      if (this.rowData.length) {
        Object.keys(this.rowData[0]).map((key, index) => {
          this.columnDefs.push({
            field: key,
            ...this.defaultColDefs
          });
        });
      }
      this.isPreviewLoaded = true;
      this.isPreviewLoading = false;
    }, (error) => {
      this.isPreviewLoaded = false;
      this.isPreviewLoading = false;
    });
   }
   showEditDetails(ind) {
      if (this.visibleIndex === ind) {
         this.visibleIndex = -1;
       } else {
         this.visibleIndex = ind;
       }
   }

}

