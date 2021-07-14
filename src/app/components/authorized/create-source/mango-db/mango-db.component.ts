import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../../services/http-service.service';

@Component({
  selector: 'app-mango-db',
  templateUrl: './mango-db.component.html',
  styleUrls: ['./mango-db.component.scss']
})
export class MangoDBComponent implements OnInit {
  analysisForm: FormGroup;
  srcCategory = [];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
   
   }
   get afControls(): any { return this.analysisForm.controls; }
  ngOnInit() {
    this.analysisForm = this.fb.group({
      sourceDataName: ['', [Validators.required, Validators.maxLength(100)]],
      clientUrl: ['', [Validators.required]],
      sourceFileName: ['', []],
      database: ['', [Validators.required, Validators.maxLength(100)]],
      collection: ['', [Validators.required, Validators.maxLength(100)]],
      sourceCategory: ['', [Validators.required]],
    });

    this.getsourceCategory();
    
  }

  sourceFile: any = {};
  flError = true;
  sourceNameErr = false;
  showPreview = false;
  selFileName;
  selFileNameErr = false;
  selectedType;
  chooseOptions: string;
  mode;

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
    this.afControls.sourceDataName.setValue(fName);
    //this.loadSourcePreview();
  }

  isLoading = false;
  loaderMsg = '';
  refFiles: any = [];
  summary: any = {};
  uploadMethod;

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
      client_url: this.analysisForm.controls.clientUrl.value,
      db: this.analysisForm.controls.database.value,
      collection:this.analysisForm.controls.collection.value     
    };

    formData.append('data', JSON.stringify(payload));


    this.isLoading = true;
    this.loaderMsg = 'Saving Source and Reference data...';

    this.http.saveSourceMangoDB(formData, this.mode === 'edit' ? 'put' : 'post').subscribe((result: any) => {
      console.log('RESULT', result)
      this.isLoading = false;
      alert(result.message);
        if (result.errorMsg) {
          alert(result.errorMsg);
          return;
        }
        this.summary = result.SourceSettings;
      this.router.navigate([`auth/reference-data`]);
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
        console.log('Error', error);
        this.isLoading = false;
      });


  }

  getsourceCategory() {
    this.http.getsourceCategory().subscribe((result: any) => {
      this.srcCategory = result.sourceCategory;
    });
  }

}
