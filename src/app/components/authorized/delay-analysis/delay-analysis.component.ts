import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { query } from '@angular/animations';
import {PageEvent} from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColorDialogComponent } from '../../../shared/color-dialog/color-dialog.component';
import { CompletenessDialogComponent } from '../../../shared/completeness-dialog/completeness-dialog.component';

@Component({
  selector: 'app-delay-analysis',
  templateUrl: './delay-analysis.component.html',
  styleUrls: ['./delay-analysis.component.scss']
})
export class DelayAnalysisComponent implements OnInit {

  isLoading = false;
  isLoadingDetails = false;
  isLoadingDetailsAirport = false;
  loaderMsg = '';
  selectedAnalysis: any = {};
  selectedColumns: any = [];
  selectedCDE: any = '';
  analyseKeyData = [];
  selectedKey = '';

  settings: any = {
    bgSettings: [{
      min: '100',
      max: '100',
      color: 'green',
    }, {
      min: '90',
      max: '100',
      color: 'red',
    }]
  };
  delayAnalysis: any = [];
  delayAnalysisAirport: any = [];

  constructor(
    public dialog: MatDialog,
    private http: HttpService,
    private messageService: MessageService,
    private auth: AuthGuardService,
    private router: Router) {
      const role = this.auth.getUserRole().role;
  }


  ngOnInit() {
    const analysis = localStorage.getItem('selected-analysis');
    if (analysis) {
      this.selectedAnalysis = JSON.parse(analysis);
      console.log(this.selectedAnalysis);
      this.selectedColumns = this.selectedAnalysis.rules[0].selectedColumns;
      if (this.selectedColumns && this.selectedColumns.length) {
        this.selectedCDE = this.selectedColumns[0];
        this.launchDelayAnalysisByKey(this.selectedCDE);
      }
    }
  }

  launchDelayAnalysisByKey(keyname) {
    this.launchDelayAnalysisByAirport(keyname);
    this.isLoadingDetails = true;
    this.selectedKey = keyname;
    this.loaderMsg = 'Launching Delay Analysis...';
    const payload = {
      sourceId: this.selectedAnalysis.sourceId,
      rulesetId: this.selectedAnalysis.rulesetId,
      keyname
    };
    this.delayAnalysis = [];
    this.http.launchDelayAnalysisByKey(payload).subscribe((result: any) => {
      this.delayAnalysis = result;
      this.isLoadingDetails = false;
    }, (error) => {
      this.delayAnalysis = [];
      this.isLoadingDetails = false;
    });
  }

  launchDelayAnalysisByAirport(keyname) {
    this.isLoadingDetailsAirport = true;
    this.selectedKey = keyname;
    const payload = {
      sourceId: this.selectedAnalysis.sourceId,
      rulesetId: this.selectedAnalysis.rulesetId,
      keyname
    };
    this.delayAnalysisAirport = [];
    this.http.launchDelayAnalysisByAirport(payload).subscribe((result: any) => {
      this.delayAnalysisAirport = result;
      this.isLoadingDetailsAirport = false;
    }, (error) => {
      this.delayAnalysisAirport = [];
      this.isLoadingDetailsAirport = false;
    });
  }


  // xLableClicked(event) {
  //   this.launchAnalysisByKey(event.label);
  // }

  gotoDashboard() {
    this.router.navigate(['auth/dashboard']);
  }

  openHighlightSettingsDialog(): void {
    const dialogRef = this.dialog.open(ColorDialogComponent, {
      width: '800px',
      data: this.settings
    });
    dialogRef.afterClosed().subscribe(result => {
      this.settings = result;
    });
  }
}
