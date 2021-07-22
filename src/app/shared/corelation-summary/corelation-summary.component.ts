import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-corelation-summary',
  templateUrl: './corelation-summary.component.html',
  styleUrls: ['./corelation-summary.component.scss']
})
export class CorelationSummaryComponent implements OnInit, OnChanges{
  @Input() summary: any = {};

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.summary = this.summary ? this.summary : {};
  }

}
