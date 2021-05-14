import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { query } from '@angular/animations';
import {PageEvent} from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColorDialogComponent } from '../../../shared/color-dialog/color-dialog.component';
import { CompletenessDialogComponent } from '../../../shared/completeness-dialog/completeness-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as moment from 'moment';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataTableRow } from 'ornamentum';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  @ViewChild('owlCar', { static: false }) owlCar;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public dataTable: any[];
  public row: DataTableRow<any>;

  public stores: any[];

   analyseKeyChartData: any = {};
   analyseKeyData: any = [];
   selectedAnalysis: any = {};
   selectedKey = '';
   uploadId = '';
   showAnalysisByKey = false;
   isLoading = false;
   isLoadingDetails = false;
   loaderMsg = '';
   selectedColumns: any = [];
   selectedCDE: any = '';
   settings: any = {
      bgSettings: [{
         min: '100',
         max: '100',
         color: '#14960b'
      }, {
         min: '90',
         max: '100',
         color: '#ff2900'
      }]
   };

   uploadsHistory: any = [];
   highlightDates: any = [];
   analysisKeys: any = [];
   isLoadChart = false;

   displayedColumns = [];

   OwlCategoryOptions: OwlOptions = {
      loop: false,
      autoplay: false,
      autoplayTimeout: 6000,
      autoplaySpeed: 700,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      margin: 5,
      navSpeed: 700,
      navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
      autoWidth: true,
      nav: false,
      items: 6,
      responsive: {
        0: {
          items: 3,
          center: true,
          loop: true,
        },
        740: {
          items: 5,
          center: false,
          loop: false,
        }
      },
   };

   constructor(
      public dialog: MatDialog,
      private http: HttpService,
      private messageService: MessageService,
      private auth: AuthGuardService,
      private router: Router) {
      this.dataTable = [
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Barneys New York',
              website: 'https://www.barneys.com/'
            },
            {
              storeName: 'J. C. Penney',
              website: 'https://jcp.com/'
            },
            {
              storeName: 'Von Maur',
              website: 'http://www.vonmaur.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Fax',
          retailerType: 'Outdoors Shop',
          productLine: 'Camping Equipment',
          productType: 'Cooking Gear',
          product: 'TrailChef Deluxe Cook Set',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 59628.66,
          quantity: 489,
          grossMargin: 0.34754797,
          id: 10
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Barneys New York',
              website: 'https://www.barneys.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Fax',
          retailerType: 'Outdoors Shop',
          productLine: 'Camping Equipment',
          productType: 'Sleeping Bags',
          product: 'Hibernator Extreme',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 87728.96,
          quantity: 352,
          grossMargin: 0.39814629,
          id: 15
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Barneys New York',
              website: 'https://www.barneys.com/'
            },
            {
              storeName: 'Von Maur',
              website: 'http://www.vonmaur.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Telephone',
          retailerType: 'Outdoors Shop',
          productLine: 'Camping Equipment',
          productType: 'Lanterns',
          product: 'EverGlow Butane',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 6940.03,
          quantity: 109,
          grossMargin: 0.36186587,
          id: 20
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'J. C. Penney',
              website: 'https://jcp.com/'
            },
            {
              storeName: 'Von Maur',
              website: 'http://www.vonmaur.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Fax',
          retailerType: 'Outdoors Shop',
          productLine: 'Mountaineering Equipment',
          productType: 'Safety',
          product: 'Granite Climbing Helmet',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 62464.88,
          quantity: 898,
          grossMargin: 0.24468085,
          id: 25
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'J. C. Penney',
              website: 'https://jcp.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Web',
          retailerType: 'Outdoors Shop',
          productLine: 'Mountaineering Equipment',
          productType: 'Climbing Accessories',
          product: 'Granite Belay',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 19476.8,
          quantity: 296,
          grossMargin: 0.47613982,
          id: 30
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'J. C. Penney',
              website: 'https://jcp.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Web',
          retailerType: 'Outdoors Shop',
          productLine: 'Mountaineering Equipment',
          productType: 'Climbing Accessories',
          product: 'Granite Chalk Bag',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 4621.68,
          quantity: 262,
          grossMargin: 0.51643991,
          id: 35
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'J. C. Penney',
              website: 'https://jcp.com/'
            },
            {
              storeName: 'Barneys New York',
              website: 'https://www.barneys.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Telephone',
          retailerType: 'Outdoors Shop',
          productLine: 'Mountaineering Equipment',
          productType: 'Tools',
          product: 'Granite Axe',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 32870.4,
          quantity: 856,
          grossMargin: 0.49166667,
          id: 40
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'J. C. Penney',
              website: 'https://jcp.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Telephone',
          retailerType: 'Outdoors Shop',
          productLine: 'Personal Accessories',
          productType: 'Knives',
          product: 'Edge Extreme',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 30940.25,
          quantity: 275,
          grossMargin: 0.28895209,
          id: 45
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Barneys New York',
              website: 'https://www.barneys.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Telephone',
          retailerType: 'Outdoors Shop',
          productLine: 'Outdoor Protection',
          productType: 'First Aid',
          product: 'Compact Relief Kit',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 4057.2,
          quantity: 180,
          grossMargin: 0.60070985,
          id: 50
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Stage Stores',
              website: 'https://www.stage.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Telephone',
          retailerType: 'Golf Shop',
          productLine: 'Personal Accessories',
          productType: 'Watches',
          product: 'Kodiak',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 7939.8,
          quantity: 66,
          grossMargin: 0.44272652,
          id: 55
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Stage Stores',
              website: 'https://www.stage.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Web',
          retailerType: 'Golf Shop',
          productLine: 'Personal Accessories',
          productType: 'Eyewear',
          product: 'Inferno',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 12935,
          quantity: 199,
          grossMargin: 0.39374952,
          id: 60
        },
        {
          availability: false,
          availableStores: [],
          retailerCountry: 'United States',
          orderMethodType: 'Web',
          retailerType: 'Golf Shop',
          productLine: 'Personal Accessories',
          productType: 'Knives',
          product: 'Pocket Gizmo',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 866.2,
          quantity: 71,
          grossMargin: 0.59836066,
          id: 65
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Williams Hills',
              website: 'https://williams.h.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Telephone',
          retailerType: 'Golf Shop',
          productLine: 'Golf Equipment',
          productType: 'Irons',
          product: 'Lady Hailstorm Steel Irons',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 16025.28,
          quantity: 32,
          grossMargin: 0.44535634,
          id: 70
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Sendora Mall',
              website: 'https://sendora.com/'
            },
            {
              storeName: 'High Octane',
              website: 'https://high.octane.us/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Web',
          retailerType: 'Golf Shop',
          productLine: 'Golf Equipment',
          productType: 'Woods',
          product: 'Lady Hailstorm Steel Woods Set',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 53082.54,
          quantity: 62,
          grossMargin: 0.44845066,
          id: 75
        },
        {
          availability: false,
          availableStores: [],
          retailerCountry: 'United States',
          orderMethodType: 'Mail',
          retailerType: 'Golf Shop',
          productLine: 'Golf Equipment',
          productType: 'Golf Accessories',
          product: 'Course Pro Umbrella',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 5911.05,
          quantity: 492,
          grossMargin: 0.50059634,
          id: 80
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Stage Stores',
              website: 'https://www.stage.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Web',
          retailerType: 'Department Store',
          productLine: 'Camping Equipment',
          productType: 'Cooking Gear',
          product: 'TrailChef Cup',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 21434.73,
          quantity: 6134,
          grossMargin: 0.75675458,
          id: 85
        },
        {
          availability: false,
          availableStores: [],
          retailerCountry: 'United States',
          orderMethodType: 'Web',
          retailerType: 'Department Store',
          productLine: 'Camping Equipment',
          productType: 'Cooking Gear',
          product: 'TrailChef Utensils',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 11394.39,
          quantity: 609,
          grossMargin: 0.46552646,
          id: 90
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Wen Brother Stores',
              website: 'https://www.wen.com/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Mail',
          retailerType: 'Department Store',
          productLine: 'Camping Equipment',
          productType: 'Sleeping Bags',
          product: 'Hibernator Lite',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 50892.68,
          quantity: 601,
          grossMargin: 0.29145017,
          id: 95
        },
        {
          availability: true,
          availableStores: [
            {
              storeName: 'Soeges Pan',
              website: 'https://www.soeges.us/'
            }
          ],
          retailerCountry: 'United States',
          orderMethodType: 'Mail',
          retailerType: 'Department Store',
          productLine: 'Camping Equipment',
          productType: 'Sleeping Bags',
          product: 'Hibernator Camp Cot',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 150163.09,
          quantity: 1529,
          grossMargin: 0.33560737,
          id: 100
        },
        {
          availability: false,
          availableStores: [],
          retailerCountry: 'United States',
          orderMethodType: 'Telephone',
          retailerType: 'Department Store',
          productLine: 'Camping Equipment',
          productType: 'Packs',
          product: 'Canyon Mule Carryall',
          year: 2012,
          quarter: 'Q1 2012',
          revenue: 26806.92,
          quantity: 388,
          grossMargin: 0.40396584,
          id: 105
        }
     ];

      console.log(this.analyseKeyData);
   }

   ngOnInit() {
      const analysis = localStorage.getItem('selected-analysis');
      if (analysis) {
         this.initAnalysis(JSON.parse(analysis));
     }
   }

   initAnalysis(analysis) {
      console.log(analysis);
      this.selectedAnalysis = analysis;
      this.uploadsHistory = analysis.UploadsHistory ? analysis.UploadsHistory : [];
      const payload = {
         sourceId: analysis.sourceId,
         rulesetId: analysis.rulesetId
      };
      // tslint:disable-next-line: max-line-length
      this.selectedColumns = (this.selectedAnalysis.source && this.selectedAnalysis.source.categorialColumns) ? this.selectedAnalysis.source.categorialColumns : [];
      if (this.selectedColumns && this.selectedColumns.length) {
         this.selectedCDE = this.selectedColumns[0];
         this.validateAnalysis(this.selectedCDE);
      }
      this.analyseKeyData = [];
   }

   validateAnalysis(keyname) {
      const uploadDate = this.selectedAnalysis.uploadDate ? moment(this.selectedAnalysis.uploadDate).format('MM-DD-YYYY') : '';
      const uploadsHistory = this.selectedAnalysis.UploadsHistory ? this.selectedAnalysis.UploadsHistory : [];

      if (!uploadsHistory.length) {
         alert('Please upload the source to launch the analysis.');
         this.gotoDashboard();
         return;
      }

      if (uploadsHistory.length && !uploadDate) {
         alert('Please select the upload date.');
         this.gotoDashboard();
         return;
      }

      if (uploadsHistory.length && uploadDate && !this.selectedAnalysis.highlightDates.includes(uploadDate)) {
         alert('There is no source for selected date.');
         this.gotoDashboard();
         return;
      }

      uploadsHistory.map(history => {
         if (moment(history.uploadDate).format('MM-DD-YYYY') === uploadDate) {
            this.uploadId = history.uploadId;
         }
      });
      this.showAnalysisByKey = true;
      this.isLoadingDetails = true;
      this.selectedKey = keyname;
      this.launchAnalysisByKeyDate(this.selectedKey, this.uploadId);
   }

   launchAnalysisByKeyDate(keyname, uploadId) {
      this.selectedKey = keyname;
      const payload = {
         sourceId: this.selectedAnalysis.sourceId,
         rulesetId: this.selectedAnalysis.rulesetId,
         uploadId,
         keyname
      };
      this.loaderMsg = 'Launching analysis...';
      this.isLoading = true;
      this.isLoadChart = false;
      this.http.launchAnalysisByKey(payload).subscribe((result: any) => {
         this.isLoadingDetails = false;
         if (result.errorCode && result.errorMsg) {
            alert(result.errorMsg);
            this.gotoDashboard();
            return;
         }
         this.analyseKeyData = result ? result : [];
         this.analysisKeys = [];
         const analyseRowItem = (this.analyseKeyData && this.analyseKeyData.length) ? this.analyseKeyData[0] : [];
         const chartData = {
            labels: [],
         };
         Object.keys(analyseRowItem).map(key => {
            this.displayedColumns.push(key);
            if (key !== this.selectedKey) {
               this.analysisKeys.push(key);
               chartData[key] = [];
            }
         });
         this.analyseKeyData.map(data => {
            chartData.labels.push(data[this.selectedKey]);
            this.analysisKeys.map(key => {
               chartData[key].push(data[key]);
            });
         });
         this.analyseKeyChartData = chartData;
         this.isLoadChart = true;
         this.isLoading = false;
      }, (error) => {
         this.isLoading = false;
         this.analyseKeyData = [];
         this.isLoadingDetails = false;
      });
   }

   onRulesetChange(rulesetId) {
      this.selectedAnalysis.rulesetId = rulesetId;
      this.launchAnalysisByKeyDate(this.selectedKey, this.uploadId);
   }

   tapDateCarouselItem(history) {
      this.uploadId = history.uploadId;
      this.launchAnalysisByKeyDate(this.selectedKey, this.uploadId);
   }

   gotoDashboard() {
      this.router.navigate([`auth/dashboard`]);
   }

   openHighlightSettingsDialog(): void {
      const dialogRef = this.dialog.open(ColorDialogComponent, {
         width: '800px',
         data: this.settings
      });
      dialogRef.afterClosed().subscribe(result => {
         if (result) {
            this.settings = result;
         }
      });
   }

   onBarClicked(event) {
      this.showDetails(event.details, event.key, this.selectedKey, event.selectedValue);
   }

   showDetails(details, key, selectedKey, selectedValue) {
      this.dialog.open(CompletenessDialogComponent, {
         width: '95%',
         // height: '95%',
         data: {details : details ? details : [], key, selectedKey, selectedValue, selectedAnalysis: this.selectedAnalysis }
      });
   }

   formatDate(date) {
      return moment(date).format('MMM, DD YYYY');
   }

   onOpenDatePicker(data: any) {
      this.uploadsHistory = data.UploadsHistory ? data.UploadsHistory : [];
      this.highlightDates = [];
      this.uploadsHistory.map(history => {
         this.highlightDates.push(moment(history.uploadDate).format('MM-DD-YYYY'));
      });
      data.highlightDates = this.highlightDates;
   }

   dateClass = (d: Date) => {
      const date = moment(d).format('MM-DD-YYYY');
      return (this.highlightDates.includes(date)) ? 'highlight-dates' : undefined;
   }
}
