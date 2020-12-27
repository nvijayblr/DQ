import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { UsersAddEditComponent } from './users-add-edit/users-add-edit.component';
import { ImportUsersDialogComponent } from './import-users-dialog/import-users-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit, OnDestroy {
  
  columnDefs = [{
    headerName: 'Name',
    field: 'fullname',
    resizable: true,
    filter: true,
    width: 300,
    pinned: 'left',
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellRenderer: (params) => {
      const intials = params.value ? params.value.substr(0, 1).toUpperCase() : '';
      return `
        <div class="initials">${intials}</div>
        ${params.value}
      `;
    }
   }, {
    headerName: 'Username',
    field: 'username',
    resizable: true,
    filter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
   }, {
    headerName: 'Eamil',
    field: 'email',
    resizable: true,
    filter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
   }, {
    headerName: 'Eamil Verified',
    field: 'emailVerified',
    resizable: true,
    filter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellRenderer: (params) => {
      if (params.value) {
        return `
          <span class='verified'>VERIFIED</span>
        `;
      }
      return `
        <span class='unverified'>UNVERIFIED</span>
      `;
    }
   }, {
    headerName: 'Phone',
    field: 'phoneno',
    resizable: true,
    filter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
   }, {
    headerName: 'Phone Verified',
    field: 'phonenoVerified',
    resizable: true,
    filter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellRenderer: (params) => {
      if (params.value) {
        return `
          <span class='verified'>VERIFIED</span>
        `;
      }
      return `
        <span class='unverified'>UNVERIFIED</span>
      `;
    }
   }, {
    headerName: 'Password',
    field: 'password',
    resizable: true,
    filter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
   }, {
    headerName: 'Created At',
    field: 'createdAt',
    resizable: true,
    filter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    width: 280,
    cellRenderer: (params) => {
      if (params.value) {
        return moment(params.value).format('MMM DD, YYYY HH:mm:ss');
      }
      return params.value;
    }
   }, {
    headerName: '',
    field: '',
    resizable: false,
    filter: false,
    pinned: 'right',
    floatingFilterComponentParams: { suppressFilterButton: true },
    width: 100,
    cellRendererFramework: ButtonRendererComponent
   },
  ];

  contactsList = [];
  user: any = {};
  userId: any = '';
  isUserLoggedIn = false;

  defaultColDef = {
    sortable: true,
    filter: true
  };
  isLoading = false;
  gridOptions: any = {};

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authGuardService: AuthGuardService,
    private messageService: MessageService
  ) {
    this.gridOptions = {
      context: {
          componentParent: this
      }
    };
  }

  ngOnInit() {
    this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
    this.user = this.authGuardService.getLoggedInUserDetails();
    this.userId = this.user.user_id;
    this.getContactsList();
  }

  getContactsList() {
    this.isLoading = true;
    this.http.cancelGetContactsList();
    this.http.getAllUsersList().subscribe((result: any) => {
      this.isLoading = false;
      this.contactsList = result.content ? result.content : [];
    }, (error) => {
      this.isLoading = false;
      this.contactsList = [];
    });
  }

  deleteContact(contactId) {
    this.isLoading = true;
    this.http.deleteUser(contactId).subscribe((result: any) => {
      this.isLoading = false;
      this.getContactsList();
    }, (error) => {
      this.isLoading = false;
    });
  }

  showCreateContact() {
    const dialog = this.dialog.open(UsersAddEditComponent, {
      disableClose: true,
      panelClass: 'contact-dialog',
      data: {}
    });
    dialog.afterClosed().subscribe(result => {
      if (!result.isCancelled) {
        this.getContactsList();
      }
    });
  }

  showImportContacts() {
    const dialog = this.dialog.open(ImportUsersDialogComponent, {
      disableClose: true,
      panelClass: 'import-contact-dialog',
      data: {}
    });
    dialog.afterClosed().subscribe(result => {
      if (!result.isCancelled) {
        this.getContactsList();
      }
    });

  }

  ngOnDestroy() {
    this.http.cancelGetContactsList();
  }

}


@Component({
  selector: 'app-button-renderer',
  template: `
    <button mat-icon-button (click)="deleteContactClick()" class="small"><mat-icon>delete</mat-icon></button>
  `
  // <button mat-icon-button (click)="editContactClick()" class="small"><mat-icon>edit</mat-icon></button>
})
export class ButtonRendererComponent implements ICellRendererAngularComp, OnDestroy {

  params: any;
  rowData: any = {};
  colDef: any = {};
  selectedGroupId: any = '';
  prodService: any;
  constructor(
    public dialog: MatDialog,
  ) { }

  agInit(params: any): void {
    this.params = params;
    this.rowData = this.params.data;
    this.colDef = this.params.colDef;
  }

  refresh(params?: any): boolean {
    return true;
  }

  editContactClick() {
    const contact = this.params.node.data;
    const dialog = this.dialog.open(UsersAddEditComponent, {
      disableClose: true,
      panelClass: 'contact-dialog',
      data: contact
    });
    dialog.afterClosed().subscribe(result => {
      if (!result.isCancelled) {
        this.params.context.componentParent.getContactsList();
      }
    });
  }

  deleteContactClick() {
    const contact = this.params.node.data;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete user',
        message: `Are you sure want to delete the user?`,
        cancelLable: 'No',
        okLable: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe(action => {
      if (action === 'ok') {
        this.params.context.componentParent.deleteContact(contact.id);
      } else {
      }
    });
  }

  ngOnDestroy() {
  }

}
