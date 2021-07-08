import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConnectionTestComponent } from '../../../../../app/shared/connection-test/connection-test.component';

@Component({
  selector: 'app-oracle',
  templateUrl: './oracle.component.html',
  styleUrls: ['./oracle.component.scss']
})
export class OracleComponent implements OnInit {
  roleForm: FormGroup;
  dataTable: any = {};
  testConnectivity: any = {};
  schema: any = {};
  isLoading = false;
  constructor( private fb: FormBuilder, private router: Router, public dialog: MatDialog,private http: HttpService,) { }

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


  getConnectionSchema() {
      this.roleForm.markAllAsTouched();
      if (!this.roleForm.valid) {
        return;
      }
    this.dataTable = {
      host: this.roleForm.controls.host.value,
      port: this.roleForm.controls.port.value,
      dbName: this.roleForm.controls.databaseName.value,
      userName: this.roleForm.controls.userName.value,
      password: this.roleForm.controls.password.value,
    }
    localStorage.setItem('dataTable', JSON.stringify(this.dataTable));
      const payload = {
        host: this.roleForm.controls.host.value,
        port: this.roleForm.controls.port.value,
        dbName: this.roleForm.controls.databaseName.value,
        userName: this.roleForm.controls.userName.value,
        password: this.roleForm.controls.password.value,
       }
       this.http.getConnectionSchema(payload).subscribe((result: any) => {
         this.schema = result ? result : {};
         localStorage.setItem('schema', JSON.stringify(this.schema));
         this.router.navigate([`auth/catalog/sources`]);
      }, (error) => {
        this.schema = {};
      });
    }
    
  getTestConnectivity() {
    const payload = {
      host: this.roleForm.controls.host.value,
      port: this.roleForm.controls.port.value,
      dbName: this.roleForm.controls.databaseName.value,
      userName: this.roleForm.controls.userName.value,
      password: this.roleForm.controls.password.value,
     }
     this.isLoading = true;
     this.http.testConnectivity(payload).subscribe((result: any) => {
       console.log('RESULT', result);
      this.testConnectivity = result ? result : {};
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.dataTable = {};
    });
  }
  
  openDialog(): void {
    this.getTestConnectivity();
      const dialogRef = this.dialog.open(ConnectionTestComponent, {
        width: '450px',
        data: this.testConnectivity,        
      });
  
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log(result)        
      // });
    }

}
