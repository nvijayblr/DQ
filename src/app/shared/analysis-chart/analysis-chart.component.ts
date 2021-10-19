import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

@Component({
  selector: 'app-analysis-chart',
  templateUrl: './analysis-chart.component.html',
  styleUrls: ['./analysis-chart.component.scss']
})
export class AnalysisChartComponent implements OnInit, OnChanges {
   @Input() chartData;

   constructor() {
   }

   // data = [{
   //    name: 'ItSolutionStuff.com',
   //    data: [500, 700, 555]
   // }, {
   //    name: 'Nicesnippets.com',
   //    data: [677, 455, 677]
   // }];

   highcharts;
   chartOptions = {
      chart: {
         type: 'spline'
      },
      title: {
         text: ''
      },
      xAxis: {
         categories: ['Jan', 'Feb', 'Mar']
      },
      yAxis: {
         title: {
            text: 'Visitors'
         }
      },
      series: []
   };

   ngOnInit() {
   }

   ngOnChanges() {
      const category = [];
      this.chartData.map(data => {
         category.push(moment(data.uploadDate).format('DD, MMM'));
      });

      const chartdata = [];
      chartdata.push({
         name: 'completeness',
         data: []
      });
      chartdata.push({
         name: 'Uniqueness',
         data: []
      });
      chartdata.push({
         name: 'Validity',
         data: []
      });
      this.chartData.map(data => {
         chartdata[0].data.push(parseFloat(data.results.completeness));
         chartdata[1].data.push(parseFloat(data.results.Uniqueness));
         chartdata[2].data.push(parseFloat(data.results.Validity));
      });
      this.chartOptions.xAxis.categories = category;
      this.chartOptions.series = chartdata;
      this.highcharts = Highcharts;
   }
}
