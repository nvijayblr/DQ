import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(
        private dialog: MatDialog
    ) { }

    public showAlert(message) {
        this.openDialog(message, 'Alert');
    }

    public showError(message) {
        this.openDialog(message, 'Error');
    }

    public showWarning(message) {
        this.openDialog(message, 'Warning');
    }


    public openDialog(message, title) {
        this.dialog.open(AlertDialogComponent, {
            data: {
                title: title,
                message: message
            }
        });
    }

}