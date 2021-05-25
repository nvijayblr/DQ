import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';
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
export class HeatMapComponent implements OnInit, OnChanges {
   @Input() columns: any = [];
   @Input() data: any = [];
   @ViewChild('charts', {static: true}) public chartEl: ElementRef;

   highcharts;

   chartOptions = {
      chart : {
         type: 'bubble',   // bubble, heatmap
         // marginTop: 40,
         // marginBottom: 80,
         plotBorderWidth: 1,
         // paddingBottom: 100,
         height: 900,
         pointSize: 1
      },
      title : {
         text: 'Heat Map for Correlation Detail'
      },
      xAxis : {
         categories: this.columns
      },
      yAxis : {
         categories: this.columns,
        title: null,
        startOnTick: false,
        endOnTick: false
      },
      colorAxis: {
         // stops: [
         //    [0, '#ff0000'],
         //    [0.01, '#ff0000'],
         //    [0.02, '#ff0000'],
         //    [0.03, '#ff0000'],
         //    [0.04, '#ff0000'],
         //    [0.05, '#ff0000'],
         //    [0.06, '#ff0000'],
         //    [0.1, '#efa800'],
         //    [0.2, '#efa800'],
         //    [0.3, '#efa800'],
         //    [0.4, '#efa800'],
         //    [0.5, '#efa800'],
         //    [0.6, '#efa800'],
         //    [0.7, '#efa800'],
         //    [1, '#efa800']
         //  ],
         min: -1,
         max: 1,
         minColor: '#ff0000',
         maxColor: '#00b307'
         // maxColor: Highcharts.getOptions().colors[0]

      },
     legend: {
      enabled: false,
         align: 'right',
         layout: 'vertical',
         margin: 0,
         verticalAlign: 'top',
         y: 25,
         symbolHeight: 765
      },
      plotOptions: {
         heatmap: {
          pointPadding: 0
         },
         bubble: {
            minSize: 1,
           maxSize: 22,
         },
         series: {
           stickyTracking: false
         }
       },
     tooltip: {
      followPointer: true,
         formatter() {
            console.log(this.point);
            return '<b>' + this.point.category + '</b>: ' + this.point.options.z;
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

   ngOnChanges() {
      this.initChart();
   }

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
