import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class MessageService {

    private login = new Subject<any>();
    private message = new Subject<any>();

    sendLoginMessage(message: any) {
        this.login.next(message);
    }

    getLoginMessage(): Observable<any> {
        return this.login.asObservable();
    }

    sendCommonMessage(message: any) {
        this.message.next(message);
    }

    getCommonMessage(): Observable<any> {
        return this.message.asObservable();
    }

}
