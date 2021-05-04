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
         paddingBottom: 100,
         height: 600
      },
      title : {
         text: ''
      },
      xAxis : {
         categories: this.columns
      },
      yAxis : {
         categories: this.columns,
         title: null
      },
      colorAxis : {
         min: 0,
         minColor: '#FFFFFF',
         maxColor: '#efa800'
         // maxColor: Highcharts.getOptions().colors[0]
      },
      legend : {
         align: 'right',
         layout: 'vertical',
         margint: 0,
         verticalAlign: 'top',
         y: 25,
         symbolHeight: 500
      },
      tooltip : {
         formatter() {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b>: ' + this.point.value;
         }
      },
      series : [{
         name: '',
         borderWidth: 1,
         borderColor: '#ebe8fb',
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
