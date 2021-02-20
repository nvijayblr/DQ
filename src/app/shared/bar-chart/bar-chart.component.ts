import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import customEvents from 'highcharts-custom-events';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
customEvents(Highcharts);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('charts', {static: true}) public chartEl: ElementRef;
  @Input() chartData;
  @Input() chartType;
  @Output() xLableClicked = new EventEmitter<any>();
  highcharts;
  chartOptions = {
    chart: {
        type: 'column',
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
  constructor() {
  }

  ngOnInit() {
    const agThis = this;
    console.log(this.chartData.labels);
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
    this.chartOptions.series = [{
        name: 'Completeness',
        data: this.chartData.completeness
      }, {
        name: 'Validity',
        data: this.chartData.validity
      }];
    console.log(this.chartData);
  }

  ngAfterViewInit() {
    this.highcharts = Highcharts;
    this.highcharts.chart(this.chartEl.nativeElement, this.chartOptions);
  }
}
