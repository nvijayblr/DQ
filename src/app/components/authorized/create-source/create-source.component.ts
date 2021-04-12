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

  sourceSettings = {
    isMuliSourceData: 'true',
    multiSourceOptions: [],
    frequency: '',
    uploadDate: '',
    uploadTime: '',
    department: []
  };

  user: any = {};
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};
  isLoading = false;
  loaderMsg = '';
  analysis: any = {};

  stepIndex = 0;
  analysisForm: FormGroup;
  sourceFile: any = {};
  refFiles: any = [];
  mode = 'create';
  sourceId = '';
  sourceNames = [];
  summary: any = {};

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
         this.mode = params.mode ? params.mode : 'create';
         if (!params.sourceId) {
          localStorage.removeItem('dq-source-data');
        }
      });
    }

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;

    const sourceNames = localStorage.getItem('dq-source-names');
    this.sourceNames = sourceNames ? JSON.parse(sourceNames) : [];

    let analysis = this.messageService.getSource();
    if (!analysis.source) {
      analysis = {
        source:  {}
      };
    }
    if (analysis.settings) {
      this.sourceSettings = analysis.settings;
      console.log(this.sourceSettings);
    }

    this.analysisForm = this.fb.group({
      sourceDataName: [analysis.source.sourceDataName, [Validators.required, Validators.maxLength(100)]],
      sourceDataDescription: [analysis.source.sourceDataDescription || ''],
      sourceFileName: [analysis.source.sourceFileName || ''],
      templateSourcePath: [analysis.source.templateSourcePath || ''],
      settingsDate : [''],
      referenceData: this.fb.array([]),
    });

    const referenceData = this.analysisForm.controls.referenceData as FormArray;
    let referenceDataList = [];
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
        referenceDataName: [reference.referenceDataName || ''],
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
    let isRefFileErr = false;
    const analysis = this.analysisForm.value;
    const formData: any = new FormData();
    if (this.mode === 'create' && !this.sourceFile.name) {
      this.stepIndex = 0;
      alert('Please upload the source file.');
      return;
    }

    // if (this.mode === 'create' && !this.refFiles.length) {
    //   alert('Please upload the reference file.');
    //   return;
    // }

    if (this.sourceFile.name) {
      formData.append('file[]', this.sourceFile);
    }

    analysis.referenceData.map((refernce, index) => {
      if (this.mode === 'create' && !this.refFiles[index]) {
        isRefFileErr = true;
        alert(`Please upload the reference file #${index + 1}.`);
        return;
      }
      if (this.refFiles[index]) {
        formData.append('reffile[]', this.refFiles[index]);
      }
    });

    if (isRefFileErr) {
      return;
    }
    let sourceRefNameEqual = false;
    const refPayload = analysis.referenceData.map((ref, index) => {
      if (this.mode === 'create') {
        delete ref.referenceId;
      }
      const sourceFileName = this.sourceFile.name ? this.sourceFile.name : analysis.sourceFileName;
      if (this.refFiles[index] && this.refFiles[index].name === sourceFileName) {
        sourceRefNameEqual = true;
      }
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
      settings: this.sourceSettings
    };

    if (sourceRefNameEqual) {
      alert('The source file and reference file should not be same.');
      return;
    }

    formData.append('data', JSON.stringify(payload));

    this.isLoading = true;
    this.loaderMsg = 'Saving Source and Reference data...';
    this.http.saveSource(formData, this.mode === 'edit' ? 'put' : 'post').subscribe((result: any) => {
      this.isLoading = false;
      if (result.errorMsg) {
        this.stepIndex = 0;
        alert(result.errorMsg);
        return;
      }
      this.summary = result;
      this.gotoStepper(2);
      // this.showSaveSuccess();
    }, (error) => {
      this.isLoading = false;
    });
  }

  showSaveSuccess() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: this.mode === 'edit' ? 'Source Updated' : 'Source Created',
        message: this.mode === 'edit' ? `Source has been updated successfully.` : `Source has been added successfully.` ,
        cancelLable: '',
        okLable: 'OK'
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok') {
        this.router.navigate(['auth/dashboard']);
      } else {
      }
    });
  }

  prevoewBackClick() {
    if (this. mode === 'create') {
      localStorage.setItem('dq-source-data', JSON.stringify(this.summary));
      this.router.navigate(
        [`auth/create-source-data`],
        {queryParams: {sourceId: this.summary.sourceId, mode: 'edit'}}
      );
    }
    this.gotoStepper(1);
  }

  onSourceFileSelected(file) {
    this.sourceFile = file;
    const fName = file.name.split('.')[0];
    this.afControls.sourceDataName.setValue(fName);
  }

  onReferenceFileSelected(file, reference, index) {
    this.refFiles[index] = file;
    const fName = file.name.split('.')[0];
    reference.controls.referenceDataName.setValue(fName);
  }

  gotoStepper(index, tab = '') {
    this.stepIndex = index;
  }

  validateSourceNameAndNext() {
    const sourceName = this.afControls.sourceDataName.value;
    if (this.sourceNames.includes(sourceName) && this.mode === 'create') {
      alert('Source name is already found. Please enter the different source name.');
      return;
    }
    this.gotoStepper(1, 'CSV');
  }

  stepperSelectionChange(event) {
    this.stepIndex = event.selectedIndex;
  }

  stepperAnimationDone() {
  }

}
