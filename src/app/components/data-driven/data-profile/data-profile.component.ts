import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http-service.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataDrivenService } from '../data-driven.service';
import { Subscription } from 'rxjs';
import { CreateSourceComponent } from '../create-source/create-source.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*', display: 'table-row' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class DataProfileComponent implements OnInit {

  profile = [];
  profileSummary: any = {};
  source: any = {};
  subscription: Subscription;

  summaryDetail = {
    'Records': {
      count: 0,
      icon: 'more_vert'
    },
    'Total Columns': {
      count: 0,
      icon: 'more_horiz'
    },
    'Numeric Columns': {
      count: 0,
      icon: 'format_list_numbered'
    },
    'Alphabetic Columns': {
      count: 0,
      icon: 'format_list_bulleted'
    },
    'Alphanumeric Columns': {
      count: 0,
      icon: 'format_list_bulleted'
    },
    'Duplicates': {
      count: 0,
      icon: 'file_copy'
    },
    'Total Null Counts': {
      count: 0,
      icon: 'block'
    }
  };



  constructor(private http: HttpService,
    private ds: DataDrivenService,
    private dialog: MatDialog) {

    this.subscription = this.ds.getProfileSource().subscribe(data => {
      this.source = data || {};
      this.getProfileDetail(this.source.sourcePath);
    });
  }

  ngOnInit() {
    this.initProfileDetail();
  }

  initProfileDetail() {
    this.profileSummary = JSON.parse(JSON.stringify(this.summaryDetail));
  }

  getProfileDetail(filePath) {
    const payload = {
      sourcepath: filePath
    };
    this.http.getProfiles(payload).subscribe((result: any) => {
      this.profile = result.profile ? result.profile : [];
      this.getProfileSummary(result);
    });
    this.initProfileDetail();
  }

  getProfileSummary(result) {
    this.profileSummary = JSON.parse(JSON.stringify(this.summaryDetail));

    this.profileSummary['Records'].count = result.nr_totalrecords ? result.nr_totalrecords : 0;
    this.profileSummary['Total Columns'].count = result.nr_totalcols ? result.nr_totalcols : 0;
    this.profileSummary['Duplicates'].count = result.nr_duplicates ? result.nr_duplicates : 0;
    this.profileSummary['Numeric Columns'].count = 0;
    this.profileSummary['Alphabetic Columns'].count = 0;
    this.profileSummary['Alphanumeric Columns'].count = 0;
    this.profileSummary['Total Null Counts'].count = 0;

    result.profile.map(data => {
      if (data.attributeSummary) {
        if (data.attributeSummary.dataType === 'Numeric') {
          this.profileSummary['Numeric Columns'].count += 1;
        }
        else if (data.attributeSummary.dataType === 'Alphabetic') {
          this.profileSummary['Alphabetic Columns'].count += 1;
        }
        else if (data.attributeSummary.dataType === 'Alphanumeric') {
          this.profileSummary['Alphanumeric Columns'].count += 1;
        }
        this.profileSummary['Total Null Counts'].count += parseInt(data.attributeSummary.null_records, 0);
      }
    });
  }

  createOrEditSource(isEditMode) {
    const dialogRef = this.dialog.open(CreateSourceComponent, {
      width: '1400px',
      data: {
        isEditMode,
        analysis: {
          sourceId: this.source.sourceId,
          source: this.source
        },
        isSourceMode: true
      }
    });

    dialogRef.afterClosed().subscribe(data => {
    });
  }

  isSourceLoaded() {
    return this.source && this.source.sourceDataName;
  }

}
