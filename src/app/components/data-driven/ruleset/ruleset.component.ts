import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from 'src/app/services/http-service.service';
import { FormulaEditorComponent } from '../../../shared/formula-editor/formula-editor.component';
import { AdvancedFormulaEditorComponent } from '../../../shared/advanced-formula-editor/advanced-formula-editor.component';
import { ConditionalFormulaEditorComponent } from '../../../shared/conditional-formula-editor/conditional-formula-editor.component';
import { CommonService } from '../../../services/common.service';
import * as RuleListConstant from './ruleset.constants';
import * as moment from 'moment';

@Component({
  selector: 'app-ruleset',
  templateUrl: './ruleset.component.html',
  styleUrls: ['./ruleset.component.scss']
})
export class RulesetComponent implements OnInit {
  rulesetForm: FormGroup;
  columnsForm: FormGroup;

  isEditMode: false;
  analysis: any;
  availableColumns: any = [];
  selectedColumns: any = [];
  availableReferenceColumns: any = [];
  selectedReferenceColumns: any = [];
  rulesList: any = [];

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

  get RSControls(): any { return this.rulesetForm.controls; }

  constructor(private http: HttpService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    public commonService: CommonService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.isEditMode = this.data.isEditMode;
    this.analysis = this.data.analysis || {};
    this.initForm();
  }

  initForm() {
    this.rulesetForm = this.fb.group({
      sourceId: [this.analysis.sourceId || ''],
      name: [{ value: this.analysis.source.sourceDataName || '', disabled: true }],
      description: [{ value: this.analysis.source.sourceDataDescription || 'Source Description', disabled: true }],
      sourceFilename: [{ value: this.analysis.source.sourceFileName || '', disabled: true }],
      // sourcepath: [analysis.source.templateSourcePath || ''],
      rulesetName: ['', [Validators.required, Validators.maxLength(100)]],
      // sourceCSV: [''],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
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
    let ruleset, selectedCol = [];

    this.columnsForm = this.fb.group({
      columns: ['', [Validators.required]],
      sourceColumns: [''],
      refernceColumns: [[]]
    });
    if (this.isEditMode) {
      ruleset = this.analysis.rules[this.data.index] || {};
      selectedCol = ruleset.selectedColumns || [];
      this.rulesList = ruleset.ruleset || [];

      const refSelectedColumns = ruleset.refSelectedColumns.map((column, index) => {
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
    this.availableColumns = [];
    this.analysis.source.availableColumns.map((column, index) => {
      if (this.selectedColumns.indexOf(column) === -1) {
        this.availableColumns.push({ id: (index + 1), title: column });
      }
    });
    this.selectedColumns = [];
    selectedCol.map((column, index) => {
      this.selectedColumns.push({ id: (index + 1), title: column });
    });

    this.columnsForm.controls.columns.setValue(this.selectedColumns);
    this.columnsForm.controls.refernceColumns.setValue(this.selectedReferenceColumns);
    this.initRulsetValues(ruleset);
    this.initRulesFormArray();
  }

  initRulsetValues(ruleset) {

    this.minDate = moment().format('YYYY-MM-DDT[18:30:00.000Z]');
    this.maxDate = moment(moment().add(6, 'months')).format('YYYY-MM-DDT[18:30:00.000Z]');
    this.uploadedDate = this.analysis.settings.uploadDate;

    if (ruleset) {
      this.RSControls.rulesetName.setValue(ruleset.rulesetName);
      this.RSControls.startDate.setValue(ruleset.startDate);
      this.RSControls.endDate.setValue(ruleset.endDate);
    } else {
      this.rulesetNames = this.analysis.rules || [];
      const ruleId = this.rulesetNames.length ? '-' + this.rulesetNames.length : '';
      this.RSControls.rulesetName.setValue(this.analysis.source.sourceDataName + '-ruleset' + ruleId);
      this.RSControls.startDate.setValue(this.minDate);
      this.RSControls.endDate.setValue(this.maxDate);
    }
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
      // if (!rule.isAdded) {
      selectedRuleColumns.push(this.intiColumnArray(rule));
      // }
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

}
