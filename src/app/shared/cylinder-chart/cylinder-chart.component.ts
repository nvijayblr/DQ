import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);
const Cylinder = require('highcharts/modules/cylinder');
Cylinder(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-cylinder-chart',
  templateUrl: './cylinder-chart.component.html',
  styleUrls: ['./cylinder-chart.component.css']
})
export class CylinderChartComponent implements OnInit {
  @ViewChild('charts', {static: false}) public chartEl: ElementRef;
   @Input() chartData;
   @Input() chartType;
   @Input() options3d;
   @Input() analysisKeys;
   @Output() xLableClicked = new EventEmitter<any>();


   public activity;
   public xData;
   public label;
   chartOptions: any;
   alpha: number;
   beta: number;
   depth: number;


   highcharts;
   constructor() {
      this.alpha = 15;
      this.beta = 15;
      this.depth = 50;

      this.chartOptions = {
         chart: {
            type: 'column',
            options3d: {
                enabled: this.options3d,
                alpha: this.alpha,
                beta: this.beta,
                depth: this.depth,
                viewDistance: 25
            }
         },
         title: {
             text: ''
         },
         subtitle: {
             text: ''
         },
         xAxis: {},
         yAxis: {
            min: 0,
            max:100,
             title: {
                 text: '',
                 align: 'high'
             },
             labels: {
                 overflow: 'justify'
             }
         },
         tooltip: {
             valueSuffix: ' %'
         },
         plotOptions: {
             bar: {
                 dataLabels: {
                     enabled: true
                 },
             }
         },
         legend: {
             layout: 'vertical',
             align: 'right',
             verticalAlign: 'top',
             x: -40,
             y: 80,
             floating: true,
             borderWidth: 1,
             backgroundColor:
                 Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
             shadow: true
         },
         credits: {
             enabled: false
         },
         series: []
       };
 }

 ngOnInit() {
   const agThis = this;
   this.chartOptions.xAxis = {
       categories: this.chartData.labels,
       title: {
           text: null
       },
       labels: {
           events: {
               click(e) {
                   agThis.xLableClicked.emit({label: this.value});
               }
           }
       }
   };

    this.chartOptions.chart.type = this.chartType ? this.chartType : 'column';
    this.chartOptions.chart.options3d.enabled = this.options3d ? this.options3d : false;
   this.chartOptions.series = [];
   this.analysisKeys.map(key => {
       this.chartOptions.series.push({
        name: key,
        data: this.chartData[key]
       });
   });
   console.log('this.chartData', this.chartData);
 }



showValues() {
    this.chartOptions.chart.options3d.alpha;
}



 alphaChange(event: any) {
      this.alpha = event.value;
      this.chartOptions.chart.options3d.alpha = this.alpha;
      Highcharts.chart('container', this.chartOptions);
   }
   betaChange(event: any) {
      this.beta = event.value;
      this.chartOptions.chart.options3d.beta = this.beta;
      Highcharts.chart('container', this.chartOptions);
   }
   depthChange(event: any) {
      this.depth = event.value;
      this.chartOptions.chart.options3d.depth = this.depth;
      Highcharts.chart('container', this.chartOptions);
   }

   ngAfterViewInit() {
      this.highcharts = Highcharts;
      this.highcharts.chart(this.chartEl.nativeElement, this.chartOptions);
   }


 }

