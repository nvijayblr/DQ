import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit, OnDestroy {

  isLoading = false;

  user: any = {};
  posts: any = [];
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};
  isCurrentUser = false;
  loaderMsg = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authGuardService: AuthGuardService,
    private messageService: MessageService) {
      this.appConfig = appConfig;
    }

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.isCurrentUser = true;
      if (queryParams.id) {
        if (this.userId !== queryParams.id) {
          this.isCurrentUser = false;
        }
        this.userId = queryParams.id;
      }
      this.getSharedPosts();
    });

  }

  getSharedPosts() {
    this.isLoading = true;
    this.loaderMsg = 'Loading community details...';
    this.http.sharedByMe(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.posts = result && result.communityResponse ? result.communityResponse : [];
    }, (error) => {
      this.isLoading = false;
    });
  }

  removePost(post, index) {
    this.isLoading = true;
    this.loaderMsg = 'Removing post from community...';
    this.http.removePost(this.userId, post.achivements[0].id).subscribe((result: any) => {
      this.isLoading = false;
      this.posts.splice(index, 1);
    }, (error) => {
      this.isLoading = false;
    });
  }

  likeUnlikePost(post, isLiked) {
    this.http.likeUnlikePost(this.userId, post.achivements[0].id, isLiked).subscribe((result: any) => {
      if (isLiked) {
        post.likesCount = post.likesCount + 1;
        post.isLiked = true;
      } else {
        post.likesCount = post.likesCount - 1;
        post.isLiked = false;
      }
    }, (error) => {
      this.isLoading = false;
    });

  }

  ngOnDestroy() {
    this.http.cancelGetProfessionalDetails();
  }

}


