import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges{

  public activity;
  public xData;
  public label;
  options: any;

  @Input() pieChartData;

  constructor() {
  }

  ngOnInit() {   
  }

  ngOnChanges() {
    this.options = {
      chart: {
        type: 'pie',
        backgroundColor: '#f7f9fc',
        margin: [0, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
        options3d: {
          enabled: false,
          alpha: 45,
        }
      },
      // title: {
      //   text: 'Weekly fruit delivery'
      // },
      // subtitle: {
      //   text: ''
      // },
      plotOptions: {
        pie: {
          size: 160,
          innerSize: 80,
          depth: 45,
          allowPointSelect: true,
          cursor: 'pointer',
        }
      },
      series: [
        {
          name: 'Count',
          data: [
          ...this.pieChartData           
          ]
        }
      ]
    };
    Highcharts.chart('containerPie', this.options);    
  }
  
}
