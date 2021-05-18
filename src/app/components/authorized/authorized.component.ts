import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';
import { forkJoin } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss']
})
export class AuthorizedComponent implements OnInit {

  isLoading = true;
  constructor(private http: HttpService, private msg: MessageService) { }

  ngOnInit() {
    this.initAppData();
  }

  initAppData() {
    const apiCalls = [];
    apiCalls.push(this.http.getDepartmentsList());
    apiCalls.push(this.http.getMultisourceList());
    apiCalls.push(this.http.getFrequencyList());
    forkJoin(apiCalls).subscribe((result: any) => {
      const departments = result[0].department ? result[0].department : [];
      const deptList = [];
      departments.map(dept => {
        deptList.push({
          label: dept.Display,
          value: dept.Name
        });
      });
      this.msg.setPrefrences('departments', deptList);
      this.msg.setPrefrences('multisource', result[1].multiSourceList ? result[1].multiSourceList : []);
      this.msg.setPrefrences('frequency', result[2].frequencyList ? result[2].frequencyList : []);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }
}
