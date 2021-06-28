import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  changeUrl: string;
  profileType:string;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.profileType  = this.route.snapshot.queryParamMap.get('type');
    console.log(this.profileType);
    if (this.profileType === 'profile') {
      this.changeUrl = 'create-profile-data'
    } else if (this.profileType === 'clean') {
      this.changeUrl = 'create-profile-data'
    }
    else {
      this.changeUrl = 'create-source-data'
    }
  }

}
