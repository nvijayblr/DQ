import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-create-edit-multi-source',
  templateUrl: './create-edit-multi-source.component.html',
  styleUrls: ['./create-edit-multi-source.component.scss']
})
export class CreateEditMultiSourceComponent implements OnInit {
  sourceForm: FormGroup;
  colorCtr: FormGroup;
  formVal: any = [];
  source: any = {};
  mode = '';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEditMultiSourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.source = this.data.source;
    this.mode = this.data.mode;
    this.sourceForm = this.fb.group({
      value: [this.source.value, [Validators.required]],
      label: [this.source.label, [Validators.required]],
      status: [this.source.status, [Validators.required]],
    });
  }

  saveSource() {
    this.sourceForm.markAllAsTouched();
    if (!this.sourceForm.valid) {
      return;
    }
    this.dialogRef.close({source: this.sourceForm.value, mode: this.mode});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
