import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { HttpService } from '../../services/http-service.service';
import { DataDrivenService } from './data-driven.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { SocialAuthService } from 'angularx-social-login';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.scss']
})
export class DataDrivenComponent implements OnInit {
  subscription: Subscription;
  initPFSource: any;
  initDQMSource: any;
  menuList: Array<any> = [{
    name: 'Dashboard',
    icon: 'fa-table',
    route: 'dashboard',
    children: []
  }, {
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
    route: 'data-cleaning',
    children: []
  }, {
    name: 'Reference Data',
    icon: 'fa-server',
    route: 'reference-data',
    children: []
  }
  ];

  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  selectedSource: any = {};
  appConfig: any = {};
  user: any = {};

  hasChild = (_: number, node) => !!node.children && node.children.length > 0;

  constructor(private http: HttpService,
    private ds: DataDrivenService,
    private route: ActivatedRoute,
    private authGuardService: AuthGuardService,
    private socialAuthService: SocialAuthService,
    private router: Router) {

    this.subscription = this.ds.getRefreshMenu().subscribe(data => {
      data = data || {};
      if (data.menuIndex === 0) {
        this.initPFSource = data.source;
        this.getProfileSource();
      } else if (data.menuIndex === 1) {
        this.initDQMSource = data.source;
        this.getDQMSource();
      } else if (data.menuIndex === 2) {
        this.getCleaningSource();
      } else if (data.menuIndex === 3) {
        this.getReferenceData();
      }
    });


  }

  ngOnInit() {
    this.getProfileSource();
    this.getDQMSource();
    this.getCleaningSource();
    this.getReferenceData();
    this.setUserDetail();
  }

  setUserDetail() {
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.appConfig = appConfig;
    if (!this.user.rights) {
      this.logout();
    }
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

  getCleaningSource() {
    this.http.getCleanSource().subscribe((result: any) => {
      this.getCleaningSourceList(result.SourceDetailsList || []);
    });
  }

  getReferenceData() {
    this.http.getDBCollections({ client_url: '' }).subscribe((result: any) => {
      this.getReferenceDataList(result.Cluster_Contents || {});
    });
  }

  getProfileSourceList(list) {
    let categoryObject = {}, item: any, initSource: any, openCat: any,
      route = this.menuList[1].route;
    this.menuList[1].children = [];
    list.forEach((source, index) => {
      if (!categoryObject[source.sourceCategory]) {
        categoryObject[source.sourceCategory] = {
          name: source.sourceCategory,
          icon: 'fa-folder-o',
          children: []
        };
      }
      item = {
        name: source.sourceDataName,
        id: source.sourceId,
        source: source,
        route: route
      };
      categoryObject[source.sourceCategory].children.push(item);
      if (!initSource && (this.initPFSource && (source.sourceId == this.initPFSource.sourceId))) {
        initSource = item;
        openCat = categoryObject[source.sourceCategory];
      }
    });
    for (let key of Object.keys(categoryObject)) {
      this.menuList[1].children.push(categoryObject[key]);
    }
    this.dataSource.data = this.menuList;
    this.treeControl.dataNodes = this.menuList;
    if (initSource) {
      this.loadSourceProfile(initSource);
    }
  }

  getDQMSourceList(list) {
    let categoryObject = {}, source: any, initSource: any, openCat: any,
      route = this.menuList[2].route;
    this.menuList[2].children = [];
    list.forEach((item, index) => {
      if (item.source) {
        if (!categoryObject[item.source.sourceCategory]) {
          categoryObject[item.source.sourceCategory] = {
            name: item.source.sourceCategory,
            icon: 'fa-folder-o',
            children: []
          };
        }
        source = {
          name: item.source.sourceDataName,
          id: item.sourceId,
          source: item,
          route: route
        };
        categoryObject[item.source.sourceCategory].children.push(source);
        if (!initSource && (this.initDQMSource && (item.sourceId == this.initDQMSource.sourceId))) {
          //source.isUploaded = this.initDQMSource.isUploaded;
          initSource = source;
          openCat = categoryObject[source.sourceCategory];
        }
      }
    });
    for (let key of Object.keys(categoryObject)) {
      this.menuList[2].children.push(categoryObject[key]);
    }
    this.dataSource.data = JSON.parse(JSON.stringify(this.menuList));
    if (initSource) {
      this.loadSourceProfile(initSource);
    }
    setTimeout(() => (this.treeControl.expand(this.treeControl.dataNodes[2])), 1000);
  }

  getReferenceDataList(list) {
    let categoryObject = {},
      route = this.menuList[4].route;
    this.menuList[4].children = [];
    for (let key in list) {
      if (!categoryObject[key]) {
        categoryObject[key] = {
          name: key,
          icon: 'fa-folder-o',
          children: []
        }
      }
      list[key].forEach(item => {
        categoryObject[key].children.push({
          name: item,
          id: item,
          key: key,
          route: route
        })
      });
    }
    for (let key of Object.keys(categoryObject)) {
      this.menuList[4].children.push(categoryObject[key]);
    }
    this.dataSource.data = JSON.parse(JSON.stringify(this.menuList));
  }

  getCleaningSourceList(list) {
    let item, categoryObject = {}, log,
      route = this.menuList[3].route;
    this.menuList[3].children = [];
    list.forEach((source) => {
      if (!categoryObject[source.sourceCategory]) {
        categoryObject[source.sourceCategory] = {
          name: source.sourceCategory,
          icon: 'fa-folder-o',
          children: []
        };
      }
      item = {
        name: source.sourceDataName,
        id: source.sourceId,
        source: source,
        route: route
      };
      categoryObject[source.sourceCategory].children.push(item);
      if (source.CleanedFilesLog && source.CleanedFilesLog.length > 0) {
        source.CleanedFilesLog.forEach((file) => {
          log = {
            name: file.sourceDataName,
            id: file.cleanSourceId,
            source: source,
            cleanLogFile: file,
            route: route,
            icon: 'fa-download'
          };
          categoryObject[source.sourceCategory].children.push(log);
        });
      }
    });
    for (let key of Object.keys(categoryObject)) {
      this.menuList[3].children.push(categoryObject[key]);
    }
    this.dataSource.data = JSON.parse(JSON.stringify(this.menuList));
  }

  loadSourceProfile(source) {
    this.router.navigate([source.route], { relativeTo: this.route });
    if (source.id) {
      this.selectedSource = source;
      switch (source.route) {
        case this.menuList[1].route:
          this.ds.setProfileSource(this.selectedSource.source);
          break;
        case this.menuList[2].route:
          this.ds.setDQMSource(this.selectedSource.source);
          break;
        case this.menuList[3].route:
          this.ds.setCleaningSource(this.selectedSource);
          break;
        case this.menuList[4].route:
          this.ds.setReferenceData(this.selectedSource);
          break;
      }
    }
    this.treeControl.expand(this.treeControl.dataNodes[0]);
  }

  check(node) {
    this.expandToNode(this.menuList, this.menuList[2].children[0].children[0].name);
  }

  expandToNode(data: any, name: string): any {
    data.forEach(node => {
      if (node.children && node.children.find(c => c.name === name)) {
        this.treeControl.expand(node);
        this.expandToNode(this.treeControl.dataNodes, node.name);
      }
      else if (node.children && node.children.find(c => c.children)) {
        this.expandToNode(node.children, name);
      }
    });
  }

  logout() {
    const userSession = this.authGuardService.getLoggedUser();
    if (userSession.isSocial) {
      this.socialAuthService.signOut();
    }
    localStorage.removeItem('dq_token');
    this.router.navigate([`/login`]);
  }

}