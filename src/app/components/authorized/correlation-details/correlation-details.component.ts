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

   constructor(private messageService: MessageService, private http: HttpService, ) {
   }

  ngOnInit() {
   this.isLoading = true;
   setTimeout(() => {
      const analysis = this.messageService.getSource();
      this.source = analysis.source ? analysis.source : {};
      if (this.source) {
         this.loadCorrelation(this.source);
      }
   }, 10);
  }

  loadCorrelation(source) {
     this.isLoading = true;
     this.loaderMsg = 'Loading Correlation...';
     const payload = {
      sourcepath: source.templateSourcePath
   };
     this.http.getCorrMatrix(payload).subscribe((result: any) => {
      this.coMatrix = result ? result : {};
      this.isLoading = false;
   }, (error) => {
      this.isLoading = false;
   });
  }

}
