import { Component, OnDestroy, OnInit, ViewEncapsulation, ViewChild, QueryList, ViewChildren, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { S } from '@angular/cdk/keycodes';
import * as _ from 'lodash';
import * as moment from 'moment';
import { ToleranceLevelDialogComponent } from '../../../shared/tolerance-level-dialog/tolerance-level-dialog.component';
import { DeactiveDialogComponent } from '../../../shared/deactive-dialog/deactive-dialog.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-source',
  templateUrl: './create-source.component.html',
  styleUrls: ['./create-source.component.scss']
})
export class CreateSourceComponent implements OnInit {
  @ViewChild('contentErr', { static: false }) modalErrContent: TemplateRef<any>;
  backType;
  showConnectionList: boolean = false;
  clientUrlLog: any = [];
  dbSaveLogs: any = [];
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authGuardService: AuthGuardService,
    private messageService: MessageService,
    private modalService: NgbModal,
    private location: Location) {
    this.appConfig = appConfig;
    this.route.queryParams.subscribe(params => {
      this.sourceId = params.sourceId;
      this.mode = params.mode ? params.mode : 'create';
      if (!params.sourceId) {
        localStorage.removeItem('dq-source-data');
      }
    });
    location.subscribe((back: PopStateEvent) => {
      this.backType = back.type;
    });
  }

  get afControls(): any { return this.analysisForm.controls; }
  minDate = moment().format();

  multiSourceList = this.messageService.getPrefrences('multisource');
  frequencyList = this.messageService.getPrefrences('frequency');
  departmentList = this.messageService.getPrefrences('departments');
  categoryList = this.messageService.getPrefrences('usercategory');
  usersList = this.messageService.getPrefrences('users');


  sourceSettings = {
    isMuliSourceData: 'true',
    multiSourceOptions: [],
    frequency: 'Daily',
    uploadDate: moment(this.minDate).format("YYYY-MM-DD[T]HH:mm:ss.000[Z]"),
    //uploadDate: this.minDate,
    multiSourceColumn: '',
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
  srcCategory = [];
  srcDataOwner: any = {};

  isPreviewLoaded = false;
  isPreviewLoading = false;
  defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
  rowData: any = [];
  columnDefs: any = [];

  isRefPreviewLoaded = false;
  isRefPreviewLoading = false;
  refrowData: any = [];
  refcolumnDefs: any = [];
  selectedType;
  chooseOptions: string;
  flError = true;
  sourceNameErr = false;
  showPreview = false;
  selFileName;
  selFileNameErr = false;
  public filteredList;
  filteredList2: any = [];
  public selected = [];
  public selected1 = [];
  public variables = [];
  dataUserTollerance: any = [];
  dataOwnerTollerance: any = [];
  refDataType = "";
  editRefSourceData;
  refDateMethod;


  public variablesGroups =
    [
      {
        value: '127', values:
          [{ id: 267, value: 'Formosa', parentId: 127 },
          { id: 268, value: 'Matacos', parentId: 127 },
          { id: 266, value: 'Patiño', parentId: 127 },
          { id: 265, value: 'Pilcomayo', parentId: 127 }, { id: 269, value: 'Pirané', parentId: 127 }]
      }];

  public groups = this.variablesGroups.slice();

  // //public variables = ['One', 'Two', 'County', 'Three', 'Zebra', 'XiOn'];
  // public filteredList1 = this.variables.slice();

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;

    const sourceNames = localStorage.getItem('dq-source-names');
    this.sourceNames = sourceNames ? JSON.parse(sourceNames) : [];

    let analysis = this.messageService.getSource();
    if (!analysis.source) {
      analysis = {
        source: {}
      };
    }
    if (analysis.settings) {
      this.sourceSettings = analysis.settings;
    }
    const dataUsers = [];
    if (analysis.source.dataUser && analysis.source.dataUser.length) {
      this.dataUserTollerance = analysis.source.dataUser;
      analysis.source.dataUser.map(user => {
        dataUsers.push(user.name);
      });
    }

    this.analysisForm = this.fb.group({
      sourceDataName: [analysis.source.sourceDataName, [Validators.required, Validators.maxLength(100), this.uniqueSourceName.bind(this, analysis.source.sourceDataName)]],
      sourceDataDescription: [analysis.source.sourceDataDescription || ''],
      sourceFileName: [analysis.source.sourceFileName || ''],
      sourceCategory: [analysis.source.sourceCategory, [Validators.required]],
      dataOwner: [analysis.source.dataOwner || ''],
      dataSteward: [analysis.source.dataSteward || ''],
      dataUser: [dataUsers || ''],
      templateSourcePath: [analysis.source.templateSourcePath || ''],
      settingsDate: ['', [Validators.required]],
      uploadTime: [''],
      multiSourcColumn: [''],
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

    const fileType: string = this.route.snapshot.queryParamMap.get('type');
    this.selectedType = fileType;

    const mode: string = this.route.snapshot.queryParamMap.get('mode');
    if (mode === 'edit') {
      this.isEditMode = true;
      this.mode = 'edit';
      this.showPreview = true;
      this.loadSourcePreview();
    }
    if (this.selectedType === 'csv') {
      this.chooseOptions = '.csv';
    }

    if (this.selectedType === 'xlsx') {
      this.chooseOptions = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
    }
    this.editRefSourceData = JSON.parse(localStorage.getItem('dq-source-data'));
    if (this.editRefSourceData && this.editRefSourceData.reference.length) {
      this.refDateMethod = this.editRefSourceData.reference[0].ref_data_type;
    }


    // console.log(mode);
    this.minDate = moment().format('YYYY-MM-DD');
    this.analysis = analysis;
    this.getsourceCategory();
    this.getdataOwner();
    this.getMongoDBClientHistoryURL();
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

  addFormItem(arrayName) {
    const fbArray = this.analysisForm.get(arrayName) as FormArray;
    fbArray.push(this.intiFormArrays(arrayName));
  }

  removeFormItem(arrayName, index) {
    const fbArray = this.analysisForm.get(arrayName) as FormArray;
    fbArray.removeAt(index);
  }

  getsourceCategory() {
    this.http.getsourceCategory().subscribe((result: any) => {
      this.srcCategory = result.sourceCategory;
    });
  }

  getdataOwner() {
    this.http.getdataOwner().subscribe((result: any) => {
      this.srcDataOwner = result.userList;
      this.srcDataOwner.map(data => {
        this.variables.push(data.name);
      });
      this.filteredList = this.variables.slice();
    });
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

    // const newRefPayload = [{
    //   referenceDataName: this.refColumn,
    //   referenceDataDescription: this.refColumn + 'Details',
    //   referenceFileName: this.refColumn + '.csv',
    //   referencePath: "mongodb_data/" + this.refColumn + '.csv',
    //   referenceId: ""
    // }]


    let sourceRefNameEqual = false;
    let refPayload;


    if (this.refColumn) {
      refPayload = [{
        referenceDataName: this.refColumn,
        referenceDataDescription: this.refColumn + 'Details',
        referenceFileName: this.refColumn + '.csv',
        referencePath: "mongodb_data/" + this.refColumn + '.csv',
        referenceId: ""
      }];
      this.refDataType = "MongoDB_RefData";
    } else if (this.refColumnL) {
      refPayload = [{
        referenceDataName: this.refColumnL,
        referenceDataDescription: this.refColumnL + 'Details',
        referenceFileName: this.refColumnL + '.csv',
        referencePath: "mongodb_data/" + this.refColumnL + '.csv',
        referenceId: ""
      }];
      this.refDataType = "MongoDB_RefData";
    } else if (this.refColumnG) {
      refPayload = [{
        referenceDataName: this.refColumnG,
        referenceDataDescription: this.refColumnG + 'Details',
        referenceFileName: this.refColumnG + '.csv',
        referencePath: "mongodb_data/" + this.refColumnG + '.csv',
        referenceId: ""
      }];
      this.refDataType = "MongoDB_RefData";
    } else {
      this.refDataType = "User_LocalData"
      refPayload = analysis.referenceData.map((ref, index) => {
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
    }

    this.sourceSettings.multiSourceColumn = this.afControls.multiSourcColumn.value;
    const payload = {
      sourceId: this.sourceId ? this.sourceId : undefined,
      source: {
        sourceDataName: analysis.sourceDataName,
        sourceDataDescription: analysis.sourceDataDescription,
        sourceFileName: this.sourceFile.name ? this.sourceFile.name : analysis.sourceFileName,
        sourceCategory: analysis.sourceCategory,
        dataOwner: this.afControls.dataOwner.value ? this.afControls.dataOwner.value : analysis.dataOwner,
        dataSteward: this.afControls.dataSteward.value ? this.afControls.dataSteward.value : analysis.dataSteward,
        dataUser: this.dataUserTollerance,
        type: '',
        connectionDetails: {}
      },
      ref_data_type: this.refDataType ? this.refDataType : "",
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
        message: this.mode === 'edit' ? `Source has been updated successfully.` : `Source has been added successfully.`,
        cancelLable: '',
        okLable: 'OK'
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok') {
        this.router.navigate(['auth/data-quality-monitoring']);
        localStorage.setItem('selected-analysis', JSON.stringify(this.summary));
      } else {
      }
    });
  }

  prevoewBackClickFirst() {
    this.gotoStepper(0);
  }

  prevoewBackClick() {
    if (this.mode === 'create') {
      localStorage.setItem('dq-source-data', JSON.stringify(this.summary));
      this.router.navigate(
        [`auth/create-source-data`],
        { queryParams: { sourceId: this.summary.sourceId, mode: 'edit' } }
      );
    }
    this.gotoStepper(1);
  }
  onSourceFileSelected(file) {
    this.showPreview = true;
    this.sourceFile = file;
    this.flError = true;
    this.selFileName = file.name;
    if (this.selFileName) {
      this.selFileNameErr = false;
    }
    const fName = file.name.split('.')[0];
    const fExt = file.name.split('.')[1];
    if (this.mode === 'edit') {
      this.flError = false;
    }
    if (this.selectedType !== fExt) {
      this.flError = false;
      this.showPreview = false;
    }

    if (this.selectedType === 'csv') {
      this.chooseOptions = '.csv';
    }

    if (this.selectedType === 'xlsx') {
      if (fExt.includes('xls')) {
        this.flError = true;
        this.showPreview = true;
        this.chooseOptions = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
      }
    }
    this.afControls.sourceDataName.setValue(fName);
    this.loadSourcePreview();
  }

  onReferenceFileSelected(file, reference, index) {
    this.refFiles[index] = file;
    const fName = file.name.split('.')[0];
    reference.controls.referenceDataName.setValue(fName);
    this.loadReferencePreview();
  }

  gotoStepper(index, tab = '') {
    this.stepIndex = index;
  }

  refTabIndex;
  selectedCategoryKey;
  selectedCategoryKeyL;
  selectedCategoryKeyG;
  validateSourceNameAndNext() {
    const sourceName = this.afControls.sourceDataName.value;

    if (this.selFileName === undefined && this.mode === 'create') {
      this.selFileNameErr = true;
    }

    if (this.analysisForm.valid && !this.selFileNameErr) {
      this.gotoStepper(1, 'CSV');
      if (this.refDateMethod === 'MongoDB_RefData') {
        let element: HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
        element.click();
        this.refTabIndex = 1;
        this.getDBCollectionsClient();
        if (localStorage.getItem('refItem')) {
          this.getDBPreviewCluster(localStorage.getItem('refItem'), localStorage.getItem('refColumn'));
        }
        if (localStorage.getItem('refItemL')) {
          this.getDBPreview(localStorage.getItem('refItemL'), localStorage.getItem('refColumnL'))
        }
        if (localStorage.getItem('refItemG')) {
          this.loadReferencePreviewGD(localStorage.getItem('globalRefPath'), localStorage.getItem('refItemG'), localStorage.getItem('refColumnG'));
        }
        this.selectedCategoryKey = localStorage.getItem('refItem');
        this.selectedCategoryKeyL = localStorage.getItem('refItemL');
        this.selectedCategoryKeyG = localStorage.getItem('refItemG');
      }
    }
  }

  stepperSelectionChange(event) {
    this.stepIndex = event.selectedIndex;
  }

  stepperAnimationDone() {
  }
  multiSourceLists;
  loadSourcePreview() {
    if (this.mode === 'create' && !this.sourceFile.name) {
      alert('Please upload the source file.');
      return;
    }
    this.isPreviewLoaded = false;
    this.isPreviewLoading = true;
    this.columnDefs = [];
    this.rowData = [];
    if (this.mode === 'create') {
      const formData: any = new FormData();
      formData.append('file[]', this.sourceFile);
      this.http.getPreview(formData).subscribe((res: any) => {
        this.multiSourceLists = res.sourceColumns;
        const details: any = res.sourcePreview ? res.sourcePreview : {};
        if (res.errorMsg) {
          this.isPreviewLoaded = false;
          this.isPreviewLoading = false;
          alert(res.errorMsg);
          return;
        }
        this.parseSourcePreview(details);
      }, (error) => {
        this.isPreviewLoaded = false;
        this.isPreviewLoading = false;
      });
    }
    if (this.mode === 'edit') {
      this.http.getSourcePreview(this.sourceId).subscribe((res: any) => {
        const details: any = res.sourcePreview ? res.sourcePreview : {};
        this.parseSourcePreview(details);
      }, (error) => {
        this.isPreviewLoaded = false;
        this.isPreviewLoading = false;
      });

    }
  }

  parseSourcePreview(details) {
    Object.keys(details).map((key, index) => {
      this.rowData.push({
        ...details[key]
      });
    });
    if (this.rowData.length) {
      Object.keys(this.rowData[0]).map((key, index) => {
        this.columnDefs.push({
          field: key,
          ...this.defaultColDefs
        });
      });
    }
    this.isPreviewLoaded = true;
    this.isPreviewLoading = false;
  }

  loadReferencePreview() {
    if (this.mode === 'create' && !this.sourceFile.name) {
      alert('Please upload the source file.');
      return;
    }
    this.isRefPreviewLoaded = false;
    this.isRefPreviewLoading = true;
    this.refcolumnDefs = [];
    this.refrowData = [];
    if (this.mode === 'create') {
      const formData: any = new FormData();
      formData.append('file[]', this.refFiles[0]);
      this.http.getPreview(formData).subscribe((res: any) => {
        const details: any = res.sourcePreview ? res.sourcePreview : {};
        if (res.errorMsg) {
          this.isPreviewLoaded = false;
          this.isPreviewLoading = false;
          alert(res.errorMsg);
          return;
        }
        this.parseReferencePreview(details);
      }, (error) => {
        this.isRefPreviewLoaded = false;
        this.isRefPreviewLoading = false;
      });
    }
    if (this.mode === 'edit') {
      this.http.getSourcePreview(this.sourceId).subscribe((res: any) => {
        const details: any = res.sourcePreview ? res.sourcePreview : {};
        this.parseReferencePreview(details);
      }, (error) => {
        this.isRefPreviewLoaded = false;
        this.isRefPreviewLoading = false;
      });

    }
  }

  parseReferencePreview(details) {
    Object.keys(details).map((key, index) => {
      this.refrowData.push({
        ...details[key]
      });
    });
    if (this.refrowData.length) {
      Object.keys(this.refrowData[0]).map((key, index) => {
        this.refcolumnDefs.push({
          field: key,
          ...this.defaultColDefs
        });
      });
    }
    this.isRefPreviewLoaded = true;
    this.isRefPreviewLoading = false;
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

  sliderChanged(e) {
    console.log(e);
  }

  openToleranceLevelDialog(): void {
    this.dialog.open(ToleranceLevelDialogComponent, {
      width: '800px',
    });
  }

  confirmDialog(): Observable<boolean> {
    const message = 'You have not saved your current work. Do you want to proceed and discard?';
    const data = { message, toShowCancel: true, buttonYesCaption: 'Yes', buttonNoCaption: 'No' };
    const dialogRef = this.dialog.open(DeactiveDialogComponent, {
      width: '400px',
      height: '200px',
      data
    });
    return dialogRef.afterClosed();
  }

  globalData;
  globalDataPath;
  loadingGlobalData = false;
  loadingLocalData = false;
  globalDataGroup;

  showGlobalReferenceData(a) {
    if (a.index === 1) {
      this.globalData = localStorage.getItem('globalData');
      if (!this.globalData) {
        this.loadingLocalData = true;
        this.getDBCollections();
      } else {
        this.loadingGlobalData = true;
        this.globalDataPath = JSON.parse(this.globalData);
        this.globalDataGroup =
          _.chain(this.globalDataPath.Ref_data_files)
            // Group the elements of Array based on `color` property
            .groupBy("db")
            // `key` is group's name (color), `value` is the array of objects
            .map((value, key) => ({ db: key, refdData: value }))
            .value()

      }

    }
  }

  selectdItem;
  selectedColumn;
  isButtonShow = false;
  startIndex = 0;
  endIndex = 100;
  isLoadingCO = false;
  collectionResult;
  collectionTable: any = [];
  refItemL;
  refColumnL;

  getDBPreview(item, column) {
    this.refItemL = item;
    this.refColumnL = column;
    localStorage.removeItem('refItem');
    localStorage.removeItem('refColumn');
    localStorage.removeItem('refItemG');
    localStorage.removeItem('refColumnG');
    localStorage.removeItem('globalRefPath');
    localStorage.setItem('refItemL', this.refItemL);
    localStorage.setItem('refColumnL', this.refColumnL);
    this.selectedColumn = column;
    this.selectedColumnN = '';
    this.selectdItem = item;
    this.isButtonShow = false;
    this.showRefTable = false;
    this.isLoadingCDB = true;
    const payload = {
      client_url: '',
      db: this.selectdItem,
      collection: this.selectedColumn,
      start_index: this.startIndex,
      end_index: this.endIndex
    };
    this.isLoadingCO = true;
    this.http.getDBPreview(payload).subscribe((result: any) => {
      this.collectionResult = result.Preview;
      this.isLoadingCO = false;
      this.isButtonShow = true;
      this.rowData = [];
      this.columnDefs = [];
      this.collectionTable = result.Preview;
      if (this.collectionTable) {
        this.previewTable();
      }
      this.isLoadingCDB = false;
      this.showRefTable = true;
      this.isPreviewLoaded = true;
      this.isPreviewLoading = false;

    }, (error) => {
      this.isLoadingCO = false;
      alert(error.message);
    });
  }

  previewTable() {
    Object.keys(this.collectionTable).map((key, index) => {
      this.rowData.push({
        ...this.collectionTable[key]
      });
    });
    if (this.rowData.length) {
      Object.keys(this.rowData[0]).map((key, index) => {
        this.columnDefs.push({
          field: key,
          ...this.defaultColDefs
        });
      });
    }
  }


  db;
  dataSource;
  isLoadingDB = false;
  newDB;
  dbValues: any = [];

  getDBCollections() {
    this.isLoadingDB = true;
    this.showAllDetails = false;
    const payload = {
      client_url: '',
    };
    this.http.getDBCollections(payload).subscribe((result: any) => {
      this.newDB = result.Cluster_Contents;
      this.db = _.keys(result.Cluster_Contents);
      this.dbValues.push(this.newDB);
      this.dataSource = _.values(result.Cluster_Contents);
      this.isLoadingDB = false;
      this.showAllDetails = true;
    }, (error) => {
      alert(error.message);
    });
  }

  getMongoDBClientHistoryURL() {
    this.http.getMongoDBClientHistory().subscribe((result: any) => {
      this.clientUrlLog = result.ClientHist;
      if (result.ClientHist.length) {
        this.clientUrl = result.ClientHist[0].client_url;
        this.showConnectionList = false;
      } else {
        this.showConnectionList = true;
      }
    })
  }

  showDbCollectionName: boolean = false;


  onWriterChange() {
    if (this.clientUrl === 'others') {
      this.showDbCollectionName = true;
    } else {
      this.showDbCollectionName = false;
      //this.getDBCollections();
    }
  }

  getMongoDBSaveLog() {
    this.http.getMongoDBSaveLog().subscribe((result: any) => {
      this.dbSaveLogs = result.SavedFilesLog;
    })
  }
  showRefTable = false;
  loadReferencePreviewMD() {
    this.isPreviewLoaded = false;
    this.isPreviewLoading = true;
    this.columnDefs = [];
    this.rowData = [];
    this.showRefTable = false;
    const payload = {
      sourcepath: this.titleSrc
    };
    this.http.getProfileView(payload).subscribe((res: any) => {
      const details: any = res.Preview ? res.Preview : {};
      this.parseSourcePreviewMD(details);
      this.showRefTable = true;
    }, (error) => {
      this.isPreviewLoaded = false;
      this.isPreviewLoading = false;
    });

  }
  refItemG;
  refColumnG;
  loadReferencePreviewGD(path, column, item) {
    this.selectedColumn = '';
    this.refItemG = item;
    this.refColumnG = column;
    localStorage.removeItem('refItemL');
    localStorage.removeItem('refColumnL');
    localStorage.removeItem('refItem');
    localStorage.removeItem('refColumn');
    localStorage.setItem('refItemG', this.refItemG);
    localStorage.setItem('refColumnG', this.refColumnG);
    localStorage.setItem('globalRefPath', path);
    this.isButtonShow = false;
    this.titleSrc = path;
    this.showRefTable = false;
    const payload = {
      sourcepath: this.titleSrc
    };
    this.isLoadingCO = true;
    this.http.getProfileView(payload).subscribe((res: any) => {
      this.collectionResult = res.Preview;
      this.isLoadingCO = false;
      this.rowData = [];
      this.columnDefs = [];
      this.collectionTable = res.Preview;
      if (this.collectionTable) {
        this.previewTable();
      }
      this.showRefTable = true;

      this.isPreviewLoaded = true;
      this.isPreviewLoading = false;
    }, (error) => {
      this.isLoadingCO = false;
      this.isPreviewLoaded = false;
      this.isPreviewLoading = false;

      alert(error.message);
    });

  }

  parseSourcePreviewMD(details) {
    Object.keys(details).map((key, index) => {
      this.rowData.push({
        ...details[key]
      });
    });
    if (this.rowData.length) {
      Object.keys(this.rowData[0]).map((key, index) => {
        this.columnDefs.push({
          field: key,
          ...this.defaultColDefs
        });
      });

    }
    this.isPreviewLoaded = true;
    this.isPreviewLoading = false;
  }

  getClusterKeys;
  selectdItems: any = [];
  selectedSource;
  titleSrc;
  refItem;
  refColumn;
  selectedColumnN;
  getDBPreviewCluster(item, column) {
    this.selectedColumn = '';
    this.refItem = item;
    this.refColumn = column;
    localStorage.removeItem('refItemL');
    localStorage.removeItem('refColumnL');
    localStorage.removeItem('refItemG');
    localStorage.removeItem('globalRefPath');
    localStorage.removeItem('refColumnG');
    localStorage.setItem('refItem', this.refItem);
    localStorage.setItem('refColumn', this.refColumn);
    this.selectedColumnN = column;
    this.getClusterKeys = _.find(this.dbSaveLogs, item ? item : '', item ? item : '');
    if (this.getClusterKeys && this.getClusterKeys[item][this.selectedColumnN]) {
      this.selectedSource = this.getClusterKeys;
      this.titleSrc = this.getClusterKeys[item][this.selectedColumnN].outputpath;
      this.loadReferencePreviewMD();
      this.selectedColumnN = column;
      this.titleSrc = "";
    } else {
      const payload = {
        client_url: this.clientUrl || '',
        db: item,
        collection: this.selectedColumnN,
        output_filename: this.selectedColumnN + '.csv',
      };
      this.isLoading = true;
      this.loaderMsg = 'Loading...'
      this.http.saveMangoDbCollection(payload).subscribe((result: any) => {
        if (result) {
          this.isLoading = false;
          this.getMongoDBSaveLog();
          this.selectedSource = result;
          this.titleSrc = result.outputpath;
          this.loadReferencePreviewMD();
        }
      })

    }


  }

  newDBClient;
  dbValuesClient: any = [];
  dbClient;
  dataSourceClient;
  loadingClientDetails: boolean = false;
  uploadButton = false;
  alertErrMessage;
  isLoadingCDB = false;
  showAllDetails = false;
  getDBCollectionsClient() {
    this.isLoading = true;
    this.loaderMsg = "Connecting..."
    this.showAllDetails = false;
    this.uploadButton = false;
    const payload = {
      client_url: this.clientUrl || '',
    };
    this.http.getDBCollections(payload).subscribe((result: any) => {
      this.uploadButton = true;
      this.newDBClient = result.Cluster_Contents;
      this.dbClient = _.keys(result.Cluster_Contents);
      this.dbValuesClient.push(this.newDBClient);
      this.dataSourceClient = _.values(result.Cluster_Contents);
      this.isLoading = false;
      this.loadingClientDetails = true;
      this.showAllDetails = true;
    }, (error) => {
      this.alertErrMessage = error.message;
      this.isLoading = false;
      this.modalService.open(this.modalErrContent, { windowClass: 'modal-holder' });
    });
  }

  clientUrlConnection;
  clientUrl;
  closeResult: string;

  openSm(content) {
    this.modalService.open(content, { windowClass: 'modal-holder' }).result.then((result) => {
      this.clientUrl = result;
      this.clientUrlConnection = result;
      this.getDBCollectionsClient();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
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
