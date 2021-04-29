import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from '@angular-slider/ngx-slider';
import { MessageService } from 'src/app/services/message.service';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-attribute-details',
  templateUrl: './attribute-details.component.html',
  styleUrls: ['./attribute-details.component.scss']
})
export class AttributeDetailsComponent implements OnInit {
   rules: any = [];
   statistics: any = {};
   attrubute: any = '';
   isLoading = false;
   loaderMsg = '';
   source: any = {};
   profiles: any = [];
   profile: any = {};

   constructor(private messageService: MessageService, private http: HttpService, ) {
      const analysis = this.messageService.getSource();
      this.source = analysis.source ? analysis.source : {};
      this.loadProfile(this.source);
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


  minValue = 0;
  maxValue = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };

  ngOnInit() {
  }

  changeProfile(profile) {
     this.profile = profile;
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

}
