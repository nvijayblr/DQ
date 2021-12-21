import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { forkJoin } from 'rxjs';
import { HttpService } from '../../../services/http-service.service';
import { MessageService } from '../../../services/message.service';
import { SourceTypes } from '../data-driven.constants';

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
  sourceSettings: any;
  chooseOptions: string;
  isEditMode: boolean = false;

  multiSourceList: any = [];
  frequencyList: any = [];
  departmentList: any = [];
  categoryList: any = [];
  usersList: any = [];
  srcCategory: any = [];

  sourceTypes = SourceTypes;

  constructor(private http: HttpService,
    private fb: FormBuilder,
    private messageService: MessageService,
    public dialogRef: MatDialogRef<CreateSourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  get CSControls(): any { return this.sourceForm.controls; }

  ngOnInit() {
    let analysis: any = {}, source = {}, dataUsers = [];
    this.isEditMode = this.data.isEditMode;
    if (this.data.isEditMode) {
      analysis = this.data.analysis;
      source = analysis && analysis.source ? analysis.source : {};
      dataUsers = this.getDataUser(source);
      this.setFileType(source);
    }

    this.initForm(source, dataUsers);
    this.initReferenceForm(analysis);
    this.initSetting(analysis);
    this.getDataOwner();
    this.initAppData();
  }

  initForm(source, dataUsers) {
    this.sourceForm = this.fb.group({
      sourceDataName: [source.sourceDataName || '', [Validators.required, Validators.maxLength(100), this.uniqueSourceName.bind(this, source.sourceDataName)]],
      sourceDataDescription: [source.sourceDataDescription || ''],
      sourceFileName: [source.sourceFileName || ''],
      sourceCategory: [source.sourceCategory, [Validators.required]],
      dataOwner: [source.dataOwner || ''],
      dataSteward: [source.dataSteward || ''],
      dataUser: [dataUsers || ''],
      settingsDate: ['', [Validators.required]],
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
      this.selectFileType(this.sourceTypes[0].children[0].options);
    }
  }

  initSetting(analysis) {
    let settings: any = {};
    if (analysis.settings) {
      this.sourceSettings = analysis.settings;
    } else {
      settings.isMuliSourceData = 'true';
      settings.multiSourceOptions = [];
      settings.frequency = 'DAILY';
      settings.uploadDate = moment().format("YYYY-MM-DD[T]HH:mm:ss.000[Z]");
      //uploadDate: this.minDate,
      settings.multiSourceColumn = '';
      settings.uploadTime = '';
      settings.department = [];
      this.sourceSettings = settings;
    }
  }

  selectFileType(options) {
    this.chooseOptions = options;
    if (this.chooseOptions) {
      setTimeout(() => this.stepper.next());
    }
  }

  isCompleted(index) {
    switch (index) {
      case 0:
        return this.chooseOptions;
    }
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
}
