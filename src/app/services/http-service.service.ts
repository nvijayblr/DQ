import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthGuardService } from './auth-guard.service';
import * as env from './../../assets/config/env.json';

@Injectable({ providedIn: 'root' })

export class HttpService  {

  private rootUrl = '';


  private cancelGetPersonalDetailsReq$ = new Subject<void>();
  private cancelGetAccountDetailsReq$ = new Subject<void>();
  private cancelGetProfessionalDetails$ = new Subject<void>();
  private cancelGetContactsList$ = new Subject<void>();
  private cancelGetUserDealsList$ = new Subject<void>();
  private cancelGetAssignedDealsList$ = new Subject<void>();
  private cancelGetUsernameTypeahead$ = new Subject<void>();
  private cancelGetDealsSearch$ = new Subject<void>();
  private cancelGetProfessionsSearch$ = new Subject<void>();
  private cancelGetServicesDetails$ = new Subject<void>();
  private cancelGetUserTasksList$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private authGuardService: AuthGuardService
  ) {
    // this.rootUrl = env.baseUrl;
    this.rootUrl = 'https://l0zcwrxii1.execute-api.us-west-2.amazonaws.com';
  }

  uploadSourceCSV(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/dev/upload`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  uploadReferenceCSV(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/dev/refupload`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getColumnsRules(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/dev/rules`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  launchAnalysis(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/dev/LaunchAnalysis`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  launchAnalysisByKey(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/dev/LaunchAnalysisbyKey`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  saveAnalysis(payload, method) {
    return this.http[method]<any>(`${this.rootUrl}/dev/CreateAnalysis`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  createEditRuleset(payload, method) {
    return this.http[method]<any>(`${this.rootUrl}/dev/CreateRuleSet`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getAllAnalysis() {
    return this.http.get<any>(`${this.rootUrl}/dev/getAllAnalysis`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }



  loginRequest(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}user/login`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  signupRequest(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}users/registration`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // Get user personal details
  getAccountDetails(userId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}users/${userId}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetPersonalDetailsReq())
    );
  }

  public cancelGetPersonalDetailsReq() {
    this.cancelGetPersonalDetailsReq$.next();
  }

  public onCancelGetPersonalDetailsReq() {
    return this.cancelGetPersonalDetailsReq$.asObservable();
  }

  // // Upload Image
  uploadImage(userId, formData): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}user/${userId}/upload`, formData, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // deleteRecord(userId, recordId, path): Observable<any> {
  //   const header: any = this.getAuthHeaders();
  //   return this.http.delete<any>(`${this.rootUrl}userprof/${userId}/${path}/${recordId}`, header).pipe(
  //     tap((res) => {
  //     }),
  //     catchError(err => {
  //       return throwError(err);
  //     }),
  //   );
  // }

  getNotificationsCount(userId): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}user/${userId}/notifications/count`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getNotifications(userId): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}user/${userId}/notifications`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  makeNotificationRead(userId, notificationId): Observable<any> {
    return this.http.put<any>(`${this.rootUrl}user/${userId}/notifications/${notificationId}/status?status=true`, {}).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  resetPassword(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}user/resetpassword`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  generateOTP(phoneno): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}users/generateOtp?phoneno=${phoneno}`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  validateOTP(payload): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}users/validateOtp?phoneno=${payload.phoneno}&otpnum=${payload.otpnum}`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  resedVerifyEmail(email): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}users/email/resend?email=${email}`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  socialLoginRequest(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}api/Register/ExternalLogin`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getAuthHeaders(): any {
    const token = this.authGuardService.getToken();
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    };
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     Authorization: `Bearer ${token}`
    //   })
    // };
    return header;
  }


}
