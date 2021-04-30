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

  constructor(
    private http: HttpClient,
    private authGuardService: AuthGuardService
  ) {
    // this.rootUrl = env.baseUrl;
    // Prod
    this.rootUrl = 'https://zzv4j5kpjh.execute-api.us-west-2.amazonaws.com/dev';
    // Dev
    this.rootUrl = 'http://localhost';
  }

  uploadSourceCSV(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/upload`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  uploadReferenceCSV(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/refupload`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getColumnsRules(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/rules`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  launchAnalysis(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/LaunchAnalysis`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  launchAnalysisDetails(id): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/getLaunchResult?id=${id}`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  launchAnalysisByKey(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/LaunchAnalysisbyKeyfromDb`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }
  launchDelayAnalysisByKey(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/DelayAnalysis`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  launchDelayAnalysisByAirport(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/DelayAnalysisbyAirPortnew`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  saveAnalysis(payload, method) {
    return this.http[method]<any>(`${this.rootUrl}/CreateAnalysis`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  createEditRuleset(payload, method) {
    return this.http[method]<any>(`${this.rootUrl}/api/CreateRuleSet`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getAllAnalysis() {
    return this.http.get<any>(`${this.rootUrl}/getAllAnalysis`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // New APIs

  saveSource(payload, method): Observable<any> {
    return this.http[method]<any>(`${this.rootUrl}/api/configureSource`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  uploadSource(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/uploadSource`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  getSources(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/getAllSources`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getSourcePreview(sourceId): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/getSourcePreview?sourceId=${sourceId}`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getPreview(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/getPreview`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getProfiles(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/profile`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getCorrMatrix(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/getCorrMatrix`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // Users Management
  loginRequest(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/signin`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  getUsersList(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/getUsers`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  createEditUser(payload, mode): Observable<any> {
    return this.http[mode === 'create' ? 'post' : 'put'](`${this.rootUrl}/api/createuser`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    ) as any;
  }


  getDepartmentsList(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/getDept`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  createEditDepartment(payload, mode): Observable<any> {
    return this.http[mode === 'create' ? 'post' : 'put'](`${this.rootUrl}/api/createDept`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    ) as any;
  }

  getRolesList(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/getRoles`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  createEditRole(payload, mode): Observable<any> {
    return this.http[mode === 'create' ? 'post' : 'put'](`${this.rootUrl}/api/createRole`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    ) as any;
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
