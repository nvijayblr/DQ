function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorized/notifications/notifications.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorized/notifications/notifications.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthorizedNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"page-body notification-body home-body\">\r\n  <div class=\"container\">\r\n    <div class=\"flex-containers space-between page-heading-action\">\r\n      <div class=\"flex-item\">\r\n        <h4 class=\"name\">Notifications</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <app-progress-bar [message]=\"loaderMsg\" class=\"page\" *ngIf=\"isLoading\"></app-progress-bar>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n        <div class=\"noti-wrapper\">\r\n          <mat-card class=\"list notification flex-containers space-between\" \r\n            *ngFor=\"let notification of notifications; index as i\"\r\n            (click)=\"makeNotificationRead(notification)\">\r\n            <div class=\"flex-item\">\r\n              <label class=\"label\">{{notification.createdAt | date:'MMM dd, yyyy hh:mm a'}}</label>\r\n              <h4 [class.unread]=\"!notification.status\">{{notification.subject}}</h4>\r\n              <p *ngIf=\"notification.showMsg\" [innerHTML]=\"notification.description\"></p>\r\n            </div>\r\n            <div class=\"flex-item\" *ngIf=\"!notification.status\">\r\n              <mat-icon class=\"unread-icon\">brightness_1</mat-icon>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./src/app/components/authorized/notifications/notifications-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/authorized/notifications/notifications-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: NotificationsRoutingModule */

  /***/
  function srcAppComponentsAuthorizedNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function () {
      return NotificationsRoutingModule;
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


    var _notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications.component */
    "./src/app/components/authorized/notifications/notifications.component.ts");

    var routes = [{
      path: '',
      component: _notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]
    }];

    var NotificationsRoutingModule = function NotificationsRoutingModule() {
      _classCallCheck(this, NotificationsRoutingModule);
    };

    NotificationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/authorized/notifications/notifications.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/authorized/notifications/notifications.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuthorizedNotificationsNotificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".notification-body .unread-icon {\n  margin-top: 20px;\n  font-size: 14px;\n  color: #b00100;\n}\n.notification-body .unread {\n  font-weight: 400 !important;\n}\n.notification-body .list.notification {\n  padding-bottom: 0;\n  cursor: pointer;\n}\n.notification-body .mat-card {\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #EBEBEB !important;\n  border-radius: 0 !important;\n  padding: 30px 30px 10px 30px !important;\n  margin-bottom: 22px !important;\n  border-radius: 20px !important;\n}\n.notification-body .label {\n  font-size: 18px !important;\n  color: #888888;\n  font-weight: 400 !important;\n  margin-bottom: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JpemVkL25vdGlmaWNhdGlvbnMvRTpcXEFJRGF0YURyaXZlblxcQ29kZWJhc2VcXEZyb250RW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhdXRob3JpemVkXFxub3RpZmljYXRpb25zXFxub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2F1dGhvcml6ZWQvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FKO0FERUU7RUFDRSwyQkFBQTtBQ0FKO0FERUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNBSjtBREVFO0VBQ0UsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDQUo7QURFRTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aG9yaXplZC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLWJvZHkge1xyXG4gIC51bnJlYWQtaWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNiMDAxMDA7XHJcbiAgfVxyXG4gIC51bnJlYWQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC5ub3RpZmljYXRpb24ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMTBweCAzMHB4IWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIycHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM4ODg4ODg7XHJcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5ub3RpZmljYXRpb24tYm9keSAudW5yZWFkLWljb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjYjAwMTAwO1xufVxuLm5vdGlmaWNhdGlvbi1ib2R5IC51bnJlYWQge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG4ubm90aWZpY2F0aW9uLWJvZHkgLmxpc3Qubm90aWZpY2F0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub3RpZmljYXRpb24tYm9keSAubWF0LWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMTBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIycHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuLm5vdGlmaWNhdGlvbi1ib2R5IC5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzg4ODg4ODtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/authorized/notifications/notifications.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/authorized/notifications/notifications.component.ts ***!
    \********************************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppComponentsAuthorizedNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
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
    /*! ../../../services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/message.service */
    "./src/app/services/message.service.ts");
    /* harmony import */


    var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../app.config */
    "./src/app/app.config.ts");

    var NotificationsComponent = /*#__PURE__*/function () {
      function NotificationsComponent(route, http, router, activatedRoute, authGuardService, messageService, fb) {
        _classCallCheck(this, NotificationsComponent);

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
        this.notifications = [];
        this.isLoading = false;
        this.loaderMsg = 'Loading notifications...';
        this.isUserLoggedIn = false;
        this.appConfig = _app_config__WEBPACK_IMPORTED_MODULE_7__["appConfig"];
        this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
        this.user = this.authGuardService.getLoggedInUserDetails();
        this.userId = this.user.user_id;
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllNotifications();
        }
      }, {
        key: "getAllNotifications",
        value: function getAllNotifications() {
          var _this = this;

          this.loaderMsg = 'Loading notifications...';
          this.isLoading = true;
          this.http.getNotifications(this.userId).subscribe(function (result) {
            _this.isLoading = false;
            _this.notifications = result;
          }, function (error) {
            _this.isLoading = false;
          });
        }
      }, {
        key: "makeNotificationRead",
        value: function makeNotificationRead(notification) {
          var _this2 = this;

          notification.showMsg = !notification.showMsg;

          if (!notification.status) {
            var payload = {
              Id: notification.Id,
              userName: this.user.userName,
              isRead: 'Read',
              status: 'Active'
            };
            this.http.makeNotificationRead(payload).subscribe(function (result) {
              _this2.isLoading = false;
              notification.isRead = 'Read';

              _this2.messageService.sendCommonMessage({
                topic: 'notifications',
                reason: 'Read Notification'
              });
            }, function (error) {
              _this2.isLoading = false;
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ctorParameters = function () {
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

    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorized/notifications/notifications.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.scss */
      "./src/app/components/authorized/notifications/notifications.component.scss"))["default"]]
    })], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/components/authorized/notifications/notifications.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/authorized/notifications/notifications.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: NotificationsModule */

  /***/
  function srcAppComponentsAuthorizedNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsModule", function () {
      return NotificationsModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./notifications-routing.module */
    "./src/app/components/authorized/notifications/notifications-routing.module.ts");
    /* harmony import */


    var _notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications.component */
    "./src/app/components/authorized/notifications/notifications.component.ts");

    var NotificationsModule = function NotificationsModule() {
      _classCallCheck(this, NotificationsModule);
    };

    NotificationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotificationsRoutingModule"]],
      exports: [_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"]]
    })], NotificationsModule);
    /***/
  }
}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map