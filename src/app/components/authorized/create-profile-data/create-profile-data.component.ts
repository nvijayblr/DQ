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
import * as moment from 'moment';


@Component({
  selector: 'app-create-profile-data',
  templateUrl: './create-profile-data.component.html',
  styleUrls: ['./create-profile-data.component.scss']
})
export class CreateProfileDataComponent implements OnInit {

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

  get afControls(): any { return this.analysisForm.controls; }
  minDate = moment().format();

  multiSourceList = this.messageService.getPrefrences('multisource');
  frequencyList = this.messageService.getPrefrences('frequency');
  departmentList = this.messageService.getPrefrences('departments');

  sourceSettings = {
    isMuliSourceData: 'true',
    multiSourceOptions: [],
    frequency: 'Daily',
    uploadDate: this.minDate,
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
  public selected = [];
  public variables = [];
  public filteredList;
  editAnalysis;

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;

    const sourceNames = localStorage.getItem('dq-source-data');
    this.sourceNames = sourceNames ? JSON.parse(sourceNames) : [];

    let analysis = this.messageService.getSource();
    this.editAnalysis = this.messageService.getSource();
   
    if (!analysis.source) {
      analysis = {
        source:  {}
      };
    }
    if (analysis.settings) {
      this.sourceSettings = analysis.settings;
    }

    this.analysisForm = this.fb.group({
      sourceDataName: [analysis.source.sourceDataName, [Validators.required, Validators.maxLength(100)]],
      sourceDataDescription: [analysis.source.sourceDataDescription || ''],
      sourceFileName: [analysis.source.sourceFileName || ''],
      templateSourcePath: [analysis.source.templateSourcePath || ''],
      sourceCategory: [analysis.source.sourceCategory || ''],
      dataOwner : [analysis.source.dataOwner || ''],
      //settingsDate : ['', [Validators.required]],
      //uploadTime : [''],
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
      console.log('Edit mode', this.editAnalysis)
      this.isEditMode = true;
      if(this.editAnalysis) {
        this.afControls.sourceDataName.setValue(this.editAnalysis.sourceDataName);
        this.afControls.sourceDataDescription.setValue(this.editAnalysis.sourceDataDescription);
      }
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
     // console.log(mode);
    this.minDate = moment().format('YYYY-MM-DD');
    this.analysis = analysis;
    this.getsourceCategory();
    this.getdataOwner();
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
    })
  }

  getdataOwner() {
    this.http.getdataOwner().subscribe((result: any) => {
      this.srcDataOwner = result.userList;
      this.srcDataOwner.map(data => {
        this.variables.push(data.name);
      });
      this.filteredList = this.variables.slice();
    })
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
      SourceSettings: {
        sourceDataName: analysis.sourceDataName,
        sourceDataDescription: analysis.sourceDataDescription,
        sourceFileName: this.sourceFile.name ? this.sourceFile.name : analysis.sourceFileName,
        sourceCategory: analysis.sourceCategory,
        dataOwner: analysis.dataOwner,
        uploadDate: this.sourceSettings.uploadDate,
        department : this.sourceSettings.department
      },
      //reference: refPayload,
      //settings: this.sourceSettings
    };
    
   

    if (sourceRefNameEqual) {
      alert('The source file and reference file should not be same.');
      return;
    }

    formData.append('data', JSON.stringify(payload));
   
    this.isLoading = true;
    //console.log('Loading', this.isLoading);
    this.loaderMsg = 'Saving Source and Reference data...';
    
      this.http.saveSourceProfile(formData, this.mode === 'edit' ? 'put' : 'post').subscribe((result: any) => {
        //console.log('Result', result);
        this.isLoading = false;
        if (result.errorMsg) {
          //this.stepIndex = 0;
          alert(result.errorMsg);
          return;
        }
        this.summary = result;
        localStorage.setItem('dq-source-data', JSON.stringify(this.summary));
        this.router.navigate([`auth/attribute-details-data`]);
        //this.gotoStepper(2);
        // this.showSaveSuccess();
      }, (error) => {
        //console.log('Error', error);
        this.isLoading = false;
      });
    
   
  }

  editSourceSave() {
    const payload = {
      action : "edit",        
      old_source: {
        sourceDataName: this.editAnalysis.sourceDataName,
        sourceFileName: this.editAnalysis.sourceFileName,
        sourceCategory: this.editAnalysis.sourceCategory,
        dataOwner: this.editAnalysis.dataOwner,
        sourceId: this.editAnalysis.sourceId,
      },
      new_source: {
        sourceDataName:  this.afControls.sourceDataName.value,
        sourceDataDescription: this.afControls.sourceDataDescription.value,
        sourceFileName: this.sourceFile.name ? this.sourceFile.name : this.afControls.sourceFileName.value,
        sourceCategory: this.afControls.sourceCategory.value,
        dataOwner: this.afControls.dataOwner.value,
        uploadDate: this.sourceSettings.uploadDate,
        department : this.sourceSettings.department
      },
    }
    this.http.saveEditSourceProfile(payload).subscribe((result: any) => {
      this.isLoading = false;
      if (result.errorMsg) {
        //this.stepIndex = 0;
        alert(result.errorMsg);
        return;
      }
      this.summary = result;
      localStorage.setItem('dq-source-data', JSON.stringify(this.summary));
      this.router.navigate([`auth/attribute-details-data`]);
      //this.gotoStepper(2);
      // this.showSaveSuccess();
    }, (error) => {
      //console.log('Error', error);
      this.isLoading = false;
    });
    const mode: string = this.route.snapshot.queryParamMap.get('mode');
   console.log(mode, 'Loading');
     
      console.log('Loading2');
   
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

   prevoewBackClickFirst() {
      this.gotoStepper(0);
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

  validateSourceNameAndNext() {
    const sourceName = this.afControls.sourceDataName.value;
    if (this.selFileName === undefined && this.mode === 'create') {
      this.selFileNameErr = true;
      return;
    }
    if (!sourceName) {
      this.sourceNameErr = true;
      return;
    }
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
        const details: any = res.sourcePreview ? res.sourcePreview : {};
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


}
