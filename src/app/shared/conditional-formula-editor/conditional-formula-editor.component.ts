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
  logical = ['If', 'ElseIf', 'Else'];
  logicoperators = [' ', '==', '!=',  '>', '>=', '<', '<='];
  operators = [' ', '+', '-', '*', '/', '==', '!=',  '>', '>=', '<', '<='];
  conditions = [' ', 'AND', 'OR'];
  startgroups = [' ', '(', '((', '((('];
  endgroups = [' ', ')', '))', ')))'];
  formulaObj: any = {
    formula: [{start: '', cde1: '', operator1: '', cde2: '', end: '', condition: '', operator2: ''}]
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
    this.data.columns.unshift(' ');
    this.initFormulaDetails(this.formulaObj);
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
      return this.fb.group({
        logic: [value.logic ? value.logic : ''],
        conditions: this.fb.array([
          this.initCondition()
        ]),
        retcde1: [value.cde1 ? value.cde1 : ''],
        retoperator: [value.operator1 ? value.operator1 : ''],
        retcde2: [value.cde2 ? value.cde2 : ''],
        retvalue: [value.value ? value.value : ''],
      });
    }
  }

  initCondition(value: any = {}) {
    return this.fb.group({
      start: [value.cde1 ? value.cde1 : ''],
      cde1: [value.cde1 ? value.cde1 : ''],
      operator1: [value.operator1 ? value.operator1 : ''],
      cde2: [value.cde2 ? value.cde2 : ''],
      value: [value.value ? value.value : ''],
      end: [value.cde1 ? value.cde1 : ''],
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


  onCloseDialog(action) {
    this.ngZone.run(() => {
      console.log(this.formulaDetailsForm.value);
      this.dialog.close({action, ...this.formulaDetailsForm.value});
    });
  }

}
