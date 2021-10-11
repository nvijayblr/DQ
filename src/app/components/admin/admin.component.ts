import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'User Setting',
        icon: 'assignment_ind',
        children: [{
          label: 'Users',
          link: 'users',
          index: 0
        }, {
          label: 'Roles',
          link: 'roles',
          index: 1
        }]
      }, {
        label: 'Setting',
        icon: 'settings',
        children: [{
          label: 'Departments',
          link: 'departments',
          index: 2
        }, {
          label: 'Category',
          link: 'category',
          index: 3
        }, {
          label: 'Source Category',
          link: 'source-category',
          index: 4
        }, {
          label: 'Frequency',
          link: 'frequency',
          index: 5
        }, {
          label: 'Multi Source',
          link: 'multi-source',
          index: 6
        }]
      }
    ];
  }

  ngOnInit() { }

}
