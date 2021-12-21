import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 
@Injectable()
export class DataDrivenService {
    private profile = new BehaviorSubject<any>(null);
    private DQM = new BehaviorSubject<any>(null);
 
    setProfileSource(source: any) {
        this.profile.next(source);
    }

    getProfileSource(): Observable<any> {
        return this.profile.asObservable();
    }

    setDQMSource(source: any) {
        this.DQM.next(source);
    }

    getDQMSource(): Observable<any> {
        return this.DQM.asObservable();
    }

    clearData() {
        this.profile.next(null);
        this.DQM.next(null);
    }
 
   
}