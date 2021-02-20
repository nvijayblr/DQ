import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { appConfig } from '../../app.config';
import { HttpService } from '../../services/http-service.service';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-mn-carousel',
  templateUrl: './mn-carousel.component.html',
  styleUrls: ['./mn-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MnCarouselComponent implements OnInit {

  @Input() items = [];
  @Input() title = '';
  @Input() communityShare = false;
  @Input() shareKey = '';

  OwlOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplaySpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 0,
    navSpeed: 700,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    items: 3,
    nav: false,
  };
  isCarouselFor1stTabVisible = false;
  appConfig: any = {};
  isLoading = false;
  loaderMsg = '';
  user: any = {};
  isUserLoggedIn = false;
  userId = '';

  constructor(
    private http: HttpService,
    private authGuardService: AuthGuardService, ) {
    this.appConfig = appConfig;
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
  }

  shareWithCommunity(item) {
    this.isLoading = true;
    this.loaderMsg = 'Sharing the content to your community...';
    const payload = {
      [this.shareKey]: item.id
    };
    // this.http.shareWithCommunity(this.userId, payload).subscribe((result: any) => {
    //   this.isLoading = false;
    // }, (error) => {
    //   this.isLoading = false;
    // });
  }

  ngOnInit() {
  }

}
