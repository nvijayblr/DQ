import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Options } from '@angular-slider/ngx-slider';
import { MessageService } from 'src/app/services/message.service';
import { HttpService } from 'src/app/services/http-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-attribute-details',
  templateUrl: './attribute-details.component.html',
  styleUrls: ['./attribute-details.component.scss']
})
export class AttributeDetailsComponent implements OnInit {
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
  sourceID;
  allSourceCategory;
  jsonObj;
  initLoadProfile: boolean = true;
  selectedSource: any = {};
  actionItem:boolean = false;

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

  itemsAsObjects = [{id: 0, name: 'Angular'}, {id: 1, name: 'React'}];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
       "<i class='fa fa-angle-left'></i>",
       "<i class='fa fa-angle-right'></i>"
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
  }

  profileOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
       "<i class='fa fa-angle-left'></i>",
       "<i class='fa fa-angle-right'></i>"
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
  }

  constructor(private messageService: MessageService, private http: HttpService,private router: Router) {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
   }
  
  minValue = 0;
  maxValue = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    showTicks: true
  };

  ngOnInit() {
    this.isLoading = true;
    
    if (this.initLoadProfile) {     
      setTimeout(() => {
        const analysis = this.messageService.getSource();
        this.source = analysis.SourceSettings ? analysis.SourceSettings : {};
        if (this.source.length > 0) {
          console.log('this.source', this.source)
          this.sourceID = this.source.sourceId;
          this.loadProfile(this.source);
          this.loadReferencePreview();
          this.loadCorrelation(this.source, this.datatype, this.method);
        } else {
          this.http.getProfileSource().subscribe((result: any) => {
            this.source = result.SourceDetailsList[0] ? result.SourceDetailsList[0] : {};
            console.log('this.source2', this.source)
            this.sourceID = this.source.sourceId;
            this.loadProfile(this.source);
            this.loadReferencePreview();
            this.loadCorrelation(this.source, this.datatype, this.method);
          })
        }    
     }, 10);
    }
    
    this.getProfileSource();
    this.getsourceCategory();
    //this.loadSourcePreview();
  }

  changeProfile(profile) {    
      this.profile = profile;
      if (this.profile.LengthStatistics) {
         this.options.floor = profile.LengthStatistics.Min ? profile.LengthStatistics.Min : 0;
         this.options.ceil = profile.LengthStatistics.Max ? profile.LengthStatistics.Max : 0;
      }
      this.attrubute = profile.column;
      //console.log(this.profile);
  }
  

  changeCategory(source) {
    console.log('this.source3', this.source)
    //// const sourceDataName = this.source.sourceDataName;
    // const sourceFileName = this.source.sourceFileName.split('.');
    // console.log(sourceDataName, sourceFileName[0])
    // if (sourceDataName === sourceFileName[0]) {
    //   this.actionItem = true;
    // }
    this.sourceID = source.sourceId;
    this.initLoadProfile = false
    this.titleSrc = source.templateSourcePath;
    this.loadProfile(source);
    this.loadReferencePreview();
    //this.loadCorrelation(this.source, this.datatype, this.method);
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


  getsourceCategory() {
    this.http.getsourceCategory().subscribe((result: any) => {
      this.srcCategory = result.sourceCategory;
      this.items = result.sourceCategory;
    })
  }

  editSourceData(sourceData) {
    localStorage.setItem('dq-source-data', JSON.stringify(sourceData));
    this.router.navigate(
       [`auth/create-profile-data`],
       { queryParams: { sourceId: sourceData.sourceId, mode: 'edit' } }
    );
  }

  coMatrix: any = {};
  datatype = 'mixed';
  method = '';

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
    this.loadCorrelation(this.source, this.datatype, this.method);
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
    alert('Are you sure you want to delete');
    const payload = {
      action : "remove",        
      old_source: {
        sourceDataName: source.sourceDataName,
        sourceFileName: source.sourceFileName,
        sourceCategory: source.sourceCategory,
        dataOwner: source.dataOwner,
        sourceId: source.sourceId,
      },
      new_source:""
    };
    this.http.deleteSource(payload).subscribe((res: any) => {
      console.log('Deleteted', res);
    })
  }


  getProfileSource() {
    this.http.getProfileSource().subscribe((result: any) => {
      this.allSourceCategory = result.SourceDetailsList;
      const groupByCategory = {};
      this.allSourceCategory.map(category => {
        if (!groupByCategory[category.sourceCategory]) {
          groupByCategory[category.sourceCategory] = [];
        }
        groupByCategory[category.sourceCategory].push(category)
      })
      this.jsonObj = _.map(groupByCategory, (value, prop) => ({ prop, value }));
    })    
  }

  isPreviewLoaded = false;
  isPreviewLoading = false;
  
  defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
  rowData: any = [];
  columnDefs: any = [];
  
  loadReferencePreview() {
    this.isPreviewLoaded = false;
    this.isPreviewLoading = true;
    this.columnDefs = [];
    this.rowData = [];
    const payload = {
      sourcepath: this.titleSrc
    };
    this.http.getProfileView(payload).subscribe((res: any) => {
      //console.log('RES', res);
      const details: any = res.Preview ? res.Preview : {};
      //console.log('DET', details)
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

      //console.log('this.columnDefs', this.columnDefs)
    }
    this.isPreviewLoaded = true;
    this.isPreviewLoading = false;

    //console.log('RDATA', this.rowData)
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

  currentlyOpenedItemIndex = -1;



  setOpened(itemIndex) {
    this.currentlyOpenedItemIndex = itemIndex;
  }

  setClosed(itemIndex) {
    if(this.currentlyOpenedItemIndex === itemIndex) {
      this.currentlyOpenedItemIndex = -1;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  highcharts = Highcharts;
   chartOptions = {   
      chart: {
         type: 'column'
      },
      title: {
         text: 'Monthly Average Rainfall'
      },
      subtitle:{
         text: 'Source: WorldClimate.com' 
      },
      xAxis:{
         categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul',
         'Aug','Sep','Oct','Nov','Dec'],
         crosshair: true        
      },     
      yAxis : {
         min: 0,
         title: {
            text: 'Rainfall (mm)'         
         }      
      },
      tooltip : {
         headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
         pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
            '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
      },
      plotOptions : {
         column: {
            pointPadding: 0.2,
            borderWidth: 0
         }
      },
      series: [{
         name: 'Tokyo',
         data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
            148.5, 216.4, 194.1, 95.6, 54.4]
      }, 
      {
         name: 'New York',
         data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3,
            91.2, 83.5, 106.6, 92.3]
      }, 
      {
         name: 'London',
         data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6,
            52.4, 65.2, 59.3, 51.2]
      }, 
      {
         name: 'Berlin',
         data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4,
            47.6, 39.1, 46.8, 51.1]
      }]
  };

  highcharts2 = Highcharts;
   chartOptions2 = {
      chart: {
        type: 'column'
     },
     title: {
        text: 'Correlation Summary with negative values'
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
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        credits: {
          enabled: false

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
     series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, -2, -3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, -2, 5]
    }]
  };

  highcharts3 = Highcharts;
   chartOptions3 = {   
      chart : {
         plotBorderWidth: null,
         plotShadow: false
      },
      title : {
         text: 'Frequency analysis'   
      },
      tooltip : {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions : {
         pie: {
            shadow: false,
            center: ['50%', '50%'],
            size:'45%',
            innerSize: '20%'            
         }
      },
      series : [{
         type: 'pie',
         name: 'Browser share',
         data: [
            ['Firefox',   45.0],
            ['IE',       26.8],
            {
               name: 'Chrome',
               y: 12.8,
               sliced: true,
               selected: true
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['Others',      0.7]
         ]
      }]
  };
  
  highcharts4 = Highcharts;
   chartOptions4 = {   
      chart : {
         type: 'heatmap',
         marginTop: 40,
         marginBottom: 80
      },
      title : {
         text: 'Correlation Details'   
      },
      xAxis : {
         categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas',
            'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
      },
      yAxis : {
         categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            title: null
      },
      colorAxis : {
         min: 0,
         minColor: '#FFFFFF',
         maxColor: Highcharts.getOptions().colors[0]
      },
      legend : {
         align: 'right',
         layout: 'vertical',
         margin: 0,
         verticalAlign: 'top',
         y: 25,
         symbolHeight: 280
      },
      tooltip : {
         formatter: function () {
            return '<b>' + this.series.xAxis.categories[this.point.x] +
               '</b> sold <br><b>' +
               this.point.value +
               '</b> items on <br><b>' +
               this.series.yAxis.categories[this.point.y] + '</b>';
         }
      },
      series : [{
         name: 'Sales per employee',
         borderWidth: 1,
         data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67],
         [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48],
         [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52],
         [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16],
         [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115],
         [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120],
         [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96],
         [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30],
         [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84],
         [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
         
         dataLabels: {
            enabled: true,
            color: '#000000'
         }
      }]
     
   };
  
 
  
  
  changeView(view) {
    if (view === 'table') {
      this.showtable = true;
    } else {
      this.showtable = false;
    }
  }

  previewTable = false;
  previewProfile = true;
  previewCorrelation = false;

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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
  }

}
