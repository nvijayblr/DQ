import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpService } from './services/http-service.service';
import { CommonService } from './services/common.service';
import { MessageService } from './services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('hamburgerNav', {static: true}) hamburgerNav: MatSidenav;

  categories = [];
  isLoading = true;
  commonSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    public common: CommonService,
    private messageService: MessageService) {
      this.initCategories();
  }

  ngOnInit() {
    this.commonSub = this.messageService.getCommonMessage().subscribe(message => {
      if (message.topic === 'toggleMobileNav') {
        this.hamburgerNav.open();
      }
    });
  }

  initCategories() {

    // this.isLoading = true;
    // this.http.getCategories().subscribe((result: any) => {
    //   this.common.setCategories(result ? result : []);
    //   this.categories = result ? result : [];
    //   this.isLoading = false;
    //   this.messageService.sendCommonMessage({topic: 'categoryLoaded', reason: 'categoryLoadedCompleted'});
    // }, (error) => {
    //   this.common.categories = [];
    //   this.isLoading = false;
    // });
  }

  ngOnDestroy() {
    this.commonSub.unsubscribe();
  }

}
