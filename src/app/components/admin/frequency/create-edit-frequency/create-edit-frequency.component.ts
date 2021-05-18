import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-create-edit-frequency',
  templateUrl: './create-edit-frequency.component.html',
  styleUrls: ['./create-edit-frequency.component.scss']
})
export class CreateEditFrequencyComponent implements OnInit {
  freqForm: FormGroup;
  colorCtr: FormGroup;
  formVal: any = [];
  frequency: any = {};
  mode = '';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEditFrequencyComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.frequency = this.data.frequency;
    this.mode = this.data.mode;
    this.freqForm = this.fb.group({
      value: [this.frequency.value, [Validators.required]],
      label: [this.frequency.label, [Validators.required]],
      status: [this.frequency.status, [Validators.required]],
    });
  }

  saveFreq() {
    this.freqForm.markAllAsTouched();
    if (!this.freqForm.valid) {
      return;
    }
    this.dialogRef.close({frequency: this.freqForm.value, mode: this.mode});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


