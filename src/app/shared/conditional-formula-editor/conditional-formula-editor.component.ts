import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-conditional-formula-editor',
  templateUrl: './conditional-formula-editor.component.html',
  styleUrls: ['./conditional-formula-editor.component.scss']
})
export class ConditionalFormulaEditorComponent implements OnInit {

  formulaDetailsForm: FormGroup;
  conditionForm: FormGroup;
  logical = ['If', 'ElseIf', 'Else'];
  logicoperators = ['', '==', '!=', '>', '>=', '<', '<='];
  operators = ['', '+', '-', '*', '/', '==', '!=', '>', '>=', '<', '<='];
  conditions = ['', 'AND', 'OR'];
  startgroups = ['', '(', '((', '((('];
  endgroups = ['', ')', '))', ')))'];
  formulaObj: any = {
    formula: [{ start: '', cde1: '', operator1: '', cde2: '', end: '', conditions: [], operator2: '' }]
  };
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<ConditionalFormulaEditorComponent>,
    private ngZone: NgZone,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialog.disableClose = true;
  }

  ngOnInit() {
    this.data.columns.unshift('');
    if (this.data.formula && this.data.formula.length > 0 && this.data.type === 'CONDITIONAL') {
      this.initFormulaDetails(this.data);
    } else {
      this.initFormulaDetails(this.formulaObj);
    }
  }

  initFormulaDetails(fObject) {
    this.formulaDetailsForm = this.fb.group({
      formula: this.fb.array([]),
    });
    if (fObject.formula) {
      const formulaFA = this.formulaDetailsForm.controls.formula as FormArray;
      fObject.formula.map(formula => {
        formulaFA.push(this.intiFormArrays('formula', formula));
      });
    }
  }

  intiFormArrays(field, value: any = {}) {
    if (field === 'formula') {
      this.conditionForm = this.fb.group({
        logic: [value.logic ? value.logic : ''],
        conditions: this.fb.array([]),
        retcde1: [value.retcde1 ? value.retcde1 : ''],
        retoperator: [value.retoperator ? value.retoperator : ''],
        retcde2: [value.retcde2 ? value.retcde2 : ''],
        retvalue: [value.retvalue ? value.retvalue : ''],
      });
      const formulaFA = this.conditionForm.controls.conditions as FormArray;
      if (value.conditions && value.conditions.length > 0) {
        value.conditions.map(condition => {
          formulaFA.push(this.initCondition(condition))
        });
      } else {
        formulaFA.push(this.initCondition())
      }
      return this.conditionForm;
    }
  }

  initCondition(value: any = {}) {
    return this.fb.group({
      start: [value.start ? value.start : ''],
      cde1: [value.cde1 ? value.cde1 : ''],
      operator1: [value.operator1 ? value.operator1 : ''],
      cde2: [value.cde2 ? value.cde2 : ''],
      value: [value.value ? value.value : ''],
      end: [value.end ? value.end : ''],
      condition: [value.condition ? value.condition : ''],
      operator2: [value.operator2 ? value.operator2 : ''],
    });
  }

  addFormItem(arrayName) {
    const fbArray = this.formulaDetailsForm.get(arrayName) as FormArray;
    fbArray.push(this.intiFormArrays(arrayName));
  }

  removeFormItem(arrayName, index) {
    const formula = this.formulaDetailsForm.get(arrayName) as FormArray;
    formula.removeAt(index);
  }


  formulaForm(): FormArray {
    return this.formulaDetailsForm.get('formula') as FormArray;
  }

  formulaCondition(index: number): FormArray {
    return this.formulaForm().at(index).get('conditions') as FormArray;
  }

  addFormCondition(formulaIndex) {
    // const fbArray = this.formulaDetailsForm.get(arrayName) as FormArray;
    // fbArray.push(this.intiFormArrays(arrayName));
    this.formulaCondition(formulaIndex).push(this.initCondition());
  }

  removeFormCondition(formulaIndex, condIndex) {
    // const formula = this.formulaDetailsForm.get(arrayName) as FormArray;
    // formula.removeAt(index);
    this.formulaCondition(formulaIndex).removeAt(condIndex);
  }

  isConditional(formula) {
    return Array.isArray(formula[0].conditions);
  }

  onCloseDialog(action) {
    this.ngZone.run(() => {
      console.log(this.formulaDetailsForm.value);
      this.dialog.close({ action, ...this.formulaDetailsForm.value });
    });
  }

}
