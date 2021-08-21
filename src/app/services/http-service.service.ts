import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError, Subject, forkJoin, of, BehaviorSubject, from} from 'rxjs';
import { delay, concatMap, mergeMap } from 'rxjs/operators';
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
  // /api/GetTimeResultsfromDb

  launchAnalysisByKey(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/LaunchAnalysisbyKeyfromDb`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getAnalysisByTime(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/GetTimeResultsfromDb`, payload).pipe(
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

   // Profile APIs
  
   saveSourceProfile(payload, method): Observable<any> {
    return this.http[method]<any>(`${this.rootUrl}/api/configureSourcePC`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  saveEditSourceProfile(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/EditSourcePC`, payload).pipe(
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

  getsourceCategory() {
    return this.http.get<any>(`${this.rootUrl}/api/getsourceCategory`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getdataOwner() {
    return this.http.get<any>(`${this.rootUrl}/api/getAllDataOwner`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getProfileSource() {
    return this.http.get<any>(`${this.rootUrl}/api/GetAllProfiledBSourceList`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getCleanSource() {
    return this.http.get<any>(`${this.rootUrl}/api/GetAllCleandBSourceList`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  saveCleanSource(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/clean_data_save`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getProfileView(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/df_to_json_preview`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  deleteSource(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/EditSourcePC`, payload).pipe(
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

  getNullCounts(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/nan_df_preview`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getDomainTypeIdentity(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/DomainType_Identifier`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // Oracle DB API

  testConnectivity(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/testconnectivity`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }));   
  }

  getConnectionSchema(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/getconnectionSchema`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }));   
  } 
  
  getconnectionTables(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/getconnectionTables`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }));   
  }

  getDataframeFromTable(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/getdataframeFromTable`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }));   
  }

  profileConfigureSourceForOracle(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/configureSourceForOracle`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }));   
  }

  getSearchCollections (payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/MongoCluster_query`, payload).pipe(
      tap((res : any) => {
      }),
      catchError(err => {
        return throwError(err);
      }));   
  }

  getDBCollections(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/GetDB_Collections`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }));   
  }

  getDBPreview(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/MongoDB_Collection_Preview`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  saveMangoDbCollection(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/MongoDB_Collection_Save`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  copyMangoDbCollection(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/MongoDB_Collection_Copy`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  saveGlobalDbCollection(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/Save_MongoDB_GlobalRef`).pipe(
      tap((res) => {

      }),
      catchError(err => {
        return throwError(err);
      })
    )
  }

  getMongoDBClientHistory(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/mongoDB_ClientHist_log`).pipe(
      tap((res) => { }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  getMongoDBSaveLog(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/mongoDB_Savelog`).pipe(
      tap((res) => { }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  saveSourceMangoDB(payload, method): Observable<any> {
    return this.http[method]<any>(`${this.rootUrl}/api/createNewMongoDBSource`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  viewDomainAnalysis(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/MongoCluster_query`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );

  }

  getSourceResults(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/GetSourceResults`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }
  public results$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  startRequests(payload): void {
    let requests = [];
    payload.forEach((name) => {
      requests.push(this.http.post<any>(`${this.rootUrl}/api/MongoCluster_query`, {query: name}))
    })
    from(requests).pipe(
      concatMap((request) => request.pipe(delay(10)))
    ).subscribe((res) => {
      this.results$.next(this.results$.getValue().concat(res))
    })

  }

  public getStartRequests() {
    return this.results$.asObservable();
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

  getCategoryList(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/getAllUserCategory`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  createEditCategory(payload, mode): Observable<any> {
    return this.http[mode === 'create' ? 'post' : 'put'](`${this.rootUrl}/api/createUserCategory`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    ) as any;
  }

  getSourceCategoryList(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/getsourceCategory`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  createEditSourceCategory(payload, mode): Observable<any> {
    return this.http[mode === 'create' ? 'post' : 'put'](`${this.rootUrl}/api/createsourceCategory`, payload).pipe(
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

  getCleanedLogs(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/cleandb_log_query`, payload).pipe(
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

  getRightsList(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/getAllRights`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  getFrequencyList(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/getfrequency`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  createEditFrequency(payload, mode): Observable<any> {
    return this.http[mode === 'create' ? 'post' : 'put'](`${this.rootUrl}/api/createfrequency`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    ) as any;
  }


  getMultisourceList(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/api/getmultisource`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  createEditMultisource(payload, mode): Observable<any> {
    return this.http[mode === 'create' ? 'post' : 'put'](`${this.rootUrl}/api/createmultisource`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    ) as any;
  }


  imputeColumnsReq(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/data_impute`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  dataRemovePreviewReq(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/data_remove_preview`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  deleteColumnsRowsReq(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/data_remove`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  deleteDuplicatesReq(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/show_remove_duplicates`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getMaskAnalysisView(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/maskAnalysis_query`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getFrequencyView(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/cat_col_preview`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getProfilePreview(payload, type): Observable<any> {
    let typeUrl = 'show_remove_duplicates';
    if (type === 'duplicate') {
      typeUrl = 'show_remove_duplicates';
    }
    if (type === 'mask') {
      typeUrl = 'maskAnalysis_query';
    }
    if (type === 'nan') {
      typeUrl = 'nan_df_preview';
    }
    if (type === 'data_remove') {
      typeUrl = 'data_remove_preview';
    }
    return this.http.post<any>(`${this.rootUrl}/api/${typeUrl}`, payload).pipe(
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

  makeNotificationRead(payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/editNotificationStatus`, payload).pipe(
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
