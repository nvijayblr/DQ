import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private messageService: MessageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe( tap(() => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.messageService.sendCommonMessage({topic: 'logout', reason: 'Unauthorized'});
            }
            return;
          }
        })
      );
    }
}
