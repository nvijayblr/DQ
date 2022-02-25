import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { forkJoin } from 'rxjs';
import { HttpService } from '../../../services/http-service.service';
import { MessageService } from '../../../services/message.service';
import { SourceTypes, SourceSettings } from '../data-driven.constants';
import { AlertService } from '../../../shared/alert-dialog/alert-dialog.service';
import { DataDrivenService } from '../data-driven.service';

@Component({
  selector: 'app-create-source',
  templateUrl: './create-source.component.html',
  styleUrls: ['./create-source.component.scss']
})
export class CreateSourceComponent implements OnInit {

  @ViewChild('csStepper', { static: false }) stepper: CdkStepper;

  sourceForm: FormGroup;
  referenceFormArray: FormArray;
  variables: any = [];
  filteredList: any = [];
  dataUserTollerance: any = [];
  dataOwnerTollerance: any = [];
  sourceSettings: any;
  chooseOptions: string;
  selectedType: string;
  isEditMode: boolean = false;

  multiSourceList: any = [];
  multiSourceLists: any = [];
  frequencyList: any = [];
  departmentList: any = [];
  categoryList: any = [];
  usersList: any = [];
  srcCategory: any = [];
  sourceFile: any = {};
  sourceTypes = SourceTypes;
  summary: any = {};
  referenceFiles: any = [];
  isSourceMode: any = false;

  selFileName: any;
  isCorrectFileType: boolean = true;
  flError: any;

  selected: any;
  selected1: any;

  constructor(private http: HttpService,
    private fb: FormBuilder,
    private ds: DataDrivenService,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<CreateSourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  get CSControls(): any { return this.sourceForm.controls; }

  ngOnInit() {
    let analysis: any = {}, source = {}, dataUsers = [], sourceId;
    this.isEditMode = this.data.isEditMode;
    this.isSourceMode = this.data.isSourceMode;
    if (this.data.isEditMode) {
      analysis = this.data.analysis;
      sourceId = analysis.sourceId;
      source = analysis && analysis.source ? analysis.source : {};
      dataUsers = this.getDataUser(source);
      this.setFileType(source);
    }
    this.initSetting(analysis);
    this.initForm(source, dataUsers, sourceId);
    this.getDataOwner();
    this.initAppData();
    if (!this.isSourceMode) {
      this.initReferenceForm(analysis);
    }
  }

  initForm(source, dataUsers, sourceId?) {
    this.sourceForm = this.fb.group({
      sourceId: [sourceId],
      sourceDataName: [source.sourceDataName || '', [Validators.required, Validators.maxLength(100), this.uniqueSourceName.bind(this, source.sourceDataName)]],
      sourceDataDescription: [source.sourceDataDescription || ''],
      sourceFileName: [source.sourceFileName || ''],
      sourceCategory: [source.sourceCategory, [Validators.required]],
      dataOwner: [source.dataOwner || ''],
      dataSteward: [source.dataSteward || ''],
      dataUser: [dataUsers || ''],
      settingsDate: [this.sourceSettings.uploadDate, [Validators.required]],
      uploadTime: [''],
      multiSourcColumn: [''],
      referenceData: this.fb.array([]),
    });
  }

  initReferenceForm(analysis) {
    const referenceData = this.sourceForm.controls.referenceData as FormArray;
    let referenceDataList = [];

    if (analysis.reference) {
      referenceDataList = analysis.reference;
    }

    referenceDataList.map(reference => {
      referenceData.push(this.intiFormArrays(reference));
    });
  }

  intiFormArrays(reference: any = {}) {
    return this.fb.group({
      referenceId: [reference.referenceId || undefined],
      referenceDataName: [reference.referenceDataName || ''],
      referenceDataDescription: reference.referenceDataDescription || '',
      referenceFileName: reference.referenceFileName || '',
      referencePath: reference.referencePath || ''
    });
  }

  addFormItem(arrayName) {
    const fbArray = this.sourceForm.get(arrayName) as FormArray;
    fbArray.push(this.intiFormArrays(arrayName));
  }

  removeFormItem(arrayName, index) {
    const fbArray = this.sourceForm.get(arrayName) as FormArray;
    fbArray.removeAt(index);
  }

  initAppData() {
    const apiCalls = [];
    apiCalls.push(this.http.getDepartmentsList());
    apiCalls.push(this.http.getMultisourceList());
    apiCalls.push(this.http.getFrequencyList());
    apiCalls.push(this.http.getCategoryList());
    apiCalls.push(this.http.getUsersList());
    apiCalls.push(this.http.getsourceCategory());
    forkJoin(apiCalls).subscribe((result: any) => {
      const departments = result[0].department ? result[0].department : [];
      const deptList = [];
      departments.map(dept => {
        deptList.push({
          label: dept.Display,
          value: dept.Name
        });
      });
      this.departmentList = deptList;
      this.multiSourceList = result[1].multiSourceList ? result[1].multiSourceList : [];
      this.frequencyList = result[2].frequencyList ? result[2].frequencyList : [];
      this.categoryList = result[3].categoryList ? result[3].categoryList : [];
      this.usersList = result[4].userList ? result[4].userList : [];
      this.srcCategory = result[5].sourceCategory ? result[5].sourceCategory : [];
    }, (error) => {

    });
  }

  getDataOwner() {
    this.http.getdataOwner().subscribe((result: any) => {
      let srcDataOwner = result.userList;
      srcDataOwner.map(data => {
        this.variables.push(data.name);
      });
      this.filteredList = this.variables.slice();
    });
  }

  getDataUser(source) {
    let dataUsers = [];
    if (source.dataUser && source.dataUser.length) {
      this.dataUserTollerance = source.dataUser;
      source.dataUser.map(user => {
        dataUsers.push(user.name);
      });
    }
    return dataUsers;
  }

  setFileType(source) {
    if (!source.type) {
      this.selectFileType(this.sourceTypes[0].children[0].type, this.sourceTypes[0].children[0].options);
    }
  }

  setDataUserTollerance(e) {
    this.dataUserTollerance = [];
    e.value.map(user => {
      this.dataUserTollerance.push({
        name: user,
        tolerance: {
          Accuracy: 0,
          Completeness: 0,
          Integrity: 0,
          Uniqueness: 0,
          Validity: 0
        }
      });
    });
  }

  setDataOwnerTollerance(e) {
    this.dataOwnerTollerance = [];
    e.value.map(user => {
      this.dataOwnerTollerance.push({
        name: user,
        tolerance: {
          Accuracy: 0,
          Completeness: 0,
          Integrity: 0,
          Uniqueness: 0,
          Validity: 0
        }
      });
    });
  }

  onSourceFileSelected(file) {
    const fName = file.name.split('.')[0];
    const fExt = file.name.split('.')[1];
    this.sourceFile = file;
    this.isCorrectFileType = (this.selectedType.indexOf(fExt) >= 0);
    this.CSControls.sourceDataName.setValue(fName);
    this.CSControls.sourceDataName.markAsTouched();
  }

  initSetting(analysis) {
    if (analysis.settings) {
      this.sourceSettings = analysis.settings;
    } else {
      this.sourceSettings = SourceSettings;
      let minDate = moment().format()
      this.sourceSettings.uploadDate = moment(minDate).format("YYYY-MM-DD[T]HH:mm:ss.000[Z]");
    }
  }

  selectFileType(type, options) {
    this.selectedType = type;
    this.chooseOptions = options;
    if (this.sourceForm) this.initForm({}, []);
    if (this.chooseOptions) {
      setTimeout(() => this.stepper && this.stepper.next());
    }
  }

  isCompleted(index) {
    switch (index) {
      case 0:
        return this.chooseOptions;
    }
  }

  validateSource() {
    const source = this.sourceForm.value;
    const referControl = this.sourceForm.get('referenceData') as FormArray;
    const formData: any = new FormData();
    let sourceRefNameEqual, isFileNotFound = false;

    this.sourceForm.markAllAsTouched();
    if (this.sourceForm.invalid) return;

    if (!this.isEditMode && !this.sourceFile.name) {
      this.alertService.showWarning('Please upload the source file.');
      return;
    }

    if (this.sourceFile.name) {
      formData.append('file[]', this.sourceFile);
    }

    if (!this.isSourceMode) {
      const sourceFileName = this.sourceFile.name ? this.sourceFile.name : source.sourceFileName;
      source.referenceData.map((refernce, index) => {
        if (!this.referenceFiles[index] && !refernce.referenceId) {
          isFileNotFound = true;
          referControl.at(index).get('referenceDataName').setErrors({
            'required': true
          });
        }
        if (this.referenceFiles[index]) {
          referControl.at(index).get('referenceDataName').setErrors(null);
          if (this.referenceFiles[index].name === sourceFileName) {
            sourceRefNameEqual = true;
          }
          formData.append('reffile[]', this.referenceFiles[index]);
        }
      });
      if (isFileNotFound) return;

      if (sourceRefNameEqual) {
        this.alertService.showWarning('The source file and reference file should not be same.');
        return;
      }
    }
    if (this.isSourceMode) {
      if (this.isEditMode) {
        this.editSource(formData, source);
      } else {
        this.saveSource(formData, source);
      }
    } else {
      this.saveSourceAndRef(formData, source);
    }
  }

  saveSourceAndRef(formData, source) {
    let refPayload = this.getReferencePayload(source);
    this.sourceSettings.multiSourceColumn = this.CSControls.multiSourcColumn.value;
    const payload = {
      sourceId: source.sourceId,
      source: {
        sourceDataName: source.sourceDataName,
        sourceDataDescription: source.sourceDataDescription,
        sourceFileName: this.sourceFile.name ? this.sourceFile.name : source.sourceFileName,
        sourceCategory: source.sourceCategory,
        dataOwner: this.CSControls.dataOwner.value ? this.CSControls.dataOwner.value : source.dataOwner,
        dataSteward: this.CSControls.dataSteward.value ? this.CSControls.dataSteward.value : source.dataSteward,
        dataUser: this.dataUserTollerance,
        type: '',
        connectionDetails: {}
      },
      ref_data_type: refPayload.datatype,
      reference: refPayload.payload,
      settings: this.sourceSettings
    };
    formData.append('data', JSON.stringify(payload));

    this.http.saveSource(formData, this.isEditMode ? 'put' : 'post').subscribe((result: any) => {
      if (result.errorMsg) {
        this.alertService.showError(result.errorMsg);
        return;
      }
      this.summary = result;
      this.ds.setRefreshMenu(result || {}, 1);
      setTimeout(() => this.stepper && this.stepper.next());
    }, (error) => {
      this.alertService.showError(error);
    });

  }

  saveSource(formData, source) {
    const payload = {
      sourceId: source.sourceId,
      db: this.data.uploadMethod,
      SourceSettings: {
        sourceDataName: source.sourceDataName,
        sourceDataDescription: source.sourceDataDescription,
        sourceFileName: this.sourceFile.name ? this.sourceFile.name : source.sourceFileName,
        sourceCategory: source.sourceCategory,
        dataOwner: this.CSControls.dataOwner.value ? this.CSControls.dataOwner.value : source.dataOwner,
        uploadDate: this.sourceSettings.uploadDate,
        department: this.sourceSettings.department
      }
    };
    formData.append('data', JSON.stringify(payload));

    this.http.saveSourceProfile(formData, this.isEditMode ? 'put' : 'post').subscribe((result: any) => {
      if (result.errorMsg) {
        this.alertService.showError(result.errorMsg);
        return;
      }

      this.ds.setRefreshMenu(result.SourceSettings || {}, this.data.uploadMethod === 'clean' ? 2 : 0);
      this.alertService.showAlert('Source Created Successfully');
      this.dialogRef.close();
    }, (error) => {
      this.alertService.showError(error);
    });
  }

  editSource(formData, source) {
    let oldSource = this.data.analysis && this.data.analysis.source ? this.data.analysis.source : {};
    const payload = {
      action: 'edit',
      db: this.data.uploadMethod,
      old_source: {
        sourceDataName: oldSource.sourceDataName,
        sourceFileName: oldSource.sourceFileName,
        sourceCategory: oldSource.sourceCategory,
        dataOwner: oldSource.dataOwner,
        sourceId: oldSource.sourceId,
      },
      new_source: {
        sourceDataName: source.sourceDataName,
        sourceDataDescription: source.sourceDataDescription,
        sourceFileName: this.sourceFile.name ? this.sourceFile.name : source.sourceFileName,
        sourceCategory: source.sourceCategory,
        dataOwner: source.dataOwner,
        uploadDate: this.sourceSettings.uploadDate,
        department: this.sourceSettings.department
      },
    };
    this.http.saveEditSourceProfile(payload).subscribe((result: any) => {
      if (result.errorMsg) {
        this.alertService.showError(result.errorMsg);
        return;
      }
      this.ds.setRefreshMenu(result.SourceSettings, this.data.uploadMethod === 'clean' ? 2 : 0);
      this.alertService.showAlert('Source Updated Successfully');
      this.dialogRef.close();
    }, (error) => {
      this.alertService.showError(error);
    });
  }

  onReferenceFileSelected(file, reference, index) {
    this.referenceFiles[index] = file;
    const fName = file.name.split('.')[0];
    reference.controls.referenceDataName.setValue(fName);
    // this.loadReferencePreview();
  }

  getReferencePayload(source) {
    let payload: any = {};

    payload.datatype = "User_LocalData"
    payload.payload = source.referenceData.map((reference, index) => {
      return {
        ...reference,
        referenceFileName: this.referenceFiles.length ? this.referenceFiles[index].name : reference.referenceFileName
      };
    });

    return payload;
  }

  private uniqueSourceName(sourceDataName, control: FormControl) {
    if (control.value && sourceDataName !== control.value) {
      this.http.checkSourceName({ 'sourceName': control.value }).subscribe((res: any) => {
        if (res.errorCode === '101') {
          control.setErrors({
            duplicate: true
          });
        } else {
          control.setErrors(null);
        }
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
