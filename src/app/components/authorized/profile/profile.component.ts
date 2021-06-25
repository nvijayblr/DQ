import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  changeUrl: string;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const profileType: string = this.route.snapshot.queryParamMap.get('type');
    console.log(profileType);
    if (profileType === 'profile') {
      this.changeUrl = 'create-profile-data'
    } else {
      this.changeUrl = 'create-source-data'
    }
  }

}
