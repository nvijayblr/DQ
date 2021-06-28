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
        logic: [value.cde1 ? value.cde1 : ''],
        start: [value.cde1 ? value.cde1 : ''],
        cde1: [value.cde1 ? value.cde1 : ''],
        logicoperator: [value.operator1 ? value.operator1 : ''],
        cde2: [value.cde2 ? value.cde2 : ''],
        value: [value.value ? value.value : ''],
        end: [value.cde1 ? value.cde1 : ''],
        condition: [value.condition ? value.condition : ''],
        operator1: [value.operator1 ? value.operator1 : ''],
        operator2: [value.operator2 ? value.operator2 : ''],
        retcde1: [value.cde1 ? value.cde1 : ''],
        retoperator1: [value.operator1 ? value.operator1 : ''],
        retoperator2: [value.operator2 ? value.operator2 : ''],
        retcde2: [value.cde2 ? value.cde2 : ''],
        retvalue: [value.value ? value.value : ''],
      });
    }
  }

  addFormItem(arrayName) {
    const fbArray = this.formulaDetailsForm.get(arrayName) as FormArray;
    fbArray.push(this.intiFormArrays(arrayName));
  }

  removeFormItem(arrayName, index) {
    const formula = this.formulaDetailsForm.get(arrayName) as FormArray;
    formula.removeAt(index);
  }


  onCloseDialog(action) {
    this.ngZone.run(() => {
      this.dialog.close({action, ...this.formulaDetailsForm.value});
    });
  }

}
