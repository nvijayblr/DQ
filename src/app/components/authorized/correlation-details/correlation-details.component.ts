import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from '@angular-slider/ngx-slider';
import { MessageService } from 'src/app/services/message.service';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-correlation-details',
  templateUrl: './correlation-details.component.html',
  styleUrls: ['./correlation-details.component.scss']
})
export class CorrelationDetailsComponent implements OnInit {
   isLoading = true;
   loaderMsg = '';
   source: any = {};
   coMatrix: any = {};
   datatype = 'mixed';
   method = '';

   constructor(private messageService: MessageService, private http: HttpService, ) {
   }

  ngOnInit() {
   this.isLoading = true;
   setTimeout(() => {
      const analysis = this.messageService.getSource();
      this.source = analysis.source ? analysis.source : {};
      if (this.source) {
         this.loadCorrelation(this.source, this.datatype, this.method);
      }
   }, 10);
  }

  changeType(type) {
     if (type === 'numeric') {
         this.method = 'pearson';
      }
     if (type === 'categorical') {
         this.method = 'theils_u';
      }
     if (type === 'mixed') {
         this.method = '';
      }
     this.loadCorrelation(this.source, this.datatype, this.method);
   }

  loadCorrelation(source, type, method) {
     this.isLoading = true;
     this.loaderMsg = 'Loading Correlation...';
     const payload = {
      sourcepath: source.templateSourcePath,
      cols_data_type: type,
      method
   };
     this.http.getCorrMatrix(payload).subscribe((result: any) => {
      this.coMatrix = result ? result : {};
      this.isLoading = false;
   }, (error) => {
      this.isLoading = false;
      this.coMatrix = {};
   });
  }

}
