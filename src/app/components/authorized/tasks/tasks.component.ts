import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../../services/http-service.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { MessageService } from '../../../services/message.service';
import { appConfig } from '../../../app.config';
import { TasksAddEditComponent } from './tasks-add-edit/tasks-add-edit.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit, OnDestroy {

  isLoading = true;
  loadingMsg = 'Loading tasks...';
  user: any = {};
  userId: any = '';
  isUserLoggedIn = false;
  isEditMode = false;
  appConfig: any = {};
  dealStatus = '';
  tasksList = [];
  selectedDate = new Date();
  
  constructor(
    private dialog: MatDialog,
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
    this.getUserTasks();
  }

  getUserTasks() {
    this.isLoading = true;
    this.loadingMsg = 'Loading tasks...';
    this.http.getUserTasksList(this.userId).subscribe((result: any) => {
      this.isLoading = false;
      this.tasksList = result;
    }, (error) => {
      this.isLoading = false;
    });
  }

  showCreateEditTask(tasks = {}) {
    const dialog = this.dialog.open(TasksAddEditComponent, {
      disableClose: true,
      panelClass: 'tasks-dialog',
      data: tasks
    });
    dialog.afterClosed().subscribe(result => {
      if (!result.isCancelled) {
        this.getUserTasks();
      }
    });
  }

  deleteDeals(deals, index) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete task',
        message: `Are you sure want to delete the task?`,
        cancelLable: 'No',
        okLable: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe(action => {
      if (action === 'ok') {
        this.isLoading = true;
        this.loadingMsg = 'Deleting taks...';
        this.http.deleteUserTask(this.userId, deals.id).subscribe((result: any) => {
          this.isLoading = false;
          this.tasksList.splice(index, 1);
        }, (error) => {
          this.isLoading = false;
        });
      } else {
      }
    });
  }

  selectedDateChange(event) {
    console.log(event);
    this.selectedDate = event;
  }

  ngOnDestroy() {
    this.http.cancelGetUserTasksList();
  }
}
