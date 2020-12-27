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
    this.rootUrl = env.baseUrl;
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

  // Get user personal details - grouping
  getPersonalDetails(userId, isGrouping = false): Observable<any> {
    const header: any = this.getAuthHeaders();
    let url = `${this.rootUrl}userper/${userId}`;
    if (isGrouping) {
      url = `${this.rootUrl}userper/grouping/${userId}`;
    }
    return this.http.get<any>(url, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetAccountDetailsReq())
    );
  }

  public cancelGetAccountDetailsReq() {
    this.cancelGetAccountDetailsReq$.next();
  }

  public onCancelGetAccountDetailsReq() {
    return this.cancelGetAccountDetailsReq$.asObservable();
  }

  // Save user personal details
  savePersonalDetails(userId, personal): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}userper/${userId}`, personal, header).pipe(
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

  // Save user personal details
  saveAccountDetails(userId, user): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.put<any>(`${this.rootUrl}users/${userId}`, user, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // Save user personal details
  updateNotificationPref(userId, type, state): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.put<any>(`${this.rootUrl}user/${userId}/notifications?${type}=${state}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // Upload Image
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


  // Get user professional details - grouping
  getProfessionalDetails(userId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}userprof/${userId}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetProfessionalDetails())
    );
  }

  public cancelGetProfessionalDetails() {
    this.cancelGetProfessionalDetails$.next();
  }

  public onCancelGetProfessionalDetails() {
    return this.cancelGetProfessionalDetails$.asObservable();
  }

  // Save user professional details
  saveProfessionalDetails(userId, professional): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}userprof/${userId}`, professional, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  deleteRecord(userId, recordId, path): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.delete<any>(`${this.rootUrl}userprof/${userId}/${path}/${recordId}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  // Get user services details
  getServicesDetails(userId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}user/${userId}/products`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetServicesDetails())
    );
  }

  public cancelGetServicesDetails() {
    this.cancelGetServicesDetails$.next();
  }

  public onCancelGetServicesDetails() {
    return this.cancelGetServicesDetails$.asObservable();
  }

  // Save user services details
  saveServicesDetails(userId, professional): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}user/${userId}/products`, professional, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  // Get user contacts
  getContactsList(userId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}user/${userId}/contacts`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetContactsList())
    );
  }

  public cancelGetContactsList() {
    this.cancelGetContactsList$.next();
  }

  public onCancelGetContactsList() {
    return this.cancelGetContactsList$.asObservable();
  }

  // Save user contact
  saveContacts(userId, contact): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.put<any>(`${this.rootUrl}user/${userId}/contacts`, contact, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // delete user contact
  deleteContacts(userId, contactId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.delete<any>(`${this.rootUrl}user/${userId}/contacts/${contactId}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // Import user contacts
  importContacts(userId, formdata): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}user/${userId}/contacts/upload`, formdata, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // Get all the users - admin
  getAllUsersList(): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}admin/users`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetContactsList())
    );
  }

  // delete user - admin
  deleteUser(userId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.delete<any>(`${this.rootUrl}admin/users/${userId}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

    // Import users - admin
    importUsers(userId, formdata): Observable<any> {
      const header: any = this.getAuthHeaders();
      return this.http.post<any>(`${this.rootUrl}admin/user/${userId}/upload`, formdata, header).pipe(
        tap((res) => {
        }),
        catchError(err => {
          return throwError(err);
        }),
      );
    }


  // Get user deals list
  getUserDealsList(userId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}user/${userId}/created/deals`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetUserDealsList())
    );
  }

  public cancelGetUserDealsList() {
    this.cancelGetUserDealsList$.next();
  }

  public onCancelGetUserDealsList() {
    return this.cancelGetUserDealsList$.asObservable();
  }

  getAssignedDealsList(userId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}user/${userId}/assigned/deals`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetAssignedDealsList())
    );
  }

  public cancelGetAssignedDealsList() {
    this.cancelGetAssignedDealsList$.next();
  }

  public onCancelGetAssignedDealsList() {
    return this.cancelGetAssignedDealsList$.asObservable();
  }

  createUserDeals(userId, deals): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}user/${userId}/created/deals`, deals, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  updateUserDeals(userId, deals): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.put<any>(`${this.rootUrl}user/${userId}/created/deals/${deals.id}`, deals, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  deleteUserDeals(userId, dealsId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.delete<any>(`${this.rootUrl}user/${userId}/created/deals/${dealsId}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  activeDeactiveUserDeals(userId, dealsId, status): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.put<any>(`${this.rootUrl}user/${userId}/deals/${dealsId}/activate?active=${status}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  getUsernameTypeahead(username): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}search/users/name/${username}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetUsernameTypeahead())
    );
  }

  public cancelGetUsernameTypeahead() {
    this.cancelGetUsernameTypeahead$.next();
  }

  public onCancelGetUsernameTypeahead() {
    return this.cancelGetUsernameTypeahead$.asObservable();
  }


  getDealsSearch(search): Observable<any> {
    const header: any = this.getAuthHeaders();
    const url = `${this.rootUrl}deals/search?name=${search.q}&location=${search.location}`;
    return this.http.get<any>(url, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetDealsSearch())
    );
  }

  public cancelGetDealsSearch() {
    this.cancelGetDealsSearch$.next();
  }

  public onCancelGetDealsSearch() {
    return this.cancelGetDealsSearch$.asObservable();
  }

  getProfessionsSearch(search): Observable<any> {
    const header: any = this.getAuthHeaders();
    const url = `${this.rootUrl}professional/search?${search.option}=${search.q}&location=${search.location}`;
    return this.http.get<any>(url, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetProfessionsSearch())
    );
  }

  public cancelGetProfessionsSearch() {
    this.cancelGetProfessionsSearch$.next();
  }

  public onCancelGetProfessionsSearch() {
    return this.cancelGetProfessionsSearch$.asObservable();
  }


  // Request the deal
  sendRequestDeal(deal): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}user/request/deals`, deal, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // GET Request the deal
  getDealsRequestors(dealId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}user/request/deals/${dealId}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // GET the deals by Status
  getDealsByStatus(userId, status): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}user/${userId}/deals?status=${status}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // Accept the deal request
  acceptDealsRequest(payload): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}user/accept/deals`, payload, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  rejectDealsRequest(payload): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}user/reject/deals`, payload, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // Update the deal status
  updateDealsStatus(payload): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}user/deals/status`, payload, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  // GET Request the deal
  getDealsHistory(dealId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}user/deals/${dealId}/status`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  // Get user tasks list
  getUserTasksList(userId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.get<any>(`${this.rootUrl}user/${userId}/tasks`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
      takeUntil(this.onCancelGetUserTasksList())
    );
  }

  public cancelGetUserTasksList() {
    this.cancelGetUserTasksList$.next();
  }

  public onCancelGetUserTasksList() {
    return this.cancelGetUserTasksList$.asObservable();
  }

  createUpdateTasks(userId, deals): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.post<any>(`${this.rootUrl}user/${userId}/tasks`, deals, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  deleteUserTask(userId, taskId): Observable<any> {
    const header: any = this.getAuthHeaders();
    return this.http.delete<any>(`${this.rootUrl}user/${userId}/delete/tasks/${taskId}`, header).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

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

  // Community related aps
  shareWithCommunity(userId, payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}users/${userId}/community/share`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  createPost(userId, payload): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}users/${userId}/community/share`, payload).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  removePost(userId, communityId): Observable<any> {
    return this.http.delete<any>(`${this.rootUrl}users/${userId}/community/${communityId}/share`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  likeUnlikePost(userId, communityId, isLiked): Observable<any> {
    return this.http.put<any>(`${this.rootUrl}users/${userId}/community/${communityId}/share?like=${isLiked}`, {}).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  sharedByMe(userId): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}users/${userId}/community/share/me`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  sharedByOthers(userId): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}users/${userId}/community/share/others`).pipe(
      tap((res) => {
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }


  getRecentDeals(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}all/deals`).pipe(
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
