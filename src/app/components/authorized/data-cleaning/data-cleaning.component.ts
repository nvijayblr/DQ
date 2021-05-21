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
   sticky = false;
  elementPosition: any;
  defaultSelected = true;
  drop: boolean = true;
  impute: boolean = false;
  dataTypeNum: boolean = false;
  dataTypeAlpha: boolean = false;
  nullType:boolean=true;
  value: number = 10;
  highValue: number = 67;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };

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
      const analysis = this.messageService.getSource();
      this.source = analysis.source ? analysis.source : {};
      if (this.source) {
         this.loadProfile(this.source);
      }
   }, 10);
  }

  changeProfile(profile) {
      this.profile = profile;
      if (this.profile.LengthStatistics) {
         this.options.floor = profile.LengthStatistics.Min ? profile.LengthStatistics.Min : 0;
         this.options.ceil = profile.LengthStatistics.Max ? profile.LengthStatistics.Max : 0;
      }
      this.attrubute = profile.column;
      console.log(this.profile);
   }

  loadProfile(source) {
     this.isLoading = true;
     this.loaderMsg = 'Loading Profile...';
     const payload = {
      sourcepath: source.templateSourcePath
   };
     this.http.getProfiles(payload).subscribe((result: any) => {
      this.profiles = result.profile ? result.profile : [];
      if (this.profiles.length) {
         this.changeProfile(this.profiles[0]);
      }
      this.isLoading = false;
   }, (error) => {
      this.isLoading = false;
   });
  }
  
  changeComboo(event) {
    console.log(event && event.value);
    if (event && event.value === 'drop') {
      this.drop = true;
      this.impute = false;
    } else {
      this.drop = false;
      this.impute = true;
    }
  }
  changeDataType(event) {
    console.log(event && event.value); 
    if (event && event.value === 'Numeric') {
      this.dataTypeNum = true;
      this.dataTypeAlpha = false;
    } else {
      this.dataTypeNum = false;
      this.dataTypeAlpha = true;
    }
  }

  enableCustom(event) {
    console.log(event && event.value); 
    if (event && event.value === 'custom') {
      this.nullType = false;
    } else {
      this.nullType = true;
    }
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
