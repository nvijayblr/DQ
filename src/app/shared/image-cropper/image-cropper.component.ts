import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { base64ToFile } from 'ngx-image-cropper';
import { HttpService } from '../../services/http-service.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class ImageCropperComponent implements OnInit {
  @ViewChild('fileInput', {static: true}) fileInput: ElementRef;

  @Input() isOpenFile = false;
  @Input() label = 'Select Image';
  @Input() preview = '';
  @Input() aspectRatio = 6 / 4;
  @Input() resizedWidth = 0;
  @Input() resizedHeight = 0;
  @Input() name = '';
  @Input() imageType = '';
  @Input() imagePath = '';
  @Input() fileTypes = 'image/*';
  @Output() imageCroppedCompleted = new EventEmitter<any>();
  @Output() fileSelected = new EventEmitter<any>();
  @Output() uploadCompleted = new EventEmitter<any>();

  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  selectedFile: any = {};
  isLoading = false;
  isUploadDone = false;
  userId = '';
  errorMessage = '';
  appConfig: any = {};

  constructor(private http: HttpService, private authGuardService: AuthGuardService) {
    const user = this.authGuardService.getLoggedInUserDetails();
    this.userId = user.user_id;
    this.appConfig = appConfig;
  }

  ngOnInit() {
    if (this.isOpenFile) {
      console.log(this.fileInput);
      const fileElement: HTMLElement = this.fileInput.nativeElement;
      fileElement.click();
    }
    if (this.imagePath.indexOf('blank.png') >= 0) {
      this.imagePath = '';
    }
  }

  deleteImage() {
    this.croppedImage = '';
    this.imageChangedEvent = '';
    this.imageCroppedCompleted.emit({
      image: '',
      file: ''
    });
  }

  fileChangeEvent(event: any): void {
    this.isUploadDone = false;
    this.errorMessage = '';
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      // if (file.type.indexOf(this.fileTypes) < 0 ) {
      //   event.target.files = undefined;
      //   this.errorMessage = 'Supoort only the image file format.';
      //   return;
      // }
      this.selectedFile = file;
      this.fileSelected.emit(this.selectedFile);
    }
  }

  uploadImage() {
    const formData: any = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('image_type', this.imageType);
    // formData.append('name', this.selectedFile.name);
    this.isLoading = true;
    this.isUploadDone = false;
    this.http.uploadImage(this.userId, formData).subscribe((result: any) => {
      this.isLoading = false;
      this.isUploadDone = true;
      this.uploadCompleted.emit({name: this.selectedFile.name, image_type: this.imageType, path: result.path});
    }, (error) => {
      this.isLoading = false;
    });
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.imageCroppedCompleted.emit({
      image: event.base64,
      file: base64ToFile(event.base64),
      type: 'image'
    });
  }

  imageLoaded() {
    this.showCropper = true;
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
      console.log('Load failed');
  }

}
