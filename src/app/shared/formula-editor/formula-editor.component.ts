import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-formula-editor',
  templateUrl: './formula-editor.component.html',
  styleUrls: ['./formula-editor.component.scss']
})
export class FormulaEditorComponent implements OnInit {

  formulaDetailsForm: FormGroup;
  operators = ['+', '-', '*', '/'];
  formulaObj: any = {
    formula: [{cde: '', operator: 'NULL'}, {cde: '', operator: ''}]
  };
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<FormulaEditorComponent>,
    private ngZone: NgZone,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialog.disableClose = true;
  }

  ngOnInit() {
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
        cde: [value.cde ? value.cde : '', [Validators.required]],
        operator: [value.operator ? value.operator : '', [Validators.required]],
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
