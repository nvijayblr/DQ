import { Injectable, Inject } from '@angular/core';
import { Observable, of} from 'rxjs';
import { CanDeactivate, } from '@angular/router'
import { CreateProfileDataComponent } from '../authorized/create-profile-data/create-profile-data.component';
import {CreateSourceComponent} from '../authorized/create-source/create-source.component';
@Injectable()
export class CanDeactivateContact implements CanDeactivate<CreateProfileDataComponent> {
  canDeactivate(component: CreateProfileDataComponent): Observable<boolean> {
    if (component.analysisForm.dirty) {
      return component.confirmDialog(); 
      //return confirm('are you sure you want to leave this page');
    }
    return of(true);
  }
}

export class CanDeactivateSource implements CanDeactivate<CreateSourceComponent> {
  canDeactivate(component: CreateSourceComponent): Observable<boolean> {
    if (component.analysisForm.dirty) {
      return component.confirmDialog(); 
    }
    return of(true);
  }
}
