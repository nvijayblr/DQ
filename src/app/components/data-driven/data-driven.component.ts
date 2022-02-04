import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { HttpService } from '../../services/http-service.service';
import { DataDrivenService } from './data-driven.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.scss']
})
export class DataDrivenComponent implements OnInit {
  subscription: Subscription;
  menuList: Array<any> = [
    {
      name: 'Data Profiling',
      icon: 'fa-qrcode',
      route: 'data-profile',
      children: []

    }, {
      name: 'Data Quality Monitoring',
      icon: 'fa-object-group',
      route: 'data-quality-monitoring',
      children: []

    }, {
      name: 'Data Cleaning',
      icon: 'fa-recycle',
      children: []
    }, {
      name: 'Reference Data',
      icon: 'fa-server',
      children: []
    }
  ];

  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  selectedSource: any = {};

  hasChild = (_: number, node) => !!node.children && node.children.length > 0;

  constructor(private http: HttpService,
    private ds: DataDrivenService,
    private route: ActivatedRoute,
    private router: Router) {

    this.subscription = this.ds.getRefresh().subscribe(data => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.getProfileSource();
    this.getDQMSource();
  }

  getDQMSource() {
    this.http.getSourcesDetails().subscribe((result: any) => {
      this.getDQMSourceList(result.Analysis || []);
    });
  }

  getProfileSource() {
    this.http.getProfileSource().subscribe((result: any) => {
      this.getProfileSourceList(result.SourceDetailsList || []);
    });
  }



  getProfileSourceList(list) {
    let categoryObject = {},
      route = this.menuList[0].route;
    this.menuList[0].children = [];
    list.forEach((source, index) => {
      if (!categoryObject[source.sourceCategory]) {
        categoryObject[source.sourceCategory] = {
          name: source.sourceCategory,
          icon: 'fa-folder-o',
          children: []
        };
      }
      categoryObject[source.sourceCategory].children.push({
        name: source.sourceDataName,
        id: source.sourceId,
        source: source,
        route: route
      });
    });
    for (let key of Object.keys(categoryObject)) {
      this.menuList[0].children.push(categoryObject[key]);
    }
    this.dataSource.data = this.menuList;
  }

  getDQMSourceList(list) {
    let categoryObject = {},
      route = this.menuList[1].route;
    this.menuList[1].children = [];
    list.forEach((item, index) => {
      if (item.source) {
        if (!categoryObject[item.source.sourceCategory]) {
          categoryObject[item.source.sourceCategory] = {
            name: item.source.sourceCategory,
            icon: 'fa-folder-o',
            children: []
          };
        }
        categoryObject[item.source.sourceCategory].children.push({
          name: item.source.sourceDataName,
          id: item.sourceId,
          source: item,
          route: route
        });
      }
    });
    for (let key of Object.keys(categoryObject)) {
      this.menuList[1].children.push(categoryObject[key]);
    }
    this.dataSource.data = JSON.parse(JSON.stringify(this.menuList));
  }

  loadSourceProfile(source) {
    this.router.navigate([source.route], { relativeTo: this.route });
    this.selectedSource = source;
    if (source.route === this.menuList[0].route) {
      this.ds.setProfileSource(this.selectedSource.source);
    }
    if (source.route === this.menuList[1].route) {
      this.ds.setDQMSource(this.selectedSource.source);
    }
  }

}