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
  selector: 'app-create-source',
  templateUrl: './create-source.component.html',
  styleUrls: ['./create-source.component.scss']
})
export class CreateSourceComponent implements OnInit {

  multiSourceList = [{
    label: 'AA',
    value: 'AA',
  }, {
    label: 'NK',
    value: 'NK',
  }, {
    label: 'DL',
    value: 'DL',
  }];

  frequencyList = [{
    label: 'Yearly',
    value: 'Yearly',
  }, {
    label: 'Quarterly',
    value: 'Quarterly',
  }, {
    label: 'Monthly',
    value: 'Monthly',
  }, {
    label: 'Weekly',
    value: 'Weekly',
  }, {
    label: 'Daily',
    value: 'Daily',
  }, {
    label: 'Intraday',
    value: 'Intraday',
  }, {
    label: 'Realtime',
    value: 'Realtime',
  }];

  timeList = [{
    label: '00:00',
    value: '00:00',
  }, {
    label: '01:00',
    value: '01:00',
  }, {
    label: '02:00',
    value: '02:00',
  }];

  departmentList = [{
    label: 'Dept-1',
    value: 'Dept-1',
  }, {
    label: 'Dept-2',
    value: 'Dept-2',
  }, {
    label: 'Dept-3',
    value: 'Dept-3',
  }];

  user: any = {};
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};
  isLoading = false;
  loaderMsg = '';
  isSourceUploaded = false;
  analysis: any = {};
  fileTypeErr = false;

  stepIndex = 0;
  analysisForm: FormGroup;
  sourceFile: any = {};
  refFiles: any = [];
  mode = 'create';
  sourceId = '';

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
         if (!params.sourceId) {
          localStorage.removeItem('dq-source-data');
        }
      });
    }

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;

    const analysis = this.messageService.getSource();

    this.analysisForm = this.fb.group({
      sourceDataName: [analysis.source.sourceDataName || '', [Validators.required, Validators.maxLength(100)]],
      sourceDataDescription: [analysis.source.sourceDataDescription || ''],
      sourceFileName: [analysis.source.sourceFileName || ''],
      templateSourcePath: [analysis.source.templateSourcePath || ''],
      referenceData: this.fb.array([]),
    });

    const referenceData = this.analysisForm.controls.referenceData as FormArray;
    let referenceDataList = [{
      referenceId: undefined,
    }];
    if (analysis.reference) {
      referenceDataList = analysis.reference;
    }

    referenceDataList.map(refCSV => {
      referenceData.push(this.intiFormArrays('referenceData', refCSV));
    });

  }

  intiFormArrays(field, reference: any = {}) {
    if (field === 'referenceData') {
      return this.fb.group({
        referenceId: [reference.referenceId || undefined],
        referenceDataName: [reference.referenceDataName || '', Validators.required],
        referenceDataDescription: reference.referenceDataDescription || '',
        referenceFileName: reference.referenceFileName || '',
        referencePath: reference.referencePath || ''
      });
    }
  }

  get afControls(): any { return this.analysisForm.controls; }

  addFormItem(arrayName) {
    const fbArray = this.analysisForm.get(arrayName) as FormArray;
    fbArray.push(this.intiFormArrays(arrayName));
  }

  removeFormItem(arrayName, index) {
    const fbArray = this.analysisForm.get(arrayName) as FormArray;
    fbArray.removeAt(index);
  }

  saveSource() {
    const analysis = this.analysisForm.value;
    const formData: any = new FormData();
    if (this.sourceFile.name) {
      formData.append('file[]', this.sourceFile);
    }

    this.refFiles.map(refFile => {
      if (refFile.name) {
        formData.append('reffile[]', refFile);
      }
    });

    const refPayload = analysis.referenceData.map((ref, index) => {
      return {
        ...ref,
        referenceFileName: this.refFiles.length ? this.refFiles[index].name : ref.referenceFileName
      };
    });
    const payload = {
      sourceId: this.sourceId ? this.sourceId : undefined,
      source: {
        sourceDataName: analysis.sourceDataName,
        sourceDataDescription: analysis.sourceDataDescription,
        sourceFileName: this.sourceFile.name ? this.sourceFile.name : analysis.sourceFileName
      },
      reference: refPayload,
      settings: {
        isMuliSourceData: 'true',
        multiSourceOptions: [ 'AA', 'AS', 'DL', 'B6', 'EV', 'F9', 'HA', 'WN' ],
        frequency: 'Monthly',
        uploadDate: '2021-02-04',
        uploadTime: '16:42',
        department: [ 'A', 'B', 'C', 'D' ]
      }
    };
    formData.append('data', JSON.stringify(payload));

    this.isLoading = true;
    this.isSourceUploaded = false;
    this.loaderMsg = 'Saving Source and Reference data...';
    this.http.saveSource(formData, this.mode === 'edit' ? 'put' : 'post').subscribe((result: any) => {
      this.isLoading = false;
      this.isSourceUploaded = true;
      this.router.navigate(['auth/dashboard']);
    }, (error) => {
      this.isLoading = false;
      this.isSourceUploaded = false;
    });
  }

  onSourceFileSelected(file) {
    this.sourceFile = file;
  }

  onReferenceFileSelected(file, reference, index) {
    this.refFiles[index] = file;
  }

  gotoStepper(index, tab = '') {
    this.stepIndex = index;
  }

  stepperSelectionChange(event) {
    this.stepIndex = event.selectedIndex;
  }

  stepperAnimationDone() {
  }

}
