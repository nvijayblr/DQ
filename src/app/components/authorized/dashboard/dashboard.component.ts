import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  analysisList = [];
  analyseData = [];
  showAnalysis = false;
  isLoading = false;
  loaderMsg = '';
  role = '';
  isSourceUploaded = false;

  constructor(private http: HttpService, private messageService: MessageService, private auth: AuthGuardService) {
    const analysis = this.messageService.getAnalysis();
    this.analysisList = analysis ? [analysis] : [];
    const role = this.auth.getUserRole().role;
    this.role = role ? role : 'VIEWER';
  }

  ngOnInit() {
  }

  launchAnalysis(analysis) {
    this.showAnalysis = true;
    this.isLoading = true;
    this.loaderMsg = 'Launching analysis...';
    this.http.launchAnalysis(analysis.rules).subscribe((result: any) => {
      this.isLoading = false;
      this.analyseData = result ? result : [];
    }, (error) => {
      this.isLoading = false;
    });
  }

  gotoList() {
    this.showAnalysis = false;
  }

  onSourceCSVSelected(file) {
    const formData: any = new FormData();
    formData.append('file[]', file);
    this.isLoading = true;
    this.isSourceUploaded = false;
    this.loaderMsg = 'Uploading the source cvs...';
    this.http.uploadSourceCSV(formData).subscribe((result: any) => {
      this.isLoading = false;
      this.isSourceUploaded = true;
    }, (error) => {
      this.isLoading = false;
      this.isSourceUploaded = false;
    });
  }

}
