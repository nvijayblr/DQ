import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-analysis-detail',
  templateUrl: './analysis-detail.component.html',
  styleUrls: ['./analysis-detail.component.scss']
})
export class AnalysisDetailComponent implements OnInit {
  @ViewChild('previewDetail', { static: false }) preview: any;
  @ViewChild('correlationDetail', { static: false }) correlation: any;

  profile: any = {};
  selectedSource: any = {};
  selectedTab: any = 0;

  @Input() set profileData(value: string) {
    this.profile = value;
  }

  @Input() set source(value: string) {
    this.selectedSource = value;
    this.onSelectTab(this.selectedTab);
  }

  ngOnInit() {

  }

  onSelectTab(index) {
    if (index == '1') {
      this.preview.loadSourcePreview();
    } else if (index == '2') {
      this.correlation.loadCorrelation()
    }
    this.selectedTab = index;
  }

}