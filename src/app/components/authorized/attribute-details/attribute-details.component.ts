import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit, DoCheck, Input,TemplateRef} from '@angular/core';
import * as Highcharts from 'highcharts';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'src/app/services/message.service';
import { HttpService } from 'src/app/services/http-service.service';
import { PreviewDialogComponent } from '../../../shared/preview-dialog/preview-dialog.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-attribute-details',
  templateUrl: './attribute-details.component.html',
  styleUrls: ['./attribute-details.component.scss']
})
export class AttributeDetailsComponent implements OnInit {
  constructor(private messageService: MessageService, private http: HttpService, private router: Router, public dialog: MatDialog,private modalService: NgbModal) {
   
   }
  @ViewChild('stickyMenu', { static: false }) menuElement: ElementRef;
  @ViewChild('contentErr', {static: false}) modalErrContent: TemplateRef<any>;
   
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
  domainType: any = {};
  showDomainType = false;
  clientUrlConnection;
  clientUrl;
  showConnectionList: boolean = false;
  clientUrlLog: any = [];
  dbSaveLogs: any = [];


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
    //this.isLoading = true;
    this.showDomainType = false;
    this.getProfileSource();
    this.getMongoDBClientHistoryURL();
    this.getMongoDBSaveLog();
  }
  domainMatches;
  columnMatches;
  changeProfile(profile) {
    this.profile = profile;
    this.columnMatches = this.domainType.Domain_Matches;
    this.domainMatches = _.keys(this.domainType.Domain_Matches);
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
      //this.searchMultipleNumbers();
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
    this.titleSrc = source.templateSourcePath ? source.templateSourcePath : this.titleSrc;
    const payload = {
       sourcepath: this.titleSrc
   };
    this.http.getProfiles(payload).subscribe((result: any) => {
      this.profiles = result.profile ? result.profile : [];
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
    //this.isLoading = true;
    //this.loaderMsg = 'Loading Correlation...';
    const payload = {
      sourcepath: source.templateSourcePath ? source.templateSourcePath : this.titleSrc,
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

      this.domainTypeIdentity();
     
      //console.log('this.selectedSource', this.selectedSource)

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

  uniqueName;
  domainTypeIdentity() {
    const payload = {
      sourcepath: this.selectedSource.templateSourcePath
    };
    this.http.getDomainTypeIdentity(payload).subscribe((result: any) => {
     
      this.domainType = result;
      this.uniqueName = result.Unique_values.DESTINATION_AIRPORT;
      
    }, (error) => {
      console.log('ERROR', error);
    })
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
    const payload = {
      sourcepath: this.selectedSource.templateSourcePath,
      column_name: this.profile.column,
    };
    this.http.getNullCounts(payload).subscribe((res: any) => {
      this.nullcounts = res.Preview ? res.Preview : {};
      this.dialog.open(PreviewDialogComponent, {
        width: '95%',
        // height: '95%',
        data: {
          ...this.nullcounts,
          title : 'Null Counts'
        }
     });
      }, (error) => {
        this.isPreviewLoaded = false;
        this.isPreviewLoading = false;
      });
   
  }
  
  searchMultipleNumbers() {
    const payload = this.uniqueName;
    this.http.startRequests(payload)
    this.getAllSearchRequest();
    if (this.closeResult) {
      return;
    }
   
  }
 
  newVal;
  isLoad = false;
  getAllSearchRequest() {
      this.http.getStartRequests().subscribe((result: any) => {
        this.newVal = _.values(result);
        this.isLoad = true;
        if (this.closeResult) {
          return;
        }
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

  closeResult: string;
  openScrollableContent(longContent) {
     this.searchMultipleNumbers(); 
    this.modalService.open(longContent, { scrollable: true, size: 'xl' }).result.then((result) => {
      console.log(result);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      //window.location.reload();
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

  showDbCollectionName:boolean = false;


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

  getClusterKeys;
  selectdItems: any = [];
  selectedColumn;
  getDBPreviewCluster(item, column) {
    this.selectedColumn = column;
    this.getClusterKeys = _.find(this.dbSaveLogs, item ? item : '', item ? item : '');
    if (this.getClusterKeys && this.getClusterKeys[item][this.selectedColumn]) {
      this.selectedSource = this.getClusterKeys;      
      this.titleSrc = this.getClusterKeys[item][this.selectedColumn].outputpath;
      this.loadProfile(this.selectedSource);
      this.loadReferencePreview();
      this.loadCorrelation(this.selectedSource, this.datatype, this.method);
    } else {
      const payload = {
        client_url: this.clientUrl || '',
        db: item,
        collection: this.selectedColumn,
        output_filename : this.selectedColumn + '.csv',
      };
      this.isLoading = true;
      this.loaderMsg = 'Loading...'
      this.http.saveMangoDbCollection(payload).subscribe((result: any) => {
        if (result) {
          this.isLoading = false;
          this.getMongoDBSaveLog();
          this.selectedSource = result;
          this.titleSrc = result.outputpath;
          this.loadProfile(this.selectedSource);
          this.loadReferencePreview();
          this.loadCorrelation(this.selectedSource, this.datatype, this.method);
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
    }, (error) => {
      this.alertErrMessage = error.message;
      this.isLoading = false;
      this.modalService.open(this.modalErrContent, { windowClass: 'modal-holder' });
    });
  }

  

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
      return  `with: ${reason}`;
    }
  }

  maskPreview: any;

  getMaskAnalysisView(mask, col) {
    console.log('getMaskAnalysisView', this.titleSrc);
    const payload = {
      sourcepath : this.titleSrc, 
      column_name : col,
      mask_query_value : mask
    };
    this.http.getMaskAnalysisView(payload).subscribe((result: any) => {
      if (result) {
        this.maskPreview = result.Preview ? result.Preview : {};
        this.dialog.open(PreviewDialogComponent, {
          width: '95%',
          // height: '95%',
          data: {
            ...this.maskPreview,
            title : 'Mask Analysis'
          }
       });        
        }
      
    });
  }
}


