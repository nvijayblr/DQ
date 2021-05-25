import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-corelation-summary',
  templateUrl: './corelation-summary.component.html',
  styleUrls: ['./corelation-summary.component.scss']
})
export class CorelationSummaryComponent implements OnInit {
  @Input() summary: any = {};

  constructor() { }

  ngOnInit() {
    this.summary = this.summary ? this.summary : {};
  }

}
