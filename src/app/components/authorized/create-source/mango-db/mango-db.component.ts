import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../../services/http-service.service';

@Component({
  selector: 'app-mango-db',
  templateUrl: './mango-db.component.html',
  styleUrls: ['./mango-db.component.scss']
})
export class MangoDBComponent implements OnInit {
  @ViewChild("content", {static: false}) modalContent: TemplateRef<any>;
  analysisForm: FormGroup;
  collectionForm : FormGroup;
  srcCategory = [];
  saveCollections;
  collectionsForm: boolean = false;
  sourceFile: any = {};
  flError = true;
  sourceNameErr = false;
  showPreview = false;
  selFileName;
  selFileNameErr = false;
  selectedType;
  chooseOptions: string;
  mode;
  alertMessage;
  savePath;
  isLoading = false;
  loaderMsg = 'Loading...';
  refFiles: any = [];
  summary: any = {};
  uploadMethod;
  clientUrl: any = [];
  dbList: any = [];
  showDbCollectionName: boolean = false;
  profileType;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {
   
   }
   get afControls(): any { return this.analysisForm.controls; }
  ngOnInit() {
    // this.saveCollections = this.route.snapshot.queryParamMap.get('save');
    // if (this.saveCollections) {
    //   this.collectionsForm = true;
    // }
    this.profileType  = this.route.snapshot.queryParamMap.get('type');
    this.analysisForm = this.fb.group({
      //sourceDataName: ['', [Validators.required]],
      clientUrlDb: ['', [Validators.required]],
      clientUrlDbType: ['', [Validators.required]],
      sourceFileName: ['', []],
      //database: ['', [Validators.required, Validators.maxLength(100)]],
      collection: ['', [Validators.required, Validators.maxLength(100)]],
      sourceCategory: ['', [Validators.required]],
    });

    // this.collectionForm = this.fb.group({
    //   sourceDataName: ['', [Validators.required, Validators.maxLength(100)]],
    //   clientUrl: ['', []],
    //   database: ['', [Validators.required, Validators.maxLength(100)]],
    //   collection: ['', [Validators.required, Validators.maxLength(100)]],
    // });

    this.getsourceCategory();
    this.getMongoDBClientHistoryURL();
    
  }

  get clientUrlDb() {
    return this.analysisForm.get('clientUrlDb');
  }

  onWriterChange() {
    if (this.clientUrlDb.value === 'others') {
      this.showDbCollectionName = true;
      this.afControls.clientUrlDbType.setValue('');
    } else {
      this.afControls.clientUrlDbType.setValue(this.clientUrlDb.value);
      this.showDbCollectionName = false;
      this.getDBCollections();
    }
  }

  getDBCollections() {
    this.isLoading = true;
    const payload = {
      client_url: this.clientUrlDb.value,
    };
    this.http.getDBCollections(payload).subscribe((result: any) => {
      this.isLoading = false;
      console.log('DB', result.Databases)
      this.dbList = result.Databases;
    }, (error) => {
      alert(error.message);
    });
  }

  // saveMangoDbCollection() {
  //   const payload = {  
  //     client_url: this.collectionForm.controls.clientUrl.value || '',
  //     db: this.collectionForm.controls.database.value,
  //     collection:this.collectionForm.controls.collection.value,   
  //     output_filename : this.collectionForm.controls.sourceDataName.value + '.csv',
  //   }
  //   this.http.saveMangoDbCollection(payload).subscribe((result: any) => {
  //     this.alertMessage = result.Message;
  //     this.savePath = result.outputpath;
  //     this.modalService.open(this.modalContent, { windowClass: 'modal-holder' });
  //     this.router.navigate([`auth/reference-data`]);
  //   }, (error) => {
  //     this.isLoading = false;
  //   });
  // }


  getMongoDBClientHistoryURL() {
    this.http.getMongoDBClientHistory().subscribe((result: any) => {
      console.log('HIST', result);
      this.clientUrl = result.ClientHist;
      console.log(this.clientUrl);

    })
  }
  onSourceFileSelected(file) {
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
    //this.afControls.sourceDataName.setValue(fName);
    //this.loadSourcePreview();
  }



  saveSource() {
    const analysis = this.analysisForm.value;
    const formData: any = new FormData();
    if (this.mode === 'create' && !this.sourceFile.name) {
      alert('Please upload the source file.');
      return;
    }

    if (!this.sourceFile.name) {
      alert('Please upload the source file.');
      return;
    }

    if (this.sourceFile.name) {
      formData.append('file[]', this.sourceFile);
    }

    
    const payload = {
      client_url: this.analysisForm.controls.clientUrlDbType.value,
      db: this.analysisForm.controls.sourceCategory.value,
      collection:this.analysisForm.controls.collection.value     
    };

    formData.append('data', JSON.stringify(payload));


    this.isLoading = true;
    this.loaderMsg = 'Saving Source and Reference data...';

    this.http.saveSourceMangoDB(formData, this.mode === 'edit' ? 'put' : 'post').subscribe((result: any) => {
      this.isLoading = false;
      alert(result.message);
        if (result.errorMsg) {
          alert(result.errorMsg);
          return;
        }
      this.summary = result.SourceSettings;
      if (this.profileType === 'profile') {
        this.router.navigate([`auth/attribute-details-data`]);
      } else {
        this.router.navigate([`auth/reference-data`]);
      }
      
      // if (this.uploadMethod === 'clean') {
      //   localStorage.setItem('dq-source-data', JSON.stringify(this.summary));
      //   localStorage.setItem('dq-upload-data', 'clean');
      //   this.router.navigate([`auth/data-cleaning`]);
      //   this.router.navigate(
      //     [`auth/data-cleaning`]);
        
      // } else {
      //   localStorage.setItem('dq-source-data', JSON.stringify(this.summary));
      //   localStorage.setItem('dq-upload-data', 'profile');
      //   this.router.navigate([`auth/attribute-details-data`]);
      // }
        
      }, (error) => {
        this.isLoading = false;
      });


  }

  getsourceCategory() {
    this.http.getsourceCategory().subscribe((result: any) => {
      this.srcCategory = result.sourceCategory;
    });
  }

}
