import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConnectionTestComponent } from '../../../../../app/shared/connection-test/connection-test.component';

@Component({
  selector: 'app-oracle',
  templateUrl: './oracle.component.html',
  styleUrls: ['./oracle.component.scss']
})
export class OracleComponent implements OnInit {
  roleForm: FormGroup;
  data: any = {};
  constructor( private fb: FormBuilder, private router: Router, public dialog: MatDialog,) { }

  ngOnInit() {
    this.roleForm = this.fb.group({
      customName: ['', [Validators.required]],
      host: ['', [Validators.required]],
      port: ['', [Validators.required]],
      databaseName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberPassword :['Yes', []],
    });
  }

     saveRole() {
      this.roleForm.markAllAsTouched();
      if (!this.roleForm.valid) {
        return;
      }
       this.data = {
         customName: this.roleForm.controls.customName.value,
         host: this.roleForm.controls.host.value,
         port: this.roleForm.controls.port.value,
         databaseName: this.roleForm.controls.databaseName.value,
         userName: this.roleForm.controls.userName.value,
         password: this.roleForm.controls.password.value,
         rememberPassword: this.roleForm.controls.rememberPassword.value,
       }
       //

       console.log('DATA', this.data);
       this.router.navigate([`auth/catalog/sources`]);
      
     }
  
     openDialog(): void {
      const dialogRef = this.dialog.open(ConnectionTestComponent, {
        width: '450px',
        data : {name : 'krishna'}
      });
  
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log(result)        
      // });
    }

}
