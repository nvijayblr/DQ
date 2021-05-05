import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsHeatmap from 'highcharts/modules/heatmap';

// const heatmap = require("highcharts/modules/heatmap.js");
// heatmap(Highcharts)
highchartsHeatmap(Highcharts);

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss']
})
export class HeatMapComponent implements OnInit {
   @Input() columns: any = [];
   @Input() data: any = [];
   @ViewChild('charts', {static: true}) public chartEl: ElementRef;

   highcharts;

   chartOptions = {
      chart : {
         type: 'heatmap',
         marginTop: 40,
         marginBottom: 80,
         plotBorderWidth: 0,
         paddingBottom: 100,
         height: 700
      },
      title : {
         text: 'Heat Map for Correlation Detail'
      },
      xAxis : {
         categories: this.columns
      },
      yAxis : {
         categories: this.columns,
         title: null
      },
      colorAxis: {         
         stops: [
            [0, '#ffffff'],
            [0.01, '#ffffff'],
            [0.02, '#ffffff'],
            [0.03, '#ffffff'],
            [0.04, '#ffffff'],
            [0.05, '#ffffff'],
            [0.06, '#ffffff'],
            [0.1, '#efa800'],
            [0.2, '#efa800'],
            [0.3, '#efa800'],
            [0.4, '#efa800'],
            [0.5, '#efa800'],
            [0.6, '#efa800'],
            [0.7, '#efa800'],
            [1, '#efa800']
          ],
         min: 0,
         minColor: '#ffaca6',
         maxColor: '#28a745'
         //maxColor: Highcharts.getOptions().colors[0]

      },
      legend : {
         align: 'right',
         layout: 'vertical',
         margint: 0,
         verticalAlign: 'top',
         y: 25,
         symbolHeight: 565
      },
      plotOptions: {
         heatmap: {
          pointPadding: 0
         },
         series: {
           stickyTracking: false
         }
       },
      tooltip : {
         formatter() {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b>: ' + this.point.value;
         }
      },
      series : [{
         name: '',
         borderWidth: 1,
         borderColor: '#ffebbb',
         data: this.data,
         dataLabels: {
            enabled: false,
            color: '#000000'
         }
      }]
   };
   constructor() { }



   ngOnInit() {
      this.initChart();
   }

   initChart() {
      this.chartOptions.xAxis.categories = this.columns;
      this.chartOptions.yAxis.categories = this.columns;
      this.chartOptions.series[0].data = this.data;
      this.highcharts = Highcharts;
      this.highcharts.chart(this.chartEl.nativeElement, this.chartOptions);
   }

}
