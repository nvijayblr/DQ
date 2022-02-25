import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataDrivenService {
    private profile = new BehaviorSubject<any>(null);
    private DQM = new BehaviorSubject<any>(null);
    private cleaningData = new BehaviorSubject<any>(null);
    private refreshMenu = new BehaviorSubject<any>(null);
    private referenceData = new BehaviorSubject<any>(null);

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

    setCleaningSource(source: any) {
        this.cleaningData.next(source);
    }

    getCleaningSource(): Observable<any> {
        return this.cleaningData.asObservable();
    }

    setReferenceData(source: any) {
        this.referenceData.next(source);
    }

    getReferenceData(): Observable<any> {
        return this.referenceData.asObservable();
    }

    setRefreshMenu(source: any, index: any, fromOrginSource: any = '') {
        this.refreshMenu.next({
            menuIndex: index,
            source: source,
            fromOrginSource: fromOrginSource,
        });
    }

    getRefreshMenu(): Observable<any> {
        return this.refreshMenu.asObservable();
    }

    clearData() {
        this.profile.next(null);
        this.DQM.next(null);
    }
}