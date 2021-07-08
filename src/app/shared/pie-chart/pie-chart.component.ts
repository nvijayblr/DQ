import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public activity;
  public xData;
  public label;
  options: any;

  @Input() pieChartData;

  constructor() {
    
    
   
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('pieChartData5', this.pieChartData);
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
          enabled: true,
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
          //size: 160,
          innerSize: 100,
          depth: 45,
          allowPointSelect: true,
          cursor: 'pointer',
        }
      },
      series: [
        {
          name: 'Delivered amount',
          data: [
          ...this.pieChartData
           
          ]
        }
      ]
    };
    console.log('pieChartData3', this.options.series[0].data)
    Highcharts.chart('container', this.options);
    }, 1000)
    
  }
}
