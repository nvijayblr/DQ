import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from '@angular-slider/ngx-slider';
import { MessageService } from 'src/app/services/message.service';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-data-cleaning',
  templateUrl: './data-cleaning.component.html',
  styleUrls: ['./data-cleaning.component.scss']
})
export class DataCleaningComponent implements OnInit {
   @ViewChild('stickyMenu', {static: false}) menuElement: ElementRef;
   rules: any = [];
   statistics: any = {};
   attrubute: any = '';
   isLoading = false;
   loaderMsg = '';
   source: any = {};
   profiles: any = [];
   profile: any = {};
   show = false;
   frequencyShow = false;
   patternShow = false;
   maskShow = false;

   sliderOptions: any = {
      floor: 0,
      ceil: 100,
      step: 10,
      showTicks: true
   };

   impute: any = {
      sourcepath: '',
      column: '',
      column_data_type: '',
      value : ''
   };

   delete: any = {
      sourcepath: '',
      type: 'column',
      category: 'col_nan',
      column_name: '',
      values: '',
      threshold : 50
   };

   mask: any = {
      sourcepath: '',
      column: '',
      value: ''
   };


   analysis: any = {};

   isPreviewLoaded = false;
   isPreviewLoading = false;
   defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
   rowData: any = [];
   columnDefs: any = [];

   constructor(private messageService: MessageService, private http: HttpService, ) {
   }
   highcharts = Highcharts;
   chartOptions = {
      chart: {
        type: 'bar'
     },
     title: {
        text: 'Historic World Population by Region'
     },
     subtitle : {
        text: 'Source: Source Name'
     },
     legend : {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 250,
        y: 100,
        floating: true,
        borderWidth: 1,

        backgroundColor: (
             '#FFFFFF'), shadow: true
        },
        xAxis: {
           categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
           text: null
        }
     },
     yAxis : {
        min: 0, title: {
           text: 'Population (millions)', align: 'high'
        },
        labels: {
           overflow: 'justify'
        }
     },
     tooltip : {
        valueSuffix: ' millions'
     },
     plotOptions : {
        bar: {
           dataLabels: {
              enabled: true
           }
        }
     },
     credits: {
        enabled: false
     },
     series: [
        {
           name: 'Year 1800',
           data: [107, 31, 635, 203, 2]
        },
        {
           name: 'Year 1900',
           data: [133, 156, 947, 408, 6]
        },
        {
           name: 'Year 2008',
           data: [973, 914, 4054, 732, 34]
        }
     ]
  };




  ngOnInit() {
   this.isLoading = true;
   setTimeout(() => {
      this.analysis = this.messageService.getSource();
      this.source = this.analysis.source ? this.analysis.source : {};
      if (this.source) {
         this.mask.sourcepath = this.source.templateSourcePath;
         this.impute.sourcepath = this.source.templateSourcePath;
         this.delete.sourcepath = this.source.templateSourcePath;
         this.loadProfile(this.source);
      }
   }, 10);
  }

  changeProfile(profile) {
      this.profile = profile;
      this.attrubute = profile.column;

      this.mask.column = profile.column;
      this.impute.column = profile.column;
      this.delete.column_name = profile.column;
      console.log(this.profile);
   }

  loadProfile(source, profile = '') {
     this.isLoading = true;
     this.loaderMsg = 'Loading Profile...';
     const payload = {
      sourcepath: source.templateSourcePath
   };
     this.http.getProfiles(payload).subscribe((result: any) => {
      this.profiles = result.profile ? result.profile : [];
      if (this.profiles.length) {
         if (profile) {
            this.changeProfile(profile);
         } else {
            this.changeProfile(this.profiles[0]);
         }
      }
      this.isLoading = false;
   }, (error) => {
      this.isLoading = false;
   });
  }

   imputeColumns(datatype) {
      this.impute.column_data_type = datatype;
      this.impute = {
         ...this.impute,
         sourceFileName: 'flight-abc',
         sourceId: this.analysis.sourceId,
         uploadId: this.analysis.recentsourceUpload.uploadId,
         rulesetId: this.analysis.rulesetId,
         uploadDate: this.analysis.recentsourceUpload.uploadDate,
      };
      this.isLoading = true;
      this.loaderMsg = 'Imputing columns...';
      this.http.imputeColumnsReq(this.impute).subscribe((result: any) => {
         this.isLoading = false;
         // this.loadProfile(this.source, this.profile);
         alert('Impution has been successfully completed.');
      }, (error) => {
         this.isLoading = false;
      });
   }

   deleteColumnsRows() {
      this.isLoading = true;
      this.loaderMsg = 'Imputing columns...';
      this.delete.threshold = (this.delete.category === 'col_nan' || this.delete.category === 'row_nan')
         ? this.delete.threshold : undefined;
      const payload = {...this.delete};
      delete payload.type;
      this.http.deleteColumnsRowsReq(this.delete).subscribe((result: any) => {
         this.isLoading = false;
         // this.loadProfile(this.source, this.profile);
         alert(`${this.delete === 'column' ? 'Columns' : 'Rows'} are deleted successfully.`);
      }, (error) => {
         this.isLoading = false;
      });
   }

   loadDuplicatePreview() {
      const payload = {
         sourcepath: this.source.templateSourcePath,
         action: 'preview' ,
         select_cols: [this.profile.column],
         keep: ''
      };
      this.loadProfilePreview(payload);
   }

   loadProfilePreview(payload) {
      this.isLoading = true;
      this.loaderMsg = 'Loading preview...';
      this.isPreviewLoaded = false;
      this.isPreviewLoading = true;
      this.columnDefs = [];
      this.rowData = [];
      this.http.getProfilePreview(payload).subscribe((res: any) => {
         console.log('res', res);
         const details: any = res.sourcePreview ? res.sourcePreview : {};
         this.parseSourcePreview(details);
         this.isLoading = false;
      }, (error) => {
         console.log(error);
         this.isLoading = false;
         this.isPreviewLoaded = false;
         this.isPreviewLoading = false;
      });
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

   // ngAfterViewInit(){
   //    this.elementPosition = this.menuElement.nativeElement.offsetTop;
   // }

   // @HostListener('window:scroll', ['$event'])
   //  handleScroll(){
   //    const windowScroll = window.pageYOffset;
   //    if(windowScroll >= this.elementPosition){
   //      this.sticky = true;
   //    } else {
   //      this.sticky = false;
   //    }
   //  }

}
