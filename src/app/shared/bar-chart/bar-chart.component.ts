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
  @Input() analysis;
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
        valueSuffix: ''
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

  analysisDetails: any = {};

  constructor() {
  }

  ngOnInit() {
    this.initMainChart();
  }

  ngAfterViewInit() {
  }

  initMainChart() {
    const chartData: any = {
        labels: [],
        delay: []
    };
    console.log(this.analysis);
    this.analysis.data.map(data => {
        chartData.labels.push(data.airline ? data.airline : data.ORIGIN_AIRPORT);
        chartData.delay.push(+(data.value.NoOfDelays ? data.value.NoOfDelays : data.value.TotalDelays));
    });
    this.initChart(chartData, false);
  }

  initDetailsChart(detailsData) {
    const chartData: any = {
        labels: [],
        delay: []
    };
    detailsData.map(data => {
        chartData.labels.push(data.ORIGIN_AIRPORT ? data.ORIGIN_AIRPORT : data.AIRLINE);
        chartData.delay.push(+(data.NoOfDelays ? data.NoOfDelays : data.TotalDelays));
    });
    this.initChart(chartData, true);
  }

  initChart(chartData, isDetail) {
    const agThis = this;
    this.chartOptions.title.text = this.analysis.Title;
    this.chartOptions.xAxis = {
        categories: chartData.labels,
        title: {
            text: this.analysis['X-Axis']
        },
        labels: {
            events: {
                click(e) {
                    if (isDetail) {
                        agThis.initMainChart();
                    } else {
                        agThis.loadDetailsChart(this.value);
                        agThis.xLableClicked.emit({label: this.value});
                    }
                }
            }
        }
    };
    this.chartOptions.yAxis.title.text = this.analysis['Y-Axis'];

    this.chartOptions.chart.type = this.chartType ? this.chartType : 'column';

    this.chartOptions.series = [{
        name: 'Delay',
        data: chartData.delay
    }];
    this.highcharts = Highcharts;
    this.highcharts.chart(this.chartEl.nativeElement, this.chartOptions);
  }

  loadDetailsChart(label) {
    if (Object.keys(this.analysis.data[0]).indexOf('airline') >= 0) {
        this.analysisDetails = this.analysis.data.filter((data) => data.airline === label)[0];
    } else {
        this.analysisDetails = this.analysis.data.filter((data) => data.ORIGIN_AIRPORT === label)[0];
    }
    console.log(this.analysisDetails);
    this.initDetailsChart(this.analysisDetails.value.details);
  }
}
