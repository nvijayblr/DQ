function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ruleset-ruleset-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorized/ruleset/ruleset.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorized/ruleset/ruleset.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthorizedRulesetRulesetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"page-body home-bodys pad-tp\">\r\n   <div class=\"container\">\r\n     <div class=\"home-wrapper\">\r\n       <!-- Community Pages -->\r\n       \r\n       <div class=\"clearfix my-community-body\">\r\n         <!-- <div class=\"left-pannel\">\r\n           <app-account-details></app-account-details>\r\n           <app-recent-deals></app-recent-deals>\r\n         </div> -->\r\n         <div class=\"home-panel\">\r\n           <app-progress-bar [message]=\"loaderMsg\" class=\"page\" *ngIf=\"isLoading\"></app-progress-bar>\r\n           <form [formGroup]=\"analysisForm\">\r\n             <mat-horizontal-stepper [linear]=\"isLinear\" #stepper \r\n               [selectedIndex]=\"stepIndex\" \r\n               (selectionChange)=\"stepperSelectionChange($event)\"\r\n               (animationDone)=\"stepperAnimationDone()\">\r\n               <mat-step>\r\n                   <ng-template matStepLabel>Source & Refernce Data</ng-template>\r\n                   <mat-card class=\"border no-rounded list shrare-post\">\r\n                     <h1 class=\"share-post-title\">Source & Refernce<span class=\"yellow\"> Data</span></h1>\r\n                       <div class=\"form-continer\">\r\n                         <div class=\"list flex-containers flex-start wrap\">\r\n                           <div class=\"list-item-3 outline\">\r\n                             <mat-label>Source Data<span class=\"red\">*</span></mat-label>\r\n                             <mat-form-field appearance=\"fill\">\r\n                               <mat-select formControlName=\"sourceId\" (selectionChange)=\"onSourceChange($event)\">\r\n                                 <mat-option *ngFor=\"let item of sourceList\" [value]=\"item.sourceId\">{{item.source.sourceFileName}}</mat-option>\r\n                               </mat-select>\r\n                             </mat-form-field>\r\n                           </div>\r\n                             <div class=\"list-item-4 outline\">\r\n                               <mat-label>Source Name<span class=\"red\">*</span></mat-label>\r\n                               <mat-form-field appearance=\"fill\">\r\n                                 <input matInput placeholder=\"Source Name\" formControlName=\"name\" maxlength=\"50\" autocomplete=\"off\"/>\r\n                               </mat-form-field>\r\n                             </div>\r\n                             <div class=\"list-item-3 outline\">\r\n                               <mat-label>Source Description</mat-label>\r\n                               <mat-form-field appearance=\"fill\">\r\n                                 <input matInput placeholder=\"Source Description\" formControlName=\"description\" maxlength=\"250\" autocomplete=\"off\"/>\r\n                               </mat-form-field>\r\n                             </div>\r\n                             <div class=\"list-item-5 add-remove-button\"></div>\r\n                         </div>\r\n                       </div>\r\n                       <div class=\"bdr\"></div>\r\n                       <div class=\"list\">\r\n                         <div class=\"flex-containers space-between\" \r\n                           formArrayName=\"referenceCSV\" *ngFor=\"let reference of analysisForm.get('referenceCSV')['controls']; index as i; last as isLast; first as isFirst\">\r\n                           <ng-container [formGroupName]=\"i\">\r\n                             <div class=\"list flex-containers flex-start\">\r\n                               <div class=\"list-item-2 outline\">\r\n                                 <mat-label>Reference Data (csv) #{{i+1}}</mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                   <input matInput placeholder=\"Reference File\" formControlName=\"referencePath\" maxlength=\"50\" autocomplete=\"off\"/>\r\n                                 </mat-form-field>\r\n                               </div>\r\n                               <div class=\"list-item-2 outline\">\r\n                                 <mat-label>Reference Name<span class=\"red\">*</span></mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                   <input matInput placeholder=\"Reference Name\" formControlName=\"referenceDataName\" maxlength=\"50\" autocomplete=\"off\"/>\r\n                                 </mat-form-field>\r\n                               </div>\r\n                               <div class=\"list-item-1 outline\">\r\n                                 <mat-label>Source Description</mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                   <input matInput placeholder=\"Source Description\" formControlName=\"referenceDataDescription\" maxlength=\"250\" autocomplete=\"off\"/>\r\n                                 </mat-form-field>\r\n                               </div>\r\n     \r\n                               <div class=\"list-item-0 add-remove-button\">\r\n                                 <button type=\"button\" class=\"button3d btnPush btnBlueGreen addico\" (click)=\"addFormItem('referenceCSV')\" *ngIf=\"isLast\">\r\n                                   <mat-icon>add</mat-icon>\r\n                                 </button>\r\n                                 </div>\r\n                                 <div class=\"list-item-0 add-remove-button\">\r\n                                 <button type=\"button\" class=\"button3d btnPush btnOrange redico\" (click)=\"removeFormItem('referenceCSV', i)\" *ngIf=\"!isFirst || !isLast\">\r\n                                   <mat-icon>delete_outline</mat-icon>\r\n                                 </button>\r\n                               </div>\r\n                             </div>\r\n                           </ng-container>\r\n                         </div>\r\n                       </div>\r\n \r\n                     <div class=\"act-btn-wrapper\">\r\n                         <button mat-stroked-button class=\"button3d btnPush btnLightBlue tdBtn\"\r\n                         [disabled]=\"!afControls.name.value || fileTypeErr\"\r\n                         (click)=\"gotoStepper(1, 'CSV')\">Next <mat-icon>navigate_next</mat-icon></button>\r\n                     </div>\r\n                   </mat-card>\r\n                 </mat-step>\r\n \r\n                 <mat-step>\r\n                   <ng-template matStepLabel>Critical Data Elements</ng-template>\r\n                   <mat-card class=\"border no-rounded list shrare-post\">\r\n                     <!-- <h1 class=\"share-post-title\">Critical<span class=\"yellow\"> Data Elements</span></h1> -->\r\n                     <mat-tab-group mat-align-tabs=\"start\"  animationDuration=\"0ms\">\r\n                        <mat-tab label=\"Critical Source Elements\">\r\n                           <div class=\"col-selector-wrapper\">\r\n                              <app-column-selector \r\n                                [availableColumnsLabel]=\"'Available Columns'\"\r\n                                [selectedColumnsLabel]=\"'Selected Columns'\"\r\n                                [availableColumns]=\"availableColumns\"\r\n                                [selectedColumns]=\"selectedColumns\"\r\n                                [formControl]=\"columnsForm.controls.columns\"\r\n                              >\r\n                              </app-column-selector>\r\n                           </div>\r\n                        </mat-tab>\r\n                        <mat-tab label=\"Reference Source Element\">\r\n                           <div class=\"col-selector-wrapper\">\r\n                              <app-column-selector \r\n                                [availableColumnsLabel]=\"'Available Reference Columns'\"\r\n                                [selectedColumnsLabel]=\"'Selected Reference Columns'\"\r\n                                [availableColumns]=\"availableReferenceColumns\"\r\n                                [selectedColumns]=\"selectedReferenceColumns\"\r\n                                [formControl]=\"columnsForm.controls.refernceColumns\"\r\n                              >\r\n                              </app-column-selector>\r\n                            </div>\r\n                        </mat-tab>\r\n                     </mat-tab-group>\r\n                     \r\n                     \r\n                     <!-- <br/>\r\n                     <h1 class=\"share-post-title\">Define<span class=\"yellow\"> Reference Data Element</span></h1> -->\r\n                     \r\n                     \r\n                     <div class=\"list flex-containers flex-start\">\r\n                        <div class=\"list-item-2 outline\">\r\n                           <button mat-stroked-button class=\"button3d btnPush btnPurple ebckBtn\" (click)=\"gotoStepper(0)\"><mat-icon>keyboard_arrow_left</mat-icon> Back</button>\r\n                           </div>\r\n                           <div class=\"list-item-2 outline act-btn-wrapper1\">\r\n                              <button mat-stroked-button class=\"button3d btnPush btnLightBlue tdBtn\" \r\n                              [disabled]=\"columnsForm.controls.columns.value && !columnsForm.controls.columns.value.length\"\r\n                              (click)=\"gotoStepper(2); getColumnRules();\">Next  <mat-icon>navigate_next</mat-icon></button>\r\n                           </div>\r\n                        </div>\r\n                       \r\n                       \r\n                    \r\n                   </mat-card>\r\n                 </mat-step>\r\n                 \r\n                 <mat-step>\r\n                   <ng-template matStepLabel>Rule Definition</ng-template>\r\n                   <mat-tab-group mat-align-tabs=\"start\"  animationDuration=\"0ms\" class=\"mm2\" #tabGroup>\r\n                     <mat-tab label=\"Rule Definition\">\r\n                        <div class=\"list wrap mt2\">\r\n                           <mat-card class=\"border no-rounded shrare-post\">\r\n                           <h1 class=\"share-post-title\">Rule<span class=\"yellow\"> Definition</span></h1>\r\n                           <div class=\"list flex-containers flex-start wrap cde-fields-wrp\">\r\n                              <div class=\"list-item-3 outline\">\r\n                                 <mat-label>Ruleset Name<span class=\"yellow\">*</span></mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                 <input matInput placeholder=\"Ruleset Name\" formControlName=\"rulesetName\" maxlength=\"50\" autocomplete=\"off\" />\r\n                                 </mat-form-field>\r\n                              </div>\r\n                              <div class=\"list-item-3 outline\">\r\n                                 <mat-label>Start Date<span class=\"red\">*</span></mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                 <mat-label class=\"tplabel\">Start Date</mat-label>\r\n                                 <input matInput [matDatepicker]=\"frompicker\" [min]=\"uploadedDate\" formControlName=\"startDate\" autocomplete=\"off\" (click)=\"frompicker.open()\">\r\n                                 <mat-datepicker-toggle matSuffix [for]=\"frompicker\"></mat-datepicker-toggle>\r\n                                 <mat-datepicker #frompicker></mat-datepicker>\r\n                                 <mat-error class=\"ns\" *ngIf=\"!afControls.startDate.value\">Please select a Start Date</mat-error>\r\n                                 </mat-form-field>\r\n                              </div>\r\n                              <div class=\"list-item-3 outline\">\r\n                                 <mat-label>End Date<span class=\"red\">*</span></mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                 <mat-label class=\"tplabel\">End Date</mat-label>\r\n                                 <input matInput [matDatepicker]=\"topicker\" [min]=\"uploadedDate\" formControlName=\"endDate\" autocomplete=\"off\" (click)=\"topicker.open()\">\r\n                                 <mat-datepicker-toggle matSuffix [for]=\"topicker\"></mat-datepicker-toggle>\r\n                                 <mat-datepicker #topicker></mat-datepicker>\r\n                                 <mat-error class=\"ns\" *ngIf=\"!afControls.endDate.value\">Please select a End Date</mat-error>\r\n                                 </mat-form-field>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"category-list-wrapper clearfix\" *ngIf=\"showCDECar && !isLoading\">\r\n                              <div class=\"left-arrow\">\r\n                                 <button mat-stroked-button class=\"gv-secondary-btn primary-btn-gray prev-next-btn\" (click)=\"owlCar.prev()\">\r\n                                 <mat-icon class=\"pl\">keyboard_arrow_left</mat-icon>\r\n                                 </button>\r\n                              </div>\r\n                              <div class=\"category-list\" #carouselHolder>\r\n                                 <owl-carousel-o [options]=\"OwlCategoryOptions\" #owlCar (initialized)=\"owlInitialized()\">\r\n                                 <!-- Carousel Items -->\r\n                                 <ng-container *ngFor=\"let rule of rulesList\">\r\n                                    <ng-template carouselSlide [id]=\"rule.column\">\r\n                                       <div class=\"category-item\" [class.selected]=\"rule.column === selectedRuleColumn\" (tap)=\"gotoRuleColumn(rule)\">\r\n                                       <h3 class=\"cat-title\">{{rule.column ? rule.column : '-'}}</h3>\r\n                                       </div>\r\n                                    </ng-template>\r\n                                 </ng-container>\r\n                                 </owl-carousel-o>\r\n                              </div>\r\n                              <div class=\"right-arrow\">\r\n                                 <button mat-stroked-button class=\"gv-secondary-btn primary-btn-gray prev-next-btn\" (click)=\"owlCar.next()\">\r\n                                 <mat-icon class=\"pl\">keyboard_arrow_right</mat-icon>\r\n                                 </button>\r\n                              </div>\r\n                           </div>\r\n                           \r\n                           <mat-expansion-panel expanded hideToggle disabled  \r\n                              *ngFor=\"let columns of afControls.columnRules.controls; index as i;\" \r\n                              formArrayName=\"columnRules\"\r\n                              [hidden]=\"columns['controls'].column.value !== selectedRuleColumn\">\r\n                              <ng-container [formGroupName]=\"i\">\r\n                                 <mat-expansion-panel-header>\r\n                                 <mat-panel-title>\r\n                                    {{columns['controls'].column.value}}\r\n                                 </mat-panel-title>\r\n                                 </mat-expansion-panel-header>\r\n                                 <div class=\"rule-step-wrapper rule-list-wrp\"\r\n                                 *ngFor=\"let rule of columns.get('rules')['controls']; index as j; last as isLast; first as isFirst\" formArrayName=\"rules\">\r\n                                 <ng-container [formGroupName]=\"j\">\r\n                                    <h5 class=\"rule-title\">Rule #{{j+1}}</h5>\r\n                                    <div class=\"rule-selection-wrapper\">\r\n                                       <div class=\"list flex-containers flex-start wrap cde-fields-wrp\">\r\n                                       <div class=\"list-item-5 outline\">\r\n                                          <app-rule-selector \r\n                                             [ruleItems]=\"ruleTypeList\" \r\n                                             [initValue]=\"rule.get('rule').value\" \r\n                                             (selectionChange)=\"rule.get('rule').setValue($event.value)\"\r\n                                          ></app-rule-selector>\r\n                                       </div>\r\n                                       <div class=\"list-item-5 outline\">\r\n                                          <app-rule-selector \r\n                                             [ruleItems]=\"ruleOperatorList[rule.get('rule').value]\" \r\n                                             [initValue]=\"rule.get('operator').value\" \r\n                                             (selectionChange)=\"rule.get('operator').setValue($event.value)\"\r\n                                          ></app-rule-selector>\r\n                                       </div>\r\n                                       <div class=\"list-item-5 outline\" [hidden]=\"rule.get('rule').value === 'Formula'\">\r\n                                          <app-rule-selector \r\n                                             *ngIf=\"rule.get('rule').value !== 'ReferenceCDE'\"\r\n                                             [ruleItems]=\"ruleValueList[rule.get('rule').value]\" \r\n                                             [initValue]=\"rule.get('value').value\" \r\n                                             (selectionChange)=\"rule.get('value').setValue($event.value)\"\r\n                                          ></app-rule-selector>\r\n                                          <mat-form-field appearance=\"outline\" *ngIf=\"rule.get('rule').value === 'ReferenceCDE'\">\r\n                                             <mat-select formControlName=\"value\" (change)=\"rule.get('value').setValue($event.value)\">\r\n                                             <mat-option *ngFor=\"let item of columnsForm.controls.refernceColumns.value\" [value]=\"item.title\">{{item.title}}</mat-option>\r\n                                             </mat-select>\r\n                                          </mat-form-field>\r\n                                       </div>\r\n                                       <div class=\"list-item-5 outline\" *ngIf=\"rule.get('rule').value === 'Formula'\">\r\n                                          <div class=\"formula-preview\">\r\n                                             <span *ngFor=\"let formula of rule.get('value').value\">\r\n                                             <span class=\"operator\" *ngIf=\"formula.operator !== 'NULL'\">{{formula.operator}}</span>\r\n                                             <span class=\"cde\">{{formula.cde}}</span>\r\n                                             </span>\r\n                                          </div>\r\n                                          <div class=\"edit-link\" (click)=\"showFormulaEditor(rule)\">Formula Editor</div>\r\n                                       </div>\r\n                                       <div class=\"list-item-5 outline\">\r\n                                          <app-rule-selector \r\n                                             [ruleItems]=\"ruleDimenstionList\" \r\n                                             [initValue]=\"rule.get('dimension').value\" \r\n                                             (selectionChange)=\"rule.get('dimension').setValue($event.value)\"\r\n                                          ></app-rule-selector>\r\n                                       </div>\r\n                                       <div class=\"list-item-0 add-remove-button\">\r\n                                          <button type=\"button\"  class=\"button3d btnPush btnBlueGreen addico\" (click)=\"addRules(columns, 'rules')\" *ngIf=\"isLast\">\r\n                                             <mat-icon>add</mat-icon>\r\n                                          </button>\r\n                                          </div>\r\n                                          <div class=\"list-item-0 add-remove-button\">\r\n                                          <button type=\"button\" class=\"button3d btnPush btnOrange redico\" (click)=\"removeRules(columns, 'rules', j)\" *ngIf=\"!isFirst || !isLast\">\r\n                                             <mat-icon>delete_outline</mat-icon>\r\n                                          </button>\r\n                                       </div>\r\n                                       </div>\r\n                                    </div>                                   \r\n                                 </ng-container>\r\n                                 </div>\r\n                              </ng-container>\r\n                           </mat-expansion-panel>\r\n                           <div class=\"list flex-containers flex-start\">\r\n                              <div class=\"list-item-2 outline\">\r\n                                 <button mat-stroked-button class=\"button3d btnPush btnPurple ebckBtn\" (click)=\"gotoStepper(1);\"><mat-icon>keyboard_arrow_left</mat-icon> Back</button>\r\n                              </div>\r\n                              <div class=\"list-item-2 outline act-btn-wrapper1\">\r\n                                 <button mat-stroked-button class=\"button3d btnPush btnLightBlue tdBtn\" \r\n                                 [disabled]=\"!afControls.rulesetName.value || !afControls.columnRules.value.length || !afControls.startDate.value || !afControls.endDate.value\"\r\n                                 (click)=\"generatePreview();\">Next <mat-icon>navigate_next</mat-icon></button>\r\n                              </div>\r\n                              </div>\r\n                           <!-- <div class=\"act-btn-wrapper\">\r\n                              <button mat-stroked-button class=\"primary-btn-gray white pad\" (click)=\"gotoStepper(1);\"><mat-icon class=\"mar-ico\">arrow_back_ios_new</mat-icon> Back</button>\r\n                              <button mat-stroked-button class=\"primary-btn-gray\" \r\n                                 [disabled]=\"!afControls.rulesetName.value || !afControls.columnRules.value.length || !afControls.startDate.value || !afControls.endDate.value\"\r\n                                 (click)=\"generatePreview();\">Next <mat-icon>arrow_forward_ios</mat-icon></button>\r\n                           </div> -->\r\n                           </mat-card>\r\n                           <div class=\"list flex-containers wrap\">\r\n                           <mat-card class=\"border no-rounded shrare-post rule-details-info\">\r\n                              <h1 class=\"share-post-title\"><span class=\"lgb\">{{selectedRuleColumn}}</span></h1>\r\n                              <div class=\"tabBtn\" (click)=\"tabGroup.selectedIndex=1\">View Profile Details</div>\r\n                              <table class=\"table\">\r\n                                 <tr class=\"cpt\">\r\n                                 <td class=\"strong\" *ngFor=\"let statistics of cdeStatistics | keyvalue\">{{statistics.key}}</td>\r\n                                 </tr>\r\n                                 <tr class=\"cpt1\">\r\n                                 <td *ngFor=\"let statistics of cdeStatistics | keyvalue\">{{statistics.value}}</td>\r\n                                 </tr>\r\n                              </table>\r\n                           </mat-card>\r\n                           <mat-card class=\"border no-rounded shrare-post correlation-info\">\r\n                              <h1 class=\"share-post-title\"><span class=\"lgb\">Correlation Summary</span></h1>\r\n                              <div class=\"tabBtn2\" (click)=\"tabGroup.selectedIndex=2\">View Correlation Details</div>\r\n                           </mat-card>\r\n                           </div>\r\n                        </div>\r\n                     </mat-tab>\r\n                     <mat-tab label=\"Profile Details\">\r\n                        <app-attribute-details style=\"background:#fff;\"> </app-attribute-details>\r\n                     </mat-tab>\r\n                     <mat-tab label=\"Correlation Detail\">\r\n                     <div class=\"corMap\">\r\n                        <app-correlation-details></app-correlation-details>\r\n                     </div>\r\n                     </mat-tab>\r\n                  </mat-tab-group>\r\n                 </mat-step>\r\n \r\n                 <mat-step>\r\n                   <ng-template matStepLabel>Finalize ruleset</ng-template>\r\n                   <mat-card class=\"border no-rounded list shrare-post\">\r\n                     <h1 class=\"share-post-title\">Finalize<span class=\"yellow\"> ruleset</span></h1>\r\n                     <div class=\"analysis-preview\">\r\n                       <table class=\"table\">\r\n \r\n                         <tbody>\r\n                           <tr>\r\n                             <td style=\"width:15%\"><div class=\"label\">Source Name</div></td>\r\n                             <td>{{analysis.sourceName}}</td>\r\n                           </tr>\r\n                           <tr>\r\n                             <td><div class=\"label\">Selected CDE</div></td>\r\n                           <td>\r\n                             <span class=\"spec\" *ngFor=\"let column of analysis.selectedColumns\">\r\n                               {{column.title}}\r\n                             </span>\r\n                             </td>\r\n                           </tr>\r\n                           <tr>\r\n                             <td><div class=\"label\">Ruleset Name</div></td>\r\n                             <td>{{analysis.rulesetName}}</td>\r\n                           </tr>\r\n                           <tr>\r\n                             <td colspan=\"2\">\r\n                                <div class=\"label1\">Rules</div>\r\n                                <div class=\"expBtn\">                               \r\n                                <button class=\"horizontal align\" (click)=\"accordion.openAll()\"> <span class=\"text\">Expand All </span></button>\r\n                                 <button class=\"horizontal align\" (click)=\"accordion.closeAll()\"> <span class=\"text\"> Collapse All </span></button>\r\n                              </div>\r\n                              </td>\r\n                           </tr>\r\n                           <tr>\r\n                             <td colspan=\"2\">\r\n                               <div class=\"accordions\">\r\n                                 <mat-accordion multi>\r\n                                    <mat-expansion-panel *ngFor=\"let col of analysis.rules; first as isFirst\" [expanded]=\"isFirst\">\r\n                                       <mat-expansion-panel-header>\r\n                                          <mat-panel-title>\r\n                                             <div class=\"list flex-containers flex-start wtBg mm\">\r\n                                                <div class=\"list-item-2 outline\">\r\n                                                   <h4>{{col.column}} </h4>\r\n                                                </div>                                               \r\n                                             </div>\r\n                                          </mat-panel-title>\r\n                                          \r\n                                        </mat-expansion-panel-header>\r\n                                        <table class=\"table rule-table\">\r\n                                          <tbody>\r\n                                            <tr *ngFor=\"let rule of col.rules; index as i\">\r\n                                              <td>Rule #{{i+1}}</td>\r\n                                              <td><div class=\"label\">{{rule.rule}}</div></td>\r\n                                              <td>{{rule.operator}}</td>\r\n                                              <td class=\"preview\">\r\n                                                <div *ngIf=\"rule.rule !== 'Formula'\">{{rule.value}}</div>\r\n                                                <div *ngIf=\"rule.rule === 'Formula'\" class=\"formula-preview nob\">\r\n                                                  <span *ngFor=\"let formula of rule.value\">\r\n                                                    <span class=\"operator alcap1\" *ngIf=\"formula.operator !== 'NULL'\">{{formula.operator}}</span>\r\n                                                    <span class=\"cde alcap\">{{formula.cde}}</span>\r\n                                                  </span>\r\n                                                </div>\r\n                                              </td>\r\n                                              <td>{{rule.dimension}}</td>\r\n                                            </tr>\r\n                                          </tbody>\r\n                                        </table>\r\n                                    </mat-expansion-panel>\r\n                                 </mat-accordion>\r\n                                    <!-- <div class=\"list flex-containers flex-start wtBg\">\r\n                                       <div class=\"list-item-2 outline\">\r\n                                          <h4>{{col.column}} </h4>\r\n                                       </div>\r\n                                     <div class=\"list-item-2 outline act-btn-wrapper1\">\r\n                                          <button type=\"button\" class=\"button3d btnPush btnBlueGreen addico\" (click)=\"showEditDetails(i);\">\r\n                                             <mat-icon>add</mat-icon>\r\n                                             </button>\r\n                                       </div> \r\n                                    </div> -->\r\n\r\n                                 <!-- <table class=\"table rule-table\">\r\n                                   <tbody>\r\n                                     <tr *ngFor=\"let rule of col.rules; index as i\">\r\n                                       <td>Rule #{{i+1}}</td>\r\n                                       <td><div class=\"label\">{{rule.rule}}</div></td>\r\n                                       <td>{{rule.operator}}</td>\r\n                                       <td class=\"preview\">\r\n                                         <div *ngIf=\"rule.rule !== 'Formula'\">{{rule.value}}</div>\r\n                                         <div *ngIf=\"rule.rule === 'Formula'\" class=\"formula-preview\">\r\n                                           <span *ngFor=\"let formula of rule.value\">\r\n                                             <span class=\"operator\" *ngIf=\"formula.operator !== 'NULL'\">{{formula.operator}}</span>\r\n                                             <span class=\"cde\">{{formula.cde}}</span>\r\n                                           </span>\r\n                                         </div>\r\n                                       </td>\r\n                                       <td>{{rule.dimension}}</td>\r\n                                     </tr>\r\n                                   </tbody>\r\n                                 </table> -->\r\n                               </div>\r\n                             </td>\r\n                           </tr>\r\n                         </tbody>\r\n                       </table>\r\n                     </div>\r\n\r\n                     <div class=\"list flex-containers flex-start\">\r\n                        <div class=\"list-item-2 outline\">\r\n                           <button mat-stroked-button class=\"button3d btnPush btnPurple ebckBtn\" (click)=\"gotoStepper(2);\"><mat-icon>keyboard_arrow_left</mat-icon> Back</button>\r\n                        </div>\r\n                        <div class=\"list-item-2 outline act-btn-wrapper1\">\r\n                           <button mat-stroked-button class=\"button3d btnPush btnLightBlue compBtn\" (click)=\"createEditRuleset()\" [disabled]=\"isLoading\">Complete <mat-icon>done_all</mat-icon></button>\r\n                        </div>\r\n                     </div>                    \r\n                   </mat-card>\r\n \r\n                 </mat-step>\r\n             </mat-horizontal-stepper>\r\n           </form>\r\n \r\n           <mat-card class=\"border no-rounded list shrare-post mat-card source-preview-card\" [hidden]=\"stepIndex === 3\">\r\n             <app-progress-bar [message]=\"'Loading source preview...'\" class=\"component\" *ngIf=\"isPreviewLoading\"></app-progress-bar>\r\n             <div class=\"list flex-containers space-between\">\r\n               <h1 class=\"share-post-title\">Source Preview</h1>\r\n               <button class=\"horizontal\" (click)=\"loadSourcePreview();\"> <span class=\"text\"><mat-icon>view_column</mat-icon> Preview </span></button>\r\n             </div>\r\n             <app-ag-grid\r\n               floatingFilter=\"true\"\r\n               *ngIf=\"isPreviewLoaded\"\r\n               [rowData]=\"rowData\"\r\n               [columnDefs]=\"columnDefs\"\r\n               [pageSize]=\"50\"\r\n               [rowSelection]=\"'multiple'\"\r\n               [suppressRowClickSelection]=\"false\"\r\n             ></app-ag-grid>\r\n           </mat-card>\r\n     \r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </section>\r\n \r\n ";
    /***/
  },

  /***/
  "./src/app/components/authorized/ruleset/ruleset-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/authorized/ruleset/ruleset-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: RulesetRoutingModule */

  /***/
  function srcAppComponentsAuthorizedRulesetRulesetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RulesetRoutingModule", function () {
      return RulesetRoutingModule;
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


    var _ruleset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ruleset.component */
    "./src/app/components/authorized/ruleset/ruleset.component.ts");

    var routes = [{
      path: '',
      component: _ruleset_component__WEBPACK_IMPORTED_MODULE_3__["RulesetComponent"]
    }];

    var RulesetRoutingModule = function RulesetRoutingModule() {
      _classCallCheck(this, RulesetRoutingModule);
    };

    RulesetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RulesetRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/authorized/ruleset/ruleset.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/authorized/ruleset/ruleset.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuthorizedRulesetRulesetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.home-wrapper .flex-item-h {\n  min-height: 220px;\n}\n.home-wrapper .sec-title {\n  font-size: 28px;\n  font-weight: 300;\n}\n.home-wrapper .strong-title {\n  margin-bottom: 14px;\n}\n.home-wrapper .flex-item-h {\n  width: 33%;\n  border-radius: 0;\n  border-width: 0 !important;\n  color: #f1f1f1;\n  padding: 34px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n}\n.home-wrapper .flex-item-h .secondary-btn {\n  margin-top: 24px;\n  transition: ease-in 200ms;\n  border-color: #f1f1f1 !important;\n  color: #f1f1f1;\n}\n.home-wrapper .flex-item-h:hover .flex-overlay {\n  opacity: 1;\n  transition: ease-in 200ms;\n}\n.home-wrapper .flex-item-h:hover .secondary-btn {\n  transition: ease-in 200ms;\n  border: 1px solid #8d0000 !important;\n  background-color: #b00000 !important;\n  color: #fff;\n}\n.home-wrapper .flex-item-h .flex-overlay {\n  opacity: 0;\n  transition: ease-in 100ms;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.home-wrapper .professional {\n  background-color: #477149;\n}\n.home-wrapper .personal {\n  background-color: #155159;\n  width: 34%;\n}\n.home-wrapper .community {\n  background-color: #5B5651;\n}\n.home-wrapper .left-pannel {\n  float: left;\n  width: 282px;\n}\n.home-wrapper .home-panel .mat-card {\n  box-shadow: 0px 0px 1px #00000029;\n  border: 1px solid #EBEBEB !important;\n  padding: 20px;\n}\n.home-wrapper .home-panel .mat-card.font {\n  font-family: \"open-sans-condensed-light\" !important;\n}\n.home-wrapper .home-panel .mat-card .user-image {\n  float: left;\n  width: 68px;\n}\n.home-wrapper .home-panel .mat-card .post-user-info {\n  margin-left: 88px;\n}\n.home-wrapper .remove-btn {\n  height: 32px;\n  line-height: 29px !important;\n  margin-left: 10px;\n  font-size: 14px;\n}\n.home-wrapper .shrare-post textarea {\n  height: 80px;\n}\n.home-wrapper .shrare-post .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n.home-wrapper .shrare-post .share-post-title {\n  font-size: 20px;\n  color: #322a54;\n  font-weight: 400;\n  margin: 0px 10px 20px 10px;\n  font-family: \"open-sans-condensed-bold\";\n  position: relative;\n}\n.home-wrapper .shrare-post .share-post-title:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -12px;\n  height: 5px;\n  width: 55px;\n  background-color: #efa800;\n}\n.home-wrapper .shrare-post .share-post-title:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -10px;\n  height: 1px;\n  width: 95%;\n  max-width: 181px;\n  background-color: #efa800;\n}\n.home-wrapper .shrare-post .share-btn {\n  font-weight: 300;\n  color: #7B7C7D;\n  margin-top: 20px;\n  padding: 2px 10px 2px 2px;\n  margin-left: 16px;\n  font-size: 17px;\n}\n.home-wrapper .shrare-post .share-btn .mat-icon {\n  font-size: 20px;\n  margin-right: 3px;\n  height: 22px;\n}\n.home-wrapper .my-community-body .list {\n  margin: 20px 0 0 0;\n}\n.home-wrapper .analysis-card {\n  text-align: center;\n}\n.home-wrapper .col-selector-wrapper {\n  margin: 12px;\n}\n.mat-expansion-panel {\n  margin-bottom: 16px;\n}\n.mat-expansion-panel.bx-sdw {\n  box-shadow: none !important;\n}\n.rule-list-wrp {\n  margin: 0;\n}\n.rule-list-wrp .cde-fields-wrp {\n  margin-top: 0 !important;\n}\n.rule-list-wrp .rule-title {\n  margin: 14px 0 4px 0;\n}\n.rule-list-wrp h5 {\n  font-family: \"open-sans-condensed-bold\";\n}\n.category-list .category-item {\n  text-align: center;\n  border: 1px solid #e7e7e7;\n  padding: 4px;\n  background-color: rgba(240, 240, 240, 0.12);\n  border-radius: 0px;\n}\n.category-list .category-item .cat-icon {\n  font-size: 32px;\n  color: #525252;\n}\n.category-list .category-item .cat-title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 31px;\n  font-family: \"open-sans-condensed-bold\";\n}\n.category-list .category-item:hover {\n  box-shadow: 0 10px 40px 1px rgba(0, 0, 0, 0.17);\n  background-color: #ffffff;\n  cursor: pointer;\n}\n.category-list .category-item.selected {\n  border: 1px solid #433683;\n  background-color: #433683;\n  color: #fff;\n  box-shadow: 0 10px 40px 1px rgba(0, 0, 0, 0.17);\n}\n.category-list .category-item.selected .cat-icon, .category-list .category-item.selected .cat-title {\n  font-weight: 500 !important;\n}\n.category-list .category-item:focus {\n  outline: none;\n}\n.category-list-wrapper {\n  margin-bottom: 12px;\n  margin-top: 20px;\n}\n.category-list-wrapper .left-arrow {\n  float: left;\n  width: 50px;\n}\n.category-list-wrapper .category-list {\n  width: calc(100% - 100px);\n  float: left;\n  font-family: \"open-sans-condensed-bold\";\n}\n.category-list-wrapper .right-arrow {\n  float: left;\n  width: 50px;\n  padding-left: 16px;\n}\n.category-list-wrapper button.prev-next-btn {\n  border-radius: 0;\n  padding: 0;\n  width: 34px;\n  min-width: auto;\n  padding: 0 !important;\n}\n.table .label {\n  font-weight: 500;\n  font-family: \"open-sans-regular\";\n}\n.table .label1 {\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 18px;\n  color: #efa800;\n  width: 400px;\n  display: inline-block;\n}\n.table .expBtn {\n  width: 185px;\n  float: right;\n}\n.table h4 {\n  font-weight: 400;\n  background: white;\n  font-size: 16px;\n  /* padding-bottom: 10px; */\n  /* padding-left: 10px; */\n  /* padding-top: 5px; */\n  color: #322a54;\n  font-family: \"open-sans-condensed-bold\";\n}\n.table h4 .mat-icon {\n  position: relative;\n  top: 6px;\n}\n.table th {\n  font-family: \"open-sans-regular\";\n}\n.rule-table {\n  border-bottom: 0px solid #ccc;\n  margin-bottom: 0px !important;\n}\n.outline mat-label {\n  font-family: \"open-sans-condensed-bold\";\n  color: #373737;\n  font-size: 13px;\n}\n.mat-form-field-outline {\n  box-shadow: none !important;\n}\ninput.mat-input-element {\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 13px;\n}\n.mat-form-field-wrapper {\n  margin-top: 1px;\n}\n::ng-deep.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 4px 10px 14px 0px !important;\n  font-size: 16px;\n  color: #484848;\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n::ng-deep.mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0.11em 0 !important;\n}\n.mtop {\n  margin-top: 20px;\n}\n.bdr {\n  height: 1px;\n  background: #e7e7e7;\n  margin-top: 10px;\n  width: 100%;\n  border-bottom: 1px dotted;\n  -o-border-image: linear-gradient(to right, #e7e7e7, #e7e7e7);\n     border-image: linear-gradient(to right, #e7e7e7, #e7e7e7);\n  border-image-slice: 1;\n}\n::ng-deep.mat-card {\n  box-shadow: 0px 0px 1px #00000029;\n}\n::ng-deep.mat-select {\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n::ng-deep.mat-option {\n  font-family: \"open-sans-regular\" !important;\n}\n.mat-error {\n  display: block;\n  margin-top: 4px;\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 13px;\n}\n.mat-error.ns {\n  background: #FFBABA;\n  color: #D8000C;\n  padding: 3px 9px;\n  width: 150px;\n  font-size: 12px;\n  position: relative;\n  top: -4px;\n  left: -9px;\n}\n.mar-ico {\n  margin-right: 10px;\n}\n.pad {\n  padding: 0 15px !important;\n}\n.ico-align {\n  margin-left: -16px !important;\n}\n.primary-btn-red {\n  border-radius: 4px !important;\n  font-family: \"open-sans-condensed-bold\" !important;\n  text-transform: uppercase;\n  font-size: 18px;\n}\n.table tbody td {\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n.table tbody td.ft {\n  font-family: \"open-sans-condensed-light\" !important;\n}\n.primary-btn-gray .mat-icon.pl {\n  margin-left: -17px;\n}\n.mat-expansion-panel-header {\n  font-family: \"open-sans-condensed-bold\";\n  border-color: #e7e7e7 !important;\n  height: 40px;\n  padding-top: 10px !important;\n}\n::ng-deep .mat-select-value-text {\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n.tpl {\n  padding-left: 0px !important;\n}\n.table tbody td {\n  padding-left: 0px !important;\n}\n.table td.strong {\n  font-weight: bold;\n}\n.rule-details-info {\n  width: calc(100% - 432px);\n  overflow: auto;\n}\n.correlation-info {\n  margin: 0 0 0 22px;\n  width: 410px;\n}\n.edit-link {\n  cursor: pointer;\n  text-align: right;\n  background: #433683;\n  display: inline;\n  float: right;\n  font-family: \"open-sans-condensed-bold\";\n  color: #fff;\n  padding: 0 12px;\n  font-size: 12px;\n}\n.formula-preview {\n  color: #000000;\n  padding: 8px 10px;\n  border-bottom: 1px solid #cbcbcb;\n  height: 48px;\n  background: #eee8f8;\n  position: relative;\n  top: 1px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.formula-preview.nob {\n  background: none !important;\n}\n.formula-preview .operator {\n  font-weight: bold;\n  margin: 0 4px;\n  font-family: \"open-sans-condensed-bold\";\n  position: relative;\n  top: 10px;\n  font-size: 12px;\n}\n.formula-preview .operator.alcap1 {\n  font-weight: normal;\n  margin: 0 4px;\n  font-family: \"open-sans-regular\";\n  position: relative;\n  top: 0px;\n  font-size: 12px;\n}\n.formula-preview .cde {\n  font-weight: bold;\n  font-family: \"open-sans-condensed-bold\";\n  position: relative;\n  top: 10px;\n  font-size: 12px;\n}\n.formula-preview .cde.alcap {\n  font-weight: normal;\n  font-family: \"open-sans-regular\";\n  position: relative;\n  top: 0;\n  font-size: 12px;\n}\n.preview .formula-preview {\n  max-width: 300px;\n  border: 0;\n  padding: 0;\n  height: auto;\n}\n.button3d {\n  width: 200px;\n  padding: 0;\n  margin: 10px 20px 10px 0;\n  font-weight: 600;\n  text-align: center;\n  line-height: 50px;\n  color: #FFF;\n  border-radius: 5px;\n  transition: all 0.2s;\n  font-family: \"open-sans-condensed-bold\" !important;\n  cursor: pointer;\n}\n.button3d:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btnBlueGreen {\n  background: #00AE68;\n}\n.btnBlueGreen.addico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n.btnBlueGreen.addico .mat-icon {\n  font-size: 20px;\n}\n.btnLightBlue {\n  background: #7d6ecc;\n}\n.btnLightBlue.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n.btnLightBlue.addRef .material-icons {\n  font-size: 20px;\n}\n.btnLightBlue.tdBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n}\n.btnLightBlue.tdBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -2.5px;\n  right: 8px;\n}\n.btnLightBlue.tdBtn:disabled {\n  background: gray;\n  box-shadow: 0px 5px 0px 0px #484848;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btnLightBlue.compBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 145px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 16px;\n}\n.btnLightBlue.compBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  right: 0px;\n}\n.btnLightBlue.svBtn {\n  font-size: 18px;\n  color: #ffffff;\n  width: 180px;\n  height: 37px;\n  line-height: 30px;\n}\n.btnLightBlue.svBtn .mat-icon {\n  font-size: 20px;\n}\n.btnOrange {\n  background: #e91b00;\n}\n.btnOrange.redico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n}\n.btnOrange.redico .mat-icon {\n  font-size: 20px;\n}\n.btnPurple {\n  background: #A74982;\n}\n.btnPurple.preview {\n  width: 100px;\n  height: 30px;\n  line-height: 28px;\n}\n.btnPurple.ebckBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 95px;\n  height: 40px;\n  line-height: 40px;\n  padding-right: 20px;\n}\n.btnPurple.ebckBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  left: 3px;\n}\n.btnPurple.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n.btnPurple.addRef .material-icons {\n  font-size: 20px;\n}\n/* FADE */\n.btnFade.btnBlueGreen:hover {\n  background: #21825B;\n}\n.btnFade.btnLightBlue:hover {\n  background: #0097f6;\n}\n.btnFade.btnOrange:hover {\n  background: #FF8E00;\n}\n.btnFade.btnPurple:hover {\n  background: #6D184B;\n}\n/* 3D */\n.btnBlueGreen.btnPush {\n  box-shadow: 0px 5px 0px 0px #007144;\n}\n.btnLightBlue.btnPush {\n  box-shadow: 0px 5px 0px 0px #322a54;\n}\n.btnOrange.btnPush {\n  box-shadow: 0px 5px 0px 0px #8c1808;\n}\n.btnPurple.btnPush {\n  box-shadow: 0px 5px 0px 0px #6D184B;\n}\n.btnPush:hover {\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n.btnBlueGreen.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #007144;\n}\n.btnLightBlue.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #1E8185;\n}\n.btnOrange.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #A66615;\n}\n.btnPurple.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #6D184B;\n}\n.add-remove-button {\n  min-width: 30px;\n}\n::ng-deep .ag-theme-alpine .ag-header {\n  background-color: #1F2739 !important;\n  font-family: \"open-sans-semibold\";\n  border-bottom: 0;\n}\n::ng-deep .ag-cell-label-container {\n  color: #ffffff !important;\n}\n::ng-deep .ag-theme-alpine .ag-icon-filter:before {\n  content: \"\";\n  color: #ffffff;\n}\n::ng-deep .ag-theme-alpine .ag-icon-menu:before {\n  color: #ffffff;\n}\n::ng-deep .ag-grid-wrapper {\n  font-family: \"open-sans-regular\";\n}\n::ng-deep .ag-theme-alpine .ag-row {\n  font-family: \"open-sans-regular\";\n  border-width: 0px;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-row {\n  background: #323C50;\n  color: #ffffff;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-row-odd {\n  background: #1F2739;\n  color: #ffffff;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-header-cell, .ag-theme-alpine .ag-header-group-cell {\n  border-color: #323C50;\n}\n::ng-deep .ag-theme-alpine .ag-paging-panel {\n  font-family: \"open-sans-condensed-bold\";\n}\n::ng-deep .ag-theme-alpine {\n  font-family: \"open-sans-regular\";\n}\n.act-btn-wrapper1 {\n  text-align: right;\n}\n.pad-tp {\n  padding-top: 10px;\n}\n.mat-horizontal-stepper-header {\n  height: 50px !important;\n}\n.tplabel {\n  margin-top: 8px !important;\n}\n.mat-stepper-horizontal {\n  background: #ebe8fb;\n}\n::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #eee8f8;\n}\n::ng-deep .mat-stepper-horizontal .mat-step-header .mat-step-icon-state-edit {\n  background-color: #53478c;\n}\n::ng-deep .mat-stepper-horizontal .mat-step-header .mat-step-icon-selected {\n  background-color: #53478c;\n  box-shadow: 0px 5px 0px 0px #322a54;\n}\n::ng-deep .mat-stepper-horizontal .mat-step-icon {\n  background-color: #c2bbe8;\n}\n.mat-card {\n  border: 1px solid #b7afe2;\n  border-radius: 0px !important;\n  box-shadow: 0px 1px 4px #a497ea, 0px 2px 17px #ebe8fb;\n  background: #fff;\n}\n.yellow {\n  color: #efa800;\n}\n.horizontal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: 2px solid #efa800;\n  font-size: 14px;\n  font-family: \"open-sans-condensed-bold\";\n  cursor: pointer;\n  background: #fff;\n  height: 30px;\n  line-height: 34px;\n  margin-right: 35px;\n}\n.horizontal > .text {\n  position: relative;\n  color: #322a54;\n  font-family: \"open-sans-condensed-bold\";\n  background-image: linear-gradient(90deg, #dc7896 0%, #dc7896 50%, #efa800 50%, #efa800 100%);\n  background-repeat: repeat;\n  background-size: 200%;\n  background-position: 100% 0;\n  -webkit-background-clip: text;\n  background-clip: text;\n  transition: background-position 300ms;\n}\n.horizontal > .text.pst {\n  top: -6px;\n}\n.horizontal > .text .mat-icon {\n  position: relative;\n  top: 7px;\n  color: #efa800;\n}\n.horizontal::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #efa800;\n  transform-origin: 100% 0;\n  transform: scale3d(0, 1, 1);\n  transition: transform 300ms;\n}\n.horizontal:hover .text {\n  background-position: 0 0;\n  color: #fff;\n}\n.horizontal:hover .text .mat-icon {\n  position: relative;\n  top: 7px;\n  color: #ffffff;\n}\n.horizontal:hover::before {\n  transform-origin: 0 0;\n  transform: scale3d(1, 1, 1);\n}\n.horizontal.align {\n  float: left;\n  margin-right: 15px;\n}\n::ng-deep .ag-theme-alpine .ag-header {\n  background-color: #f0f7f7 !important;\n  font-family: \"open-sans-semibold\";\n}\n::ng-deep .ag-cell-label-container {\n  color: #373737 !important;\n}\n::ng-deep .ag-theme-alpine .ag-icon-filter:before {\n  content: \"\";\n  color: #aedada;\n}\n::ng-deep .ag-theme-alpine .ag-icon-menu:before {\n  color: #ffffff;\n}\n::ng-deep .ag-grid-wrapper {\n  font-family: \"open-sans-regular\";\n}\n::ng-deep .ag-theme-alpine .ag-row {\n  font-family: \"open-sans-regular\";\n  border-width: 0px;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-row {\n  background: #fff;\n  color: #373737;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-row-odd {\n  background: #f0f7f7;\n  color: #373737;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-header-cell, .ag-theme-alpine .ag-header-group-cell {\n  border-color: #323C50;\n}\n::ng-deep .ag-theme-alpine .ag-paging-panel {\n  font-family: \"open-sans-condensed-bold\";\n}\n::ng-deep .ag-theme-alpine {\n  font-family: \"open-sans-regular\";\n}\n::ng-deep .ag-theme-alpine .ag-paging-panel {\n  background: #f0f7f7;\n}\n::ng-deep .mat-tab-label-container {\n  box-shadow: -1px 7px 8px -7px #414242;\n}\n::ng-deep .mat-tab-body-content {\n  padding: 0px !important;\n}\n::ng-deep .mat-tab-body-content {\n  height: 100%;\n  overflow: inherit !important;\n}\n::ng-deep .mat-tab-label {\n  border-radius: 4px 4px 0 0;\n  background: #6bc1c1 !important;\n  margin-right: 5px;\n}\n::ng-deep .mat-tab-label-active {\n  background: #2d7777 !important;\n  color: #fff;\n  border-bottom: 2px solid #2d7777;\n}\n::ng-deep .mat-tab-labels {\n  border-bottom: 2px solid #2d7777;\n  margin-bottom: 0px !important;\n}\n::ng-deep .mat-tab-label .mat-tab-label-content {\n  font-family: \"open-sans-condensed-bold\";\n  text-transform: none;\n  font-size: 16px;\n}\n.primary-btn-gray {\n  border: 1px solid #3d9191 !important;\n  background-color: #6bc1c1 !important;\n}\n.lgb {\n  color: #433683;\n}\n.cpt {\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 13px;\n}\n.cpt1 {\n  font-family: \"open-sans-regular\";\n  font-size: 13px;\n}\ntr:nth-child(even) {\n  background: #ffffff;\n}\ntr:nth-child(odd) {\n  background: #f0f7f7;\n}\n.analysis-preview .table tbody td {\n  font-size: 14px !important;\n  font-family: \"open-sans-regular\" !important;\n  padding-left: 10px !important;\n}\n.wtBg {\n  background: white;\n  margin: 0px;\n}\n::ng-deep .mat-expansion-indicator {\n  position: relative;\n  left: -20px;\n  top: -7px;\n}\n.mm {\n  margin-top: 5px !important;\n}\n.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]), .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]), .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]) {\n  background: white !important;\n}\n.accordions ::ng-deep .mat-expansion-panel-body {\n  padding: 0 0px 0px 0px !important;\n}\n.mt2 {\n  margin-top: 0px !important;\n}\n.mm2 {\n  margin-top: 30px !important;\n}\n.corMap ::ng-deep .highcharts-root {\n  width: 1460px !important;\n}\n.spec {\n  display: inline-block;\n  margin-right: 2px;\n  background: #433683;\n  margin-bottom: 4px;\n  padding: 0 7px;\n  font-size: 12px;\n  color: #fff;\n}\n.tabBtn {\n  position: relative;\n  text-align: right;\n  top: -38px;\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 11px;\n  background: darksalmon;\n  width: 125px;\n  float: right;\n  padding: 5px 10px;\n  text-transform: uppercase;\n  color: #fff;\n  cursor: pointer;\n}\n.tabBtn:hover {\n  background: #c26648;\n}\n.tabBtn2 {\n  position: relative;\n  text-align: right;\n  top: -43px;\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 10px;\n  background: palevioletred;\n  width: 140px;\n  float: right;\n  padding: 5px 10px;\n  text-transform: uppercase;\n  color: #fff;\n  cursor: pointer;\n}\n.tabBtn2:hover {\n  background: #b45675;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JpemVkL3J1bGVzZXQvcnVsZXNldC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92aWpheS9EZXNrdG9wL3dvcmtzcGFjZS9EUS9zcmMvYXBwL2NvbXBvbmVudHMvYXV0aG9yaXplZC9ydWxlc2V0L3J1bGVzZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2I7RUFDRSxpQkFBQTtBRENMO0FDQ0c7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QURDTDtBQ0NHO0VBQ0UsbUJBQUE7QURDTDtBQ0NHO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRENMO0FDQUs7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FERVA7QUNDTztFQUNFLFVBQUE7RUFDQSx5QkFBQTtBRENUO0FDQ087RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FEQ1Q7QUNFSztFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0FEQVA7QUNHRztFQUNFLHlCQUFBO0FEREw7QUNHRztFQUNFLHlCQUFBO0VBQ0EsVUFBQTtBRERMO0FDR0c7RUFDRSx5QkFBQTtBRERMO0FDR0c7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRERMO0FDSUs7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBREZQO0FDR087RUFDRSxtREFBQTtBRERUO0FDR087RUFDRSxXQUFBO0VBQ0EsV0FBQTtBRERUO0FDR087RUFDRSxpQkFBQTtBRERUO0FDS0c7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURITDtBQ01L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QUFBO0FEbUJIO0FDakJBO0VBQ0csa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBRG9CSDtBQ2xCQTtFQUNHLDBCQUFBO0FEcUJIO0FDbkJBO0VBQXFTLDRCQUFBO0FEdUJyUztBQ3BCRztFQUNPLGlDQUFBO0FEdUJWO0FDbEJBO0VBQ0csMEJBQUE7QURxQkg7QUNuQkE7RUFDRywyQkFBQTtBRHNCSDtBQ2xCRztFQUNHLHdCQUFBO0FEcUJOO0FDakJBO0VBQ0cscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURvQkg7QUNqQkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURvQkY7QUNuQkU7RUFDRSxtQkFBQTtBRHFCSjtBQ2pCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRG9CRjtBQ25CRTtFQUNFLG1CQUFBO0FEcUJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JpemVkL3J1bGVzZXQvcnVsZXNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5ob21lLXdyYXBwZXIgLmZsZXgtaXRlbS1oIHtcbiAgbWluLWhlaWdodDogMjIwcHg7XG59XG4uaG9tZS13cmFwcGVyIC5zZWMtdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uaG9tZS13cmFwcGVyIC5zdHJvbmctdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLmhvbWUtd3JhcHBlciAuZmxleC1pdGVtLWgge1xuICB3aWR0aDogMzMlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIHBhZGRpbmc6IDM0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZS13cmFwcGVyIC5mbGV4LWl0ZW0taCAuc2Vjb25kYXJ5LWJ0biB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMjAwbXM7XG4gIGJvcmRlci1jb2xvcjogI2YxZjFmMSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2YxZjFmMTtcbn1cbi5ob21lLXdyYXBwZXIgLmZsZXgtaXRlbS1oOmhvdmVyIC5mbGV4LW92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDIwMG1zO1xufVxuLmhvbWUtd3JhcHBlciAuZmxleC1pdGVtLWg6aG92ZXIgLnNlY29uZGFyeS1idG4ge1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDIwMG1zO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGQwMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDAwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4uaG9tZS13cmFwcGVyIC5mbGV4LWl0ZW0taCAuZmxleC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAxMDBtcztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG4uaG9tZS13cmFwcGVyIC5wcm9mZXNzaW9uYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc3MTQ5O1xufVxuLmhvbWUtd3JhcHBlciAucGVyc29uYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1MTU5O1xuICB3aWR0aDogMzQlO1xufVxuLmhvbWUtd3JhcHBlciAuY29tbXVuaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCNTY1MTtcbn1cbi5ob21lLXdyYXBwZXIgLmxlZnQtcGFubmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyODJweDtcbn1cbi5ob21lLXdyYXBwZXIgLmhvbWUtcGFuZWwgLm1hdC1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggIzAwMDAwMDI5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uaG9tZS13cmFwcGVyIC5ob21lLXBhbmVsIC5tYXQtY2FyZC5mb250IHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1saWdodFwiICFpbXBvcnRhbnQ7XG59XG4uaG9tZS13cmFwcGVyIC5ob21lLXBhbmVsIC5tYXQtY2FyZCAudXNlci1pbWFnZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNjhweDtcbn1cbi5ob21lLXdyYXBwZXIgLmhvbWUtcGFuZWwgLm1hdC1jYXJkIC5wb3N0LXVzZXItaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiA4OHB4O1xufVxuLmhvbWUtd3JhcHBlciAucmVtb3ZlLWJ0biB7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ob21lLXdyYXBwZXIgLnNocmFyZS1wb3N0IHRleHRhcmVhIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmhvbWUtd3JhcHBlciAuc2hyYXJlLXBvc3QgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5ob21lLXdyYXBwZXIgLnNocmFyZS1wb3N0IC5zaGFyZS1wb3N0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzMyMmE1NDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwcHggMTBweCAyMHB4IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9tZS13cmFwcGVyIC5zaHJhcmUtcG9zdCAuc2hhcmUtcG9zdC10aXRsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTEycHg7XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogNTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYTgwMDtcbn1cbi5ob21lLXdyYXBwZXIgLnNocmFyZS1wb3N0IC5zaGFyZS1wb3N0LXRpdGxlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWF4LXdpZHRoOiAxODFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYTgwMDtcbn1cbi5ob21lLXdyYXBwZXIgLnNocmFyZS1wb3N0IC5zaGFyZS1idG4ge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzdCN0M3RDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMnB4IDEwcHggMnB4IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5ob21lLXdyYXBwZXIgLnNocmFyZS1wb3N0IC5zaGFyZS1idG4gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuLmhvbWUtd3JhcHBlciAubXktY29tbXVuaXR5LWJvZHkgLmxpc3Qge1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG59XG4uaG9tZS13cmFwcGVyIC5hbmFseXNpcy1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhvbWUtd3JhcHBlciAuY29sLXNlbGVjdG9yLXdyYXBwZXIge1xuICBtYXJnaW46IDEycHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLmJ4LXNkdyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnJ1bGUtbGlzdC13cnAge1xuICBtYXJnaW46IDA7XG59XG4ucnVsZS1saXN0LXdycCAuY2RlLWZpZWxkcy13cnAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4ucnVsZS1saXN0LXdycCAucnVsZS10aXRsZSB7XG4gIG1hcmdpbjogMTRweCAwIDRweCAwO1xufVxuLnJ1bGUtbGlzdC13cnAgaDUge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbn1cblxuLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWl0ZW0gLmNhdC1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogIzUyNTI1Mjtcbn1cbi5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1pdGVtIC5jYXQtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xufVxuLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWl0ZW0uc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDMzNjgzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDMzNjgzO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG59XG4uY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktaXRlbS5zZWxlY3RlZCAuY2F0LWljb24sIC5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1pdGVtLnNlbGVjdGVkIC5jYXQtdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59XG4uY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktaXRlbTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jYXRlZ29yeS1saXN0LXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNhdGVnb3J5LWxpc3Qtd3JhcHBlciAubGVmdC1hcnJvdyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTBweDtcbn1cbi5jYXRlZ29yeS1saXN0LXdyYXBwZXIgLmNhdGVnb3J5LWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG59XG4uY2F0ZWdvcnktbGlzdC13cmFwcGVyIC5yaWdodC1hcnJvdyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmNhdGVnb3J5LWxpc3Qtd3JhcHBlciBidXR0b24ucHJldi1uZXh0LWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAzNHB4O1xuICBtaW4td2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLnRhYmxlIC5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1yZWd1bGFyXCI7XG59XG4udGFibGUgLmxhYmVsMSB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZWZhODAwO1xuICB3aWR0aDogNDAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50YWJsZSAuZXhwQnRuIHtcbiAgd2lkdGg6IDE4NXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4udGFibGUgaDQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMTBweDsgKi9cbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICAvKiBwYWRkaW5nLXRvcDogNXB4OyAqL1xuICBjb2xvcjogIzMyMmE1NDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG59XG4udGFibGUgaDQgLm1hdC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDZweDtcbn1cblxuLnRhYmxlIHRoIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbn1cblxuLnJ1bGUtdGFibGUge1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdXRsaW5lIG1hdC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBjb2xvcjogIzM3MzczNztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiA0cHggMTBweCAxNHB4IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwLjExZW0gMCAhaW1wb3J0YW50O1xufVxuXG4ubXRvcCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5iZHIge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2U3ZTdlNztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTdlN2U3LCAjZTdlN2U3KTtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuXG46Om5nLWRlZXAubWF0LWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAjMDAwMDAwMjk7XG59XG5cbjo6bmctZGVlcC5tYXQtc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCIgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZXJyb3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1hdC1lcnJvci5ucyB7XG4gIGJhY2tncm91bmQ6ICNGRkJBQkE7XG4gIGNvbG9yOiAjRDgwMDBDO1xuICBwYWRkaW5nOiAzcHggOXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IC05cHg7XG59XG5cbi5tYXItaWNvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucGFkIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY28tYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogLTE2cHggIWltcG9ydGFudDtcbn1cblxuLnByaW1hcnktYnRuLXJlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIiAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50YWJsZSB0Ym9keSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG59XG4udGFibGUgdGJvZHkgdGQuZnQge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWxpZ2h0XCIgIWltcG9ydGFudDtcbn1cblxuLnByaW1hcnktYnRuLWdyYXkgLm1hdC1pY29uLnBsIHtcbiAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgYm9yZGVyLWNvbG9yOiAjZTdlN2U3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlLXRleHQge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIiAhaW1wb3J0YW50O1xufVxuXG4udHBsIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRhYmxlIHRib2R5IHRkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRhYmxlIHRkLnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucnVsZS1kZXRhaWxzLWluZm8ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDMycHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvcnJlbGF0aW9uLWluZm8ge1xuICBtYXJnaW46IDAgMCAwIDIycHg7XG4gIHdpZHRoOiA0MTBweDtcbn1cblxuLmVkaXQtbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICM0MzM2ODM7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybXVsYS1wcmV2aWV3IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NiY2JjYjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlOGY4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZm9ybXVsYS1wcmV2aWV3Lm5vYiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5mb3JtdWxhLXByZXZpZXcgLm9wZXJhdG9yIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZvcm11bGEtcHJldmlldyAub3BlcmF0b3IuYWxjYXAxIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZvcm11bGEtcHJldmlldyAuY2RlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZvcm11bGEtcHJldmlldyAuY2RlLmFsY2FwIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnByZXZpZXcgLmZvcm11bGEtcHJldmlldyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYnV0dG9uM2Qge1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24zZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNDg0ODQ4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idG5CbHVlR3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjMDBBRTY4O1xufVxuLmJ0bkJsdWVHcmVlbi5hZGRpY28ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmJ0bkJsdWVHcmVlbi5hZGRpY28gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuTGlnaHRCbHVlIHtcbiAgYmFja2dyb3VuZDogIzdkNmVjYztcbn1cbi5idG5MaWdodEJsdWUuYWRkUmVmIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYnRuTGlnaHRCbHVlLmFkZFJlZiAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYnRuTGlnaHRCbHVlLnRkQnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uYnRuTGlnaHRCbHVlLnRkQnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yLjVweDtcbiAgcmlnaHQ6IDhweDtcbn1cbi5idG5MaWdodEJsdWUudGRCdG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmJ0bkxpZ2h0Qmx1ZS5jb21wQnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDE0NXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uYnRuTGlnaHRCbHVlLmNvbXBCdG4gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbiAgcmlnaHQ6IDBweDtcbn1cbi5idG5MaWdodEJsdWUuc3ZCdG4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMzdweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uYnRuTGlnaHRCbHVlLnN2QnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0bk9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNlOTFiMDA7XG59XG4uYnRuT3JhbmdlLnJlZGljbyB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5idG5PcmFuZ2UucmVkaWNvIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0blB1cnBsZSB7XG4gIGJhY2tncm91bmQ6ICNBNzQ5ODI7XG59XG4uYnRuUHVycGxlLnByZXZpZXcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4uYnRuUHVycGxlLmViY2tCdG4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5idG5QdXJwbGUuZWJja0J0biAubWF0LWljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAzcHg7XG59XG4uYnRuUHVycGxlLmFkZFJlZiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmJ0blB1cnBsZS5hZGRSZWYgLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vKiBGQURFICovXG4uYnRuRmFkZS5idG5CbHVlR3JlZW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjE4MjVCO1xufVxuXG4uYnRuRmFkZS5idG5MaWdodEJsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA5N2Y2O1xufVxuXG4uYnRuRmFkZS5idG5PcmFuZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkY4RTAwO1xufVxuXG4uYnRuRmFkZS5idG5QdXJwbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNkQxODRCO1xufVxuXG4vKiAzRCAqL1xuLmJ0bkJsdWVHcmVlbi5idG5QdXNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMwMDcxNDQ7XG59XG5cbi5idG5MaWdodEJsdWUuYnRuUHVzaCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMzIyYTU0O1xufVxuXG4uYnRuT3JhbmdlLmJ0blB1c2gge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzhjMTgwODtcbn1cblxuLmJ0blB1cnBsZS5idG5QdXNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM2RDE4NEI7XG59XG5cbi5idG5QdXNoOmhvdmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuQmx1ZUdyZWVuLmJ0blB1c2g6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzAwNzE0NDtcbn1cblxuLmJ0bkxpZ2h0Qmx1ZS5idG5QdXNoOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMxRTgxODU7XG59XG5cbi5idG5PcmFuZ2UuYnRuUHVzaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjQTY2NjE1O1xufVxuXG4uYnRuUHVycGxlLmJ0blB1c2g6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzZEMTg0Qjtcbn1cblxuLmFkZC1yZW1vdmUtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjczOSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtc2VtaWJvbGRcIjtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuOjpuZy1kZWVwIC5hZy1jZWxsLWxhYmVsLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1pY29uLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EklwiO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLWljb24tbWVudTpiZWZvcmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuOjpuZy1kZWVwIC5hZy1ncmlkLXdyYXBwZXIge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiO1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93IHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93IHtcbiAgYmFja2dyb3VuZDogIzMyM0M1MDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93LW9kZCB7XG4gIGJhY2tncm91bmQ6ICMxRjI3Mzk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLWhlYWRlci1jZWxsLCAuYWctdGhlbWUtYWxwaW5lIC5hZy1oZWFkZXItZ3JvdXAtY2VsbCB7XG4gIGJvcmRlci1jb2xvcjogIzMyM0M1MDtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLXBhZ2luZy1wYW5lbCB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1yZWd1bGFyXCI7XG59XG5cbi5hY3QtYnRuLXdyYXBwZXIxIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wYWQtdHAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50cGxhYmVsIHtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgYmFja2dyb3VuZDogI2ViZThmYjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kOiAjZWVlOGY4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNDc4Yztcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM0NzhjO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzMyMmE1NDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYmJlODtcbn1cblxuLm1hdC1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3YWZlMjtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNHB4ICNhNDk3ZWEsIDBweCAycHggMTdweCAjZWJlOGZiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ueWVsbG93IHtcbiAgY29sb3I6ICNlZmE4MDA7XG59XG5cbi5ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2VmYTgwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG59XG4uaG9yaXpvbnRhbCA+IC50ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzMyMmE1NDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2RjNzg5NiAwJSwgI2RjNzg5NiA1MCUsICNlZmE4MDAgNTAlLCAjZWZhODAwIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAzMDBtcztcbn1cbi5ob3Jpem9udGFsID4gLnRleHQucHN0IHtcbiAgdG9wOiAtNnB4O1xufVxuLmhvcml6b250YWwgPiAudGV4dCAubWF0LWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4O1xuICBjb2xvcjogI2VmYTgwMDtcbn1cbi5ob3Jpem9udGFsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2VmYTgwMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcbn1cbi5ob3Jpem9udGFsOmhvdmVyIC50ZXh0IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ob3Jpem9udGFsOmhvdmVyIC50ZXh0IC5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA3cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmhvcml6b250YWw6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xufVxuLmhvcml6b250YWwuYWxpZ24ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjdmNyAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtc2VtaWJvbGRcIjtcbn1cblxuOjpuZy1kZWVwIC5hZy1jZWxsLWxhYmVsLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjMzczNzM3ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1pY29uLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EklwiO1xuICBjb2xvcjogI2FlZGFkYTtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLWljb24tbWVudTpiZWZvcmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuOjpuZy1kZWVwIC5hZy1ncmlkLXdyYXBwZXIge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiO1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93IHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMzNzM3Mzc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93LW9kZCB7XG4gIGJhY2tncm91bmQ6ICNmMGY3Zjc7XG4gIGNvbG9yOiAjMzczNzM3O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLWhlYWRlci1jZWxsLCAuYWctdGhlbWUtYWxwaW5lIC5hZy1oZWFkZXItZ3JvdXAtY2VsbCB7XG4gIGJvcmRlci1jb2xvcjogIzMyM0M1MDtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLXBhZ2luZy1wYW5lbCB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1yZWd1bGFyXCI7XG59XG5cbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1wYWdpbmctcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZjBmN2Y3O1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtY29udGFpbmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCA4cHggLTdweCAjNDE0MjQyO1xuICAtbW96LWJveC1zaGFkb3c6IC0xcHggN3B4IDhweCAtN3B4ICM0MTQyNDI7XG4gIGJveC1zaGFkb3c6IC0xcHggN3B4IDhweCAtN3B4ICM0MTQyNDI7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIGJhY2tncm91bmQ6ICM2YmMxYzEgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMmQ3Nzc3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzJkNzc3Nztcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVscyB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmQ3Nzc3O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnByaW1hcnktYnRuLWdyYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2Q5MTkxICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YmMxYzEgIWltcG9ydGFudDtcbn1cblxuLmxnYiB7XG4gIGNvbG9yOiAjNDMzNjgzO1xufVxuXG4uY3B0IHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNwdDEge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2YwZjdmNztcbn1cblxuLmFuYWx5c2lzLXByZXZpZXcgLnRhYmxlIHRib2R5IHRkIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1yZWd1bGFyXCIgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi53dEJnIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMjBweDtcbiAgdG9wOiAtN3B4O1xufVxuXG4ubW0ge1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSksIC5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSksIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5hY2NvcmRpb25zIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubXQyIHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tbTIge1xuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb3JNYXAgOjpuZy1kZWVwIC5oaWdoY2hhcnRzLXJvb3Qge1xuICB3aWR0aDogMTQ2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zcGVjIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzQzMzY4MztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwYWRkaW5nOiAwIDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRhYkJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRvcDogLTM4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBmb250LXNpemU6IDExcHg7XG4gIGJhY2tncm91bmQ6IGRhcmtzYWxtb247XG4gIHdpZHRoOiAxMjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWJCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYzI2NjQ4O1xufVxuXG4udGFiQnRuMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRvcDogLTQzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHBhbGV2aW9sZXRyZWQ7XG4gIHdpZHRoOiAxNDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWJCdG4yOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2I0NTY3NTtcbn0iLCIuaG9tZS13cmFwcGVyIHtcclxuICAgLmZsZXgtaXRlbS1oIHtcclxuICAgICBtaW4taGVpZ2h0OiAyMjBweDtcclxuICAgfVxyXG4gICAuc2VjLXRpdGxlIHtcclxuICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgfVxyXG4gICAuc3Ryb25nLXRpdGxlIHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICB9XHJcbiAgIC5mbGV4LWl0ZW0taCB7XHJcbiAgICAgd2lkdGg6IDMzJTtcclxuICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgIGJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgIHBhZGRpbmc6IDM0cHg7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAuc2Vjb25kYXJ5LWJ0biB7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAyMDBtcztcclxuICAgICAgIGJvcmRlci1jb2xvcjogI2YxZjFmMSAhaW1wb3J0YW50O1xyXG4gICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgfVxyXG4gICAgICY6aG92ZXIge1xyXG4gICAgICAgLmZsZXgtb3ZlcmxheSB7XHJcbiAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMjAwbXM7XHJcbiAgICAgICB9XHJcbiAgICAgICAuc2Vjb25kYXJ5LWJ0biB7XHJcbiAgICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMjAwbXM7XHJcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZDAwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgLmZsZXgtb3ZlcmxheSB7XHJcbiAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAxMDBtcztcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICByaWdodDogMDtcclxuICAgICAgIHRvcDogMDtcclxuICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIC5wcm9mZXNzaW9uYWwge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzcxNDk7XHJcbiAgIH1cclxuICAgLnBlcnNvbmFsIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1MTU5O1xyXG4gICAgIHdpZHRoOiAzNCU7XHJcbiAgIH1cclxuICAgLmNvbW11bml0eSB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVCNTY1MTtcclxuICAgfVxyXG4gICAubGVmdC1wYW5uZWwge1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIHdpZHRoOiAyODJweDtcclxuICAgfVxyXG4gICAuaG9tZS1wYW5lbCB7XHJcbiAgICAgLm1hdC1jYXJkIHtcclxuICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMDAwMDAyOTtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcclxuICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAmLmZvbnR7XHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1saWdodCchaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgICAgLnVzZXItaW1hZ2Uge1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgd2lkdGg6IDY4cHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAucG9zdC11c2VyLWluZm8ge1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogODhweDtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuICAgLnJlbW92ZS1idG4ge1xyXG4gICAgIGhlaWdodDogMzJweDtcclxuICAgICBsaW5lLWhlaWdodDogMjlweCAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgfVxyXG4gICAuc2hyYXJlLXBvc3Qge1xyXG4gICAgIHRleHRhcmVhIHtcclxuICAgICAgIGhlaWdodDogODBweDtcclxuICAgICB9XHJcbiAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgfVxyXG4gICAgIC5zaGFyZS1wb3N0LXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzMyMmE1NDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbWFyZ2luOiAwcHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgYm90dG9tOiAtMTJweDtcclxuICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZhODAwO1xyXG4gICAgICAgfVxyXG4gICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgYm90dG9tOiAtMTBweDtcclxuICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgIG1heC13aWR0aDogMTgxcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmE4MDA7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgLnNoYXJlLWJ0biB7XHJcbiAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgY29sb3I6ICM3QjdDN0Q7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgcGFkZGluZzogMnB4IDEwcHggMnB4IDJweDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gICAubXktY29tbXVuaXR5LWJvZHkgLmxpc3Qge1xyXG4gICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICAgfSBcclxuICAgLmFuYWx5c2lzLWNhcmQge1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG4gICAuY29sLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgIG1hcmdpbjogMTJweDtcclxuICAgfVxyXG4gfVxyXG4gLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAmLmJ4LXNkd3tcclxuICAgICAgYm94LXNoYWRvdzpub25lIWltcG9ydGFudDtcclxuICAgfVxyXG4gfVxyXG4gLnJ1bGUtbGlzdC13cnAge1xyXG4gICBtYXJnaW46IDA7XHJcbiAgIC5jZGUtZmllbGRzLXdycCB7XHJcbiAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIC5ydWxlLXRpdGxlIHtcclxuICAgICBtYXJnaW46IDE0cHggMCA0cHggMDtcclxuICAgfVxyXG4gICBoNXtcclxuICAgICAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gLmNhdGVnb3J5LWxpc3Qge1xyXG4gICAuY2F0ZWdvcnktaXRlbSB7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC4xMik7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgIC5jYXQtaWNvbiB7XHJcbiAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICBjb2xvcjogIzUyNTI1MjtcclxuICAgICB9XHJcbiAgICAgLmNhdC10aXRsZSB7XHJcbiAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgICAgfVxyXG4gICAgICY6aG92ZXIge1xyXG4gICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggMXB4IHJnYmEoMCwwLDAsLjE3KTtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgfVxyXG4gICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQzMzY4MztcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzM2ODM7XHJcbiAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IDFweCByZ2JhKDAsMCwwLC4xNyk7XHJcbiAgICAgICAuY2F0LWljb24sIC5jYXQtdGl0bGUge1xyXG4gICAgICAgICAvL2NvbG9yOiAjNTliZmZmO1xyXG4gICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgICY6Zm9jdXMge1xyXG4gICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICB9XHJcbiAgIH1cclxuIH1cclxuIC5jYXRlZ29yeS1saXN0LXdyYXBwZXIge1xyXG4gICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAubGVmdC1hcnJvdyB7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgd2lkdGg6IDUwcHg7XHJcbiAgIH0gIFxyXG4gICAuY2F0ZWdvcnktbGlzdCB7XHJcbiAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgIH1cclxuICAgLnJpZ2h0LWFycm93IHtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICB3aWR0aDogNTBweDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgIH1cclxuICAgYnV0dG9uIHtcclxuICAgICAmLnByZXYtbmV4dC1idG4ge1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICB3aWR0aDogMzRweDtcclxuICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgIH1cclxuIH1cclxuIC50YWJsZSB7XHJcbiAgIC5sYWJlbCB7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJztcclxuICAgfVxyXG4gICAubGFiZWwxIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICNlZmE4MDA7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmV4cEJ0biB7XHJcbiAgICAgICB3aWR0aDoxODVweDtcclxuICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgaDQge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAvL21hcmdpbi10b3A6IDE3cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIC8qIHBhZGRpbmctYm90dG9tOiAxMHB4OyAqL1xyXG4gICAgICAvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7ICovXHJcbiAgICAgIC8qIHBhZGRpbmctdG9wOiA1cHg7ICovXHJcbiAgICAgIGNvbG9yOiAjMzIyYTU0O1xyXG4gICAgICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuIH1cclxuIC50YWJsZSB0aHtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtcmVndWxhcic7XHJcbiB9XHJcbi8vICAudGFibGUgdGR7XHJcbi8vICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLXJlZ3VsYXInO1xyXG4vLyAgICBjb2xvcjogIzAwMDAwMDtcclxuLy8gIH1cclxuIC5ydWxlLXRhYmxlIHtcclxuICAgLy93aWR0aDogNzgwcHg7XHJcbiAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjY2NjO1xyXG4gICBtYXJnaW4tYm90dG9tOjBweCFpbXBvcnRhbnQ7XHJcbiAgXHJcbiB9XHJcbiAub3V0bGluZSBtYXQtbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICAgY29sb3I6ICMzNzM3Mzc7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiB9XHJcbiAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICBib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuIH1cclxuIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6MXB4O1xyXG4gfVxyXG4gOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHggMTRweCAwcHghaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCchaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gICAgbWFyZ2luOiAuMTFlbSAwIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm10b3B7XHJcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmJkcntcclxuICAgICBoZWlnaHQ6IDFweDtcclxuICAgICBiYWNrZ3JvdW5kOiNlN2U3ZTc7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xyXG4gICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjZTdlN2U3LCNlN2U3ZTcpO1xyXG4gICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XHJcbiAgfVxyXG4gXHJcbiAgOjpuZy1kZWVwLm1hdC1jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggIzAwMDAwMDI5O1xyXG4gIH1cclxuICA6Om5nLWRlZXAubWF0LXNlbGVjdHtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwLm1hdC1vcHRpb24ge1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJyFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gXHJcbiAgLm1hdC1lcnJvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICYubnN7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkJBQkE7XHJcbiAgICAgIGNvbG9yOiAjRDgwMDBDO1xyXG4gICAgICBwYWRkaW5nOiAzcHggOXB4O1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC00cHg7XHJcbiAgICAgIGxlZnQ6IC05cHg7XHJcbiAgICB9XHJcbiB9XHJcbiAubWFyLWljbyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiB9XHJcbiAucGFke1xyXG4gICAgcGFkZGluZzowIDE1cHghaW1wb3J0YW50O1xyXG4gfVxyXG4gLmljby1hbGlnbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2cHghaW1wb3J0YW50O1xyXG4gfVxyXG4gLnByaW1hcnktYnRuLXJlZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCchaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuIH1cclxuIC50YWJsZSB0Ym9keSB0ZHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJyFpbXBvcnRhbnQ7XHJcbiAgICAmLmZ0e1xyXG4gICAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtbGlnaHQnIWltcG9ydGFudDtcclxuICAgIH0gICAgXHJcbiB9XHJcblxyXG5cclxuIC5wcmltYXJ5LWJ0bi1ncmF5IHtcclxuICAgLm1hdC1pY29uIHtcclxuICAgICAgJi5wbHtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuIH0gXHJcblxyXG4gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgIGJvcmRlci1jb2xvcjogI2U3ZTdlNyFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4IWltcG9ydGFudDtcclxuIH1cclxuIDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0e1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCchaW1wb3J0YW50O1xyXG4gfVxyXG4gLnRwbHtcclxuICAgIHBhZGRpbmctbGVmdDowcHghaW1wb3J0YW50O1xyXG4gfVxyXG4gLnRhYmxlIHRib2R5IHRkIHtcclxuICAgIHBhZGRpbmctbGVmdDowcHghaW1wb3J0YW50O1xyXG4gfVxyXG4gLnRhYmxlIHRkLnN0cm9uZyB7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gfVxyXG4ucnVsZS1kZXRhaWxzLWluZm8ge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MzJweCk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmNvcnJlbGF0aW9uLWluZm8ge1xyXG4gIG1hcmdpbjogMCAwIDAgMjJweDtcclxuICB3aWR0aDogNDEwcHg7XHJcbn1cclxuLmVkaXQtbGluayB7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIGJhY2tncm91bmQ6ICM0MzM2ODM7XHJcbiAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZm9ybXVsYS1wcmV2aWV3IHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NiY2JjYjtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYmFja2dyb3VuZDogI2VlZThmODtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxcHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAmLm5vYntcclxuICAgYmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5vcGVyYXRvciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAmLmFsY2FwMXtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2RlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgJi5hbGNhcHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1mYW1pbHk6XCJvcGVuLXNhbnMtcmVndWxhclwiO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucHJldmlldyAuZm9ybXVsYS1wcmV2aWV3IHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLy8gYnV0dG9uc1xyXG5cclxuLmJ1dHRvbjNkIHtcclxuICAgLy9kaXNwbGF5OiBibG9jaztcclxuICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIC8vZmxvYXQ6IGxlZnQ7XHJcbiAgIHdpZHRoOiAyMDBweDtcclxuICAgcGFkZGluZzogMDtcclxuICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICBjb2xvcjogI0ZGRjtcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICB0cmFuc2l0aW9uOiBhbGwgMC4ycyA7XHJcbiAgIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiIWltcG9ydGFudDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAmOmRpc2FibGVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICB9XHJcbiB9XHJcbiBcclxuIC5idG5CbHVlR3JlZW4ge1xyXG4gICBiYWNrZ3JvdW5kOiAjMDBBRTY4O1xyXG4gICAmLmFkZGljb3tcclxuICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gfVxyXG4gXHJcbiAuYnRuTGlnaHRCbHVlIHtcclxuICAgYmFja2dyb3VuZDogIzdkNmVjYztcclxuICAgJi5hZGRSZWZ7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgICYudGRCdG57XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAubWF0LWljb257XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICB0b3A6IC0yLjVweDtcclxuICAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgICAmOmRpc2FibGVke1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzQ4NDg0ODtcclxuICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgJi5jb21wQnRue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogMTQ1cHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiAgICYuc3ZCdG57XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBcclxuIH1cclxuIFxyXG4gLmJ0bk9yYW5nZSB7XHJcbiAgIGJhY2tncm91bmQ6ICNlOTFiMDA7XHJcbiAgICYucmVkaWNve1xyXG4gICAgICB3aWR0aDogMjZweDtcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiB9XHJcbiBcclxuIC5idG5QdXJwbGUge1xyXG4gICBiYWNrZ3JvdW5kOiAjQTc0OTgyO1xyXG4gICAmLnByZXZpZXd7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgfVxyXG4gICAmLmViY2tCdG57XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAubWF0LWljb257XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgICYuYWRkUmVme1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gfVxyXG4gXHJcbiAvKiBGQURFICovXHJcbiAuYnRuRmFkZS5idG5CbHVlR3JlZW46aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kOiAjMjE4MjVCO1xyXG4gfVxyXG4gXHJcbiAuYnRuRmFkZS5idG5MaWdodEJsdWU6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kOiAjMDA5N2Y2O1xyXG4gfVxyXG4gXHJcbiAuYnRuRmFkZS5idG5PcmFuZ2U6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kOiAjRkY4RTAwO1xyXG4gfVxyXG4gXHJcbiAuYnRuRmFkZS5idG5QdXJwbGU6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kOiAjNkQxODRCO1xyXG4gfVxyXG4gXHJcbiAvKiAzRCAqL1xyXG4gLmJ0bkJsdWVHcmVlbi5idG5QdXNoIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMwMDcxNDQ7XHJcbiB9XHJcbiBcclxuIC5idG5MaWdodEJsdWUuYnRuUHVzaCB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMzIyYTU0O1xyXG4gfVxyXG4gXHJcbiAuYnRuT3JhbmdlLmJ0blB1c2gge1xyXG4gICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzhjMTgwODtcclxuIH1cclxuIFxyXG4gLmJ0blB1cnBsZS5idG5QdXNoIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM2RDE4NEI7XHJcbiB9XHJcbiBcclxuIC5idG5QdXNoOmhvdmVyIHtcclxuICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gfVxyXG4gXHJcbiAuYnRuQmx1ZUdyZWVuLmJ0blB1c2g6aG92ZXIge1xyXG4gICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzAwNzE0NDtcclxuIH1cclxuIFxyXG4gLmJ0bkxpZ2h0Qmx1ZS5idG5QdXNoOmhvdmVyIHtcclxuICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMxRTgxODU7XHJcbiB9XHJcbiBcclxuIC5idG5PcmFuZ2UuYnRuUHVzaDpob3ZlciB7XHJcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjQTY2NjE1O1xyXG4gfVxyXG4gXHJcbiAuYnRuUHVycGxlLmJ0blB1c2g6aG92ZXIge1xyXG4gICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzZEMTg0QjtcclxuIH1cclxuIC5hZGQtcmVtb3ZlLWJ1dHRvbiB7XHJcbiAgIG1pbi13aWR0aDogMzBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLWhlYWRlcntcclxuICAgYmFja2dyb3VuZC1jb2xvcjojMUYyNzM5IWltcG9ydGFudDtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtc2VtaWJvbGQnO1xyXG4gICBib3JkZXItYm90dG9tOiAwOyAgXHJcbn1cclxuOjpuZy1kZWVwIC5hZy1jZWxsLWxhYmVsLWNvbnRhaW5lcntcclxuICAgY29sb3I6ICNmZmZmZmYhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1pY29uLWZpbHRlcjpiZWZvcmUge1xyXG4gICBjb250ZW50OiBcIlxcZjExMlwiO1xyXG4gICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLWljb24tbWVudTpiZWZvcmUge1xyXG4gICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1ncmlkLXdyYXBwZXJ7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLXJlZ3VsYXInO1xyXG59XHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1yb3d7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLXJlZ3VsYXInO1xyXG4gICBib3JkZXItd2lkdGg6MHB4O1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbiAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG59XHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1yb3d7XHJcbiAgIGJhY2tncm91bmQ6IzMyM0M1MDtcclxuICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxuICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLXJvdy1vZGR7XHJcbiAgIGJhY2tncm91bmQ6IzFGMjczOTtcclxuICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxuICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1oZWFkZXItY2VsbCwgLmFnLXRoZW1lLWFscGluZSAuYWctaGVhZGVyLWdyb3VwLWNlbGwge1xyXG4gICBib3JkZXItY29sb3I6IzMyM0M1MCA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1wYWdpbmctcGFuZWx7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxufVxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZXtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtcmVndWxhcic7XHJcbn1cclxuLmFjdC1idG4td3JhcHBlcjF7IFxyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ucGFkLXRwe1xyXG4gICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xyXG4gICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4udHBsYWJlbHtcclxuICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1zdGVwcGVyLWhvcml6b250YWx7XHJcbiAgIGJhY2tncm91bmQ6ICNlYmU4ZmI7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICBiYWNrZ3JvdW5kOiAjZWVlOGY4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM1MzQ3OGM7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWR7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM1MzQ3OGM7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMzIyYTU0O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAubWF0LXN0ZXAtaWNvbntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYmJlODtcclxufVxyXG4ubWF0LWNhcmR7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2FmZTI7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAvL2JhY2tncm91bmQ6ICNlMWQ3ZmM7XHJcbiAgIGJveC1zaGFkb3c6IDBweCAxcHggNHB4ICNhNDk3ZWEsIFxyXG4gICAwcHggMnB4IDE3cHggI2ViZThmYjtcclxuICAgYmFja2dyb3VuZDojZmZmO1xyXG59XHJcbi55ZWxsb3d7IGNvbG9yIDojZWZhODAwfVxyXG4uaG9yaXpvbnRhbCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIC8vIHdpZHRoOiA0MDBweDtcclxuICAgLy8gaGVpZ2h0OiAxMjBweDtcclxuICAgLy8gbWFyZ2luOiAyMHB4O1xyXG4gICBib3JkZXI6IDJweCBzb2xpZCAjZWZhODAwO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICBoZWlnaHQ6IDMwcHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgIFxyXG4gICA+IC50ZXh0IHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgY29sb3I6ICMzMjJhNTQ7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgIDkwZGVnLFxyXG4gICAgICAgcmdiYSgyMjAsIDEyMCwgMTUwLCAxKSAwJSxcclxuICAgICAgIHJnYmEoMjIwLCAxMjAsIDE1MCwgMSkgNTAlLFxyXG4gICAgICAgI2VmYTgwMCA1MCUsXHJcbiAgICAgICAjZWZhODAwIDEwMCVcclxuICAgICApO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcclxuICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAzMDBtcztcclxuICAgICAmLnBzdHtcclxuICAgICAgdG9wOiAtNnB4O1xyXG4gICAgIH1cclxuICAgICAubWF0LWljb257XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA3cHg7XHJcbiAgICAgIGNvbG9yOiAjZWZhODAwO1xyXG4gICAgIH1cclxuICAgfVxyXG4gICBcclxuICAgJjo6YmVmb3JlIHtcclxuICAgICBjb250ZW50OiAnJztcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiAwO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQ6ICNlZmE4MDA7XHJcbiAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xyXG4gICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcclxuICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XHJcbiAgIH1cclxuICAgXHJcbiAgICY6aG92ZXIge1xyXG4gICAgIC50ZXh0IHtcclxuICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgIH1cclxuICAgJi5hbGlnbntcclxuICAgICAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgIH1cclxuIH1cclxuXHJcbiA6Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaGVhZGVye1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGY3ZjchaW1wb3J0YW50O1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1zZW1pYm9sZCc7XHJcbiAgIC8vYm9yZGVyLWJvdHRvbTogMDsgIFxyXG59XHJcbjo6bmctZGVlcCAuYWctY2VsbC1sYWJlbC1jb250YWluZXJ7XHJcbiAgIGNvbG9yOiAjMzczNzM3IWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaWNvbi1maWx0ZXI6YmVmb3JlIHtcclxuICAgY29udGVudDogXCJcXGYxMTJcIjtcclxuICAgY29sb3I6ICNhZWRhZGE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1pY29uLW1lbnU6YmVmb3JlIHtcclxuICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctZ3JpZC13cmFwcGVye1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJztcclxufVxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93e1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJztcclxuICAgYm9yZGVyLXdpZHRoOjBweDtcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG4gICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxufVxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93e1xyXG4gICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgIGNvbG9yOiAjMzczNzM3O1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbiAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG59XHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1yb3ctb2Rke1xyXG4gICBiYWNrZ3JvdW5kOiNmMGY3Zjc7XHJcbiAgIGNvbG9yOiAjMzczNzM3O1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbiAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaGVhZGVyLWNlbGwsIC5hZy10aGVtZS1hbHBpbmUgLmFnLWhlYWRlci1ncm91cC1jZWxsIHtcclxuICAgYm9yZGVyLWNvbG9yOiMzMjNDNTAgO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcGFnaW5nLXBhbmVse1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmV7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLXJlZ3VsYXInO1xyXG59XHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1wYWdpbmctcGFuZWx7XHJcbiAgIGJhY2tncm91bmQ6ICNmMGY3Zjc7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciB7XHJcbiAgIC8vYmFja2dyb3VuZDogI2YwZjdmNztcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCA4cHggLTdweCByZ2JhKDY1LDY2LDY2LDEpO1xyXG4gICAgIC1tb3otYm94LXNoYWRvdzogLTFweCA3cHggOHB4IC03cHggcmdiYSg2NSw2Niw2NiwxKTtcclxuICAgICBib3gtc2hhZG93OiAtMXB4IDdweCA4cHggLTdweCByZ2JhKDY1LDY2LDY2LDEpOyAgICBcclxuIH1cclxuIDo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4gICBwYWRkaW5nOjBweCFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBpbmhlcml0IWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVse1xyXG4gICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgYmFja2dyb3VuZDogIzZiYzFjMSFpbXBvcnRhbnQ7XHJcbiAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICBiYWNrZ3JvdW5kOiAjMmQ3Nzc3IWltcG9ydGFudDtcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIC8vb3BhY2l0eTogMTtcclxuICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyZDc3Nzc7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVscyB7XHJcbiAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmQ3Nzc3O1xyXG4gICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudHtcclxuICAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJ0bi1ncmF5IHtcclxuICAgYm9yZGVyOiAxcHggc29saWQgIzNkOTE5MSAhaW1wb3J0YW50O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmJjMWMxICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxnYntcclxuICAgY29sb3I6ICM0MzM2ODM7XHJcbn1cclxuLmNwdHtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmNwdDF7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLXJlZ3VsYXInO1xyXG4gICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjZmZmZmZmIH1cclxudHI6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNmMGY3Zjd9XHJcbi5hbmFseXNpcy1wcmV2aWV3IC50YWJsZSB0Ym9keSB0ZHtcclxuICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtcmVndWxhcichaW1wb3J0YW50O1xyXG4gICBwYWRkaW5nLWxlZnQ6IDEwcHghaW1wb3J0YW50O1xyXG59XHJcbi53dEJne1xyXG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcntcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBsZWZ0OiAtMjBweDtcclxuICAgdG9wOiAtN3B4O1xyXG59XHJcbi5tbXtcclxuICAgbWFyZ2luLXRvcDogNXB4IWltcG9ydGFudDtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwgLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3Zlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pe2JhY2tncm91bmQgOiB3aGl0ZSAhaW1wb3J0YW50fVxyXG5cclxuLmFjY29yZGlvbnN7XHJcbiAgIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMHB4IDBweCAwcHghaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbn1cclxuXHJcblxyXG4ubXQye1xyXG4gICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubW0ye1xyXG4gICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb3JNYXAge1xyXG4gICA6Om5nLWRlZXAgLmhpZ2hjaGFydHMtcm9vdHtcclxuICAgICAgd2lkdGg6IDE0NjBweCFpbXBvcnRhbnQ7XHJcbiAgIH1cclxufVxyXG5cclxuLnNwZWN7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgIGJhY2tncm91bmQ6ICM0MzM2ODM7XHJcbiAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgcGFkZGluZzogMCA3cHg7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50YWJCdG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHRvcDogLTM4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBiYWNrZ3JvdW5kOiBkYXJrc2FsbW9uO1xyXG4gIHdpZHRoOiAxMjVweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigxOTQsIDEwMiwgNzIpO1xyXG4gIH1cclxufVxyXG5cclxuLnRhYkJ0bjJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHRvcDogLTQzcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBwYWxldmlvbGV0cmVkO1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigxODAsIDg2LCAxMTcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/authorized/ruleset/ruleset.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/authorized/ruleset/ruleset.component.ts ***!
    \********************************************************************/

  /*! exports provided: RulesetComponent */

  /***/
  function srcAppComponentsAuthorizedRulesetRulesetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RulesetComponent", function () {
      return RulesetComponent;
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


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/http-service.service */
    "./src/app/services/http-service.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/message.service */
    "./src/app/services/message.service.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _shared_formula_editor_formula_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/formula-editor/formula-editor.component */
    "./src/app/shared/formula-editor/formula-editor.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
    /**
     * @title Basic expansion panel
     */


    var RulesetComponent = /*#__PURE__*/function () {
      function RulesetComponent(fb, dialog, route, http, router, activatedRoute, authGuardService, messageService) {
        var _this = this;

        _classCallCheck(this, RulesetComponent);

        this.fb = fb;
        this.dialog = dialog;
        this.route = route;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authGuardService = authGuardService;
        this.messageService = messageService;
        this.isLinear = true;
        this.user = {};
        this.professional = {};
        this.userId = '';
        this.isUserLoggedIn = false;
        this.isEditMode = false;
        this.appConfig = {};
        this.isCurrentUser = false;
        this.isLoading = false;
        this.loaderMsg = '';
        this.isSourceUploaded = false;
        this.analysis = {};
        this.fileTypeErr = false;
        this.uniqueName = false;
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
          nav: false,
          items: 6,
          responsive: {
            0: {
              items: 3,
              center: true,
              loop: true
            },
            740: {
              items: 5,
              center: false,
              loop: false
            }
          }
        };
        this.stepIndex = 0;
        this.availableColumns = [];
        this.selectedColumns = [];
        this.availableReferenceColumns = [];
        this.selectedReferenceColumns = [];
        this.selectedRuleColumn = '';
        this.sourceList = [];
        this.selectedSource = {};
        this.rulesList = [];
        this.showCDECar = false;
        this.analyseData = [];
        this.sourceId = '';
        this.rulesetId = '';
        this.cdeStatistics = {}; // Rule Dropdowns

        this.ruleType = 'dataType';
        this.ruleOperator = '';
        this.ruleValue = '';
        this.ruleFormat = '';
        this.ruleDimenstion = '';
        this.ruleTypeList = [{
          label: 'Data Type',
          value: 'DataType'
        }, {
          label: 'Length',
          value: 'Length'
        }, {
          label: 'Value',
          value: 'Value'
        }, {
          label: 'Reference CDE',
          value: 'ReferenceCDE'
        }, {
          label: 'Formula',
          value: 'Formula'
        }];
        this.ruleOperatorList = {
          DataType: [{
            label: 'Should be',
            value: 'Shouldbe'
          }],
          ReferenceCDE: [{
            label: 'Should be',
            value: 'Shouldbe'
          }],
          Length: [{
            label: '=',
            value: 'euqualto'
          }, {
            label: '>=',
            value: 'greaterthanequalto'
          }, {
            label: '<=',
            value: 'lessthanequalto'
          }, {
            label: '>',
            value: 'greaterthan'
          }, {
            label: '<',
            value: 'lessthan'
          }],
          Formula: [{
            label: 'Should be',
            value: 'Shouldbe'
          }, {
            label: '=',
            value: 'euqualto'
          }, {
            label: '>=',
            value: 'greaterthanequalto'
          }, {
            label: '<=',
            value: 'lessthanequalto'
          }, {
            label: '>',
            value: 'greaterthan'
          }, {
            label: '<',
            value: 'lessthan'
          }],
          Value: [{
            label: '=',
            value: 'euqualto'
          }, {
            label: '>=',
            value: 'greaterthanequalto'
          }, {
            label: '<=',
            value: 'lessthanequalto'
          }, {
            label: '>',
            value: 'greaterthan'
          }, {
            label: '<',
            value: 'lessthan'
          }, {
            label: 'Should be',
            value: 'Shouldbe'
          }, {
            label: 'Should not include',
            value: 'shouldnotinclude'
          }, {
            label: 'Same as',
            value: 'sameas'
          }, {
            label: 'Should be in',
            value: 'shouldbein'
          }, {
            label: 'Reference data',
            value: 'referencedata'
          }, {
            label: 'Element',
            value: 'element'
          }]
        };
        this.ruleValueList = {
          DataType: [{
            label: 'Alpha',
            value: 'alpha'
          }, {
            label: 'Alphanumeric',
            value: 'Alphanumeric'
          }, {
            label: 'Integer',
            value: 'Integer'
          }, {
            label: 'Numeric',
            value: 'Numeric'
          }, {
            label: 'Date',
            value: 'Date'
          }, {
            label: 'DateTime',
            value: 'DateTime'
          }],
          Value: [{
            label: 'Special Characters',
            value: 'SpecialCharacters'
          }, {
            label: 'Amount',
            value: 'Amount'
          }],
          ReferenceCDE: []
        };
        this.ruleFormatList = {
          date: [{
            label: 'YYYYMMDD',
            value: 'YYYYMMDD'
          }, {
            label: 'DD-MMM-YYYY',
            value: 'DDMMMYYYY'
          }, {
            label: 'DD-MMM-YY',
            value: 'DD-MMM-YY'
          }],
          datetime: [{
            label: 'YYYYMMDD HH:MM',
            value: 'YYYYMMDD'
          }, {
            label: 'DD-MMM-YYYY HH:MM',
            value: 'DDMMMYYYY'
          }, {
            label: 'DD-MMM-YY HH:MM',
            value: 'DD-MMM-YY'
          }],
          amount: [{
            label: '2 Decimals',
            value: '2 Decimals'
          }, {
            label: '3 Decimals',
            value: '3 Decimals'
          }]
        };
        this.ruleDimenstionList = [{
          label: 'Accuracy',
          value: 'Accuracy'
        }, {
          label: 'Consistency',
          value: 'Consistency'
        }, {
          label: 'Integrity',
          value: 'Integrity'
        }, {
          label: 'Uniqueness',
          value: 'Uniqueness'
        }, {
          label: 'Validity',
          value: 'Validity'
        }];
        this.isPreviewLoaded = false;
        this.isPreviewLoading = false;
        this.defaultColDefs = {
          sortable: true,
          filter: true,
          minWidth: 180,
          resizable: true
        };
        this.rowData = [];
        this.columnDefs = [];
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_11__().format('YYYY-MM-DD');
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_11__(moment__WEBPACK_IMPORTED_MODULE_11__().add(6, 'months')).format('YYYY-MM-DD');
        this.rulesetNames = [];
        this.visibleIndex = -1;
        this.appConfig = _app_config__WEBPACK_IMPORTED_MODULE_9__["appConfig"];
        this.route.queryParams.subscribe(function (params) {
          _this.sourceId = params.sourceId;
          _this.mode = params.mode;
          _this.rulesetId = params.rulesetId;

          if (!params.sourceId) {
            localStorage.removeItem('analysis');
          }
        });
      } //   Analysis View
      // - By Column Selection (Single Column, Multiple Column)
      // - Chart View
      // - Chart Drill View
      // - Highliht settings
      // - Ruleset - start and end
      // - Reference CDE (REF1 - COL_NAME)


      _createClass(RulesetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
          this.user = this.authGuardService.getLoggedInUserDetails();
          this.userId = this.user.user_id;
          this.getAllSources();

          if (localStorage.getItem('isInitLoad') && !this.user.emailVerified && !this.user.phonenoVerified) {// this.showVerifyEmailPhoneDialog();
          }

          localStorage.removeItem('isInitLoad');
          this.columnsForm = this.fb.group({
            columns: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            sourceColumns: [''],
            refernceColumns: [[]]
          });
          var analysis = this.messageService.getAnalysis(); // const targetDate = moment(moment().add(60, 'days')).format('YYYY-MM-DD');

          this.analysisForm = this.fb.group({
            sourceId: [{
              value: analysis.sourceId || '',
              disabled: true
            }],
            name: [{
              value: analysis.source.sourceDataName || '',
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)]],
            sourceFilename: [analysis.source.sourceFileName || ''],
            description: [{
              value: analysis.source.sourceDataDescription,
              disabled: true
            } || ''],
            sourcepath: [analysis.source.templateSourcePath || ''],
            rulesetName: [analysis.rulesetName || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)]],
            sourceCSV: [''],
            startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            referenceCSV: this.fb.array([]),
            columnRules: this.fb.array([])
          });
          this.sourceNameText = analysis.source.sourceDataName; // console.log(this.sourceNameText);

          if (analysis) {
            this.selectedSource = analysis;

            if (this.mode === 'edit') {
              this.rulesList = analysis.rules.ruleset;
            }

            this.selectedColumns = analysis.selectedColumns;
            this.availableColumns = analysis.columns.filter(function (column) {
              var colFound = analysis.selectedColumns.filter(function (col) {
                return column.title === col.title;
              });
              return !colFound.length;
            });
            this.analysisForm.controls.startDate.setValue(analysis.rules.startDate);
            this.analysisForm.controls.endDate.setValue(analysis.rules.endDate);
            this.columnsForm.controls.columns.setValue(this.selectedColumns);
            this.initRulesFormArray();
          }

          var referenceCSV = this.analysisForm.controls.referenceCSV;
          var referenceData = analysis.reference ? analysis.reference : [];

          if (this.mode === 'edit') {
            var refSelectedColumns = analysis.rules.refSelectedColumns.map(function (column, index) {
              _this2.ruleValueList.ReferenceCDE.push({
                label: column,
                value: column
              });

              return {
                id: index + 1,
                title: column
              };
            });
            this.selectedReferenceColumns = refSelectedColumns;
          }

          referenceData.map(function (refData) {
            referenceCSV.push(_this2.intiFormArrays('referenceData', refData));
          });

          if (this.mode === 'edit') {
            this.columnsForm.controls.refernceColumns.setValue(this.selectedReferenceColumns);
          }

          this.minDate = moment__WEBPACK_IMPORTED_MODULE_11__().format('YYYY-MM-DDT[18:30:00.000Z]');
          this.maxDate = moment__WEBPACK_IMPORTED_MODULE_11__(moment__WEBPACK_IMPORTED_MODULE_11__().add(6, 'months')).format('YYYY-MM-DDT[18:30:00.000Z]');
          this.uploadedDate = analysis.settings.uploadDate;
          this.rulesetNames = analysis.rulesetNames ? analysis.rulesetNames : [];

          if (this.mode === 'add') {
            var ruleId = this.rulesetNames.length ? '-' + analysis.rulesetNames.length : '';
            this.analysisForm.controls.rulesetName.setValue(this.sourceNameText + '-ruleset' + ruleId);
            this.analysisForm.controls.startDate.setValue(this.minDate);
            this.analysisForm.controls.endDate.setValue(this.maxDate);
          }

          this.loadSourcePreview();
        }
      }, {
        key: "intiFormArrays",
        value: function intiFormArrays(field) {
          var _this3 = this;

          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (field === 'referenceData') {
            if (!value.availableRefColumns) {
              value.availableRefColumns = [];
            }

            var refAvailableColumns = value.availableRefColumns.map(function (column, index) {
              return {
                id: index + 1,
                title: column
              };
            });
            this.availableReferenceColumns = refAvailableColumns ? refAvailableColumns : [];
            console.log(this.availableReferenceColumns);
            return this.fb.group({
              id: [value.id],
              referenceDataName: [{
                value: value.referenceDataName,
                disabled: true
              }],
              referenceDataDescription: [{
                value: value.referenceDataDescription,
                disabled: true
              }],
              referenceColumns: [refAvailableColumns],
              referencePath: [{
                value: value.referenceFileName,
                disabled: true
              }]
            });
          }

          if (field === 'columnRules') {
            var rulesGroup = value.rules.map(function (rule) {
              return _this3.fb.group({
                rule: [rule.rule],
                operator: [rule.operator],
                value: [rule.value],
                format: [rule.format],
                dimension: [rule.dimension]
              });
            });
            return this.fb.group({
              column: [value.column],
              rules: this.fb.array(rulesGroup)
            });
          }
        }
      }, {
        key: "initRulesFormArray",
        value: function initRulesFormArray() {
          var _this4 = this;

          // TODO: Start Needs to update the logic here.
          var selectedSourceColumns = this.columnsForm.value.sourceColumns;

          if (selectedSourceColumns.length) {} // TODO: End Needs to update the logic here.


          var selectedRuleColumns = this.afControls.columnRules;
          this.rulesList.map(function (rule) {
            selectedRuleColumns.push(_this4.intiFormArrays('columnRules', rule));
          });
        }
      }, {
        key: "addRules",
        value: function addRules(columns, arrayName) {
          var fbRules = columns.get(arrayName);
          fbRules.push(this.fb.group({
            rule: [''],
            operator: [''],
            value: [''],
            format: [''],
            dimension: ['']
          }));
        }
      }, {
        key: "removeRules",
        value: function removeRules(columns, arrayName, index) {
          var fbRules = columns.get(arrayName);
          fbRules.removeAt(index);
        }
      }, {
        key: "addFormItem",
        value: function addFormItem(arrayName) {
          var fbArray = this.analysisForm.get(arrayName);
          fbArray.push(this.intiFormArrays(arrayName));
        }
      }, {
        key: "removeFormItem",
        value: function removeFormItem(arrayName, index) {
          var fbArray = this.analysisForm.get(arrayName);
          fbArray.removeAt(index);
        }
      }, {
        key: "getAllSources",
        value: function getAllSources() {
          var _this5 = this;

          this.isLoading = true;
          this.loaderMsg = 'Loading Sources...';
          this.http.getSources().subscribe(function (result) {
            _this5.sourceList = result && result.Analysis ? result.Analysis : [];
            _this5.isLoading = false;
          }, function (error) {
            _this5.isLoading = false;
          });
        }
      }, {
        key: "onSourceChange",
        value: function onSourceChange(e) {
          this.selectedSource = this.sourceList.filter(function (item) {
            return item.sourceId === e.value;
          })[0];
          this.availableColumns = this.selectedSource.source.availableColumns.map(function (column, index) {
            return {
              id: index + 1,
              title: column
            };
          });
          this.afControls.sourcepath.setValue(this.selectedSource.source.templateSourcePath);
          this.afControls.sourceFilename.setValue(this.selectedSource.source.sourceFileName);
          this.afControls.name.setValue(this.selectedSource.source.sourceDataName);
          this.afControls.rulesetName.setValue(this.selectedSource.source.sourceDataName);
        }
      }, {
        key: "onUploadCompleted",
        value: function onUploadCompleted(e, formControl) {
          formControl.controls.path.setValue(e.path);
        }
      }, {
        key: "getColumnRules",
        value: function getColumnRules() {
          var _this6 = this;

          this.isLoading = true;
          this.loaderMsg = 'Fetching column rules...';
          var columns = [];
          var selectedColumns = this.columnsForm.value.columns;
          this.selectedColumns = _toConsumableArray(selectedColumns); // Remove the column from ruleset if the column are removed form the list

          var updatedRulesList = [];
          selectedColumns.map(function (col) {
            _this6.rulesList.map(function (rule) {
              if (col.title === rule.column) {
                updatedRulesList.push(rule);
              }
            });
          });
          this.rulesList = [].concat(updatedRulesList);
          selectedColumns.map(function (col) {
            // Add only newly selected columns
            var ruleColumn = _this6.rulesList.filter(function (rule) {
              return col.title === rule.column;
            });

            if (!ruleColumn.length) {
              columns.push(col.title);
            }
          });
          var payload = {
            selectedColumns: columns,
            refSelectedColumns: this.columnsForm.controls.refernceColumns.value.map(function (col) {
              return col.title;
            }),
            sourcepath: this.afControls.sourcepath.value
          };

          if (!payload.selectedColumns.length && !payload.refSelectedColumns.length) {
            this.isLoading = false;

            if (this.rulesList.length) {
              var firstRule = this.rulesList[0];
              this.selectedRuleColumn = firstRule.column;
              this.cdeStatistics = firstRule.statistics && firstRule.statistics.length ? firstRule.statistics[0] : {};
              this.initFormulaEditor(this.rulesList);
            }

            return;
          }

          if (payload.refSelectedColumns && payload.refSelectedColumns.length) {
            this.ruleValueList.ReferenceCDE = [];
            payload.refSelectedColumns.map(function (column) {
              _this6.ruleValueList.ReferenceCDE.push({
                label: column,
                value: column
              });
            });
          } // Clear the columns array


          this.afControls.columnRules = this.fb.array([]);
          this.http.getColumnsRules(payload).subscribe(function (result) {
            _this6.isLoading = false;
            _this6.rulesList = _this6.rulesList.concat(result);

            if (_this6.rulesList.length) {
              var _firstRule = _this6.rulesList[0];
              _this6.selectedRuleColumn = _firstRule.column;
              _this6.cdeStatistics = _firstRule.statistics && _firstRule.statistics.length ? _firstRule.statistics[0] : {};
            }

            _this6.initFormulaEditor(_this6.rulesList);

            _this6.initRulesFormArray();
          }, function (error) {
            _this6.isLoading = false;
          });
        }
      }, {
        key: "generatePreview",
        value: function generatePreview() {
          this.analysis = {
            sourceName: this.afControls.name.value,
            description: this.afControls.description.value,
            rulesetName: this.afControls.rulesetName.value,
            columns: this.availableColumns,
            selectedColumns: this.selectedColumns,
            rules: this.afControls.columnRules.value
          };
          var startDate = this.afControls.startDate.value;
          var endDate = this.afControls.endDate.value;

          if (!startDate || !endDate) {
            alert('Please choose the ruleset start and end date.');
            return;
          }

          if (!this.analysis.sourceName || !this.analysis.rulesetName) {
            return;
          }

          if (this.rulesetNames.includes(this.analysis.rulesetName) && this.mode !== 'edit') {
            alert('The ruleset name already found.');
            return;
          }

          if (moment__WEBPACK_IMPORTED_MODULE_11__(startDate).diff(moment__WEBPACK_IMPORTED_MODULE_11__(endDate), 'days') >= 0) {
            alert('Ruleset end date should be less than start date.');
            return;
          }

          this.gotoStepper(3);
        }
      }, {
        key: "createEditRuleset",
        value: function createEditRuleset() {
          var _this7 = this;

          this.isLoading = true;
          this.loaderMsg = 'Saving Ruleset...'; // Update the rules list with the statistics

          var ruleLists = this.rulesList.map(function (rule, index) {
            return Object.assign({}, rule, _this7.afControls.columnRules.value[index]);
          });
          var ruleset = {
            sourceId: this.selectedSource.sourceId,
            rulesetId: this.rulesetId ? this.rulesetId : undefined,
            sourcepath: this.afControls.sourcepath.value,
            selectedColumns: this.selectedColumns.map(function (col) {
              return col.title;
            }),
            refSelectedColumns: this.columnsForm.controls.refernceColumns.value.map(function (col) {
              return col.title;
            }),
            rulesetName: this.afControls.rulesetName.value,
            ruleset: ruleLists,
            startDate: this.afControls.startDate.value,
            endDate: this.afControls.endDate.value
          };
          this.http.createEditRuleset(ruleset, this.rulesetId ? 'put' : 'post').subscribe(function (result) {
            _this7.isLoading = false;

            _this7.router.navigate(["auth/dashboard"]);
          }, function (error) {
            _this7.isLoading = false;
          });
        }
      }, {
        key: "showFormulaEditor",
        value: function showFormulaEditor(rule) {
          var selectedColumns = [];
          this.selectedColumns.map(function (column) {
            selectedColumns.push(column.title);
          });
          var dialogRef = this.dialog.open(_shared_formula_editor_formula_editor_component__WEBPACK_IMPORTED_MODULE_10__["FormulaEditorComponent"], {
            width: '700px',
            data: {
              columns: selectedColumns
            }
          });
          dialogRef.afterClosed().subscribe(function (data) {
            if (data.action === 'ok' && data.formula) {
              rule.controls.value.setValue(data.formula);
            }
          });
        }
      }, {
        key: "gotoStepper",
        value: function gotoStepper(index) {
          var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          this.stepIndex = index;
        }
      }, {
        key: "stepperSelectionChange",
        value: function stepperSelectionChange(event) {
          this.stepIndex = event.selectedIndex;
        }
      }, {
        key: "stepperAnimationDone",
        value: function stepperAnimationDone() {
          if (this.stepIndex === 2) {
            this.showCDECar = true;
          } else {
            this.showCDECar = false;
          }
        }
      }, {
        key: "gotoRuleColumn",
        value: function gotoRuleColumn(rule) {
          this.selectedRuleColumn = rule.column;
          this.cdeStatistics = rule.statistics && rule.statistics.length ? rule.statistics[0] : {};
        }
      }, {
        key: "owlInitialized",
        value: function owlInitialized() {}
      }, {
        key: "initFormulaEditor",
        value: function initFormulaEditor(ruleList) {
          console.log(ruleList);
        }
      }, {
        key: "loadSourcePreview",
        value: function loadSourcePreview() {
          var _this8 = this;

          this.isPreviewLoaded = false;
          this.isPreviewLoading = true;
          this.columnDefs = [];
          this.rowData = [];
          this.http.getSourcePreview(this.selectedSource.sourceId).subscribe(function (res) {
            var details = res.sourcePreview ? res.sourcePreview : {};
            Object.keys(details).map(function (key, index) {
              _this8.rowData.push(Object.assign({}, details[key]));
            });

            if (_this8.rowData.length) {
              Object.keys(_this8.rowData[0]).map(function (key, index) {
                _this8.columnDefs.push(Object.assign({
                  field: key
                }, _this8.defaultColDefs));
              });
            }

            _this8.isPreviewLoaded = true;
            _this8.isPreviewLoading = false;
          }, function (error) {
            _this8.isPreviewLoaded = false;
            _this8.isPreviewLoading = false;
          });
        }
      }, {
        key: "showEditDetails",
        value: function showEditDetails(ind) {
          if (this.visibleIndex === ind) {
            this.visibleIndex = -1;
          } else {
            this.visibleIndex = ind;
          }
        }
      }, {
        key: "afControls",
        get: function get() {
          return this.analysisForm.controls;
        }
      }]);

      return RulesetComponent;
    }();

    RulesetComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]
      }, {
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('owlCar', {
      "static": false
    })], RulesetComponent.prototype, "owlCar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], {
      "static": true
    })], RulesetComponent.prototype, "accordion", void 0);
    RulesetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ruleset',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ruleset.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorized/ruleset/ruleset.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ruleset.component.scss */
      "./src/app/components/authorized/ruleset/ruleset.component.scss"))["default"]]
    })], RulesetComponent);
    /***/
  },

  /***/
  "./src/app/components/authorized/ruleset/ruleset.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/authorized/ruleset/ruleset.module.ts ***!
    \*****************************************************************/

  /*! exports provided: RulesetModule */

  /***/
  function srcAppComponentsAuthorizedRulesetRulesetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RulesetModule", function () {
      return RulesetModule;
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


    var _authorized_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../authorized.module */
    "./src/app/components/authorized/authorized.module.ts");
    /* harmony import */


    var _ruleset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ruleset-routing.module */
    "./src/app/components/authorized/ruleset/ruleset-routing.module.ts");
    /* harmony import */


    var _ruleset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ruleset.component */
    "./src/app/components/authorized/ruleset/ruleset.component.ts");

    var RulesetModule = function RulesetModule() {
      _classCallCheck(this, RulesetModule);
    };

    RulesetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_ruleset_component__WEBPACK_IMPORTED_MODULE_6__["RulesetComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ruleset_routing_module__WEBPACK_IMPORTED_MODULE_5__["RulesetRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _authorized_module__WEBPACK_IMPORTED_MODULE_4__["AuthorizedModule"]]
    })], RulesetModule);
    /***/
  }
}]);
//# sourceMappingURL=ruleset-ruleset-module-es5.js.map