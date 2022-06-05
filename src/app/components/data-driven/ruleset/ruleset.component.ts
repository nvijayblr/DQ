import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from 'src/app/services/http-service.service';
import { FormulaEditorComponent } from '../../../shared/formula-editor/formula-editor.component';
import { AdvancedFormulaEditorComponent } from '../../../shared/advanced-formula-editor/advanced-formula-editor.component';
import { ConditionalFormulaEditorComponent } from '../../../shared/conditional-formula-editor/conditional-formula-editor.component';
import { CommonService } from '../../../services/common.service';
import * as RuleListConstant from './ruleset.constants';
import * as moment from 'moment';
import { AlertService } from 'src/app/shared/alert-dialog/alert-dialog.service';
import { DataDrivenService } from '../data-driven.service';

@Component({
  selector: 'app-dd-ruleset',
  templateUrl: './ruleset.component.html',
  styleUrls: ['./ruleset.component.scss']
})
export class DDRulesetComponent implements OnInit {
  rulesetForm: FormGroup;
  columnsForm: FormGroup;

  isEditMode: boolean = false;
  isLoading: boolean = false;
  loaderMsg: any;
  analysis: any;
  ruleset: any;
  isRulesLoading = false;
  initRuleValue = false;
  availableColumns: any = [];
  selectedColumns: any = [];
  availableReferenceColumns: any = [];
  selectedReferenceColumns: any = [];
  rulesList: any = [];
  selectedColumnsCopy: any = [];
  isMColumnEnable: boolean = false;

  ruleTypeList = RuleListConstant.RuleTypeList;
  ruleOperatorList = RuleListConstant.RuleOperatorList;
  ruleValueList = RuleListConstant.RuleValueList;
  ruleFormatList = RuleListConstant.RuleFormatList;
  ruleDimenstionList = RuleListConstant.RuleDimenstionList;

  minDate = moment().format('YYYY-MM-DD');
  maxDate = moment(moment().add(6, 'months')).format('YYYY-MM-DD');
  uploadedDate: any;
  rulesetNames: any = [];
  selectedRuleColumn: any;
  cdeStatistics: any;
  correlationSummary: any;
  previewRules: any = {};

  get RSControls(): any { return this.rulesetForm.controls; }

  constructor(private http: HttpService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DDRulesetComponent>,
    public commonService: CommonService,
    public alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.isEditMode = this.data.isEditMode;
    this.analysis = this.data.analysis || {};
    this.ruleset = this.data.ruleset;
    this.initForm();
  }

  initForm() {
    this.initRulsetValues();
    this.rulesetForm = this.fb.group({
      sourceId: [this.analysis.sourceId || ''],
      name: [{ value: this.analysis.source.sourceDataName || '', disabled: true }],
      description: [{ value: this.analysis.source.sourceDataDescription || 'Source Description', disabled: true }],
      sourceFilename: [{ value: this.analysis.source.sourceFileName || '', disabled: true }],
      sourcepath: [this.analysis.source.templateSourcePath || ''],
      // sourceCSV: [''],
      rulesetName: [this.ruleset.rulesetName || '', [Validators.required, Validators.maxLength(200), this.uniqueRulesetName.bind(this, this.ruleset.rulesetName)]],
      startDate: [this.ruleset.startDate || this.minDate, [Validators.required]],
      endDate: [this.ruleset.endDate || this.maxDate, [Validators.required]],
      referenceCSV: this.fb.array([]),
      columnRules: this.fb.array([]),
    });

    const referenceCSV = this.rulesetForm.controls.referenceCSV as FormArray;
    const referenceData = this.analysis.reference ? this.analysis.reference : [];
    referenceData.map(refData => {
      referenceCSV.push(this.intiRefrenceArray(refData));
    });

    this.initColumnForm();
  }

  initColumnForm() {
    let selectedColumns = [], refSelectedColumns = [], ruleConfigColumns = [];

    this.columnsForm = this.fb.group({
      columns: ['', [Validators.required]],
      sourceColumns: [''],
      refernceColumns: [[]],
      ruleConfigfor2Cols: [''],
      ruleConfigfor3Cols: [''],
      ruleConfigforMultiCols: this.fb.array([])
    });

    this.selectedColumns = [];
    this.selectedReferenceColumns = [];
    this.availableColumns = [];

    if (this.isEditMode) {
      this.rulesList = this.ruleset.ruleset || [];
      selectedColumns = this.ruleset.selectedColumns || [];
      refSelectedColumns = this.ruleset.refSelectedColumns || [];
      ruleConfigColumns = this.ruleset.ruleConfigforMultiCols || [];

      this.selectedColumns = selectedColumns.map((column, index) => {
        return {
          id: (index + 1),
          title: column
        };
      });
      this.selectedReferenceColumns = refSelectedColumns.map((column, index) => {
        this.ruleValueList.ReferenceCDE.push({
          label: column,
          value: column
        });
        return {
          id: (index + 1),
          title: column
        };
      });

      this.columnsForm.controls.ruleConfigfor2Cols.setValue(this.ruleset.ruleConfigfor2Cols);
      this.columnsForm.controls.ruleConfigfor3Cols.setValue(this.ruleset.ruleConfigfor3Cols);
      const configArray = this.columnsForm.controls.ruleConfigforMultiCols as FormArray;
      ruleConfigColumns.map(column => {
        configArray.controls.push(new FormControl(column));
      });

    } else {
      const ruleId = this.rulesetNames.length ? '-' + this.rulesetNames.length : '';
      this.RSControls.rulesetName.setValue(this.analysis.source.sourceDataName + '-ruleset' + ruleId);
    }

    this.analysis.source.availableColumns.map((column, index) => {
      if (selectedColumns.indexOf(column) === -1) {
        this.availableColumns.push({ id: (index + 1), title: column });
      }
    });

    this.columnsForm.controls.columns.setValue(this.selectedColumns);
    this.columnsForm.controls.refernceColumns.setValue(this.selectedReferenceColumns);

    this.initRulesFormArray();
  }

  initRulsetValues() {
    this.minDate = moment().format('YYYY-MM-DDT[18:30:00.000Z]');
    this.maxDate = moment(moment().add(6, 'months')).format('YYYY-MM-DDT[18:30:00.000Z]');
    this.uploadedDate = this.analysis.settings.uploadDate;
    this.rulesetNames = [];
    this.analysis.rules.map((rule) => {
      this.rulesetNames.push(rule.rulesetName);
    });
  }

  intiRefrenceArray(value: any = {}) {
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

    return this.fb.group({
      id: [value.id],
      referenceDataName: [{ value: value.referenceDataName, disabled: true }],
      referenceDataDescription: [{ value: value.referenceDataDescription || 'Reference Data Description', disabled: true }],
      referenceColumns: [refAvailableColumns],
      referencePath: [{ value: value.referenceFileName, disabled: true }]
    });
  }

  initRulesFormArray() {
    const selectedRuleColumns = this.RSControls.columnRules as FormArray;
    this.rulesList.map(rule => {
      if (!rule.isAdded) {
        selectedRuleColumns.push(this.intiColumnArray(rule));
      }
      rule.isAdded = true;
    });
  }

  intiColumnArray(value: any = {}) {
    const rulesGroup = value.rules.map((rule => {
      return this.fb.group({
        rule: [rule.rule],
        operator: [rule.operator],
        value: [rule.value],
        type: [rule.type],
        format: [rule.format],
        dimension: [rule.dimension],
      });
    }));
    return this.fb.group({
      column: [value.column],
      datatype: [value.DataType],
      rules: this.fb.array(rulesGroup)
    });
  }

  isColumnEnable(event: any, control: FormControl) {
    if (event.checked) {
      control.setValue("Sample");
      control.enable();
    } else {
      control.setValue("");
      control.disable();
    }
  }

  onColumnChecked(checked: any, value: any) {
    const configArray = this.columnsForm.controls.ruleConfigforMultiCols as FormArray;
    if (checked) {
      configArray.controls.push(new FormControl(value));
      setTimeout(() => {
        configArray.updateValueAndValidity()
      })
    } else {
      const i = configArray.controls.findIndex(title => title.value === value);
      configArray.removeAt(i);
    }
  }

  enableValidation(checked: any) {
    this.isMColumnEnable = checked;
    const configArray = this.columnsForm.controls.ruleConfigforMultiCols as FormArray;
    if (checked) {
      configArray.setValidators([minLengthArray(3)]);
    } else {
      configArray.clearValidators();
    }
    this.columnsForm.controls.ruleConfigforMultiCols.updateValueAndValidity();
  }

  getColumnRules() {
    this.isLoading = true;
    this.loaderMsg = 'Fetching column rules...';
    this.selectedColumns = this.columnsForm.value.columns;

    let updatedRulesList = [];
    let nameList = this.selectedColumns.map(col => { return col.title });
    this.rulesList.map(rule => {
      if (nameList.indexOf(rule.column) >= 0) {
        rule.isAdded = false;
        updatedRulesList.push(rule);
      }
    });
    this.rulesList = [...updatedRulesList];

    nameList = updatedRulesList.map(rule => { return rule.column });
    let columns = [];
    this.selectedColumns.map(col => {
      // Add only newly selected columns
      if (nameList.indexOf(col.title) === -1) {
        columns.push(col.title);
      }
    });
    this.getRuleForColumn(columns);
  }

  getRuleForColumn(columns: any) {
    const payload = {
      selectedColumns: columns,
      refSelectedColumns: this.columnsForm.controls.refernceColumns.value.map(col => col.title),
      sourcepath: this.RSControls.sourcepath.value,
      ruleConfigfor2Cols: this.columnsForm.controls.ruleConfigfor2Cols.value,
      ruleConfigfor3Cols: this.columnsForm.controls.ruleConfigfor3Cols.value,
      ruleConfigforMultiCols: this.isMColumnEnable ? this.columnsForm.controls.ruleConfigforMultiCols.value : []
    };
    //update referenceCDE value
    if (payload.refSelectedColumns && payload.refSelectedColumns.length) {
      this.ruleValueList.ReferenceCDE = [];
      payload.refSelectedColumns.map(column => {
        this.ruleValueList.ReferenceCDE.push({
          label: column,
          value: column
        });
      });
    }
    // Clear the columns array
    this.RSControls.columnRules = this.fb.array([]);
    if (!payload.selectedColumns.length) {
      this.isLoading = false;
      if (this.rulesList.length) {
        const firstRule = this.rulesList[0];
        this.selectedRuleColumn = firstRule.column;
        this.cdeStatistics = (firstRule.statistics && firstRule.statistics.length) ? firstRule.statistics[0] : {};
        this.correlationSummary = firstRule.correlationSummary ? firstRule.correlationSummary : {};
        //this.initFormulaEditor(this.rulesList);
        this.initRulesFormArray();
      }
    } else {
      // Rules Sync loading Logic
      this.isRulesLoading = true;
      this.initRuleValue = true;
      this.selectedColumnsCopy = [...payload.selectedColumns];

      if (this.selectedColumnsCopy.length) {
        payload.selectedColumns = this.selectedColumnsCopy.slice(0, 7);
      }
      this.getColumnnRuleBySync(this.selectedColumnsCopy, payload);
    }
  }

  getColumnnRuleBySync = (selectedColumns, payload) => {
    this.getColumnnRuleRequest(payload, () => {
      selectedColumns.splice(0, 7);
      if (selectedColumns.length) {
        payload.selectedColumns = selectedColumns.slice(0, 7);
        this.getColumnnRuleBySync(selectedColumns, payload);
      } else {
        this.isRulesLoading = false;
      }
    });
  }

  getColumnnRuleRequest = (payload, callBack) => {
    this.http.getColumnsRules(payload).subscribe((result: any) => {
      this.rulesList = this.rulesList.concat(result);
      if (this.rulesList.length && this.initRuleValue) {
        const firstRule = this.rulesList[0];
        this.selectedRuleColumn = firstRule.column;
        this.cdeStatistics = (firstRule.statistics && firstRule.statistics.length) ? firstRule.statistics[0] : {};
        this.correlationSummary = firstRule.correlationSummary ? firstRule.correlationSummary : {};
        this.initRuleValue = false;
      }
      this.initRulesFormArray();
      this.isLoading = false;
      callBack();
    }, (error) => {
      this.isLoading = false;
      callBack();
    });
  }

  gotoRuleColumn(rule: any) {
    this.selectedRuleColumn = rule.column;
    this.cdeStatistics = (rule.statistics && rule.statistics.length) ? rule.statistics[0] : {};
    this.correlationSummary = rule.correlationSummary ? rule.correlationSummary : {};
  }

  getOperatorList(ruleVal: any, datatype: any) {
    let list = this.ruleOperatorList[ruleVal];
    if (ruleVal === 'Value' && datatype === 'Numeric') {
      list = list.concat(RuleListConstant.Operators.CompareOperator);
    }
    return list;
  }

  getType(ruleVal: any, datatype: any) {
    if (ruleVal === 'Value' && datatype != 'Numeric') {
      return 'text';
    }
    return 'number';
  }

  getMinVal(ruleVal: any) {
    if (['Length', 'MinLength', 'MaxLength'].indexOf(ruleVal) >= 0) {
      return 0;
    }
    return false;
  }

  addRules(columns: any, arrayName: any) {
    const fbRules = columns.get(arrayName) as FormArray;
    fbRules.push(
      this.fb.group({
        rule: [''],
        operator: [''],
        type: [''],
        value: [''],
        format: [''],
        dimension: [''],
      })
    );
  }

  removeRules(columns: any, arrayName: any, index: any) {
    const fbRules = columns.get(arrayName) as FormArray;
    fbRules.removeAt(index);
  }

  createEditRuleset() {
    this.isLoading = true;
    this.loaderMsg = 'Saving Ruleset...';
    const ruleLists = this.rulesList.map((rule, index) => {
      return {
        ...rule,
        ...this.RSControls.columnRules.value[index]
      };
    });
    const ruleset = {
      sourceId: this.analysis.sourceId,
      rulesetId: this.ruleset.rulesetId,
      sourcepath: this.RSControls.sourcepath.value,
      selectedColumns: this.selectedColumns.map(col => col.title),
      refSelectedColumns: this.columnsForm.controls.refernceColumns.value.map(col => col.title),
      rulesetName: this.RSControls.rulesetName.value,
      ruleset: ruleLists,
      startDate: this.RSControls.startDate.value,
      endDate: this.RSControls.endDate.value,
    };
    this.http.createEditRuleset(ruleset, ruleset.rulesetId ? 'put' : 'post').subscribe((result: any) => {
      if (this.analysis.UploadsHistory.length) {
        this.alertService.showAlert('Ruleset ' + (ruleset.rulesetId ? 'Updated' : 'Created') + ' Successfully');
      }
      this.dialogRef.close({
        ruleset: result,
        isEditMode: this.isEditMode,
        isUploaded: this.analysis.UploadsHistory.length
      });
      this.isLoading = false;
    }, (error) => {
      this.alertService.showError(error);
      this.isLoading = false;
    });
  }

  openFormulaEditor(rule) {
    let type = rule.controls.type.value;
    switch (type) {
      default:
      case 'CONDITIONAL':
        this.showConditionalFormulaEditor(rule);
        break;
      case 'ADVANCED':
        this.showAdvanedFormulaEditor(rule);
        break;
      case 'SIMPLE':
        this.showFormulaEditor(rule);
        break;
    }
  }

  showFormulaEditor(rule) {
    const selectedColumns = [];
    this.selectedColumns.map(column => {
      selectedColumns.push(column.title);
    });
    const dialogRef = this.dialog.open(FormulaEditorComponent, {
      width: '700px',
      data: {
        columns: selectedColumns,
        formula: rule.controls.value.value,
        type: rule.controls.type.value
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok' && data.formula) {
        rule.controls.type.setValue('SIMPLE');
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
        columns: selectedColumns,
        formula: rule.controls.value.value,
        type: rule.controls.type.value
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok' && data.formula) {
        rule.controls.type.setValue('ADVANCED');
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
        columns: selectedColumns,
        formula: rule.controls.value.value,
        type: rule.controls.type.value
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok' && data.formula) {
        rule.controls.type.setValue('CONDITIONAL');
        rule.controls.value.setValue(data.formula);
      }
    });

  }

  generatePreview() {
    this.previewRules = {
      sourceName: this.RSControls.name.value,
      rulesetName: this.RSControls.rulesetName.value,
      selectedColumns: this.selectedColumns,
      rules: this.RSControls.columnRules.value
    };
  }

  dateValidator() {
    let startDate = new Date(this.RSControls.startDate.value);
    let endDate = new Date(this.RSControls.endDate.value);
    if (startDate > endDate) {
      this.RSControls.startDate.setErrors({ 'invaliddaterange': true });
      this.RSControls.endDate.setErrors({ 'invaliddaterange': true });
    } else {
      this.RSControls.startDate.setErrors(null);
      this.RSControls.endDate.setErrors(null);
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  private uniqueRulesetName(rulesetName, control: AbstractControl) {
    if (control.value && rulesetName !== control.value && this.rulesetNames.indexOf(control.value) >= 0) {
      return { duplicate: true };
    } else {
      return false;
    }
  }
}

export const minLengthArray = (min: number) => {
  return (c: AbstractControl): { [key: string]: any } => {
    if (c.value.length >= min)
      return null;

    return { MinLengthArray: true };
  }
}