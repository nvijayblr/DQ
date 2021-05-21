function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dq-app\">\r\n  <main class=\"dq-main\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-signup/login/login.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-signup/login/login.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginSignupLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-wrapper\">\r\n   <div class=\"logo-ai\"> <img class=\"login-image\" src=\"assets/images/logo-ai.png\" /> </div>\r\n   <!-- <div class=\"login-top shadow bottom\">\r\n     <img class=\"login-image\" src=\"assets/images/logo.png\" /> \r\n      <h2>Know Your Data</h2>\r\n</div> -->\r\n<div class=\"lft-cnt\">\r\n   <h3>Artificial <br>  intelligence</h3>\r\n   <p>New technology may help scientists decode dolphin communication. Florida-based dolphin researcher Jack Kassewitz and British acoustic engineer John Stuart Reid are analyzing dolphin sounds with an instrument called a CymaScope. The scope has a thin membrane that vibrates as sound passes through it. Then it converts those vibrations into a high-definition image. Kassewitz hopes the unprecedented detail will solve some mysteries.</p>\r\n</div>\r\n\r\n<div class=\"flex-containers login-container top\">\r\n    <!-- <div class=\"title-wrp\">\r\n       <h1 class=\"page-title\">Data Quality Analytics</h1>   \r\n     <img class=\"login-image\" src=\"assets/images/logo.png\" />\r\n     <h3>AI<span>DATADRIVEN</span></h3>\r\n   </div>  -->\r\n   <mat-card class=\"login-card \">\r\n     <!-- <div class=\"logo-wrapper\">\r\n       <h1 class=\"page-title\">DQ Logo</h1>\r\n       <img class=\"logo\" src=\"assets/images/logo-horizontal.svg\" alt=\"DQ\" /> \r\n     </div> -->\r\n     <!-- <h1 class=\"title\">A right <strong>destination for professionals</strong></h1> -->\r\n     <!-- <h1 class=\"title\">Know Your Data</h1> -->\r\n     <div class=\"fade_rule\"></div> \r\n     <h2>Know Your Data <span>Login Here</span></h2>\r\n\r\n     <div mat-dialog-content>\r\n       <mat-error class=\"box-error-msg\" *ngIf=\"errorMessage\">\r\n         {{errorMessage}}\r\n       </mat-error>\r\n       <div class=\"row\" *ngIf=\"!isOtpScreen\">\r\n         <!-- <div class=\"col-md-5\">\r\n           <div class=\"social-btn-wrapper\">\r\n             <button mat-flat-button color=\"primary\" class=\"full-width google-btn\" (click)=\"signInWithGoogle()\">\r\n               <i class=\"fa fa-google\"></i>\r\n               Sign In with Google\r\n             </button>\r\n             <button mat-flat-button color=\"primary\" class=\"full-width facebook-btn\" (click)=\"signInWithFB()\">\r\n               <i class=\"fa fa-facebook\"></i>\r\n               Sign In with Facebook</button>\r\n           </div>\r\n         </div> -->\r\n         <div class=\"col\">\r\n           <form [formGroup]=\"loginForm\" class=\"custom-login-wrapper\">\r\n             <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n               <mat-icon matPrefix>account_circle</mat-icon>\r\n               <input class=\"bdrInput\" matInput placeholder=\"Username\" cdkFocusInitial formControlName=\"userName\" required autocomplete=\"no\">\r\n               <mat-error class=\"wt\">\r\n                 Please provide a valid username.\r\n               </mat-error>\r\n             </mat-form-field>\r\n\r\n             <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n               <mat-icon matPrefix>vpn_key</mat-icon>\r\n               <input class=\"bdrInput\" matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n               <mat-error class=\"wt\">\r\n                 Please provide a valid password\r\n               </mat-error>\r\n             </mat-form-field>\r\n             <div class=\"login-btn-wrpper\">\r\n               <button mat-stroked-button class=\"button3d btnPush btnLightBlue full-width tdBtn\"  (click)=\"doLogin()\"  [disabled]=\"isLoading\" [class.loading]=\"isLoading\">\r\n                 Sign in <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\r\n               </button>\r\n             </div>\r\n\r\n             <!-- <div class=\"account-btn-wrpper\">\r\n               <p>Sign In with <a href=\"javascript: void()\" (click)=\"showHideOTPScreen(true)\">OTP</a></p>\r\n               <p>New to DQ? <a routerLink=\"/signup\">JOIN NOW</a></p>\r\n             </div> -->\r\n\r\n           </form>\r\n         </div>\r\n       </div>\r\n\r\n       <!-- Login with OTP -->\r\n       <div class=\"otp-wrpper page-body\" [hidden]=\"!isOtpScreen\">\r\n         <app-progress-bar [message]=\"loaderMsg\" class=\"page component\" *ngIf=\"isLoading\"></app-progress-bar>\r\n         <p *ngIf=\"isOtpGenerated\">The OTP has been Sent to your phone. Please input the OTP before 5 minutes.</p>\r\n         <form [formGroup]=\"otpForm\" class=\"custom-login-wrapper\" style=\"margin-top: 24px; font-size: 12px;\">\r\n\r\n           <mat-form-field  appearance=\"outline\">\r\n             <mat-icon matPrefix>phone</mat-icon>\r\n             <input matInput (keypress)=\"inputValidation.numericOnly($event)\" maxlength=\"10\" placeholder=\"Your 10 digit mobile number\" cdkFocusInitial formControlName=\"phoneno\" autocomplete=\"off\">\r\n             <mat-error>\r\n               Please provide a valid Phone number.\r\n             </mat-error>\r\n           </mat-form-field>\r\n           \r\n           <div class=\"login-btn-wrpper\" style=\"margin-top: 24px;\" *ngIf=\"!isOtpGenerated\">\r\n             <button mat-raised-button class=\"login-primary-btn\" color=\"primary\" (click)=\"validateUserAndGenerateOtp()\" [disabled]=\"isLoading || otpForm.invalid\" [class.loading]=\"isLoading\">\r\n               Generate OTP?\r\n             </button>\r\n           </div>\r\n           \r\n           <div class=\"login-btn-wrpper\" style=\"text-align: right; margin-top: 6px;\" *ngIf=\"isOtpGenerated\">\r\n             <a href=\"javascript: void()\" (click)=\"validateUserAndGenerateOtp()\">Resent OTP?</a>\r\n           </div>\r\n           \r\n           <mat-form-field  appearance=\"outline\" *ngIf=\"isOtpGenerated\">\r\n             <mat-icon matPrefix>dialpad</mat-icon>\r\n             <input matInput (keypress)=\"inputValidation.numericOnly($event)\" maxlength=\"6\" placeholder=\"One Time Password\" formControlName=\"otpnum\" autocomplete=\"off\" [disabled]=\"!isOtpGenerated\">\r\n           </mat-form-field>\r\n\r\n           <div class=\"login-btn-wrpper\" *ngIf=\"isOtpGenerated\" style=\"margin-top: 24px;\">\r\n             <button mat-raised-button color=\"primary\" class=\"login-primary-btn\" (click)=\"validateOtp()\" \r\n               [disabled]=\"isLoading || (otpForm.invalid || !otpForm.controls.phoneno.value || !otpForm.controls.otpnum.value || otpForm.controls.otpnum.value.length < 6)\" \r\n               [class.loading]=\"isLoading\">\r\n               Verify and Sign in\r\n             </button>\r\n           </div>\r\n\r\n           <div class=\"account-btn-wrpper\">\r\n             <p>Sign In with <a href=\"javascript: void()\" (click)=\"showHideOTPScreen(false)\">USER NAME</a></p>\r\n             <p>New to DQ? <a routerLink=\"/signup\">JOIN NOW</a></p>\r\n           </div>\r\n\r\n         </form>\r\n       </div>\r\n\r\n     </div>\r\n   </mat-card>\r\n </div>\r\n  <div class=\"copyright\">copyright@dq.com</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-signup/signup/signup.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-signup/signup/signup.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginSignupSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"login-wrapper\">\r\n  <div class=\"flex-containers login-container center\">\r\n    <div class=\"title-wrp\">\r\n      <h1 class=\"page-title\">Build Your Network With Real Professionals</h1>\r\n      <img class=\"login-image\" src=\"assets/images/Joinnow-illustration.svg\" />\r\n\r\n    </div>\r\n    <mat-card class=\"login-card \">\r\n      <!-- <div class=\"logo-wrapper\">\r\n        <img class=\"logo\" src=\"assets/images/logo-horizontal.svg\" alt=\"DQ\" />\r\n      </div> -->\r\n      <h1 class=\"title\">A right <strong>destination for professionals</strong></h1>\r\n\r\n      <div mat-dialog-content>\r\n        <mat-error class=\"box-error-msg\" *ngIf=\"errorMessage\">\r\n          {{errorMessage}}\r\n        </mat-error>\r\n        <div class=\"mat-error custom-mat-error\" *ngIf=\"isConfirmPasswordError\">\r\n          Passsword and Confirm Password didn't match.\r\n        </div>\r\n        <div class=\"signup-form-wrapper\" [hidden]=\"isOtpScreen\">\r\n          <div class=\"signup-form\">\r\n            <form [formGroup]=\"signupForm\" class=\"custom-login-wrapper\">\r\n              <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n                <mat-icon matPrefix>account_circle</mat-icon>\r\n                <input matInput placeholder=\"Username\" cdkFocusInitial formControlName=\"username\">\r\n                <mat-error>\r\n                  Please provide a valid username.\r\n                </mat-error>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n                <mat-icon matPrefix>vpn_key</mat-icon>\r\n                <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" (keyup)=\"isConfirmPasswordError=false\">\r\n                <mat-error>\r\n                  Please provide a valid password.\r\n                </mat-error>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n                <mat-icon matPrefix>vpn_key</mat-icon>\r\n                <input matInput type=\"password\" placeholder=\"Confirm Password\" formControlName=\"confirm_password\" (change)=\"isConfirmPasswordError=false\">\r\n                <mat-error>\r\n                  Please provide a valid confirm password.\r\n                </mat-error>\r\n              </mat-form-field>\r\n  \r\n              <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n                <mat-icon matPrefix>email</mat-icon>\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                <mat-error>\r\n                  Please provide a valid Email.\r\n                </mat-error>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n                <mat-icon matPrefix>phone</mat-icon>\r\n                <input matInput (keypress)=\"inputValidation.numericOnly($event)\" placeholder=\"Phone number\" formControlName=\"phoneno\">\r\n                <mat-error>\r\n                  Please provide a valid Phone number.\r\n                </mat-error>\r\n              </mat-form-field>\r\n  \r\n              <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n                <mat-icon matPrefix>account_box</mat-icon>\r\n                <input matInput placeholder=\"Full name\" formControlName=\"fullname\">\r\n                <mat-error>\r\n                  Please provide a valid Full name.\r\n                </mat-error>\r\n              </mat-form-field>\r\n\r\n              <div class=\"btn-wrapper-text\">\r\n                <p>\r\n                  By clicking Agree & Join, you agree to the DQ \r\n                  <a routerLink=\"\">User Agreement</a>, \r\n                  <a routerLink=\"\">Privacy Policy</a>, and <a routerLink=\"\">Cookie Policy</a>.\r\n                </p>\r\n                <div class=\"login-btn-wrpper\">\r\n                  <button mat-raised-button color=\"primary\" (click)=\"doSignup()\" class=\"login-primary-btn\" [disabled]=\"isLoading\" [class.loading]=\"isLoading\">\r\n                    Agree & Join\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"account-btn-wrpper\" style=\"text-align: center;\">\r\n                Already on DQ? <a routerLink=\"/login\">SIGN IN</a>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"otp-wrpper page-body\" [hidden]=\"!isOtpScreen\">\r\n          <app-progress-bar [message]=\"loaderMsg\" class=\"page component\" *ngIf=\"isLoading\"></app-progress-bar>\r\n          <!-- <p><b>Your DQ account has been created successfully. Please verify your mobile number to get the deals and other notifications.</b><br/><br/></p> -->\r\n          <p>The OTP has been Sent to your phone. Please input the OTP before 5 minutes.</p>\r\n          <form [formGroup]=\"otpForm\" class=\"custom-login-wrapper outline\" style=\"margin-top: 24px; font-size: 12px;\">\r\n            <mat-form-field  appearance=\"outline\">\r\n              <mat-label>One Time Password</mat-label>\r\n              <input matInput placeholder=\"One Time Password\" cdkFocusInitial formControlName=\"otpnum\" autocomplete=\"off\">\r\n            </mat-form-field>\r\n            <div class=\"login-btn-wrpper\">\r\n              <button mat-raised-button color=\"primary\" class=\"login-primary-btn\" (click)=\"validateOtp()\" [disabled]=\"isLoading\" [class.loading]=\"isLoading\">\r\n                Verify and Sign in\r\n              </button>\r\n            </div>\r\n            <div class=\"login-btn-wrpper\">\r\n              <button mat-button color=\"primary\" (click)=\"generateOtp()\" [disabled]=\"isLoading\" [class.loading]=\"isLoading\">\r\n                Resend OTP?\r\n              </button>\r\n            </div>\r\n            <div class=\"login-btn-wrpper\">\r\n              <button mat-button color=\"primary\" (click)=\"verifyOTPLater()\" [disabled]=\"isLoading\" [class.loading]=\"isLoading\">\r\n                Verify Later\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/account-details/account-details.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/account-details/account-details.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedAccountDetailsAccountDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"user-wrapper account-details no-padding\">\r\n  <app-progress-bar [message]=\"loaderMsg\" class=\"page component\" *ngIf=\"isLoading\"></app-progress-bar>\r\n  <div class=\"account-heading\">\r\n    <div class=\"flex-item acc-bg\"></div>\r\n\r\n    <div class=\"user-profile-img\">\r\n      <div class=\"profile-pic-small img\" *ngIf=\"user.path\" [ngStyle]=\"{'background-image': 'url(' + appConfig.imgBaseUrl + user.path + ')'}\"></div>\r\n      <h4 class=\"profile-pic-small\" *ngIf=\"!user.path\">\r\n        <mat-icon>account_circle</mat-icon>\r\n      </h4>\r\n      <div class=\"btn-main-right-wrapper\" *ngIf=\"isCurrentUser\">\r\n        <button mat-icon-button routerLink=\"/auth/personal/settings\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  \r\n  </div>\r\n\r\n  <div class=\"account-personal-details\">\r\n    <div class=\"list\">\r\n      <h4>{{user.fullname}}</h4>\r\n\r\n      <h4>\r\n        <span class=\"word-wrap\">{{user.email}} </span>\r\n        <span class=\"verified\" *ngIf=\"user.emailVerified\"><mat-icon>done</mat-icon></span>\r\n        <a class=\"verify-link\" href=\"javascript: void()\" *ngIf=\"!user.emailVerified\" (click)=\"verifyEmail()\">\r\n          Verify\r\n        </a>\r\n      </h4>\r\n\r\n      <h4>\r\n        {{user.phoneno}}\r\n        <span class=\"verified\" *ngIf=\"user.phonenoVerified\"><mat-icon>done</mat-icon></span>\r\n        <a class=\"verify-link\" href=\"javascript: void()\" *ngIf=\"!user.phonenoVerified\" (click)=\"generateOtp()\">\r\n          Verify\r\n        </a>\r\n      </h4>\r\n    </div>\r\n    <div class=\"pro-complete\">\r\n      <p>Profile Completion <span class=\"percent\">{{user.weight}}%</span></p>\r\n      <div class=\"comp-chart-outer\">\r\n        <div class=\"comp-chart\" [ngStyle]=\"{width: user.weight + '%'}\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"otp-wrpper\" *ngIf=\"showVerifyOTP\">\r\n      <form [formGroup]=\"otpForm\" class=\"custom-login-wrapper outline\" style=\"margin-top: 24px; font-size: 12px;\">\r\n        <mat-form-field  appearance=\"outline\">\r\n          <mat-label>One Time Password</mat-label>\r\n          <input matInput placeholder=\"One Time Password\" cdkFocusInitial formControlName=\"otpnum\" autocomplete=\"off\">\r\n        </mat-form-field>\r\n        <div class=\"login-btn-wrpper\">\r\n          <button mat-raised-button color=\"primary\" class=\"login-primary-btn\" (click)=\"validateOtp()\" [disabled]=\"isLoading\" [class.loading]=\"isLoading\">\r\n            Verify\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"flex-containers space-between list stats\">\r\n      <div class=\"text-center right-bd\">\r\n        <label class=\"label\">Likes</label>\r\n        <h4>{{user.likes}}</h4>\r\n      </div>\r\n      <div class=\"text-center right-bd ratting-container\">\r\n        <label class=\"label\" style=\"margin-bottom: 1px;\">Rating</label>\r\n        <star-rating [value]=\"user.rating\" totalstars=\"5\" checkedcolor=\"#b00000\" uncheckedcolor=\"#ccc\" size=\"16px\" readonly=\"true\"></star-rating>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <label class=\"label\">Deals</label>\r\n        <h4>{{user.deals}}</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ag-grid/ag-grid.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ag-grid/ag-grid.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedAgGridAgGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ag-grid-wrapper\">\r\n  <ag-grid-angular\r\n    #agGrid\r\n    style=\"max-width: 100%; height: 100%\"\r\n    class=\"ag-theme-alpine\"\r\n    animateRows\r\n    autoSizeColumns\r\n    headerHeight=\"40\"\r\n    floatingFiltersHeight=\"40\"\r\n    rowHeight=\"30\"\r\n    suppressCellSelection=\"true\"\r\n    [floatingFilter]=\"floatingFilter\"\r\n    [rowData]=\"isLoading ? [] : rowData\"\r\n    [rowHeight]=\"rowHeight\"\r\n    [rowSelection]=\"rowSelection\"\r\n    [suppressRowClickSelection]=\"suppressRowClickSelection\"\r\n    [defaultColDef]=\"defaultColDef\"\r\n    [columnDefs]=\"columnDefs\"\r\n    [pagination]=\"true\"\r\n    [paginationPageSize]=\"pageSize\"\r\n    (selectionChanged)=\"onRowSelectionChanged($event)\"\t\r\n    (gridReady)=\"gridReady($event)\"\r\n    (paginationChanged)=\"paginationChanged($event)\"\r\n    (firstDataRendered)=\"onFirstDataRendered($event)\"\r\n    (gridSizeChanged)=\"onGridSizeChanged($event)\"\r\n    (modelUpdated)=\"onGridModelUpdated($event)\"\r\n    (cellFocused)=\"onCellFocused($event)\"\r\n    [singleClickEdit]=\"true\"\r\n    [colResizeDefault]='colResizeDefault'\r\n    (filterChanged)=\"onSortFilterChanged()\"\r\n    (sortChanged)=\"onSortFilterChanged()\"\r\n  >\r\n  </ag-grid-angular>\r\n\r\n  <!-- Loading overlay -->\r\n  <app-progress-bar [message]=\"'Please wait while your rows are loading'\" class=\"page\" *ngIf=\"isLoading\"></app-progress-bar>\r\n\r\n  <!-- No rows to show overlay -->\r\n  <div class=\"ag-overlay\" aria-hidden=\"true\" ref=\"overlayWrapper\" *ngIf=\"!isLoading && !rowData.length\">\r\n    <div class=\"ag-overlay-panel\">\r\n        <div class=\"ag-overlay-wrapper ag-layout-normal ag-overlay-no-rows-wrapper\" ref=\"eOverlayWrapper\"><span class=\"ag-overlay-no-rows-center\">No Rows To Show</span></div>\r\n    </div>\r\n  </div>  \r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/analysis-chart/analysis-chart.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/analysis-chart/analysis-chart.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedAnalysisChartAnalysisChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<highcharts-chart\n   [Highcharts] = \"highcharts\" \n   [options] = \"chartOptions\" \n   style = \"width: 100%; height: 400px; display: block;\">\n</highcharts-chart>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/bar-chart/bar-chart.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/bar-chart/bar-chart.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedBarChartBarChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"charts\" #charts></div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/color-dialog/color-dialog.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/color-dialog/color-dialog.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedColorDialogColorDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title> Completeness Color</h1>\r\n      <!-- {{colorCtr.value | json}} -->\r\n<div mat-dialog-content>\r\n  <!-- <p>Change your Completeness Color</p> -->\r\n  <form [formGroup]=\"settingsForm\" (ngSubmit)=\"closeSettings()\">\r\n    <div class=\"flex-containers space-between\" \r\n    formArrayName=\"bgSettings\" *ngFor=\"let bgSetting of settingsForm.get('bgSettings')['controls']; index as i; last as isLast; first as isFirst\">\r\n      <ng-container [formGroupName]=\"i\">\r\n        <div class=\"list-item\">\r\n          <mat-form-field appearance=\"fill\">\r\n            <mat-label>Min %</mat-label>\r\n            <input type=\"text\" (keypress)=\"numberOnly($event)\" matInput formControlName=\"min\" maxlength=\"3\" autocomplete=\"off\">\r\n          </mat-form-field>\r\n          <mat-form-field appearance=\"fill\">\r\n  \r\n          <mat-label>Max %</mat-label>\r\n           <input type=\"text\" (keypress)=\"numberOnly($event)\" matInput formControlName=\"max\" maxlength=\"3\" autocomplete=\"off\">\r\n         </mat-form-field>        \r\n          <!-- <mat-form-field>\r\n           <mat-label>Choose Color</mat-label>\r\n           <mat-select matInput formControlName=\"color\">\r\n              <mat-option value=\"red\">Red</mat-option>\r\n              <mat-option value=\"orange\">Orange</mat-option>\r\n              <mat-option value=\"green\">Green</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>  -->\r\n          <span class=\"clrSettings\">\r\n           <mat-form-field>\r\n            <mat-label class=\"pdt\">Choose Color</mat-label>\r\n            <input class=\"pd1\"\r\n              matInput \r\n              [(colorPicker)]=\"bgSetting.get('color').value\"\r\n              (colorPickerChange)=\"bgSetting.get('color').setValue($event)\"\r\n              [style.background]=\"bgSetting.get('color').value\"\r\n            />\r\n          </mat-form-field> \r\n         </span>\r\n        </div>\r\n        <div class=\"add-remove-button\">\r\n          <button type=\"button\" class=\"button3d btnPush btnBlueGreen addico\" (click)=\"addFormItem('bgSettings')\" *ngIf=\"isLast\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n          </div>\r\n          <div class=\"add-remove-button\">\r\n          <button type=\"button\" class=\"button3d btnPush btnOrange redico\" (click)=\"removeFormItem('bgSettings', i)\" *ngIf=\"!isFirst || !isLast\">\r\n            <mat-icon>delete_outline</mat-icon>\r\n          </button>\r\n        </div>\r\n\r\n      </ng-container>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button color=\"primary\" (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-raised-button color=\"accent\" (click)=\"closeSettings()\" cdkFocusInitial class=\"ma-cr\">Ok</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/column-selector/column-selector.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/column-selector/column-selector.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedColumnSelectorColumnSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div cdkDropListGroup class=\"row awa-column-selector\">\r\n  <div class=\"col-md-5\">\r\n    <label class=\"column-title\">{{availableColumnsLabel}}</label>\r\n    <app-drag-drop-list \r\n      #availableComponent \r\n      [items]=\"availableColumns\"\r\n      [isDisabled]=\"isDisabled\"\r\n      (selectionChanged)=\"availableSelectionChanged($event)\" \r\n      (itemsAdded)=\"droppedInToAvailableColumns()\">\r\n      <ng-template let-item>{{item.title}}</ng-template>\r\n    </app-drag-drop-list>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"col-move-btns\">\r\n      <button mat-stroked-button class=\"awa-icon-only-btn-40\" (click)=\"moveItemsToSelected()\"\r\n        [disabled]=\"!selectedAvailableItems.length || isDisabled\">\r\n        <mat-icon>keyboard_arrow_right</mat-icon>\r\n      </button>\r\n      <button mat-stroked-button class=\"awa-icon-only-btn-40\" (click)=\"moveItemsToAvailable()\"\r\n        [disabled]=\"!selectedSelectedItems.length || isDisabled\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>\r\n      </button>\r\n      <button mat-stroked-button class=\"awa-icon-only-btn-40\" (click)=\"moveAllItemsToSelected()\"\r\n        [disabled]=\"!availableColumns.length || isDisabled\">\r\n        <mat-icon>\r\n          <svg id=\"prism-move-all-right\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n            <path id=\"chevron-right\" d=\"M8.585,16.584,13.171,12,8.585,7.412,10,6l6,6-6,6Z\"\r\n              transform=\"translate(-3.586 0.002)\" />\r\n            <path id=\"chevron-right-2\" data-name=\"chevron-right\" d=\"M8.585,16.584,13.171,12,8.585,7.412,10,6l6,6-6,6Z\"\r\n              transform=\"translate(2.414 0.002)\" />\r\n          </svg>\r\n        </mat-icon>\r\n      </button>\r\n      <button mat-stroked-button class=\"awa-icon-only-btn-40\" (click)=\"moveAllItemsToAvaiable()\"\r\n        [disabled]=\"!selectedColumns.length || isDisabled\">\r\n        <mat-icon>\r\n          <svg id=\"prism-move-all-left\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n            <path id=\"chevron-left\" d=\"M16,16.584,11.413,12,16,7.412,14.585,6l-6,6,6,6Z\"\r\n              transform=\"translate(3.001 0.002)\" />\r\n            <path id=\"chevron-left-2\" data-name=\"chevron-left\" d=\"M16,16.584,11.413,12,16,7.412,14.585,6l-6,6,6,6Z\"\r\n              transform=\"translate(-2.999 0.002)\" />\r\n          </svg>\r\n        </mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-5\">\r\n    <label class=\"column-title\">{{selectedColumnsLabel}}<span class=\"red\">*</span></label>\r\n    <app-drag-drop-list \r\n      #selectedComponent \r\n      [items]=\"selectedColumns\"\r\n      [isDisabled]=\"isDisabled\"\r\n      (selectedItemIndexChange)=\"selectedItemIndexChanged($event)\"\r\n      (selectionChanged)=\"selectedSelectionChanged($event)\" \r\n      (itemsUpdated)=\"selectedColumnOrderChanged($event)\"\r\n      (itemsAdded)=\"droppedInToSelectedColumns()\">\r\n      <ng-template let-item>{{item.title}}</ng-template>\r\n    </app-drag-drop-list>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/column-selector/drag-drop-list/drag-drop-list.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/column-selector/drag-drop-list/drag-drop-list.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedColumnSelectorDragDropListDragDropListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"awa-drop-list-container\" cdkDropList [class.item-dragging]=\"dragging\"\r\n  (cdkDropListDropped)=\"droppedIntoList($event)\">\r\n  <div *ngFor=\"let item of items; let index = index\" class=\"col-list-item\" [class.selected]=\"isSelected(index)\" cdkDrag\r\n    (cdkDragStarted)=\"dragStarted($event, index)\" (cdkDragEnded)=\"dragEnded()\" (cdkDragDropped)=\"dropped($event)\"\r\n    (click)=\"select($event, index)\"  [cdkDragDisabled]=\"isDisabled\">\r\n    <div *ngIf=\"!dragging || !isSelected(index)\">\r\n      <ng-container *ngTemplateOutlet=\"templateRef; context: { $implicit: item, item: item, index: index }\">\r\n      </ng-container>\r\n      <div *cdkDragPreview>\r\n        <div *ngFor=\"let index of selections\" class=\"col-list-item\">{{items[index].title}}</div>\r\n        <div *ngIf=\"!selections.length\">\r\n          <div class=\"col-list-item\">{{item.title}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/completeness-dialog/completeness-dialog.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/completeness-dialog/completeness-dialog.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedCompletenessDialogCompletenessDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"close\" mat-icon-button (click)=\"onNoClick()\">\r\n  <mat-icon>close</mat-icon>\r\n</button>\r\n<button type=\"button\"\r\n  *ngIf=\"analysisItem[key].details && analysisItem[key].details.length\"\r\n  class=\"button3d btnPush btnPurple addico w-t\"\r\n  (click)=\"launchDataCleaning(analysisItem,'edit')\" matTooltip=\"Data Cleaning\">\r\n  Data Cleaning\r\n</button>\r\n<div class=\"comp-tab\">\r\n  <mat-tab-group mat-align-tabs=\"start\" animationDuration=\"0ms\" [selectedIndex]=\"selectedTabIndex\" (selectedTabChange)=\"selectedTabChange($event)\">\r\n    <mat-tab *ngFor=\"let tab of analysisKeys\" label=\"{{tab}}\">\r\n      <div mat-dialog-title class=\"space bg2\">\r\n        <div class=\"flex-containers space-between\">\r\n          <div>\r\n            {{key}} - {{selectedKey}} - {{selectedValue}}\r\n            <span *ngIf=\"selectedColumn.column\"> - {{selectedColumn.column}}</span>\r\n            - {{analysisItem[key].value}}%\r\n          </div>\r\n        </div>\r\n       \r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n\r\n<div mat-dialog-content>\r\n  <!-- category Carousel -->\r\n  <div class=\"analysis-info\">\r\n    <div class=\"category-list-Owl clearfix\" *ngIf=\"analysisItem[key].details && analysisItem[key].details.length\">\r\n      <div class=\"left-arrow\">\r\n          <button mat-stroked-button class=\"gv-secondary-btn primary-btn-gray prev-next-btn clr2\" (click)=\"owlCar.prev()\">\r\n          <mat-icon class=\"pl\">keyboard_arrow_left</mat-icon>\r\n          </button>\r\n      </div>      \r\n      <div class=\"category-list\" #carouselHolder>\r\n        <owl-carousel-o [options]=\"OwlCategoryOptions\" #owlCatCar>\r\n          <ng-container *ngFor=\"let rowItem of analysisItem[key].details; let i = index\">\r\n            <ng-template carouselSlide [id]=\"i\">\r\n              <mat-card (click)=\"launchAnalysisDetails(rowItem);\" [class.selected]=\"rowItem.column === selectedColumn.column\">\r\n                <div *ngFor=\"let item of rowItem | keyvalue\" [hidden]=\"item.key === 'outlier'\">\r\n                  <span *ngIf=\"item.key !== 'column'\" class=\"field-label\">{{item.key}}: </span> \r\n                  <span class=\"strong compClr\" (click)=\"launchAnalysisDetails(rowItem);\">{{item.value}}</span>\r\n                </div>\r\n              </mat-card>\r\n            </ng-template>\r\n          </ng-container>\r\n        </owl-carousel-o>\r\n      </div>\r\n      <div class=\"right-arrow\">\r\n          <button mat-stroked-button class=\"gv-secondary-btn primary-btn-gray prev-next-btn clr2\" (click)=\"owlCar.next()\">\r\n          <mat-icon class=\"pl\">keyboard_arrow_right</mat-icon>\r\n          </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"content-details\">\r\n    <div *ngIf=\"showDetails\">\r\n      <mat-card fxFlex class=\"stats process-blocks-table\" style=\"height: 480px;\">\r\n        <app-ag-grid\r\n          floatingFilter=\"true\"\r\n          [isLoading]=\"isLoading\"\r\n          [rowData]=\"rowData\"\r\n          [columnDefs]=\"columnDefs\"\r\n          [pageSize]=\"50\"\r\n          [rowSelection]=\"'multiple'\"\r\n          [moveToColumn]=\"selectedColumn.column\"\r\n          [suppressRowClickSelection]=\"false\"\r\n        ></app-ag-grid>\r\n      </mat-card>\r\n    </div>\r\n    <app-progress-bar [message]=\"'Details are loading...'\" class=\"component\" *ngIf=\"isLoading\"></app-progress-bar>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedConfirmDialogConfirmDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"confirm-wrapper\">\r\n  <h1 mat-dialog-title>{{data.title}}</h1>\r\n  <div mat-dialog-content>\r\n    <p>{{data.message}}</p>\r\n  </div>\r\n  <div class=\"reason-wrp\" *ngIf=\"data.showReason\">\r\n    <p>{{data.reasongMsg}}</p>\r\n    <mat-form-field class=\"input-full-width\" name=\"reason-input\">\r\n      <mat-label>Reason</mat-label>\r\n      <textarea matInput placeholder=\"Ex. Reason...\" [(ngModel)]=\"reason\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"footer\">\r\n    <button mat-stroked-button class=\"primary-btn-gray white\" \r\n      *ngIf=\"data.cancelLable\"\r\n      matDialogClose (click)=\"onCloseDialog('cancel')\">{{data.cancelLable}}</button>\r\n    <button mat-stroked-button class=\"primary-btn-gray\" [disabled]=\"data.showReason && !reason\" matDialogClose (click)=\"onCloseDialog('ok'); \" cdkFocusInitial>{{data.okLable}}</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/cylinder-chart/cylinder-chart.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/cylinder-chart/cylinder-chart.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedCylinderChartCylinderChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<figure class=\"highcharts-figure\">\r\n      <div id=\"container\" #charts></div>\r\n</figure>\r\n\r\n<div style=\"margin:auto;width:300px;position: relative;right: -610px;top: -260px;\" *ngIf=\"options3d\">\r\n\r\n<label>Alpha Angle</label>\r\n<mat-slider \r\n   min=\"1\" \r\n   max=\"100\" \r\n   step=\"1\" \r\n   value=\"25\"\r\n    #matalpha\r\n    ngModel\r\n    (input)=\"alphaChange($event)\">\r\n   </mat-slider>\r\n   {{matalpha.value}}\r\n\r\n   <br>\r\n\r\n   <label>Beta Angle</label>\r\n\r\n   <mat-slider \r\n   min=\"-45\" \r\n   max=\"45\" \r\n   step=\"1\" \r\n   value=\"15\"\r\n    #matbeta\r\n    ngModel\r\n    (input)=\"betaChange($event)\">\r\n   </mat-slider>\r\n   {{matbeta.value}}\r\n\r\n   <br>\r\n\r\n   <label>Depth</label>\r\n\r\n   <mat-slider \r\n   min=\"20\" \r\n   max=\"100\" \r\n   step=\"1\" \r\n   value=\"25\"\r\n    #matdepth\r\n    ngModel\r\n    (input)=\"depthChange($event)\">\r\n   </mat-slider>\r\n   {{matdepth.value}}\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"footer-copyright\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n          Copyright &copy; <a href=\"\">dq.com</a>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-6 text-right terms\">\r\n          <a routerLink=\"/ga/privacy\">Privacy</a> \r\n          <a routerLink=\"/ga/terms-conditions\">Terms</a>\r\n          <a routerLink=\"/ga/disclaimer\">Disclaimer</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/formula-editor/formula-editor.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/formula-editor/formula-editor.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFormulaEditorFormulaEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"formula-editir\">\r\n  <h1 mat-dialog-title>Formula Editor</h1>\r\n  <div mat-dialog-content>\r\n    <div class=\"formula-preview\">\r\n      <span *ngFor=\"let formula of formulaDetailsForm.value.formula\">\r\n        <span class=\"operator\" *ngIf=\"formula.operator !== 'NULL'\">{{formula.operator}}</span>\r\n        <span class=\"cde\">{{formula.cde}}</span>\r\n      </span>\r\n    </div>\r\n    <form [formGroup]=\"formulaDetailsForm\">\r\n      <div class=\"btn-main-right-wrapper top-sapce\" style=\"margin-right: 10px;\">\r\n        <button type=\"button\" mat-stroked-button class=\"primary-btn-gray\" \r\n          (click)=\"addFormItem('formula')\" \r\n          *ngIf=\"!formulaDetailsForm.get('formula')['controls'].length\">\r\n            Add\r\n        </button>\r\n      </div>\r\n      <div class=\"flex-containers space-between\" \r\n        formArrayName=\"formula\" *ngFor=\"let edu of formulaDetailsForm.get('formula')['controls']; index as i; last as isLast; first as isFirst\">\r\n        <ng-container [formGroupName]=\"i\">\r\n          <div class=\"list flex-containers flex-start wrap\">\r\n            <div class=\"list-item-3 operator outline\" *ngIf=\"!isFirst\">\r\n              <mat-form-field appearance=\"fill\">\r\n                <mat-label>Operator</mat-label>\r\n                <mat-select formControlName=\"operator\">\r\n                  <mat-option *ngFor=\"let operator of operators\" [value]=\"operator\">{{operator}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"list-item-4 cde outline\">\r\n              <mat-form-field appearance=\"fill\">\r\n                <mat-label>Select CDE</mat-label>\r\n                <mat-select formControlName=\"cde\">\r\n                  <mat-option *ngFor=\"let column of data.columns\" [value]=\"column\">{{column}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"list add-remove-button\">\r\n            <button  type=\"button\"  class=\"button3d btnPush btnBlueGreen addico\" (click)=\"addFormItem('formula')\" *ngIf=\"isLast\">\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n            </div>\r\n            <div class=\"list add-remove-button\">\r\n            <button type=\"button\" class=\"button3d btnPush btnOrange redico\" (click)=\"removeFormItem('formula', i)\" *ngIf=\"formulaDetailsForm.get('formula')['controls'].length > 2\">\r\n               <mat-icon>delete_outline</mat-icon>\r\n            </button>\r\n          </div>\r\n        </ng-container>\r\n      </div> \r\n    </form>\r\n  </div>\r\n  <div class=\"footer\">\r\n    <button mat-stroked-button class=\"primary-btn-gray white\" matDialogClose (click)=\"onCloseDialog('cancel')\">Cancel</button>\r\n    <button mat-stroked-button class=\"primary-btn-gray\" [disabled]=\"formulaDetailsForm.status === 'INVALID'\" matDialogClose (click)=\"onCloseDialog('ok'); \" cdkFocusInitial>OK</button>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"header masthead sticky\" [ngClass]=\"{'white-bg' : isSticky, 'menu-hidden' : isHidden}\" #header>\r\n   <div class=\"header-top header-body\">\r\n     <div class=\"container\">\r\n       <div class=\"row\">\r\n         <div class=\"col-xs-12 col-sm-4 col-md-3\">\r\n           <a class=\"logo-wrapper\" routerLink=\"/auth/home\">\r\n            <img class=\"logo\" src=\"assets/images/ai-logo.png\" alt=\"AI\">\r\n            <span>Data Driven</span>\r\n             <!-- <img class=\"logo\" src=\"assets/images/logo-vertical.svg\" alt=\"Moneyism\"> -->\r\n             <!-- <h4 class=\"logo-title\">Know Your <span class=\"\">Data</span></h4> -->\r\n           </a>\r\n         </div>\r\n         \r\n         <div class=\"col-xs-12 col-sm-4 col-md-9 text-right\">\r\n           <div class=\"main-nav\">\r\n            \r\n             <button mat-button routerLink=\"/auth/dashboard\">\r\n               <mat-icon matPrefix>bar_chart</mat-icon>\r\n               Dashboard\r\n             </button>\r\n \r\n             <!-- <button mat-button routerLink=\"/auth/ruleset\">\r\n               <mat-icon matPrefix>perm_data_setting</mat-icon>\r\n               Analysis\r\n             </button> -->\r\n \r\n             <span class=\"seperator\">&nbsp;</span>\r\n \r\n             <!--  (click)=\"showCloseSerach()\" -->\r\n             <!-- <button mat-icon-button class=\"notification-menu\">\r\n               <mat-icon>search</mat-icon>\r\n             </button>\r\n             <button mat-icon-button class=\"notification-menu notification-btn\" (click)=\"drawer.toggle()\">\r\n               <mat-icon matBadge=\"{{notificationsCount}}\" matBadgeColor=\"warn\">notifications</mat-icon>\r\n             </button> -->\r\n \r\n             <button mat-icon-button [matMenuTriggerFor]=\"menu\" [class.userimage]=\"user.path\">\r\n               <div class=\"profile-pic-small pic-xs img\" *ngIf=\"user.path\" [ngStyle]=\"{'background-image': 'url(' + appConfig.imgBaseUrl + user.path + ')'}\"></div>\r\n               <mat-icon *ngIf=\"!user.path\">account_circle</mat-icon>\r\n             </button>\r\n             <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button class=\"nav-category-item\" mat-menu-item routerLink=\"/auth/admin/frequency\" *ngIf=\"user.rights.includes('USER_MANAGEMENT')\">\r\n                <mat-icon matPrefix>settings</mat-icon>Manage Frequency\r\n              </button>\r\n              <button class=\"nav-category-item\" mat-menu-item routerLink=\"/auth/admin/multi-source\" *ngIf=\"user.rights.includes('USER_MANAGEMENT')\">\r\n                <mat-icon matPrefix>settings</mat-icon>Manage Multi Source\r\n              </button>\r\n              <button class=\"nav-category-item\" mat-menu-item routerLink=\"/auth/admin/roles\" *ngIf=\"user.rights.includes('USER_MANAGEMENT')\">\r\n                <mat-icon matPrefix>settings</mat-icon>Manage Roles\r\n              </button>\r\n              <button class=\"nav-category-item\" mat-menu-item routerLink=\"/auth/admin/departments\" *ngIf=\"user.rights.includes('USER_MANAGEMENT')\">\r\n                <mat-icon matPrefix>settings</mat-icon>Manage Departments\r\n              </button>\r\n              <button class=\"nav-category-item\" mat-menu-item routerLink=\"/auth/admin/users\" *ngIf=\"user.rights.includes('USER_MANAGEMENT')\">\r\n                <mat-icon matPrefix>settings</mat-icon>Users List\r\n              </button>\r\n               <mat-divider></mat-divider>\r\n               <button class=\"nav-category-item\" mat-menu-item style=\"height: auto;\">\r\n                  <mat-icon>account_circle</mat-icon>\r\n                  {{user.name}} ({{user.role}}) <br>{{user.email}}\r\n                  \r\n               </button>\r\n               <button class=\"nav-category-item\" mat-menu-item (click)=\"doLogout()\"><mat-icon>exit_to_app</mat-icon>Logout</button>\r\n             </mat-menu>\r\n \r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </header>\r\n <div class=\"search-wrapper\" [ngClass]=\"{'sticky' : isSticky}\" [hidden]=\"!isShowSearch\" #serachWrapper>\r\n   <div class=\"container\">\r\n       <form [formGroup]=\"searchForm\">\r\n         <div class=\"list flex-containers flex-start wrap search-container\">\r\n           <div class=\"list-item-4 list-item outline\">\r\n             <mat-form-field appearance=\"outline\" class=\"type\">\r\n               <mat-label>Option</mat-label>\r\n               <mat-select formControlName=\"option\">\r\n                 <mat-option *ngFor=\"let option of searchOptions\" [value]=\"option.value\">{{option.title}}</mat-option>\r\n               </mat-select>\r\n             </mat-form-field>\r\n           </div>\r\n           <!-- <div class=\"list-item-3 list-item outline\">\r\n             <mat-form-field appearance=\"outline\" class=\"search\">\r\n               <mat-label>Search</mat-label>\r\n               <input matInput placeholder=\"Search\" formControlName=\"q\" maxlength=\"100\" autocomplete=\"off\"/>\r\n             </mat-form-field>\r\n           </div> -->\r\n           <div class=\"list-item-3 list-item outline\">\r\n             <mat-form-field appearance=\"outline\" class=\"location\">\r\n               <mat-label>Location</mat-label>\r\n               <input matInput placeholder=\"Location\" formControlName=\"location\" maxlength=\"100\" autocomplete=\"off\"/>\r\n             </mat-form-field>\r\n           </div>\r\n           <div class=\"list-item-7 list-item\">\r\n             <button mat-stroked-button class=\"primary-btn-gray\" (click)=\"initSearch()\">Search</button>\r\n             <button mat-icon-button class=\"serach-close\" (click)=\"showCloseSerach()\"><mat-icon>close</mat-icon></button>\r\n           </div>\r\n         </div>\r\n       </form>\r\n   </div>\r\n </div>\r\n \r\n <mat-drawer-container class=\"notification-drawer-container\" autosize end [ngClass]=\"{'full-height' : isHidden}\">\r\n   <mat-drawer #drawer class=\"notification-drawer-sidenav\" mode=\"side\" [position]=\"'end'\" (openedChange)=\"drawerOpen($event)\">\r\n     <div class=\"not-page\">\r\n       <div class=\"not-header\">\r\n         <div class=\"close-icon\" (click)=\"drawer.toggle()\">\r\n           <mat-icon>close</mat-icon>\r\n         </div>\r\n         <h4>\r\n           <mat-icon>notifications</mat-icon>\r\n           NOTIFICATION\r\n         </h4>\r\n       </div>\r\n       <div class=\"not-body\">\r\n         <app-progress-bar [message]=\"loaderMsg\" class=\"component\" *ngIf=\"isLoading\"></app-progress-bar>\r\n         <div *ngFor=\"let notification of notifications; index as i\">\r\n           <div class=\"not-item\" [class.read]=\"notification.status\" (click)=\"makeNotificationRead(notification)\">\r\n             <div class=\"flex-containers space-between\">\r\n               <div class=\"flex-item status\">\r\n                 <mat-icon class=\"unread-icon\">brightness_1</mat-icon>\r\n               </div>\r\n               <div class=\"flex-item label\">{{notification.createdAt | date:'MMM dd, yyyy hh:mm a'}}</div>\r\n             </div>\r\n             <div class=\"message\">\r\n               <h4>{{notification.subject}}</h4>\r\n               <p [innerHTML]=\"notification.description\"></p>\r\n             </div>\r\n           </div>\r\n         </div>\r\n       </div>\r\n   \r\n     </div>\r\n   </mat-drawer>\r\n </mat-drawer-container>\r\n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/heat-map/heat-map.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/heat-map/heat-map.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeatMapHeatMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <highcharts-chart\n   [Highcharts] = \"highcharts\" \n   [options] = \"chartOptions\" \n   style = \"width: 100%; height: 400px; display: block;\">\n</highcharts-chart> -->\n\n<div id=\"heat-map-chart\" #charts></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/image-cropper/image-cropper.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/image-cropper/image-cropper.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedImageCropperImageCropperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"image-crop-wrapper\">\r\n  <mat-card class=\"image-crop-card border\">\r\n    <mat-progress-bar mode=\"indeterminate\" class=\"img-progress\" *ngIf=\"isLoading\"></mat-progress-bar>\r\n    <div class=\"file-form-group\" [hidden]=\"croppedImage\">\r\n      <label for='input-file'>\r\n         <mat-icon>attach_file</mat-icon>\r\n       </label>\r\n      <input type=\"file\" [accept]=\"fileTypes\" class=\"gv-file-input\" [disabled]=\"disabled\" (change)=\"fileChangeEvent($event)\" #fileInput>\r\n    </div>\r\n    <!-- <button mat-button class=\"primary-btn upload-btn\" title=\"Upload\" (click)=\"uploadImage()\" *ngIf=\"selectedFile.name && !isUploadDone\">\r\n      Upload\r\n    </button> -->\r\n    <button mat-icon-button class=\"done-btn\" *ngIf=\"isUploadDone\">\r\n      <mat-icon>done</mat-icon>\r\n    </button>\r\n    <div class=\"img-preview\" *ngIf=\"imagePath && !isUploadDone && (imagePath | fileformat) === 'docs'\">\r\n      <mat-icon>picture_as_pdf</mat-icon>\r\n    </div>\r\n    <div class=\"img-preview\" *ngIf=\"imagePath && !isUploadDone && (imagePath | fileformat) === 'images'\">\r\n      <div class=\"img\" [ngStyle]=\"{'background-image': 'url(' + appConfig.imgBaseUrl + imagePath + ')'}\"></div>\r\n    </div>\r\n    <div class=\"error-messages-wrapper\">\r\n      <mat-error *ngIf=\"errorMessage\">\r\n        {{errorMessage}}\r\n      </mat-error>\r\n    </div>\r\n<!-- <button mat-icon-button class=\"delete-btn\" title=\"Delete\" (click)=\"deleteImage()\" *ngIf=\"selectedFile.name\">\r\n      <mat-icon>delete</mat-icon>\r\n    </button> -->\r\n    <!-- <image-cropper\r\n      class=\"image-cropper\"\r\n      [imageChangedEvent]=\"imageChangedEvent\"\r\n      [maintainAspectRatio]=\"true\"\r\n      [containWithinAspectRatio]=\"containWithinAspectRatio\"\r\n      [aspectRatio]=\"aspectRatio\"\r\n      [cropperMinWidth]=\"200\"\r\n      [resizeToWidth]=\"resizedWidth\"\r\n      [resizeToHeight]=\"resizedHeight\"\r\n      [onlyScaleDown]=\"true\"\r\n      [roundCropper]=\"false\"\r\n      [canvasRotation]=\"canvasRotation\"\r\n      [transform]=\"transform\"\r\n      [alignImage]=\"'left'\"\r\n      [style.display]=\"showCropper ? null : 'none'\"\r\n      format=\"png\"\r\n      (imageCropped)=\"imageCropped($event)\"\r\n      (imageLoaded)=\"imageLoaded()\"\r\n      (cropperReady)=\"cropperReady($event)\"\r\n      (loadImageFailed)=\"loadImageFailed()\"\r\n    ></image-cropper>\r\n    <div class=\"img-preview\" *ngIf=\"preview && !croppedImage\">\r\n      <p class=\"label\">Preview</p>\r\n      <img  src=\"{{preview}}\" />\r\n    </div> -->\r\n  </mat-card>\r\n  \r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mn-carousel/mn-carousel.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mn-carousel/mn-carousel.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedMnCarouselMnCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"car-wrapper\" *ngIf=\"items && items.length > 3\">\r\n  <app-progress-bar [message]=\"loaderMsg\" class=\"page\" *ngIf=\"isLoading\"></app-progress-bar>\r\n  <h4 class=\"sub-title\" *ngIf=\"title\">{{title}}</h4>\r\n  <div class=\"car-btn-wrapper text-right\">\r\n    <button mat-stroked-button class=\"secondary-btn prev-next-btn\" (click)=\"owlCar.prev()\">\r\n      <mat-icon>keyboard_arrow_left</mat-icon>\r\n    </button>\r\n    <button mat-stroked-button class=\"secondary-btn prev-next-btn\" (click)=\"owlCar.next()\">\r\n      <mat-icon>keyboard_arrow_right</mat-icon>\r\n    </button>\r\n  </div>\r\n  \r\n  <owl-carousel-o [options]=\"OwlOptions\" #owlCar>\r\n    <ng-container *ngFor=\"let item of items\">\r\n      <ng-template carouselSlide [width]=\"'180px'\">\r\n        <mat-card class=\"flex-item border award\">\r\n          <h4 *ngIf=\"!item.path\"><mat-icon>image</mat-icon></h4>\r\n          <h4 *ngIf=\"item.path && (item.path | fileformat) === 'docs'\">\r\n            <a href=\"{{appConfig.imgBaseUrl}}{{item.path}}\" target=\"_blank\">\r\n              <mat-icon>picture_as_pdf</mat-icon>\r\n            </a>\r\n          </h4>\r\n          <div *ngIf=\"item.path && (item.path | fileformat) === 'images'\" class=\"img-preview\">\r\n            <a href=\"{{appConfig.imgBaseUrl}}{{item.path}}\" target=\"_blank\">\r\n              <div class=\"img\" [ngStyle]=\"{'background-image': 'url(' + appConfig.imgBaseUrl + item.path + ')'}\"></div>\r\n            </a>\r\n          </div>\r\n          <h4>{{item.name}}</h4>\r\n          <p class=\"desc word-wrap\" *ngIf=\"item.description\" title=\"{{item.description}}\">{{item.description}}</p>\r\n          <!-- Sharing menu -->\r\n          <mat-menu #shareMenu=\"matMenu\" class=\"share-menu-wrapper\">\r\n            <button mat-menu-item (click)=\"shareWithCommunity(item)\">Share with Community</button>\r\n          </mat-menu>\r\n      \r\n          <button mat-icon-button class=\"more-icon-btn\" [matMenuTriggerFor]=\"shareMenu\" *ngIf=\"communityShare\" [disabled]=\"isLoading\" [class.loading]=\"isLoading\">\r\n            <mat-icon class=\"more-icon\">more_vert</mat-icon>\r\n          </button>\r\n        </mat-card>\r\n      </ng-template>\r\n    </ng-container>\r\n  </owl-carousel-o>\r\n</div>\r\n\r\n<div class=\"car-wrapper\" *ngIf=\"items && items.length <= 3\">\r\n  <app-progress-bar [message]=\"loaderMsg\" class=\"page\" *ngIf=\"isLoading\"></app-progress-bar>\r\n  <h4 class=\"sub-title block\" *ngIf=\"title\">{{title}}</h4>\r\n  <div class=\"list bt-border flex-containers flex-start\">\r\n    <mat-card class=\"flex-item list-item-3 border award\" *ngFor=\"let item of items\">\r\n      <h4 *ngIf=\"!item.path\"><mat-icon>image</mat-icon></h4>\r\n      <h4 *ngIf=\"item.path && (item.path | fileformat) === 'docs'\">\r\n        <a href=\"{{appConfig.imgBaseUrl}}{{item.path}}\" target=\"_blank\">\r\n          <mat-icon>picture_as_pdf</mat-icon>\r\n        </a>\r\n      </h4>\r\n      <div *ngIf=\"item.path && (item.path | fileformat) === 'images'\" class=\"img-preview\">\r\n        <a href=\"{{appConfig.imgBaseUrl}}{{item.path}}\" target=\"_blank\">\r\n          <div class=\"img\" [ngStyle]=\"{'background-image': 'url(' + appConfig.imgBaseUrl + item.path + ')'}\"></div>\r\n        </a>\r\n      </div>\r\n      <h4>{{item.name}}</h4>\r\n      <p class=\"desc word-wrap\" *ngIf=\"item.description\" title=\"{{item.description}}\">{{item.description}}</p>\r\n\r\n      <!-- Sharing menu -->\r\n      <mat-menu #shareMenu=\"matMenu\" class=\"share-menu-wrapper\">\r\n        <button mat-menu-item (click)=\"shareWithCommunity(item)\">Share with Community</button>\r\n      </mat-menu>\r\n  \r\n      <button mat-icon-button class=\"more-icon-btn\" [matMenuTriggerFor]=\"shareMenu\" *ngIf=\"communityShare\" [disabled]=\"isLoading\" [class.loading]=\"isLoading\">\r\n        <mat-icon class=\"more-icon\">more_vert</mat-icon>\r\n      </button>\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/progress-bar/progress-bar.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/progress-bar/progress-bar.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedProgressBarProgressBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"progress-wrapper\">\r\n  <p class=\"title\">{{message}}</p>\r\n  <mat-progress-bar mode=\"indeterminate\" color=\"secondary\" *ngIf=\"!isError\"></mat-progress-bar>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rule-selector/rule-selector.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rule-selector/rule-selector.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRuleSelectorRuleSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"rule-selector\">\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label *ngIf=\"label\">{{label}}</mat-label>\r\n    <mat-select #ruleSelect [(ngModel)]=\"ruleOptionItem\" (ngModelChange)=\"modelChange($event)\" [multiple]=\"multiple\">     \r\n      <mat-select-trigger>\r\n        <span class=\"custom\">\r\n          {{selectedRule && selectedRule.length ? selectedRule.join(', ') : selectedRule}}\r\n        </span>\r\n       </mat-select-trigger>\r\n       <mat-option *ngFor=\"let item of ruleItems\" [value]=\"item.value\">\r\n        <div class=\"option-wrp\">\r\n          <span>{{item.label}}</span>\r\n          <span></span>\r\n          <mat-icon mat-icon-button class=\"del-icon\" (click)=\"deleteRuleItem($event, item)\" *ngIf=\"showAddItem && item.type==='CUSTOM'\">delete</mat-icon>\r\n        </div>\r\n      </mat-option>\r\n      <mat-option class=\"add-option\" *ngIf=\"showAddItem\">\r\n         <div class=\"add-btn\">\r\n            <button type=\"button\" class=\"button3d btnPush btnBlueGreen addico\" (click)=\"showHideAddInput(true);\">\r\n               <mat-icon>add</mat-icon>Add\r\n            </button>\r\n      </div>\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <div class=\"list flex-containers flex-start wrap\" *ngIf=\"showAdd\">\r\n    <div class=\"custom-value-input\">\r\n      <mat-form-field appearance=\"fill\">\r\n        <input matInput placeholder=\"\" maxlength=\"50\" autocomplete=\"off\" [(ngModel)]=\"ruleItem\" />\r\n      </mat-form-field>\r\n    </div>\r\n    <button type=\"button\" class=\"button3d btnPush btnBlueGreen raddIco\" (click)=\"addRuleItem(selectedRule);\" [disabled]=\"!ruleItem\" >\r\n      <mat-icon>done</mat-icon>\r\n    </button>\r\n    <button type=\"button\" mat-icon-button class=\"button3d btnPush btnOrange rdelIco\" (click)=\"showHideAddInput(false)\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _components_login_signup_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login-signup/login/login.component */
    "./src/app/components/login-signup/login/login.component.ts");

    var routes = [// { path: '', component: LandingComponent },
    {
      path: '',
      component: _components_login_signup_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, // { path: 'signup', component: SignupComponent },
    {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-authorized-authorized-module */
        "components-authorized-authorized-module").then(__webpack_require__.bind(null,
        /*! ./components/authorized/authorized.module */
        "./src/app/components/authorized/authorized.module.ts")).then(function (m) {
          return m.AuthorizedModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dq-app .dq-main {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRxLWFwcCB7XHJcbiAgLmRxLW1haW4ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbn0iLCIuZHEtYXBwIC5kcS1tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/message.service */
    "./src/app/services/message.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(route, http, common, messageService) {
        _classCallCheck(this, AppComponent);

        this.route = route;
        this.http = http;
        this.common = common;
        this.messageService = messageService;
        this.categories = [];
        this.isLoading = true;
        this.initCategories();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.commonSub = this.messageService.getCommonMessage().subscribe(function (message) {
            if (message.topic === 'toggleMobileNav') {
              _this.hamburgerNav.open();
            }
          });
        }
      }, {
        key: "initCategories",
        value: function initCategories() {// this.isLoading = true;
          // this.http.getCategories().subscribe((result: any) => {
          //   this.common.setCategories(result ? result : []);
          //   this.categories = result ? result : [];
          //   this.isLoading = false;
          //   this.messageService.sendCommonMessage({topic: 'categoryLoaded', reason: 'categoryLoadedCompleted'});
          // }, (error) => {
          //   this.common.categories = [];
          //   this.isLoading = false;
          // });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.commonSub.unsubscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hamburgerNav', {
      "static": true
    })], AppComponent.prototype, "hamburgerNav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.ts":
  /*!*******************************!*\
    !*** ./src/app/app.config.ts ***!
    \*******************************/

  /*! exports provided: appConfig */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appConfig", function () {
      return appConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _assets_config_env_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../assets/config/env.json */
    "./src/assets/config/env.json");

    var _assets_config_env_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/config/env.json */
    "./src/assets/config/env.json", 1);

    var appConfig = {
      imgBaseUrl: _assets_config_env_json__WEBPACK_IMPORTED_MODULE_1__["imgBaseUrl"]
    };
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _services_http_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/message.service */
    "./src/app/services/message.service.ts");
    /* harmony import */


    var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/http-interceptor.service */
    "./src/app/services/http-interceptor.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_signup_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/login-signup/login/login.component */
    "./src/app/components/login-signup/login/login.component.ts");
    /* harmony import */


    var _components_login_signup_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/login-signup/signup/signup.component */
    "./src/app/components/login-signup/signup/signup.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _components_login_signup_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _components_login_signup_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialLoginModule"]],
      providers: [_services_http_service_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["HttpInterceptorService"],
        multi: true
      }, _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"], _services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"], {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [{
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"]('843617944994-lh919mbd5u8p0htc45bv1oucbrb5a9oq.apps.googleusercontent.com')
          }, {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"]('309241957147893')
          }]
        }
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/login-signup/login/login.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/login-signup/login/login.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginSignupLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-wrapper {\n  background-size: cover;\n  height: 100%;\n  height: 100vh;\n}\n.login-wrapper .login-top h2 {\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 50px;\n  color: #59bfff;\n  text-align: center;\n  text-transform: uppercase;\n  margin-left: 0%;\n}\n.login-wrapper .login-top h2 span {\n  font-size: 30px;\n  color: #fff;\n}\n.login-wrapper .login-top .login-image {\n  margin-left: 22%;\n}\n.login-wrapper .login-card {\n  background: url('form-bg1.png') no-repeat;\n  overflow: hidden;\n  margin-bottom: 0;\n  padding: 44px 0px 33px 50px;\n  box-shadow: none !important;\n  border: none !important;\n  outline: 0 !important;\n  position: absolute;\n  right: 210px;\n  top: 150px;\n  height: 510px;\n}\n.login-wrapper .login-card h2 {\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 32px;\n  color: #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  margin-left: 0%;\n  display: inline-block;\n  margin-left: 82px;\n  margin-bottom: 10px;\n}\n.login-wrapper .login-card h2 span {\n  display: block;\n  font-size: 20px;\n  font-family: \"open-sans-condensed-light\";\n}\n.login-wrapper .title-wrp {\n  width: 640px;\n  margin-left: 150px;\n  text-align: center;\n  margin-top: 20px;\n}\n.login-wrapper .title-wrp .page-title {\n  font-size: 52px;\n  text-align: left;\n  font-weight: 300;\n  margin-right: 44px;\n  color: #fff;\n  text-align: center;\n}\n.login-wrapper h3 {\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 50px;\n  color: #D74F31;\n  text-align: center;\n  text-transform: uppercase;\n  margin-left: 0%;\n  display: inline-block;\n}\n.login-wrapper h3 span {\n  font-size: 30px;\n  color: #59bfff;\n}\n.login-wrapper .title {\n  font-family: \"open-sans-condensed-light\";\n  font-size: 30px;\n  text-align: center;\n  font-weight: 300;\n  margin-bottom: 10px;\n  font-weight: 100;\n  color: #D74F31;\n}\n.login-wrapper .title .strong {\n  font-weight: 500;\n}\n.login-wrapper .logo-wrapper {\n  text-align: center;\n  margin: 24px 0;\n}\n.login-wrapper .logo-wrapper .logo {\n  width: 120px;\n}\n.login-wrapper .mat-form-field {\n  font-size: 18px;\n  font-weight: 300;\n}\n.login-wrapper .login-btn-wrpper {\n  margin-top: 0px;\n}\n.login-wrapper .account-btn-wrpper {\n  margin-top: 62px;\n  text-align: center;\n}\n.login-wrapper .account-btn-wrpper p {\n  font-weight: 400;\n  margin-bottom: 14px;\n}\n.login-primary-btn {\n  font-size: 20px;\n  font-family: \"open-sans-condensed-bold\" !important;\n  border-radius: 4px !important;\n  background-color: #5c4f9e !important;\n  text-transform: uppercase !important;\n}\n.otp-login-wrapper .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0;\n  padding: 0;\n}\n.otp-login-wrapper .login-btn-wrpper {\n  margin: 0 0 24px 0;\n}\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  font-family: \"open-sans-condensed-bold\";\n}\n.bdrInput {\n  background-color: #ffffff !important;\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n.mat-error {\n  font-family: \"open-sans-condensed-light\";\n}\n.mat-error.wt {\n  color: #ffffff;\n}\n.shadow {\n  margin: 0 auto;\n  background-color: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.shadow.top {\n  box-shadow: 0px -15px 10px -15px #111;\n}\n.shadow.bottom {\n  box-shadow: 0px 15px 10px -15px #111;\n}\n.shadow.left {\n  box-shadow: -15px 0px 10px -15px #111;\n}\n.shadow.right {\n  box-shadow: 15px 0px 10px -15px #111;\n}\nbody {\n  background: url('landing-bg1.jpg') no-repeat center center fixed;\n  background-size: cover;\n}\n.full-width {\n  width: 80% !important;\n}\n.lft-cnt {\n  position: absolute;\n  left: 100px;\n  top: 200px;\n  text-align: left;\n}\n.lft-cnt h3 {\n  font-family: \"open-sans-regular\";\n  font-size: 44px;\n  line-height: 52px;\n  text-transform: uppercase;\n  color: #fff;\n  text-align: left;\n}\n.lft-cnt p {\n  font-family: \"open-sans-regular\";\n  font-size: 14px;\n  line-height: 22px;\n  color: #fff;\n  text-align: left;\n  width: 500px;\n  margin-top: 10px;\n}\n.logo-ai {\n  position: absolute;\n  left: 100px;\n  top: 10px;\n}\n.copyright {\n  text-align: center;\n  font-size: 12px;\n  font-family: \"open-sans-regular\";\n  color: #fff;\n  position: absolute;\n  bottom: 10px;\n  right: 25%;\n}\n.button3d {\n  width: 200px;\n  padding: 0;\n  margin: 10px 20px 10px 0;\n  font-weight: 600;\n  text-align: center;\n  line-height: 50px;\n  color: #FFF;\n  border-radius: 5px;\n  transition: all 0.2s;\n  font-family: \"open-sans-condensed-bold\" !important;\n  cursor: pointer;\n}\n.btnBlueGreen {\n  background: #00AE68;\n}\n.btnBlueGreen.addico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n.btnBlueGreen.addico .mat-icon {\n  font-size: 20px;\n}\n.btnLightBlue {\n  background: #5c4f9e;\n}\n.btnLightBlue.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n.btnLightBlue.addRef .material-icons {\n  font-size: 20px;\n}\n.btnLightBlue.tdBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n  text-transform: uppercase;\n}\n.btnLightBlue.tdBtn i {\n  font-size: 25px;\n  position: relative;\n  top: -2.5px;\n  right: -5px;\n}\n.btnLightBlue.tdBtn:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n}\n/* FADE */\n/* 3D */\n.btnBlueGreen.btnPush {\n  box-shadow: 0px 5px 0px 0px #007144;\n}\n.btnLightBlue.btnPush {\n  box-shadow: 0px 5px 0px 0px #382e68;\n}\n.btnOrange.btnPush {\n  box-shadow: 0px 5px 0px 0px #8c1808;\n}\n.btnPurple.btnPush {\n  box-shadow: 0px 5px 0px 0px #6D184B;\n}\n.btnPush:hover {\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n.btnBlueGreen.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #007144;\n}\n.btnLightBlue.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #1E8185;\n}\n.btnOrange.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #A66615;\n}\n.btnPurple.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #6D184B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tc2lnbnVwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLXNpZ251cC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVHLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNBSDtBRFNNO0VBQ0csdUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDUFQ7QURTUztFQUNHLGVBQUE7RUFDQSxXQUFBO0FDUFo7QURXTTtFQUdFLGdCQUFBO0FDWFI7QURjRztFQU9BLHlDQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBT0QsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBR0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUMxQkw7QUQ4Qkc7RUFDQyx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUM1Qko7QUQ2Qkk7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FDM0JQO0FEa0NHO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2hDTDtBRGlDSztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUMvQlA7QURtQ0c7RUFDQyx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ2pDSjtBRG1DSTtFQUNHLGVBQUE7RUFDQSxjQUFBO0FDakNQO0FEc0NHO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcENMO0FEcUNLO0VBQ0UsZ0JBQUE7QUNuQ1A7QURzQ0c7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNwQ0w7QURxQ0s7RUFDRSxZQUFBO0FDbkNQO0FEc0NHO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDcENMO0FEc0NHO0VBQ0UsZUFBQTtBQ3BDTDtBRHVDRztFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNyQ0w7QURzQ0s7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDcENQO0FEd0NDO0VBQ0csZUFBQTtFQUNBLGtEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0FDckNKO0FEMENHO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUN2Q0w7QUR5Q0c7RUFDRSxrQkFBQTtBQ3ZDTDtBRDJDQztFQUNHLHVDQUFBO0FDeENKO0FEMENDO0VBR0Usb0NBQUE7RUFDQSxrREFBQTtBQ3pDSDtBRDJDQztFQUNHLHdDQUFBO0FDeENKO0FEeUNJO0VBQ0csY0FBQTtBQ3ZDUDtBRDhEQztFQUVHLGNBQUE7RUFFQyx5QkFBQTtFQUNELGFBQUE7RUFDQyxtQkFBQTtFQUNBLHVCQUFBO0FDN0RMO0FEK0RJO0VBQ0UscUNBQUE7QUM3RE47QUQrREk7RUFDRSxvQ0FBQTtBQzdETjtBRCtESTtFQUNFLHFDQUFBO0FDN0ROO0FEK0RJO0VBQ0Usb0NBQUE7QUM3RE47QURrRUU7RUFDQyxnRUFBQTtFQUlBLHNCQUFBO0FDL0RIO0FEa0VDO0VBQ0cscUJBQUE7QUMvREo7QURrRUM7RUFDRyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUMvREo7QURnRUk7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFBZ0IsaUJBQUE7RUFDaEIseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUM3RE47QUQrREk7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFBZ0IsaUJBQUE7RUFDaEIsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDNUROO0FEZ0VDO0VBQ0csa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQzdESjtBRGdFQztFQUNHLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUM3REo7QURnRUM7RUFJRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrREFBQTtFQUNBLGVBQUE7QUNoRUg7QURtRUM7RUFDRSxtQkFBQTtBQ2hFSDtBRGlFRztFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQy9ETjtBRGdFTTtFQUNHLGVBQUE7QUM5RFQ7QURtRUM7RUFDRSxtQkFBQTtBQ2hFSDtBRGlFRztFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQy9ETjtBRGdFTTtFQUNHLGVBQUE7QUM5RFQ7QURpRUc7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDL0ROO0FEZ0VNO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUM5RFQ7QURnRU07RUFDRyxnQkFBQTtFQUNBLG1DQUFBO0FDOURUO0FEdUVDLFNBQUE7QUFHQSxPQUFBO0FBQ0E7RUFDRSxtQ0FBQTtBQ3RFSDtBRHlFQztFQUNFLG1DQUFBO0FDdEVIO0FEeUVDO0VBQ0UsbUNBQUE7QUN0RUg7QUR5RUM7RUFDRSxtQ0FBQTtBQ3RFSDtBRHlFQztFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN0RUg7QUR5RUM7RUFDRSxtQ0FBQTtBQ3RFSDtBRHlFQztFQUNFLG1DQUFBO0FDdEVIO0FEeUVDO0VBQ0UsbUNBQUE7QUN0RUg7QUR5RUM7RUFDRSxtQ0FBQTtBQ3RFSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tc2lnbnVwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXdyYXBwZXIge1xyXG4gICAvL2JhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2pvaW5ub3ctYmcuc3ZnJykgbm8tcmVwZWF0IHRvcCBsZWZ0O1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIGhlaWdodDogMTAwdmg7XHJcbiAgIC5sb2dpbi10b3B7XHJcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiMwMTc5NmQ7XHJcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgIFxyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItdG9wLmpwZycpIG5vLXJlcGVhdCB0b3AgbGVmdDtcclxuICAgICAgaDJ7XHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICBjb2xvcjogIzU5YmZmZjtcclxuICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgICAgICAvL3dpZHRoOiAzNTBweDtcclxuICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgLy9tYXJnaW4tbGVmdDogLTE0cHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubG9naW4taW1hZ2Uge1xyXG4gICAgICAgIC8vbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgIC8vbWFyZ2luLXRvcDogNjRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMiU7XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIC5sb2dpbi1jYXJkIHtcclxuICAgICAvL3dpZHRoOiA1ODBweDtcclxuICAgLy8gICBvcGFjaXR5OiAwLjk0O1xyXG4gICAvLyAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzN3B4KTtcclxuICAgLy8gICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzN3B4KTtcclxuICAgLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAvLyAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OCk7XHJcbiAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvcm0tYmcxLnBuZycpIG5vLXJlcGVhdDsgXHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgIHBhZGRpbmc6IDQ0cHggMHB4IDMzcHggNTBweDtcclxuICAgICAvL2JveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjEpOztcclxuICAgIC8vICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAvLyAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAvLyAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAvLyAgLW8tYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLy8gIC1tcy1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6bm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOjAgIWltcG9ydGFudDtcclxuICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAvL3RvcDogMTEwcHg7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHJpZ2h0OiAyMTBweDtcclxuICAgICB0b3A6IDE1MHB4O1xyXG4gICAgIGhlaWdodDo1MTBweDtcclxuICAgLy8gICB3aWR0aDo2MDBweDtcclxuICAgLy8gICBoZWlnaHQ6NjE3cHg7XHJcblxyXG4gICBoMntcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogODJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBzcGFue1xyXG4gICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1saWdodCc7XHJcbiAgICB9XHJcbiAgIH1cclxuICAgfVxyXG4gICAubG9naW4tY29udGFpbmVyIHtcclxuICAgICAvL2hlaWdodDogMTAwJTtcclxuICAgfVxyXG4gICAudGl0bGUtd3JwIHtcclxuICAgICB3aWR0aDogNjQwcHg7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiA0NHB4O1xyXG4gICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgfVxyXG4gICAgXHJcbiAgIH1cclxuICAgaDN7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogI0Q3NEYzMTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1sZWZ0OjAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy93aWR0aDogMzUwcHg7XHJcbiAgICBzcGFue1xyXG4gICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgY29sb3I6ICM1OWJmZmY7XHJcbiAgICAgICAvL21hcmdpbi1sZWZ0OiAtMTRweDtcclxuICAgIH1cclxuIH1cclxuIFxyXG4gICAudGl0bGUge1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1saWdodCc7XHJcbiAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICBjb2xvcjogI0Q3NEYzMTtcclxuICAgICAuc3Ryb25nIHtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIC5sb2dvLXdyYXBwZXIge1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBtYXJnaW46IDI0cHggMDtcclxuICAgICAubG9nbyB7XHJcbiAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgIH1cclxuICAgLmxvZ2luLWJ0bi13cnBwZXIge1xyXG4gICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG4gICAuYWNjb3VudC1idG4td3JwcGVyIHtcclxuICAgICBtYXJnaW4tdG9wOiA2MnB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBwIHtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgIH1cclxuICAgfVxyXG4gfVxyXG4gLmxvZ2luLXByaW1hcnktYnRuICB7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJyFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHghaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNWM0ZjllIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4gfVxyXG4gXHJcbiAub3RwLWxvZ2luLXdyYXBwZXIge1xyXG4gICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgfVxyXG4gICAubG9naW4tYnRuLXdycHBlciB7XHJcbiAgICAgbWFyZ2luOiAwIDAgMjRweCAwO1xyXG4gICB9XHJcbiB9XHJcbiBcclxuIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJzsgICBcclxuIH1cclxuIC5iZHJJbnB1dHtcclxuICAgLy9ib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiICFpbXBvcnRhbnQ7XHJcbiAgIC8vbWFyZ2luLWxlZnQ6IDIwcHghaW1wb3J0YW50O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJyFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAubWF0LWVycm9ye1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWxpZ2h0JztcclxuICAgICYud3R7XHJcbiAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuIH1cclxuIFxyXG4gLmZhZGVfcnVsZSB7XHJcbiAgIC8vICBoZWlnaHQ6IDFweDtcclxuICAgLy8gIC8vYmFja2dyb3VuZC1jb2xvcjogI0Q3NEYzMTtcclxuICAgLy8gIG9wYWNpdHk6IDAuNDtcclxuICAgLy8gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzN3B4KTtcclxuICAgLy8gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDM3cHgpO1xyXG4gICAvLyAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgLy8gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OCk7XHJcbiAgIC8vICBtYXJnaW46IDAgYXV0bztcclxuICAgLy8gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQobGVmdCAsIHdoaXRlIDIlLCAjRDc0RjMxIDUwJSwgd2hpdGUgOTglKTtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0ICwgd2hpdGUgMiUsICNENzRGMzEgNTAlLCB3aGl0ZSA5OCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCAsIHdoaXRlIDIlLCNENzRGMzEgNTAlLCB3aGl0ZSA5OCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCAsIHdoaXRlIDIlLCNENzRGMzEgNTAlLCB3aGl0ZSA5OCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0ICwgd2hpdGUgMiUsICNENzRGMzEgNTAlLCB3aGl0ZSA5OCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLCBsZWZ0IGJvdHRvbSwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDIsIHdoaXRlKSwgY29sb3Itc3RvcCgwLjUsICNENzRGMzEpLCBjb2xvci1zdG9wKDAuOTgsIHdoaXRlKSApO1xyXG4gICAgLy8gb3BhY2l0eTogMC45NDtcclxuIH1cclxuIFxyXG4gLnNoYWRvdyB7XHJcbiAgICAvL3dpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLy9oZWlnaHQ6IDEwMHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvL21hcmdpbjogNDBweDtcclxuICAgICYudG9wIHtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IC0xNXB4IDEwcHggLTE1cHggIzExMTsgICAgXHJcbiAgICB9XHJcbiAgICAmLmJvdHRvbSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggIzExMTsgICAgXHJcbiAgICB9XHJcbiAgICAmLmxlZnQge1xyXG4gICAgICBib3gtc2hhZG93OiAtMTVweCAwcHggMTBweCAtMTVweCAjMTExOyAgICBcclxuICAgIH1cclxuICAgICYucmlnaHQge1xyXG4gICAgICBib3gtc2hhZG93OiAxNXB4IDBweCAxMHB4IC0xNXB4ICMxMTE7ICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGJvZHkgeyBcclxuICAgYmFja2dyb3VuZDogdXJsKCcuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1iZzEuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuIH1cclxuXHJcbiAuZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5sZnQtY250e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxMDBweDtcclxuICAgIHRvcDoyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoM3tcclxuICAgICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtcmVndWxhcic7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDRweDtsaW5lLWhlaWdodDogNTJweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O2xpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gfVxyXG5cclxuIC5sb2dvLWFpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAwcHg7XHJcbiAgICB0b3A6MTBweDtcclxuIH1cclxuXHJcbiAuY29weXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtcmVndWxhcic7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbToxMHB4O1xyXG4gICAgcmlnaHQ6MjUlXHJcbiB9XHJcblxyXG4gLmJ1dHRvbjNkIHtcclxuICAgLy9kaXNwbGF5OiBibG9jaztcclxuICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIC8vZmxvYXQ6IGxlZnQ7XHJcbiAgIHdpZHRoOiAyMDBweDtcclxuICAgcGFkZGluZzogMDtcclxuICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICBjb2xvcjogI0ZGRjtcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICB0cmFuc2l0aW9uOiBhbGwgMC4ycyA7XHJcbiAgIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiIWltcG9ydGFudDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gfVxyXG4gXHJcbiAuYnRuQmx1ZUdyZWVuIHtcclxuICAgYmFja2dyb3VuZDogIzAwQUU2ODtcclxuICAgJi5hZGRpY297XHJcbiAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gLmJ0bkxpZ2h0Qmx1ZSB7XHJcbiAgIGJhY2tncm91bmQ6ICM1YzRmOWU7XHJcbiAgICYuYWRkUmVme1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAmLnRkQnRue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgaXtcclxuICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIHRvcDogLTIuNXB4O1xyXG4gICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgfVxyXG4gICAgICAmOmRpc2FibGVke1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gICBcclxuIH1cclxuIFxyXG5cclxuIFxyXG4gLyogRkFERSAqL1xyXG5cclxuIFxyXG4gLyogM0QgKi9cclxuIC5idG5CbHVlR3JlZW4uYnRuUHVzaCB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMDA3MTQ0O1xyXG4gfVxyXG4gXHJcbiAuYnRuTGlnaHRCbHVlLmJ0blB1c2gge1xyXG4gICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzM4MmU2ODtcclxuIH1cclxuIFxyXG4gLmJ0bk9yYW5nZS5idG5QdXNoIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM4YzE4MDg7XHJcbiB9XHJcbiBcclxuIC5idG5QdXJwbGUuYnRuUHVzaCB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNkQxODRCO1xyXG4gfVxyXG4gXHJcbiAuYnRuUHVzaDpob3ZlciB7XHJcbiAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuIH1cclxuIFxyXG4gLmJ0bkJsdWVHcmVlbi5idG5QdXNoOmhvdmVyIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMwMDcxNDQ7XHJcbiB9XHJcbiBcclxuIC5idG5MaWdodEJsdWUuYnRuUHVzaDpob3ZlciB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMUU4MTg1O1xyXG4gfVxyXG4gXHJcbiAuYnRuT3JhbmdlLmJ0blB1c2g6aG92ZXIge1xyXG4gICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI0E2NjYxNTtcclxuIH1cclxuIFxyXG4gLmJ0blB1cnBsZS5idG5QdXNoOmhvdmVyIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICM2RDE4NEI7XHJcbiB9XHJcbiBcclxuIiwiLmxvZ2luLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tdG9wIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6ICM1OWJmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXRvcCBoMiBzcGFuIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi10b3AgLmxvZ2luLWltYWdlIHtcbiAgbWFyZ2luLWxlZnQ6IDIyJTtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvcm0tYmcxLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDQ0cHggMHB4IDMzcHggNTBweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMTBweDtcbiAgdG9wOiAxNTBweDtcbiAgaGVpZ2h0OiA1MTBweDtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1jYXJkIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA4MnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLWNhcmQgaDIgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtbGlnaHRcIjtcbn1cbi5sb2dpbi13cmFwcGVyIC50aXRsZS13cnAge1xuICB3aWR0aDogNjQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLnRpdGxlLXdycCAucGFnZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXJpZ2h0OiA0NHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLXdyYXBwZXIgaDMge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogI0Q3NEYzMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tbGVmdDogMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5sb2dpbi13cmFwcGVyIGgzIHNwYW4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNTliZmZmO1xufVxuLmxvZ2luLXdyYXBwZXIgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1saWdodFwiO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICNENzRGMzE7XG59XG4ubG9naW4td3JhcHBlciAudGl0bGUgLnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubG9naW4td3JhcHBlciAubG9nby13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDI0cHggMDtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dvLXdyYXBwZXIgLmxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG59XG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tYnRuLXdycHBlciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5sb2dpbi13cmFwcGVyIC5hY2NvdW50LWJ0bi13cnBwZXIge1xuICBtYXJnaW4tdG9wOiA2MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW4td3JhcHBlciAuYWNjb3VudC1idG4td3JwcGVyIHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4ubG9naW4tcHJpbWFyeS1idG4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM0ZjllICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLm90cC1sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ub3RwLWxvZ2luLXdyYXBwZXIgLmxvZ2luLWJ0bi13cnBwZXIge1xuICBtYXJnaW46IDAgMCAyNHB4IDA7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG59XG5cbi5iZHJJbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCIgIWltcG9ydGFudDtcbn1cblxuLm1hdC1lcnJvciB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtbGlnaHRcIjtcbn1cbi5tYXQtZXJyb3Iud3Qge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNoYWRvdyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaGFkb3cudG9wIHtcbiAgYm94LXNoYWRvdzogMHB4IC0xNXB4IDEwcHggLTE1cHggIzExMTtcbn1cbi5zaGFkb3cuYm90dG9tIHtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjMTExO1xufVxuLnNoYWRvdy5sZWZ0IHtcbiAgYm94LXNoYWRvdzogLTE1cHggMHB4IDEwcHggLTE1cHggIzExMTtcbn1cbi5zaGFkb3cucmlnaHQge1xuICBib3gtc2hhZG93OiAxNXB4IDBweCAxMHB4IC0xNXB4ICMxMTE7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1iZzEuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG59XG5cbi5sZnQtY250IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDBweDtcbiAgdG9wOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5sZnQtY250IGgzIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubGZ0LWNudCBwIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxvZ28tYWkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwMHB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMjUlO1xufVxuXG4uYnV0dG9uM2Qge1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bkJsdWVHcmVlbiB7XG4gIGJhY2tncm91bmQ6ICMwMEFFNjg7XG59XG4uYnRuQmx1ZUdyZWVuLmFkZGljbyB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uYnRuQmx1ZUdyZWVuLmFkZGljbyAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG5MaWdodEJsdWUge1xuICBiYWNrZ3JvdW5kOiAjNWM0ZjllO1xufVxuLmJ0bkxpZ2h0Qmx1ZS5hZGRSZWYge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5idG5MaWdodEJsdWUuYWRkUmVmIC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5idG5MaWdodEJsdWUudGRCdG4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5idG5MaWdodEJsdWUudGRCdG4gaSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yLjVweDtcbiAgcmlnaHQ6IC01cHg7XG59XG4uYnRuTGlnaHRCbHVlLnRkQnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM0ODQ4NDg7XG59XG5cbi8qIEZBREUgKi9cbi8qIDNEICovXG4uYnRuQmx1ZUdyZWVuLmJ0blB1c2gge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzAwNzE0NDtcbn1cblxuLmJ0bkxpZ2h0Qmx1ZS5idG5QdXNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMzODJlNjg7XG59XG5cbi5idG5PcmFuZ2UuYnRuUHVzaCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjOGMxODA4O1xufVxuXG4uYnRuUHVycGxlLmJ0blB1c2gge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzZEMTg0Qjtcbn1cblxuLmJ0blB1c2g6aG92ZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5idG5CbHVlR3JlZW4uYnRuUHVzaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMDA3MTQ0O1xufVxuXG4uYnRuTGlnaHRCbHVlLmJ0blB1c2g6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzFFODE4NTtcbn1cblxuLmJ0bk9yYW5nZS5idG5QdXNoOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICNBNjY2MTU7XG59XG5cbi5idG5QdXJwbGUuYnRuUHVzaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjNkQxODRCO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/login-signup/login/login.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/login-signup/login/login.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginSignupLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _services_http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _services_InputValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/InputValidation */
    "./src/app/services/InputValidation.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/message.service */
    "./src/app/services/message.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, socialAuthService, http, inputValidation, router, messageService) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.socialAuthService = socialAuthService;
        this.http = http;
        this.inputValidation = inputValidation;
        this.router = router;
        this.messageService = messageService;
        this.isSubmitted = false;
        this.isLoading = false;
        this.errorMessage = '';
        this.loaderMsg = '';
        this.isOtpScreen = false;
        this.isOtpGenerated = false;
        this.users = [{
          id: 1,
          userName: 'admin',
          password: 'admin',
          role: 'ADMIN'
        }];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.socialAuthService.authState.subscribe(function (user) {
            if (!user) {
              return;
            }

            _this2.user = user;

            _this2.doSocialLogin(_this2.user);
          });
          this.loginForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.otpForm = this.fb.group({
            phoneno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
            otpnum: ['']
          });
        }
      }, {
        key: "doLogin",
        value: function doLogin() {
          var _this3 = this;

          this.isSubmitted = true;

          if (this.loginForm.invalid) {
            return;
          }

          var user = this.loginForm.value; // const loggedUser = this.users.filter((data) => {
          //   return (data.userName === user.userName && data.password === user.password);
          // });
          // if (loggedUser.length) {
          //   this.setLoginSessionAndRouting(loggedUser[0]);
          //   return;
          // }

          this.isLoading = true;
          this.http.loginRequest(this.loginForm.value).subscribe(function (result) {
            _this3.isLoading = false;

            if (result.errorMsg) {
              alert(result.errorMsg);
              return;
            }

            var loggedUserDet = result.userdetail;
            loggedUserDet.role = loggedUserDet.role[0];
            loggedUserDet.rights = result.roleRights;

            _this3.setLoginSessionAndRouting(loggedUserDet);
          }, function (error) {
            _this3.isLoading = false;
            _this3.errorMessage = error.error.message ? error.error.message : 'Invalid username or passowrd.';
          });
        }
      }, {
        key: "showHideOTPScreen",
        value: function showHideOTPScreen(option) {
          this.errorMessage = '';
          this.isOtpGenerated = false;
          this.otpForm.reset();
          this.isOtpScreen = option;
        }
      }, {
        key: "validateUserAndGenerateOtp",
        value: function validateUserAndGenerateOtp() {
          var _this4 = this;

          if (this.otpForm.invalid) {
            return;
          }

          this.isLoading = true;
          this.loaderMsg = 'Sending OTP to your phone.';
          this.http.loginRequest({
            phoneno: this.otpForm.controls.phoneno.value
          }).subscribe(function (result) {
            _this4.errorMessage = '';

            _this4.generateOtp();
          }, function (error) {
            _this4.isLoading = false;
            _this4.errorMessage = 'Entered mobile number is not regiester with DQ. Please sign up to DQ.';
          });
        }
      }, {
        key: "generateOtp",
        value: function generateOtp() {
          var _this5 = this;

          if (this.otpForm.invalid) {
            return;
          }

          this.isLoading = true;
          this.loaderMsg = 'Sending OTP to your phone.';
          this.http.generateOTP(this.otpForm.controls.phoneno.value).subscribe(function (result) {
            _this5.isLoading = false;
            _this5.isOtpGenerated = true;
            _this5.errorMessage = '';
          }, function (error) {
            _this5.isLoading = false;
            _this5.errorMessage = error.error.ResponseMsg;
          });
        }
      }, {
        key: "validateOtp",
        value: function validateOtp() {
          var _this6 = this;

          if (this.otpForm.invalid) {
            return;
          }

          this.isLoading = true;
          this.loaderMsg = 'Validating OTP...';
          this.http.validateOTP(this.otpForm.value).subscribe(function (result) {
            _this6.isLoading = false;
            _this6.errorMessage = '';

            _this6.setLoginSessionAndRouting(result, false);
          }, function (error) {
            _this6.isLoading = false;
            _this6.errorMessage = 'Invalid OTP. Please try again.';
          });
        }
      }, {
        key: "reloadCurrentRoute",
        value: function reloadCurrentRoute() {
          var _this7 = this;

          this.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(function () {
            return _this7.router.navigate([location.pathname]);
          });
        }
      }, {
        key: "doSocialLogin",
        value: function doSocialLogin(user) {
          var _this8 = this;

          var payload = {};

          if (user.provider === 'GOOGLE') {
            payload = {
              userName: user.email,
              fullname: user.firstName + ' ' + user.lastName,
              LastName: user.lastName,
              DPPath: user.photoUrl,
              provider: user.provider,
              AId: user.id
            };
          } else {
            payload = {
              userName: user.email,
              fullname: user.firstName + ' ' + user.lastName,
              DPPath: user.photoUrl,
              provider: user.provider,
              AId: user.id
            };
          }

          this.isSubmitted = true;
          this.isLoading = true;
          this.http.socialLoginRequest(payload).subscribe(function (result) {
            _this8.isLoading = false;

            _this8.setLoginSessionAndRouting(result, true);

            _this8.reloadCurrentRoute();
          }, function (error) {
            _this8.isLoading = false;
            _this8.errorMessage = error.error.ResponseMsg;
          });
        }
      }, {
        key: "setLoginSessionAndRouting",
        value: function setLoginSessionAndRouting(result, isSocial) {
          console.log(result);
          var session = Object.assign({}, result, {
            id: result.userName,
            isLoggedIn: true,
            isSocial: isSocial
          });
          localStorage.setItem('dq_token', JSON.stringify(session));
          localStorage.setItem('dq_rights', JSON.stringify(session));
          localStorage.setItem('isInitLoad', JSON.stringify({
            isInitLoad: true
          }));
          this.router.navigate(["auth/dashboard"]);
        }
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var fbLoginOptions = {
            scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages'
          }; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11

          this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID);
        }
      }, {
        key: "signInWithFB",
        value: function signInWithFB() {
          var googleLoginOptions = {
            scope: 'https://www.googleapis.com/auth/userinfo.email'
          }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

          this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID);
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.socialAuthService.signOut();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["SocialAuthService"]
      }, {
        type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: _services_InputValidation__WEBPACK_IMPORTED_MODULE_6__["InputValidation"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-signup/login/login.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/login-signup/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/login-signup/signup/signup.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/login-signup/signup/signup.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginSignupSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-wrapper {\n  background: url('joinnow-bg.svg') no-repeat top left;\n  background-size: cover;\n  height: 100%;\n  height: 100vh;\n}\n.login-wrapper .login-card {\n  width: 580px;\n  opacity: 0.94;\n  backdrop-filter: blur(37px);\n  -webkit-backdrop-filter: blur(37px);\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.68);\n  overflow: hidden;\n  margin-bottom: 0;\n  padding: 44px 55px 33px 55px;\n  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n}\n.login-wrapper .login-container {\n  height: 100%;\n}\n.login-wrapper .title-wrp {\n  width: 640px;\n  margin-right: 100px;\n  text-align: center;\n  margin-top: 100px;\n}\n.login-wrapper .title-wrp .page-title {\n  font-size: 52px;\n  text-align: left;\n  font-weight: 300;\n  margin-right: 44px;\n  color: #fff;\n  text-align: center;\n}\n.login-wrapper .title-wrp .login-image {\n  max-width: 600px;\n  margin-top: 64px;\n}\n.login-wrapper .title {\n  font: italic normal 900 20px/35px Roboto;\n  text-align: center;\n  font-weight: 300;\n  margin-bottom: 44px;\n  font-weight: 100;\n}\n.login-wrapper .title .strong {\n  font-weight: 500;\n}\n.login-wrapper .logo-wrapper {\n  text-align: center;\n  margin: 24px 0;\n}\n.login-wrapper .logo-wrapper .logo {\n  width: 120px;\n}\n.login-wrapper .mat-form-field {\n  font-size: 18px;\n  font-weight: 300;\n}\n.login-wrapper .login-btn-wrpper {\n  margin-top: 24px;\n  text-align: center;\n}\n.login-wrapper .account-btn-wrpper {\n  margin-top: 32px;\n  text-align: center;\n}\n.login-wrapper .account-btn-wrpper p {\n  font-weight: 400;\n  margin-bottom: 14px;\n}\n.otp-login-wrapper .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0;\n  padding: 0;\n}\n.otp-login-wrapper .login-btn-wrpper {\n  margin: 0 0 24px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tc2lnbnVwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tc2lnbnVwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvREFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0RBQUE7RUFDQSxxREFBQTtFQUNBLGdEQUFBO0VBQ0EsaURBQUE7QUNFSjtBREFFO0VBQ0UsWUFBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUo7QURESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNHTjtBRERJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dOO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNFLGdCQUFBO0FDRU47QURDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0FDRU47QURDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VOO0FESUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0RKO0FER0U7RUFDRSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1zaWdudXAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9qb2lubm93LWJnLnN2ZycpIG5vLXJlcGVhdCB0b3AgbGVmdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC5sb2dpbi1jYXJkIHtcclxuICAgIHdpZHRoOiA1ODBweDtcclxuICAgIG9wYWNpdHk6IDAuOTQ7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzdweCk7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzN3B4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiA0NHB4IDU1cHggMzNweCA1NXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC1vLWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC1tcy1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAudGl0bGUtd3JwIHtcclxuICAgIHdpZHRoOiA2NDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDQ0cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubG9naW4taW1hZ2Uge1xyXG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQ6IGl0YWxpYyBub3JtYWwgOTAwIDIwcHgvMzVweCBSb2JvdG87O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgLnN0cm9uZyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sb2dvLXdyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5sb2dpbi1idG4td3JwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hY2NvdW50LWJ0bi13cnBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm90cC1sb2dpbi13cmFwcGVyIHtcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5sb2dpbi1idG4td3JwcGVyIHtcclxuICAgIG1hcmdpbjogMCAwIDI0cHggMDtcclxuICB9XHJcbn1cclxuIiwiLmxvZ2luLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvam9pbm5vdy1iZy5zdmdcIikgbm8tcmVwZWF0IHRvcCBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tY2FyZCB7XG4gIHdpZHRoOiA1ODBweDtcbiAgb3BhY2l0eTogMC45NDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDM3cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzN3B4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogNDRweCA1NXB4IDMzcHggNTVweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1vLWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1zLWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4td3JhcHBlciAudGl0bGUtd3JwIHtcbiAgd2lkdGg6IDY0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLnRpdGxlLXdycCAucGFnZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXJpZ2h0OiA0NHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLXdyYXBwZXIgLnRpdGxlLXdycCAubG9naW4taW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tdG9wOiA2NHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLnRpdGxlIHtcbiAgZm9udDogaXRhbGljIG5vcm1hbCA5MDAgMjBweC8zNXB4IFJvYm90bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLnRpdGxlIC5zdHJvbmcge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ28td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyNHB4IDA7XG59XG4ubG9naW4td3JhcHBlciAubG9nby13cmFwcGVyIC5sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLWJ0bi13cnBwZXIge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW4td3JhcHBlciAuYWNjb3VudC1idG4td3JwcGVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLXdyYXBwZXIgLmFjY291bnQtYnRuLXdycHBlciBwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLm90cC1sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ub3RwLWxvZ2luLXdyYXBwZXIgLmxvZ2luLWJ0bi13cnBwZXIge1xuICBtYXJnaW46IDAgMCAyNHB4IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/login-signup/signup/signup.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/login-signup/signup/signup.component.ts ***!
    \********************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsLoginSignupSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _services_http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _services_InputValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/InputValidation */
    "./src/app/services/InputValidation.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/message.service */
    "./src/app/services/message.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(fb, socialAuthService, http, inputValidation, router, messageService) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
        this.socialAuthService = socialAuthService;
        this.http = http;
        this.inputValidation = inputValidation;
        this.router = router;
        this.messageService = messageService;
        this.isSubmitted = false;
        this.isLoading = false;
        this.errorMessage = '';
        this.loaderMsg = '';
        this.mode = 'login';
        this.isOtpScreen = false;
        this.isConfirmPasswordError = false;
        this.registerUser = {};
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.socialAuthService.authState.subscribe(function (user) {
            if (!user) {
              return;
            }

            _this9.user = user;

            _this9.doSocialLogin(_this9.user);
          });
          this.signupForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            phoneno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.otpForm = this.fb.group({
            phoneno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            otpnum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "doSignup",
        value: function doSignup() {
          var _this10 = this;

          this.isSubmitted = true;
          this.isConfirmPasswordError = false;
          var signup = Object.assign({}, this.signupForm.value);

          if (this.signupForm.invalid) {
            return;
          }

          if (signup.password !== signup.confirm_password) {
            this.isConfirmPasswordError = true;
            return;
          }

          delete signup.confirm_password;
          this.isLoading = true;
          this.http.signupRequest(this.signupForm.value).subscribe(function (result) {
            _this10.generateOtp();

            _this10.isLoading = false;

            _this10.otpForm.controls.phoneno.setValue(_this10.signupForm.value.phoneno);

            _this10.isOtpScreen = true;
            _this10.errorMessage = '';
            _this10.registerUser = result;
          }, function (error) {
            _this10.isLoading = false;
            _this10.errorMessage = error.error.message ? error.error.message : 'The username or email or phone number already found.';
          });
        }
      }, {
        key: "generateOtp",
        value: function generateOtp() {
          var _this11 = this;

          this.isLoading = true;
          this.loaderMsg = 'Sending OTP to your phone.';
          this.http.generateOTP(this.signupForm.value.phoneno).subscribe(function (result) {
            _this11.isLoading = false;
            _this11.errorMessage = '';
          }, function (error) {
            _this11.isLoading = false;
            _this11.errorMessage = error.error.ResponseMsg;
          });
        }
      }, {
        key: "validateOtp",
        value: function validateOtp() {
          var _this12 = this;

          if (this.otpForm.invalid) {
            return;
          }

          this.isLoading = true;
          this.loaderMsg = 'Validating OTP...';
          this.http.validateOTP(this.otpForm.value).subscribe(function (result) {
            _this12.isLoading = false;
            _this12.errorMessage = '';

            _this12.setLoginSessionAndRouting(_this12.registerUser, false);
          }, function (error) {
            _this12.isLoading = false;
            _this12.errorMessage = 'Invalid OTP. Please try again.';
          });
        }
      }, {
        key: "verifyOTPLater",
        value: function verifyOTPLater() {
          this.setLoginSessionAndRouting(this.registerUser, false);
        }
      }, {
        key: "reloadCurrentRoute",
        value: function reloadCurrentRoute() {
          var _this13 = this;

          this.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(function () {
            return _this13.router.navigate([location.pathname]);
          });
        }
      }, {
        key: "doSocialLogin",
        value: function doSocialLogin(user) {
          var _this14 = this;

          var payload = {};

          if (user.provider === 'GOOGLE') {
            payload = {
              userName: user.email,
              fullname: user.firstName + ' ' + user.lastName,
              DPPath: user.photoUrl,
              provider: user.provider,
              AId: user.id
            };
          } else {
            payload = {
              userName: user.email,
              fullname: user.firstName + ' ' + user.lastName,
              DPPath: user.photoUrl,
              provider: user.provider,
              AId: user.id
            };
          }

          this.isSubmitted = true;
          this.isLoading = true;
          this.http.socialLoginRequest(payload).subscribe(function (result) {
            _this14.isLoading = false;

            _this14.setLoginSessionAndRouting(result, true);

            _this14.reloadCurrentRoute();
          }, function (error) {
            _this14.isLoading = false;
            _this14.errorMessage = error.error.ResponseMsg;
          });
        }
      }, {
        key: "setLoginSessionAndRouting",
        value: function setLoginSessionAndRouting(result, isSocial) {
          var session = Object.assign({}, result, {
            isLoggedIn: true,
            isSocial: isSocial
          });
          localStorage.setItem('dq_token', JSON.stringify(session));
          localStorage.setItem('isInitLoad', JSON.stringify({
            isInitLoad: true
          }));
          this.messageService.sendLoginMessage(session);
          this.router.navigate(["auth/home"]);
        }
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var fbLoginOptions = {
            scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages'
          }; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11

          this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID);
        }
      }, {
        key: "signInWithFB",
        value: function signInWithFB() {
          var googleLoginOptions = {
            scope: 'https://www.googleapis.com/auth/userinfo.email'
          }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

          this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID);
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.socialAuthService.signOut();
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["SocialAuthService"]
      }, {
        type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: _services_InputValidation__WEBPACK_IMPORTED_MODULE_6__["InputValidation"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-signup/signup/signup.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/components/login-signup/signup/signup.component.scss"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/services/InputValidation.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/InputValidation.ts ***!
    \*********************************************/

  /*! exports provided: InputValidation */

  /***/
  function srcAppServicesInputValidationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputValidation", function () {
      return InputValidation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InputValidation = /*#__PURE__*/function () {
      function InputValidation() {
        _classCallCheck(this, InputValidation);
      }

      _createClass(InputValidation, [{
        key: "numericOnly",
        value: function numericOnly(event) {
          var patt = /^([0-9])$/;
          var result = patt.test(event.key);
          return result;
        }
      }, {
        key: "numericSpaceOnly",
        value: function numericSpaceOnly(event) {
          var patt = /^([0-9 ])$/;
          var result = patt.test(event.key);
          return result;
        }
      }, {
        key: "numericDotOnly",
        value: function numericDotOnly(event) {
          var patt = /^([0-9.])$/;
          var result = patt.test(event.key);
          return result;
        }
      }, {
        key: "alphaNumericOnly",
        value: function alphaNumericOnly(event) {
          var patt = /^\w+$/;
          var result = patt.test(event.key);
          return result;
        }
      }, {
        key: "alphaNumericAndSpecialCharOnly",
        value: function alphaNumericAndSpecialCharOnly(event) {
          var patt = /^[a-zA-Z0-9()&#-', ]*$/;
          var result = patt.test(event.key);
          return result;
        }
      }, {
        key: "alphabetsAndSpaceOnly",
        value: function alphabetsAndSpaceOnly(event) {
          var patt = /^[a-zA-Z ]*$/;
          var result = patt.test(event.key);
          return result;
        }
      }, {
        key: "emailValidator",
        value: function emailValidator(email) {
          var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!EMAIL_REGEXP.test(email)) {
            return false;
          }

          return true;
        }
      }]);

      return InputValidation;
    }();

    InputValidation = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InputValidation);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(router) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
        this.session = {};
        this.isAuthenticated();
      }

      _createClass(AuthGuardService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = localStorage.getItem('dq_token');

          if (token) {
            token = JSON.parse(token);
          }

          this.session = token;
          return token && token.id ? true : false;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.session && this.session.id ? this.session.id : '';
        }
      }, {
        key: "getLoggedUser",
        value: function getLoggedUser() {
          return this.session && this.session ? this.session : {};
        }
      }, {
        key: "getUserRole",
        value: function getUserRole() {
          return this.session && this.session ? this.session : {};
        }
      }, {
        key: "getLoggedInUserDetails",
        value: function getLoggedInUserDetails() {
          return this.session ? this.session : {};
        }
      }, {
        key: "isAdminUser",
        value: function isAdminUser() {
          var user = this.session ? this.session : {};

          if (user.role === 'RULE_ANALYST') {
            return true;
          }

          return false;
        }
      }, {
        key: "canActivate",
        value: function canActivate() {
          if (!this.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
          }

          return true;
        }
      }, {
        key: "isUserLoggedIn",
        get: function get() {
          return this.isAuthenticated;
        }
      }, {
        key: "isAdmin",
        get: function get() {
          return this.isAdminUser;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/common.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/common.service.ts ***!
    \********************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppServicesCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommonService = function CommonService() {
      _classCallCheck(this, CommonService);
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/services/file-format-pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/file-format-pipe.ts ***!
    \**********************************************/

  /*! exports provided: FileFormatPipe */

  /***/
  function srcAppServicesFileFormatPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileFormatPipe", function () {
      return FileFormatPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FileFormatPipe = /*#__PURE__*/function () {
      function FileFormatPipe() {
        _classCallCheck(this, FileFormatPipe);
      }

      _createClass(FileFormatPipe, [{
        key: "transform",
        value: function transform(path) {
          if (!path) {
            return false;
          }

          if (path.indexOf('.jpg') > 0 || path.indexOf('.jpeg') > 0 || path.indexOf('.png') > 0 || path.indexOf('.gif') > 0 || path.indexOf('.jfif') > 0 || path.indexOf('.webp') > 0 || path.indexOf('.heif') > 0 || path.indexOf('.tiff') > 0) {
            return 'images';
          } else {
            return 'docs';
          }
        }
      }]);

      return FileFormatPipe;
    }();

    FileFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'fileformat'
    })], FileFormatPipe);
    /***/
  },

  /***/
  "./src/app/services/format-cells-pipe.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/format-cells-pipe.ts ***!
    \***********************************************/

  /*! exports provided: FormatCellsPipe */

  /***/
  function srcAppServicesFormatCellsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatCellsPipe", function () {
      return FormatCellsPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormatCellsPipe = /*#__PURE__*/function () {
      function FormatCellsPipe() {
        _classCallCheck(this, FormatCellsPipe);
      }

      _createClass(FormatCellsPipe, [{
        key: "transform",
        value: function transform(value, settings) {
          var _ref = settings || [],
              bgSettings = _ref.bgSettings;

          var bg = bgSettings.filter(function (setting) {
            return +value >= +setting.min && +value <= +setting.max;
          });

          if (bg && bg.length) {
            return bg[0].color;
          }

          return 'transparent';
        }
      }]);

      return FormatCellsPipe;
    }();

    FormatCellsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'formatCell'
    })], FormatCellsPipe);
    /***/
  },

  /***/
  "./src/app/services/http-interceptor.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/http-interceptor.service.ts ***!
    \******************************************************/

  /*! exports provided: HttpInterceptorService */

  /***/
  function srcAppServicesHttpInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function () {
      return HttpInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./message.service */
    "./src/app/services/message.service.ts");

    var HttpInterceptorService = /*#__PURE__*/function () {
      function HttpInterceptorService(messageService) {
        _classCallCheck(this, HttpInterceptorService);

        this.messageService = messageService;
      }

      _createClass(HttpInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this15 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {}, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
              if (err.status === 401) {
                _this15.messageService.sendCommonMessage({
                  topic: 'logout',
                  reason: 'Unauthorized'
                });
              }

              return;
            }
          }));
        }
      }]);

      return HttpInterceptorService;
    }();

    HttpInterceptorService.ctorParameters = function () {
      return [{
        type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
      }];
    };

    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HttpInterceptorService);
    /***/
  },

  /***/
  "./src/app/services/http-service.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/http-service.service.ts ***!
    \**************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http, authGuardService) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.authGuardService = authGuardService;
        this.rootUrl = '';
        this.cancelGetPersonalDetailsReq$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); // this.rootUrl = env.baseUrl;
        // Prod

        this.rootUrl = 'https://zzv4j5kpjh.execute-api.us-west-2.amazonaws.com/dev'; // Dev

        this.rootUrl = 'http://localhost';
      }

      _createClass(HttpService, [{
        key: "uploadSourceCSV",
        value: function uploadSourceCSV(payload) {
          return this.http.post("".concat(this.rootUrl, "/upload"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "uploadReferenceCSV",
        value: function uploadReferenceCSV(payload) {
          return this.http.post("".concat(this.rootUrl, "/refupload"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getColumnsRules",
        value: function getColumnsRules(payload) {
          return this.http.post("".concat(this.rootUrl, "/api/rules"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "launchAnalysis",
        value: function launchAnalysis(payload) {
          return this.http.post("".concat(this.rootUrl, "/LaunchAnalysis"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "launchAnalysisDetails",
        value: function launchAnalysisDetails(id) {
          return this.http.get("".concat(this.rootUrl, "/api/getLaunchResult?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "launchAnalysisByKey",
        value: function launchAnalysisByKey(payload) {
          return this.http.post("".concat(this.rootUrl, "/api/LaunchAnalysisbyKeyfromDb"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "launchDelayAnalysisByKey",
        value: function launchDelayAnalysisByKey(payload) {
          return this.http.post("".concat(this.rootUrl, "/api/DelayAnalysis"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "launchDelayAnalysisByAirport",
        value: function launchDelayAnalysisByAirport(payload) {
          return this.http.post("".concat(this.rootUrl, "/api/DelayAnalysisbyAirPortnew"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "saveAnalysis",
        value: function saveAnalysis(payload, method) {
          return this.http[method]("".concat(this.rootUrl, "/CreateAnalysis"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "createEditRuleset",
        value: function createEditRuleset(payload, method) {
          return this.http[method]("".concat(this.rootUrl, "/api/CreateRuleSet"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getAllAnalysis",
        value: function getAllAnalysis() {
          return this.http.get("".concat(this.rootUrl, "/getAllAnalysis")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        } // New APIs

      }, {
        key: "saveSource",
        value: function saveSource(payload, method) {
          return this.http[method]("".concat(this.rootUrl, "/api/configureSource"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "uploadSource",
        value: function uploadSource(payload) {
          return this.http.post("".concat(this.rootUrl, "/api/uploadSource"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getSources",
        value: function getSources() {
          return this.http.get("".concat(this.rootUrl, "/api/getAllSources")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getSourcePreview",
        value: function getSourcePreview(sourceId) {
          return this.http.get("".concat(this.rootUrl, "/getSourcePreview?sourceId=").concat(sourceId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getPreview",
        value: function getPreview(payload) {
          return this.http.post("".concat(this.rootUrl, "/api/getPreview"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getProfiles",
        value: function getProfiles(payload) {
          return this.http.post("".concat(this.rootUrl, "/api/profile"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getCorrMatrix",
        value: function getCorrMatrix(payload) {
          return this.http.post("".concat(this.rootUrl, "/api/getCorrMatrix"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        } // Users Management

      }, {
        key: "loginRequest",
        value: function loginRequest(payload) {
          return this.http.post("".concat(this.rootUrl, "/api/signin"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getUsersList",
        value: function getUsersList() {
          return this.http.get("".concat(this.rootUrl, "/api/getUsers")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "createEditUser",
        value: function createEditUser(payload, mode) {
          return this.http[mode === 'create' ? 'post' : 'put']("".concat(this.rootUrl, "/api/createuser"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getDepartmentsList",
        value: function getDepartmentsList() {
          return this.http.get("".concat(this.rootUrl, "/api/getDept")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "createEditDepartment",
        value: function createEditDepartment(payload, mode) {
          return this.http[mode === 'create' ? 'post' : 'put']("".concat(this.rootUrl, "/api/createDept"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getRolesList",
        value: function getRolesList() {
          return this.http.get("".concat(this.rootUrl, "/api/getRoles")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "createEditRole",
        value: function createEditRole(payload, mode) {
          return this.http[mode === 'create' ? 'post' : 'put']("".concat(this.rootUrl, "/api/createRole"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getRightsList",
        value: function getRightsList() {
          return this.http.get("".concat(this.rootUrl, "/api/getAllRights")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getFrequencyList",
        value: function getFrequencyList() {
          return this.http.get("".concat(this.rootUrl, "/api/getfrequency")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "createEditFrequency",
        value: function createEditFrequency(payload, mode) {
          return this.http[mode === 'create' ? 'post' : 'put']("".concat(this.rootUrl, "/api/createfrequency"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getMultisourceList",
        value: function getMultisourceList() {
          return this.http.get("".concat(this.rootUrl, "/api/getmultisource")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "createEditMultisource",
        value: function createEditMultisource(payload, mode) {
          return this.http[mode === 'create' ? 'post' : 'put']("".concat(this.rootUrl, "/api/createmultisource"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "signupRequest",
        value: function signupRequest(payload) {
          return this.http.post("".concat(this.rootUrl, "users/registration"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        } // Get user personal details

      }, {
        key: "getAccountDetails",
        value: function getAccountDetails(userId) {
          var header = this.getAuthHeaders();
          return this.http.get("".concat(this.rootUrl, "users/").concat(userId), header).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onCancelGetPersonalDetailsReq()));
        }
      }, {
        key: "cancelGetPersonalDetailsReq",
        value: function cancelGetPersonalDetailsReq() {
          this.cancelGetPersonalDetailsReq$.next();
        }
      }, {
        key: "onCancelGetPersonalDetailsReq",
        value: function onCancelGetPersonalDetailsReq() {
          return this.cancelGetPersonalDetailsReq$.asObservable();
        } // // Upload Image

      }, {
        key: "uploadImage",
        value: function uploadImage(userId, formData) {
          var header = this.getAuthHeaders();
          return this.http.post("".concat(this.rootUrl, "user/").concat(userId, "/upload"), formData, header).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        } // deleteRecord(userId, recordId, path): Observable<any> {
        //   const header: any = this.getAuthHeaders();
        //   return this.http.delete<any>(`${this.rootUrl}userprof/${userId}/${path}/${recordId}`, header).pipe(
        //     tap((res) => {
        //     }),
        //     catchError(err => {
        //       return throwError(err);
        //     }),
        //   );
        // }

      }, {
        key: "getNotificationsCount",
        value: function getNotificationsCount(userId) {
          return this.http.get("".concat(this.rootUrl, "user/").concat(userId, "/notifications/count")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getNotifications",
        value: function getNotifications(userId) {
          return this.http.get("".concat(this.rootUrl, "user/").concat(userId, "/notifications")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "makeNotificationRead",
        value: function makeNotificationRead(userId, notificationId) {
          return this.http.put("".concat(this.rootUrl, "user/").concat(userId, "/notifications/").concat(notificationId, "/status?status=true"), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(payload) {
          return this.http.post("".concat(this.rootUrl, "user/resetpassword"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "generateOTP",
        value: function generateOTP(phoneno) {
          return this.http.get("".concat(this.rootUrl, "users/generateOtp?phoneno=").concat(phoneno)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "validateOTP",
        value: function validateOTP(payload) {
          return this.http.get("".concat(this.rootUrl, "users/validateOtp?phoneno=").concat(payload.phoneno, "&otpnum=").concat(payload.otpnum), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "resedVerifyEmail",
        value: function resedVerifyEmail(email) {
          return this.http.get("".concat(this.rootUrl, "users/email/resend?email=").concat(email)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "socialLoginRequest",
        value: function socialLoginRequest(payload) {
          return this.http.post("".concat(this.rootUrl, "api/Register/ExternalLogin"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "getAuthHeaders",
        value: function getAuthHeaders() {
          var token = this.authGuardService.getToken();
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "Bearer ".concat(token))
          }; // const httpOptions = {
          //   headers: new HttpHeaders({
          //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          //     Authorization: `Bearer ${token}`
          //   })
          // };

          return header;
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/app/services/message.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/message.service.ts ***!
    \*********************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppServicesMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MessageService = /*#__PURE__*/function () {
      function MessageService() {
        _classCallCheck(this, MessageService);

        this.login = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.prefrences = {};
      }

      _createClass(MessageService, [{
        key: "sendLoginMessage",
        value: function sendLoginMessage(message) {
          this.login.next(message);
        }
      }, {
        key: "getLoginMessage",
        value: function getLoginMessage() {
          return this.login.asObservable();
        }
      }, {
        key: "sendCommonMessage",
        value: function sendCommonMessage(message) {
          this.message.next(message);
        }
      }, {
        key: "getCommonMessage",
        value: function getCommonMessage() {
          return this.message.asObservable();
        }
      }, {
        key: "getAnalysis",
        value: function getAnalysis() {
          var analysisObj = localStorage.getItem('analysis');
          var analysis = analysisObj ? JSON.parse(analysisObj) : '';
          return analysis;
        }
      }, {
        key: "getSource",
        value: function getSource() {
          var sourceObj = localStorage.getItem('dq-source-data');
          var source = sourceObj ? JSON.parse(sourceObj) : '';
          return source;
        }
      }, {
        key: "setPrefrences",
        value: function setPrefrences(key, object) {
          this.prefrences[key] = object;
        }
      }, {
        key: "getPrefrences",
        value: function getPrefrences(key) {
          return this.prefrences[key];
        }
      }]);

      return MessageService;
    }();

    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessageService);
    /***/
  },

  /***/
  "./src/app/shared/account-details/account-details.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/account-details/account-details.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedAccountDetailsAccountDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".account-details {\n  background: #FFFFFF;\n  box-shadow: 0px 3px 6px #00000029 !important;\n  border-radius: 0 !important;\n}\n.account-details .acc-bg {\n  background: #eeeeee;\n  height: 90px;\n}\n.account-details .user-profile-img {\n  position: relative;\n  top: -60px;\n}\n.account-details .profile-pic-small {\n  padding: 0;\n}\n.account-details .account-heading {\n  height: 150px;\n}\n.account-details .account-heading .a-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.87);\n}\n.account-details .account-heading .mat-icon-button {\n  margin: 0;\n  position: relative;\n  top: -10px;\n}\n.account-details .account-heading .mat-icon-button .mat-icon {\n  font-size: 18px;\n}\n.account-details .verified {\n  position: relative;\n  top: 6px;\n}\n.account-details .verified .mat-icon {\n  color: #008200;\n}\n.user-profile-img {\n  position: relative;\n}\n.user-profile-img .btn-main-right-wrapper {\n  position: absolute;\n  right: 80px;\n  bottom: 10px;\n}\n.user-profile-img .btn-main-right-wrapper .mat-icon-button {\n  background: #D5D5D5;\n  border: 2px solid #fff;\n  line-height: 36px;\n}\n.pro-complete {\n  margin: 14px 30px 0 30px;\n}\n.pro-complete p {\n  font-size: 14px;\n  color: #706F6F;\n  margin-bottom: 8px;\n}\n.pro-complete p .percent {\n  color: #19AB19;\n}\n.pro-complete .comp-chart-outer {\n  height: 4px;\n  width: 100%;\n  background-color: #ccc;\n}\n.pro-complete .comp-chart-outer .comp-chart {\n  background-color: #19AB19;\n  height: 4px;\n  max-width: 100% !important;\n}\n.account-personal-details {\n  padding: 10px;\n  text-align: center;\n}\n.account-personal-details .list {\n  margin-bottom: 0;\n}\n.account-personal-details .verify-link {\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 400;\n}\n.account-personal-details .stats {\n  padding: 32px 20px 4px;\n}\n.account-personal-details .stats h4 {\n  margin-bottom: 0 !important;\n  color: #b00100;\n  font-weight: 500;\n}\n.account-personal-details .stats .right-bd {\n  padding-right: 15px;\n  border-right: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9hY2NvdW50LWRldGFpbHMvYWNjb3VudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYWNjb3VudC1kZXRhaWxzL2FjY291bnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtBQ0NGO0FEQUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDRUo7QURBRTtFQUNFLFVBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtBQ0VKO0FEREk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNHTjtBRERJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0dOO0FERk07RUFDRSxlQUFBO0FDSVI7QURBRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ0VKO0FEREk7RUFDRSxjQUFBO0FDR047QURDQTtFQUNFLGtCQUFBO0FDRUY7QURERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHSjtBREZJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDSU47QURDQTtFQUNFLHdCQUFBO0FDRUY7QURERTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNHSjtBREZJO0VBQ0UsY0FBQTtBQ0lOO0FEREU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDR0o7QURGSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDSU47QURDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEREU7RUFDRSxnQkFBQTtBQ0dKO0FEREU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dKO0FEREU7RUFDRSxzQkFBQTtBQ0dKO0FERkk7RUFDRSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0lOO0FERkk7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0FDSU4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYWNjb3VudC1kZXRhaWxzL2FjY291bnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50LWRldGFpbHMge1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyAgXHJcbiAgLmFjYy1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gIH1cclxuICAudXNlci1wcm9maWxlLWltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC02MHB4O1xyXG4gIH1cclxuICAucHJvZmlsZS1waWMtc21hbGwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmFjY291bnQtaGVhZGluZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgLmEtdGl0bGUge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcclxuICAgIH1cclxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnZlcmlmaWVkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgY29sb3I6ICMwMDgyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi51c2VyLXByb2ZpbGUtaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmJ0bi1tYWluLXJpZ2h0LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDgwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICAubWF0LWljb24tYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogI0Q1RDVENTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvLWNvbXBsZXRlIHtcclxuICBtYXJnaW46IDE0cHggMzBweCAwIDMwcHg7XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzcwNkY2RjtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIC5wZXJjZW50IHtcclxuICAgICAgY29sb3I6ICMxOUFCMTk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb21wLWNoYXJ0LW91dGVyIHtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgLmNvbXAtY2hhcnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTlBQjE5O1xyXG4gICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWNjb3VudC1wZXJzb25hbC1kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAubGlzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAudmVyaWZ5LWxpbmsge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5zdGF0cyB7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDIwcHggNHB4O1xyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjYjAwMTAwO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWJkIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyA6aG9zdCB7XHJcbi8vICAgLnN0YXIge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgJjphZnRlciB7XHJcbi8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgd2lkdGg6IDlweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICB0b3A6IDBweDtcclxuLy8gICAgICAgbGVmdDogMTVweDtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuICAgICBcclxuIiwiLmFjY291bnQtZGV0YWlscyB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4uYWNjb3VudC1kZXRhaWxzIC5hY2MtYmcge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uYWNjb3VudC1kZXRhaWxzIC51c2VyLXByb2ZpbGUtaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC02MHB4O1xufVxuLmFjY291bnQtZGV0YWlscyAucHJvZmlsZS1waWMtc21hbGwge1xuICBwYWRkaW5nOiAwO1xufVxuLmFjY291bnQtZGV0YWlscyAuYWNjb3VudC1oZWFkaW5nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5hY2NvdW50LWRldGFpbHMgLmFjY291bnQtaGVhZGluZyAuYS10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5hY2NvdW50LWRldGFpbHMgLmFjY291bnQtaGVhZGluZyAubWF0LWljb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG59XG4uYWNjb3VudC1kZXRhaWxzIC5hY2NvdW50LWhlYWRpbmcgLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uYWNjb3VudC1kZXRhaWxzIC52ZXJpZmllZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2cHg7XG59XG4uYWNjb3VudC1kZXRhaWxzIC52ZXJpZmllZCAubWF0LWljb24ge1xuICBjb2xvcjogIzAwODIwMDtcbn1cblxuLnVzZXItcHJvZmlsZS1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udXNlci1wcm9maWxlLWltZyAuYnRuLW1haW4tcmlnaHQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDgwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cbi51c2VyLXByb2ZpbGUtaW1nIC5idG4tbWFpbi1yaWdodC13cmFwcGVyIC5tYXQtaWNvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBsaW5lLWhlaWdodDogMzZweDtcbn1cblxuLnByby1jb21wbGV0ZSB7XG4gIG1hcmdpbjogMTRweCAzMHB4IDAgMzBweDtcbn1cbi5wcm8tY29tcGxldGUgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3MDZGNkY7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5wcm8tY29tcGxldGUgcCAucGVyY2VudCB7XG4gIGNvbG9yOiAjMTlBQjE5O1xufVxuLnByby1jb21wbGV0ZSAuY29tcC1jaGFydC1vdXRlciB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbi5wcm8tY29tcGxldGUgLmNvbXAtY2hhcnQtb3V0ZXIgLmNvbXAtY2hhcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTlBQjE5O1xuICBoZWlnaHQ6IDRweDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5hY2NvdW50LXBlcnNvbmFsLWRldGFpbHMge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWNjb3VudC1wZXJzb25hbC1kZXRhaWxzIC5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hY2NvdW50LXBlcnNvbmFsLWRldGFpbHMgLnZlcmlmeS1saW5rIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmFjY291bnQtcGVyc29uYWwtZGV0YWlscyAuc3RhdHMge1xuICBwYWRkaW5nOiAzMnB4IDIwcHggNHB4O1xufVxuLmFjY291bnQtcGVyc29uYWwtZGV0YWlscyAuc3RhdHMgaDQge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYjAwMTAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmFjY291bnQtcGVyc29uYWwtZGV0YWlscyAuc3RhdHMgLnJpZ2h0LWJkIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/account-details/account-details.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/account-details/account-details.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AccountDetailsComponent */

  /***/
  function srcAppSharedAccountDetailsAccountDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountDetailsComponent", function () {
      return AccountDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/message.service */
    "./src/app/services/message.service.ts");
    /* harmony import */


    var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../app.config */
    "./src/app/app.config.ts");

    var AccountDetailsComponent = /*#__PURE__*/function () {
      function AccountDetailsComponent(route, http, router, activatedRoute, authGuardService, messageService, fb) {
        _classCallCheck(this, AccountDetailsComponent);

        this.route = route;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authGuardService = authGuardService;
        this.messageService = messageService;
        this.fb = fb;
        this.user = {};
        this.userId = '';
        this.isCurrentUser = false;
        this.appConfig = {};
        this.isLoading = false;
        this.loaderMsg = 'Loading account details...';
        this.showVerifyOTP = false;
        this.appConfig = _app_config__WEBPACK_IMPORTED_MODULE_7__["appConfig"];
        this.user = this.authGuardService.getLoggedInUserDetails();
        this.userId = this.user.user_id;
      }

      _createClass(AccountDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.otpForm = this.fb.group({
            phoneno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            otpnum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.user = this.authGuardService.getLoggedInUserDetails();
          this.subscription = this.messageService.getLoginMessage().subscribe(function (user) {
            _this16.user = user;
          });
          this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this16.isCurrentUser = true;

            if (queryParams.id) {
              if (_this16.userId !== queryParams.id) {
                _this16.isCurrentUser = false;
              }

              _this16.user = {};
              _this16.userId = queryParams.id;
            }

            _this16.getUserAccount();
          });
        }
      }, {
        key: "getUserAccount",
        value: function getUserAccount() {
          var _this17 = this;

          this.loaderMsg = 'Loading account details...';
          this.isLoading = true;
          this.http.getAccountDetails(this.userId).subscribe(function (result) {
            _this17.isLoading = false;
            _this17.user = result;
            var session = Object.assign({}, result, {
              isLoggedIn: true
            });
            localStorage.setItem('dq_token', JSON.stringify(session));
          }, function (error) {
            _this17.isLoading = false;
          });
        }
      }, {
        key: "verifyEmail",
        value: function verifyEmail() {
          var _this18 = this;

          this.loaderMsg = 'Sending verify email...';
          this.isLoading = true;
          this.http.resedVerifyEmail(this.user.email).subscribe(function (result) {
            _this18.isLoading = false;

            _this18.messageService.sendCommonMessage({
              topic: 'notifications',
              reason: 'Sent Notification'
            });
          }, function (error) {
            _this18.isLoading = false;
          });
        }
      }, {
        key: "generateOtp",
        value: function generateOtp() {
          var _this19 = this;

          this.loaderMsg = 'Sending OTP to your phone...';
          this.isLoading = true;
          this.http.generateOTP(this.user.phoneno).subscribe(function (result) {
            _this19.isLoading = false;
            _this19.showVerifyOTP = true;

            _this19.messageService.sendCommonMessage({
              topic: 'notifications',
              reason: 'Sent Notification'
            });
          }, function (error) {
            _this19.isLoading = false;
          });
        }
      }, {
        key: "validateOtp",
        value: function validateOtp() {
          var _this20 = this;

          this.otpForm.controls.phoneno.setValue(this.user.phoneno);

          if (this.otpForm.invalid) {
            return;
          }

          this.loaderMsg = 'Validating OTP...';
          this.isLoading = true;
          this.http.validateOTP(this.otpForm.value).subscribe(function (result) {
            _this20.isLoading = false;
            _this20.showVerifyOTP = false;

            _this20.getUserAccount();
          }, function (error) {
            _this20.isLoading = false;
            _this20.showVerifyOTP = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return AccountDetailsComponent;
    }();

    AccountDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]
      }, {
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    AccountDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/account-details/account-details.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account-details.component.scss */
      "./src/app/shared/account-details/account-details.component.scss"))["default"]]
    })], AccountDetailsComponent);
    /***/
  },

  /***/
  "./src/app/shared/ag-grid/ag-grid.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/shared/ag-grid/ag-grid.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedAgGridAgGridComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ag-grid-wrapper {\n  height: 100%;\n  width: 100%;\n}\n.ag-grid-wrapper .ag-theme-material .ag-header .ag-header-cell {\n  font-size: 14px;\n  color: #949494;\n}\n.ag-grid-wrapper .ag-theme-material .ag-body-viewport .ag-cell {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 400;\n}\n.ag-grid-wrapper .ag-theme-material .ag-body-viewport .ag-cell .material-icons {\n  font-size: 18px;\n  position: relative;\n  top: 5px;\n}\n.ag-grid-wrapper .ag-theme-material .ag-body-viewport .ag-cell .black {\n  color: #000;\n}\n.ag-grid-wrapper .ag-theme-material .ag-body-viewport .ag-cell .green {\n  color: #07D0BF;\n}\n.ag-grid-wrapper .ag-theme-material .ag-body-viewport .ag-cell .red {\n  color: #F55753;\n}\n.ag-grid-wrapper .ag-theme-material .ag-body-viewport .ag-cell .gray {\n  color: #636363;\n}\n.ag-grid-wrapper .ag-theme-material .ag-row {\n  cursor: pointer;\n}\n.ag-grid-wrapper .ag-theme-material .ag-row.ag-row-selected {\n  background-color: #626C76;\n}\n.ag-grid-wrapper .ag-theme-material .ag-row.ag-row-selected .ag-cell {\n  color: #fff;\n}\n.ag-grid-wrapper .ag-theme-material .ag-row.ag-row-selected .ag-cell .material-icons {\n  color: #fff;\n}\n.ag-grid-wrapper .ag-theme-material .ag-header-cell-resize::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  display: block;\n  left: calc(50% - 1px);\n  width: 2px;\n  height: 30%;\n  top: calc(50% - 15%);\n  background-color: rgba(186, 191, 199, 0.5);\n}\n.ag-grid-wrapper .ag-theme-material .ag-input-wrapper input:not([type]) {\n  border: 1px solid #e2e2e2;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 0 8px;\n  height: 30px;\n}\n.ag-grid-wrapper .ag-theme-material .ag-header-cell {\n  background-color: #FAFAFA;\n}\n.ag-grid-wrapper .ag-theme-material .ag-overlay {\n  display: none;\n}\n.ag-grid-wrapper .ag-overlay-loading-center {\n  font-size: 11px;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n}\n.ag-grid-wrapper .ag-overlay-no-rows-center {\n  font-size: 12px;\n}\n.ag-grid-wrapper .ag-theme-material .ag-icon-checkbox-checked, .ag-grid-wrapper .ag-theme-material .ag-icon-checkbox-checked-readonly, .ag-grid-wrapper .ag-theme-material .ag-icon-checkbox-unchecked, .ag-grid-wrapper .ag-theme-material .ag-icon-checkbox-unchecked-readonly, .ag-grid-wrapper .ag-theme-material .ag-icon-checkbox-indeterminate, .ag-grid-wrapper .ag-theme-material .ag-icon-checkbox-indeterminate-readonly, .ag-grid-wrapper .ag-theme-material .ag-icon-radio-button-on, .ag-grid-wrapper .ag-theme-material .ag-icon-radio-button-off {\n  height: 20px;\n  width: 20px;\n  font-size: 19px;\n  line-height: 20px;\n}\n.ag-grid-wrapper .bli-secondary-btn {\n  font-size: 9px;\n  line-height: 8px;\n  padding: 7px;\n  height: 20px;\n  border: 0;\n  margin: 0 3px;\n}\n.ag-grid-wrapper .sdp-bar {\n  display: inline-block;\n  margin-left: 1px;\n  width: 3px;\n  height: 17px;\n  background: #636363;\n  position: relative;\n  top: 2px;\n  cursor: pointer;\n}\n.ag-grid-wrapper .sdp-bar.productive {\n  background: #07D0BF;\n}\n.ag-grid-wrapper .sdp-bar.unproductive {\n  background: #F55753;\n}\n.ag-grid-wrapper .sdp-bar.undefined {\n  background: #636363;\n}\n.ag-row .ag-cell {\n  display: flex;\n  align-items: center;\n}\n.ag-overlay {\n  background-color: rgba(255, 255, 255, 0.5);\n  pointer-events: inherit;\n  height: 100%;\n  overflow: hidden;\n}\n.act-tooltip {\n  padding: 15px;\n  font-size: 14px;\n  width: 450px;\n  text-align: center;\n}\n.act-tooltip.productive {\n  background: #07D0BF;\n}\n.act-tooltip.unproductive {\n  background: #F55753;\n}\n.act-tooltip.undefined {\n  background: #636363;\n}\n.ag-grid-wrapper .ag-theme-material .ag-header .ag-header-cell {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.ag-grid-compact-chart .ag-grid-wrapper .ag-theme-material .ag-header .ag-header-cell {\n  font-size: 10px;\n  padding: 0 2px;\n}\n.ag-grid-compact-chart .ag-grid-wrapper .ag-theme-material .ag-header .ag-header-cell.title-col {\n  padding-left: 10px !important;\n}\n.ag-grid-compact-chart .ag-grid-wrapper .ag-theme-material .ag-body-viewport .ag-cell {\n  font-size: 10px;\n  padding: 0;\n  margin: 0;\n}\n.ag-grid-compact-chart .ag-grid-wrapper .ag-theme-material .ag-body-viewport .ag-cell.title-col {\n  font-size: 12px !important;\n  padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9hZy1ncmlkL2FnLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9hZy1ncmlkL2FnLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGO0FERU07RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0FSO0FESU07RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FER1E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDRFY7QURHUTtFQUNFLFdBQUE7QUNEVjtBREdRO0VBQ0UsY0FBQTtBQ0RWO0FER1E7RUFDRSxjQUFBO0FDRFY7QURHUTtFQUNFLGNBQUE7QUNEVjtBREtJO0VBQ0UsZUFBQTtBQ0hOO0FESU07RUFDRSx5QkFBQTtBQ0ZSO0FER1E7RUFDRSxXQUFBO0FDRFY7QURFVTtFQUNFLFdBQUE7QUNBWjtBREtJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQ0FBQTtBQ0hOO0FETUU7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNKSjtBRE1FO0VBQ0UseUJBQUE7QUNKSjtBRE1FO0VBQ0UsYUFBQTtBQ0pKO0FETUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0VBQ0EsWUFBQTtBQ0pKO0FETUU7RUFDRSxlQUFBO0FDSko7QURPRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEo7QURPRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNMSjtBRE9FO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDTEo7QURNSTtFQUNFLG1CQUFBO0FDSk47QURNSTtFQUNFLG1CQUFBO0FDSk47QURNSTtFQUNFLG1CQUFBO0FDSk47QURRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0xGO0FET0E7RUFDRSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSkY7QURLRTtFQUNFLG1CQUFBO0FDSEo7QURLRTtFQUNFLG1CQUFBO0FDSEo7QURLRTtFQUNFLG1CQUFBO0FDSEo7QURPQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0pGO0FEUUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0xKO0FETUk7RUFDRSw2QkFBQTtBQ0pOO0FET0U7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNMSjtBRE1JO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FnLWdyaWQvYWctZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZy1ncmlkLXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICAuYWctdGhlbWUtbWF0ZXJpYWwge1xyXG4gICAgLmFnLWhlYWRlciB7XHJcbiAgICAgIC5hZy1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiBoc2woMCwgMCUsIDU4JSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZy1ib2R5LXZpZXdwb3J0IHtcclxuICAgICAgLmFnLWNlbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsYWNrIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JlZW4ge1xyXG4gICAgICAgICAgY29sb3I6ICMwN0QwQkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWQge1xyXG4gICAgICAgICAgY29sb3I6ICNGNTU3NTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmF5IHtcclxuICAgICAgICAgIGNvbG9yOiAjNjM2MzYzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFnLXJvdyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgJi5hZy1yb3ctc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MjZDNzY7XHJcbiAgICAgICAgLmFnLWNlbGwge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZy1oZWFkZXItY2VsbC1yZXNpemU6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbGVmdDogY2FsYyg1MCUgLSAxcHgpO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgdG9wOiBjYWxjKDUwJSAtIDE1JSk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAxOTEsIDE5OSwgMC41KTtcclxuICAgIH1cclxuICB9XHJcbiAgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1pbnB1dC13cmFwcGVyIGlucHV0Om5vdChbdHlwZV0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbiAgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1oZWFkZXItY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gIH1cclxuICAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLW92ZXJsYXkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmFnLW92ZXJsYXktbG9hZGluZy1jZW50ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgLmFnLW92ZXJsYXktbm8tcm93cy1jZW50ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1pY29uLWNoZWNrYm94LWNoZWNrZWQsIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctaWNvbi1jaGVja2JveC1jaGVja2VkLXJlYWRvbmx5LCAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWljb24tY2hlY2tib3gtdW5jaGVja2VkLCAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWljb24tY2hlY2tib3gtdW5jaGVja2VkLXJlYWRvbmx5LCAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWljb24tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1pY29uLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUtcmVhZG9ubHksIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctaWNvbi1yYWRpby1idXR0b24tb24sIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctaWNvbi1yYWRpby1idXR0b24tb2ZmIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5ibGktc2Vjb25kYXJ5LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDAgM3B4O1xyXG4gIH1cclxuICAuc2RwLWJhciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIGJhY2tncm91bmQ6ICM2MzYzNjM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDJweDsgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJi5wcm9kdWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzA3RDBCRjtcclxuICAgIH1cclxuICAgICYudW5wcm9kdWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI0Y1NTc1MztcclxuICAgIH1cclxuICAgICYudW5kZWZpbmVkIHtcclxuICAgICAgYmFja2dyb3VuZDogIzYzNjM2MztcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmFnLXJvdyAuYWctY2VsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hZy1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgcG9pbnRlci1ldmVudHM6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hY3QtdG9vbHRpcCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAmLnByb2R1Y3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzA3RDBCRjtcclxuICB9XHJcbiAgJi51bnByb2R1Y3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI0Y1NTc1MztcclxuICB9XHJcbiAgJi51bmRlZmluZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzYzNjM2MztcclxuICB9XHJcbn1cclxuXHJcbi5hZy1ncmlkLXdyYXBwZXIgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1oZWFkZXIgLmFnLWhlYWRlci1jZWxsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuLmFnLWdyaWQtY29tcGFjdC1jaGFydCB7XHJcbiAgLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWhlYWRlciAuYWctaGVhZGVyLWNlbGwge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMCAycHg7XHJcbiAgICAmLnRpdGxlLWNvbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWctZ3JpZC13cmFwcGVyIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctYm9keS12aWV3cG9ydCAuYWctY2VsbCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgJi50aXRsZS1jb2wge1xyXG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hZy1ncmlkLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWhlYWRlciAuYWctaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTQ5NDk0O1xufVxuLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWJvZHktdmlld3BvcnQgLmFnLWNlbGwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWJvZHktdmlld3BvcnQgLmFnLWNlbGwgLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xufVxuLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWJvZHktdmlld3BvcnQgLmFnLWNlbGwgLmJsYWNrIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uYWctZ3JpZC13cmFwcGVyIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctYm9keS12aWV3cG9ydCAuYWctY2VsbCAuZ3JlZW4ge1xuICBjb2xvcjogIzA3RDBCRjtcbn1cbi5hZy1ncmlkLXdyYXBwZXIgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1ib2R5LXZpZXdwb3J0IC5hZy1jZWxsIC5yZWQge1xuICBjb2xvcjogI0Y1NTc1Mztcbn1cbi5hZy1ncmlkLXdyYXBwZXIgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1ib2R5LXZpZXdwb3J0IC5hZy1jZWxsIC5ncmF5IHtcbiAgY29sb3I6ICM2MzYzNjM7XG59XG4uYWctZ3JpZC13cmFwcGVyIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLXJvdy5hZy1yb3ctc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI2Qzc2O1xufVxuLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLXJvdy5hZy1yb3ctc2VsZWN0ZWQgLmFnLWNlbGwge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hZy1ncmlkLXdyYXBwZXIgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1yb3cuYWctcm93LXNlbGVjdGVkIC5hZy1jZWxsIC5tYXRlcmlhbC1pY29ucyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWhlYWRlci1jZWxsLXJlc2l6ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDFweCk7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMzAlO1xuICB0b3A6IGNhbGMoNTAlIC0gMTUlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODYsIDE5MSwgMTk5LCAwLjUpO1xufVxuLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWlucHV0LXdyYXBwZXIgaW5wdXQ6bm90KFt0eXBlXSkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uYWctZ3JpZC13cmFwcGVyIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLW92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFnLWdyaWQtd3JhcHBlciAuYWctb3ZlcmxheS1sb2FkaW5nLWNlbnRlciB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5hZy1ncmlkLXdyYXBwZXIgLmFnLW92ZXJsYXktbm8tcm93cy1jZW50ZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uYWctZ3JpZC13cmFwcGVyIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctaWNvbi1jaGVja2JveC1jaGVja2VkLCAuYWctZ3JpZC13cmFwcGVyIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctaWNvbi1jaGVja2JveC1jaGVja2VkLXJlYWRvbmx5LCAuYWctZ3JpZC13cmFwcGVyIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctaWNvbi1jaGVja2JveC11bmNoZWNrZWQsIC5hZy1ncmlkLXdyYXBwZXIgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1pY29uLWNoZWNrYm94LXVuY2hlY2tlZC1yZWFkb25seSwgLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWljb24tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwgLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWljb24tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS1yZWFkb25seSwgLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWljb24tcmFkaW8tYnV0dG9uLW9uLCAuYWctZ3JpZC13cmFwcGVyIC5hZy10aGVtZS1tYXRlcmlhbCAuYWctaWNvbi1yYWRpby1idXR0b24tb2ZmIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5hZy1ncmlkLXdyYXBwZXIgLmJsaS1zZWNvbmRhcnktYnRuIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGxpbmUtaGVpZ2h0OiA4cHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMCAzcHg7XG59XG4uYWctZ3JpZC13cmFwcGVyIC5zZHAtYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIGJhY2tncm91bmQ6ICM2MzYzNjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZy1ncmlkLXdyYXBwZXIgLnNkcC1iYXIucHJvZHVjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwN0QwQkY7XG59XG4uYWctZ3JpZC13cmFwcGVyIC5zZHAtYmFyLnVucHJvZHVjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNGNTU3NTM7XG59XG4uYWctZ3JpZC13cmFwcGVyIC5zZHAtYmFyLnVuZGVmaW5lZCB7XG4gIGJhY2tncm91bmQ6ICM2MzYzNjM7XG59XG5cbi5hZy1yb3cgLmFnLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWctb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgcG9pbnRlci1ldmVudHM6IGluaGVyaXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFjdC10b29sdGlwIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogNDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hY3QtdG9vbHRpcC5wcm9kdWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzA3RDBCRjtcbn1cbi5hY3QtdG9vbHRpcC51bnByb2R1Y3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjRjU1NzUzO1xufVxuLmFjdC10b29sdGlwLnVuZGVmaW5lZCB7XG4gIGJhY2tncm91bmQ6ICM2MzYzNjM7XG59XG5cbi5hZy1ncmlkLXdyYXBwZXIgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1oZWFkZXIgLmFnLWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uYWctZ3JpZC1jb21wYWN0LWNoYXJ0IC5hZy1ncmlkLXdyYXBwZXIgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1oZWFkZXIgLmFnLWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAwIDJweDtcbn1cbi5hZy1ncmlkLWNvbXBhY3QtY2hhcnQgLmFnLWdyaWQtd3JhcHBlciAuYWctdGhlbWUtbWF0ZXJpYWwgLmFnLWhlYWRlciAuYWctaGVhZGVyLWNlbGwudGl0bGUtY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uYWctZ3JpZC1jb21wYWN0LWNoYXJ0IC5hZy1ncmlkLXdyYXBwZXIgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1ib2R5LXZpZXdwb3J0IC5hZy1jZWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uYWctZ3JpZC1jb21wYWN0LWNoYXJ0IC5hZy1ncmlkLXdyYXBwZXIgLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1ib2R5LXZpZXdwb3J0IC5hZy1jZWxsLnRpdGxlLWNvbCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/ag-grid/ag-grid.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/ag-grid/ag-grid.component.ts ***!
    \*****************************************************/

  /*! exports provided: AgGridComponent */

  /***/
  function srcAppSharedAgGridAgGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgGridComponent", function () {
      return AgGridComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AgGridComponent = /*#__PURE__*/function () {
      function AgGridComponent() {
        _classCallCheck(this, AgGridComponent);

        this.columnDefs = [];
        this.isLoading = false;
        this.pageSize = 25;
        this.rowHeight = 30;
        this.firstRowSelected = false;
        this.suppressRowClickSelection = false;
        this.isCheckboxSelection = false;
        this.singleClickEdit = false;
        this.sizeColumnsToFit = true;
        this.moveToColumn = '';
        this.colResizeDefault = 'shift';
        this.rowSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sortFilterApplied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isGridRendered = false;
      }

      _createClass(AgGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.defaultColDef = {
            sortable: true,
            filter: false
          };
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {}
      }, {
        key: "createColumnDefsWithOptions",
        value: function createColumnDefsWithOptions() {
          var _this21 = this;

          if (!this.rowData.length) {
            return [];
          }

          var colDefs = this.columnDefs.map(function (columnDef) {
            var columnDefObj = columnDef;
            var columnValues = [];

            _this21.rowData.forEach(function (rowDataItem) {
              if (rowDataItem[columnDefObj.field]) {
                columnValues.push(rowDataItem[columnDefObj.field]);
              }
            });

            if (!columnValues.length) {
              columnDefObj.hide = false;
            } else {
              columnDefObj.hide = false;
            }

            return columnDefObj;
          });
          this.columnDefs = colDefs;
          this.gridApi.setColumnDefs();
        }
      }, {
        key: "onGridModelUpdated",
        value: function onGridModelUpdated(e) {}
      }, {
        key: "gridReady",
        value: function gridReady(params) {
          // alert('Grid')
          this.gridApi = params.api;
          this.gridOptions = params.api.gridOptionsWrapper.gridOptions;
          this.gridApi.hideOverlay();
          this.gridApi.ensureColumnVisible('id');
        }
      }, {
        key: "paginationChanged",
        value: function paginationChanged(params) {
          if (this.isGridRendered) {
            if (this.firstRowSelected && this.rowData.length) {
              this.gridApi.getDisplayedRowAtIndex(0).setSelected(true);
            }
          }
        }
      }, {
        key: "onFirstDataRendered",
        value: function onFirstDataRendered(params) {
          if (this.sizeColumnsToFit) {
            this.gridApi.sizeColumnsToFit();
          }

          this.gridApi.ensureColumnVisible(this.moveToColumn);

          if (this.firstRowSelected && this.rowData.length) {
            this.gridApi.getDisplayedRowAtIndex(0).setSelected(true);
          } // this.createColumnDefsWithOptions();


          this.isGridRendered = true;
        }
      }, {
        key: "onGridSizeChanged",
        value: function onGridSizeChanged(params) {
          if (this.sizeColumnsToFit) {
            this.gridApi.sizeColumnsToFit();
          }
        }
      }, {
        key: "onRowSelectionChanged",
        value: function onRowSelectionChanged(e) {
          var rowData = this.gridApi.getSelectedRows();

          if (this.isCheckboxSelection) {
            this.rowSelectionChange.next(rowData);
            return;
          } // Send first record if the single row selection


          this.rowSelectionChange.next(rowData[0]);
        }
      }, {
        key: "onCellFocused",
        value: function onCellFocused(e) {
          if (this.gridOptions) {
            if (e.column && (e.column.colId === 'img' || e.column.colId === 'screenshot')) {
              var focusedCellData = this.gridOptions.api.getDisplayedRowAtIndex(e.rowIndex).data;
              var data = {
                data: focusedCellData,
                index: e.rowIndex
              };

              if (focusedCellData.img) {
                this.rowSelectionChange.next(data);
              }

              return;
            }

            if (e.column && e.column.colId === 'action_column') {
              this.gridOptions.rowSelection = false;
            } else {
              this.gridOptions.rowSelection = this.rowSelection;
            }
          }
        }
      }, {
        key: "onSortFilterChanged",
        value: function onSortFilterChanged() {
          var rowData = [];
          this.gridApi.forEachNodeAfterFilterAndSort(function (node) {
            return rowData.push(node.data);
          });
          this.sortFilterApplied.next(rowData);
        }
      }]);

      return AgGridComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "rowData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "floatingFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "columnDefs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "isLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "rowHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "rowSelection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "firstRowSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "suppressRowClickSelection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "isCheckboxSelection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "singleClickEdit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "sizeColumnsToFit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "moveToColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgGridComponent.prototype, "colResizeDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AgGridComponent.prototype, "rowSelectionChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AgGridComponent.prototype, "sortFilterApplied", void 0);
    AgGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ag-grid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ag-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ag-grid/ag-grid.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ag-grid.component.scss */
      "./src/app/shared/ag-grid/ag-grid.component.scss"))["default"]]
    })], AgGridComponent);
    /***/
  },

  /***/
  "./src/app/shared/analysis-chart/analysis-chart.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/analysis-chart/analysis-chart.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedAnalysisChartAnalysisChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hbmFseXNpcy1jaGFydC9hbmFseXNpcy1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/analysis-chart/analysis-chart.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/analysis-chart/analysis-chart.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AnalysisChartComponent */

  /***/
  function srcAppSharedAnalysisChartAnalysisChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalysisChartComponent", function () {
      return AnalysisChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var More = __webpack_require__(
    /*! highcharts/highcharts-more */
    "./node_modules/highcharts/highcharts-more.js");

    More(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var AnalysisChartComponent = /*#__PURE__*/function () {
      function AnalysisChartComponent() {
        _classCallCheck(this, AnalysisChartComponent);

        this.title = 'myHighchart';
        this.data = [{
          name: 'ItSolutionStuff.com',
          data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
        }, {
          name: 'Nicesnippets.com',
          data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
        }];
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
          chart: {
            type: "spline"
          },
          title: {
            text: "Monthly Site Visitor"
          },
          xAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          },
          yAxis: {
            title: {
              text: "Visitors"
            }
          },
          series: this.data
        };
      }

      _createClass(AnalysisChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnalysisChartComponent;
    }();

    AnalysisChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-analysis-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./analysis-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/analysis-chart/analysis-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./analysis-chart.component.scss */
      "./src/app/shared/analysis-chart/analysis-chart.component.scss"))["default"]]
    })], AnalysisChartComponent);
    /***/
  },

  /***/
  "./src/app/shared/bar-chart/bar-chart.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/shared/bar-chart/bar-chart.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedBarChartBarChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".highcharts-axis-labels.highcharts-xaxis-labels text {\n  cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDBCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdoY2hhcnRzLWF4aXMtbGFiZWxzLmhpZ2hjaGFydHMteGF4aXMtbGFiZWxzIHtcclxuICB0ZXh0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsIi5oaWdoY2hhcnRzLWF4aXMtbGFiZWxzLmhpZ2hjaGFydHMteGF4aXMtbGFiZWxzIHRleHQge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/bar-chart/bar-chart.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/bar-chart/bar-chart.component.ts ***!
    \*********************************************************/

  /*! exports provided: BarChartComponent */

  /***/
  function srcAppSharedBarChartBarChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () {
      return BarChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_custom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts-custom-events */
    "./node_modules/highcharts-custom-events/js/customEvents.js");
    /* harmony import */


    var highcharts_custom_events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_custom_events__WEBPACK_IMPORTED_MODULE_3__);

    var Boost = __webpack_require__(
    /*! highcharts/modules/boost */
    "./node_modules/highcharts/modules/boost.js");

    var noData = __webpack_require__(
    /*! highcharts/modules/no-data-to-display */
    "./node_modules/highcharts/modules/no-data-to-display.js");

    var More = __webpack_require__(
    /*! highcharts/highcharts-more */
    "./node_modules/highcharts/highcharts-more.js");

    Boost(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    noData(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    More(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    noData(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    highcharts_custom_events__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var BarChartComponent = /*#__PURE__*/function () {
      function BarChartComponent() {
        _classCallCheck(this, BarChartComponent);

        this.xLableClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartOptions = {
          chart: {
            type: 'column'
          },
          title: {
            text: ''
          },
          subtitle: {
            text: ''
          },
          xAxis: {},
          yAxis: {
            min: 0,
            title: {
              text: '',
              align: 'high'
            },
            labels: {
              overflow: 'justify'
            }
          },
          tooltip: {
            valueSuffix: ''
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || '#FFFFFF',
            shadow: true
          },
          credits: {
            enabled: false
          },
          series: []
        };
        this.analysisDetails = {};
      }

      _createClass(BarChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initMainChart();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "initMainChart",
        value: function initMainChart() {
          var chartData = {
            labels: [],
            delay: []
          };
          console.log(this.analysis);
          this.analysis.data.map(function (data) {
            chartData.labels.push(data.airline ? data.airline : data.ORIGIN_AIRPORT);
            chartData.delay.push(+(data.value.NoOfDelays ? data.value.NoOfDelays : data.value.TotalDelays));
          });
          this.initChart(chartData, false);
        }
      }, {
        key: "initDetailsChart",
        value: function initDetailsChart(detailsData) {
          var chartData = {
            labels: [],
            delay: []
          };
          detailsData.map(function (data) {
            chartData.labels.push(data.ORIGIN_AIRPORT ? data.ORIGIN_AIRPORT : data.AIRLINE);
            chartData.delay.push(+(data.NoOfDelays ? data.NoOfDelays : data.TotalDelays));
          });
          this.initChart(chartData, true);
        }
      }, {
        key: "initChart",
        value: function initChart(chartData, isDetail) {
          var agThis = this;
          this.chartOptions.title.text = this.analysis.Title;
          this.chartOptions.xAxis = {
            categories: chartData.labels,
            title: {
              text: this.analysis['X-Axis']
            },
            labels: {
              events: {
                click: function click(e) {
                  if (isDetail) {
                    agThis.initMainChart();
                  } else {
                    agThis.loadDetailsChart(this.value);
                    agThis.xLableClicked.emit({
                      label: this.value
                    });
                  }
                }
              }
            }
          };
          this.chartOptions.yAxis.title.text = this.analysis['Y-Axis'];
          this.chartOptions.chart.type = this.chartType ? this.chartType : 'column';
          this.chartOptions.series = [{
            name: 'Delay',
            data: chartData.delay
          }];
          this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
          this.highcharts.chart(this.chartEl.nativeElement, this.chartOptions);
        }
      }, {
        key: "loadDetailsChart",
        value: function loadDetailsChart(label) {
          if (Object.keys(this.analysis.data[0]).indexOf('airline') >= 0) {
            this.analysisDetails = this.analysis.data.filter(function (data) {
              return data.airline === label;
            })[0];
          } else {
            this.analysisDetails = this.analysis.data.filter(function (data) {
              return data.ORIGIN_AIRPORT === label;
            })[0];
          }

          console.log(this.analysisDetails);
          this.initDetailsChart(this.analysisDetails.value.details);
        }
      }]);

      return BarChartComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('charts', {
      "static": true
    })], BarChartComponent.prototype, "chartEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BarChartComponent.prototype, "analysis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BarChartComponent.prototype, "chartType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BarChartComponent.prototype, "xLableClicked", void 0);
    BarChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bar-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bar-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/bar-chart/bar-chart.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bar-chart.component.scss */
      "./src/app/shared/bar-chart/bar-chart.component.scss"))["default"]]
    })], BarChartComponent);
    /***/
  },

  /***/
  "./src/app/shared/color-dialog/color-dialog.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/color-dialog/color-dialog.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedColorDialogColorDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-form-field {\n  margin-right: 20px;\n  font-family: \"open-sans-condensed-bold\";\n}\n\n.mat-raised-button {\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n\n.mat-dialog-title {\n  font-family: \"open-sans-condensed-bold\";\n  background: linear-gradient(45deg, #433683, transparent);\n  padding: 5px 20px;\n  color: #fff;\n}\n\n.mat-dialog-actions {\n  float: right;\n}\n\n.add-remove-button {\n  margin-top: 0;\n  min-width: 24px;\n}\n\n.clrSettings .pd1 {\n  padding: 12px 5px;\n}\n\n.clrSettings ::ng-deep .mat-form-field-label {\n  height: 40px;\n}\n\n.clrSettings .pdt {\n  position: relative;\n  top: 13px;\n  padding-left: 10px;\n}\n\n.button3d {\n  width: 200px;\n  padding: 0;\n  margin: 10px 20px 10px 0;\n  font-weight: 600;\n  text-align: center;\n  line-height: 50px;\n  color: #FFF;\n  border-radius: 5px;\n  transition: all 0.2s;\n  font-family: \"open-sans-condensed-bold\" !important;\n  cursor: pointer;\n}\n\n.button3d:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btnBlueGreen {\n  background: #00AE68;\n}\n\n.btnBlueGreen.addico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n\n.btnBlueGreen.addico .mat-icon {\n  font-size: 20px;\n}\n\n.btnLightBlue {\n  background: #7d6ecc;\n}\n\n.btnLightBlue.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n\n.btnLightBlue.addRef .material-icons {\n  font-size: 20px;\n}\n\n.btnLightBlue.tdBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n}\n\n.btnLightBlue.tdBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -2.5px;\n  right: 8px;\n}\n\n.btnLightBlue.tdBtn:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n}\n\n.btnLightBlue.compBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 145px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n}\n\n.btnLightBlue.compBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  right: 0px;\n}\n\n.btnLightBlue.svBtn {\n  font-size: 18px;\n  color: #ffffff;\n  width: 180px;\n  height: 37px;\n  line-height: 30px;\n}\n\n.btnLightBlue.svBtn .mat-icon {\n  font-size: 20px;\n}\n\n.btnOrange {\n  background: #e91b00;\n}\n\n.btnOrange.redico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n}\n\n.btnOrange.redico .mat-icon {\n  font-size: 20px;\n}\n\n.btnPurple {\n  background: #A74982;\n}\n\n.btnPurple.preview {\n  width: 100px;\n  height: 30px;\n  line-height: 28px;\n}\n\n.btnPurple.ebckBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 95px;\n  height: 40px;\n  line-height: 40px;\n  padding-right: 20px;\n}\n\n.btnPurple.ebckBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  left: 3px;\n}\n\n.btnPurple.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n\n.btnPurple.addRef .material-icons {\n  font-size: 20px;\n}\n\n/* FADE */\n\n.btnFade.btnBlueGreen:hover {\n  background: #21825B;\n}\n\n.btnFade.btnLightBlue:hover {\n  background: #0097f6;\n}\n\n.btnFade.btnOrange:hover {\n  background: #FF8E00;\n}\n\n.btnFade.btnPurple:hover {\n  background: #6D184B;\n}\n\n/* 3D */\n\n.btnBlueGreen.btnPush {\n  box-shadow: 0px 5px 0px 0px #007144;\n}\n\n.btnLightBlue.btnPush {\n  box-shadow: 0px 5px 0px 0px #322a54;\n}\n\n.btnOrange.btnPush {\n  box-shadow: 0px 5px 0px 0px #8c1808;\n}\n\n.btnPurple.btnPush {\n  box-shadow: 0px 5px 0px 0px #6D184B;\n}\n\n.btnPush:hover {\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n\n.btnBlueGreen.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #007144;\n}\n\n.btnLightBlue.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #1E8185;\n}\n\n.btnOrange.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #A66615;\n}\n\n.btnPurple.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #6D184B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9jb2xvci1kaWFsb2cvY29sb3ItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29sb3ItZGlhbG9nL2NvbG9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGtCQUFBO0VBQ0EsdUNBQUE7QUNDSDs7QURDQTtFQUNHLGtEQUFBO0FDRUg7O0FEQUE7RUFDRyx1Q0FBQTtFQUNBLHdEQUFBO0VBR0MsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDRyxZQUFBO0FDRUg7O0FEQUE7RUFDRyxhQUFBO0VBQ0EsZUFBQTtBQ0dIOztBREFHO0VBQ0csaUJBQUE7QUNHTjs7QURERztFQUNHLFlBQUE7QUNHTjs7QURERztFQUNHLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDR047O0FESUE7RUFJRyxZQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrREFBQTtFQUNBLGVBQUE7QUNKSDs7QURLRztFQUNHLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNITjs7QURPQztFQUNFLG1CQUFBO0FDSkg7O0FES0c7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNITjs7QURJTTtFQUNHLGVBQUE7QUNGVDs7QURPQztFQUNFLG1CQUFBO0FDSkg7O0FES0c7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNITjs7QURJTTtFQUNHLGVBQUE7QUNGVDs7QURLRztFQUNHLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSE47O0FESU07RUFDRyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0ZUOztBRElNO0VBQ0csZ0JBQUE7RUFDQSxtQ0FBQTtBQ0ZUOztBREtHO0VBQ0csZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNITjs7QURJTTtFQUNHLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRlQ7O0FETUc7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNKTjs7QURLTTtFQUNHLGVBQUE7QUNIVDs7QURTQztFQUNFLG1CQUFBO0FDTkg7O0FET0c7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTE47O0FETU07RUFDRyxlQUFBO0FDSlQ7O0FEVUM7RUFDRSxtQkFBQTtBQ1BIOztBRFFHO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ05OOztBRFFHO0VBQ0csZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNOTjs7QURPTTtFQUNHLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDTFQ7O0FEUUc7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNOTjs7QURPTTtFQUNHLGVBQUE7QUNMVDs7QURVQyxTQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNQSDs7QURVQztFQUNFLG1CQUFBO0FDUEg7O0FEVUM7RUFDRSxtQkFBQTtBQ1BIOztBRFVDO0VBQ0UsbUJBQUE7QUNQSDs7QURVQyxPQUFBOztBQUNBO0VBQ0UsbUNBQUE7QUNQSDs7QURVQztFQUNFLG1DQUFBO0FDUEg7O0FEVUM7RUFDRSxtQ0FBQTtBQ1BIOztBRFVDO0VBQ0UsbUNBQUE7QUNQSDs7QURVQztFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNQSDs7QURVQztFQUNFLG1DQUFBO0FDUEg7O0FEVUM7RUFDRSxtQ0FBQTtBQ1BIOztBRFVDO0VBQ0UsbUNBQUE7QUNQSDs7QURVQztFQUNFLG1DQUFBO0FDUEgiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29sb3ItZGlhbG9nL2NvbG9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJyFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1kaWFsb2ctdGl0bGUge1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDQ1ZGVnXHJcbiAgICAsICM0MzM2ODMsIHRyYW5zcGFyZW50KTtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5hZGQtcmVtb3ZlLWJ1dHRvbiB7XHJcbiAgIG1hcmdpbi10b3A6IDA7XHJcbiAgIG1pbi13aWR0aDogMjRweDtcclxufVxyXG4uY2xyU2V0dGluZ3Mge1xyXG4gICAucGQxe1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDVweFxyXG4gICB9XHJcbiAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICAgIGhlaWdodDo0MHB4O1xyXG4gICB9XHJcbiAgIC5wZHR7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAxM3B4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgIH1cclxuICBcclxufVxyXG5cclxuLy8gYnV0dG9uc1xyXG5cclxuLmJ1dHRvbjNkIHtcclxuICAgLy9kaXNwbGF5OiBibG9jaztcclxuICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIC8vZmxvYXQ6IGxlZnQ7XHJcbiAgIHdpZHRoOiAyMDBweDtcclxuICAgcGFkZGluZzogMDtcclxuICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICBjb2xvcjogI0ZGRjtcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICB0cmFuc2l0aW9uOiBhbGwgMC4ycyA7XHJcbiAgIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiIWltcG9ydGFudDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAmOmRpc2FibGVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICB9XHJcbiB9XHJcbiBcclxuIC5idG5CbHVlR3JlZW4ge1xyXG4gICBiYWNrZ3JvdW5kOiAjMDBBRTY4O1xyXG4gICAmLmFkZGljb3tcclxuICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gfVxyXG4gXHJcbiAuYnRuTGlnaHRCbHVlIHtcclxuICAgYmFja2dyb3VuZDogIzdkNmVjYztcclxuICAgJi5hZGRSZWZ7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgICYudGRCdG57XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAubWF0LWljb257XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICB0b3A6IC0yLjVweDtcclxuICAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgICAmOmRpc2FibGVke1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgICYuY29tcEJ0bntcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgd2lkdGg6IDE0NXB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gICAmLnN2QnRue1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiB9XHJcbiBcclxuIC5idG5PcmFuZ2Uge1xyXG4gICBiYWNrZ3JvdW5kOiAjZTkxYjAwO1xyXG4gICAmLnJlZGljb3tcclxuICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAubWF0LWljb257XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gfVxyXG4gXHJcbiAuYnRuUHVycGxlIHtcclxuICAgYmFja2dyb3VuZDogI0E3NDk4MjtcclxuICAgJi5wcmV2aWV3e1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgIH1cclxuICAgJi5lYmNrQnRue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogOTVweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAmLmFkZFJlZntcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gLyogRkFERSAqL1xyXG4gLmJ0bkZhZGUuYnRuQmx1ZUdyZWVuOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZDogIzIxODI1QjtcclxuIH1cclxuIFxyXG4gLmJ0bkZhZGUuYnRuTGlnaHRCbHVlOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZDogIzAwOTdmNjtcclxuIH1cclxuIFxyXG4gLmJ0bkZhZGUuYnRuT3JhbmdlOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZDogI0ZGOEUwMDtcclxuIH1cclxuIFxyXG4gLmJ0bkZhZGUuYnRuUHVycGxlOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZDogIzZEMTg0QjtcclxuIH1cclxuIFxyXG4gLyogM0QgKi9cclxuIC5idG5CbHVlR3JlZW4uYnRuUHVzaCB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMDA3MTQ0O1xyXG4gfVxyXG4gXHJcbiAuYnRuTGlnaHRCbHVlLmJ0blB1c2gge1xyXG4gICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzMyMmE1NDtcclxuIH1cclxuIFxyXG4gLmJ0bk9yYW5nZS5idG5QdXNoIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM4YzE4MDg7XHJcbiB9XHJcbiBcclxuIC5idG5QdXJwbGUuYnRuUHVzaCB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNkQxODRCO1xyXG4gfVxyXG4gXHJcbiAuYnRuUHVzaDpob3ZlciB7XHJcbiAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuIH1cclxuIFxyXG4gLmJ0bkJsdWVHcmVlbi5idG5QdXNoOmhvdmVyIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMwMDcxNDQ7XHJcbiB9XHJcbiBcclxuIC5idG5MaWdodEJsdWUuYnRuUHVzaDpob3ZlciB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMUU4MTg1O1xyXG4gfVxyXG4gXHJcbiAuYnRuT3JhbmdlLmJ0blB1c2g6aG92ZXIge1xyXG4gICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI0E2NjYxNTtcclxuIH1cclxuIFxyXG4gLmJ0blB1cnBsZS5idG5QdXNoOmhvdmVyIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICM2RDE4NEI7XHJcbiB9XHJcblxyXG4iLCIubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIiAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0MzM2ODMsIHRyYW5zcGFyZW50KTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYWRkLXJlbW92ZS1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtaW4td2lkdGg6IDI0cHg7XG59XG5cbi5jbHJTZXR0aW5ncyAucGQxIHtcbiAgcGFkZGluZzogMTJweCA1cHg7XG59XG4uY2xyU2V0dGluZ3MgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGhlaWdodDogNDBweDtcbn1cbi5jbHJTZXR0aW5ncyAucGR0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmJ1dHRvbjNkIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIiAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uM2Q6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYnRuQmx1ZUdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzAwQUU2ODtcbn1cbi5idG5CbHVlR3JlZW4uYWRkaWNvIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5idG5CbHVlR3JlZW4uYWRkaWNvIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0bkxpZ2h0Qmx1ZSB7XG4gIGJhY2tncm91bmQ6ICM3ZDZlY2M7XG59XG4uYnRuTGlnaHRCbHVlLmFkZFJlZiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5hZGRSZWYgLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS50ZEJ0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS50ZEJ0biAubWF0LWljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMi41cHg7XG4gIHJpZ2h0OiA4cHg7XG59XG4uYnRuTGlnaHRCbHVlLnRkQnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM0ODQ4NDg7XG59XG4uYnRuTGlnaHRCbHVlLmNvbXBCdG4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTQ1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5idG5MaWdodEJsdWUuY29tcEJ0biAubWF0LWljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xuICByaWdodDogMHB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5zdkJ0biB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5idG5MaWdodEJsdWUuc3ZCdG4gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuT3JhbmdlIHtcbiAgYmFja2dyb3VuZDogI2U5MWIwMDtcbn1cbi5idG5PcmFuZ2UucmVkaWNvIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmJ0bk9yYW5nZS5yZWRpY28gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuUHVycGxlIHtcbiAgYmFja2dyb3VuZDogI0E3NDk4Mjtcbn1cbi5idG5QdXJwbGUucHJldmlldyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5idG5QdXJwbGUuZWJja0J0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmJ0blB1cnBsZS5lYmNrQnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IDNweDtcbn1cbi5idG5QdXJwbGUuYWRkUmVmIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYnRuUHVycGxlLmFkZFJlZiAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8qIEZBREUgKi9cbi5idG5GYWRlLmJ0bkJsdWVHcmVlbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMTgyNUI7XG59XG5cbi5idG5GYWRlLmJ0bkxpZ2h0Qmx1ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDk3ZjY7XG59XG5cbi5idG5GYWRlLmJ0bk9yYW5nZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGRjhFMDA7XG59XG5cbi5idG5GYWRlLmJ0blB1cnBsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM2RDE4NEI7XG59XG5cbi8qIDNEICovXG4uYnRuQmx1ZUdyZWVuLmJ0blB1c2gge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzAwNzE0NDtcbn1cblxuLmJ0bkxpZ2h0Qmx1ZS5idG5QdXNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMzMjJhNTQ7XG59XG5cbi5idG5PcmFuZ2UuYnRuUHVzaCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjOGMxODA4O1xufVxuXG4uYnRuUHVycGxlLmJ0blB1c2gge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzZEMTg0Qjtcbn1cblxuLmJ0blB1c2g6aG92ZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5idG5CbHVlR3JlZW4uYnRuUHVzaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMDA3MTQ0O1xufVxuXG4uYnRuTGlnaHRCbHVlLmJ0blB1c2g6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzFFODE4NTtcbn1cblxuLmJ0bk9yYW5nZS5idG5QdXNoOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICNBNjY2MTU7XG59XG5cbi5idG5QdXJwbGUuYnRuUHVzaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjNkQxODRCO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/color-dialog/color-dialog.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/color-dialog/color-dialog.component.ts ***!
    \***************************************************************/

  /*! exports provided: ColorDialogComponent */

  /***/
  function srcAppSharedColorDialogColorDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorDialogComponent", function () {
      return ColorDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ColorDialogComponent = /*#__PURE__*/function () {
      function ColorDialogComponent(fb, dialogRef, data) {
        _classCallCheck(this, ColorDialogComponent);

        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.colorTemplate = 'primary';
        this.touchUi = false;
        this.formVal = [];
      }

      _createClass(ColorDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.settingsForm = this.fb.group({
            bgSettings: this.fb.array([])
          });
          var bgSettings = this.settingsForm.controls.bgSettings;
          var bgList = this.data.bgSettings || [];
          bgList.map(function (bg) {
            bgSettings.push(_this22.intiFormArrays('bgSettings', bg));
          });
        }
      }, {
        key: "intiFormArrays",
        value: function intiFormArrays(field) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (field === 'bgSettings') {
            return this.fb.group({
              min: [value.min, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              max: [value.max, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              color: [value.color, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
          }
        }
      }, {
        key: "hexToRgb",
        value: function hexToRgb(hex) {
          console.log(hex);
          var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
          hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
          });
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
        }
      }, {
        key: "addFormItem",
        value: function addFormItem(arrayName) {
          var fbArray = this.settingsForm.get(arrayName);
          fbArray.push(this.intiFormArrays(arrayName));
        }
      }, {
        key: "removeFormItem",
        value: function removeFormItem(arrayName, index) {
          var fbArray = this.settingsForm.get(arrayName);
          fbArray.removeAt(index);
        }
      }, {
        key: "closeSettings",
        value: function closeSettings() {
          this.settingsForm.markAllAsTouched();

          if (!this.settingsForm.valid) {
            return;
          }

          this.dialogRef.close(this.settingsForm.value);
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;

          if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }

          return true;
        }
      }]);

      return ColorDialogComponent;
    }();

    ColorDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ColorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-color-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./color-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/color-dialog/color-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./color-dialog.component.scss */
      "./src/app/shared/color-dialog/color-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ColorDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/column-selector/column-selector.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/column-selector/column-selector.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedColumnSelectorColumnSelectorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".awa-column-selector .column-title {\n  font-size: 16px;\n  letter-spacing: 0.48px;\n  font-weight: 500;\n  display: block;\n  opacity: 0.6;\n  line-height: 21px;\n  font-family: \"open-sans-condensed-bold\";\n}\n\n.col-move-btns {\n  margin-top: 100px;\n}\n\n.col-move-btns button {\n  display: block;\n  margin: 16px auto;\n  border-radius: 0;\n  border-color: #28618f;\n  background: steelblue;\n}\n\n.col-move-btns button:disabled {\n  background: gray;\n  cursor: not-allowed;\n  opacity: 0.5;\n  border-color: gray;\n}\n\n.col-move-btns button:disabled .mat-icon {\n  color: #acacac;\n}\n\n.col-move-btns button .mat-icon {\n  color: #ffffff;\n}\n\n.col-move-btns button .mat-icon svg {\n  position: relative;\n  top: -7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9jb2x1bW4tc2VsZWN0b3IvY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRztFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FDQUw7O0FESUM7RUFDRSxpQkFBQTtBQ0RIOztBREVHO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDQUw7O0FEQ0s7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ1A7O0FEQU87RUFDQyxjQUFBO0FDRVI7O0FEQ0s7RUFDRyxjQUFBO0FDQ1I7O0FEQU87RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNFVCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb2x1bW4tc2VsZWN0b3IvY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF3YS1jb2x1bW4tc2VsZWN0b3Ige1xyXG4gICAuY29sdW1uLXRpdGxlIHtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNDhweDtcclxuICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gLmNvbC1tb3ZlLWJ0bnMge1xyXG4gICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgYnV0dG9uIHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBtYXJnaW46IDE2cHggYXV0bztcclxuICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NywgMTQzKTtcclxuICAgICBiYWNrZ3JvdW5kOnN0ZWVsYmx1ZTtcclxuICAgICAmOmRpc2FibGVke1xyXG4gICAgICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICBib3JkZXItY29sb3I6IGdyYXk7XHJcbiAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjYWNhY2FjO1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgICAubWF0LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgc3ZnIHtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICB0b3A6IC03cHg7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbiB9IiwiLmF3YS1jb2x1bW4tc2VsZWN0b3IgLmNvbHVtbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDAuNjtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xufVxuXG4uY29sLW1vdmUtYnRucyB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLmNvbC1tb3ZlLWJ0bnMgYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTZweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItY29sb3I6ICMyODYxOGY7XG4gIGJhY2tncm91bmQ6IHN0ZWVsYmx1ZTtcbn1cbi5jb2wtbW92ZS1idG5zIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xufVxuLmNvbC1tb3ZlLWJ0bnMgYnV0dG9uOmRpc2FibGVkIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjYWNhY2FjO1xufVxuLmNvbC1tb3ZlLWJ0bnMgYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNvbC1tb3ZlLWJ0bnMgYnV0dG9uIC5tYXQtaWNvbiBzdmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTdweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/column-selector/column-selector.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/column-selector/column-selector.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ColumnSelectorComponent */

  /***/
  function srcAppSharedColumnSelectorColumnSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnSelectorComponent", function () {
      return ColumnSelectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ColumnSelectorComponent = /*#__PURE__*/function () {
      function ColumnSelectorComponent(ngControl) {
        _classCallCheck(this, ColumnSelectorComponent);

        this.ngControl = ngControl;
        this.availableColumns = [];
        this.selectedColumns = [];
        this.selectedAvailableItems = [];
        this.selectedSelectedItems = [];
        this.lastSelectedItemIndex = 0;
        this.isDisabled = false;

        if (this.ngControl != null) {
          this.ngControl.valueAccessor = this;
        }
      }

      _createClass(ColumnSelectorComponent, [{
        key: "writeValue",
        value: function writeValue(selectedcolumns) {
          if (Array.isArray(selectedcolumns)) {
            this.selectedColumns = selectedcolumns;
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {}
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
      }, {
        key: "selectedItemIndexChanged",
        value: function selectedItemIndexChanged($event) {
          this.lastSelectedItemIndex = $event;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.isDisabled = isDisabled;
        }
      }, {
        key: "availableSelectionChanged",
        value: function availableSelectionChanged(ev) {
          this.selectedAvailableItems = ev;
        }
      }, {
        key: "selectedSelectionChanged",
        value: function selectedSelectionChanged(ev) {
          this.selectedSelectedItems = ev;
        }
      }, {
        key: "selectedColumnOrderChanged",
        value: function selectedColumnOrderChanged(selectedColumnsFromList) {
          this.selectedColumns = this.rebuildId(selectedColumnsFromList);
          this.ngControl.control.setValue(this.selectedColumns);
        }
      }, {
        key: "droppedInToSelectedColumns",
        value: function droppedInToSelectedColumns() {
          this.selectedColumns = this.rebuildId(this.selectedColumns);
          this.ngControl.control.setValue(this.selectedColumns);
        }
      }, {
        key: "droppedInToAvailableColumns",
        value: function droppedInToAvailableColumns() {
          this.availableColumns = this.rebuildId(this.availableColumns);
          this.ngControl.control.setValue(this.selectedColumns);
        }
      }, {
        key: "moveItemsToSelected",
        value: function moveItemsToSelected() {
          this.availableColumns = this.getupdatedSourceColumns(this.availableColumns, this.selectedAvailableItems);
          this.selectedColumns = this.getupdatedDestinationColumns(this.selectedColumns, this.selectedAvailableItems);
          this.selectedAvailableItems = [];
          this.ngControl.control.setValue(this.selectedColumns);
        }
      }, {
        key: "moveItemsToAvailable",
        value: function moveItemsToAvailable() {
          this.selectedColumns = this.getupdatedSourceColumns(this.selectedColumns, this.selectedSelectedItems);
          this.availableColumns = this.getupdatedDestinationColumns(this.availableColumns, this.selectedSelectedItems, true);
          this.selectedSelectedItems = [];
          this.ngControl.control.setValue(this.selectedColumns);
        }
      }, {
        key: "moveAllItemsToSelected",
        value: function moveAllItemsToSelected() {
          this.selectedColumns = this.getupdatedDestinationColumns(this.selectedColumns, this.availableColumns);
          this.availableColumns = [];
          this.ngControl.control.setValue(this.selectedColumns);
        }
      }, {
        key: "moveAllItemsToAvaiable",
        value: function moveAllItemsToAvaiable() {
          this.availableColumns = this.getupdatedDestinationColumns(this.availableColumns, this.selectedColumns, true);
          this.selectedColumns = [];
          this.ngControl.control.setValue(this.selectedColumns);
        }
      }, {
        key: "getupdatedSourceColumns",
        value: function getupdatedSourceColumns(sourceColumns, selectedItemFromList) {
          var selectedItemIds = selectedItemFromList.map(function (obj) {
            return obj.id;
          });
          sourceColumns = sourceColumns.filter(function (obj) {
            return selectedItemIds.indexOf(obj.id) < 0;
          });
          sourceColumns = this.rebuildId(sourceColumns);
          return sourceColumns;
        }
      }, {
        key: "getupdatedDestinationColumns",
        value: function getupdatedDestinationColumns(destinationColumns, selectedItemFromList) {
          var sortDestination = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (sortDestination) {
            var _destinationColumns;

            (_destinationColumns = destinationColumns).push.apply(_destinationColumns, _toConsumableArray(selectedItemFromList)); // destinationColumns = destinationColumns.sort((a, b) => a.title.localeCompare(b.title));

          } else {
            var _destinationColumns2;

            (_destinationColumns2 = destinationColumns).splice.apply(_destinationColumns2, [this.lastSelectedItemIndex, 0].concat(_toConsumableArray(selectedItemFromList)));
          }

          destinationColumns = this.rebuildId(destinationColumns);
          return destinationColumns;
        }
      }, {
        key: "rebuildId",
        value: function rebuildId(columns) {
          return columns.map(function (obj, index) {
            obj.id = index + 1;
            return obj;
          });
        }
      }]);

      return ColumnSelectorComponent;
    }();

    ColumnSelectorComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ColumnSelectorComponent.prototype, "availableColumnsLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ColumnSelectorComponent.prototype, "selectedColumnsLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ColumnSelectorComponent.prototype, "availableColumns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ColumnSelectorComponent.prototype, "selectedColumns", void 0);
    ColumnSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-column-selector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./column-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/column-selector/column-selector.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./column-selector.component.scss */
      "./src/app/shared/column-selector/column-selector.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], ColumnSelectorComponent);
    /***/
  },

  /***/
  "./src/app/shared/column-selector/drag-drop-list/drag-drop-list.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared/column-selector/drag-drop-list/drag-drop-list.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedColumnSelectorDragDropListDragDropListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".awa-drop-list-container, .cdk-drag-preview {\n  border: 1px solid #ccc;\n  max-height: 320px;\n  height: 320px;\n  overflow-y: auto;\n}\n.awa-drop-list-container .col-list-item, .cdk-drag-preview .col-list-item {\n  font-size: 12px;\n  letter-spacing: 0.32px;\n  opacity: 0.9;\n  cursor: -webkit-grab;\n  cursor: grab;\n  padding: 8px 16px;\n  font-family: \"open-sans-condensed-bold\";\n}\n.awa-drop-list-container .col-list-item.cdk-drag-disabled, .cdk-drag-preview .col-list-item.cdk-drag-disabled {\n  opacity: 0.62;\n}\n.item-dragging .item.selected:not(.cdk-drag-placeholder) {\n  opacity: 0.3;\n}\n.col-list-item.cdk-drag-dragging {\n  border: 1px solid #ccc;\n}\n.cdk-drag-preview {\n  max-width: 360px;\n  width: 360px;\n  height: auto;\n}\n.cdk-drag-preview .col-list-item {\n  line-height: 32px;\n}\n.cdk-drop-list-dragging .cdk-drag {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.awa-drop-list-container, .cdk-drag-preview {\n  border-color: #ccc;\n  background-color: #fff;\n}\n.awa-drop-list-container .col-list-item, .cdk-drag-preview .col-list-item {\n  color: #000;\n}\n.awa-drop-list-container .col-list-item:nth-child(odd), .cdk-drag-preview .col-list-item:nth-child(odd) {\n  background-color: #eee8f8;\n}\n.awa-drop-list-container .col-list-item:nth-child(even), .cdk-drag-preview .col-list-item:nth-child(even) {\n  background-color: #fff;\n}\n.awa-drop-list-container .col-list-item:hover, .cdk-drag-preview .col-list-item:hover {\n  background-color: #a494be;\n}\n.awa-drop-list-container .col-list-item.selected, .cdk-drag-preview .col-list-item.selected {\n  background-color: #a494be;\n  font-weight: 400;\n}\n.col-list-item.cdk-drag-dragging {\n  border-color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9jb2x1bW4tc2VsZWN0b3IvZHJhZy1kcm9wLWxpc3QvZHJhZy1kcm9wLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb2x1bW4tc2VsZWN0b3IvZHJhZy1kcm9wLWxpc3QvZHJhZy1kcm9wLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0g7QURBRztFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FDRUw7QURESztFQUNFLGFBQUE7QUNHUDtBREdHO0VBQ0UsWUFBQTtBQ0FMO0FESUc7RUFDRSxzQkFBQTtBQ0RMO0FES0M7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRkg7QURHRztFQUNFLGlCQUFBO0FDREw7QURLQztFQUNFLHNEQUFBO0FDRkg7QURLQztFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUNGSDtBREdHO0VBQ0UsV0FBQTtBQ0RMO0FERUs7RUFDRSx5QkFBQTtBQ0FQO0FERUs7RUFDRSxzQkFBQTtBQ0FQO0FERUs7RUFDRSx5QkFBQTtBQ0FQO0FERUs7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDQVA7QURLRztFQUNFLGtCQUFBO0FDRkwiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29sdW1uLXNlbGVjdG9yL2RyYWctZHJvcC1saXN0L2RyYWctZHJvcC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF3YS1kcm9wLWxpc3QtY29udGFpbmVyLCAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgIG1heC1oZWlnaHQ6IDMyMHB4O1xyXG4gICBoZWlnaHQ6IDMyMHB4O1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAuY29sLWxpc3QtaXRlbSB7XHJcbiAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiAwLjMycHg7XHJcbiAgICAgb3BhY2l0eTogMC45OyAgICBcclxuICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICAgICYuY2RrLWRyYWctZGlzYWJsZWQge1xyXG4gICAgICAgb3BhY2l0eTogMC42MjtcclxuICAgICB9XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gLml0ZW0tZHJhZ2dpbmcge1xyXG4gICAuaXRlbS5zZWxlY3RlZDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICAgb3BhY2l0eTogMC4zO1xyXG4gICB9XHJcbiB9XHJcbiAuY29sLWxpc3QtaXRlbSB7XHJcbiAgICYuY2RrLWRyYWctZHJhZ2dpbmcge1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICB3aWR0aDogMzYwcHg7XHJcbiAgIGhlaWdodDogYXV0bztcclxuICAgLmNvbC1saXN0LWl0ZW0ge1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICB9XHJcbiB9XHJcbiBcclxuIC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jZGstZHJhZyB7XHJcbiAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuIH1cclxuIFxyXG4gLmF3YS1kcm9wLWxpc3QtY29udGFpbmVyLCAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgIGJvcmRlci1jb2xvcjogI2NjYztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgLmNvbC1saXN0LWl0ZW0ge1xyXG4gICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICY6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZThmODtcclxuICAgICB9XHJcbiAgICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICB9XHJcbiAgICAgJjpob3ZlciB7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ5NGJlO1xyXG4gICAgIH1cclxuICAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNDk0YmU7XHJcbiAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgIH1cclxuICAgfVxyXG4gfVxyXG4gLmNvbC1saXN0LWl0ZW0ge1xyXG4gICAmLmNkay1kcmFnLWRyYWdnaW5nIHtcclxuICAgICBib3JkZXItY29sb3I6ICNlZWU7XHJcbiAgIH1cclxuIH1cclxuICIsIi5hd2EtZHJvcC1saXN0LWNvbnRhaW5lciwgLmNkay1kcmFnLXByZXZpZXcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5hd2EtZHJvcC1saXN0LWNvbnRhaW5lciAuY29sLWxpc3QtaXRlbSwgLmNkay1kcmFnLXByZXZpZXcgLmNvbC1saXN0LWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjMycHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgY3Vyc29yOiBncmFiO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG59XG4uYXdhLWRyb3AtbGlzdC1jb250YWluZXIgLmNvbC1saXN0LWl0ZW0uY2RrLWRyYWctZGlzYWJsZWQsIC5jZGstZHJhZy1wcmV2aWV3IC5jb2wtbGlzdC1pdGVtLmNkay1kcmFnLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42Mjtcbn1cblxuLml0ZW0tZHJhZ2dpbmcgLml0ZW0uc2VsZWN0ZWQ6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5jb2wtbGlzdC1pdGVtLmNkay1kcmFnLWRyYWdnaW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBtYXgtd2lkdGg6IDM2MHB4O1xuICB3aWR0aDogMzYwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jZGstZHJhZy1wcmV2aWV3IC5jb2wtbGlzdC1pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jZGstZHJhZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmF3YS1kcm9wLWxpc3QtY29udGFpbmVyLCAuY2RrLWRyYWctcHJldmlldyB7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hd2EtZHJvcC1saXN0LWNvbnRhaW5lciAuY29sLWxpc3QtaXRlbSwgLmNkay1kcmFnLXByZXZpZXcgLmNvbC1saXN0LWl0ZW0ge1xuICBjb2xvcjogIzAwMDtcbn1cbi5hd2EtZHJvcC1saXN0LWNvbnRhaW5lciAuY29sLWxpc3QtaXRlbTpudGgtY2hpbGQob2RkKSwgLmNkay1kcmFnLXByZXZpZXcgLmNvbC1saXN0LWl0ZW06bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlOGY4O1xufVxuLmF3YS1kcm9wLWxpc3QtY29udGFpbmVyIC5jb2wtbGlzdC1pdGVtOm50aC1jaGlsZChldmVuKSwgLmNkay1kcmFnLXByZXZpZXcgLmNvbC1saXN0LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hd2EtZHJvcC1saXN0LWNvbnRhaW5lciAuY29sLWxpc3QtaXRlbTpob3ZlciwgLmNkay1kcmFnLXByZXZpZXcgLmNvbC1saXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ5NGJlO1xufVxuLmF3YS1kcm9wLWxpc3QtY29udGFpbmVyIC5jb2wtbGlzdC1pdGVtLnNlbGVjdGVkLCAuY2RrLWRyYWctcHJldmlldyAuY29sLWxpc3QtaXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNDk0YmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jb2wtbGlzdC1pdGVtLmNkay1kcmFnLWRyYWdnaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWVlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/column-selector/drag-drop-list/drag-drop-list.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared/column-selector/drag-drop-list/drag-drop-list.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DragDropListComponent */

  /***/
  function srcAppSharedColumnSelectorDragDropListDragDropListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropListComponent", function () {
      return DragDropListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

    var DragDropListComponent = /*#__PURE__*/function () {
      function DragDropListComponent(eRef, cdRef) {
        _classCallCheck(this, DragDropListComponent);

        this.eRef = eRef;
        this.cdRef = cdRef;
        this.itemsRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedItemIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragging = null;
        this.selections = [];
        this.currentSelectionSpan = [];
      }

      _createClass(DragDropListComponent, [{
        key: "dragStarted",
        value: function dragStarted(ev, index) {
          var _this23 = this;

          this.dragging = ev.source._dragRef;
          var indices = this.selections.length ? this.selections : [index];
          ev.source.data = {
            indices: indices,
            values: indices.map(function (i) {
              return _this23.items[i];
            }),
            source: this
          };
          this.cdRef.detectChanges();
        }
      }, {
        key: "dragEnded",
        value: function dragEnded() {
          this.dragging = null;
          this.cdRef.detectChanges();
        }
      }, {
        key: "dropped",
        value: function dropped(ev) {
          var _this24 = this;

          if (!ev.isPointerOverContainer || !lodash__WEBPACK_IMPORTED_MODULE_2__["get"](ev, 'item.data.source')) {
            return;
          }

          var data = ev.item.data;

          if (data.source === this) {
            var removed = lodash__WEBPACK_IMPORTED_MODULE_2__["pullAt"](this.items, data.indices);

            if (ev.previousContainer !== ev.container) {
              this.itemsRemoved.emit(removed); // this.itemsUpdated.emit(this.items);
            }
          }

          this.dragging = null;
          setTimeout(function () {
            return _this24.clearSelection();
          });
        }
      }, {
        key: "droppedIntoList",
        value: function droppedIntoList(ev) {
          var _this$items,
              _this25 = this;

          if (!ev.isPointerOverContainer || !lodash__WEBPACK_IMPORTED_MODULE_2__["get"](ev, 'item.data.source')) {
            return;
          }

          var data = ev.item.data;
          var spliceIntoIndex = ev.currentIndex;

          if (ev.previousContainer === ev.container && this.selections.length > 1) {
            this.selections.splice(-1, 1);
            var sum = lodash__WEBPACK_IMPORTED_MODULE_2__["sumBy"](this.selections, function (selectedIndex) {
              return selectedIndex <= spliceIntoIndex ? 1 : 0;
            });
            spliceIntoIndex -= sum;
          }

          (_this$items = this.items).splice.apply(_this$items, [spliceIntoIndex, 0].concat(_toConsumableArray(data.values)));

          if (ev.previousContainer !== ev.container) {
            this.itemsAdded.emit(data.values);
          } else {
            this.itemsUpdated.emit(this.items);
          }

          setTimeout(function () {
            return _this25.cdRef.detectChanges();
          });
        }
      }, {
        key: "isSelected",
        value: function isSelected(i) {
          return this.selections.indexOf(i) >= 0;
        }
      }, {
        key: "select",
        value: function select(event, index) {
          var _this26 = this;

          this.selectedItemIndexChange.emit(index);
          var shiftSelect = event.shiftKey && (this.lastSingleSelection || this.lastSingleSelection === 0) && this.lastSingleSelection !== index;

          if (!this.selections || this.selections.length < 1) {
            // if nothing selected yet, init selection mode and select.
            this.selections = [index];
            this.lastSingleSelection = index;
          } else if (event.metaKey || event.ctrlKey) {
            // if holding ctrl / cmd
            var alreadySelected = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.selections, function (s) {
              return s === index;
            });

            if (alreadySelected) {
              lodash__WEBPACK_IMPORTED_MODULE_2__["remove"](this.selections, function (s) {
                return s === index;
              });
              this.lastSingleSelection = null;
            } else {
              this.selections.push(index);
              this.lastSingleSelection = index;
            }
          } else if (shiftSelect) {
            // if holding shift, add group to selection and currentSelectionSpan
            var newSelectionBefore = index < this.lastSingleSelection;
            var count = newSelectionBefore ? this.lastSingleSelection - (index - 1) : index + 1 - this.lastSingleSelection; // clear previous shift selection

            if (this.currentSelectionSpan && this.currentSelectionSpan.length > 0) {
              lodash__WEBPACK_IMPORTED_MODULE_2__["each"](this.currentSelectionSpan, function (i) {
                lodash__WEBPACK_IMPORTED_MODULE_2__["remove"](_this26.selections, function (s) {
                  return s === i;
                });
              });
              this.currentSelectionSpan = [];
            } // build new currentSelectionSpan


            lodash__WEBPACK_IMPORTED_MODULE_2__["times"](count, function (c) {
              if (newSelectionBefore) {
                _this26.currentSelectionSpan.push(_this26.lastSingleSelection - c);
              } else {
                _this26.currentSelectionSpan.push(_this26.lastSingleSelection + c);
              }
            }); // select currentSelectionSpan

            lodash__WEBPACK_IMPORTED_MODULE_2__["each"](this.currentSelectionSpan, function (i) {
              if (!lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](_this26.selections, i)) {
                _this26.selections.push(i);
              }
            });
          } else {
            // Select only this item or clear selections.
            var _alreadySelected = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.selections, function (s) {
              return s === index;
            });

            if (!_alreadySelected && !event.shiftKey || _alreadySelected && this.selections.length > 1) {
              this.clearSelection();
              this.selections = [index];
              this.lastSingleSelection = index;
            } else if (_alreadySelected) {
              this.clearSelection();
            }
          }

          if (!event.shiftKey) {
            this.currentSelectionSpan = [];
          }

          this.selectionChanged.emit(this.selections.map(function (i) {
            return _this26.items[i];
          }));
          this.cdRef.detectChanges();
        }
      }, {
        key: "clearSelection",
        value: function clearSelection() {
          var _this27 = this;

          if (this.selections.length) {
            this.selections = [];
            this.currentSelectionSpan = [];
            this.lastSingleSelection = null;
            this.selectionChanged.emit(this.selections.map(function (i) {
              return _this27.items[i];
            }));
            this.cdRef.detectChanges();
          }
        }
      }, {
        key: "selectAll",
        value: function selectAll() {
          if (this.selections.length !== this.items.length) {
            this.selections = lodash__WEBPACK_IMPORTED_MODULE_2__["map"](this.items, function (item, i) {
              return i;
            });
            this.currentSelectionSpan = [];
            this.lastSingleSelection = null;
            this.selectionChanged.emit(this.items);
            this.cdRef.detectChanges();
          }
        } // handles "ctrl/command + a" to select all

      }, {
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          if (event.key === 'a' && (event.ctrlKey || event.metaKey) && this.selections.length && document.activeElement.nodeName !== 'INPUT') {
            event.preventDefault();
            this.selectAll();
          } else if (event.key === 'Escape' && this.dragging) {
            this.dragging.reset();
            document.dispatchEvent(new Event('mouseup'));
          }
        }
      }, {
        key: "clickout",
        value: function clickout(event) {
          if (this.selections.length && !this.eRef.nativeElement.contains(event.target)) {
            this.clearSelection();
          }
        }
      }]);

      return DragDropListComponent;
    }();

    DragDropListComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragDropListComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragDropListComponent.prototype, "isDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DragDropListComponent.prototype, "itemsRemoved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DragDropListComponent.prototype, "itemsAdded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DragDropListComponent.prototype, "itemsUpdated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DragDropListComponent.prototype, "selectionChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DragDropListComponent.prototype, "selectedItemIndexChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
      "static": false
    })], DragDropListComponent.prototype, "templateRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])], DragDropListComponent.prototype, "handleKeyboardEvent", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])], DragDropListComponent.prototype, "clickout", null);
    DragDropListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-drag-drop-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drag-drop-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/column-selector/drag-drop-list/drag-drop-list.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./drag-drop-list.component.scss */
      "./src/app/shared/column-selector/drag-drop-list/drag-drop-list.component.scss"))["default"]]
    })], DragDropListComponent);
    /***/
  },

  /***/
  "./src/app/shared/completeness-dialog/completeness-dialog.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared/completeness-dialog/completeness-dialog.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedCompletenessDialogCompletenessDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-raised-button {\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n\n.mat-dialog-title {\n  font-family: \"open-sans-condensed-bold\";\n  margin-bottom: 10px;\n}\n\n.mat-dialog-title {\n  font-size: 18px;\n  color: #fff;\n  font-family: \"open-sans-condensed-bold\";\n  position: relative;\n  width: 98%;\n  display: inline-block;\n  background: linear-gradient(45deg, #433683, transparent);\n  padding: 5px 20px;\n}\n\n.mat-dialog-title.bg2 {\n  background: linear-gradient(45deg, plum, transparent);\n}\n\n.mat-dialog-actions {\n  display: block;\n}\n\n.mat-dialog-actions {\n  text-align: right;\n}\n\n.mat-dialog-content {\n  max-height: auto;\n}\n\n.strong {\n  cursor: pointer;\n  color: #367575;\n  font-weight: 500;\n}\n\n.table .mat-card {\n  margin: 12px;\n  cursor: pointer;\n}\n\n.btn-wrapper {\n  text-align: right;\n  margin-bottom: 20px;\n}\n\n.content-details {\n  height: 500px;\n  overflow: overlay;\n}\n\n.mat-dialog-content {\n  max-height: initial;\n}\n\n.primary-btn-gray mat-icon {\n  margin-right: 10px;\n}\n\n.table.brd-rt tbody td {\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 13px;\n}\n\n::ng-deep .mat-dialog-container {\n  background: #ebe8fb;\n}\n\n.field-label {\n  text-transform: uppercase;\n  background: palegoldenrod;\n  padding: 5px 10px;\n  /* color: wheat; */\n  font-family: \"open-sans-condensed-bold\";\n  /* margin-top: 4px; */\n  display: inline-block;\n  vertical-align: top;\n}\n\n.button3d {\n  width: 200px;\n  padding: 0;\n  margin: 10px 20px 10px 0;\n  font-weight: 600;\n  text-align: center;\n  line-height: 50px;\n  color: #FFF;\n  border-radius: 5px;\n  transition: all 0.2s;\n  font-family: \"open-sans-condensed-bold\" !important;\n  cursor: pointer;\n}\n\n.button3d:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btnBlueGreen {\n  background: #00AE68;\n}\n\n.btnBlueGreen.addico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n\n.btnBlueGreen.addico .mat-icon {\n  font-size: 20px;\n}\n\n.btnLightBlue {\n  background: #7d6ecc;\n}\n\n.btnLightBlue.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n\n.btnLightBlue.addRef .material-icons {\n  font-size: 20px;\n}\n\n.btnLightBlue.tdBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n}\n\n.btnLightBlue.tdBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -2.5px;\n  right: 8px;\n}\n\n.btnLightBlue.tdBtn:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n}\n\n.btnLightBlue.compBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 145px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n}\n\n.btnLightBlue.compBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  right: 0px;\n}\n\n.btnLightBlue.svBtn {\n  font-size: 18px;\n  color: #ffffff;\n  width: 180px;\n  height: 37px;\n  line-height: 30px;\n}\n\n.btnLightBlue.svBtn .mat-icon {\n  font-size: 20px;\n}\n\n.btnOrange {\n  background: #e91b00;\n}\n\n.btnOrange.redico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n}\n\n.btnOrange.redico .mat-icon {\n  font-size: 20px;\n}\n\n.btnPurple {\n  background: #A74982;\n}\n\n.btnPurple.preview {\n  width: 100px;\n  height: 30px;\n  line-height: 28px;\n}\n\n.btnPurple.ebckBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 95px;\n  height: 40px;\n  line-height: 40px;\n  padding-right: 20px;\n}\n\n.btnPurple.ebckBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  left: 3px;\n}\n\n.btnPurple.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n\n.btnPurple.addRef .material-icons {\n  font-size: 20px;\n}\n\n.btnPurple.addico {\n  width: 75px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n\n.btnPurple.addico.v-p {\n  height: 40px;\n}\n\n.btnPurple.addico.w-t {\n  width: 100px;\n  position: relative;\n  left: 960px;\n  top: 0px;\n}\n\n.btnPurple.addico:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #585858;\n}\n\n.btnPurple.addico .mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  position: relative;\n  top: 3px;\n}\n\n/* FADE */\n\n.btnFade.btnBlueGreen:hover {\n  background: #21825B;\n}\n\n.btnFade.btnLightBlue:hover {\n  background: #0097f6;\n}\n\n.btnFade.btnOrange:hover {\n  background: #FF8E00;\n}\n\n.btnFade.btnPurple:hover {\n  background: #6D184B;\n}\n\n/* 3D */\n\n.btnBlueGreen.btnPush {\n  box-shadow: 0px 5px 0px 0px #007144;\n}\n\n.btnLightBlue.btnPush {\n  box-shadow: 0px 5px 0px 0px #322a54;\n}\n\n.btnOrange.btnPush {\n  box-shadow: 0px 5px 0px 0px #8c1808;\n}\n\n.btnPurple.btnPush {\n  box-shadow: 0px 5px 0px 0px #6D184B;\n}\n\n.btnPush:hover {\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n\n.btnBlueGreen.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #007144;\n}\n\n.btnLightBlue.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #1E8185;\n}\n\n.btnOrange.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #A66615;\n}\n\n.btnPurple.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #6D184B;\n}\n\ntr:nth-child(odd) {\n  background: #f0f7f7;\n}\n\ntr:nth-child(even) {\n  background: #ffffff;\n}\n\n.compClr {\n  background: steelblue;\n  color: #fff;\n  padding: 5px 10px;\n  display: inline-block;\n  margin-bottom: 5px;\n  vertical-align: top;\n}\n\n.btn-back-wrapper .btnPurple.btnPush {\n  margin: 0;\n  position: relative;\n  top: -3px;\n}\n\n.comp-tab ::ng-deep .mat-tab-body-content {\n  overflow: hidden !important;\n}\n\n.comp-tab ::ng-deep .mat-tab-labels {\n  margin-top: 0px;\n  height: 46px;\n  border-bottom: 0px;\n  box-shadow: none !important;\n  margin-bottom: 2px;\n}\n\n.comp-tab ::ng-deep .mat-tab-label {\n  margin-top: 0px;\n  height: 46px;\n  padding: 0 9px;\n  border-radius: 2px 2px 0 0;\n  margin-right: 5px;\n  background: #433683 !important;\n  color: #fff;\n}\n\n.comp-tab ::ng-deep .mat-tab-label .mat-tab-label-content {\n  font-size: 13px;\n}\n\n.comp-tab ::ng-deep .mat-tab-label-active {\n  background: #433683 !important;\n  color: #fff !important;\n  border-bottom: 4px solid #846bff;\n}\n\n.comp-tab ::ng-deep .mat-tab-list {\n  margin-left: 0;\n  margin-bottom: 2px;\n}\n\n.category-list-Owl {\n  margin-bottom: 12px;\n}\n\n.category-list-Owl .left-arrow {\n  float: left;\n  width: 50px;\n  position: relative;\n  top: 30px;\n}\n\n.category-list-Owl .category-list {\n  width: calc(100% - 100px);\n  float: left;\n}\n\n.category-list-Owl .right-arrow {\n  float: left;\n  width: 50px;\n  padding-left: 16px;\n  position: relative;\n  top: 30px;\n}\n\n.category-list-Owl button.prev-next-btn {\n  border-radius: 0;\n  padding: 0;\n  width: 34px;\n  min-width: auto;\n  padding: 0 !important;\n}\n\n.category-list-Owl button.clr2 {\n  background: steelblue !important;\n  border: 1px solid #2c5e86 !important;\n}\n\n.category-list .mat-card {\n  opacity: 0.42;\n  cursor: pointer;\n}\n\n.category-list .mat-card.selected {\n  opacity: 1;\n}\n\n::ng-deep .mat-dialog-container {\n  position: relative;\n}\n\n::ng-deep .mat-dialog-container .close {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  z-index: 100000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9jb21wbGV0ZW5lc3MtZGlhbG9nL2NvbXBsZXRlbmVzcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wbGV0ZW5lc3MtZGlhbG9nL2NvbXBsZXRlbmVzcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxrREFBQTtBQ0NIOztBRENBO0VBQ0csdUNBQUE7RUFDQSxtQkFBQTtBQ0VIOztBREFBO0VBQ0csZUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBRUEsd0RBQUE7RUFHQyxpQkFBQTtBQ0FKOztBRENJO0VBQ0UscURBQUE7QUNDTjs7QUR3QkE7RUFDRyxjQUFBO0FDckJIOztBRHVCQTtFQUNHLGlCQUFBO0FDcEJIOztBRHNCQTtFQUNHLGdCQUFBO0FDbkJIOztBRHFCQTtFQUVHLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNuQkg7O0FEcUJBO0VBQ0csWUFBQTtFQUNBLGVBQUE7QUNsQkg7O0FEb0JBO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtBQ2pCSDs7QURtQkE7RUFFRyxhQUFBO0VBQ0EsaUJBQUE7QUNqQkg7O0FEbUJBO0VBRUcsbUJBQUE7QUNqQkg7O0FEbUJBO0VBQ0csa0JBQUE7QUNoQkg7O0FEa0JBO0VBQ0csdUNBQUE7RUFDQSxlQUFBO0FDZkg7O0FEaUJBO0VBQ0csbUJBQUE7QUNkSDs7QURnQkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDYkY7O0FEaUJBO0VBSUcsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7RUFDQSxlQUFBO0FDakJIOztBRGtCRztFQUNHLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNoQk47O0FEb0JDO0VBQ0UsbUJBQUE7QUNqQkg7O0FEa0JHO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDaEJOOztBRGlCTTtFQUNHLGVBQUE7QUNmVDs7QURvQkM7RUFDRSxtQkFBQTtBQ2pCSDs7QURrQkc7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNoQk47O0FEaUJNO0VBQ0csZUFBQTtBQ2ZUOztBRGtCRztFQUNHLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDaEJOOztBRGlCTTtFQUNHLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDZlQ7O0FEaUJNO0VBQ0csZ0JBQUE7RUFDQSxtQ0FBQTtBQ2ZUOztBRGtCRztFQUNHLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDaEJOOztBRGlCTTtFQUNHLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDZlQ7O0FEbUJHO0VBQ0csZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDakJOOztBRGtCTTtFQUNHLGVBQUE7QUNoQlQ7O0FEc0JDO0VBQ0UsbUJBQUE7QUNuQkg7O0FEb0JHO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2xCTjs7QURtQk07RUFDRyxlQUFBO0FDakJUOztBRHVCQztFQUNFLG1CQUFBO0FDcEJIOztBRHFCRztFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNuQk47O0FEcUJHO0VBQ0csZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNuQk47O0FEb0JNO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNsQlQ7O0FEcUJHO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbkJOOztBRG9CTTtFQUNHLGVBQUE7QUNsQlQ7O0FEcUJHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDbkJKOztBRG9CSTtFQUNFLFlBQUE7QUNsQk47O0FEb0JJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNsQk47O0FEb0JJO0VBQ0csZ0JBQUE7RUFDQSxtQ0FBQTtBQ2xCUDs7QURvQkk7RUFDRyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNsQlA7O0FEdUJDLFNBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ3BCSDs7QUR1QkM7RUFDRSxtQkFBQTtBQ3BCSDs7QUR1QkM7RUFDRSxtQkFBQTtBQ3BCSDs7QUR1QkM7RUFDRSxtQkFBQTtBQ3BCSDs7QUR1QkMsT0FBQTs7QUFDQTtFQUNFLG1DQUFBO0FDcEJIOztBRHVCQztFQUNFLG1DQUFBO0FDcEJIOztBRHVCQztFQUNFLG1DQUFBO0FDcEJIOztBRHVCQztFQUNFLG1DQUFBO0FDcEJIOztBRHVCQztFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNwQkg7O0FEdUJDO0VBQ0UsbUNBQUE7QUNwQkg7O0FEdUJDO0VBQ0UsbUNBQUE7QUNwQkg7O0FEdUJDO0VBQ0UsbUNBQUE7QUNwQkg7O0FEdUJDO0VBQ0UsbUNBQUE7QUNwQkg7O0FEdUJBO0VBQW1CLG1CQUFBO0FDbkJuQjs7QURvQkE7RUFBb0IsbUJBQUE7QUNoQnBCOztBRGtCQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDZkY7O0FEa0JHO0VBQ0csU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ2ZOOztBRG1CRTtFQUNFLDJCQUFBO0FDaEJKOztBRGtCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDaEJKOztBRGtCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNoQko7O0FEaUJJO0VBQ0UsZUFBQTtBQ2ZOOztBRGtCRTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ2hCSjs7QURrQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNoQkY7O0FEb0JBO0VBQ0UsbUJBQUE7QUNqQkY7O0FEa0JFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNoQko7O0FEa0JFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDaEJKOztBRGtCRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNoQko7O0FEbUJJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ2pCTjs7QURtQkk7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0FDakJOOztBRDRCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDekJGOztBRDBCRTtFQUNFLFVBQUE7QUN4Qko7O0FEMkJBO0VBQ0Usa0JBQUE7QUN4QkY7O0FEeUJFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN2QkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcGxldGVuZXNzLWRpYWxvZy9jb21wbGV0ZW5lc3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWRpYWxvZy10aXRsZSB7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubWF0LWRpYWxvZy10aXRsZSB7XHJcbiAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICB3aWR0aDogOTglO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIC8vYmFja2dyb3VuZDogIzQzMzY4MztcclxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgNDVkZWdcclxuICAgICwgIzQzMzY4MywgdHJhbnNwYXJlbnQpO1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAmLmJnMntcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgNDVkZWdcclxuICAgICwgcGx1bSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgfVxyXG4gIC8vICAmOmJlZm9yZSB7XHJcbiAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgICAgbGVmdDogMDtcclxuICAvLyAgICAgYm90dG9tOiAtMTJweDtcclxuICAvLyAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgLy8gICAgIHdpZHRoOiA1NXB4O1xyXG4gIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZhODAwO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgJjphZnRlciB7XHJcbiAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgICAgbGVmdDogMDtcclxuICAvLyAgICAgYm90dG9tOiAtMTBweDtcclxuICAvLyAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgLy8gICAgIHdpZHRoOiA5NSU7XHJcbiAgLy8gICAgIG1heC13aWR0aDogMTgxcHg7XHJcbiAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmE4MDA7XHJcbiAgLy8gICB9XHJcbiAgICBcclxuIH1cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgbWF4LWhlaWdodDogYXV0bztcclxufVxyXG4uc3Ryb25nIHtcclxuICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIGNvbG9yOiAjMzY3NTc1O1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50YWJsZSAubWF0LWNhcmQgeyBcclxuICAgbWFyZ2luOiAxMnB4O1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ0bi13cmFwcGVyIHtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmNvbnRlbnQtZGV0YWlscyB7XHJcbiAgIC8vaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMwcHgpO1xyXG4gICBoZWlnaHQ6NTAwcHg7XHJcbiAgIG92ZXJmbG93Om92ZXJsYXk7XHJcbn1cclxuLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgLy9vdmVyZmxvdzpzY3JvbGw7XHJcbiAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XHJcbn1cclxuLnByaW1hcnktYnRuLWdyYXkgbWF0LWljb24ge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnRhYmxlLmJyZC1ydCB0Ym9keSB0ZHtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgYmFja2dyb3VuZDogI2ViZThmYjtcclxufVxyXG4uZmllbGQtbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYmFja2dyb3VuZDogcGFsZWdvbGRlbnJvZDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAvKiBjb2xvcjogd2hlYXQ7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gIC8qIG1hcmdpbi10b3A6IDRweDsgKi9cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4vLyBidXR0b25zXHJcblxyXG4uYnV0dG9uM2Qge1xyXG4gICAvL2Rpc3BsYXk6IGJsb2NrO1xyXG4gICAvL3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgLy9mbG9hdDogbGVmdDtcclxuICAgd2lkdGg6IDIwMHB4O1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDA7XHJcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgIGNvbG9yOiAjRkZGO1xyXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgIHRyYW5zaXRpb246IGFsbCAwLjJzIDtcclxuICAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCIhaW1wb3J0YW50O1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICY6ZGlzYWJsZWR7XHJcbiAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNDg0ODQ4O1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gLmJ0bkJsdWVHcmVlbiB7XHJcbiAgIGJhY2tncm91bmQ6ICMwMEFFNjg7XHJcbiAgICYuYWRkaWNve1xyXG4gICAgICB3aWR0aDogMjZweDtcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAubWF0LWljb257XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiB9XHJcbiBcclxuIC5idG5MaWdodEJsdWUge1xyXG4gICBiYWNrZ3JvdW5kOiAjN2Q2ZWNjO1xyXG4gICAmLmFkZFJlZntcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgJi50ZEJ0bntcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIHRvcDogLTIuNXB4O1xyXG4gICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgICY6ZGlzYWJsZWR7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNDg0ODQ4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgJi5jb21wQnRue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogMTQ1cHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiAgICYuc3ZCdG57XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBcclxuIH1cclxuIFxyXG4gLmJ0bk9yYW5nZSB7XHJcbiAgIGJhY2tncm91bmQ6ICNlOTFiMDA7XHJcbiAgICYucmVkaWNve1xyXG4gICAgICB3aWR0aDogMjZweDtcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiB9XHJcbiBcclxuIC5idG5QdXJwbGUge1xyXG4gICBiYWNrZ3JvdW5kOiAjQTc0OTgyO1xyXG4gICAmLnByZXZpZXd7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgfVxyXG4gICAmLmViY2tCdG57XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAubWF0LWljb257XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgICYuYWRkUmVme1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAmLmFkZGljb3tcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgJi52LXB7XHJcbiAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgfVxyXG4gICAgJi53LXR7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiA5NjBweDtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzU4NTg1ODtcclxuICAgIH1cclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgdG9wOiAzcHg7XHJcbiAgICB9XHJcbiB9XHJcbiB9XHJcbiBcclxuIC8qIEZBREUgKi9cclxuIC5idG5GYWRlLmJ0bkJsdWVHcmVlbjpob3ZlciB7XHJcbiAgIGJhY2tncm91bmQ6ICMyMTgyNUI7XHJcbiB9XHJcbiBcclxuIC5idG5GYWRlLmJ0bkxpZ2h0Qmx1ZTpob3ZlciB7XHJcbiAgIGJhY2tncm91bmQ6ICMwMDk3ZjY7XHJcbiB9XHJcbiBcclxuIC5idG5GYWRlLmJ0bk9yYW5nZTpob3ZlciB7XHJcbiAgIGJhY2tncm91bmQ6ICNGRjhFMDA7XHJcbiB9XHJcbiBcclxuIC5idG5GYWRlLmJ0blB1cnBsZTpob3ZlciB7XHJcbiAgIGJhY2tncm91bmQ6ICM2RDE4NEI7XHJcbiB9XHJcbiBcclxuIC8qIDNEICovXHJcbiAuYnRuQmx1ZUdyZWVuLmJ0blB1c2gge1xyXG4gICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzAwNzE0NDtcclxuIH1cclxuIFxyXG4gLmJ0bkxpZ2h0Qmx1ZS5idG5QdXNoIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMzMjJhNTQ7XHJcbiB9XHJcbiBcclxuIC5idG5PcmFuZ2UuYnRuUHVzaCB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjOGMxODA4O1xyXG4gfVxyXG4gXHJcbiAuYnRuUHVycGxlLmJ0blB1c2gge1xyXG4gICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzZEMTg0QjtcclxuIH1cclxuIFxyXG4gLmJ0blB1c2g6aG92ZXIge1xyXG4gICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiB9XHJcbiBcclxuIC5idG5CbHVlR3JlZW4uYnRuUHVzaDpob3ZlciB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMDA3MTQ0O1xyXG4gfVxyXG4gXHJcbiAuYnRuTGlnaHRCbHVlLmJ0blB1c2g6aG92ZXIge1xyXG4gICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzFFODE4NTtcclxuIH1cclxuIFxyXG4gLmJ0bk9yYW5nZS5idG5QdXNoOmhvdmVyIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICNBNjY2MTU7XHJcbiB9XHJcbiBcclxuIC5idG5QdXJwbGUuYnRuUHVzaDpob3ZlciB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjNkQxODRCO1xyXG4gfVxyXG5cclxudHI6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNmMGY3ZjcgfVxyXG50cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNmZmZmZmZ9XHJcblxyXG4uY29tcENscntcclxuICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5idG4tYmFjay13cmFwcGVyIHtcclxuICAgLmJ0blB1cnBsZS5idG5QdXNoIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogLTNweDtcclxuICAgfVxyXG59XHJcbi5jb21wLXRhYntcclxuICA6Om5nLWRlZXAgLm1hdC10YWItYm9keS1jb250ZW50e1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHN7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGJvcmRlci1ib3R0b20gOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgcGFkZGluZzogMCA5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4OyAgIFxyXG4gICAgYmFja2dyb3VuZDogIzQzMzY4MyFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzQzMzY4MyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM4NDZiZmY7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxpc3R7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1saXN0LU93bCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAubGVmdC1hcnJvdyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gIH0gIFxyXG4gIC5jYXRlZ29yeS1saXN0IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLnJpZ2h0LWFycm93IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICAmLnByZXYtbmV4dC1idG4ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB3aWR0aDogMzRweDtcclxuICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAmLmNscjJ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHN0ZWVsYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDQsIDk0LCAxMzQpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIDo6bmctZGVlcCAub3dsLXN0YWdle1xyXG4gIC8vICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICAvLyA6Om5nLWRlZXAgLm93bC1pdGVte1xyXG4gIC8vICAgd2lkdGg6IDMwMHB4IWltcG9ydGFudDtcclxuICAvLyB9XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1saXN0IC5tYXQtY2FyZCB7XHJcbiAgb3BhY2l0eTogMC40MjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjRweDtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgei1pbmRleDogMTAwMDAwO1xyXG4gIH1cclxufSIsIi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDk4JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0MzM2ODMsIHRyYW5zcGFyZW50KTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG4ubWF0LWRpYWxvZy10aXRsZS5iZzIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHBsdW0sIHRyYW5zcGFyZW50KTtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xufVxuXG4uc3Ryb25nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzM2NzU3NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhYmxlIC5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnRlbnQtZGV0YWlscyB7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBvdmVybGF5O1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogaW5pdGlhbDtcbn1cblxuLnByaW1hcnktYnRuLWdyYXkgbWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50YWJsZS5icmQtcnQgdGJvZHkgdGQge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ViZThmYjtcbn1cblxuLmZpZWxkLWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogcGFsZWdvbGRlbnJvZDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIC8qIGNvbG9yOiB3aGVhdDsgKi9cbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIC8qIG1hcmdpbi10b3A6IDRweDsgKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYnV0dG9uM2Qge1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24zZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNDg0ODQ4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idG5CbHVlR3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjMDBBRTY4O1xufVxuLmJ0bkJsdWVHcmVlbi5hZGRpY28ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmJ0bkJsdWVHcmVlbi5hZGRpY28gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuTGlnaHRCbHVlIHtcbiAgYmFja2dyb3VuZDogIzdkNmVjYztcbn1cbi5idG5MaWdodEJsdWUuYWRkUmVmIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYnRuTGlnaHRCbHVlLmFkZFJlZiAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYnRuTGlnaHRCbHVlLnRkQnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uYnRuTGlnaHRCbHVlLnRkQnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yLjVweDtcbiAgcmlnaHQ6IDhweDtcbn1cbi5idG5MaWdodEJsdWUudGRCdG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcbn1cbi5idG5MaWdodEJsdWUuY29tcEJ0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxNDVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5jb21wQnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAwcHg7XG59XG4uYnRuTGlnaHRCbHVlLnN2QnRuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5zdkJ0biAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG5PcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZTkxYjAwO1xufVxuLmJ0bk9yYW5nZS5yZWRpY28ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYnRuT3JhbmdlLnJlZGljbyAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG5QdXJwbGUge1xuICBiYWNrZ3JvdW5kOiAjQTc0OTgyO1xufVxuLmJ0blB1cnBsZS5wcmV2aWV3IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmJ0blB1cnBsZS5lYmNrQnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uYnRuUHVycGxlLmViY2tCdG4gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogM3B4O1xufVxuLmJ0blB1cnBsZS5hZGRSZWYge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5idG5QdXJwbGUuYWRkUmVmIC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5idG5QdXJwbGUuYWRkaWNvIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5idG5QdXJwbGUuYWRkaWNvLnYtcCB7XG4gIGhlaWdodDogNDBweDtcbn1cbi5idG5QdXJwbGUuYWRkaWNvLnctdCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA5NjBweDtcbiAgdG9wOiAwcHg7XG59XG4uYnRuUHVycGxlLmFkZGljbzpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNTg1ODU4O1xufVxuLmJ0blB1cnBsZS5hZGRpY28gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuXG4vKiBGQURFICovXG4uYnRuRmFkZS5idG5CbHVlR3JlZW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjE4MjVCO1xufVxuXG4uYnRuRmFkZS5idG5MaWdodEJsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA5N2Y2O1xufVxuXG4uYnRuRmFkZS5idG5PcmFuZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkY4RTAwO1xufVxuXG4uYnRuRmFkZS5idG5QdXJwbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNkQxODRCO1xufVxuXG4vKiAzRCAqL1xuLmJ0bkJsdWVHcmVlbi5idG5QdXNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMwMDcxNDQ7XG59XG5cbi5idG5MaWdodEJsdWUuYnRuUHVzaCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMzIyYTU0O1xufVxuXG4uYnRuT3JhbmdlLmJ0blB1c2gge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzhjMTgwODtcbn1cblxuLmJ0blB1cnBsZS5idG5QdXNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM2RDE4NEI7XG59XG5cbi5idG5QdXNoOmhvdmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuQmx1ZUdyZWVuLmJ0blB1c2g6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzAwNzE0NDtcbn1cblxuLmJ0bkxpZ2h0Qmx1ZS5idG5QdXNoOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMxRTgxODU7XG59XG5cbi5idG5PcmFuZ2UuYnRuUHVzaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjQTY2NjE1O1xufVxuXG4uYnRuUHVycGxlLmJ0blB1c2g6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzZEMTg0Qjtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZjBmN2Y3O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uY29tcENsciB7XG4gIGJhY2tncm91bmQ6IHN0ZWVsYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmJ0bi1iYWNrLXdyYXBwZXIgLmJ0blB1cnBsZS5idG5QdXNoIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cblxuLmNvbXAtdGFiIDo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG4uY29tcC10YWIgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVscyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItYm90dG9tOiAwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLmNvbXAtdGFiIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAwIDlweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNDMzNjgzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvbXAtdGFiIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNvbXAtdGFiIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNDMzNjgzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjODQ2YmZmO1xufVxuLmNvbXAtdGFiIDo6bmctZGVlcCAubWF0LXRhYi1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmNhdGVnb3J5LWxpc3QtT3dsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5jYXRlZ29yeS1saXN0LU93bCAubGVmdC1hcnJvdyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMwcHg7XG59XG4uY2F0ZWdvcnktbGlzdC1Pd2wgLmNhdGVnb3J5LWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBmbG9hdDogbGVmdDtcbn1cbi5jYXRlZ29yeS1saXN0LU93bCAucmlnaHQtYXJyb3cge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMwcHg7XG59XG4uY2F0ZWdvcnktbGlzdC1Pd2wgYnV0dG9uLnByZXYtbmV4dC1idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMzRweDtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4uY2F0ZWdvcnktbGlzdC1Pd2wgYnV0dG9uLmNscjIge1xuICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJjNWU4NiAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcnktbGlzdCAubWF0LWNhcmQge1xuICBvcGFjaXR5OiAwLjQyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2F0ZWdvcnktbGlzdCAubWF0LWNhcmQuc2VsZWN0ZWQge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgcmlnaHQ6IDI0cHg7XG4gIHotaW5kZXg6IDEwMDAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/completeness-dialog/completeness-dialog.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/completeness-dialog/completeness-dialog.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CompletenessDialogComponent */

  /***/
  function srcAppSharedCompletenessDialogCompletenessDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompletenessDialogComponent", function () {
      return CompletenessDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CompletenessDialogComponent = /*#__PURE__*/function () {
      function CompletenessDialogComponent(dialogRef, data, http, router) {
        _classCallCheck(this, CompletenessDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.router = router;
        this.isLoading = false;
        this.defaultColDefs = {
          sortable: true,
          filter: true,
          minWidth: 180,
          resizable: true
        };
        this.columnDefs = [];
        this.rowData = [];
        this.showDetails = false;
        this.selectedColumn = {};
        this.analysisItem = {};
        this.analysisKeys = {};
        this.key = '';
        this.selectedKey = '';
        this.selectedValue = '';
        this.selectedTabIndex = 0;
        this.OwlCategoryOptions = {
          loop: false,
          autoplay: false,
          autoplayTimeout: 6000,
          autoplaySpeed: 700,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          margin: 5,
          navSpeed: 700,
          navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
          autoWidth: true,
          nav: false
        };
        this.key = data.key;
        this.selectedKey = data.selectedKey;
        this.selectedValue = data.selectedValue;
        this.analysisItem = data.analysisItem;
        this.analysisKeys = data.analysisKeys;
        var index = this.analysisKeys.indexOf(this.key);
        this.selectedTabIndex = index;
      }

      _createClass(CompletenessDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFirstItem();
        }
      }, {
        key: "loadFirstItem",
        value: function loadFirstItem() {
          var details = this.analysisItem[this.key].details;

          if (details && details.length) {
            this.launchAnalysisDetails(details[0]);
          }
        }
      }, {
        key: "launchAnalysisDetails",
        value: function launchAnalysisDetails(rowItem) {
          var _this28 = this;

          this.selectedColumn = rowItem;
          this.showDetails = false;
          this.isLoading = true;
          this.columnDefs = [];
          this.rowData = [];
          this.http.launchAnalysisDetails(rowItem.outlier).subscribe(function (res) {
            var details = res.result ? res.result : {};
            Object.keys(details).map(function (key, index) {
              _this28.rowData.push(Object.assign({
                ROW_ID: key
              }, details[key]));
            });

            if (_this28.rowData.length) {
              Object.keys(_this28.rowData[0]).map(function (key, index) {
                _this28.columnDefs.push(Object.assign({
                  field: key
                }, _this28.defaultColDefs));
              });
            }

            _this28.isLoading = false;
            _this28.showDetails = true;
          }, function (error) {
            _this28.isLoading = false;
          });
        }
      }, {
        key: "selectedTabChange",
        value: function selectedTabChange(tab) {
          this.selectedColumn = {};
          this.selectedTabIndex = tab.index;
          this.showDetails = false;
          this.key = this.analysisKeys[tab.index];
          this.loadFirstItem();
        }
      }, {
        key: "launchDataCleaning",
        value: function launchDataCleaning(sourceData) {
          var analysis = localStorage.getItem('selected-analysis');

          if (analysis) {
            localStorage.setItem('dq-source-data', analysis);
            this.router.navigate(["auth/data-cleaning"], {
              queryParams: {
                sourceId: sourceData.sourceId
              }
            });
            this.dialogRef.close();
          }
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return CompletenessDialogComponent;
    }();

    CompletenessDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_services_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('owlCatCar', {
      "static": false
    })], CompletenessDialogComponent.prototype, "owlCatCar", void 0);
    CompletenessDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-completeness-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./completeness-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/completeness-dialog/completeness-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./completeness-dialog.component.scss */
      "./src/app/shared/completeness-dialog/completeness-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], CompletenessDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/confirm-dialog/confirm-dialog.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedConfirmDialogConfirmDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".confirm-wrapper .footer {\n  text-align: right;\n  margin-top: 10px;\n  padding-top: 10px;\n}\n.confirm-wrapper .footer .mat-stroked-button {\n  font-size: 13px;\n  font-weight: 400;\n  padding: 0 10px;\n  height: 30px;\n  line-height: 30px;\n  margin-left: 10px;\n  border-radius: 4px;\n  font-family: \"open-sans-condensed-bold\" !important;\n  background-color: #7d6ecc !important;\n  color: #fff !important;\n  margin-right: 5px;\n}\n.confirm-wrapper .footer .mat-stroked-button:hover {\n  background-color: #433683 !important;\n}\n.reason-wrp {\n  margin-top: 24px;\n}\n.reason-wrp p {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.input-full-width {\n  width: 100%;\n}\n::ng-deep .mat-dialog-title {\n  font-family: \"open-sans-condensed-bold\" !important;\n  border-bottom: 2px solid #f0f7f7;\n  color: #efa800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREo7QURHSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNETjtBREVNO0VBQ0csb0NBQUE7QUNBVDtBREtBO0VBQ0UsZ0JBQUE7QUNGRjtBREdFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0RKO0FESUE7RUFDRSxXQUFBO0FDREY7QURJQTtFQUNHLGtEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FDREgiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybS13cmFwcGVyIHtcclxuXHJcbiAgLmZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTJlMmUyO1xyXG4gICAgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCchaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q2ZWNjIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQzMzY4MyFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnJlYXNvbi13cnAge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbi5pbnB1dC1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLXRpdGxle1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCchaW1wb3J0YW50O1xyXG4gICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YwZjdmNztcclxuICAgY29sb3I6ICNlZmE4MDA7XHJcbn1cclxuIiwiLmNvbmZpcm0td3JhcHBlciAuZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbmZpcm0td3JhcHBlciAuZm9vdGVyIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkNmVjYyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jb25maXJtLXdyYXBwZXIgLmZvb3RlciAubWF0LXN0cm9rZWQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzMzY4MyAhaW1wb3J0YW50O1xufVxuXG4ucmVhc29uLXdycCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ucmVhc29uLXdycCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dC1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWRpYWxvZy10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjBmN2Y3O1xuICBjb2xvcjogI2VmYTgwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/confirm-dialog/confirm-dialog.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ConfirmDialogComponent */

  /***/
  function srcAppSharedConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var ConfirmDialogComponent = /*#__PURE__*/function () {
      function ConfirmDialogComponent(dialog, ngZone, data) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.dialog = dialog;
        this.ngZone = ngZone;
        this.data = data;
        this.reason = '';
        this.dialog.disableClose = true;
      }

      _createClass(ConfirmDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCloseDialog",
        value: function onCloseDialog(action) {
          var _this29 = this;

          this.ngZone.run(function () {
            _this29.dialog.close({
              action: action,
              reason: _this29.reason
            });
          });
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirm-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirm-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirm-dialog.component.scss */
      "./src/app/shared/confirm-dialog/confirm-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ConfirmDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/cylinder-chart/cylinder-chart.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/shared/cylinder-chart/cylinder-chart.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedCylinderChartCylinderChartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\r\n\r\n\r\nhtml, body { height: 100%; }\r\n\r\n\r\nbody { margin: 0; font-family: open-sans-bold, \"Helvetica Neue\", sans-serif; }\r\n\r\n\r\n::ng-deep.highcharts-credits {\r\n   display:none!important;\r\n}\r\n\r\n\r\n::ng-deep .highcharts-axis-title {\r\n   display:none!important;\r\n}\r\n\r\n\r\n#container {\r\n   height: 400px; \r\n}\r\n\r\n\r\n.highcharts-figure, .highcharts-data-table table {\r\n min-width: 310px; \r\n   max-width: 960px;\r\n   margin: 1em auto;\r\n}\r\n\r\n\r\n.highcharts-data-table table {\r\n   font-family: Verdana, sans-serif;\r\n   border-collapse: collapse;\r\n   border: 1px solid #EBEBEB;\r\n   margin: 10px auto;\r\n   text-align: center;\r\n   width: 100%;\r\n   max-width: 500px;\r\n}\r\n\r\n\r\n.highcharts-data-table caption {\r\n   padding: 1em 0;\r\n   font-size: 1.2em;\r\n   color: #555;\r\n}\r\n\r\n\r\n.highcharts-data-table th {\r\n  font-weight: 600;\r\n   padding: 0.5em;\r\n}\r\n\r\n\r\n.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {\r\n   padding: 0.5em;\r\n}\r\n\r\n\r\n.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {\r\n   background: #f8f8f8;\r\n}\r\n\r\n\r\n.highcharts-data-table tr:hover {\r\n   background: #f1f7ff;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N5bGluZGVyLWNoYXJ0L2N5bGluZGVyLWNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFOzs7QUFHOUUsYUFBYSxZQUFZLEVBQUU7OztBQUMzQixPQUFPLFNBQVMsRUFBRSx5REFBeUQsRUFBRTs7O0FBRTdFO0dBQ0csc0JBQXNCO0FBQ3pCOzs7QUFDQTtHQUNHLHNCQUFzQjtBQUN6Qjs7O0FBRUE7R0FDRyxhQUFhO0FBQ2hCOzs7QUFFQTtDQUNDLGdCQUFnQjtHQUNkLGdCQUFnQjtHQUNoQixnQkFBZ0I7QUFDbkI7OztBQUVBO0dBQ0csZ0NBQWdDO0dBQ2hDLHlCQUF5QjtHQUN6Qix5QkFBeUI7R0FDekIsaUJBQWlCO0dBQ2pCLGtCQUFrQjtHQUNsQixXQUFXO0dBQ1gsZ0JBQWdCO0FBQ25COzs7QUFDQTtHQUNHLGNBQWM7R0FDZCxnQkFBZ0I7R0FDaEIsV0FBVztBQUNkOzs7QUFDQTtFQUNFLGdCQUFnQjtHQUNmLGNBQWM7QUFDakI7OztBQUNBO0dBQ0csY0FBYztBQUNqQjs7O0FBQ0E7R0FDRyxtQkFBbUI7QUFDdEI7OztBQUNBO0dBQ0csbUJBQW1CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2N5bGluZGVyLWNoYXJ0L2N5bGluZGVyLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5cclxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxyXG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogb3Blbi1zYW5zLWJvbGQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxyXG5cclxuOjpuZy1kZWVwLmhpZ2hjaGFydHMtY3JlZGl0cyB7XHJcbiAgIGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5oaWdoY2hhcnRzLWF4aXMtdGl0bGUge1xyXG4gICBkaXNwbGF5Om5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgaGVpZ2h0OiA0MDBweDsgXHJcbn1cclxuXHJcbi5oaWdoY2hhcnRzLWZpZ3VyZSwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0YWJsZSB7XHJcbiBtaW4td2lkdGg6IDMxMHB4OyBcclxuICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgbWFyZ2luOiAxZW0gYXV0bztcclxufVxyXG5cclxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0YWJsZSB7XHJcbiAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xyXG4gICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIGNhcHRpb24ge1xyXG4gICBwYWRkaW5nOiAxZW0gMDtcclxuICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgY29sb3I6ICM1NTU7XHJcbn1cclxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0ZCwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aCwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSBjYXB0aW9uIHtcclxuICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aGVhZCB0ciwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG59XHJcbi5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdHI6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kOiAjZjFmN2ZmO1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/cylinder-chart/cylinder-chart.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/cylinder-chart/cylinder-chart.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CylinderChartComponent */

  /***/
  function srcAppSharedCylinderChartCylinderChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CylinderChartComponent", function () {
      return CylinderChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_histogram_bellcurve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/histogram-bellcurve */
    "./node_modules/highcharts/modules/histogram-bellcurve.js");
    /* harmony import */


    var highcharts_modules_histogram_bellcurve__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_histogram_bellcurve__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var highcharts_highcharts_3d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts/highcharts-3d */
    "./node_modules/highcharts/highcharts-3d.js");
    /* harmony import */


    var highcharts_highcharts_3d__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_3d__WEBPACK_IMPORTED_MODULE_4__);

    var More = __webpack_require__(
    /*! highcharts/highcharts-more */
    "./node_modules/highcharts/highcharts-more.js");

    More(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    highcharts_modules_histogram_bellcurve__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    highcharts_highcharts_3d__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var Exporting = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");

    Exporting(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var Cylinder = __webpack_require__(
    /*! highcharts/modules/cylinder */
    "./node_modules/highcharts/modules/cylinder.js");

    Cylinder(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var ExportData = __webpack_require__(
    /*! highcharts/modules/export-data */
    "./node_modules/highcharts/modules/export-data.js");

    ExportData(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var Accessibility = __webpack_require__(
    /*! highcharts/modules/accessibility */
    "./node_modules/highcharts/modules/accessibility.js");

    Accessibility(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var CylinderChartComponent = /*#__PURE__*/function () {
      function CylinderChartComponent() {
        _classCallCheck(this, CylinderChartComponent);

        this.xLableClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.barClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alpha = 15;
        this.beta = 15;
        this.depth = 50;
        this.chartOptions = {
          chart: {
            type: 'column',
            options3d: {
              enabled: this.options3d,
              alpha: this.alpha,
              beta: this.beta,
              depth: this.depth,
              viewDistance: 25
            }
          },
          title: {
            text: ''
          },
          subtitle: {
            text: ''
          },
          xAxis: {},
          yAxis: {
            min: 0,
            max: 100,
            title: {
              text: '',
              align: 'high'
            },
            labels: {
              overflow: 'justify'
            }
          },
          tooltip: {
            valueSuffix: ' %'
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || '#FFFFFF',
            shadow: true
          },
          credits: {
            enabled: false
          },
          series: []
        };
      }

      _createClass(CylinderChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          var agThis = this;
          this.chartOptions.xAxis = {
            categories: this.chartData.labels,
            title: {
              text: null
            },
            labels: {
              events: {
                click: function click(e) {
                  agThis.xLableClicked.emit({
                    label: this.value
                  });
                }
              }
            }
          };
          this.chartOptions.chart.type = this.chartType ? this.chartType : 'column';
          this.chartOptions.chart.options3d.enabled = this.options3d ? this.options3d : false;
          this.chartOptions.series = [];
          this.analysisKeys.map(function (key, index) {
            var data = [];

            _this30.chartData[key].map(function (d) {
              data.push(Object.assign({
                y: d.value ? +d.value : 0
              }, d));
            });

            _this30.chartOptions.series.push({
              custom: {
                details: _this30.chartData[key].details ? _this30.chartData[key].details : []
              },
              name: key,
              data: data
            });
          });
          this.chartOptions.plotOptions = {
            bar: {
              dataLabels: {
                enabled: true
              }
            },
            series: {
              cursor: 'pointer',
              point: {
                events: {
                  click: function click() {
                    // tslint:disable-next-line: max-line-length
                    agThis.barClicked.emit({
                      details: this.details,
                      key: this.series.name,
                      selectedValue: this.category,
                      rowIndex: this.index
                    });
                  }
                }
              }
            }
          };
        }
      }, {
        key: "showValues",
        value: function showValues() {
          this.chartOptions.chart.options3d.alpha;
        }
      }, {
        key: "alphaChange",
        value: function alphaChange(event) {
          this.alpha = event.value;
          this.chartOptions.chart.options3d.alpha = this.alpha;
          highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container', this.chartOptions);
        }
      }, {
        key: "betaChange",
        value: function betaChange(event) {
          this.beta = event.value;
          this.chartOptions.chart.options3d.beta = this.beta;
          highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container', this.chartOptions);
        }
      }, {
        key: "depthChange",
        value: function depthChange(event) {
          this.depth = event.value;
          this.chartOptions.chart.options3d.depth = this.depth;
          highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container', this.chartOptions);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
          this.highcharts.chart(this.chartEl.nativeElement, this.chartOptions);
        }
      }]);

      return CylinderChartComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('charts', {
      "static": false
    })], CylinderChartComponent.prototype, "chartEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CylinderChartComponent.prototype, "chartData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CylinderChartComponent.prototype, "chartType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CylinderChartComponent.prototype, "options3d", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CylinderChartComponent.prototype, "analysisKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CylinderChartComponent.prototype, "xLableClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CylinderChartComponent.prototype, "barClicked", void 0);
    CylinderChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cylinder-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cylinder-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/cylinder-chart/cylinder-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cylinder-chart.component.css */
      "./src/app/shared/cylinder-chart/cylinder-chart.component.css"))["default"]]
    })], CylinderChartComponent);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  border-top: 1px solid #ebe9e9;\n  background-color: #f0f7f7;\n  font-family: \"open-sans-regular\";\n}\n.footer .footer-copyright {\n  padding: 15px 0;\n  font-size: 13px;\n  color: #000000;\n}\n.footer .footer-copyright a {\n  color: #656565;\n}\n.footer .footer-copyright a:hover {\n  color: #000;\n}\n.footer .footer-copyright .terms a {\n  display: inline-block;\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNHLDZCQUFBO0VBQ0EseUJBQUE7RUFFQSxnQ0FBQTtBQ0RIO0FERUc7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBTDtBRENLO0VBQ0UsY0FBQTtBQ0NQO0FEQU87RUFDRSxXQUFBO0FDRVQ7QURFTztFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUNBVCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb290ZXIge1xyXG4gICBib3JkZXItdG9wOiAgMXB4IHNvbGlkICNlYmU5ZTk7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY3Zjc7XHJcbiAgIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2Y1ZjdmYSAwJSwgI2Y1ZjdmYSA3NCUpO1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJztcclxuICAgLmZvb3Rlci1jb3B5cmlnaHQge1xyXG4gICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgY29sb3I6ICMwMDAwMDA7ICAgIFxyXG4gICAgIGEge1xyXG4gICAgICAgY29sb3I6ICM2NTY1NjU7XHJcbiAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIC50ZXJtcyB7XHJcbiAgICAgICBhIHtcclxuICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gIiwiLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlOWU5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmN2Y3O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiO1xufVxuLmZvb3RlciAuZm9vdGVyLWNvcHlyaWdodCB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5mb290ZXIgLmZvb3Rlci1jb3B5cmlnaHQgYSB7XG4gIGNvbG9yOiAjNjU2NTY1O1xufVxuLmZvb3RlciAuZm9vdGVyLWNvcHlyaWdodCBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uZm9vdGVyIC5mb290ZXItY29weXJpZ2h0IC50ZXJtcyBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/message.service */
    "./src/app/services/message.service.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(common, messageService) {
        _classCallCheck(this, FooterComponent);

        this.common = common;
        this.messageService = messageService;
        this.categories = [];
        this.categoriesFirstFive = [];
        this.categoriesSecondFive = [];
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.commonSub.unsubscribe();
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/formula-editor/formula-editor.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/formula-editor/formula-editor.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFormulaEditorFormulaEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".formula-editir .footer {\n  text-align: right;\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #e2e2e2;\n}\n.formula-editir .footer .mat-stroked-button {\n  font-family: \"Roboto\" !important;\n  font-size: 13px;\n  font-weight: 400;\n  padding: 0 10px;\n  height: 30px;\n  line-height: 30px;\n  margin-left: 10px;\n  border-radius: 0;\n}\n.mat-dialog-title {\n  font-size: 24px;\n  color: #322a54;\n  font-weight: 400;\n  margin: 0px 10px 20px 10px;\n  font-family: \"open-sans-condensed-bold\";\n  position: relative;\n  width: 650px;\n  display: inline-block;\n}\n.mat-dialog-title:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -12px;\n  height: 5px;\n  width: 55px;\n  background-color: #efa800;\n}\n.mat-dialog-title:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -10px;\n  height: 1px;\n  width: 95%;\n  max-width: 181px;\n  background-color: #efa800;\n}\n.reason-wrp {\n  margin-top: 24px;\n}\n.reason-wrp p {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.input-full-width {\n  width: 100%;\n}\n.outline mat-label {\n  display: block !important;\n  font-size: 13px;\n}\n.list-item-3.operator {\n  width: 120px;\n  margin: 0 10px 0 0;\n}\n.list-item-3.operator .mat-form-field {\n  width: 100%;\n}\n.add-remove-button {\n  margin-top: 0;\n}\n.list-item-4.cde {\n  width: 320px;\n}\n.list-item-4.cde .mat-form-field {\n  width: 100%;\n}\n.formula-preview {\n  background: #322a54;\n  color: #ffffff;\n  padding: 5px 10px;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.formula-preview .operator {\n  font-weight: bold;\n  margin: 0 4px;\n}\n.formula-preview .cde {\n  font-weight: bold;\n}\n.button3d {\n  width: 200px;\n  padding: 0;\n  margin: 10px 20px 10px 0;\n  font-weight: 600;\n  text-align: center;\n  line-height: 50px;\n  color: #FFF;\n  border-radius: 5px;\n  transition: all 0.2s;\n  font-family: \"open-sans-condensed-bold\" !important;\n  cursor: pointer;\n}\n.button3d:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btnBlueGreen {\n  background: #00AE68;\n}\n.btnBlueGreen.addico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n.btnBlueGreen.addico .mat-icon {\n  font-size: 20px;\n}\n.btnLightBlue {\n  background: #7d6ecc;\n}\n.btnLightBlue.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n.btnLightBlue.addRef .material-icons {\n  font-size: 20px;\n}\n.btnLightBlue.tdBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n}\n.btnLightBlue.tdBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -2.5px;\n  right: 8px;\n}\n.btnLightBlue.tdBtn:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n}\n.btnLightBlue.compBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 145px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n}\n.btnLightBlue.compBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  right: 0px;\n}\n.btnLightBlue.svBtn {\n  font-size: 18px;\n  color: #ffffff;\n  width: 180px;\n  height: 37px;\n  line-height: 30px;\n}\n.btnLightBlue.svBtn .mat-icon {\n  font-size: 20px;\n}\n.btnOrange {\n  background: #e91b00;\n}\n.btnOrange.redico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n}\n.btnOrange.redico .mat-icon {\n  font-size: 20px;\n}\n.btnPurple {\n  background: #A74982;\n}\n.btnPurple.preview {\n  width: 100px;\n  height: 30px;\n  line-height: 28px;\n}\n.btnPurple.ebckBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 95px;\n  height: 40px;\n  line-height: 40px;\n  padding-right: 20px;\n}\n.btnPurple.ebckBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  left: 3px;\n}\n.btnPurple.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n.btnPurple.addRef .material-icons {\n  font-size: 20px;\n}\n/* FADE */\n.btnFade.btnBlueGreen:hover {\n  background: #21825B;\n}\n.btnFade.btnLightBlue:hover {\n  background: #0097f6;\n}\n.btnFade.btnOrange:hover {\n  background: #FF8E00;\n}\n.btnFade.btnPurple:hover {\n  background: #6D184B;\n}\n/* 3D */\n.btnBlueGreen.btnPush {\n  box-shadow: 0px 5px 0px 0px #007144;\n}\n.btnLightBlue.btnPush {\n  box-shadow: 0px 5px 0px 0px #322a54;\n}\n.btnOrange.btnPush {\n  box-shadow: 0px 5px 0px 0px #8c1808;\n}\n.btnPurple.btnPush {\n  box-shadow: 0px 5px 0px 0px #6D184B;\n}\n.btnPush:hover {\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n.btnBlueGreen.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #007144;\n}\n.btnLightBlue.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #1E8185;\n}\n.btnOrange.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #A66615;\n}\n.btnPurple.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #6D184B;\n}\n.add-remove-button {\n  min-width: 35px;\n}\n::ng-deep .mat-dialog-container {\n  background: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9mb3JtdWxhLWVkaXRvci9mb3JtdWxhLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Zvcm11bGEtZWRpdG9yL2Zvcm11bGEtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNBSjtBRENJO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NOO0FESUE7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDREg7QURFRztFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0FOO0FERUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0FOO0FESUE7RUFDRSxnQkFBQTtBQ0RGO0FERUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTtFQUNFLFdBQUE7QUNBRjtBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEREU7RUFDRSxXQUFBO0FDR0o7QURBQTtFQUNFLGFBQUE7QUNHRjtBRERBO0VBQ0UsWUFBQTtBQ0lGO0FESEU7RUFDRSxXQUFBO0FDS0o7QURGQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0tGO0FESkU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUNNSjtBREpFO0VBQ0UsaUJBQUE7QUNNSjtBREFBO0VBSUcsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7RUFDQSxlQUFBO0FDQUg7QURDRztFQUNHLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREdDO0VBQ0UsbUJBQUE7QUNBSDtBRENHO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ047QURBTTtFQUNHLGVBQUE7QUNFVDtBREdDO0VBQ0UsbUJBQUE7QUNBSDtBRENHO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ047QURBTTtFQUNHLGVBQUE7QUNFVDtBRENHO0VBQ0csZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDTjtBREFNO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNFVDtBREFNO0VBQ0csZ0JBQUE7RUFDQSxtQ0FBQTtBQ0VUO0FEQ0c7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NOO0FEQU07RUFDRyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VUO0FERUc7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBTjtBRENNO0VBQ0csZUFBQTtBQ0NUO0FES0M7RUFDRSxtQkFBQTtBQ0ZIO0FER0c7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRE47QURFTTtFQUNHLGVBQUE7QUNBVDtBRE1DO0VBQ0UsbUJBQUE7QUNISDtBRElHO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZOO0FESUc7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FER007RUFDRyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0RUO0FESUc7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGTjtBREdNO0VBQ0csZUFBQTtBQ0RUO0FETUMsU0FBQTtBQUNBO0VBQ0UsbUJBQUE7QUNISDtBRE1DO0VBQ0UsbUJBQUE7QUNISDtBRE1DO0VBQ0UsbUJBQUE7QUNISDtBRE1DO0VBQ0UsbUJBQUE7QUNISDtBRE1DLE9BQUE7QUFDQTtFQUNFLG1DQUFBO0FDSEg7QURNQztFQUNFLG1DQUFBO0FDSEg7QURNQztFQUNFLG1DQUFBO0FDSEg7QURNQztFQUNFLG1DQUFBO0FDSEg7QURNQztFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNISDtBRE1DO0VBQ0UsbUNBQUE7QUNISDtBRE1DO0VBQ0UsbUNBQUE7QUNISDtBRE1DO0VBQ0UsbUNBQUE7QUNISDtBRE1DO0VBQ0UsbUNBQUE7QUNISDtBREtDO0VBQ0UsZUFBQTtBQ0ZIO0FESUM7RUFDRywyQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvcm11bGEtZWRpdG9yL2Zvcm11bGEtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm11bGEtZWRpdGlyIHtcclxuICAuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgICAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1kaWFsb2ctdGl0bGUge1xyXG4gICBmb250LXNpemU6IDI0cHg7XHJcbiAgIGNvbG9yOiAjMzIyYTU0O1xyXG4gICBmb250LXdlaWdodDogNDAwO1xyXG4gICBtYXJnaW46IDBweCAxMHB4IDIwcHggMTBweDtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIHdpZHRoOiA2NTBweDtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAtMTJweDtcclxuICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZhODAwO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAtMTBweDtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIG1heC13aWR0aDogMTgxcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmE4MDA7XHJcbiAgICB9XHJcbiAgICBcclxuIH1cclxuLnJlYXNvbi13cnAge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbi5pbnB1dC1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ub3V0bGluZSBtYXQtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5saXN0LWl0ZW0tMy5vcGVyYXRvciB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5hZGQtcmVtb3ZlLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4ubGlzdC1pdGVtLTQuY2RlIHtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4uZm9ybXVsYS1wcmV2aWV3IHtcclxuICBiYWNrZ3JvdW5kOiAjMzIyYTU0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAub3BlcmF0b3Ige1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG4gIH1cclxuICAuY2RlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYnV0dG9uc1xyXG5cclxuLmJ1dHRvbjNkIHtcclxuICAgLy9kaXNwbGF5OiBibG9jaztcclxuICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIC8vZmxvYXQ6IGxlZnQ7XHJcbiAgIHdpZHRoOiAyMDBweDtcclxuICAgcGFkZGluZzogMDtcclxuICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICBjb2xvcjogI0ZGRjtcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICB0cmFuc2l0aW9uOiBhbGwgMC4ycyA7XHJcbiAgIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiIWltcG9ydGFudDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAmOmRpc2FibGVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICB9XHJcbiB9XHJcbiBcclxuIC5idG5CbHVlR3JlZW4ge1xyXG4gICBiYWNrZ3JvdW5kOiAjMDBBRTY4O1xyXG4gICAmLmFkZGljb3tcclxuICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gfVxyXG4gXHJcbiAuYnRuTGlnaHRCbHVlIHtcclxuICAgYmFja2dyb3VuZDogIzdkNmVjYztcclxuICAgJi5hZGRSZWZ7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgICYudGRCdG57XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAubWF0LWljb257XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICB0b3A6IC0yLjVweDtcclxuICAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgICAmOmRpc2FibGVke1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgICYuY29tcEJ0bntcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgd2lkdGg6IDE0NXB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gICAmLnN2QnRue1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiB9XHJcbiBcclxuIC5idG5PcmFuZ2Uge1xyXG4gICBiYWNrZ3JvdW5kOiAjZTkxYjAwO1xyXG4gICAmLnJlZGljb3tcclxuICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAubWF0LWljb257XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gfVxyXG4gXHJcbiAuYnRuUHVycGxlIHtcclxuICAgYmFja2dyb3VuZDogI0E3NDk4MjtcclxuICAgJi5wcmV2aWV3e1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgIH1cclxuICAgJi5lYmNrQnRue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogOTVweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAmLmFkZFJlZntcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gLyogRkFERSAqL1xyXG4gLmJ0bkZhZGUuYnRuQmx1ZUdyZWVuOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZDogIzIxODI1QjtcclxuIH1cclxuIFxyXG4gLmJ0bkZhZGUuYnRuTGlnaHRCbHVlOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZDogIzAwOTdmNjtcclxuIH1cclxuIFxyXG4gLmJ0bkZhZGUuYnRuT3JhbmdlOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZDogI0ZGOEUwMDtcclxuIH1cclxuIFxyXG4gLmJ0bkZhZGUuYnRuUHVycGxlOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZDogIzZEMTg0QjtcclxuIH1cclxuIFxyXG4gLyogM0QgKi9cclxuIC5idG5CbHVlR3JlZW4uYnRuUHVzaCB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMDA3MTQ0O1xyXG4gfVxyXG4gXHJcbiAuYnRuTGlnaHRCbHVlLmJ0blB1c2gge1xyXG4gICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzMyMmE1NDtcclxuIH1cclxuIFxyXG4gLmJ0bk9yYW5nZS5idG5QdXNoIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM4YzE4MDg7XHJcbiB9XHJcbiBcclxuIC5idG5QdXJwbGUuYnRuUHVzaCB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNkQxODRCO1xyXG4gfVxyXG4gXHJcbiAuYnRuUHVzaDpob3ZlciB7XHJcbiAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuIH1cclxuIFxyXG4gLmJ0bkJsdWVHcmVlbi5idG5QdXNoOmhvdmVyIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMwMDcxNDQ7XHJcbiB9XHJcbiBcclxuIC5idG5MaWdodEJsdWUuYnRuUHVzaDpob3ZlciB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMUU4MTg1O1xyXG4gfVxyXG4gXHJcbiAuYnRuT3JhbmdlLmJ0blB1c2g6aG92ZXIge1xyXG4gICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI0E2NjYxNTtcclxuIH1cclxuIFxyXG4gLmJ0blB1cnBsZS5idG5QdXNoOmhvdmVyIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICM2RDE4NEI7XHJcbiB9XHJcbiAuYWRkLXJlbW92ZS1idXR0b257XHJcbiAgIG1pbi13aWR0aDogMzVweDtcclxuIH1cclxuIDo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcclxuIH0iLCIuZm9ybXVsYS1lZGl0aXIgLmZvb3RlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmUyZTI7XG59XG4uZm9ybXVsYS1lZGl0aXIgLmZvb3RlciAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzMjJhNTQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMHB4IDEwcHggMjBweCAxMHB4O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tYXQtZGlhbG9nLXRpdGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTJweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiA1NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZhODAwO1xufVxuLm1hdC1kaWFsb2ctdGl0bGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTEwcHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDE4MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZhODAwO1xufVxuXG4ucmVhc29uLXdycCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ucmVhc29uLXdycCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnB1dC1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdXRsaW5lIG1hdC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmxpc3QtaXRlbS0zLm9wZXJhdG9yIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG4ubGlzdC1pdGVtLTMub3BlcmF0b3IgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZGQtcmVtb3ZlLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5saXN0LWl0ZW0tNC5jZGUge1xuICB3aWR0aDogMzIwcHg7XG59XG4ubGlzdC1pdGVtLTQuY2RlIC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybXVsYS1wcmV2aWV3IHtcbiAgYmFja2dyb3VuZDogIzMyMmE1NDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmZvcm11bGEtcHJldmlldyAub3BlcmF0b3Ige1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDRweDtcbn1cbi5mb3JtdWxhLXByZXZpZXcgLmNkZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uM2Qge1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24zZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNDg0ODQ4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idG5CbHVlR3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjMDBBRTY4O1xufVxuLmJ0bkJsdWVHcmVlbi5hZGRpY28ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmJ0bkJsdWVHcmVlbi5hZGRpY28gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuTGlnaHRCbHVlIHtcbiAgYmFja2dyb3VuZDogIzdkNmVjYztcbn1cbi5idG5MaWdodEJsdWUuYWRkUmVmIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYnRuTGlnaHRCbHVlLmFkZFJlZiAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYnRuTGlnaHRCbHVlLnRkQnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uYnRuTGlnaHRCbHVlLnRkQnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yLjVweDtcbiAgcmlnaHQ6IDhweDtcbn1cbi5idG5MaWdodEJsdWUudGRCdG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcbn1cbi5idG5MaWdodEJsdWUuY29tcEJ0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxNDVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5jb21wQnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAwcHg7XG59XG4uYnRuTGlnaHRCbHVlLnN2QnRuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5zdkJ0biAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG5PcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZTkxYjAwO1xufVxuLmJ0bk9yYW5nZS5yZWRpY28ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYnRuT3JhbmdlLnJlZGljbyAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG5QdXJwbGUge1xuICBiYWNrZ3JvdW5kOiAjQTc0OTgyO1xufVxuLmJ0blB1cnBsZS5wcmV2aWV3IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmJ0blB1cnBsZS5lYmNrQnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uYnRuUHVycGxlLmViY2tCdG4gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogM3B4O1xufVxuLmJ0blB1cnBsZS5hZGRSZWYge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5idG5QdXJwbGUuYWRkUmVmIC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLyogRkFERSAqL1xuLmJ0bkZhZGUuYnRuQmx1ZUdyZWVuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzIxODI1Qjtcbn1cblxuLmJ0bkZhZGUuYnRuTGlnaHRCbHVlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwOTdmNjtcbn1cblxuLmJ0bkZhZGUuYnRuT3JhbmdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGOEUwMDtcbn1cblxuLmJ0bkZhZGUuYnRuUHVycGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzZEMTg0Qjtcbn1cblxuLyogM0QgKi9cbi5idG5CbHVlR3JlZW4uYnRuUHVzaCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMDA3MTQ0O1xufVxuXG4uYnRuTGlnaHRCbHVlLmJ0blB1c2gge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzMyMmE1NDtcbn1cblxuLmJ0bk9yYW5nZS5idG5QdXNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM4YzE4MDg7XG59XG5cbi5idG5QdXJwbGUuYnRuUHVzaCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNkQxODRCO1xufVxuXG4uYnRuUHVzaDpob3ZlciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ0bkJsdWVHcmVlbi5idG5QdXNoOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMwMDcxNDQ7XG59XG5cbi5idG5MaWdodEJsdWUuYnRuUHVzaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMUU4MTg1O1xufVxuXG4uYnRuT3JhbmdlLmJ0blB1c2g6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI0E2NjYxNTtcbn1cblxuLmJ0blB1cnBsZS5idG5QdXNoOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICM2RDE4NEI7XG59XG5cbi5hZGQtcmVtb3ZlLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMzVweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/formula-editor/formula-editor.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/formula-editor/formula-editor.component.ts ***!
    \*******************************************************************/

  /*! exports provided: FormulaEditorComponent */

  /***/
  function srcAppSharedFormulaEditorFormulaEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormulaEditorComponent", function () {
      return FormulaEditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var FormulaEditorComponent = /*#__PURE__*/function () {
      function FormulaEditorComponent(fb, dialog, ngZone, data) {
        _classCallCheck(this, FormulaEditorComponent);

        this.fb = fb;
        this.dialog = dialog;
        this.ngZone = ngZone;
        this.data = data;
        this.operators = ['+', '-', '*', '/'];
        this.formulaObj = {
          formula: [{
            cde: '',
            operator: 'NULL'
          }, {
            cde: '',
            operator: ''
          }]
        };
        this.dialog.disableClose = true;
      }

      _createClass(FormulaEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initFormulaDetails(this.formulaObj);
        }
      }, {
        key: "initFormulaDetails",
        value: function initFormulaDetails(fObject) {
          var _this31 = this;

          this.formulaDetailsForm = this.fb.group({
            formula: this.fb.array([])
          });

          if (fObject.formula) {
            var formulaFA = this.formulaDetailsForm.controls.formula;
            fObject.formula.map(function (formula) {
              formulaFA.push(_this31.intiFormArrays('formula', formula));
            });
          }
        }
      }, {
        key: "intiFormArrays",
        value: function intiFormArrays(field) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (field === 'formula') {
            return this.fb.group({
              cde: [value.cde ? value.cde : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              operator: [value.operator ? value.operator : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
          }
        }
      }, {
        key: "addFormItem",
        value: function addFormItem(arrayName) {
          var fbArray = this.formulaDetailsForm.get(arrayName);
          fbArray.push(this.intiFormArrays(arrayName));
        }
      }, {
        key: "removeFormItem",
        value: function removeFormItem(arrayName, index) {
          var formula = this.formulaDetailsForm.get(arrayName);
          formula.removeAt(index);
        }
      }, {
        key: "onCloseDialog",
        value: function onCloseDialog(action) {
          var _this32 = this;

          this.ngZone.run(function () {
            _this32.dialog.close(Object.assign({
              action: action
            }, _this32.formulaDetailsForm.value));
          });
        }
      }]);

      return FormulaEditorComponent;
    }();

    FormulaEditorComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    FormulaEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-formula-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./formula-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/formula-editor/formula-editor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./formula-editor.component.scss */
      "./src/app/shared/formula-editor/formula-editor.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], FormulaEditorComponent);
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/header/header.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header.masthead {\n  font-family: \"open-sans-condensed-bold\";\n  transition: all 0.5s ease-in-out;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: #433683;\n  box-shadow: 0px 3px 6px #00000029;\n}\n.header.masthead .header-body {\n  padding: 0;\n  margin: 0;\n  min-height: auto;\n}\n.header.masthead .header-body .mat-form-field {\n  font-size: 10px;\n}\n.header.masthead .header-body .list {\n  margin: 5px 0 0 0;\n}\n.header.masthead .header-body .list-item {\n  margin: 0 3px !important;\n}\n.header.masthead .header-body .primary-btn {\n  font-size: 10px;\n  height: 36px;\n  line-height: 36px;\n  position: relative;\n  top: -3px;\n}\n.header.masthead.white-bg {\n  box-shadow: rgba(57, 73, 76, 0.35) 0px 1px 6px 0px;\n}\n.header.masthead .header-top {\n  height: 80px;\n  line-height: 80px;\n  opacity: 1;\n  transition: opacity 0.25s ease-out, height 0.15s ease, background-color 0.15s ease;\n  border-bottom: 1px solid #ebe9e9;\n}\n.header.masthead .header-top .logo-wrapper {\n  color: #ffffff;\n}\n.header.masthead .header-top .logo-wrapper span {\n  font-size: 24px;\n  /* line-height: 29px; */\n  margin-top: 14px;\n  /* display: inline-block; */\n  padding-left: 10px;\n  vertical-align: top;\n}\n.header.masthead .header-top .logo-wrapper .logo-title {\n  font-weight: 400;\n  margin-top: 24px;\n  font-family: \"open-sans-condensed-bold\";\n  color: #ffffff;\n  text-transform: uppercase;\n}\n.header.masthead .header-top .logo-wrapper .logo {\n  height: 50px;\n}\n.header.masthead .header-top .main-nav button {\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.52px;\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n.header.masthead .header-top .main-nav button .mat-icon {\n  position: relative;\n  top: -2px;\n}\n.header.masthead .seperator {\n  display: inline-block;\n  border-left: 1px solid #d2d2d2;\n  line-height: 26px;\n  margin: 0 10px;\n}\n.header.masthead .notification-btn {\n  top: 2px;\n}\n.search-wrapper {\n  padding: 24px 0 10px;\n  background: rgba(255, 255, 255, 0.32) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  backdrop-filter: blur(30px);\n  -webkit-backdrop-filter: blur(30px);\n  position: absolute;\n  z-index: 1000;\n  left: 0;\n  right: 0;\n}\n.search-wrapper.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 80px;\n}\n.search-wrapper .search-container {\n  margin: auto;\n  text-align: center;\n  width: 1000px;\n}\n.search-wrapper .outline .mat-form-field-appearance-outline .mat-form-field-outline {\n  height: 46px;\n}\n.search-wrapper .mat-form-field-appearance-outline .mat-form-field-outline {\n  top: 0 !important;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 10px 6px #00000029;\n}\n.search-wrapper .type.mat-form-field-appearance-outline {\n  width: 230px;\n}\n.search-wrapper .type.mat-form-field-appearance-outline .mat-form-field-outline {\n  border-radius: 56px 0 0 56px;\n}\n.search-wrapper .search.mat-form-field-appearance-outline {\n  width: 300px;\n}\n.search-wrapper .search.mat-form-field-appearance-outline .mat-form-field-outline {\n  border-radius: 0;\n}\n.search-wrapper .location.mat-form-field-appearance-outline {\n  width: 300px;\n}\n.search-wrapper .location.mat-form-field-appearance-outline .mat-form-field-outline {\n  border-radius: 0 56px 56px 0;\n}\n.search-wrapper .mat-form-field-appearance-outline .mat-form-field-outline-end,\n.search-wrapper .mat-form-field-appearance-outline .mat-form-field-outline-gap,\n.search-wrapper .mat-form-field-appearance-outline .mat-form-field-outline-start {\n  border-width: 0;\n  border-radius: 0 !important;\n}\n.search-wrapper .mat-form-field-appearance-outline .mat-form-field-flex:hover .mat-form-field-outline-end,\n.search-wrapper .mat-form-field-appearance-outline .mat-form-field-flex:hover .mat-form-field-outline-gap,\n.search-wrapper .mat-form-field-appearance-outline .mat-form-field-flex:hover .mat-form-field-outline-start, .search-wrapper .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-end,\n.search-wrapper .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-gap,\n.search-wrapper .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-start {\n  border-width: 0px !important;\n}\n.search-wrapper .primary-btn-gray {\n  margin: 7px 0 0 20px;\n}\n.search-wrapper .mat-select-arrow-wrapper {\n  position: relative;\n  top: 5px;\n}\n.search-wrapper .mat-select-value {\n  position: relative;\n  left: 5px;\n}\n.search-wrapper .serach-close {\n  margin-left: 10px;\n}\n.mat-menu-panel {\n  background: #FCFCFC 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #EBEBEB;\n}\n.mat-icon-button.userimage {\n  width: 52px;\n  height: 52px;\n  line-height: 52px;\n  position: relative;\n  top: 17px;\n  margin-left: 15px;\n}\n.mat-drawer-container {\n  position: fixed !important;\n  top: 80px;\n  bottom: 0;\n  left: auto;\n  right: 0;\n  height: 100%;\n  z-index: 1000 !important;\n}\n.mat-drawer-container.full-height {\n  top: 0;\n}\n.mat-drawer-container .notification-drawer-sidenav {\n  width: 360px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n}\n.not-page .not-header {\n  background: #DDEBF5;\n  padding: 12px;\n  position: relative;\n}\n.not-page .not-header h4 {\n  font-size: 18px;\n  margin: 0;\n  font-weight: 500;\n  margin-left: 50px;\n  position: relative;\n  top: -4px;\n}\n.not-page .not-header h4 .mat-icon {\n  position: relative;\n  top: 5px;\n}\n.not-page .not-header .close-icon {\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50px;\n  height: 50px;\n  background: #B4CDE1;\n  color: #fff;\n  cursor: pointer;\n}\n.not-page .not-header .close-icon .mat-icon {\n  margin-top: 12px;\n  margin-left: 13px;\n}\n.not-page .not-body {\n  padding: 25px 25px 80px 25px;\n}\n.not-page .not-body .not-item {\n  border-bottom: 1px solid #EBEBEB;\n  margin-bottom: 14px;\n  cursor: pointer;\n}\n.not-page .not-body .not-item .status {\n  font-size: 12px;\n  color: #34A569;\n  font-weight: 400;\n}\n.not-page .not-body .not-item .label {\n  font-size: 12px;\n  color: #5E5E5E;\n  font-weight: 400;\n}\n.not-page .not-body .not-item .message {\n  margin: 10px 0;\n}\n.not-page .not-body .not-item .message h4 {\n  font-size: 16px;\n  color: #212121;\n  margin-bottom: 5px;\n}\n.not-page .not-body .not-item .message p {\n  font-size: 16px;\n  color: #515151;\n}\n.not-page .not-body .not-item.read .status {\n  color: #CF823E;\n}\n.not-page .not-body .not-item.read .message h4 {\n  color: #707070;\n  font-weight: 300;\n}\n.not-page .not-body .not-item.read .message p {\n  color: #707070;\n}\n.not-page .not-body .not-item .unread-icon {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLHVDQUFBO0VBQ0QsZ0NBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUVBLGlDQUFBO0FDREY7QURFRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRENJO0VBQ0UsZUFBQTtBQ0NOO0FEQ0k7RUFDRSxpQkFBQTtBQ0NOO0FEQ0k7RUFDRSx3QkFBQTtBQ0NOO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ047QURFRTtFQUNFLGtEQUFBO0FDQUo7QURFRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrRkFBQTtFQUNBLGdDQUFBO0FDQUo7QURDSTtFQUNFLGNBQUE7QUNDTjtBREFNO0VBQ0csZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFVDtBRENNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ1I7QURDTTtFQUNFLFlBQUE7QUNDUjtBREdNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7QUNEUjtBREVRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQVY7QURLRTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNISjtBREtFO0VBQ0UsUUFBQTtBQ0hKO0FETUE7RUFDRSxvQkFBQTtFQUNBLGlFQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDSEY7QURJRTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0FDRko7QURJRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNGSjtBRElFO0VBQ0UsWUFBQTtBQ0ZKO0FESUU7RUFDRSxpQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7QUNGSjtBREtJO0VBQ0UsWUFBQTtBQ0hOO0FESU07RUFDRSw0QkFBQTtBQ0ZSO0FET0k7RUFDRSxZQUFBO0FDTE47QURNTTtFQUNFLGdCQUFBO0FDSlI7QURTSTtFQUNFLFlBQUE7QUNQTjtBRFFNO0VBQ0UsNEJBQUE7QUNOUjtBRFVFOzs7RUFHRSxlQUFBO0VBQ0EsMkJBQUE7QUNSSjtBRFdJOzs7OztFQUdFLDRCQUFBO0FDUE47QURVRTtFQUNFLG9CQUFBO0FDUko7QURVRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ1JKO0FEVUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNSSjtBRFVFO0VBQ0UsaUJBQUE7QUNSSjtBRFdBO0VBQ0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDUkY7QURVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ1BGO0FEVUE7RUFDRSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNQRjtBRFFFO0VBQ0UsTUFBQTtBQ05KO0FEUUU7RUFDRSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtBQ05KO0FEV0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ1JKO0FEU0k7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNQTjtBRFFNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDTlI7QURTSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEUU07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDTlI7QURVRTtFQUNFLDRCQUFBO0FDUko7QURTSTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDUE47QURRTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFFNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ05SO0FEUU07RUFDRSxjQUFBO0FDTlI7QURPUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNMVjtBRE9RO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNMVjtBRFNRO0VBQ0UsY0FBQTtBQ1BWO0FEVVU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNSWjtBRFVVO0VBQ0UsY0FBQTtBQ1JaO0FEYU07RUFDRSxlQUFBO0FDWFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIubWFzdGhlYWQge1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIC8vYmFja2dyb3VuZDogIzA2NTlkNDtcclxuICBiYWNrZ3JvdW5kOiAjNDMzNjgzO1xyXG4gIC8vYmFja2dyb3VuZDogIzY3NWNhMTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgLmhlYWRlci1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3Qge1xyXG4gICAgICBtYXJnaW46IDVweCAwIDAgMDtcclxuICAgIH1cclxuICAgIC5saXN0LWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDAgM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeS1idG4ge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLndoaXRlLWJnIHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTcsIDczLCA3NiwgMC4zNSkgMHB4IDFweCA2cHggMHB4O1xyXG4gIH1cclxuICAuaGVhZGVyLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgZWFzZS1vdXQsIGhlaWdodCAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmU5ZTk7XHJcbiAgICAubG9nby13cmFwcGVyIHtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHNwYW57XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgLyogbGluZS1oZWlnaHQ6IDI5cHg7ICovXHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAubG9nby10aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYWluLW5hdiB7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCchaW1wb3J0YW50O1xyXG4gICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZXBlcmF0b3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDJkMmQyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgLm5vdGlmaWNhdGlvbi1idG4ge1xyXG4gICAgdG9wOiAycHg7XHJcbiAgfVxyXG59XHJcbi5zZWFyY2gtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMjRweCAwIDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgJi5zdGlja3kge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogODBweDtcclxuICB9XHJcbiAgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICB9XHJcbiAgLm91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAjMDAwMDAwMjk7XHJcbiAgfVxyXG4gIC50eXBlIHtcclxuICAgICYubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcclxuICAgICAgd2lkdGg6IDIzMHB4OztcclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDU2cHggMCAwIDU2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnNlYXJjaCB7XHJcbiAgICAmLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmxvY2F0aW9uIHtcclxuICAgICYubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1NnB4IDU2cHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCwgXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAsIFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyLCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIHtcclxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCwgXHJcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAsIFxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gICAgICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAucHJpbWFyeS1idG4tZ3JheSB7XHJcbiAgICBtYXJnaW46IDdweCAwIDAgMjBweDtcclxuICB9XHJcbiAgLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDVweDtcclxuICB9XHJcbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNXB4O1xyXG4gIH1cclxuICAuc2VyYWNoLWNsb3NlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4ubWF0LW1lbnUtcGFuZWwge1xyXG4gIGJhY2tncm91bmQ6ICNGQ0ZDRkMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xyXG59XHJcbi5tYXQtaWNvbi1idXR0b24udXNlcmltYWdlIHtcclxuICB3aWR0aDogNTJweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTdweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB0b3A6IDgwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDAgIWltcG9ydGFudDtcclxuICAmLmZ1bGwtaGVpZ2h0IHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLm5vdGlmaWNhdGlvbi1kcmF3ZXItc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICB9XHJcbn1cclxuXHJcbi5ub3QtcGFnZSB7XHJcbiAgLm5vdC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0RERUJGNTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC00cHg7XHJcbiAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNXB4OyAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jbG9zZS1pY29uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDUwcHg7ICAgICAgXHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI0I0Q0RFMTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4OyAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm5vdC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDI1cHggMjVweCA4MHB4IDI1cHg7XHJcbiAgICAubm90LWl0ZW0ge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUJFQjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAuc3RhdHVzIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMzNEE1Njk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgICAubGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzVFNUU1RTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzUxNTE1MTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5yZWFkIHtcclxuICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgIGNvbG9yOiAjQ0Y4MjNFO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgfVxyXG4gICAgICAudW5yZWFkLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIi5oZWFkZXIubWFzdGhlYWQge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogIzQzMzY4MztcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xufVxuLmhlYWRlci5tYXN0aGVhZCAuaGVhZGVyLWJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG59XG4uaGVhZGVyLm1hc3RoZWFkIC5oZWFkZXItYm9keSAubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uaGVhZGVyLm1hc3RoZWFkIC5oZWFkZXItYm9keSAubGlzdCB7XG4gIG1hcmdpbjogNXB4IDAgMCAwO1xufVxuLmhlYWRlci5tYXN0aGVhZCAuaGVhZGVyLWJvZHkgLmxpc3QtaXRlbSB7XG4gIG1hcmdpbjogMCAzcHggIWltcG9ydGFudDtcbn1cbi5oZWFkZXIubWFzdGhlYWQgLmhlYWRlci1ib2R5IC5wcmltYXJ5LWJ0biB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG4uaGVhZGVyLm1hc3RoZWFkLndoaXRlLWJnIHtcbiAgYm94LXNoYWRvdzogcmdiYSg1NywgNzMsIDc2LCAwLjM1KSAwcHggMXB4IDZweCAwcHg7XG59XG4uaGVhZGVyLm1hc3RoZWFkIC5oZWFkZXItdG9wIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLW91dCwgaGVpZ2h0IDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmU5ZTk7XG59XG4uaGVhZGVyLm1hc3RoZWFkIC5oZWFkZXItdG9wIC5sb2dvLXdyYXBwZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5oZWFkZXIubWFzdGhlYWQgLmhlYWRlci10b3AgLmxvZ28td3JhcHBlciBzcGFuIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICAvKiBsaW5lLWhlaWdodDogMjlweDsgKi9cbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uaGVhZGVyLm1hc3RoZWFkIC5oZWFkZXItdG9wIC5sb2dvLXdyYXBwZXIgLmxvZ28tdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaGVhZGVyLm1hc3RoZWFkIC5oZWFkZXItdG9wIC5sb2dvLXdyYXBwZXIgLmxvZ28ge1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uaGVhZGVyLm1hc3RoZWFkIC5oZWFkZXItdG9wIC5tYWluLW5hdiBidXR0b24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41MnB4O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIiAhaW1wb3J0YW50O1xufVxuLmhlYWRlci5tYXN0aGVhZCAuaGVhZGVyLXRvcCAubWFpbi1uYXYgYnV0dG9uIC5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xufVxuLmhlYWRlci5tYXN0aGVhZCAuc2VwZXJhdG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5oZWFkZXIubWFzdGhlYWQgLm5vdGlmaWNhdGlvbi1idG4ge1xuICB0b3A6IDJweDtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgcGFkZGluZzogMjRweCAwIDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uc2VhcmNoLXdyYXBwZXIuc3RpY2t5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA4MHB4O1xufVxuLnNlYXJjaC13cmFwcGVyIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAwcHg7XG59XG4uc2VhcmNoLXdyYXBwZXIgLm91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGhlaWdodDogNDZweDtcbn1cbi5zZWFyY2gtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMTBweCA2cHggIzAwMDAwMDI5O1xufVxuLnNlYXJjaC13cmFwcGVyIC50eXBlLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gIHdpZHRoOiAyMzBweDtcbn1cbi5zZWFyY2gtd3JhcHBlciAudHlwZS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBib3JkZXItcmFkaXVzOiA1NnB4IDAgMCA1NnB4O1xufVxuLnNlYXJjaC13cmFwcGVyIC5zZWFyY2gubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLnNlYXJjaC13cmFwcGVyIC5zZWFyY2gubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5zZWFyY2gtd3JhcHBlciAubG9jYXRpb24ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLnNlYXJjaC13cmFwcGVyIC5sb2NhdGlvbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBib3JkZXItcmFkaXVzOiAwIDU2cHggNTZweCAwO1xufVxuLnNlYXJjaC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kLFxuLnNlYXJjaC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwLFxuLnNlYXJjaC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbi5zZWFyY2gtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCxcbi5zZWFyY2gtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCxcbi5zZWFyY2gtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0LCAuc2VhcmNoLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQsXG4uc2VhcmNoLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAsXG4uc2VhcmNoLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoLXdyYXBwZXIgLnByaW1hcnktYnRuLWdyYXkge1xuICBtYXJnaW46IDdweCAwIDAgMjBweDtcbn1cbi5zZWFyY2gtd3JhcHBlciAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbn1cbi5zZWFyY2gtd3JhcHBlciAubWF0LXNlbGVjdC12YWx1ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xufVxuLnNlYXJjaC13cmFwcGVyIC5zZXJhY2gtY2xvc2Uge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1hdC1tZW51LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI0ZDRkNGQyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VCRUJFQjtcbn1cblxuLm1hdC1pY29uLWJ1dHRvbi51c2VyaW1hZ2Uge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE3cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiA4MHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAgIWltcG9ydGFudDtcbn1cbi5tYXQtZHJhd2VyLWNvbnRhaW5lci5mdWxsLWhlaWdodCB7XG4gIHRvcDogMDtcbn1cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciAubm90aWZpY2F0aW9uLWRyYXdlci1zaWRlbmF2IHtcbiAgd2lkdGg6IDM2MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xufVxuXG4ubm90LXBhZ2UgLm5vdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjRERFQkY1O1xuICBwYWRkaW5nOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubm90LXBhZ2UgLm5vdC1oZWFkZXIgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xufVxuLm5vdC1wYWdlIC5ub3QtaGVhZGVyIGg0IC5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG59XG4ubm90LXBhZ2UgLm5vdC1oZWFkZXIgLmNsb3NlLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjQjRDREUxO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5vdC1wYWdlIC5ub3QtaGVhZGVyIC5jbG9zZS1pY29uIC5tYXQtaWNvbiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuLm5vdC1wYWdlIC5ub3QtYm9keSB7XG4gIHBhZGRpbmc6IDI1cHggMjVweCA4MHB4IDI1cHg7XG59XG4ubm90LXBhZ2UgLm5vdC1ib2R5IC5ub3QtaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUJFQkVCO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubm90LXBhZ2UgLm5vdC1ib2R5IC5ub3QtaXRlbSAuc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM0QTU2OTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5ub3QtcGFnZSAubm90LWJvZHkgLm5vdC1pdGVtIC5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1RTVFNUU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubm90LXBhZ2UgLm5vdC1ib2R5IC5ub3QtaXRlbSAubWVzc2FnZSB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLm5vdC1wYWdlIC5ub3QtYm9keSAubm90LWl0ZW0gLm1lc3NhZ2UgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubm90LXBhZ2UgLm5vdC1ib2R5IC5ub3QtaXRlbSAubWVzc2FnZSBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzUxNTE1MTtcbn1cbi5ub3QtcGFnZSAubm90LWJvZHkgLm5vdC1pdGVtLnJlYWQgLnN0YXR1cyB7XG4gIGNvbG9yOiAjQ0Y4MjNFO1xufVxuLm5vdC1wYWdlIC5ub3QtYm9keSAubm90LWl0ZW0ucmVhZCAubWVzc2FnZSBoNCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLm5vdC1wYWdlIC5ub3QtYm9keSAubm90LWl0ZW0ucmVhZCAubWVzc2FnZSBwIHtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4ubm90LXBhZ2UgLm5vdC1ib2R5IC5ub3QtaXRlbSAudW5yZWFkLWljb24ge1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/message.service */
    "./src/app/services/message.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _services_http_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../app.config */
    "./src/app/app.config.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(fb, dialog, common, router, http, activatedRoute, messageService, authGuardService, socialAuthService) {
        _classCallCheck(this, HeaderComponent);

        this.fb = fb;
        this.dialog = dialog;
        this.common = common;
        this.router = router;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.messageService = messageService;
        this.authGuardService = authGuardService;
        this.socialAuthService = socialAuthService;
        this.isSticky = false;
        this.isHidden = false;
        this.prevOffset = 0;
        this.categories = [];
        this.categoryName = '';
        this.user = {};
        this.isUserLoggedIn = false;
        this.search = {};
        this.notificationsCount = 0;
        this.isShowSearch = false;
        this.searchOptions = [{
          value: 'email',
          title: 'Email'
        }, {
          value: 'phoneno',
          title: 'Phoneno'
        }, {
          value: 'fullname',
          title: 'Full name'
        }];
        this.notifications = [];
        this.isLoading = false;
        this.loaderMsg = 'Loading notifications...';
        this.userId = '';
        this.appConfig = {};
        this.isAdmin = false;
      }

      _createClass(HeaderComponent, [{
        key: "checkScroll",
        value: function checkScroll() {
          var curOffset = window.pageYOffset;
          this.isSticky = curOffset >= 100;

          if (curOffset >= 200 && curOffset > this.prevOffset) {
            this.isHidden = true;
          } else {
            this.isHidden = false;
          }

          this.prevOffset = curOffset;
        }
      }, {
        key: "documentClick",
        value: function documentClick(e) {
          if (this.header.nativeElement.contains(e.target) || e.target.className === 'mat-option-text') {
            return;
          }

          if (!this.serachWrapper.nativeElement.contains(e.target)) {
            this.isShowSearch = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.appConfig = _app_config__WEBPACK_IMPORTED_MODULE_10__["appConfig"]; // console.log(this.categoryName, this.authGuardService.getLoggedInUserDetails());

          this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
          this.isAdmin = this.authGuardService.isAdmin();
          this.user = this.authGuardService.getLoggedInUserDetails();

          if (!this.user.rights) {
            this.doLogout();
          }

          this.router.events.subscribe(function (params) {// console.log(this.router.routerState.root);
            // this.categoryName = params.categoryId;
          });
          this.subscription = this.messageService.getLoginMessage().subscribe(function (user) {
            _this33.user = user;
            console.log(_this33.user);
          });
          this.commonSub = this.messageService.getCommonMessage().subscribe(function (message) {
            if (message.topic === 'logout') {
              _this33.doLogout();
            }

            if (message.topic === 'showLogin') {
              _this33.doLogin('create');
            }

            if (message.topic === 'notifications') {
              _this33.getNotificationsCount();
            }
          });
          this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this33.search = queryParams;
            _this33.searchForm = _this33.fb.group({
              option: [_this33.search.option ? _this33.search.option : 'profession'],
              q: [_this33.search.q ? _this33.search.q : ''],
              location: [_this33.search.location ? _this33.search.location : '']
            });
          }); // this.getNotificationsCount();
        }
      }, {
        key: "initSearch",
        value: function initSearch() {
          this.router.navigate(["/auth/search"], {
            queryParams: this.searchForm.value
          });
        }
      }, {
        key: "getNotificationsCount",
        value: function getNotificationsCount() {
          var _this34 = this;

          this.http.getNotificationsCount(this.user.user_id).subscribe(function (result) {
            _this34.notificationsCount = result.count;
          }, function (error) {});
        }
      }, {
        key: "doLogin",
        value: function doLogin(option) {// const dialogRef = this.dialog.open(LoginSignupComponent, {
          //   width: '700px',
          //   panelClass: ['login-singup'],
          //   disableClose: true,
          //   data: {mode: 'login', option}
          // });
          // dialogRef.afterClosed().subscribe(result => {
          //   this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
          //   this.user = this.authGuardService.getLoggedInUserDetails();
          // });
        }
      }, {
        key: "showCloseSerach",
        value: function showCloseSerach() {
          this.isShowSearch = !this.isShowSearch;
        }
      }, {
        key: "doLogout",
        value: function doLogout() {
          var userSession = this.authGuardService.getLoggedUser();

          if (userSession.isSocial) {
            this.socialAuthService.signOut();
          }

          this.user.isLoggedIn = false;
          this.isUserLoggedIn = false;
          localStorage.removeItem('dq_token');
          this.router.navigate(["/login"]);
        }
      }, {
        key: "drawerOpen",
        value: function drawerOpen(event) {
          this.notifications = [];

          if (event) {
            this.userId = this.user.user_id;
            this.getAllNotifications();
          }
        }
      }, {
        key: "getAllNotifications",
        value: function getAllNotifications() {
          var _this35 = this;

          this.loaderMsg = 'Loading notifications...';
          this.isLoading = true;
          this.http.getNotifications(this.userId).subscribe(function (result) {
            _this35.isLoading = false;
            _this35.notifications = result;
          }, function (error) {
            _this35.isLoading = false;
          });
        }
      }, {
        key: "makeNotificationRead",
        value: function makeNotificationRead(notification) {
          var _this36 = this;

          notification.showMsg = !notification.showMsg;

          if (!notification.status) {
            this.http.makeNotificationRead(this.userId, notification.id).subscribe(function (result) {
              _this36.isLoading = false;
              notification.status = true;

              _this36.messageService.sendCommonMessage({
                topic: 'notifications',
                reason: 'Read Notification'
              });
            }, function (error) {
              _this36.isLoading = false;
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
          this.commonSub.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
      }, {
        type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]
      }, {
        type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["SocialAuthService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serachWrapper', {
      "static": true
    })], HeaderComponent.prototype, "serachWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('header', {
      "static": true
    })], HeaderComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')], HeaderComponent.prototype, "checkScroll", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])], HeaderComponent.prototype, "documentClick", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/shared/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/heat-map/heat-map.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/shared/heat-map/heat-map.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeatMapHeatMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .highcharts-credits {\n  display: none !important;\n}\n\n::ng-deep .highcharts-text-outline {\n  fill: none !important;\n  stroke: none !important;\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n\n::ng-deep .highcharts-label {\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n\n#heat-map-chart ::ng-deep .highcharts-a11y-proxy-button {\n  border-width: 0px;\n  background-color: #fff !important;\n  background: url('menu.png') no-repeat;\n  cursor: pointer;\n  outline: none;\n  opacity: 1 !important;\n  z-index: 999;\n  overflow: hidden;\n  padding: 0px;\n  margin: 0px;\n  display: block;\n  position: absolute;\n  width: 22.8423px;\n  height: 20.9387px;\n  left: 1423.12px;\n  top: 38.9374px;\n}\n\n#heat-map-chart ::ng-deep .highcharts-contextmenu {\n  right: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9oZWF0LW1hcC9oZWF0LW1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2hlYXQtbWFwL2hlYXQtbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csd0JBQUE7QUNDSDs7QURFQTtFQUNHLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrREFBQTtBQ0NIOztBREVBO0VBQ0csa0RBQUE7QUNDSDs7QURHQTtFQUNFLGlCQUFBO0VBQ0UsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0QscUJBQUE7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0Usc0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWF0LW1hcC9oZWF0LW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuaGlnaGNoYXJ0cy1jcmVkaXRze1xuICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50Oztcbn1cblxuOjpuZy1kZWVwIC5oaWdoY2hhcnRzLXRleHQtb3V0bGluZXtcbiAgIGZpbGwgOiBub25lICFpbXBvcnRhbnQ7XG4gICBzdHJva2UgOiBub25lICFpbXBvcnRhbnQ7XG4gICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIiFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuaGlnaGNoYXJ0cy1sYWJlbHtcbiAgIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiIWltcG9ydGFudDtcbn1cbiNoZWF0LW1hcC1jaGFydHtcblxuOjpuZy1kZWVwIC5oaWdoY2hhcnRzLWExMXktcHJveHktYnV0dG9ue1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWVudS5wbmcnKSBuby1yZXBlYXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIyLjg0MjNweDtcbiAgICBoZWlnaHQ6IDIwLjkzODdweDtcbiAgICBsZWZ0OiAxNDIzLjEycHg7XG4gICAgdG9wOiAzOC45Mzc0cHg7XG59XG5cbjo6bmctZGVlcCAuaGlnaGNoYXJ0cy1jb250ZXh0bWVudXtcbiAgcmlnaHQ6IDUwcHghaW1wb3J0YW50O1xufVxufVxuXG5cbi8vIDo6bmctZGVlcCAuaGlnaGNoYXJ0cy1wb2ludHtcbi8vICAgIHdpZHRoOjEwMHB4ICFpbXBvcnRhbnQ7XG4vLyAgICBoZWlnaHQ6MTAwcHggIWltcG9ydGFudDtcbi8vIH0iLCI6Om5nLWRlZXAgLmhpZ2hjaGFydHMtY3JlZGl0cyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5oaWdoY2hhcnRzLXRleHQtb3V0bGluZSB7XG4gIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgc3Ryb2tlOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuaGlnaGNoYXJ0cy1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG59XG5cbiNoZWF0LW1hcC1jaGFydCA6Om5nLWRlZXAgLmhpZ2hjaGFydHMtYTExeS1wcm94eS1idXR0b24ge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21lbnUucG5nXCIpIG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIyLjg0MjNweDtcbiAgaGVpZ2h0OiAyMC45Mzg3cHg7XG4gIGxlZnQ6IDE0MjMuMTJweDtcbiAgdG9wOiAzOC45Mzc0cHg7XG59XG4jaGVhdC1tYXAtY2hhcnQgOjpuZy1kZWVwIC5oaWdoY2hhcnRzLWNvbnRleHRtZW51IHtcbiAgcmlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/heat-map/heat-map.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/heat-map/heat-map.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeatMapComponent */

  /***/
  function srcAppSharedHeatMapHeatMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeatMapComponent", function () {
      return HeatMapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/heatmap */
    "./node_modules/highcharts/modules/heatmap.js");
    /* harmony import */


    var highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_3__); // const heatmap = require("highcharts/modules/heatmap.js");
    // heatmap(Highcharts)


    highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var HeatMapComponent = /*#__PURE__*/function () {
      function HeatMapComponent() {
        _classCallCheck(this, HeatMapComponent);

        this.columns = [];
        this.data = [];
        this.chartOptions = {
          chart: {
            type: 'bubble',
            // marginTop: 40,
            // marginBottom: 80,
            plotBorderWidth: 1,
            // paddingBottom: 100,
            height: 900,
            pointSize: 1
          },
          title: {
            text: 'Heat Map for Correlation Detail'
          },
          xAxis: {
            categories: this.columns
          },
          yAxis: {
            categories: this.columns,
            title: null,
            startOnTick: false,
            endOnTick: false
          },
          colorAxis: {
            // stops: [
            //    [0, '#ff0000'],
            //    [0.01, '#ff0000'],
            //    [0.02, '#ff0000'],
            //    [0.03, '#ff0000'],
            //    [0.04, '#ff0000'],
            //    [0.05, '#ff0000'],
            //    [0.06, '#ff0000'],
            //    [0.1, '#efa800'],
            //    [0.2, '#efa800'],
            //    [0.3, '#efa800'],
            //    [0.4, '#efa800'],
            //    [0.5, '#efa800'],
            //    [0.6, '#efa800'],
            //    [0.7, '#efa800'],
            //    [1, '#efa800']
            //  ],
            min: -1,
            max: 1,
            minColor: '#ff0000',
            maxColor: '#00b307' // maxColor: Highcharts.getOptions().colors[0]

          },
          legend: {
            enabled: false,
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 765
          },
          plotOptions: {
            heatmap: {
              pointPadding: 0
            },
            bubble: {
              minSize: 1,
              maxSize: 22
            },
            series: {
              stickyTracking: false
            }
          },
          tooltip: {
            followPointer: true,
            formatter: function formatter() {
              console.log(this.point);
              return '<b>' + this.point.category + '</b>: ' + this.point.options.z;
            }
          },
          series: [{
            name: '',
            borderWidth: 1,
            borderColor: '#ffebbb',
            data: this.data,
            dataLabels: {
              enabled: false,
              color: '#000000'
            }
          }]
        };
      }

      _createClass(HeatMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initChart();
        }
      }, {
        key: "initChart",
        value: function initChart() {
          this.chartOptions.xAxis.categories = this.columns;
          this.chartOptions.yAxis.categories = this.columns;
          this.chartOptions.series[0].data = this.data;
          this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
          this.highcharts.chart(this.chartEl.nativeElement, this.chartOptions);
        }
      }]);

      return HeatMapComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeatMapComponent.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeatMapComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('charts', {
      "static": true
    })], HeatMapComponent.prototype, "chartEl", void 0);
    HeatMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-heat-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./heat-map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/heat-map/heat-map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./heat-map.component.scss */
      "./src/app/shared/heat-map/heat-map.component.scss"))["default"]]
    })], HeatMapComponent);
    /***/
  },

  /***/
  "./src/app/shared/image-cropper/image-cropper.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/image-cropper/image-cropper.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedImageCropperImageCropperComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image-crop-wrapper .image-crop-card {\n  border-radius: 0;\n  font-size: 10px;\n  padding: 6px 10px 0 7px;\n  position: relative;\n  top: 2px;\n  overflow: hidden;\n  border: 1px solid #cbcbcb !important;\n  background: #fff;\n  border-radius: 0.8em;\n}\n.image-crop-wrapper .img-preview {\n  width: 46px;\n  height: 46px;\n  border: 1px solid #f3f3f3;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 100;\n}\n.image-crop-wrapper .img-preview .img {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n}\n.image-crop-wrapper .img-preview .mat-icon {\n  text-align: center !important;\n  margin-top: 10px;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.62);\n  background: #fff;\n}\n.image-crop-wrapper .img-progress {\n  position: absolute;\n  top: 0;\n  right: 0px;\n  left: 0px;\n  z-index: 102;\n}\n.image-crop-wrapper .file-form-group {\n  margin-bottom: 20px;\n  width: 100%;\n}\n.image-crop-wrapper .file-form-group .form-label {\n  font-size: 20px;\n  font-weight: 300;\n  margin-bottom: 24px;\n  display: block;\n}\n.image-crop-wrapper .file-form-group .gv-file-input {\n  width: 100%;\n}\n.image-crop-wrapper .file-form-group .mat-icon {\n  position: absolute;\n  top: 16px;\n  left: 17px;\n  color: white;\n}\n.image-crop-wrapper .image-crop-card {\n  position: relative;\n  box-shadow: none;\n  border: none !important;\n}\n.image-crop-wrapper .upload-btn {\n  font-size: 8px;\n  padding: 0;\n  min-width: 54px;\n  height: 28px;\n  line-height: 28px;\n  position: absolute;\n  right: 6px;\n  top: 5px;\n  z-index: 101;\n}\n.image-crop-wrapper .delete-btn {\n  position: absolute;\n  right: 36px;\n  top: 8px;\n  z-index: 100;\n}\n.image-crop-wrapper .done-btn {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  z-index: 100;\n  background-color: rgba(0, 151, 13, 0.62) !important;\n  color: #fff !important;\n}\n.image-crop-wrapper .delete-btn, .image-crop-wrapper .done-btn {\n  background-color: #f1f1f1;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.image-crop-wrapper .delete-btn .mat-icon, .image-crop-wrapper .done-btn .mat-icon {\n  font-size: 16px;\n}\n.image-crop-wrapper .error-messages-wrapper {\n  text-align: left;\n  position: relative;\n  top: -8px;\n  font-size: 11px;\n  left: -11px;\n}\n.gv-file-input {\n  font-family: \"open-sans-condensed-bold\";\n}\n.gv-file-input[disabled] {\n  opacity: 0.32;\n  cursor: text;\n}\ninput[type=file]::-webkit-file-upload-button {\n  border: 2px solid #7d6ecc;\n  padding: 0.2em 0.9em;\n  border-radius: 0.2em;\n  background-color: #7d6ecc;\n  transition: 1s;\n  color: #fff;\n  font-size: 14px;\n  cursor: pointer;\n  outline: none;\n  padding-left: 38px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\ninput[type=file]::file-selector-button {\n  border: 2px solid #7d6ecc;\n  padding: 0.2em 0.9em;\n  border-radius: 0.2em;\n  background-color: #7d6ecc;\n  transition: 1s;\n  padding-left: 38px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\ninput[type=file]::-webkit-file-upload-button:hover {\n  background-color: #322a54;\n  border: 2px solid #322a54;\n}\ninput[type=file]::file-selector-button:hover {\n  background-color: #322a54;\n  border: 2px solid #322a54;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9pbWFnZS1jcm9wcGVyL2ltYWdlLWNyb3BwZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9pbWFnZS1jcm9wcGVyL2ltYWdlLWNyb3BwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0c7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0FDRkw7QURJRztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0ZMO0FER0s7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRFA7QURHSztFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0RQO0FESUc7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNGTDtBRElHO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDRkw7QURHSztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0RQO0FER0s7RUFDRSxXQUFBO0FDRFA7QURHSztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDRE47QURJRztFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZMO0FESUc7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0ZMO0FESUc7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0ZMO0FESUc7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0Esc0JBQUE7QUNGTDtBRElHO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRkw7QURHSztFQUNFLGVBQUE7QUNEUDtBRElHO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0ZMO0FES0M7RUFLRyx1Q0FBQTtBQ05KO0FEU0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ1BOO0FEV0M7RUFDRyx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDUko7QURXRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1JKO0FEV0U7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FDUko7QURXRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUNSSjtBRFdFOzs7O0VBSUssYUFBQTtBQ1JQIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ltYWdlLWNyb3BwZXIvaW1hZ2UtY3JvcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jcm9wLXdyYXBwZXIge1xyXG4gICAuaW1hZ2UtY3JvcC1jYXJkIHtcclxuICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAvL2hlaWdodDogNDVweDtcclxuICAgICBwYWRkaW5nOiA2cHggMTBweCAwIDdweDtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgdG9wOiAycHg7XHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiICFpbXBvcnRhbnQ7XHJcbiAgICAgLy9ib3gtc2hhZG93OiAwcHggMXB4IDZweCAjMDAwMDAwMjk7XHJcbiAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICBib3JkZXItcmFkaXVzOiAuOGVtOyAgICBcclxuICAgfVxyXG4gICAuaW1nLXByZXZpZXcge1xyXG4gICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgIGhlaWdodDogNDZweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDA7XHJcbiAgICAgcmlnaHQ6IDA7XHJcbiAgICAgei1pbmRleDogMTAwO1xyXG4gICAgIC5pbWcge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgIH1cclxuICAgICAubWF0LWljb24ge1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYyKTtcclxuICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIC5pbWctcHJvZ3Jlc3Mge1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDA7XHJcbiAgICAgcmlnaHQ6IDBweDtcclxuICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgei1pbmRleDogMTAyO1xyXG4gICB9XHJcbiAgIC5maWxlLWZvcm0tZ3JvdXAge1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgLmZvcm0tbGFiZWwge1xyXG4gICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICB9XHJcbiAgICAgLmd2LWZpbGUtaW5wdXQge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgfVxyXG4gICAgIC5tYXQtaWNvbntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE2cHg7XHJcbiAgICAgIGxlZnQ6IDE3cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICB9XHJcbiAgIH1cclxuICAgLmltYWdlLWNyb3AtY2FyZCB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAudXBsb2FkLWJ0biB7XHJcbiAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgICBtaW4td2lkdGg6IDU0cHg7XHJcbiAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyOHB4OyAgICBcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgcmlnaHQ6IDZweDtcclxuICAgICB0b3A6IDVweDtcclxuICAgICB6LWluZGV4OiAxMDE7XHJcbiAgIH1cclxuICAgLmRlbGV0ZS1idG4ge1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICByaWdodDogMzZweDtcclxuICAgICB0b3A6IDhweDtcclxuICAgICB6LWluZGV4OiAxMDA7XHJcbiAgIH1cclxuICAgLmRvbmUtYnRuIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgcmlnaHQ6IDhweDtcclxuICAgICB0b3A6IDhweDtcclxuICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTEsIDEzLCAwLjYyKSAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgLmRlbGV0ZS1idG4sIC5kb25lLWJ0biB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICB3aWR0aDogMzBweDtcclxuICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDMwcHg7ICAgIFxyXG4gICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIC5lcnJvci1tZXNzYWdlcy13cmFwcGVyIHtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICB0b3A6IC04cHg7XHJcbiAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgIGxlZnQ6IC0xMXB4O1xyXG4gICB9XHJcbiB9XHJcbiAuZ3YtZmlsZS1pbnB1dCB7XHJcbiAgICAvL3BhZGRpbmc6IDE0cHggMTBweDtcclxuICAgIC8vIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDQpO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5NDk0OTQ7XHJcbiAgICAvL2xpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICAgLy8gY29sb3I6ICM3NDc0NzQ7XHJcbiAgICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMzI7XHJcbiAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgIH1cclxuIH1cclxuIFxyXG4gaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdkNmVjYztcclxuICAgIHBhZGRpbmc6IC4yZW0gLjllbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q2ZWNjO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9ZmlsZV06OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZDZlY2M7XHJcbiAgICBwYWRkaW5nOiAuMmVtIC45ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdkNmVjYztcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIyYTU0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMyMmE1NDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1maWxlXTo6ZmlsZS1zZWxlY3Rvci1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMmE1NDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMjJhNTQ7XHJcbiAgfVxyXG4gXHJcbiAgaW5wdXQ6Zm9jdXMsXHJcbiAgICBzZWxlY3Q6Zm9jdXMsXHJcbiAgICB0ZXh0YXJlYTpmb2N1cyxcclxuICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgIiwiLmltYWdlLWNyb3Atd3JhcHBlciAuaW1hZ2UtY3JvcC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiA2cHggMTBweCAwIDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiY2JjYiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwLjhlbTtcbn1cbi5pbWFnZS1jcm9wLXdyYXBwZXIgLmltZy1wcmV2aWV3IHtcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG4uaW1hZ2UtY3JvcC13cmFwcGVyIC5pbWctcHJldmlldyAuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5pbWFnZS1jcm9wLXdyYXBwZXIgLmltZy1wcmV2aWV3IC5tYXQtaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Mik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uaW1hZ2UtY3JvcC13cmFwcGVyIC5pbWctcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAxMDI7XG59XG4uaW1hZ2UtY3JvcC13cmFwcGVyIC5maWxlLWZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbWFnZS1jcm9wLXdyYXBwZXIgLmZpbGUtZm9ybS1ncm91cCAuZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaW1hZ2UtY3JvcC13cmFwcGVyIC5maWxlLWZvcm0tZ3JvdXAgLmd2LWZpbGUtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbWFnZS1jcm9wLXdyYXBwZXIgLmZpbGUtZm9ybS1ncm91cCAubWF0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogMTdweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmltYWdlLWNyb3Atd3JhcHBlciAuaW1hZ2UtY3JvcC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5pbWFnZS1jcm9wLXdyYXBwZXIgLnVwbG9hZC1idG4ge1xuICBmb250LXNpemU6IDhweDtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiA1NHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA2cHg7XG4gIHRvcDogNXB4O1xuICB6LWluZGV4OiAxMDE7XG59XG4uaW1hZ2UtY3JvcC13cmFwcGVyIC5kZWxldGUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzZweDtcbiAgdG9wOiA4cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5pbWFnZS1jcm9wLXdyYXBwZXIgLmRvbmUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICB0b3A6IDhweDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MSwgMTMsIDAuNjIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uaW1hZ2UtY3JvcC13cmFwcGVyIC5kZWxldGUtYnRuLCAuaW1hZ2UtY3JvcC13cmFwcGVyIC5kb25lLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmltYWdlLWNyb3Atd3JhcHBlciAuZGVsZXRlLWJ0biAubWF0LWljb24sIC5pbWFnZS1jcm9wLXdyYXBwZXIgLmRvbmUtYnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pbWFnZS1jcm9wLXdyYXBwZXIgLmVycm9yLW1lc3NhZ2VzLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLThweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsZWZ0OiAtMTFweDtcbn1cblxuLmd2LWZpbGUtaW5wdXQge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbn1cbi5ndi1maWxlLWlucHV0W2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuMzI7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjN2Q2ZWNjO1xuICBwYWRkaW5nOiAwLjJlbSAwLjllbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDZlY2M7XG4gIHRyYW5zaXRpb246IDFzO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMzhweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3ZDZlY2M7XG4gIHBhZGRpbmc6IDAuMmVtIDAuOWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkNmVjYztcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHBhZGRpbmctbGVmdDogMzhweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjJhNTQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMjJhNTQ7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV06OmZpbGUtc2VsZWN0b3ItYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMmE1NDtcbiAgYm9yZGVyOiAycHggc29saWQgIzMyMmE1NDtcbn1cblxuaW5wdXQ6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyxcbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/image-cropper/image-cropper.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/image-cropper/image-cropper.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ImageCropperComponent */

  /***/
  function srcAppSharedImageCropperImageCropperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function () {
      return ImageCropperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _services_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app.config */
    "./src/app/app.config.ts");

    var ImageCropperComponent = /*#__PURE__*/function () {
      function ImageCropperComponent(http, authGuardService) {
        _classCallCheck(this, ImageCropperComponent);

        this.http = http;
        this.authGuardService = authGuardService;
        this.isOpenFile = false;
        this.label = 'Select Image';
        this.preview = '';
        this.aspectRatio = 6 / 4;
        this.resizedWidth = 0;
        this.resizedHeight = 0;
        this.name = '';
        this.imageType = '';
        this.imagePath = '';
        this.disabled = false;
        this.fileTypes = 'image/*';
        this.imageCroppedCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uploadCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.canvasRotation = 0;
        this.rotation = 0;
        this.scale = 1;
        this.showCropper = false;
        this.containWithinAspectRatio = false;
        this.transform = {};
        this.selectedFile = {};
        this.isLoading = false;
        this.isUploadDone = false;
        this.userId = '';
        this.errorMessage = '';
        this.appConfig = {};
        var user = this.authGuardService.getLoggedInUserDetails();
        this.userId = user.user_id;
        this.appConfig = _app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"];
      }

      _createClass(ImageCropperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isOpenFile) {
            console.log(this.fileInput);
            var fileElement = this.fileInput.nativeElement;
            fileElement.click();
          }

          if (this.imagePath.indexOf('blank.png') >= 0) {
            this.imagePath = '';
          }
        }
      }, {
        key: "deleteImage",
        value: function deleteImage() {
          this.croppedImage = '';
          this.imageChangedEvent = '';
          this.imageCroppedCompleted.emit({
            image: '',
            file: ''
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.isUploadDone = false;
          this.errorMessage = '';

          if (event.target.files && event.target.files.length) {
            var file = event.target.files[0]; // if (file.type.indexOf(this.fileTypes) < 0 ) {
            //   event.target.files = undefined;
            //   this.errorMessage = 'Supoort only the image file format.';
            //   return;
            // }

            this.selectedFile = file;
            this.fileSelected.emit(this.selectedFile);
          }
        }
      }, {
        key: "uploadImage",
        value: function uploadImage() {
          var _this37 = this;

          var formData = new FormData();
          formData.append('file', this.selectedFile);
          formData.append('image_type', this.imageType); // formData.append('name', this.selectedFile.name);

          this.isLoading = true;
          this.isUploadDone = false;
          this.http.uploadImage(this.userId, formData).subscribe(function (result) {
            _this37.isLoading = false;
            _this37.isUploadDone = true;

            _this37.uploadCompleted.emit({
              name: _this37.selectedFile.name,
              image_type: _this37.imageType,
              path: result.path
            });
          }, function (error) {
            _this37.isLoading = false;
          });
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
          this.imageCroppedCompleted.emit({
            image: event.base64,
            file: Object(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_3__["base64ToFile"])(event.base64),
            type: 'image'
          });
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {
          this.showCropper = true;
        }
      }, {
        key: "cropperReady",
        value: function cropperReady(sourceImageDimensions) {
          console.log('Cropper ready', sourceImageDimensions);
        }
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {
          console.log('Load failed');
        }
      }]);

      return ImageCropperComponent;
    }();

    ImageCropperComponent.ctorParameters = function () {
      return [{
        type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', {
      "static": true
    })], ImageCropperComponent.prototype, "fileInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "isOpenFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "preview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "aspectRatio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "resizedWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "resizedHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "imageType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "imagePath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCropperComponent.prototype, "fileTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ImageCropperComponent.prototype, "imageCroppedCompleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ImageCropperComponent.prototype, "fileSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ImageCropperComponent.prototype, "uploadCompleted", void 0);
    ImageCropperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-cropper',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-cropper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/image-cropper/image-cropper.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      providers: [{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],
        useValue: {
          showError: true
        }
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-cropper.component.scss */
      "./src/app/shared/image-cropper/image-cropper.component.scss"))["default"]]
    })], ImageCropperComponent);
    /***/
  },

  /***/
  "./src/app/shared/mn-carousel/mn-carousel.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/shared/mn-carousel/mn-carousel.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedMnCarouselMnCarouselComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".car-btn-wrapper {\n  margin-bottom: 16px;\n  margin-right: 12px;\n}\n.car-btn-wrapper .secondary-btn, .car-btn-wrapper .primary-btn {\n  min-width: auto;\n  padding: 0px 6px;\n  margin-left: 5px;\n}\n.car-wrapper .img-preview {\n  margin: auto;\n  width: 120px;\n  height: 120px;\n  margin-bottom: 12px;\n}\n.car-wrapper {\n  position: relative;\n}\n.car-wrapper .sub-title {\n  font-weight: 400;\n  position: absolute;\n  top: -10px;\n}\n.car-wrapper .sub-title.block {\n  position: relative;\n  top: 0;\n}\n.car-wrapper p.desc {\n  max-height: 35px;\n  overflow: hidden;\n  font-size: 11px;\n  font-weight: 300;\n  line-height: 12px;\n  text-overflow: ellipsis;\n}\n.car-wrapper .more-icon-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.car-wrapper .more-icon-btn .more-icon {\n  font-size: 18px !important;\n  background: transparent !important;\n  color: #000 !important;\n}\n.share-menu-wrapper.mat-menu-panel {\n  min-height: auto;\n}\n.share-menu-wrapper button {\n  font-size: 12px;\n  height: 30px;\n  line-height: 30px;\n  max-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9tbi1jYXJvdXNlbC9tbi1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL21uLWNhcm91c2VsL21uLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKO0FERUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0VKO0FEREk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7QUNHTjtBREFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNFSjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQ0VKO0FEREk7RUFDRSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7QUNHTjtBREdFO0VBQ0UsZ0JBQUE7QUNBSjtBREVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW4tY2Fyb3VzZWwvbW4tY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyLWJ0bi13cmFwcGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAuc2Vjb25kYXJ5LWJ0biwgLnByaW1hcnktYnRuICB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbn1cclxuLmNhci13cmFwcGVyIHtcclxuICAuaW1nLXByZXZpZXcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfVxyXG59XHJcbi5jYXItd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5zdWItdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICAmLmJsb2NrIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHAuZGVzYyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuICAubW9yZS1pY29uLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIC5tb3JlLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaGFyZS1tZW51LXdyYXBwZXIge1xyXG4gICYubWF0LW1lbnUtcGFuZWwge1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICB9XHJcbn1cclxuIiwiLmNhci1idG4td3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5jYXItYnRuLXdyYXBwZXIgLnNlY29uZGFyeS1idG4sIC5jYXItYnRuLXdyYXBwZXIgLnByaW1hcnktYnRuIHtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAwcHggNnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY2FyLXdyYXBwZXIgLmltZy1wcmV2aWV3IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jYXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXItd3JhcHBlciAuc3ViLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xufVxuLmNhci13cmFwcGVyIC5zdWItdGl0bGUuYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbn1cbi5jYXItd3JhcHBlciBwLmRlc2Mge1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jYXItd3JhcHBlciAubW9yZS1pY29uLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cbi5jYXItd3JhcHBlciAubW9yZS1pY29uLWJ0biAubW9yZS1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5zaGFyZS1tZW51LXdyYXBwZXIubWF0LW1lbnUtcGFuZWwge1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuLnNoYXJlLW1lbnUtd3JhcHBlciBidXR0b24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/mn-carousel/mn-carousel.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/mn-carousel/mn-carousel.component.ts ***!
    \*************************************************************/

  /*! exports provided: MnCarouselComponent */

  /***/
  function srcAppSharedMnCarouselMnCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MnCarouselComponent", function () {
      return MnCarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _services_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var MnCarouselComponent = /*#__PURE__*/function () {
      function MnCarouselComponent(http, authGuardService) {
        _classCallCheck(this, MnCarouselComponent);

        this.http = http;
        this.authGuardService = authGuardService;
        this.items = [];
        this.title = '';
        this.communityShare = false;
        this.shareKey = '';
        this.OwlOptions = {
          loop: false,
          autoplay: false,
          autoplayTimeout: 4000,
          autoplaySpeed: 700,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          margin: 0,
          navSpeed: 700,
          navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
          items: 3,
          nav: false
        };
        this.isCarouselFor1stTabVisible = false;
        this.appConfig = {};
        this.isLoading = false;
        this.loaderMsg = '';
        this.user = {};
        this.isUserLoggedIn = false;
        this.userId = '';
        this.appConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"];
        this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
        this.user = this.authGuardService.getLoggedInUserDetails();
        this.userId = this.user.user_id;
      }

      _createClass(MnCarouselComponent, [{
        key: "shareWithCommunity",
        value: function shareWithCommunity(item) {
          this.isLoading = true;
          this.loaderMsg = 'Sharing the content to your community...';

          var payload = _defineProperty({}, this.shareKey, item.id); // this.http.shareWithCommunity(this.userId, payload).subscribe((result: any) => {
          //   this.isLoading = false;
          // }, (error) => {
          //   this.isLoading = false;
          // });

        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MnCarouselComponent;
    }();

    MnCarouselComponent.ctorParameters = function () {
      return [{
        type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MnCarouselComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MnCarouselComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MnCarouselComponent.prototype, "communityShare", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MnCarouselComponent.prototype, "shareKey", void 0);
    MnCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mn-carousel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mn-carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mn-carousel/mn-carousel.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mn-carousel.component.scss */
      "./src/app/shared/mn-carousel/mn-carousel.component.scss"))["default"]]
    })], MnCarouselComponent);
    /***/
  },

  /***/
  "./src/app/shared/modules/material.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/modules/material.module.ts ***!
    \***************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSharedModulesMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/fesm2015/ngx-material-timepicker.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_4__["NgxMaterialTimepickerModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_4__["NgxMaterialTimepickerModule"]],
      declarations: []
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/shared/progress-bar/progress-bar.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/progress-bar/progress-bar.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedProgressBarProgressBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".progress-wrapper {\n  width: 200px;\n  padding: 50px 0;\n  margin: auto;\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n.progress-wrapper .title {\n  text-align: center;\n  margin-bottom: 5px;\n  font-size: 10px;\n  padding-bottom: 8px;\n}\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #433683;\n}\n::ng-deep .mat-progress-bar-buffer {\n  background: #9b8ce9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNFSjtBREVBO0VBQ0UseUJBQUE7QUNDRjtBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJyFpbXBvcnRhbnQ7XHJcbiAgLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzM2ODM7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gIGJhY2tncm91bmQ6ICM5YjhjZTk7XHJcbn1cclxuIiwiLnByb2dyZXNzLXdyYXBwZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIiAhaW1wb3J0YW50O1xufVxuLnByb2dyZXNzLXdyYXBwZXIgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzMzY4Mztcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQ6ICM5YjhjZTk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/progress-bar/progress-bar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/progress-bar/progress-bar.component.ts ***!
    \***************************************************************/

  /*! exports provided: ProgressBarComponent */

  /***/
  function srcAppSharedProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
      return ProgressBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProgressBarComponent = /*#__PURE__*/function () {
      function ProgressBarComponent() {
        _classCallCheck(this, ProgressBarComponent);

        this.message = 'Loading...';
        this.isError = false;
      }

      _createClass(ProgressBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressBarComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressBarComponent.prototype, "isError", void 0);
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progress-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/progress-bar/progress-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progress-bar.component.scss */
      "./src/app/shared/progress-bar/progress-bar.component.scss"))["default"]]
    })], ProgressBarComponent);
    /***/
  },

  /***/
  "./src/app/shared/rule-selector/rule-selector.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/rule-selector/rule-selector.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRuleSelectorRuleSelectorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rule-selector .custom-value-input {\n  max-width: 138px;\n}\n.rule-selector .mat-icon-button {\n  font-size: 12px;\n}\n.rule-selector .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #eee8f8;\n}\n.option-wrp {\n  display: flex;\n  justify-content: space-between;\n}\n.mat-option .mat-icon.del-icon {\n  margin-right: 0;\n  top: 13px;\n  position: relative;\n  font-size: 20px;\n  cursor: pointer;\n  color: #676767;\n}\n.mat-option .mat-icon.del-icon:hover {\n  color: #000;\n}\n.mat-option.add-option {\n  padding: 0;\n}\n.mat-option.add-option .add-btn {\n  width: 100%;\n  height: 48px;\n  text-align: center;\n}\n.mat-option.add-option .mat-pseudo-checkbox {\n  display: none;\n}\n.button3d {\n  width: 200px;\n  padding: 0;\n  margin: 10px 20px 10px 0;\n  font-weight: 600;\n  text-align: center;\n  line-height: 50px;\n  color: #FFF;\n  border-radius: 5px;\n  transition: all 0.2s;\n  font-family: \"open-sans-condensed-bold\" !important;\n  cursor: pointer;\n}\n.button3d:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btnBlueGreen {\n  background: #00AE68;\n}\n.btnBlueGreen.addico {\n  width: 66px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n.btnBlueGreen.addico .mat-icon {\n  font-size: 20px;\n  margin-right: 0px;\n}\n.btnBlueGreen.raddIco {\n  width: 25px;\n  height: 22px;\n  line-height: 20px;\n  outline: none;\n  border: 0px;\n  border-radius: 2px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.btnBlueGreen.raddIco .mat-icon {\n  font-size: 16px;\n  margin-right: 0px;\n  position: relative;\n  top: 4px;\n}\n.btnBlueGreen.raddIco:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n}\n.btnLightBlue {\n  background: #322a54;\n}\n.btnLightBlue.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n.btnLightBlue.addRef .material-icons {\n  font-size: 20px;\n}\n.btnLightBlue.tdBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n}\n.btnLightBlue.tdBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -2.5px;\n  right: 8px;\n}\n.btnLightBlue.tdBtn:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n}\n.btnLightBlue.compBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 145px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n}\n.btnLightBlue.compBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  right: 0px;\n}\n.btnLightBlue.svBtn {\n  font-size: 18px;\n  color: #ffffff;\n  width: 180px;\n  height: 37px;\n  line-height: 30px;\n}\n.btnLightBlue.svBtn .mat-icon {\n  font-size: 20px;\n}\n.btnOrange {\n  background: #e91b00;\n}\n.btnOrange.redico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n}\n.btnOrange.redico .mat-icon {\n  font-size: 20px;\n}\n.btnOrange.rdelIco {\n  width: 25px;\n  height: 22px;\n  line-height: 20px;\n  outline: none;\n  border: 0px;\n  border-radius: 2px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.btnOrange.rdelIco .mat-icon {\n  font-size: 16px;\n  margin-right: 0px;\n  position: relative;\n  top: 0px;\n}\n.btnPurple {\n  background: #A74982;\n}\n.btnPurple.preview {\n  width: 100px;\n  height: 30px;\n  line-height: 28px;\n}\n.btnPurple.ebckBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 95px;\n  height: 40px;\n  line-height: 40px;\n  padding-right: 20px;\n}\n.btnPurple.ebckBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  left: 3px;\n}\n/* FADE */\n.btnFade.btnBlueGreen:hover {\n  background: #21825B;\n}\n.btnFade.btnLightBlue:hover {\n  background: #322a54;\n}\n.btnFade.btnOrange:hover {\n  background: #FF8E00;\n}\n.btnFade.btnPurple:hover {\n  background: #6D184B;\n}\n/* 3D */\n.btnBlueGreen.btnPush {\n  box-shadow: 0px 5px 0px 0px #007144;\n}\n.btnLightBlue.btnPush {\n  box-shadow: 0px 5px 0px 0px #322a54;\n}\n.btnOrange.btnPush {\n  box-shadow: 0px 5px 0px 0px #8c1808;\n}\n.btnPurple.btnPush {\n  box-shadow: 0px 5px 0px 0px #6D184B;\n}\n.btnPush:hover {\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n.btnBlueGreen.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #007144;\n}\n.btnLightBlue.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #322a54;\n}\n.btnOrange.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #A66615;\n}\n.btnPurple.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #6D184B;\n}\n.mat-option.mat-active {\n  background: #eee8f8;\n  margin-bottom: 1px;\n}\n.mat-option:focus:not(.mat-option-disabled), .mat-option:hover:not(.mat-option-disabled) {\n  background: #eee8f8;\n}\n::ng-deep .outline mat-label {\n  font-size: 13px !important;\n  font-family: \"open-sans-condensed-bold\";\n  color: #7D7D7D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL3NoYXJlZC9ydWxlLXNlbGVjdG9yL3J1bGUtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9ydWxlLXNlbGVjdG9yL3J1bGUtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQ0FKO0FERUU7RUFDRSxlQUFBO0FDQUo7QURFQztFQUNFLG1CQUFBO0FDQUg7QURHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0FGO0FERUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7QUNFSjtBRENBO0VBQ0UsVUFBQTtBQ0VGO0FEREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDR0o7QURERTtFQUNFLGFBQUE7QUNHSjtBREdBO0VBSUcsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7RUFDQSxlQUFBO0FDSEg7QURJRztFQUNHLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNGTjtBRE1DO0VBQ0UsbUJBQUE7QUNISDtBRElHO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRk47QURHTTtFQUNHLGVBQUE7RUFDQSxpQkFBQTtBQ0RUO0FESUc7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGTjtBREdNO0VBQ0csZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDRFQ7QURHTTtFQUNHLGdCQUFBO0VBQ0EsbUNBQUE7QUNEVDtBRE1DO0VBQ0UsbUJBQUE7QUNISDtBRElHO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRk47QURHTTtFQUNHLGVBQUE7QUNEVDtBRElHO0VBQ0csZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGTjtBREdNO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNEVDtBREdNO0VBQ0csZ0JBQUE7RUFDQSxtQ0FBQTtBQ0RUO0FESUc7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FER007RUFDRyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RUO0FES0c7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNITjtBRElNO0VBQ0csZUFBQTtBQ0ZUO0FEUUM7RUFDRSxtQkFBQTtBQ0xIO0FETUc7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSk47QURLTTtFQUNHLGVBQUE7QUNIVDtBRE1HO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSk47QURLTTtFQUNHLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0hUO0FEU0M7RUFDRSxtQkFBQTtBQ05IO0FET0c7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTE47QURPRztFQUNHLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTE47QURNTTtFQUNHLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDSlQ7QURTQyxTQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ05IO0FEU0M7RUFDRSxtQkFBQTtBQ05IO0FEU0M7RUFDRSxtQkFBQTtBQ05IO0FEU0M7RUFDRSxtQkFBQTtBQ05IO0FEU0MsT0FBQTtBQUNBO0VBQ0UsbUNBQUE7QUNOSDtBRFNDO0VBQ0UsbUNBQUE7QUNOSDtBRFNDO0VBQ0UsbUNBQUE7QUNOSDtBRFNDO0VBQ0UsbUNBQUE7QUNOSDtBRFNDO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ05IO0FEU0M7RUFDRSxtQ0FBQTtBQ05IO0FEU0M7RUFDRSxtQ0FBQTtBQ05IO0FEU0M7RUFDRSxtQ0FBQTtBQ05IO0FEU0M7RUFDRSxtQ0FBQTtBQ05IO0FEUUM7RUFDRyxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNHLG1CQUFBO0FDTEg7QURRQTtFQUNHLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0FDTEgiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcnVsZS1zZWxlY3Rvci9ydWxlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJ1bGUtc2VsZWN0b3Ige1xyXG4gIC5jdXN0b20tdmFsdWUtaW5wdXQge1xyXG4gICAgbWF4LXdpZHRoOiAxMzhweDtcclxuICB9XHJcbiAgLm1hdC1pY29uLWJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxuIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXh7XHJcbiAgIGJhY2tncm91bmQ6ICNlZWU4Zjg7XHJcbiB9XHJcbn1cclxuLm9wdGlvbi13cnAge1xyXG4gIGRpc3BsYXk6ZmxleDsgXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5tYXQtb3B0aW9uIC5tYXQtaWNvbi5kZWwtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIHRvcDogMTNweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzY3Njc2NztcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG4ubWF0LW9wdGlvbi5hZGQtb3B0aW9uIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC5hZGQtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYnV0dG9uc1xyXG5cclxuLmJ1dHRvbjNkIHtcclxuICAgLy9kaXNwbGF5OiBibG9jaztcclxuICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIC8vZmxvYXQ6IGxlZnQ7XHJcbiAgIHdpZHRoOiAyMDBweDtcclxuICAgcGFkZGluZzogMDtcclxuICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICBjb2xvcjogI0ZGRjtcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICB0cmFuc2l0aW9uOiBhbGwgMC4ycyA7XHJcbiAgIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiIWltcG9ydGFudDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAmOmRpc2FibGVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICB9XHJcbiB9XHJcbiBcclxuIC5idG5CbHVlR3JlZW4ge1xyXG4gICBiYWNrZ3JvdW5kOiAjMDBBRTY4O1xyXG4gICAmLmFkZGljb3tcclxuICAgICAgd2lkdGg6IDY2cHg7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgJi5yYWRkSWNve1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICB0b3A6IDRweDtcclxuICAgICAgfVxyXG4gICAgICAmOmRpc2FibGVke1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcclxuICAgICAgfVxyXG4gICB9XHJcbiB9XHJcbiBcclxuIC5idG5MaWdodEJsdWUge1xyXG4gICBiYWNrZ3JvdW5kOiAjMzIyYTU0O1xyXG4gICAmLmFkZFJlZntcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgJi50ZEJ0bntcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIHRvcDogLTIuNXB4O1xyXG4gICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgICY6ZGlzYWJsZWR7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNDg0ODQ4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgJi5jb21wQnRue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogMTQ1cHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiAgICYuc3ZCdG57XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBcclxuIH1cclxuIFxyXG4gLmJ0bk9yYW5nZSB7XHJcbiAgIGJhY2tncm91bmQ6ICNlOTFiMDA7XHJcbiAgICYucmVkaWNve1xyXG4gICAgICB3aWR0aDogMjZweDtcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgJi5yZGVsSWNve1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICB0b3A6IDBweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gfVxyXG4gXHJcbiAuYnRuUHVycGxlIHtcclxuICAgYmFja2dyb3VuZDogI0E3NDk4MjtcclxuICAgJi5wcmV2aWV3e1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgIH1cclxuICAgJi5lYmNrQnRue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogOTVweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gfVxyXG4gXHJcbiAvKiBGQURFICovXHJcbiAuYnRuRmFkZS5idG5CbHVlR3JlZW46aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kOiAjMjE4MjVCO1xyXG4gfVxyXG4gXHJcbiAuYnRuRmFkZS5idG5MaWdodEJsdWU6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kOiAjMzIyYTU0O1xyXG4gfVxyXG4gXHJcbiAuYnRuRmFkZS5idG5PcmFuZ2U6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kOiAjRkY4RTAwO1xyXG4gfVxyXG4gXHJcbiAuYnRuRmFkZS5idG5QdXJwbGU6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kOiAjNkQxODRCO1xyXG4gfVxyXG4gXHJcbiAvKiAzRCAqL1xyXG4gLmJ0bkJsdWVHcmVlbi5idG5QdXNoIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMwMDcxNDQ7XHJcbiB9XHJcbiBcclxuIC5idG5MaWdodEJsdWUuYnRuUHVzaCB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMzIyYTU0O1xyXG4gfVxyXG4gXHJcbiAuYnRuT3JhbmdlLmJ0blB1c2gge1xyXG4gICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzhjMTgwODtcclxuIH1cclxuIFxyXG4gLmJ0blB1cnBsZS5idG5QdXNoIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM2RDE4NEI7XHJcbiB9XHJcbiBcclxuIC5idG5QdXNoOmhvdmVyIHtcclxuICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gfVxyXG4gXHJcbiAuYnRuQmx1ZUdyZWVuLmJ0blB1c2g6aG92ZXIge1xyXG4gICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzAwNzE0NDtcclxuIH1cclxuIFxyXG4gLmJ0bkxpZ2h0Qmx1ZS5idG5QdXNoOmhvdmVyIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMzMjJhNTQ7XHJcbiB9XHJcbiBcclxuIC5idG5PcmFuZ2UuYnRuUHVzaDpob3ZlciB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjQTY2NjE1O1xyXG4gfVxyXG4gXHJcbiAuYnRuUHVycGxlLmJ0blB1c2g6aG92ZXIge1xyXG4gICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzZEMTg0QjtcclxuIH1cclxuIC5tYXQtb3B0aW9uLm1hdC1hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiNlZWU4Zjg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiB9XHJcblxyXG4ubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLCAubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcclxuICAgYmFja2dyb3VuZDojZWVlOGY4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm91dGxpbmUgbWF0LWxhYmVse1xyXG4gICBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgIGNvbG9yOiAjN0Q3RDdEO1xyXG4gfSIsIi5ydWxlLXNlbGVjdG9yIC5jdXN0b20tdmFsdWUtaW5wdXQge1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLnJ1bGUtc2VsZWN0b3IgLm1hdC1pY29uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5ydWxlLXNlbGVjdG9yIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kOiAjZWVlOGY4O1xufVxuXG4ub3B0aW9uLXdycCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1hdC1vcHRpb24gLm1hdC1pY29uLmRlbC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICB0b3A6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjc2NzY3O1xufVxuLm1hdC1vcHRpb24gLm1hdC1pY29uLmRlbC1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5tYXQtb3B0aW9uLmFkZC1vcHRpb24ge1xuICBwYWRkaW5nOiAwO1xufVxuLm1hdC1vcHRpb24uYWRkLW9wdGlvbiAuYWRkLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXQtb3B0aW9uLmFkZC1vcHRpb24gLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnV0dG9uM2Qge1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24zZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNDg0ODQ4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idG5CbHVlR3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjMDBBRTY4O1xufVxuLmJ0bkJsdWVHcmVlbi5hZGRpY28ge1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmJ0bkJsdWVHcmVlbi5hZGRpY28gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbi5idG5CbHVlR3JlZW4ucmFkZEljbyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5idG5CbHVlR3JlZW4ucmFkZEljbyAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNHB4O1xufVxuLmJ0bkJsdWVHcmVlbi5yYWRkSWNvOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM0ODQ4NDg7XG59XG5cbi5idG5MaWdodEJsdWUge1xuICBiYWNrZ3JvdW5kOiAjMzIyYTU0O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5hZGRSZWYge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5idG5MaWdodEJsdWUuYWRkUmVmIC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5idG5MaWdodEJsdWUudGRCdG4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5idG5MaWdodEJsdWUudGRCdG4gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIuNXB4O1xuICByaWdodDogOHB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS50ZEJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNDg0ODQ4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5jb21wQnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDE0NXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uYnRuTGlnaHRCbHVlLmNvbXBCdG4gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbiAgcmlnaHQ6IDBweDtcbn1cbi5idG5MaWdodEJsdWUuc3ZCdG4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMzdweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uYnRuTGlnaHRCbHVlLnN2QnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0bk9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNlOTFiMDA7XG59XG4uYnRuT3JhbmdlLnJlZGljbyB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5idG5PcmFuZ2UucmVkaWNvIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5idG5PcmFuZ2UucmRlbEljbyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbi5idG5PcmFuZ2UucmRlbEljbyAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xufVxuXG4uYnRuUHVycGxlIHtcbiAgYmFja2dyb3VuZDogI0E3NDk4Mjtcbn1cbi5idG5QdXJwbGUucHJldmlldyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5idG5QdXJwbGUuZWJja0J0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmJ0blB1cnBsZS5lYmNrQnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IDNweDtcbn1cblxuLyogRkFERSAqL1xuLmJ0bkZhZGUuYnRuQmx1ZUdyZWVuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzIxODI1Qjtcbn1cblxuLmJ0bkZhZGUuYnRuTGlnaHRCbHVlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMyMmE1NDtcbn1cblxuLmJ0bkZhZGUuYnRuT3JhbmdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGOEUwMDtcbn1cblxuLmJ0bkZhZGUuYnRuUHVycGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzZEMTg0Qjtcbn1cblxuLyogM0QgKi9cbi5idG5CbHVlR3JlZW4uYnRuUHVzaCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMDA3MTQ0O1xufVxuXG4uYnRuTGlnaHRCbHVlLmJ0blB1c2gge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzMyMmE1NDtcbn1cblxuLmJ0bk9yYW5nZS5idG5QdXNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM4YzE4MDg7XG59XG5cbi5idG5QdXJwbGUuYnRuUHVzaCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNkQxODRCO1xufVxuXG4uYnRuUHVzaDpob3ZlciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ0bkJsdWVHcmVlbi5idG5QdXNoOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMwMDcxNDQ7XG59XG5cbi5idG5MaWdodEJsdWUuYnRuUHVzaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjMzIyYTU0O1xufVxuXG4uYnRuT3JhbmdlLmJ0blB1c2g6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI0E2NjYxNTtcbn1cblxuLmJ0blB1cnBsZS5idG5QdXNoOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICM2RDE4NEI7XG59XG5cbi5tYXQtb3B0aW9uLm1hdC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWVlOGY4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5tYXQtb3B0aW9uOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksIC5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjZWVlOGY4O1xufVxuXG46Om5nLWRlZXAgLm91dGxpbmUgbWF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBjb2xvcjogIzdEN0Q3RDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/rule-selector/rule-selector.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/rule-selector/rule-selector.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RuleSelectorComponent */

  /***/
  function srcAppSharedRuleSelectorRuleSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RuleSelectorComponent", function () {
      return RuleSelectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RuleSelectorComponent = /*#__PURE__*/function () {
      function RuleSelectorComponent() {
        _classCallCheck(this, RuleSelectorComponent);

        this.ruleItems = [];
        this.showAddItem = true;
        this.multiple = false;
        this.label = '';
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ruleOptionItem = '';
        this.ruleItem = '';
        this.selectedRule = [];
        this.showAdd = false;
      }

      _createClass(RuleSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          if (this.initValue && !this.multiple) {
            if (this.ruleItems && this.ruleItems.length) {
              var isFound = this.ruleItems.filter(function (item) {
                return item.value === _this38.initValue;
              })[0];

              if (isFound) {
                this.initValue = isFound;
              } else {
                this.initValue = {
                  value: this.initValue,
                  label: this.initValue
                };
                this.ruleItems.push(this.initValue);
              }
            }

            if (!this.ruleItems || this.ruleItems && !this.ruleItems.length) {
              this.ruleItems = [];
              this.initValue = {
                value: this.initValue,
                label: this.initValue
              };
              this.ruleItems.push(this.initValue);
            }

            this.selectedRule = [this.initValue.label];
            this.ruleOptionItem = this.initValue.value;
          }

          if (this.initValue && this.multiple) {
            this.initValue.map(function (initItem) {
              if (_this38.ruleItems && _this38.ruleItems.length) {
                var _isFound = _this38.ruleItems.filter(function (item) {
                  return item.value === initItem;
                })[0];

                if (!_isFound) {
                  initItem = {
                    value: initItem,
                    label: initItem
                  };

                  _this38.ruleItems.push(initItem);
                }
              }
            });
            this.selectedRule = this.initValue;
            this.ruleOptionItem = this.initValue;
          }

          this.ruleItem = this.initValue;
        }
      }, {
        key: "modelChange",
        value: function modelChange(e) {
          var _this39 = this;

          if (!this.ruleItems) {
            this.ruleItems = [];
          }

          var selectedRule = [];
          this.selectedRule = [];

          if (this.multiple) {
            selectedRule = this.ruleItems.filter(function (rule) {
              return e.includes(rule.value);
            });
          } else {
            selectedRule = this.ruleItems.filter(function (rule) {
              return rule.value === e;
            });
          }

          selectedRule.map(function (rule) {
            _this39.selectedRule.push(rule.label);
          });
          this.selectionChange.emit({
            value: e
          });
        }
      }, {
        key: "addRuleItem",
        value: function addRuleItem(selectedRule) {
          var _this40 = this;

          var isItemFound = this.ruleItems.filter(function (item) {
            return item.value === _this40.ruleItem;
          });

          if (isItemFound.length) {
            alert('The value already found in the list.');
            return;
          }

          if (this.multiple) {// this.selectedRule.push(this.ruleItem);
          } else {
            this.selectedRule = [this.ruleItem];
            this.ruleOptionItem = this.ruleItem;
            this.selectionChange.emit({
              value: this.ruleItem
            });
          }

          var ruleItem = {
            label: this.ruleItem,
            value: this.ruleItem,
            type: 'CUSTOM'
          };
          this.ruleItems.push(ruleItem);
          this.showHideAddInput(false);
        }
      }, {
        key: "deleteRuleItem",
        value: function deleteRuleItem(ev, rule) {
          ev.stopPropagation();
          ev.preventDefault();
          var index = this.ruleItems.findIndex(function (item) {
            return item.value === rule.value;
          });
          this.ruleItems.splice(index, 1);

          if (this.multiple) {
            this.selectedRule.splice(index, 1);
          } else {
            this.selectedRule = [];
          }

          this.ruleItem = '';
        }
      }, {
        key: "showHideAddInput",
        value: function showHideAddInput(isShow) {
          this.ruleSelect.close();
          this.ruleItem = '';
          this.showAdd = isShow;
        }
      }]);

      return RuleSelectorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ruleSelect', {
      "static": true
    })], RuleSelectorComponent.prototype, "ruleSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RuleSelectorComponent.prototype, "ruleItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RuleSelectorComponent.prototype, "showAddItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RuleSelectorComponent.prototype, "initValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RuleSelectorComponent.prototype, "multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RuleSelectorComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RuleSelectorComponent.prototype, "selectionChange", void 0);
    RuleSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rule-selector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rule-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rule-selector/rule-selector.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rule-selector.component.scss */
      "./src/app/shared/rule-selector/rule-selector.component.scss"))["default"]]
    })], RuleSelectorComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _modules_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/material.module */
    "./src/app/shared/modules/material.module.ts");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var ng_starrating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-starrating */
    "./node_modules/ng-starrating/fesm2015/ng-starrating.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/picker.js");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/fesm2015/ngx-color-picker.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/fesm2015/ag-grid-angular.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./progress-bar/progress-bar.component */
    "./src/app/shared/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./image-cropper/image-cropper.component */
    "./src/app/shared/image-cropper/image-cropper.component.ts");
    /* harmony import */


    var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./confirm-dialog/confirm-dialog.component */
    "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _services_file_format_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../services/file-format-pipe */
    "./src/app/services/file-format-pipe.ts");
    /* harmony import */


    var _services_format_cells_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../services/format-cells-pipe */
    "./src/app/services/format-cells-pipe.ts");
    /* harmony import */


    var _mn_carousel_mn_carousel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./mn-carousel/mn-carousel.component */
    "./src/app/shared/mn-carousel/mn-carousel.component.ts");
    /* harmony import */


    var _account_details_account_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./account-details/account-details.component */
    "./src/app/shared/account-details/account-details.component.ts");
    /* harmony import */


    var _column_selector_column_selector_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./column-selector/column-selector.component */
    "./src/app/shared/column-selector/column-selector.component.ts");
    /* harmony import */


    var _column_selector_drag_drop_list_drag_drop_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./column-selector/drag-drop-list/drag-drop-list.component */
    "./src/app/shared/column-selector/drag-drop-list/drag-drop-list.component.ts");
    /* harmony import */


    var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./bar-chart/bar-chart.component */
    "./src/app/shared/bar-chart/bar-chart.component.ts");
    /* harmony import */


    var _cylinder_chart_cylinder_chart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./cylinder-chart/cylinder-chart.component */
    "./src/app/shared/cylinder-chart/cylinder-chart.component.ts");
    /* harmony import */


    var _color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./color-dialog/color-dialog.component */
    "./src/app/shared/color-dialog/color-dialog.component.ts");
    /* harmony import */


    var _completeness_dialog_completeness_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./completeness-dialog/completeness-dialog.component */
    "./src/app/shared/completeness-dialog/completeness-dialog.component.ts");
    /* harmony import */


    var _rule_selector_rule_selector_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./rule-selector/rule-selector.component */
    "./src/app/shared/rule-selector/rule-selector.component.ts");
    /* harmony import */


    var _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./ag-grid/ag-grid.component */
    "./src/app/shared/ag-grid/ag-grid.component.ts");
    /* harmony import */


    var _formula_editor_formula_editor_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./formula-editor/formula-editor.component */
    "./src/app/shared/formula-editor/formula-editor.component.ts");
    /* harmony import */


    var _heat_map_heat_map_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./heat-map/heat-map.component */
    "./src/app/shared/heat-map/heat-map.component.ts");
    /* harmony import */


    var _analysis_chart_analysis_chart_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./analysis-chart/analysis-chart.component */
    "./src/app/shared/analysis-chart/analysis-chart.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_9__["RatingModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__["ColorPickerModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__["AgGridModule"].withComponents([])],
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_15__["ProgressBarComponent"], _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_16__["ImageCropperComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmDialogComponent"], _services_file_format_pipe__WEBPACK_IMPORTED_MODULE_18__["FileFormatPipe"], _services_format_cells_pipe__WEBPACK_IMPORTED_MODULE_19__["FormatCellsPipe"], _mn_carousel_mn_carousel_component__WEBPACK_IMPORTED_MODULE_20__["MnCarouselComponent"], _account_details_account_details_component__WEBPACK_IMPORTED_MODULE_21__["AccountDetailsComponent"], _column_selector_column_selector_component__WEBPACK_IMPORTED_MODULE_22__["ColumnSelectorComponent"], _column_selector_drag_drop_list_drag_drop_list_component__WEBPACK_IMPORTED_MODULE_23__["DragDropListComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_24__["BarChartComponent"], _cylinder_chart_cylinder_chart_component__WEBPACK_IMPORTED_MODULE_25__["CylinderChartComponent"], _color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ColorDialogComponent"], _completeness_dialog_completeness_dialog_component__WEBPACK_IMPORTED_MODULE_27__["CompletenessDialogComponent"], _rule_selector_rule_selector_component__WEBPACK_IMPORTED_MODULE_28__["RuleSelectorComponent"], _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_29__["AgGridComponent"], _formula_editor_formula_editor_component__WEBPACK_IMPORTED_MODULE_30__["FormulaEditorComponent"], _heat_map_heat_map_component__WEBPACK_IMPORTED_MODULE_31__["HeatMapComponent"], _analysis_chart_analysis_chart_component__WEBPACK_IMPORTED_MODULE_32__["AnalysisChartComponent"]],
      exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_15__["ProgressBarComponent"], _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_16__["ImageCropperComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmDialogComponent"], _account_details_account_details_component__WEBPACK_IMPORTED_MODULE_21__["AccountDetailsComponent"], _mn_carousel_mn_carousel_component__WEBPACK_IMPORTED_MODULE_20__["MnCarouselComponent"], _services_file_format_pipe__WEBPACK_IMPORTED_MODULE_18__["FileFormatPipe"], _services_format_cells_pipe__WEBPACK_IMPORTED_MODULE_19__["FormatCellsPipe"], ng_starrating__WEBPACK_IMPORTED_MODULE_9__["RatingModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__["AgGridModule"], _column_selector_column_selector_component__WEBPACK_IMPORTED_MODULE_22__["ColumnSelectorComponent"], _column_selector_drag_drop_list_drag_drop_list_component__WEBPACK_IMPORTED_MODULE_23__["DragDropListComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_24__["BarChartComponent"], _cylinder_chart_cylinder_chart_component__WEBPACK_IMPORTED_MODULE_25__["CylinderChartComponent"], _color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ColorDialogComponent"], _completeness_dialog_completeness_dialog_component__WEBPACK_IMPORTED_MODULE_27__["CompletenessDialogComponent"], _rule_selector_rule_selector_component__WEBPACK_IMPORTED_MODULE_28__["RuleSelectorComponent"], _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_29__["AgGridComponent"], _formula_editor_formula_editor_component__WEBPACK_IMPORTED_MODULE_30__["FormulaEditorComponent"], _heat_map_heat_map_component__WEBPACK_IMPORTED_MODULE_31__["HeatMapComponent"], _analysis_chart_analysis_chart_component__WEBPACK_IMPORTED_MODULE_32__["AnalysisChartComponent"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      entryComponents: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmDialogComponent"], _color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ColorDialogComponent"], _completeness_dialog_completeness_dialog_component__WEBPACK_IMPORTED_MODULE_27__["CompletenessDialogComponent"], _formula_editor_formula_editor_component__WEBPACK_IMPORTED_MODULE_30__["FormulaEditorComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/assets/config/env.json":
  /*!************************************!*\
    !*** ./src/assets/config/env.json ***!
    \************************************/

  /*! exports provided: baseUrl, imgBaseUrl, default */

  /***/
  function srcAssetsConfigEnvJson(module) {
    module.exports = JSON.parse("{\"baseUrl\":\"https://3fgcd9up5f.execute-api.us-east-1.amazonaws.com\",\"imgBaseUrl\":\"http://13.127.160.99:8080\"}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/vijay/Desktop/workspace/DQ/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map