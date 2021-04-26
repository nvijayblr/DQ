import { Component, OnInit, OnDestroy, HostListener, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  doLogout() {
    this.router.navigate([`/admin/login`]);
  }
}
