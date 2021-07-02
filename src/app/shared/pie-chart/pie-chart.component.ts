import { Component, OnInit } from '@angular/core';
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

  constructor() {
    this.options = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: false,
          alpha: 45
        }
      },
      title: {
        text: 'Weekly fruit delivery'
      },
      subtitle: {
        text: ''
      },
      plotOptions: {
        pie: {
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
            ['Bananas', 8],
            ['Kiwi', 3],
            ['Mixed nuts', 1],
            ['Oranges', 6],
            ['Apples', 8],
            ['Pears', 4],
            ['Clementines', 4],
            ['Reddish (bag)', 1],
            ['Grapes (bunch)', 1]
          ]
        }
      ]
    };
  }

  ngOnInit() {
    Highcharts.chart('container', this.options);
  }
}
