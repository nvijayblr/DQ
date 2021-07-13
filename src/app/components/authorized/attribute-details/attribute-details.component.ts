import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'src/app/services/message.service';
import { HttpService } from 'src/app/services/http-service.service';
import { PreviewDialogComponent } from '../../../shared/preview-dialog/preview-dialog.component';



@Component({
  selector: 'app-attribute-details',
  templateUrl: './attribute-details.component.html',
  styleUrls: ['./attribute-details.component.scss']
})
export class AttributeDetailsComponent implements OnInit {

  constructor(private messageService: MessageService, private http: HttpService, private router: Router, public dialog: MatDialog,) {
   
   }
   @ViewChild('stickyMenu', {static: false}) menuElement: ElementRef;
   rules: any = [];
   statistics: any = {};
   attrubute: any = '';
   isLoading = false;
   loaderMsg = '';
   profiles: any = [];
   profile: any = {};
   selectedCategoryKey: any = '';
   show = false;
   frequencyShow = false;
   patternShow = false;
   maskShow = false;
   sticky = false;
  elementPosition: any;
  visibleIndex = -1;
  showDetails = true;
  showFirst = true;
  actionTabId;
  showtable = true;
  srcCategory;
  items;
  titleSrc;
  allSourceCategory;
  sourceByCategory;
  initLoadProfile = true;
  selectedSource: any = {};
  actionItem = false;
  showAllDetails = false;
  chartData: any = [];

  profileDetails = {
    nr_duplicates: 0,
    nr_totalcols: 0,
    nr_totalrecords: 0
  };
  profileSummary = {
    sourcepath: '',
    sourceFileName: '',
    records: '',
    numeric: 0,
    alphabetic: 0,
    alphanumeric: 0,
    nullcounts: 0,
    duplicates: 0
 };



  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
       '<i class=\'fa fa-angle-left\'></i>',
       '<i class=\'fa fa-angle-right\'></i>'
    ],
    autoplay: false,
    autoplayHoverPause: true,
    autoWidth: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 600,
      items: 6,
      responsive: {
        0: {
          items: 3,
          center: true,
          loop: true,
        },
        740: {
          items: 6,
          center: false,
          loop: false,
        }
      }
  };

  profileOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
       '<i class=\'fa fa-angle-left\'></i>',
       '<i class=\'fa fa-angle-right\'></i>'
    ],
    autoplay: false,
    autoplayHoverPause: true,
    autoWidth: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 600,
      items: 6,
      responsive: {
        0: {
          items: 3,
          center: true,
          loop: true,
        },
        740: {
          items: 6,
          center: false,
          loop: false,
        }
      }
  };

  highcharts = Highcharts;
   chartOptions = {   
      chart: {
       type: 'column',
       backgroundColor: '#f7f9fc',
      },
      title: {
         text: 'Column chart with negative values'
      },
      xAxis:{
         categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']        
      },     
      series: [
         {
            name: 'John',
            data: [5, 3, 4, 7, 2]
         }, 
         {
            name: 'Jane',
            data: [2, -2, -3, 2, 1]
         }, {
            name: 'Joe',
            data: [3, 4, 4, -2, 5]
         }
      ]
   };

  minValue = 0;
  maxValue = 0;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    //showTicks: true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min</b> " + value;
        case LabelType.High:
          return "<b>Max</b> " + value;
        default:
          return "" + value;
      }
    }
  };

  coMatrix: any = {};
  datatype = 'mixed';
  method = '';

  isPreviewLoaded = false;
  isPreviewLoading = false;

  defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
  rowData: any = [];
  columnDefs: any = [];

  currentlyOpenedItemIndex = -1;
 

  previewTable = false;
  previewProfile = true;
  previewCorrelation = false;

  ngOnInit() {
    this.isLoading = true;
    this.getProfileSource();
    
  }

  changeProfile(profile) {
    this.profile = profile;
    const extractValues = ({ unique_values, counts }) => [unique_values.toString(), counts];   
    this.chartData = this.profile.frequncyAnalysis.map(extractValues);
    if (this.profile.LengthStatistics) {
      this.setNewCeil(profile.LengthStatistics.Max);
         this.options.floor = profile.LengthStatistics.Min ? profile.LengthStatistics.Min : 0;
        this.options.ceil = profile.LengthStatistics.Max ? profile.LengthStatistics.Max : 0;
        this.minValue = this.options.floor;
        this.maxValue = this.options.ceil;
      } 
      this.attrubute = profile.column;
      // console.log(this.profile);
  }

  setNewCeil(newCeil: number): void {
    // Due to change detection rules in Angular, we need to re-create the options object to apply the change
    const newOptions: Options = Object.assign({}, this.options);
    newOptions.ceil = newCeil;
    this.options = newOptions;
  }


  changeCategory(source) {
    //localStorage.setItem('dq-source-data', JSON.stringify(source));
    localStorage.removeItem('dq-source-data');
    localStorage.removeItem('dq-upload-data');
    this.selectedSource = source;
    this.initLoadProfile = false;
    this.titleSrc = source.templateSourcePath;
    this.loadProfile(source);
    this.loadReferencePreview();
    // this.loadCorrelation(this.selectedSource, this.datatype, this.method);
  }

  loadProfile(source) {
    this.isLoading = true;
    this.loaderMsg = 'Loading Profile...';
    this.titleSrc = source.templateSourcePath;
    const payload = {
       sourcepath: source.templateSourcePath
   };
    this.http.getProfiles(payload).subscribe((result: any) => {
      this.profiles = result.profile ? result.profile : [];
      console.log('RESULT', result)
      this.profileDetails = {
        nr_duplicates: result.nr_duplicates,
        nr_totalcols: result.nr_totalcols,
        nr_totalrecords: result.nr_totalrecords
     };
      if (this.profiles.length) {
         this.changeProfile(this.profiles[0]);
      }
      this.profileSummary.duplicates = result.nr_duplicates ? result.nr_duplicates : 0;

      this.profileSummary.numeric = 0;
      this.profileSummary.alphabetic = 0;
      this.profileSummary.alphanumeric = 0;
      this.profileSummary.nullcounts = 0;

      this.profiles.map(data => {
            if (data.attributeSummary) {
               this.profileSummary.records = data.attributeSummary.records ? data.attributeSummary.records : this.profileSummary.records;
               if (data.attributeSummary.dataType === 'Numeric') {
                  this.profileSummary.numeric = this.profileSummary.numeric + 1;
               }
               if (data.attributeSummary.dataType === 'Alphabetic') {
                  this.profileSummary.alphabetic = this.profileSummary.alphabetic + 1;
               }
               if (data.attributeSummary.dataType === 'Alphanumeric') {
                  this.profileSummary.alphanumeric = this.profileSummary.alphanumeric + 1;
               }
               this.profileSummary.nullcounts = this.profileSummary.nullcounts + parseInt(data.attributeSummary.null_records, 0);
           }
         });
      this.isLoading = false;
   }, (error) => {
      this.isLoading = false;
   });
  }


  editSourceData(sourceData) {
    localStorage.setItem('dq-source-data', JSON.stringify(sourceData));
    this.router.navigate(
       [`auth/create-profile-data`],
       { queryParams: { sourceId: sourceData.sourceId, mode: 'edit', method: 'profile' } }
    );
  }

  changeType(type) {
    if (type === 'numeric') {
        this.method = 'pearson';
     }
    if (type === 'categorical') {
        this.method = 'theils_u';
     }
    if (type === 'mixed') {
        this.method = '';
     }
    this.loadCorrelation(this.selectedSource, this.datatype, this.method);
  }

  loadCorrelation(source, type, method) {
    this.isLoading = true;
    this.loaderMsg = 'Loading Correlation...';
    const payload = {
      sourcepath: source.templateSourcePath,
      cols_data_type: type,
      method
    };
    this.http.getCorrMatrix(payload).subscribe((result: any) => {
      this.coMatrix = result ? result : {};
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.coMatrix = {};
  });
  }

  deleteSourceData(source) {
    const confirm = window.confirm('Are you sure you want to delete');
    const payload = {
      action: 'remove',
      db : "profile",
      old_source: {
        sourceDataName: source.sourceDataName,
        sourceFileName: source.sourceFileName,
        sourceCategory: source.sourceCategory,
        dataOwner: source.dataOwner,
        sourceId: source.sourceId,
      },
      new_source: ''
    };
    if (confirm) {
      localStorage.removeItem('dq-source-data');
      localStorage.removeItem('dq-upload-data');
      this.http.deleteSource(payload).subscribe((res: any) => {
        this.reloadCurrentRoute();
      });
    }

  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  getProfileSource() {
    this.http.getProfileSource().subscribe((result: any) => {
      this.allSourceCategory = result.SourceDetailsList;
      const profieData = localStorage.getItem('dq-source-data');
      const uploadMethod = localStorage.getItem('dq-upload-data');
      // this.selectedSource = result.SourceDetailsList.length ? result.SourceDetailsList[0] : [];
      //   if (this.selectedSource.length === 0) {
      //     this.showAllDetails = true;
      //     return;
      //   }
      //console.log('profieData', profieData)
      if (profieData && uploadMethod === "profile") {
        //this.selectedSource = JSON.parse(profieData);
        this.selectedSource = JSON.parse(profieData);
        //console.log('selected', this.selectedSource);
      } else {
        this.selectedSource = result.SourceDetailsList.length ? result.SourceDetailsList[0] : [];
        if (this.selectedSource.length === 0) {
          this.showAllDetails = true;
          return;
        }
      }

      console.log('this.selectedSource', this.selectedSource)

      this.loadProfile(this.selectedSource);
      this.loadReferencePreview();
      this.loadCorrelation(this.selectedSource, this.datatype, this.method);
      this.sourceByCategory =
        _.chain(this.allSourceCategory).
        groupBy('sourceCategory')
        .map((sourcesList, key) => {
          sourcesList.map(source => {
            if (source.sourceId === this.selectedSource.sourceId) {
              this.selectedCategoryKey = key;
            }
          });
          return { category: key, sources: sourcesList };
        }).value();
    });
  }

  loadReferencePreview() {
    this.isPreviewLoaded = false;
    this.isPreviewLoading = true;
    this.columnDefs = [];
    this.rowData = [];
    const payload = {
      sourcepath: this.titleSrc
    };
    this.http.getProfileView(payload).subscribe((res: any) => {
      const details: any = res.Preview ? res.Preview : {};
      this.parseSourcePreview(details);
      }, (error) => {
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

   showTab(id) {
    this.actionTabId = id;
    if (id === '1') {
      this.showFirst = true;
    } else {
      this.showFirst = false;
    }
    if (id === this.actionTabId) {
        this.showDetails = true;
    } else {
      this.showDetails = false;
    }

  }
  nullcounts : any;
  showPreviewDetails() {
    console.log('showPreviewDetails', this.selectedSource.templateSourcePath, this.profile.column)
    const payload = {
      sourcepath: this.selectedSource.templateSourcePath,
      column_name: this.profile.column,
    };
    this.http.getNullCounts(payload).subscribe((res: any) => {
      this.nullcounts = res.Preview ? res.Preview : {};
      console.log('details', this.nullcounts);
      this.dialog.open(PreviewDialogComponent, {
        width: '95%',
        // height: '95%',
        data: {
         ...this.nullcounts
        }
     });
      }, (error) => {
        this.isPreviewLoaded = false;
        this.isPreviewLoading = false;
      });
   
 }



  setOpened(itemIndex) {
    this.currentlyOpenedItemIndex = itemIndex;
  }

  setClosed(itemIndex) {
    if (this.currentlyOpenedItemIndex === itemIndex) {
      this.currentlyOpenedItemIndex = -1;
    }
  }

 




  changeView(view) {
    if (view === 'table') {
      this.showtable = true;
    } else {
      this.showtable = false;
    }
  }

  changeMenu(menu) {
    if (menu === 'preview') {
      this.previewTable = true;
      this.previewProfile = false;
      this.previewCorrelation = false;
    } else if (menu === 'profile') {
      this.previewTable = false;
      this.previewProfile = true;
      this.previewCorrelation = false;
    } else if (menu === 'correlation') {
      this.previewTable = false;
      this.previewProfile = false;
      this.previewCorrelation = true;
    } else {
      this.previewTable = true;
      this.previewProfile = false;
      this.previewCorrelation = false;
    }
  }
}


