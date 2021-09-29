(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ruleset-ruleset-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorized/ruleset/ruleset.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorized/ruleset/ruleset.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"page-body home-bodys pad-tp\">\r\n   <div class=\"container\">\r\n     <div class=\"home-wrapper\">\r\n       <!-- Community Pages -->\r\n       \r\n       <div class=\"clearfix my-community-body\">\r\n         <!-- <div class=\"left-pannel\">\r\n           <app-account-details></app-account-details>\r\n           <app-recent-deals></app-recent-deals>\r\n         </div> -->\r\n         <div class=\"home-panel\">\r\n           <app-progress-bar [message]=\"loaderMsg\" class=\"page\" *ngIf=\"isLoading\"></app-progress-bar>\r\n           <form [formGroup]=\"analysisForm\">\r\n             <mat-horizontal-stepper [linear]=\"isLinear\" #stepper \r\n               [selectedIndex]=\"stepIndex\" \r\n               (selectionChange)=\"stepperSelectionChange($event)\"\r\n               (animationDone)=\"stepperAnimationDone()\">\r\n               <mat-step>\r\n                   <ng-template matStepLabel>Source & Refernce Data</ng-template>\r\n                   <mat-card class=\"border no-rounded list shrare-post\">\r\n                     <h1 class=\"share-post-title\">Source & Refernce<span class=\"yellow\"> Data</span></h1>\r\n                       <div class=\"form-continer\">\r\n                         <div class=\"list flex-containers flex-start wrap\">\r\n                           <div class=\"list-item-3 outline\">\r\n                             <mat-label>Source Data<span class=\"red\">*</span></mat-label>\r\n                             <mat-form-field appearance=\"fill\">\r\n                               <mat-select formControlName=\"sourceId\" (selectionChange)=\"onSourceChange($event)\">\r\n                                 <mat-option *ngFor=\"let item of sourceList\" [value]=\"item.sourceId\">{{item.source.sourceFileName}}</mat-option>\r\n                               </mat-select>\r\n                             </mat-form-field>\r\n                           </div>\r\n                             <div class=\"list-item-4 outline\">\r\n                               <mat-label>Source Name<span class=\"red\">*</span></mat-label>\r\n                               <mat-form-field appearance=\"fill\">\r\n                                 <input matInput placeholder=\"Source Name\" formControlName=\"name\" maxlength=\"50\" autocomplete=\"off\"/>\r\n                               </mat-form-field>\r\n                             </div>\r\n                             <div class=\"list-item-3 outline\">\r\n                               <mat-label>Source Description</mat-label>\r\n                               <mat-form-field appearance=\"fill\">\r\n                                 <input matInput placeholder=\"Source Description\" formControlName=\"description\" maxlength=\"250\" autocomplete=\"off\"/>\r\n                               </mat-form-field>\r\n                             </div>\r\n                             <div class=\"list-item-5 add-remove-button\"></div>\r\n                         </div>\r\n                       </div>\r\n                       <div class=\"bdr\"></div>\r\n                       <div class=\"list\">\r\n                         <div class=\"flex-containers space-between\" \r\n                           formArrayName=\"referenceCSV\" *ngFor=\"let reference of analysisForm.get('referenceCSV')['controls']; index as i; last as isLast; first as isFirst\">\r\n                           <ng-container [formGroupName]=\"i\">\r\n                             <div class=\"list flex-containers flex-start\">\r\n                               <div class=\"list-item-2 outline\">\r\n                                 <mat-label>Reference Data (csv) #{{i+1}}</mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                   <input matInput placeholder=\"Reference File\" formControlName=\"referencePath\" maxlength=\"50\" autocomplete=\"off\"/>\r\n                                 </mat-form-field>\r\n                               </div>\r\n                               <div class=\"list-item-2 outline\">\r\n                                 <mat-label>Reference Name<span class=\"red\">*</span></mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                   <input matInput placeholder=\"Reference Name\" formControlName=\"referenceDataName\" maxlength=\"50\" autocomplete=\"off\"/>\r\n                                 </mat-form-field>\r\n                               </div>\r\n                               <div class=\"list-item-1 outline\">\r\n                                 <mat-label>Source Description</mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                   <input matInput placeholder=\"Source Description\" formControlName=\"referenceDataDescription\" maxlength=\"250\" autocomplete=\"off\"/>\r\n                                 </mat-form-field>\r\n                               </div>\r\n     \r\n                               <div class=\"list-item-0 add-remove-button\">\r\n                                 <button type=\"button\" class=\"button3d  btnBlueGreen addico\" (click)=\"addFormItem('referenceCSV')\" *ngIf=\"isLast\">\r\n                                   <mat-icon>add</mat-icon>\r\n                                 </button>\r\n                                 </div>\r\n                                 <div class=\"list-item-0 add-remove-button\">\r\n                                 <button type=\"button\" class=\"button3d  btnOrange redico\" (click)=\"removeFormItem('referenceCSV', i)\" *ngIf=\"!isFirst || !isLast\">\r\n                                   <mat-icon>delete_outline</mat-icon>\r\n                                 </button>\r\n                               </div>\r\n                             </div>\r\n                           </ng-container>\r\n                         </div>\r\n                       </div>\r\n \r\n                     <div class=\"act-btn-wrapper\">\r\n                         <button mat-stroked-button class=\"button3d  btnLightBlue tdBtn\"\r\n                         [disabled]=\"!afControls.name.value || fileTypeErr\"\r\n                         (click)=\"gotoStepper(1, 'CSV')\">Next <mat-icon>navigate_next</mat-icon></button>\r\n                     </div>\r\n                   </mat-card>\r\n                 </mat-step>\r\n \r\n                 <mat-step>\r\n                   <ng-template matStepLabel>Critical Data Elements</ng-template>\r\n                   <mat-card class=\"border no-rounded list shrare-post\">\r\n                     <!-- <h1 class=\"share-post-title\">Critical<span class=\"yellow\"> Data Elements</span></h1> -->\r\n                     <mat-tab-group mat-align-tabs=\"start\"  animationDuration=\"0ms\">\r\n                        <mat-tab label=\"Critical Source Elements\">\r\n                           <div class=\"col-selector-wrapper\">\r\n                              <app-column-selector \r\n                                [availableColumnsLabel]=\"'Available Columns'\"\r\n                                [selectedColumnsLabel]=\"'Selected Columns'\"\r\n                                [availableColumns]=\"availableColumns\"\r\n                                [selectedColumns]=\"selectedColumns\"\r\n                                [formControl]=\"columnsForm.controls.columns\"\r\n                              >\r\n                              </app-column-selector>\r\n                           </div>\r\n                        </mat-tab>\r\n                        <mat-tab label=\"Reference Source Element\">\r\n                           <div class=\"col-selector-wrapper\">\r\n                              <app-column-selector \r\n                                [availableColumnsLabel]=\"'Available Reference Columns'\"\r\n                                [selectedColumnsLabel]=\"'Selected Reference Columns'\"\r\n                                [availableColumns]=\"availableReferenceColumns\"\r\n                                [selectedColumns]=\"selectedReferenceColumns\"\r\n                                [formControl]=\"columnsForm.controls.refernceColumns\"\r\n                              >\r\n                              </app-column-selector>\r\n                            </div>\r\n                        </mat-tab>\r\n                     </mat-tab-group>\r\n                     \r\n                     \r\n                     <!-- <br/>\r\n                     <h1 class=\"share-post-title\">Define<span class=\"yellow\"> Reference Data Element</span></h1> -->\r\n                     \r\n                     \r\n                     <div class=\"list flex-containers flex-start\">\r\n                        <div class=\"list-item-2 outline\">\r\n                           <button mat-stroked-button class=\"button3d  btnPurple ebckBtn\" (click)=\"gotoStepper(0)\"><mat-icon>keyboard_arrow_left</mat-icon> Back</button>\r\n                           </div>\r\n                           <div class=\"list-item-2 outline act-btn-wrapper1\">\r\n                              <button mat-stroked-button class=\"button3d  btnLightBlue tdBtn\" \r\n                              [disabled]=\"columnsForm.controls.columns.value && !columnsForm.controls.columns.value.length\"\r\n                              (click)=\"gotoStepper(2); getColumnRules();\">Next  <mat-icon>navigate_next</mat-icon></button>\r\n                           </div>\r\n                        </div>\r\n                       \r\n                       \r\n                    \r\n                   </mat-card>\r\n                 </mat-step>\r\n                 \r\n                 <mat-step>\r\n                   <ng-template matStepLabel>Rule Definition</ng-template>\r\n                   <mat-tab-group mat-align-tabs=\"start\"  animationDuration=\"0ms\" class=\"mm2\" #tabGroup>\r\n                     <mat-tab label=\"Rule Definition\">\r\n                        <div class=\"list wrap mt2\">\r\n                           <mat-card class=\"border no-rounded shrare-post\">\r\n                           <h1 class=\"share-post-title\">Rule<span class=\"yellow\"> Definition</span></h1>\r\n                           <div class=\"list flex-containers flex-start wrap cde-fields-wrp\">\r\n                              <div class=\"list-item-3 outline\">\r\n                                 <mat-label>Ruleset Name<span class=\"yellow\">*</span></mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                 <input matInput placeholder=\"Ruleset Name\" formControlName=\"rulesetName\" maxlength=\"50\" autocomplete=\"off\" />\r\n                                 </mat-form-field>\r\n                              </div>\r\n                              <div class=\"list-item-3 outline\">\r\n                                <div class=\"date-style\">\r\n                                 <mat-label>Start Date<span class=\"red\">*</span></mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                 <mat-label class=\"tplabel\">Start Date</mat-label>\r\n                                 <input matInput [matDatepicker]=\"frompicker\" [min]=\"uploadedDate\" formControlName=\"startDate\" autocomplete=\"off\" (click)=\"frompicker.open()\">\r\n                                 <mat-datepicker-toggle matSuffix [for]=\"frompicker\"></mat-datepicker-toggle>\r\n                                 <mat-datepicker #frompicker></mat-datepicker>\r\n                                 <mat-error class=\"ns\" *ngIf=\"!afControls.startDate.value\">Please select a Start Date</mat-error>\r\n                                 </mat-form-field>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"list-item-3 outline\">\r\n                                <div class=\"date-style\">\r\n                                 <mat-label>End Date<span class=\"red\">*</span></mat-label>\r\n                                 <mat-form-field appearance=\"fill\">\r\n                                 <mat-label class=\"tplabel\">End Date</mat-label>\r\n                                 <input matInput [matDatepicker]=\"topicker\" [min]=\"uploadedDate\" formControlName=\"endDate\" autocomplete=\"off\" (click)=\"topicker.open()\">\r\n                                 <mat-datepicker-toggle matSuffix [for]=\"topicker\"></mat-datepicker-toggle>\r\n                                 <mat-datepicker #topicker></mat-datepicker>\r\n                                 <mat-error class=\"ns\" *ngIf=\"!afControls.endDate.value\">Please select a End Date</mat-error>\r\n                                 </mat-form-field>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n\r\n                           <div class=\"rules-loading-message\" *ngIf=\"isRulesLoading\">\r\n                              Loading {{rulesList.length}} of {{selectedColumnsCopy.length + rulesList.length}} Complated\r\n                              <mat-spinner diameter=\"20\"></mat-spinner>\r\n                          </div>\r\n\r\n                           <div class=\"category-list-wrapper clearfix\" *ngIf=\"showCDECar && !isLoading\">\r\n                              <div class=\"left-arrow\">\r\n                                 <button mat-stroked-button class=\"gv-secondary-btn primary-btn-gray prev-next-btn\" (click)=\"owlCar.prev()\">\r\n                                 <mat-icon class=\"pl\">keyboard_arrow_left</mat-icon>\r\n                                 </button>\r\n                              </div>\r\n                              <div class=\"category-list\" #carouselHolder>\r\n                                 <owl-carousel-o [options]=\"OwlCategoryOptions\" #owlCar (initialized)=\"owlInitialized()\">\r\n                                 <!-- Carousel Items -->\r\n                                 <ng-container *ngFor=\"let rule of rulesList\">\r\n                                    <ng-template carouselSlide [id]=\"rule.column\">\r\n                                       <div class=\"category-item\" [class.selected]=\"rule.column === selectedRuleColumn\" (tap)=\"gotoRuleColumn(rule)\">\r\n                                       <h3 class=\"cat-title\">{{rule.column ? rule.column : '-'}}</h3>\r\n                                       </div>\r\n                                    </ng-template>\r\n                                 </ng-container>\r\n                                 </owl-carousel-o>\r\n                              </div>\r\n                              <div class=\"right-arrow\">\r\n                                 <button mat-stroked-button class=\"gv-secondary-btn primary-btn-gray prev-next-btn\" (click)=\"owlCar.next()\">\r\n                                 <mat-icon class=\"pl\">keyboard_arrow_right</mat-icon>\r\n                                 </button>\r\n                              </div>\r\n                           </div>\r\n                           \r\n                           <mat-expansion-panel expanded hideToggle disabled  \r\n                              *ngFor=\"let columns of afControls.columnRules.controls; index as i;\" \r\n                              formArrayName=\"columnRules\"\r\n                              [hidden]=\"columns['controls'].column.value !== selectedRuleColumn\">\r\n                              <ng-container [formGroupName]=\"i\">\r\n                                 <mat-expansion-panel-header>\r\n                                 <mat-panel-title>\r\n                                    {{columns['controls'].column.value}}\r\n                                 </mat-panel-title>\r\n                                 </mat-expansion-panel-header>\r\n                                 <div class=\"rule-step-wrapper rule-list-wrp\"\r\n                                 *ngFor=\"let rule of columns.get('rules')['controls']; index as j; last as isLast; first as isFirst\" formArrayName=\"rules\">\r\n                                 <ng-container [formGroupName]=\"j\">\r\n                                    <h5 class=\"rule-title\">Rule #{{j+1}}</h5>\r\n                                    <div class=\"rule-selection-wrapper\">\r\n                                       <div class=\"list flex-containers flex-start wrap cde-fields-wrp\">\r\n                                       <div class=\"list-item-5 outline\">\r\n                                          <app-rule-selector \r\n                                              [showAddItem]=\"false\"\r\n                                              [ruleItems]=\"ruleTypeList\" \r\n                                              [initValue]=\"rule.get('rule').value\" \r\n                                              (selectionChange)=\"rule.get('rule').setValue($event.value)\"\r\n                                          ></app-rule-selector>\r\n                                       </div>\r\n                                       <div class=\"list-item-5 outline\">\r\n                                          <app-rule-selector \r\n                                              [showAddItem]=\"false\"\r\n                                              [ruleItems]=\"getOperatorList(rule.get('rule').value,columns['controls'].datatype.value)\" \r\n                                              [initValue]=\"rule.get('operator').value\" \r\n                                              (selectionChange)=\"rule.get('operator').setValue($event.value)\"\r\n                                          ></app-rule-selector>\r\n                                       </div>\r\n                                       <div class=\"list-item-5 outline\" *ngIf=\"rule.get('rule').value === 'ReferenceCDE'\">\r\n                                        <mat-form-field appearance=\"fill\">\r\n                                          <mat-select formControlName=\"value\"\r\n                                            (change)=\"rule.get('value').setValue($event.value)\">\r\n                                            <mat-option *ngFor=\"let item of columnsForm.controls.refernceColumns.value\"\r\n                                              [value]=\"item.title\">{{item.title}}</mat-option>\r\n                                          </mat-select>\r\n                                        </mat-form-field>\r\n                                      </div>\r\n                                      <div class=\"list-item-5 outline\"\r\n                                        *ngIf=\"['Formula','ReferenceCDE'].indexOf(rule.get('rule').value)==-1\">\r\n                                        <mat-form-field appearance=\"fill\" *ngIf=\"!ruleValueList[rule.get('rule').value]\">\r\n                                          <input matInput formControlName=\"value\"\r\n                                            [type]=\"getType(rule.get('rule').value,columns['controls'].datatype.value)\"\r\n                                            [min]=\"getMinVal(rule.get('rule').value)\"\r\n                                            oninput=\"(this.min == 0) && (validity.valid||(value=''))\">\r\n                                        </mat-form-field>\r\n                                        <app-rule-selector *ngIf=\"ruleValueList[rule.get('rule').value]\"\r\n                                          [showAddItem]=\"false\" [ruleItems]=\"ruleValueList[rule.get('rule').value]\"\r\n                                          [initValue]=\"rule.get('value').value\"\r\n                                          (selectionChange)=\"rule.get('value').setValue($event.value)\">\r\n                                        </app-rule-selector>\r\n                                      </div>\r\n                                       <div class=\"list-item-5 outline\" *ngIf=\"rule.get('rule').value === 'Formula'\">\r\n                                          <mat-form-field appearance=\"fill\" (click)=\"openFormulaEditor(rule)\">\r\n                                            <textarea matInput [readonly]=\"true\" class=\"ruleTextarea\">{{getFormulaText(rule.get('value').value,rule.get('type').value)}}</textarea>\r\n                                          </mat-form-field>\r\n                                          <!-- <div class=\"formula-preview\" (click)=\"showConditionalFormulaEditor(rule)\">\r\n                                             <span *ngFor=\"let formula of rule.get('value').value\">\r\n                                             <span class=\"operator\" *ngIf=\"formula.operator !== 'NULL'\">{{formula.operator}}</span>\r\n                                             <span class=\"cde\">{{formula.cde}}</span>\r\n                                             </span>\r\n                                          </div>-->\r\n                                          <div class=\"edit-link\" (click)=\"showConditionalFormulaEditor(rule)\" style=\"margin-left: 2px; margin-bottom: 2px;\">Conditional Formula Editor</div>\r\n                                          <div class=\"edit-link\" (click)=\"showAdvanedFormulaEditor(rule)\" style=\"margin-left: 2px;\">Advanced Formula Editor</div>\r\n                                          <div class=\"edit-link\" (click)=\"showFormulaEditor(rule)\">Formula Editor</div> \r\n                                       </div>\r\n                                       <div class=\"list-item-5 outline\">\r\n                                          <app-rule-selector \r\n                                              [showAddItem]=\"false\"\r\n                                              [ruleItems]=\"ruleDimenstionList\" \r\n                                              [initValue]=\"rule.get('dimension').value\" \r\n                                              (selectionChange)=\"rule.get('dimension').setValue($event.value)\"\r\n                                          ></app-rule-selector>\r\n                                       </div>\r\n                                       <div class=\"list-item-0 add-remove-button\">\r\n                                          <button type=\"button\"  class=\"button3d  btnBlueGreen addico\" (click)=\"addRules(columns, 'rules')\" *ngIf=\"isLast\">\r\n                                             <mat-icon>add</mat-icon>\r\n                                          </button>\r\n                                          </div>\r\n                                          <div class=\"list-item-0 add-remove-button\">\r\n                                          <button type=\"button\" class=\"button3d  btnOrange redico\" (click)=\"removeRules(columns, 'rules', j)\" *ngIf=\"!isFirst || !isLast\">\r\n                                             <mat-icon>delete_outline</mat-icon>\r\n                                          </button>\r\n                                       </div>\r\n                                       </div>\r\n                                    </div>                                   \r\n                                 </ng-container>\r\n                                 </div>\r\n                              </ng-container>\r\n                           </mat-expansion-panel>\r\n                           <div class=\"list flex-containers flex-start\">\r\n                              <div class=\"list-item-2 outline\">\r\n                                 <button mat-stroked-button class=\"button3d  btnPurple ebckBtn\" (click)=\"gotoStepper(1);\"><mat-icon>keyboard_arrow_left</mat-icon> Back</button>\r\n                              </div>\r\n                              <div class=\"list-item-2 outline act-btn-wrapper1\">\r\n                                 <button mat-stroked-button class=\"button3d  btnLightBlue tdBtn\" \r\n                                 [disabled]=\"isRulesLoading || !afControls.rulesetName.value || !afControls.columnRules.value.length || !afControls.startDate.value || !afControls.endDate.value\"\r\n                                 (click)=\"generatePreview();\">Next <mat-icon>navigate_next</mat-icon></button>\r\n                              </div>\r\n                              </div>\r\n                           <!-- <div class=\"act-btn-wrapper\">\r\n                              <button mat-stroked-button class=\"primary-btn-gray white pad\" (click)=\"gotoStepper(1);\"><mat-icon class=\"mar-ico\">arrow_back_ios_new</mat-icon> Back</button>\r\n                              <button mat-stroked-button class=\"primary-btn-gray\" \r\n                                 [disabled]=\"!afControls.rulesetName.value || !afControls.columnRules.value.length || !afControls.startDate.value || !afControls.endDate.value\"\r\n                                 (click)=\"generatePreview();\">Next <mat-icon>arrow_forward_ios</mat-icon></button>\r\n                           </div> -->\r\n                           </mat-card>\r\n                           <div class=\"list flex-containers wrap\">\r\n                           <mat-card class=\"border no-rounded shrare-post rule-details-info\">\r\n                              <h1 class=\"share-post-title\"><span class=\"lgb\">{{selectedRuleColumn}}</span></h1>\r\n                              <div class=\"tabBtn\" (click)=\"tabGroup.selectedIndex=1\">View Profile Details</div>\r\n                              <table class=\"table\">\r\n                                 <tr class=\"cpt\">\r\n                                 <td class=\"strong\" *ngFor=\"let statistics of cdeStatistics | keyvalue\">{{statistics.key}}</td>\r\n                                 </tr>\r\n                                 <tr class=\"cpt1\">\r\n                                 <td *ngFor=\"let statistics of cdeStatistics | keyvalue\">{{statistics.value}}</td>\r\n                                 </tr>\r\n                              </table>\r\n                           </mat-card>\r\n                           <mat-card class=\"border no-rounded shrare-post correlation-info\">\r\n                              <h1 class=\"share-post-title\"><span class=\"lgb\">Correlation Summary</span></h1>\r\n                              <div class=\"tabBtn2\" (click)=\"tabGroup.selectedIndex=2\">View Correlation Details</div>\r\n                              <app-corelation-summary [summary]=\"correlationSummary ? correlationSummary : {}\"></app-corelation-summary>\r\n                           </mat-card>\r\n                           </div>\r\n                        </div>\r\n                     </mat-tab>\r\n\r\n                     <!-- Tab 2 -->\r\n                     <!-- <mat-tab label=\"Profile Details\">\r\n                        <app-attribute-details style=\"background:#fff;\"> </app-attribute-details>\r\n                     </mat-tab> -->\r\n                     \r\n                     <!-- Tab 3 -->\r\n                     <!-- <mat-tab label=\"Correlation Detail\">\r\n                        <div class=\"corMap\">\r\n                            <app-correlation-details></app-correlation-details>\r\n                        </div>\r\n                     </mat-tab> -->\r\n                  </mat-tab-group>\r\n                 </mat-step>\r\n \r\n                 <mat-step>\r\n                   <ng-template matStepLabel>Finalize ruleset</ng-template>\r\n                   <mat-card class=\"border no-rounded list shrare-post\">\r\n                     <h1 class=\"share-post-title\">Finalize<span class=\"yellow\"> ruleset</span></h1>\r\n                     <div class=\"analysis-preview\">\r\n                       <table class=\"table\">\r\n \r\n                         <tbody>\r\n                           <tr>\r\n                             <td style=\"width:15%\"><div class=\"label\">Source Name</div></td>\r\n                             <td>{{analysis.sourceName}}</td>\r\n                           </tr>\r\n                           <tr>\r\n                             <td><div class=\"label\">Selected CDE</div></td>\r\n                           <td>\r\n                             <span class=\"spec\" *ngFor=\"let column of analysis.selectedColumns\">\r\n                               {{column.title}}\r\n                             </span>\r\n                             </td>\r\n                           </tr>\r\n                           <tr>\r\n                             <td><div class=\"label\">Ruleset Name</div></td>\r\n                             <td>{{analysis.rulesetName}}</td>\r\n                           </tr>\r\n                           <tr>\r\n                             <td colspan=\"2\">\r\n                                <div class=\"label1\">Rules</div>\r\n                                <div class=\"expBtn\">                               \r\n                                <button class=\"horizontal align\" (click)=\"accordion.openAll()\"> <span class=\"text\">Expand All </span></button>\r\n                                 <button class=\"horizontal align\" (click)=\"accordion.closeAll()\"> <span class=\"text\"> Collapse All </span></button>\r\n                              </div> \r\n                              </td>\r\n                           </tr>\r\n                           <tr>\r\n                             <td colspan=\"2\">\r\n                               <div class=\"accordions\">\r\n                                 <mat-accordion multi>\r\n                                    <mat-expansion-panel *ngFor=\"let col of analysis.rules; first as isFirst\" [expanded]=\"isFirst\">\r\n                                       <mat-expansion-panel-header>\r\n                                          <mat-panel-title>\r\n                                             <div class=\"list flex-containers flex-start wtBg mm\">\r\n                                                <div class=\"list-item-2 outline\">\r\n                                                   <h4>{{col.column}} </h4>\r\n                                                </div>                                               \r\n                                             </div>\r\n                                          </mat-panel-title>\r\n                                          \r\n                                        </mat-expansion-panel-header>\r\n                                        <table class=\"table rule-table\">\r\n                                          <tbody>\r\n                                            <tr *ngFor=\"let rule of col.rules; index as i\">\r\n                                              <td>Rule #{{i+1}}</td>\r\n                                              <td><div class=\"label\">{{rule.rule}}</div></td>\r\n                                              <td>{{rule.operator}}</td>\r\n                                              <td class=\"preview\">\r\n                                                <div *ngIf=\"rule.rule !== 'Formula'\">{{rule.value}}</div>\r\n                                                <div *ngIf=\"rule.rule === 'Formula'\" class=\"formula-preview nob\">\r\n                                                  <span>{{getFormulaText(rule.value,rule.type)}}</span>\r\n                                                  <!-- <span *ngFor=\"let formula of rule.value\">\r\n                                                    <span class=\"operator alcap1\" *ngIf=\"formula.operator !== 'NULL'\">{{formula.operator}}</span>\r\n                                                    <span class=\"cde alcap\">{{formula.cde}}</span>\r\n                                                  </span> -->\r\n                                                </div>\r\n                                              </td>\r\n                                              <td>{{rule.dimension}}</td>\r\n                                            </tr>\r\n                                          </tbody>\r\n                                        </table>\r\n                                    </mat-expansion-panel>\r\n                                 </mat-accordion>\r\n                                    <!-- <div class=\"list flex-containers flex-start wtBg\">\r\n                                       <div class=\"list-item-2 outline\">\r\n                                          <h4>{{col.column}} </h4>\r\n                                       </div>\r\n                                     <div class=\"list-item-2 outline act-btn-wrapper1\">\r\n                                          <button type=\"button\" class=\"button3d  btnBlueGreen addico\" (click)=\"showEditDetails(i);\">\r\n                                             <mat-icon>add</mat-icon>\r\n                                             </button>\r\n                                       </div> \r\n                                    </div> -->\r\n\r\n                                 <!-- <table class=\"table rule-table\">\r\n                                   <tbody>\r\n                                     <tr *ngFor=\"let rule of col.rules; index as i\">\r\n                                       <td>Rule #{{i+1}}</td>\r\n                                       <td><div class=\"label\">{{rule.rule}}</div></td>\r\n                                       <td>{{rule.operator}}</td>\r\n                                       <td class=\"preview\">\r\n                                         <div *ngIf=\"rule.rule !== 'Formula'\">{{rule.value}}</div>\r\n                                         <div *ngIf=\"rule.rule === 'Formula'\" class=\"formula-preview\">\r\n                                           <span *ngFor=\"let formula of rule.value\">\r\n                                             <span class=\"operator\" *ngIf=\"formula.operator !== 'NULL'\">{{formula.operator}}</span>\r\n                                             <span class=\"cde\">{{formula.cde}}</span>\r\n                                           </span>\r\n                                         </div>\r\n                                       </td>\r\n                                       <td>{{rule.dimension}}</td>\r\n                                     </tr>\r\n                                   </tbody>\r\n                                 </table> -->\r\n                               </div>\r\n                             </td>\r\n                           </tr>\r\n                         </tbody>\r\n                       </table>\r\n                     </div>\r\n\r\n                     <div class=\"list flex-containers flex-start\">\r\n                        <div class=\"list-item-2 outline\">\r\n                           <button mat-stroked-button class=\"button3d  btnPurple ebckBtn\" (click)=\"gotoStepper(2);\"><mat-icon>keyboard_arrow_left</mat-icon> Back</button>\r\n                        </div>\r\n                        <div class=\"list-item-2 outline act-btn-wrapper1\">\r\n                           <button mat-stroked-button class=\"button3d  btnLightBlue compBtn\" (click)=\"createEditRuleset()\" [disabled]=\"isLoading\">Complete <mat-icon>done_all</mat-icon></button>\r\n                        </div>\r\n                     </div>                    \r\n                   </mat-card>\r\n \r\n                 </mat-step>\r\n             </mat-horizontal-stepper>\r\n           </form>\r\n \r\n           <mat-card class=\"border no-rounded list shrare-post mat-card source-preview-card\" [hidden]=\"stepIndex === 3\">\r\n             <app-progress-bar [message]=\"'Loading source preview...'\" class=\"component\" *ngIf=\"isPreviewLoading\"></app-progress-bar>\r\n             <div class=\"list flex-containers space-between\">\r\n               <h1 class=\"share-post-title\">Source Preview</h1>\r\n               <button class=\"horizontal\" (click)=\"loadSourcePreview();\"> <span class=\"text\"><mat-icon>view_column</mat-icon> Preview </span></button>\r\n             </div>\r\n             <app-ag-grid\r\n               floatingFilter=\"true\"\r\n               *ngIf=\"isPreviewLoaded\"\r\n               [rowData]=\"rowData\"\r\n               [columnDefs]=\"columnDefs\"\r\n               [pageSize]=\"50\"\r\n               [rowSelection]=\"'multiple'\"\r\n               [suppressRowClickSelection]=\"false\"\r\n             ></app-ag-grid>\r\n           </mat-card>\r\n     \r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </section>\r\n \r\n ");

/***/ }),

/***/ "./src/app/components/authorized/ruleset/ruleset-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/authorized/ruleset/ruleset-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RulesetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesetRoutingModule", function() { return RulesetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ruleset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ruleset.component */ "./src/app/components/authorized/ruleset/ruleset.component.ts");
/* harmony import */ var _candeactivate_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../candeactivate.route */ "./src/app/components/authorized/candeactivate.route.ts");





const routes = [{ path: '', component: _ruleset_component__WEBPACK_IMPORTED_MODULE_3__["RulesetComponent"], canDeactivate: [_candeactivate_route__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateRules"]] }];
let RulesetRoutingModule = class RulesetRoutingModule {
};
RulesetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RulesetRoutingModule);



/***/ }),

/***/ "./src/app/components/authorized/ruleset/ruleset.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/authorized/ruleset/ruleset.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.home-wrapper .flex-item-h {\n  min-height: 220px;\n}\n.home-wrapper .sec-title {\n  font-size: 28px;\n  font-weight: 300;\n}\n.home-wrapper .strong-title {\n  margin-bottom: 14px;\n}\n.home-wrapper .flex-item-h {\n  width: 33%;\n  border-radius: 0;\n  border-width: 0 !important;\n  color: #f1f1f1;\n  padding: 34px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n}\n.home-wrapper .flex-item-h .secondary-btn {\n  margin-top: 24px;\n  transition: ease-in 200ms;\n  border-color: #f1f1f1 !important;\n  color: #f1f1f1;\n}\n.home-wrapper .flex-item-h:hover .flex-overlay {\n  opacity: 1;\n  transition: ease-in 200ms;\n}\n.home-wrapper .flex-item-h:hover .secondary-btn {\n  transition: ease-in 200ms;\n  border: 1px solid #8d0000 !important;\n  background-color: #b00000 !important;\n  color: #fff;\n}\n.home-wrapper .flex-item-h .flex-overlay {\n  opacity: 0;\n  transition: ease-in 100ms;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.home-wrapper .professional {\n  background-color: #477149;\n}\n.home-wrapper .personal {\n  background-color: #155159;\n  width: 34%;\n}\n.home-wrapper .community {\n  background-color: #5B5651;\n}\n.home-wrapper .left-pannel {\n  float: left;\n  width: 282px;\n}\n.home-wrapper .home-panel .mat-card {\n  box-shadow: 0px 0px 1px #00000029;\n  border: 1px solid #EBEBEB !important;\n  padding: 20px;\n}\n.home-wrapper .home-panel .mat-card.font {\n  font-family: \"open-sans-condensed-light\" !important;\n}\n.home-wrapper .home-panel .mat-card .user-image {\n  float: left;\n  width: 68px;\n}\n.home-wrapper .home-panel .mat-card .post-user-info {\n  margin-left: 88px;\n}\n.home-wrapper .remove-btn {\n  height: 32px;\n  line-height: 29px !important;\n  margin-left: 10px;\n  font-size: 14px;\n}\n.home-wrapper .shrare-post textarea {\n  height: 80px;\n}\n.home-wrapper .shrare-post .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n.home-wrapper .shrare-post .share-post-title {\n  font-size: 20px;\n  color: #322a54;\n  font-weight: 400;\n  margin: 0px 10px 20px 10px;\n  font-family: \"open-sans-condensed-bold\";\n  position: relative;\n}\n.home-wrapper .shrare-post .share-post-title:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -12px;\n  height: 5px;\n  width: 55px;\n  background-color: #efa800;\n}\n.home-wrapper .shrare-post .share-post-title:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -10px;\n  height: 1px;\n  width: 95%;\n  max-width: 181px;\n  background-color: #efa800;\n}\n.home-wrapper .shrare-post .share-btn {\n  font-weight: 300;\n  color: #7B7C7D;\n  margin-top: 20px;\n  padding: 2px 10px 2px 2px;\n  margin-left: 16px;\n  font-size: 17px;\n}\n.home-wrapper .shrare-post .share-btn .mat-icon {\n  font-size: 20px;\n  margin-right: 3px;\n  height: 22px;\n}\n.home-wrapper .my-community-body .list {\n  margin: 20px 0 0 0;\n}\n.home-wrapper .analysis-card {\n  text-align: center;\n}\n.home-wrapper .col-selector-wrapper {\n  margin: 12px;\n}\n.mat-expansion-panel {\n  margin-bottom: 16px;\n}\n.mat-expansion-panel.bx-sdw {\n  box-shadow: none !important;\n}\n.rule-list-wrp {\n  margin: 0;\n}\n.rule-list-wrp .cde-fields-wrp {\n  margin-top: 0 !important;\n}\n.rule-list-wrp .rule-title {\n  margin: 14px 0 4px 0;\n}\n.rule-list-wrp h5 {\n  font-family: \"open-sans-condensed-bold\";\n}\n.category-list .category-item {\n  text-align: center;\n  border: 1px solid #e7e7e7;\n  padding: 4px;\n  background-color: rgba(240, 240, 240, 0.12);\n  border-radius: 0px;\n}\n.category-list .category-item .cat-icon {\n  font-size: 32px;\n  color: #525252;\n}\n.category-list .category-item .cat-title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 31px;\n  font-family: \"open-sans-condensed-bold\";\n}\n.category-list .category-item:hover {\n  box-shadow: 0 10px 40px 1px rgba(0, 0, 0, 0.17);\n  background-color: #ffffff;\n  cursor: pointer;\n}\n.category-list .category-item.selected {\n  border: 1px solid #433683;\n  background-color: #433683;\n  color: #fff;\n  box-shadow: 0 10px 40px 1px rgba(0, 0, 0, 0.17);\n}\n.category-list .category-item.selected .cat-icon, .category-list .category-item.selected .cat-title {\n  font-weight: 500 !important;\n}\n.category-list .category-item:focus {\n  outline: none;\n}\n.category-list-wrapper {\n  margin-bottom: 12px;\n  margin-top: 20px;\n}\n.category-list-wrapper .left-arrow {\n  float: left;\n  width: 50px;\n}\n.category-list-wrapper .category-list {\n  width: calc(100% - 100px);\n  float: left;\n  font-family: \"open-sans-condensed-bold\";\n}\n.category-list-wrapper .right-arrow {\n  float: left;\n  width: 50px;\n  padding-left: 16px;\n}\n.category-list-wrapper button.prev-next-btn {\n  border-radius: 0;\n  padding: 0;\n  width: 34px;\n  min-width: auto;\n  padding: 0 !important;\n}\n.table .label {\n  font-weight: 500;\n  font-family: \"open-sans-regular\";\n}\n.table .label1 {\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 18px;\n  color: #efa800;\n  width: 400px;\n  display: inline-block;\n}\n.table .expBtn {\n  width: 185px;\n  float: right;\n}\n.table h4 {\n  font-weight: 400;\n  background: white;\n  font-size: 16px;\n  /* padding-bottom: 10px; */\n  /* padding-left: 10px; */\n  /* padding-top: 5px; */\n  color: #322a54;\n  font-family: \"open-sans-condensed-bold\";\n}\n.table h4 .mat-icon {\n  position: relative;\n  top: 6px;\n}\n.table th {\n  font-family: \"open-sans-regular\";\n}\n.rule-table {\n  border-bottom: 0px solid #ccc;\n  margin-bottom: 0px !important;\n}\n.outline mat-label {\n  font-family: \"open-sans-condensed-bold\";\n  color: #373737;\n  font-size: 13px;\n}\n.mat-form-field-outline {\n  box-shadow: none !important;\n}\ninput.mat-input-element {\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 13px;\n}\n.mat-form-field-wrapper {\n  margin-top: 1px;\n}\n::ng-deep.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 4px 10px 14px 0px !important;\n  font-size: 16px;\n  color: #484848;\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n::ng-deep.mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0.11em 0 !important;\n}\n.mtop {\n  margin-top: 20px;\n}\n.bdr {\n  height: 1px;\n  background: #e7e7e7;\n  margin-top: 10px;\n  width: 100%;\n  border-bottom: 1px dotted;\n  -o-border-image: linear-gradient(to right, #e7e7e7, #e7e7e7);\n     border-image: linear-gradient(to right, #e7e7e7, #e7e7e7);\n  border-image-slice: 1;\n}\n::ng-deep.mat-card {\n  box-shadow: 0px 0px 1px #00000029;\n}\n::ng-deep.mat-select {\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n::ng-deep.mat-option {\n  font-family: \"open-sans-regular\" !important;\n}\n.mat-error {\n  display: block;\n  margin-top: 4px;\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 13px;\n}\n.mat-error.ns {\n  background: #FFBABA;\n  color: #D8000C;\n  padding: 3px 9px;\n  width: 150px;\n  font-size: 12px;\n  position: relative;\n  top: -4px;\n  left: -9px;\n}\n.mar-ico {\n  margin-right: 10px;\n}\n.pad {\n  padding: 0 15px !important;\n}\n.ico-align {\n  margin-left: -16px !important;\n}\n.primary-btn-red {\n  border-radius: 4px !important;\n  font-family: \"open-sans-condensed-bold\" !important;\n  text-transform: uppercase;\n  font-size: 18px;\n}\n.table tbody td {\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n.table tbody td.ft {\n  font-family: \"open-sans-condensed-light\" !important;\n}\n.primary-btn-gray .mat-icon.pl {\n  margin-left: -17px;\n}\n.mat-expansion-panel-header {\n  font-family: \"open-sans-condensed-bold\";\n  border-color: #e7e7e7 !important;\n  height: 40px;\n  padding-top: 10px !important;\n}\n::ng-deep .mat-select-value-text {\n  font-family: \"open-sans-condensed-bold\" !important;\n}\n.tpl {\n  padding-left: 0px !important;\n}\n.table tbody td {\n  padding-left: 0px !important;\n}\n.table td.strong {\n  font-weight: bold;\n}\n.rule-details-info {\n  width: calc(100% - 482px);\n  overflow: auto;\n}\n.correlation-info {\n  margin: 0 0 0 22px;\n  width: 460px;\n}\n.edit-link {\n  cursor: pointer;\n  text-align: right;\n  background: #433683;\n  display: inline;\n  float: right;\n  font-family: \"open-sans-condensed-bold\";\n  color: #fff;\n  padding: 0 12px;\n  font-size: 12px;\n}\n.formula-preview {\n  color: #000000;\n  padding: 8px 10px;\n  border-bottom: 1px solid #cbcbcb;\n  height: 48px;\n  background: #eee8f8;\n  position: relative;\n  top: 1px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.formula-preview.nob {\n  background: none !important;\n}\n.formula-preview .operator {\n  font-weight: bold;\n  margin: 0 4px;\n  font-family: \"open-sans-condensed-bold\";\n  position: relative;\n  top: 10px;\n  font-size: 12px;\n}\n.formula-preview .operator.alcap1 {\n  font-weight: normal;\n  margin: 0 4px;\n  font-family: \"open-sans-regular\";\n  position: relative;\n  top: 0px;\n  font-size: 12px;\n}\n.formula-preview .cde {\n  font-weight: bold;\n  font-family: \"open-sans-condensed-bold\";\n  position: relative;\n  top: 10px;\n  font-size: 12px;\n}\n.formula-preview .cde.alcap {\n  font-weight: normal;\n  font-family: \"open-sans-regular\";\n  position: relative;\n  top: 0;\n  font-size: 12px;\n}\n.preview .formula-preview {\n  max-width: 300px;\n  border: 0;\n  padding: 0;\n  height: auto;\n}\n.button3d {\n  width: 200px;\n  padding: 0;\n  margin: 10px 20px 10px 0;\n  font-weight: 600;\n  text-align: center;\n  line-height: 50px;\n  color: #FFF;\n  border-radius: 3px;\n  transition: all 0.2s;\n  font-family: \"open-sans-condensed-bold\" !important;\n  cursor: pointer;\n}\n.button3d:disabled {\n  background: gray;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btnBlueGreen {\n  background: #00AE68;\n}\n.btnBlueGreen:hover {\n  background: #01613b;\n}\n.btnBlueGreen.addico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n.btnBlueGreen.addico .mat-icon {\n  font-size: 20px;\n}\n.btnBlueGreen.tollico {\n  width: 140px;\n  height: 26px;\n  line-height: 28px;\n  outline: none;\n  border: none;\n  border-radius: 2px;\n  margin-right: 5px;\n  text-align: left;\n}\n.btnBlueGreen.tollico .mat-icon {\n  font-size: 15px;\n  position: relative;\n  top: 2px;\n  left: 10px;\n}\n.btnLightBlue {\n  background: #7d6ecc;\n}\n.btnLightBlue:hover {\n  background: #413774;\n}\n.btnLightBlue.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n.btnLightBlue.addRef .material-icons {\n  font-size: 20px;\n}\n.btnLightBlue.tdBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 100px;\n  height: 40px;\n  line-height: 30px;\n  padding-left: 16px;\n}\n.btnLightBlue.tdBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -2.5px;\n  right: 8px;\n}\n.btnLightBlue.tdBtn:disabled {\n  background: gray;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btnLightBlue.compBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 145px;\n  height: 40px;\n  line-height: 30px;\n  padding-left: 16px;\n}\n.btnLightBlue.compBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  right: 0px;\n}\n.btnLightBlue.svBtn {\n  font-size: 18px;\n  color: #ffffff;\n  width: 180px;\n  height: 37px;\n  line-height: 30px;\n}\n.btnLightBlue.svBtn .mat-icon {\n  font-size: 20px;\n}\n.btnOrange {\n  background: #e91b00;\n}\n.btnOrange:hover {\n  background: #8f1303;\n}\n.btnOrange.redico {\n  width: 26px;\n  height: 26px;\n  line-height: 25px;\n  outline: none;\n  border: none;\n  padding-top: 3px;\n  border-radius: 2px;\n}\n.btnOrange.redico .mat-icon {\n  font-size: 20px;\n}\n.btnPurple {\n  background: #A74982;\n}\n.btnPurple:hover {\n  background: #64264b;\n}\n.btnPurple.preview {\n  width: 100px;\n  height: 30px;\n  line-height: 28px;\n}\n.btnPurple.ebckBtn {\n  font-size: 20px;\n  color: #ffffff;\n  width: 95px;\n  height: 40px;\n  line-height: 30px;\n  padding-right: 20px;\n}\n.btnPurple.ebckBtn .mat-icon {\n  font-size: 28px;\n  position: relative;\n  top: -4px;\n  left: 3px;\n}\n.btnPurple.addRef {\n  height: 30px;\n  width: 160px;\n  line-height: 30px;\n  border-radius: 2px;\n}\n.btnPurple.addRef .material-icons {\n  font-size: 20px;\n}\n/* FADE */\n.btnFade.btnBlueGreen:hover {\n  background: #21825B;\n}\n.btnFade.btnLightBlue:hover {\n  background: #0097f6;\n}\n.btnFade.btnOrange:hover {\n  background: #FF8E00;\n}\n.btnFade.btnPurple:hover {\n  background: #6D184B;\n}\n/* 3D */\n.btnPush:hover {\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n.add-remove-button {\n  min-width: 30px;\n}\n::ng-deep .ag-theme-alpine .ag-header {\n  background-color: #1F2739 !important;\n  font-family: \"open-sans-semibold\";\n  border-bottom: 0;\n}\n::ng-deep .ag-cell-label-container {\n  color: #ffffff !important;\n}\n::ng-deep .ag-theme-alpine .ag-icon-filter:before {\n  content: \"\";\n  color: #ffffff;\n}\n::ng-deep .ag-theme-alpine .ag-icon-menu:before {\n  color: #ffffff;\n}\n::ng-deep .ag-grid-wrapper {\n  font-family: \"open-sans-regular\";\n}\n::ng-deep .ag-theme-alpine .ag-row {\n  font-family: \"open-sans-regular\";\n  border-width: 0px;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-row {\n  background: #323C50;\n  color: #ffffff;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-row-odd {\n  background: #1F2739;\n  color: #ffffff;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-header-cell, .ag-theme-alpine .ag-header-group-cell {\n  border-color: #323C50;\n}\n::ng-deep .ag-theme-alpine .ag-paging-panel {\n  font-family: \"open-sans-condensed-bold\";\n}\n::ng-deep .ag-theme-alpine {\n  font-family: \"open-sans-regular\";\n}\n.act-btn-wrapper1 {\n  text-align: right;\n}\n.pad-tp {\n  padding-top: 10px;\n}\n.mat-horizontal-stepper-header {\n  height: 50px !important;\n}\n.tplabel {\n  margin-top: 8px !important;\n}\n::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #eee8f8;\n}\n::ng-deep .mat-stepper-horizontal .mat-step-header .mat-step-icon-state-edit {\n  background-color: #efa800;\n}\n::ng-deep .mat-stepper-horizontal .mat-step-header .mat-step-icon-selected {\n  background-color: #3bc766;\n  box-shadow: 0px 5px 0px 0px #158d1e;\n}\n::ng-deep .mat-stepper-horizontal .mat-step-icon {\n  background-color: #b8b7b7;\n}\n::ng-deep .mat-step-icon {\n  border-radius: 4px !important;\n}\n.date-style ::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex {\n  padding-top: 0px;\n}\n::ng-deep .mat-datepicker-toggle-default-icon {\n  position: relative;\n  top: 5px !important;\n}\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 10px;\n}\n::ng-deep .mat-form-field-infix {\n  border-top: 0px;\n}\n::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline::before {\n  bottom: -8px;\n  height: 2px;\n}\n::ng-deep .mat-form-field-appearance-fill .mat-form-field-ripple {\n  bottom: -8px;\n  height: 3px;\n}\n.mat-card {\n  border: 1px solid #b7afe2;\n  border-radius: 0px !important;\n  box-shadow: 0px 1px 4px #a497ea, 0px 2px 17px #ebe8fb;\n  background: #fff;\n}\n.yellow {\n  color: #efa800;\n}\n.horizontal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: 2px solid #efa800;\n  font-size: 14px;\n  font-family: \"open-sans-condensed-bold\";\n  cursor: pointer;\n  background: #fff;\n  height: 30px;\n  line-height: 34px;\n  margin-right: 35px;\n}\n.horizontal > .text {\n  position: relative;\n  color: #322a54;\n  font-family: \"open-sans-condensed-bold\";\n  background-image: linear-gradient(90deg, #dc7896 0%, #dc7896 50%, #efa800 50%, #efa800 100%);\n  background-repeat: repeat;\n  background-size: 200%;\n  background-position: 100% 0;\n  -webkit-background-clip: text;\n  background-clip: text;\n  transition: background-position 300ms;\n}\n.horizontal > .text.pst {\n  top: -6px;\n}\n.horizontal > .text .mat-icon {\n  position: relative;\n  top: 7px;\n  color: #efa800;\n}\n.horizontal::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #efa800;\n  transform-origin: 100% 0;\n  transform: scale3d(0, 1, 1);\n  transition: transform 300ms;\n}\n.horizontal:hover .text {\n  background-position: 0 0;\n  color: #fff;\n}\n.horizontal:hover .text .mat-icon {\n  position: relative;\n  top: 7px;\n  color: #ffffff;\n}\n.horizontal:hover::before {\n  transform-origin: 0 0;\n  transform: scale3d(1, 1, 1);\n}\n.horizontal.align {\n  float: left;\n  margin-right: 15px;\n}\n::ng-deep .ag-theme-alpine .ag-header {\n  background-color: #f0f7f7 !important;\n  font-family: \"open-sans-semibold\";\n}\n::ng-deep .ag-cell-label-container {\n  color: #373737 !important;\n}\n::ng-deep .ag-theme-alpine .ag-icon-filter:before {\n  content: \"\";\n  color: #aedada;\n}\n::ng-deep .ag-theme-alpine .ag-icon-menu:before {\n  color: #ffffff;\n}\n::ng-deep .ag-grid-wrapper {\n  font-family: \"open-sans-regular\";\n}\n::ng-deep .ag-theme-alpine .ag-row {\n  font-family: \"open-sans-regular\";\n  border-width: 0px;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-row {\n  background: #fff;\n  color: #373737;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-row-odd {\n  background: #f0f7f7;\n  color: #373737;\n  box-shadow: 0 2px 2px -2px #0E1119;\n}\n::ng-deep .ag-theme-alpine .ag-header-cell, .ag-theme-alpine .ag-header-group-cell {\n  border-color: #323C50;\n}\n::ng-deep .ag-theme-alpine .ag-paging-panel {\n  font-family: \"open-sans-condensed-bold\";\n}\n::ng-deep .ag-theme-alpine {\n  font-family: \"open-sans-regular\";\n}\n::ng-deep .ag-theme-alpine .ag-paging-panel {\n  background: #f0f7f7;\n}\n::ng-deep .mat-tab-body-content {\n  height: 100%;\n  overflow: inherit !important;\n}\n.primary-btn-gray {\n  border: 1px solid #3d9191 !important;\n  background-color: #6bc1c1 !important;\n}\n.lgb {\n  color: #433683;\n}\n.cpt {\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 13px;\n}\n.cpt1 {\n  font-family: \"open-sans-regular\";\n  font-size: 13px;\n}\ntr:nth-child(even) {\n  background: #ffffff;\n}\ntr:nth-child(odd) {\n  background: #f0f7f7;\n}\n.analysis-preview .table tbody td {\n  font-size: 14px !important;\n  font-family: \"open-sans-regular\" !important;\n  padding-left: 10px !important;\n}\n.wtBg {\n  background: white;\n  margin: 0px;\n}\n::ng-deep .mat-expansion-indicator {\n  position: relative;\n  left: -20px;\n  top: -7px;\n}\n.mm {\n  margin-top: 5px !important;\n}\n.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]), .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]), .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]) {\n  background: white !important;\n}\n.accordions ::ng-deep .mat-expansion-panel-body {\n  padding: 0 0px 0px 0px !important;\n}\n.mt2 {\n  margin-top: 0px !important;\n}\n.mm2 {\n  margin-top: 30px !important;\n}\n::ng-deep .mat-tab-group {\n  width: 100%;\n}\n.corMap ::ng-deep .highcharts-root {\n  width: 1506px !important;\n}\n.spec {\n  display: inline-block;\n  margin-right: 2px;\n  background: #433683;\n  margin-bottom: 4px;\n  padding: 0 7px;\n  font-size: 12px;\n  color: #fff;\n}\n.tabBtn {\n  position: relative;\n  text-align: right;\n  top: -38px;\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 11px;\n  background: darksalmon;\n  width: 125px;\n  float: right;\n  padding: 5px 10px;\n  text-transform: uppercase;\n  color: #fff;\n  cursor: pointer;\n}\n.tabBtn:hover {\n  background: #c26648;\n}\n.tabBtn2 {\n  position: relative;\n  text-align: right;\n  top: -43px;\n  font-family: \"open-sans-condensed-bold\";\n  font-size: 10px;\n  background: palevioletred;\n  width: 140px;\n  float: right;\n  padding: 5px 10px;\n  text-transform: uppercase;\n  color: #fff;\n  cursor: pointer;\n}\n.tabBtn2:hover {\n  background: #b45675;\n}\n.rules-loading-message {\n  text-align: right;\n  margin-right: 52px;\n}\n.rules-loading-message .mat-spinner {\n  text-align: right;\n  float: right;\n  margin-left: 10px;\n}\n.ruleTextarea {\n  resize: none;\n  height: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JpemVkL3J1bGVzZXQvcnVsZXNldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JpemVkL3J1bGVzZXQvRTpcXEFJRGF0YURyaXZlblxcQ29kZWJhc2VcXEZyb250RW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhdXRob3JpemVkXFxydWxlc2V0XFxydWxlc2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NiO0VBQ0UsaUJBQUE7QURDTDtBQ0NHO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEQ0w7QUNDRztFQUNFLG1CQUFBO0FEQ0w7QUNDRztFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QURDTDtBQ0FLO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBREVQO0FDQ087RUFDRSxVQUFBO0VBQ0EseUJBQUE7QURDVDtBQ0NPO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBRENUO0FDRUs7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtBREFQO0FDR0c7RUFDRSx5QkFBQTtBRERMO0FDR0c7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QURETDtBQ0dHO0VBQ0UseUJBQUE7QURETDtBQ0dHO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURETDtBQ0lLO0VBQ0UsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QURGUDtBQ0dPO0VBQ0UsbURBQUE7QUREVDtBQ0dPO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUREVDtBQ0dPO0VBQ0UsaUJBQUE7QUREVDtBQ0tHO0VBQ0Us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L2FwcC9jb21wb25lbnRzL2F1dGhvcml6ZWQvcnVsZXNldC9ydWxlc2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmhvbWUtd3JhcHBlciAuZmxleC1pdGVtLWgge1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbn1cbi5ob21lLXdyYXBwZXIgLnNlYy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5ob21lLXdyYXBwZXIgLnN0cm9uZy10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG4uaG9tZS13cmFwcGVyIC5mbGV4LWl0ZW0taCB7XG4gIHdpZHRoOiAzMyU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2YxZjFmMTtcbiAgcGFkZGluZzogMzRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ob21lLXdyYXBwZXIgLmZsZXgtaXRlbS1oIC5zZWNvbmRhcnktYnRuIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAyMDBtcztcbiAgYm9yZGVyLWNvbG9yOiAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuLmhvbWUtd3JhcHBlciAuZmxleC1pdGVtLWg6aG92ZXIgLmZsZXgtb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMjAwbXM7XG59XG4uaG9tZS13cmFwcGVyIC5mbGV4LWl0ZW0taDpob3ZlciAuc2Vjb25kYXJ5LWJ0biB7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMjAwbXM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ZDAwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwMDAwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ob21lLXdyYXBwZXIgLmZsZXgtaXRlbS1oIC5mbGV4LW92ZXJsYXkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDEwMG1zO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cbi5ob21lLXdyYXBwZXIgLnByb2Zlc3Npb25hbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzcxNDk7XG59XG4uaG9tZS13cmFwcGVyIC5wZXJzb25hbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTUxNTk7XG4gIHdpZHRoOiAzNCU7XG59XG4uaG9tZS13cmFwcGVyIC5jb21tdW5pdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI1NjUxO1xufVxuLmhvbWUtd3JhcHBlciAubGVmdC1wYW5uZWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI4MnB4O1xufVxuLmhvbWUtd3JhcHBlciAuaG9tZS1wYW5lbCAubWF0LWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAjMDAwMDAwMjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5ob21lLXdyYXBwZXIgLmhvbWUtcGFuZWwgLm1hdC1jYXJkLmZvbnQge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWxpZ2h0XCIgIWltcG9ydGFudDtcbn1cbi5ob21lLXdyYXBwZXIgLmhvbWUtcGFuZWwgLm1hdC1jYXJkIC51c2VyLWltYWdlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2OHB4O1xufVxuLmhvbWUtd3JhcHBlciAuaG9tZS1wYW5lbCAubWF0LWNhcmQgLnBvc3QtdXNlci1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDg4cHg7XG59XG4uaG9tZS13cmFwcGVyIC5yZW1vdmUtYnRuIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMjlweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhvbWUtd3JhcHBlciAuc2hyYXJlLXBvc3QgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDgwcHg7XG59XG4uaG9tZS13cmFwcGVyIC5zaHJhcmUtcG9zdCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLmhvbWUtd3JhcHBlciAuc2hyYXJlLXBvc3QgLnNoYXJlLXBvc3QtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMzIyYTU0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDBweCAxMHB4IDIwcHggMTBweDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lLXdyYXBwZXIgLnNocmFyZS1wb3N0IC5zaGFyZS1wb3N0LXRpdGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTJweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiA1NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZhODAwO1xufVxuLmhvbWUtd3JhcHBlciAuc2hyYXJlLXBvc3QgLnNoYXJlLXBvc3QtdGl0bGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTEwcHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDE4MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZhODAwO1xufVxuLmhvbWUtd3JhcHBlciAuc2hyYXJlLXBvc3QgLnNoYXJlLWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjN0I3QzdEO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAycHggMTBweCAycHggMnB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLmhvbWUtd3JhcHBlciAuc2hyYXJlLXBvc3QgLnNoYXJlLWJ0biAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBoZWlnaHQ6IDIycHg7XG59XG4uaG9tZS13cmFwcGVyIC5teS1jb21tdW5pdHktYm9keSAubGlzdCB7XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbn1cbi5ob21lLXdyYXBwZXIgLmFuYWx5c2lzLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG9tZS13cmFwcGVyIC5jb2wtc2VsZWN0b3Itd3JhcHBlciB7XG4gIG1hcmdpbjogMTJweDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwuYngtc2R3IHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucnVsZS1saXN0LXdycCB7XG4gIG1hcmdpbjogMDtcbn1cbi5ydWxlLWxpc3Qtd3JwIC5jZGUtZmllbGRzLXdycCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cbi5ydWxlLWxpc3Qtd3JwIC5ydWxlLXRpdGxlIHtcbiAgbWFyZ2luOiAxNHB4IDAgNHB4IDA7XG59XG4ucnVsZS1saXN0LXdycCBoNSB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xufVxuXG4uY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktaXRlbSAuY2F0LWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiAjNTI1MjUyO1xufVxuLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWl0ZW0gLmNhdC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG59XG4uY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktaXRlbS5zZWxlY3RlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MzM2ODM7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzM2ODM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbn1cbi5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1pdGVtLnNlbGVjdGVkIC5jYXQtaWNvbiwgLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWl0ZW0uc2VsZWN0ZWQgLmNhdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cbi5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1pdGVtOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhdGVnb3J5LWxpc3Qtd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY2F0ZWdvcnktbGlzdC13cmFwcGVyIC5sZWZ0LWFycm93IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmNhdGVnb3J5LWxpc3Qtd3JhcHBlciAuY2F0ZWdvcnktbGlzdCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbn1cbi5jYXRlZ29yeS1saXN0LXdyYXBwZXIgLnJpZ2h0LWFycm93IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uY2F0ZWdvcnktbGlzdC13cmFwcGVyIGJ1dHRvbi5wcmV2LW5leHQtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDM0cHg7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4udGFibGUgLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbn1cbi50YWJsZSAubGFiZWwxIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNlZmE4MDA7XG4gIHdpZHRoOiA0MDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnRhYmxlIC5leHBCdG4ge1xuICB3aWR0aDogMTg1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi50YWJsZSBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8qIHBhZGRpbmctYm90dG9tOiAxMHB4OyAqL1xuICAvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7ICovXG4gIC8qIHBhZGRpbmctdG9wOiA1cHg7ICovXG4gIGNvbG9yOiAjMzIyYTU0O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbn1cbi50YWJsZSBoNCAubWF0LWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNnB4O1xufVxuXG4udGFibGUgdGgge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiO1xufVxuXG4ucnVsZS10YWJsZSB7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjY2NjO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm91dGxpbmUgbWF0LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIGNvbG9yOiAjMzczNzM3O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDRweCAxMHB4IDE0cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBtYXJnaW46IDAuMTFlbSAwICFpbXBvcnRhbnQ7XG59XG5cbi5tdG9wIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJkciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlN2U3ZTcsICNlN2U3ZTcpO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbjo6bmctZGVlcC5tYXQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMDAwMDAyOTtcbn1cblxuOjpuZy1kZWVwLm1hdC1zZWxlY3Qge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1yZWd1bGFyXCIgIWltcG9ydGFudDtcbn1cblxuLm1hdC1lcnJvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWF0LWVycm9yLm5zIHtcbiAgYmFja2dyb3VuZDogI0ZGQkFCQTtcbiAgY29sb3I6ICNEODAwMEM7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTlweDtcbn1cblxuLm1hci1pY28ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wYWQge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLmljby1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweCAhaW1wb3J0YW50O1xufVxuXG4ucHJpbWFyeS1idG4tcmVkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRhYmxlIHRib2R5IHRkIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCIgIWltcG9ydGFudDtcbn1cbi50YWJsZSB0Ym9keSB0ZC5mdCB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtbGlnaHRcIiAhaW1wb3J0YW50O1xufVxuXG4ucHJpbWFyeS1idG4tZ3JheSAubWF0LWljb24ucGwge1xuICBtYXJnaW4tbGVmdDogLTE3cHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBib3JkZXItY29sb3I6ICNlN2U3ZTcgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiICFpbXBvcnRhbnQ7XG59XG5cbi50cGwge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGFibGUgdGJvZHkgdGQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGFibGUgdGQuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ydWxlLWRldGFpbHMtaW5mbyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0ODJweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY29ycmVsYXRpb24taW5mbyB7XG4gIG1hcmdpbjogMCAwIDAgMjJweDtcbiAgd2lkdGg6IDQ2MHB4O1xufVxuXG4uZWRpdC1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYmFja2dyb3VuZDogIzQzMzY4MztcbiAgZGlzcGxheTogaW5saW5lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb3JtdWxhLXByZXZpZXcge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JjYmNiO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQ6ICNlZWU4Zjg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5mb3JtdWxhLXByZXZpZXcubm9iIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuLmZvcm11bGEtcHJldmlldyAub3BlcmF0b3Ige1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZm9ybXVsYS1wcmV2aWV3IC5vcGVyYXRvci5hbGNhcDEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDAgNHB4O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZm9ybXVsYS1wcmV2aWV3IC5jZGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZm9ybXVsYS1wcmV2aWV3IC5jZGUuYWxjYXAge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJldmlldyAuZm9ybXVsYS1wcmV2aWV3IHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5idXR0b24zZCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCIgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ1dHRvbjNkOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYnRuQmx1ZUdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzAwQUU2ODtcbn1cbi5idG5CbHVlR3JlZW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDE2MTNiO1xufVxuLmJ0bkJsdWVHcmVlbi5hZGRpY28ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmJ0bkJsdWVHcmVlbi5hZGRpY28gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmJ0bkJsdWVHcmVlbi50b2xsaWNvIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYnRuQmx1ZUdyZWVuLnRvbGxpY28gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uYnRuTGlnaHRCbHVlIHtcbiAgYmFja2dyb3VuZDogIzdkNmVjYztcbn1cbi5idG5MaWdodEJsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDEzNzc0O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5hZGRSZWYge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5idG5MaWdodEJsdWUuYWRkUmVmIC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5idG5MaWdodEJsdWUudGRCdG4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5idG5MaWdodEJsdWUudGRCdG4gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIuNXB4O1xuICByaWdodDogOHB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS50ZEJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5idG5MaWdodEJsdWUuY29tcEJ0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxNDVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5jb21wQnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAwcHg7XG59XG4uYnRuTGlnaHRCbHVlLnN2QnRuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmJ0bkxpZ2h0Qmx1ZS5zdkJ0biAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG5PcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZTkxYjAwO1xufVxuLmJ0bk9yYW5nZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM4ZjEzMDM7XG59XG4uYnRuT3JhbmdlLnJlZGljbyB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5idG5PcmFuZ2UucmVkaWNvIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0blB1cnBsZSB7XG4gIGJhY2tncm91bmQ6ICNBNzQ5ODI7XG59XG4uYnRuUHVycGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzY0MjY0Yjtcbn1cbi5idG5QdXJwbGUucHJldmlldyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5idG5QdXJwbGUuZWJja0J0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmJ0blB1cnBsZS5lYmNrQnRuIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IDNweDtcbn1cbi5idG5QdXJwbGUuYWRkUmVmIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYnRuUHVycGxlLmFkZFJlZiAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8qIEZBREUgKi9cbi5idG5GYWRlLmJ0bkJsdWVHcmVlbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMTgyNUI7XG59XG5cbi5idG5GYWRlLmJ0bkxpZ2h0Qmx1ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDk3ZjY7XG59XG5cbi5idG5GYWRlLmJ0bk9yYW5nZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGRjhFMDA7XG59XG5cbi5idG5GYWRlLmJ0blB1cnBsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM2RDE4NEI7XG59XG5cbi8qIDNEICovXG4uYnRuUHVzaDpob3ZlciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmFkZC1yZW1vdmUtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjczOSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtc2VtaWJvbGRcIjtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuOjpuZy1kZWVwIC5hZy1jZWxsLWxhYmVsLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1pY29uLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EklwiO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLWljb24tbWVudTpiZWZvcmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuOjpuZy1kZWVwIC5hZy1ncmlkLXdyYXBwZXIge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiO1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93IHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93IHtcbiAgYmFja2dyb3VuZDogIzMyM0M1MDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93LW9kZCB7XG4gIGJhY2tncm91bmQ6ICMxRjI3Mzk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLWhlYWRlci1jZWxsLCAuYWctdGhlbWUtYWxwaW5lIC5hZy1oZWFkZXItZ3JvdXAtY2VsbCB7XG4gIGJvcmRlci1jb2xvcjogIzMyM0M1MDtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLXBhZ2luZy1wYW5lbCB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1yZWd1bGFyXCI7XG59XG5cbi5hY3QtYnRuLXdyYXBwZXIxIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wYWQtdHAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50cGxhYmVsIHtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZDogI2VlZThmODtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmE4MDA7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiYzc2NjtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMxNThkMWU7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAubWF0LXN0ZXAtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGI3Yjc7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZS1zdHlsZSA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWRlZmF1bHQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBib3JkZXItdG9wOiAwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gIGJvdHRvbTogLThweDtcbiAgaGVpZ2h0OiAycHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBib3R0b206IC04cHg7XG4gIGhlaWdodDogM3B4O1xufVxuXG4ubWF0LWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdhZmUyO1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggI2E0OTdlYSwgMHB4IDJweCAxN3B4ICNlYmU4ZmI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi55ZWxsb3cge1xuICBjb2xvcjogI2VmYTgwMDtcbn1cblxuLmhvcml6b250YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWZhODAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cbi5ob3Jpem9udGFsID4gLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMzIyYTU0O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZGM3ODk2IDAlLCAjZGM3ODk2IDUwJSwgI2VmYTgwMCA1MCUsICNlZmE4MDAgMTAwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDMwMG1zO1xufVxuLmhvcml6b250YWwgPiAudGV4dC5wc3Qge1xuICB0b3A6IC02cHg7XG59XG4uaG9yaXpvbnRhbCA+IC50ZXh0IC5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA3cHg7XG4gIGNvbG9yOiAjZWZhODAwO1xufVxuLmhvcml6b250YWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWZhODAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xufVxuLmhvcml6b250YWw6aG92ZXIgLnRleHQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhvcml6b250YWw6aG92ZXIgLnRleHQgLm1hdC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaG9yaXpvbnRhbDpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG59XG4uaG9yaXpvbnRhbC5hbGlnbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmN2Y3ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1zZW1pYm9sZFwiO1xufVxuXG46Om5nLWRlZXAgLmFnLWNlbGwtbGFiZWwtY29udGFpbmVyIHtcbiAgY29sb3I6ICMzNzM3MzcgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLWljb24tZmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SSXCI7XG4gIGNvbG9yOiAjYWVkYWRhO1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaWNvbi1tZW51OmJlZm9yZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46Om5nLWRlZXAgLmFnLWdyaWQtd3JhcHBlciB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1yZWd1bGFyXCI7XG59XG5cbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1yb3cge1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiO1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG59XG5cbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1yb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzM3MzczNztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG59XG5cbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1yb3ctb2RkIHtcbiAgYmFja2dyb3VuZDogI2YwZjdmNztcbiAgY29sb3I6ICMzNzM3Mzc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaGVhZGVyLWNlbGwsIC5hZy10aGVtZS1hbHBpbmUgLmFnLWhlYWRlci1ncm91cC1jZWxsIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzIzQzUwO1xufVxuXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcGFnaW5nLXBhbmVsIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG59XG5cbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbn1cblxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLXBhZ2luZy1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmMGY3Zjc7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmltYXJ5LWJ0bi1ncmF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkOTE5MSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmJjMWMxICFpbXBvcnRhbnQ7XG59XG5cbi5sZ2Ige1xuICBjb2xvcjogIzQzMzY4Mztcbn1cblxuLmNwdCB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jcHQxIHtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLXJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG50cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNmMGY3Zjc7XG59XG5cbi5hbmFseXNpcy1wcmV2aWV3IC50YWJsZSB0Ym9keSB0ZCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ud3RCZyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTIwcHg7XG4gIHRvcDogLTdweDtcbn1cblxuLm1tIHtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYWNjb3JkaW9ucyA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDAgMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLm10MiB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubW0yIHtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvck1hcCA6Om5nLWRlZXAgLmhpZ2hjaGFydHMtcm9vdCB7XG4gIHdpZHRoOiAxNTA2cHggIWltcG9ydGFudDtcbn1cblxuLnNwZWMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjNDMzNjgzO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBhZGRpbmc6IDAgN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGFiQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAtMzhweDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYmFja2dyb3VuZDogZGFya3NhbG1vbjtcbiAgd2lkdGg6IDEyNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYkJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjMjY2NDg7XG59XG5cbi50YWJCdG4yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAtNDNweDtcbiAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYmFja2dyb3VuZDogcGFsZXZpb2xldHJlZDtcbiAgd2lkdGg6IDE0MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYkJ0bjI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjQ1Njc1O1xufVxuXG4ucnVsZXMtbG9hZGluZy1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNTJweDtcbn1cbi5ydWxlcy1sb2FkaW5nLW1lc3NhZ2UgLm1hdC1zcGlubmVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5ydWxlVGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufSIsIi5ob21lLXdyYXBwZXIge1xyXG4gICAuZmxleC1pdGVtLWgge1xyXG4gICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xyXG4gICB9XHJcbiAgIC5zZWMtdGl0bGUge1xyXG4gICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICB9XHJcbiAgIC5zdHJvbmctdGl0bGUge1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgIH1cclxuICAgLmZsZXgtaXRlbS1oIHtcclxuICAgICB3aWR0aDogMzMlO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgcGFkZGluZzogMzRweDtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgIC5zZWNvbmRhcnktYnRuIHtcclxuICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDIwMG1zO1xyXG4gICAgICAgYm9yZGVyLWNvbG9yOiAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgICAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgICB9XHJcbiAgICAgJjpob3ZlciB7XHJcbiAgICAgICAuZmxleC1vdmVybGF5IHtcclxuICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAyMDBtcztcclxuICAgICAgIH1cclxuICAgICAgIC5zZWNvbmRhcnktYnRuIHtcclxuICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAyMDBtcztcclxuICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzhkMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgICAuZmxleC1vdmVybGF5IHtcclxuICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDEwMG1zO1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgbGVmdDogMDtcclxuICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgdG9wOiAwO1xyXG4gICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcclxuICAgICB9XHJcbiAgIH1cclxuICAgLnByb2Zlc3Npb25hbCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NzE0OTtcclxuICAgfVxyXG4gICAucGVyc29uYWwge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTUxNTk7XHJcbiAgICAgd2lkdGg6IDM0JTtcclxuICAgfVxyXG4gICAuY29tbXVuaXR5IHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI1NjUxO1xyXG4gICB9XHJcbiAgIC5sZWZ0LXBhbm5lbCB7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgd2lkdGg6IDI4MnB4O1xyXG4gICB9XHJcbiAgIC5ob21lLXBhbmVsIHtcclxuICAgICAubWF0LWNhcmQge1xyXG4gICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggIzAwMDAwMDI5O1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VCRUJFQiAhaW1wb3J0YW50O1xyXG4gICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICYuZm9udHtcclxuICAgICAgICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWxpZ2h0JyFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICAgICAudXNlci1pbWFnZSB7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICB3aWR0aDogNjhweDtcclxuICAgICAgIH1cclxuICAgICAgIC5wb3N0LXVzZXItaW5mbyB7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiA4OHB4O1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gICAucmVtb3ZlLWJ0biB7XHJcbiAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICB9XHJcbiAgIC5zaHJhcmUtcG9zdCB7XHJcbiAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgIH1cclxuICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICB9XHJcbiAgICAgLnNoYXJlLXBvc3QtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjMzIyYTU0O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4IDIwcHggMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICBib3R0b206IC0xMnB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmE4MDA7XHJcbiAgICAgICB9XHJcbiAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICBib3R0b206IC0xMHB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgbWF4LXdpZHRoOiAxODFweDtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmYTgwMDtcclxuICAgICAgIH1cclxuICAgIH1cclxuICAgICAuc2hhcmUtYnRuIHtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICBjb2xvcjogIzdCN0M3RDtcclxuICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICBwYWRkaW5nOiAycHggMTBweCAycHggMnB4O1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIC5teS1jb21tdW5pdHktYm9keSAubGlzdCB7XHJcbiAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG4gICB9IFxyXG4gICAuYW5hbHlzaXMtY2FyZCB7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB9XHJcbiAgIC5jb2wtc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgICAgbWFyZ2luOiAxMnB4O1xyXG4gICB9XHJcbiB9XHJcbiAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICYuYngtc2R3e1xyXG4gICAgICBib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O1xyXG4gICB9XHJcbiB9XHJcbiAucnVsZS1saXN0LXdycCB7XHJcbiAgIG1hcmdpbjogMDtcclxuICAgLmNkZS1maWVsZHMtd3JwIHtcclxuICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgLnJ1bGUtdGl0bGUge1xyXG4gICAgIG1hcmdpbjogMTRweCAwIDRweCAwO1xyXG4gICB9XHJcbiAgIGg1e1xyXG4gICAgICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcclxuICAgfVxyXG4gfVxyXG4gXHJcbiAuY2F0ZWdvcnktbGlzdCB7XHJcbiAgIC5jYXRlZ29yeS1pdGVtIHtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcclxuICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjEyKTtcclxuICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgLmNhdC1pY29uIHtcclxuICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgIGNvbG9yOiAjNTI1MjUyO1xyXG4gICAgIH1cclxuICAgICAuY2F0LXRpdGxlIHtcclxuICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgICB9XHJcbiAgICAgJjpob3ZlciB7XHJcbiAgICAgICBib3gtc2hhZG93OiAwIDEwcHggNDBweCAxcHggcmdiYSgwLDAsMCwuMTcpO1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICB9XHJcbiAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDMzNjgzO1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQzMzY4MztcclxuICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggMXB4IHJnYmEoMCwwLDAsLjE3KTtcclxuICAgICAgIC5jYXQtaWNvbiwgLmNhdC10aXRsZSB7XHJcbiAgICAgICAgIC8vY29sb3I6ICM1OWJmZmY7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgJjpmb2N1cyB7XHJcbiAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgIH1cclxuICAgfVxyXG4gfVxyXG4gLmNhdGVnb3J5LWxpc3Qtd3JhcHBlciB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgIC5sZWZ0LWFycm93IHtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICB3aWR0aDogNTBweDtcclxuICAgfSAgXHJcbiAgIC5jYXRlZ29yeS1saXN0IHtcclxuICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgfVxyXG4gICAucmlnaHQtYXJyb3cge1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgfVxyXG4gICBidXR0b24ge1xyXG4gICAgICYucHJldi1uZXh0LWJ0biB7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgcGFkZGluZzogMDtcclxuICAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgfVxyXG4gfVxyXG4gLnRhYmxlIHtcclxuICAgLmxhYmVsIHtcclxuICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLXJlZ3VsYXInO1xyXG4gICB9XHJcbiAgIC5sYWJlbDEge1xyXG4gICAgICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIjtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogI2VmYTgwMDtcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZXhwQnRuIHtcclxuICAgICAgIHdpZHRoOjE4NXB4O1xyXG4gICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICBoNCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIC8vbWFyZ2luLXRvcDogMTdweDtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgLyogcGFkZGluZy1ib3R0b206IDEwcHg7ICovXHJcbiAgICAgIC8qIHBhZGRpbmctbGVmdDogMTBweDsgKi9cclxuICAgICAgLyogcGFkZGluZy10b3A6IDVweDsgKi9cclxuICAgICAgY29sb3I6ICMzMjJhNTQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm9wZW4tc2Fucy1jb25kZW5zZWQtYm9sZFwiO1xyXG4gICAgICAubWF0LWljb257XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gfVxyXG4gLnRhYmxlIHRoe1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJztcclxuIH1cclxuLy8gIC50YWJsZSB0ZHtcclxuLy8gICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtcmVndWxhcic7XHJcbi8vICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4vLyAgfVxyXG4gLnJ1bGUtdGFibGUge1xyXG4gICAvL3dpZHRoOiA3ODBweDtcclxuICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNjY2M7XHJcbiAgIG1hcmdpbi1ib3R0b206MHB4IWltcG9ydGFudDtcclxuICBcclxuIH1cclxuIC5vdXRsaW5lIG1hdC1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgICBjb2xvcjogIzM3MzczNztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuIH1cclxuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgIGJveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gfVxyXG4gLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDoxcHg7XHJcbiB9XHJcbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweCAxNHB4IDBweCFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzQ4NDg0ODtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJyFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW46IC4xMWVtIDAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubXRvcHtcclxuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuYmRye1xyXG4gICAgIGhlaWdodDogMXB4O1xyXG4gICAgIGJhY2tncm91bmQ6I2U3ZTdlNztcclxuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XHJcbiAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNlN2U3ZTcsI2U3ZTdlNyk7XHJcbiAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcclxuICB9XHJcbiBcclxuICA6Om5nLWRlZXAubWF0LWNhcmR7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAjMDAwMDAwMjk7XHJcbiAgfVxyXG4gIDo6bmctZGVlcC5tYXQtc2VsZWN0e1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCchaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAubWF0LW9wdGlvbiB7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLXJlZ3VsYXInIWltcG9ydGFudDtcclxuICB9XHJcbiBcclxuICAubWF0LWVycm9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgJi5uc3tcclxuICAgICAgYmFja2dyb3VuZDogI0ZGQkFCQTtcclxuICAgICAgY29sb3I6ICNEODAwMEM7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogLTRweDtcclxuICAgICAgbGVmdDogLTlweDtcclxuICAgIH1cclxuIH1cclxuIC5tYXItaWNvIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuIH1cclxuIC5wYWR7XHJcbiAgICBwYWRkaW5nOjAgMTVweCFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuaWNvLWFsaWduIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTZweCFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAucHJpbWFyeS1idG4tcmVke1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJyFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gfVxyXG4gLnRhYmxlIHRib2R5IHRke1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnIWltcG9ydGFudDtcclxuICAgICYuZnR7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1saWdodCchaW1wb3J0YW50O1xyXG4gICAgfSAgICBcclxuIH1cclxuXHJcblxyXG4gLnByaW1hcnktYnRuLWdyYXkge1xyXG4gICAubWF0LWljb24ge1xyXG4gICAgICAmLnBse1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogLTE3cHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gfSBcclxuXHJcbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgYm9yZGVyLWNvbG9yOiAjZTdlN2U3IWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHghaW1wb3J0YW50O1xyXG4gfVxyXG4gOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlLXRleHR7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJyFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAudHBse1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweCFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAudGFibGUgdGJvZHkgdGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweCFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAudGFibGUgdGQuc3Ryb25nIHtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbi5ydWxlLWRldGFpbHMtaW5mbyB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4MnB4KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uY29ycmVsYXRpb24taW5mbyB7XHJcbiAgbWFyZ2luOiAwIDAgMCAyMnB4O1xyXG4gIHdpZHRoOiA0NjBweDtcclxufVxyXG4uZWRpdC1saW5rIHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgYmFja2dyb3VuZDogIzQzMzY4MztcclxuICAgZGlzcGxheTogaW5saW5lO1xyXG4gICBmbG9hdDogcmlnaHQ7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mb3JtdWxhLXByZXZpZXcge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JjYmNiO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlOGY4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDFweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICYubm9ie1xyXG4gICBiYWNrZ3JvdW5kOm5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm9wZXJhdG9yIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICYuYWxjYXAxe1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtcmVndWxhclwiO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAmLmFsY2Fwe1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTpcIm9wZW4tc2Fucy1yZWd1bGFyXCI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wcmV2aWV3IC5mb3JtdWxhLXByZXZpZXcge1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vLyBidXR0b25zXHJcblxyXG4uYnV0dG9uM2Qge1xyXG4gIC8vZGlzcGxheTogYmxvY2s7XHJcbiAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy9mbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIDtcclxuICBmb250LWZhbWlseTogXCJvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGRcIiFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6ZGlzYWJsZWR7XHJcbiAgICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgICAvL2JveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNDg0ODQ4O1xyXG4gICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bkJsdWVHcmVlbiB7XHJcbiAgYmFja2dyb3VuZDogIzAwQUU2ODtcclxuICAmOmhvdmVye1xyXG4gICBiYWNrZ3JvdW5kOiAjMDE2MTNiO1xyXG4gIH1cclxuICAmLmFkZGljb3tcclxuICAgICB3aWR0aDogMjZweDtcclxuICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICB9XHJcbiAgfVxyXG4gICYudG9sbGljb3tcclxuICAgd2lkdGg6IDE0MHB4O1xyXG4gICBoZWlnaHQ6IDI2cHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICBvdXRsaW5lOiBub25lO1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIC8vcGFkZGluZy10b3A6IDNweDtcclxuICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgLm1hdC1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOjJweDtcclxuICAgICAgbGVmdDoxMHB4O1xyXG4gICB9XHJcbn1cclxufVxyXG5cclxuLmJ0bkxpZ2h0Qmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogIzdkNmVjYztcclxuICAmOmhvdmVye1xyXG4gICBiYWNrZ3JvdW5kOiAjNDEzNzc0O1xyXG4gIH1cclxuICAmLmFkZFJlZntcclxuICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgIH1cclxuICB9XHJcbiAgJi50ZEJ0bntcclxuICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgIGhlaWdodDogNDBweDtcclxuICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMi41cHg7XHJcbiAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICB9XHJcbiAgICAgJjpkaXNhYmxlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgIC8vYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM0ODQ4NDg7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgfVxyXG4gIH1cclxuICAmLmNvbXBCdG57XHJcbiAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgIHdpZHRoOiAxNDVweDtcclxuICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgIC5tYXQtaWNvbntcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5zdkJ0bntcclxuICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgIGhlaWdodDogMzdweDtcclxuICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAubWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgIH1cclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi5idG5PcmFuZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNlOTFiMDA7XHJcbiAgJjpob3ZlcntcclxuICAgYmFja2dyb3VuZDogIzhmMTMwMztcclxuICB9XHJcbiAgJi5yZWRpY297XHJcbiAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgIC5tYXQtaWNvbntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgfVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuLmJ0blB1cnBsZSB7XHJcbiAgYmFja2dyb3VuZDogI0E3NDk4MjtcclxuICAmOmhvdmVye1xyXG4gICBiYWNrZ3JvdW5kOiAjNjQyNjRiO1xyXG4gIH1cclxuICAmLnByZXZpZXd7XHJcbiAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgIGhlaWdodDogMzBweDtcclxuICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICB9XHJcbiAgJi5lYmNrQnRue1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICB3aWR0aDogOTVweDtcclxuICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAubWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgIH1cclxuICB9XHJcbiAgJi5hZGRSZWZ7XHJcbiAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgIHdpZHRoOiAxNjBweDtcclxuICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGQURFICovXHJcbi5idG5GYWRlLmJ0bkJsdWVHcmVlbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzIxODI1QjtcclxufVxyXG5cclxuLmJ0bkZhZGUuYnRuTGlnaHRCbHVlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA5N2Y2O1xyXG59XHJcblxyXG4uYnRuRmFkZS5idG5PcmFuZ2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNGRjhFMDA7XHJcbn1cclxuXHJcbi5idG5GYWRlLmJ0blB1cnBsZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzZEMTg0QjtcclxufVxyXG5cclxuLyogM0QgKi9cclxuLy8gIC5idG5CbHVlR3JlZW4uYnRuUHVzaCB7XHJcbi8vICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMDA3MTQ0O1xyXG4vLyAgfVxyXG5cclxuLy8gIC5idG5MaWdodEJsdWUuYnRuUHVzaCB7XHJcbi8vICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMzIyYTU0O1xyXG4vLyAgfVxyXG5cclxuLy8gIC5idG5PcmFuZ2UuYnRuUHVzaCB7XHJcbi8vICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjOGMxODA4O1xyXG4vLyAgfVxyXG5cclxuLy8gIC5idG5QdXJwbGUuYnRuUHVzaCB7XHJcbi8vICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNkQxODRCO1xyXG4vLyAgfVxyXG5cclxuLmJ0blB1c2g6aG92ZXIge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4vLyAgLmJ0bkJsdWVHcmVlbi5idG5QdXNoOmhvdmVyIHtcclxuLy8gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMwMDcxNDQ7XHJcbi8vICB9XHJcblxyXG4vLyAgLmJ0bkxpZ2h0Qmx1ZS5idG5QdXNoOmhvdmVyIHtcclxuLy8gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMxRTgxODU7XHJcbi8vICB9XHJcblxyXG4vLyAgLmJ0bk9yYW5nZS5idG5QdXNoOmhvdmVyIHtcclxuLy8gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICNBNjY2MTU7XHJcbi8vICB9XHJcblxyXG4vLyAgLmJ0blB1cnBsZS5idG5QdXNoOmhvdmVyIHtcclxuLy8gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICM2RDE4NEI7XHJcbi8vICB9XHJcbiAuYWRkLXJlbW92ZS1idXR0b24ge1xyXG4gICBtaW4td2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1oZWFkZXJ7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IzFGMjczOSFpbXBvcnRhbnQ7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLXNlbWlib2xkJztcclxuICAgYm9yZGVyLWJvdHRvbTogMDsgIFxyXG59XHJcbjo6bmctZGVlcCAuYWctY2VsbC1sYWJlbC1jb250YWluZXJ7XHJcbiAgIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaWNvbi1maWx0ZXI6YmVmb3JlIHtcclxuICAgY29udGVudDogXCJcXGYxMTJcIjtcclxuICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1pY29uLW1lbnU6YmVmb3JlIHtcclxuICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctZ3JpZC13cmFwcGVye1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJztcclxufVxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93e1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJztcclxuICAgYm9yZGVyLXdpZHRoOjBweDtcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG4gICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxufVxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93e1xyXG4gICBiYWNrZ3JvdW5kOiMzMjNDNTA7XHJcbiAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbiAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG59XHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1yb3ctb2Rke1xyXG4gICBiYWNrZ3JvdW5kOiMxRjI3Mzk7XHJcbiAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbiAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaGVhZGVyLWNlbGwsIC5hZy10aGVtZS1hbHBpbmUgLmFnLWhlYWRlci1ncm91cC1jZWxsIHtcclxuICAgYm9yZGVyLWNvbG9yOiMzMjNDNTAgO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcGFnaW5nLXBhbmVse1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmV7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLXJlZ3VsYXInO1xyXG59XHJcbi5hY3QtYnRuLXdyYXBwZXIxeyBcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnBhZC10cHtcclxuICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcclxuICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRwbGFiZWx7XHJcbiAgIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIC5tYXQtc3RlcHBlci1ob3Jpem9udGFse1xyXG4vLyAgICBiYWNrZ3JvdW5kOiAjZWJlOGZiO1xyXG4vLyB9XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgYmFja2dyb3VuZDogI2VlZThmODtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmE4MDA7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiYzc2NjtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzE1OGQxZTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwgLm1hdC1zdGVwLWljb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YjdiNztcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWljb257XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRhdGUtc3R5bGUge1xyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4e1xyXG4gICAgIC8vYmFja2dyb3VuZDogI2VlZThmOCFpbXBvcnRhbnQ7XHJcbiAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgfVxyXG59XHJcbjo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWRlZmF1bHQtaWNvbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1cHghaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gIGJvcmRlci10b3A6IDBweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xyXG4gIGJvdHRvbTogLThweDtcclxuICBoZWlnaHQ6IDJweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtcmlwcGxle1xyXG4gIGJvdHRvbTogLThweDtcclxuICBoZWlnaHQ6IDNweDtcclxufVxyXG4ubWF0LWNhcmR7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2FmZTI7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAvL2JhY2tncm91bmQ6ICNlMWQ3ZmM7XHJcbiAgIGJveC1zaGFkb3c6IDBweCAxcHggNHB4ICNhNDk3ZWEsIFxyXG4gICAwcHggMnB4IDE3cHggI2ViZThmYjtcclxuICAgYmFja2dyb3VuZDojZmZmO1xyXG59XHJcbi55ZWxsb3d7IGNvbG9yIDojZWZhODAwfVxyXG4uaG9yaXpvbnRhbCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIC8vIHdpZHRoOiA0MDBweDtcclxuICAgLy8gaGVpZ2h0OiAxMjBweDtcclxuICAgLy8gbWFyZ2luOiAyMHB4O1xyXG4gICBib3JkZXI6IDJweCBzb2xpZCAjZWZhODAwO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkJztcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICBoZWlnaHQ6IDMwcHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgIFxyXG4gICA+IC50ZXh0IHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgY29sb3I6ICMzMjJhNTQ7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtY29uZGVuc2VkLWJvbGQnO1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgIDkwZGVnLFxyXG4gICAgICAgcmdiYSgyMjAsIDEyMCwgMTUwLCAxKSAwJSxcclxuICAgICAgIHJnYmEoMjIwLCAxMjAsIDE1MCwgMSkgNTAlLFxyXG4gICAgICAgI2VmYTgwMCA1MCUsXHJcbiAgICAgICAjZWZhODAwIDEwMCVcclxuICAgICApO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcclxuICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAzMDBtcztcclxuICAgICAmLnBzdHtcclxuICAgICAgdG9wOiAtNnB4O1xyXG4gICAgIH1cclxuICAgICAubWF0LWljb257XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA3cHg7XHJcbiAgICAgIGNvbG9yOiAjZWZhODAwO1xyXG4gICAgIH1cclxuICAgfVxyXG4gICBcclxuICAgJjo6YmVmb3JlIHtcclxuICAgICBjb250ZW50OiAnJztcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiAwO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQ6ICNlZmE4MDA7XHJcbiAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xyXG4gICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcclxuICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XHJcbiAgIH1cclxuICAgXHJcbiAgICY6aG92ZXIge1xyXG4gICAgIC50ZXh0IHtcclxuICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgIH1cclxuICAgJi5hbGlnbntcclxuICAgICAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgIH1cclxuIH1cclxuXHJcbiA6Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaGVhZGVye1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGY3ZjchaW1wb3J0YW50O1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1zZW1pYm9sZCc7XHJcbiAgIC8vYm9yZGVyLWJvdHRvbTogMDsgIFxyXG59XHJcbjo6bmctZGVlcCAuYWctY2VsbC1sYWJlbC1jb250YWluZXJ7XHJcbiAgIGNvbG9yOiAjMzczNzM3IWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaWNvbi1maWx0ZXI6YmVmb3JlIHtcclxuICAgY29udGVudDogXCJcXGYxMTJcIjtcclxuICAgY29sb3I6ICNhZWRhZGE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1pY29uLW1lbnU6YmVmb3JlIHtcclxuICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctZ3JpZC13cmFwcGVye1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJztcclxufVxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93e1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJztcclxuICAgYm9yZGVyLXdpZHRoOjBweDtcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG4gICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxufVxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcm93e1xyXG4gICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgIGNvbG9yOiAjMzczNzM3O1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbiAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG59XHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1yb3ctb2Rke1xyXG4gICBiYWNrZ3JvdW5kOiNmMGY3Zjc7XHJcbiAgIGNvbG9yOiAjMzczNzM3O1xyXG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XHJcbiAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctaGVhZGVyLWNlbGwsIC5hZy10aGVtZS1hbHBpbmUgLmFnLWhlYWRlci1ncm91cC1jZWxsIHtcclxuICAgYm9yZGVyLWNvbG9yOiMzMjNDNTAgO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctcGFnaW5nLXBhbmVse1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmV7XHJcbiAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zLXJlZ3VsYXInO1xyXG59XHJcbjo6bmctZGVlcCAuYWctdGhlbWUtYWxwaW5lIC5hZy1wYWdpbmctcGFuZWx7XHJcbiAgIGJhY2tncm91bmQ6ICNmMGY3Zjc7XHJcbn1cclxuLy8gOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciB7XHJcbi8vICAgIC8vYmFja2dyb3VuZDogI2YwZjdmNztcclxuLy8gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCA4cHggLTdweCByZ2JhKDY1LDY2LDY2LDEpO1xyXG4vLyAgICAgIC1tb3otYm94LXNoYWRvdzogLTFweCA3cHggOHB4IC03cHggcmdiYSg2NSw2Niw2NiwxKTtcclxuLy8gICAgICBib3gtc2hhZG93OiAtMXB4IDdweCA4cHggLTdweCByZ2JhKDY1LDY2LDY2LDEpOyAgICBcclxuLy8gIH1cclxuLy8gIDo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4vLyAgICBwYWRkaW5nOjBweCFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBpbmhlcml0IWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVse1xyXG4vLyAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuLy8gICAgYmFja2dyb3VuZDogIzZiYzFjMSFpbXBvcnRhbnQ7XHJcbi8vICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4vLyB9XHJcbi8vIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4vLyAgICBiYWNrZ3JvdW5kOiAjMmQ3Nzc3IWltcG9ydGFudDtcclxuLy8gICAgY29sb3I6ICNmZmY7XHJcbi8vICAgIC8vb3BhY2l0eTogMTtcclxuLy8gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyZDc3Nzc7XHJcbi8vIH1cclxuLy8gOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVscyB7XHJcbi8vICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmQ3Nzc3O1xyXG4vLyAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudHtcclxuLy8gICAgZm9udC1mYW1pbHk6IFwib3Blbi1zYW5zLWNvbmRlbnNlZC1ib2xkXCI7XHJcbi8vICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4vLyAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vIH1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250YWluZXJ7XHJcbi8vICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuLy8gfVxyXG5cclxuLnByaW1hcnktYnRuLWdyYXkge1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjM2Q5MTkxICFpbXBvcnRhbnQ7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM2YmMxYzEgIWltcG9ydGFudDtcclxufVxyXG4ubGdie1xyXG4gICBjb2xvcjogIzQzMzY4MztcclxufVxyXG4uY3B0e1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uY3B0MXtcclxuICAgZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMtcmVndWxhcic7XHJcbiAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG50cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNmZmZmZmYgfVxyXG50cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI2YwZjdmN31cclxuLmFuYWx5c2lzLXByZXZpZXcgLnRhYmxlIHRib2R5IHRke1xyXG4gICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xyXG4gICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1yZWd1bGFyJyFpbXBvcnRhbnQ7XHJcbiAgIHBhZGRpbmctbGVmdDogMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnd0Qmd7XHJcbiAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICBtYXJnaW46IDBweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9ye1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGxlZnQ6IC0yMHB4O1xyXG4gICB0b3A6IC03cHg7XHJcbn1cclxuLm1te1xyXG4gICBtYXJnaW4tdG9wOiA1cHghaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSl7YmFja2dyb3VuZCA6IHdoaXRlICFpbXBvcnRhbnR9XHJcblxyXG4uYWNjb3JkaW9uc3tcclxuICAgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAwcHggMHB4IDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxufVxyXG5cclxuXHJcbi5tdDJ7XHJcbiAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tbTJ7XHJcbiAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC10YWItZ3JvdXB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmNvck1hcCB7XHJcbiAgIDo6bmctZGVlcCAuaGlnaGNoYXJ0cy1yb290e1xyXG4gICAgICB3aWR0aDogMTUwNnB4IWltcG9ydGFudDtcclxuICAgfVxyXG59XHJcblxyXG4uc3BlY3tcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgYmFja2dyb3VuZDogIzQzMzY4MztcclxuICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICBwYWRkaW5nOiAwIDdweDtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRhYkJ0bntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdG9wOiAtMzhweDtcclxuICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJhY2tncm91bmQ6IGRhcmtzYWxtb247XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE5NCwgMTAyLCA3Mik7XHJcbiAgfVxyXG59XHJcblxyXG4udGFiQnRuMntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdG9wOiAtNDNweDtcclxuICBmb250LWZhbWlseTogJ29wZW4tc2Fucy1jb25kZW5zZWQtYm9sZCc7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHBhbGV2aW9sZXRyZWQ7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE4MCwgODYsIDExNyk7XHJcbiAgfVxyXG59XHJcbi5ydWxlcy1sb2FkaW5nLW1lc3NhZ2Uge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogNTJweDtcclxuICAubWF0LXNwaW5uZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5ydWxlVGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/authorized/ruleset/ruleset.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/authorized/ruleset/ruleset.component.ts ***!
  \********************************************************************/
/*! exports provided: RulesetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesetComponent", function() { return RulesetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/http-service.service */ "./src/app/services/http-service.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _shared_formula_editor_formula_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/formula-editor/formula-editor.component */ "./src/app/shared/formula-editor/formula-editor.component.ts");
/* harmony import */ var _shared_advanced_formula_editor_advanced_formula_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/advanced-formula-editor/advanced-formula-editor.component */ "./src/app/shared/advanced-formula-editor/advanced-formula-editor.component.ts");
/* harmony import */ var _shared_conditional_formula_editor_conditional_formula_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/conditional-formula-editor/conditional-formula-editor.component */ "./src/app/shared/conditional-formula-editor/conditional-formula-editor.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_app_shared_deactive_dialog_deactive_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/deactive-dialog/deactive-dialog.component */ "./src/app/shared/deactive-dialog/deactive-dialog.component.ts");
/* harmony import */ var _ruleset_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ruleset.constants */ "./src/app/components/authorized/ruleset/ruleset.constants.ts");

















/**
 * @title Basic expansion panel
 */
let RulesetComponent = class RulesetComponent {
    constructor(fb, dialog, route, http, router, activatedRoute, authGuardService, messageService, location) {
        this.fb = fb;
        this.dialog = dialog;
        this.route = route;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authGuardService = authGuardService;
        this.messageService = messageService;
        this.location = location;
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
            autoplaySpeed: 0,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            margin: 5,
            navSpeed: 0,
            navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
            autoWidth: true,
            nav: false,
            items: 6,
            responsive: {
                0: {
                    items: 3,
                    center: true,
                    loop: true,
                },
                740: {
                    items: 5,
                    center: false,
                    loop: false,
                }
            },
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
        this.isRulesLoading = false;
        this.initRuleValue = false;
        this.selectedColumnsCopy = [];
        this.showCDECar = false;
        this.analyseData = [];
        this.sourceId = '';
        this.rulesetId = '';
        this.cdeStatistics = {};
        this.correlationSummary = {};
        // Rule Dropdowns
        this.ruleType = 'dataType';
        this.ruleOperator = '';
        this.ruleValue = '';
        this.ruleFormat = '';
        this.ruleDimenstion = '';
        this.ruleTypeList = _ruleset_constants__WEBPACK_IMPORTED_MODULE_16__["RuleTypeList"];
        this.ruleOperatorList = _ruleset_constants__WEBPACK_IMPORTED_MODULE_16__["RuleOperatorList"];
        this.ruleValueList = _ruleset_constants__WEBPACK_IMPORTED_MODULE_16__["RuleValueList"];
        this.ruleFormatList = _ruleset_constants__WEBPACK_IMPORTED_MODULE_16__["RuleFormatList"];
        this.ruleDimenstionList = _ruleset_constants__WEBPACK_IMPORTED_MODULE_16__["RuleDimenstionList"];
        this.isPreviewLoaded = false;
        this.isPreviewLoading = false;
        this.defaultColDefs = { sortable: true, filter: true, minWidth: 180, resizable: true };
        this.rowData = [];
        this.columnDefs = [];
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_14__().format('YYYY-MM-DD');
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_14__(moment__WEBPACK_IMPORTED_MODULE_14__().add(6, 'months')).format('YYYY-MM-DD');
        this.rulesetNames = [];
        this.visibleIndex = -1;
        this.getColumnnRuleBySync = (selectedColumns, payload) => {
            this.getColumnnRuleRequest(payload, () => {
                selectedColumns.splice(0, 7);
                if (selectedColumns.length) {
                    payload.selectedColumns = selectedColumns.slice(0, 7);
                    this.getColumnnRuleBySync(selectedColumns, payload);
                }
                else {
                    this.isRulesLoading = false;
                }
            });
        };
        this.getColumnnRuleRequest = (payload, callBack) => {
            this.http.getColumnsRules(payload).subscribe((result) => {
                this.isLoading = false;
                this.rulesList = this.rulesList.concat(result);
                if (this.rulesList.length && this.initRuleValue) {
                    const firstRule = this.rulesList[0];
                    this.selectedRuleColumn = firstRule.column;
                    this.cdeStatistics = (firstRule.statistics && firstRule.statistics.length) ? firstRule.statistics[0] : {};
                    this.correlationSummary = firstRule.correlationSummary ? firstRule.correlationSummary : {};
                    this.initRuleValue = false;
                }
                this.initRulesFormArray();
                callBack();
            }, (error) => {
                this.isLoading = false;
                callBack();
            });
        };
        this.appConfig = _app_config__WEBPACK_IMPORTED_MODULE_10__["appConfig"];
        this.route.queryParams.subscribe(params => {
            this.sourceId = params.sourceId;
            this.mode = params.mode;
            this.rulesetId = params.rulesetId;
            if (!params.sourceId) {
                localStorage.removeItem('analysis');
            }
        });
        location.subscribe((back) => {
            this.backType = back.type;
        });
    }
    //   Analysis View
    // - By Column Selection (Single Column, Multiple Column)
    // - Chart View
    // - Chart Drill View
    // - Highliht settings
    // - Ruleset - start and end
    // - Reference CDE (REF1 - COL_NAME)
    get afControls() { return this.analysisForm.controls; }
    ngOnInit() {
        this.isUserLoggedIn = this.authGuardService.isUserLoggedIn();
        this.user = this.authGuardService.getLoggedInUserDetails();
        this.userId = this.user.user_id;
        this.getAllSources();
        if (localStorage.getItem('isInitLoad') && !this.user.emailVerified && !this.user.phonenoVerified) {
            // this.showVerifyEmailPhoneDialog();
        }
        localStorage.removeItem('isInitLoad');
        this.columnsForm = this.fb.group({
            columns: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            sourceColumns: [''],
            refernceColumns: [[]]
        });
        const analysis = this.messageService.getAnalysis();
        // const targetDate = moment(moment().add(60, 'days')).format('YYYY-MM-DD');
        this.analysisForm = this.fb.group({
            sourceId: [{ value: analysis.sourceId || '', disabled: true }],
            name: [{ value: analysis.source.sourceDataName || '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(100)]],
            sourceFilename: [analysis.source.sourceFileName || ''],
            description: [{ value: analysis.source.sourceDataDescription, disabled: true } || ''],
            sourcepath: [analysis.source.templateSourcePath || ''],
            rulesetName: [analysis.rulesetName || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(100)]],
            sourceCSV: [''],
            startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            referenceCSV: this.fb.array([]),
            columnRules: this.fb.array([]),
        });
        this.sourceNameText = analysis.source.sourceDataName;
        // console.log(this.sourceNameText);
        if (analysis) {
            this.selectedSource = analysis;
            if (this.mode === 'edit') {
                this.rulesList = analysis.rules.ruleset;
            }
            this.selectedColumns = analysis.selectedColumns;
            this.availableColumns = analysis.columns.filter((column) => {
                const colFound = analysis.selectedColumns.filter((col) => {
                    return column.title === col.title;
                });
                return !colFound.length;
            });
            this.analysisForm.controls.startDate.setValue(analysis.rules.startDate);
            this.analysisForm.controls.endDate.setValue(analysis.rules.endDate);
            this.columnsForm.controls.columns.setValue(this.selectedColumns);
            this.initRulesFormArray();
        }
        const referenceCSV = this.analysisForm.controls.referenceCSV;
        const referenceData = analysis.reference ? analysis.reference : [];
        if (this.mode === 'edit') {
            const refSelectedColumns = analysis.rules.refSelectedColumns.map((column, index) => {
                this.ruleValueList.ReferenceCDE.push({
                    label: column,
                    value: column
                });
                return {
                    id: (index + 1),
                    title: column
                };
            });
            this.selectedReferenceColumns = refSelectedColumns;
        }
        referenceData.map(refData => {
            referenceCSV.push(this.intiFormArrays('referenceData', refData));
        });
        if (this.mode === 'edit') {
            this.columnsForm.controls.refernceColumns.setValue(this.selectedReferenceColumns);
        }
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_14__().format('YYYY-MM-DDT[18:30:00.000Z]');
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_14__(moment__WEBPACK_IMPORTED_MODULE_14__().add(6, 'months')).format('YYYY-MM-DDT[18:30:00.000Z]');
        this.uploadedDate = analysis.settings.uploadDate;
        this.rulesetNames = analysis.rulesetNames ? analysis.rulesetNames : [];
        if (this.mode === 'add') {
            const ruleId = this.rulesetNames.length ? '-' + analysis.rulesetNames.length : '';
            this.analysisForm.controls.rulesetName.setValue(this.sourceNameText + '-ruleset' + ruleId);
            this.analysisForm.controls.startDate.setValue(this.minDate);
            this.analysisForm.controls.endDate.setValue(this.maxDate);
        }
        this.loadSourcePreview();
    }
    intiFormArrays(field, value = {}) {
        if (field === 'referenceData') {
            if (!value.availableRefColumns) {
                value.availableRefColumns = [];
            }
            const refAvailableColumns = value.availableRefColumns.map((column, index) => {
                return {
                    id: (index + 1),
                    title: column
                };
            });
            this.availableReferenceColumns = refAvailableColumns ? refAvailableColumns : [];
            console.log(this.availableReferenceColumns);
            return this.fb.group({
                id: [value.id],
                referenceDataName: [{ value: value.referenceDataName, disabled: true }],
                referenceDataDescription: [{ value: value.referenceDataDescription, disabled: true }],
                referenceColumns: [refAvailableColumns],
                referencePath: [{ value: value.referenceFileName, disabled: true }]
            });
        }
        if (field === 'columnRules') {
            const rulesGroup = value.rules.map((rule => {
                return this.fb.group({
                    rule: [rule.rule],
                    operator: [rule.operator],
                    value: [rule.value],
                    type: [rule.type],
                    format: [rule.format],
                    dimension: [rule.dimension],
                });
            }));
            return this.fb.group({
                column: [value.column],
                datatype: [value.DataType],
                rules: this.fb.array(rulesGroup)
            });
        }
    }
    initRulesFormArray() {
        // TODO: Start Needs to update the logic here.
        const selectedSourceColumns = this.columnsForm.value.sourceColumns;
        if (selectedSourceColumns.length) {
        }
        // TODO: End Needs to update the logic here.
        const selectedRuleColumns = this.afControls.columnRules;
        this.rulesList.map(rule => {
            if (!rule.isAdded) {
                selectedRuleColumns.push(this.intiFormArrays('columnRules', rule));
            }
            rule.isAdded = true;
        });
    }
    addRules(columns, arrayName) {
        const fbRules = columns.get(arrayName);
        fbRules.push(this.fb.group({
            rule: [''],
            operator: [''],
            type: [''],
            value: [''],
            format: [''],
            dimension: [''],
        }));
    }
    removeRules(columns, arrayName, index) {
        const fbRules = columns.get(arrayName);
        fbRules.removeAt(index);
    }
    addFormItem(arrayName) {
        const fbArray = this.analysisForm.get(arrayName);
        fbArray.push(this.intiFormArrays(arrayName));
    }
    removeFormItem(arrayName, index) {
        const fbArray = this.analysisForm.get(arrayName);
        fbArray.removeAt(index);
    }
    getAllSources() {
        this.isLoading = true;
        this.loaderMsg = 'Loading Sources...';
        this.http.getSources().subscribe((result) => {
            this.sourceList = (result && result.Analysis) ? result.Analysis : [];
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    onSourceChange(e) {
        this.selectedSource = this.sourceList.filter(item => item.sourceId === e.value)[0];
        this.availableColumns = this.selectedSource.source.availableColumns.map((column, index) => {
            return {
                id: (index + 1),
                title: column
            };
        });
        this.afControls.sourcepath.setValue(this.selectedSource.source.templateSourcePath);
        this.afControls.sourceFilename.setValue(this.selectedSource.source.sourceFileName);
        this.afControls.name.setValue(this.selectedSource.source.sourceDataName);
        this.afControls.rulesetName.setValue(this.selectedSource.source.sourceDataName);
    }
    onUploadCompleted(e, formControl) {
        formControl.controls.path.setValue(e.path);
    }
    getColumnRules() {
        this.isLoading = true;
        this.loaderMsg = 'Fetching column rules...';
        const columns = [];
        const selectedColumns = this.columnsForm.value.columns;
        this.selectedColumns = [...selectedColumns];
        // Remove the column from ruleset if the column are removed form the list
        const updatedRulesList = [];
        let nameList = selectedColumns.map(col => { return col.title; });
        this.rulesList.map(rule => {
            if (nameList.indexOf(rule.column) >= 0) {
                rule.isAdded = false;
                updatedRulesList.push(rule);
            }
        });
        this.rulesList = [...updatedRulesList];
        nameList = updatedRulesList.map(rule => { return rule.column; });
        selectedColumns.map(col => {
            // Add only newly selected columns
            if (nameList.indexOf(col.title) === -1) {
                columns.push(col.title);
            }
        });
        const payload = {
            selectedColumns: columns,
            refSelectedColumns: this.columnsForm.controls.refernceColumns.value.map(col => col.title),
            sourcepath: this.afControls.sourcepath.value,
        };
        if (payload.refSelectedColumns && payload.refSelectedColumns.length) {
            this.ruleValueList.ReferenceCDE = [];
            payload.refSelectedColumns.map(column => {
                this.ruleValueList.ReferenceCDE.push({
                    label: column,
                    value: column
                });
            });
        }
        // Clear the columns array
        this.afControls.columnRules = this.fb.array([]);
        if (!payload.selectedColumns.length) {
            this.isLoading = false;
            if (this.rulesList.length) {
                const firstRule = this.rulesList[0];
                this.selectedRuleColumn = firstRule.column;
                this.cdeStatistics = (firstRule.statistics && firstRule.statistics.length) ? firstRule.statistics[0] : {};
                this.correlationSummary = firstRule.correlationSummary ? firstRule.correlationSummary : {};
                //this.initFormulaEditor(this.rulesList);
                this.initRulesFormArray();
            }
        }
        else {
            // Rules Sync loading Logic
            this.isRulesLoading = true;
            this.initRuleValue = true;
            this.selectedColumnsCopy = [...payload.selectedColumns];
            if (this.selectedColumnsCopy.length) {
                payload.selectedColumns = this.selectedColumnsCopy.slice(0, 7);
            }
            this.getColumnnRuleBySync(this.selectedColumnsCopy, payload);
        }
    }
    generatePreview() {
        this.analysis = {
            sourceName: this.afControls.name.value,
            description: this.afControls.description.value,
            rulesetName: this.afControls.rulesetName.value,
            columns: this.availableColumns,
            selectedColumns: this.selectedColumns,
            rules: this.afControls.columnRules.value,
        };
        const startDate = this.afControls.startDate.value;
        const endDate = this.afControls.endDate.value;
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
        if (moment__WEBPACK_IMPORTED_MODULE_14__(startDate).diff(moment__WEBPACK_IMPORTED_MODULE_14__(endDate), 'days') >= 0) {
            alert('Ruleset end date should be less than start date.');
            return;
        }
        this.gotoStepper(3);
    }
    createEditRuleset() {
        this.isLoading = true;
        this.loaderMsg = 'Saving Ruleset...';
        // Update the rules list with the statistics
        const ruleLists = this.rulesList.map((rule, index) => {
            return Object.assign({}, rule, this.afControls.columnRules.value[index]);
        });
        //return;
        const ruleset = {
            sourceId: this.selectedSource.sourceId,
            rulesetId: this.rulesetId ? this.rulesetId : undefined,
            sourcepath: this.afControls.sourcepath.value,
            selectedColumns: this.selectedColumns.map(col => col.title),
            refSelectedColumns: this.columnsForm.controls.refernceColumns.value.map(col => col.title),
            rulesetName: this.afControls.rulesetName.value,
            ruleset: ruleLists,
            startDate: this.afControls.startDate.value,
            endDate: this.afControls.endDate.value,
        };
        this.http.createEditRuleset(ruleset, this.rulesetId ? 'put' : 'post').subscribe((result) => {
            this.isLoading = false;
            if (this.selectedSource.UploadsHistory.length < 1) {
                this.router.navigate([`auth/data-quality-monitoring`], { queryParams: { from: 'ruleset' } });
            }
            else {
                this.router.navigate([`auth/data-quality-monitoring`]);
            }
        }, (error) => {
            this.isLoading = false;
        });
    }
    showFormulaEditor(rule) {
        const selectedColumns = [];
        this.selectedColumns.map(column => {
            selectedColumns.push(column.title);
        });
        const dialogRef = this.dialog.open(_shared_formula_editor_formula_editor_component__WEBPACK_IMPORTED_MODULE_11__["FormulaEditorComponent"], {
            width: '700px',
            data: {
                columns: selectedColumns,
                formula: rule.controls.value.value,
                type: rule.controls.type.value
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data.action === 'ok' && data.formula) {
                rule.controls.type.setValue('SIMPLE');
                rule.controls.value.setValue(data.formula);
            }
        });
    }
    showAdvanedFormulaEditor(rule) {
        const selectedColumns = [];
        this.selectedColumns.map(column => {
            selectedColumns.push(column.title);
        });
        const dialogRef = this.dialog.open(_shared_advanced_formula_editor_advanced_formula_editor_component__WEBPACK_IMPORTED_MODULE_12__["AdvancedFormulaEditorComponent"], {
            width: '1300px',
            data: {
                columns: selectedColumns,
                formula: rule.controls.value.value,
                type: rule.controls.type.value
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data.action === 'ok' && data.formula) {
                rule.controls.type.setValue('ADVANCED');
                rule.controls.value.setValue(data.formula);
            }
        });
    }
    showConditionalFormulaEditor(rule) {
        const selectedColumns = [];
        this.selectedColumns.map(column => {
            selectedColumns.push(column.title);
        });
        const dialogRef = this.dialog.open(_shared_conditional_formula_editor_conditional_formula_editor_component__WEBPACK_IMPORTED_MODULE_13__["ConditionalFormulaEditorComponent"], {
            width: '1400px',
            data: {
                columns: selectedColumns,
                formula: rule.controls.value.value,
                type: rule.controls.type.value
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data.action === 'ok' && data.formula) {
                rule.controls.type.setValue('CONDITIONAL');
                rule.controls.value.setValue(data.formula);
            }
        });
    }
    gotoStepper(index, tab = '') {
        this.stepIndex = index;
    }
    stepperSelectionChange(event) {
        this.stepIndex = event.selectedIndex;
    }
    stepperAnimationDone() {
        if (this.stepIndex === 2) {
            this.showCDECar = true;
        }
        else {
            this.showCDECar = false;
        }
    }
    gotoRuleColumn(rule) {
        this.selectedRuleColumn = rule.column;
        this.cdeStatistics = (rule.statistics && rule.statistics.length) ? rule.statistics[0] : {};
        this.correlationSummary = rule.correlationSummary ? rule.correlationSummary : {};
    }
    owlInitialized() {
        // if (this.selectedRuleColumn) {
        //   this.owlCar.to(this.selectedRuleColumn);
        // }
    }
    initFormulaEditor(ruleList) {
        console.log(ruleList);
    }
    loadSourcePreview() {
        this.isPreviewLoaded = false;
        this.isPreviewLoading = true;
        this.columnDefs = [];
        this.rowData = [];
        this.http.getSourcePreview(this.selectedSource.sourceId).subscribe((res) => {
            const details = res.sourcePreview ? res.sourcePreview : {};
            Object.keys(details).map((key, index) => {
                this.rowData.push(Object.assign({}, details[key]));
            });
            if (this.rowData.length) {
                Object.keys(this.rowData[0]).map((key, index) => {
                    this.columnDefs.push(Object.assign({ field: key }, this.defaultColDefs));
                });
            }
            this.isPreviewLoaded = true;
            this.isPreviewLoading = false;
        }, (error) => {
            this.isPreviewLoaded = false;
            this.isPreviewLoading = false;
        });
    }
    showEditDetails(ind) {
        if (this.visibleIndex === ind) {
            this.visibleIndex = -1;
        }
        else {
            this.visibleIndex = ind;
        }
    }
    getOperatorList(ruleVal, datatype) {
        let list = this.ruleOperatorList[ruleVal];
        if (ruleVal === 'Value' && datatype === 'Numeric') {
            list = list.concat(_ruleset_constants__WEBPACK_IMPORTED_MODULE_16__["Operators"].CompareOperator);
        }
        return list;
    }
    getType(ruleVal, datatype) {
        if (ruleVal === 'Value' && datatype != 'Numeric') {
            return 'text';
        }
        return 'number';
    }
    getMinVal(ruleVal) {
        if (['Length', 'MinLength', 'MaxLength'].indexOf(ruleVal) >= 0) {
            return 0;
        }
        return false;
    }
    getFormulaText(formulas, type) {
        let formulaText = '';
        if (formulas && Array.isArray(formulas)) {
            formulas.map(formula => {
                switch (type) {
                    case 'CONDITIONAL':
                        formulaText += formula.logic;
                        formula.conditions.map(condition => {
                            formulaText += condition.start + condition.cde1 + condition.operator1 + condition.cde2 +
                                condition.value + condition.end + condition.condition + condition.operator2;
                        });
                        break;
                    case 'ADVANCED':
                        formulaText += formula.start + formula.cde1 + formula.operator1 + formula.cde2 +
                            formula.value + formula.end + formula.condition + formula.operator2;
                        break;
                    case 'SIMPLE':
                        formulaText += (formula.operator == 'NULL' ? '' : formula.operator) + formula.cde;
                }
            });
        }
        return formulaText;
    }
    openFormulaEditor(rule) {
        let type = rule.controls.type.value;
        switch (type) {
            default:
            case 'CONDITIONAL':
                this.showConditionalFormulaEditor(rule);
                break;
            case 'ADVANCED':
                this.showAdvanedFormulaEditor(rule);
                break;
            case 'SIMPLE':
                this.showFormulaEditor(rule);
                break;
        }
    }
    confirmDialog() {
        const message = 'You have not saved your current work. Do you want to proceed and discard?';
        const data = { 'message': message, 'toShowCancel': true, 'buttonYesCaption': 'Yes', 'buttonNoCaption': 'No' };
        const dialogRef = this.dialog.open(src_app_shared_deactive_dialog_deactive_dialog_component__WEBPACK_IMPORTED_MODULE_15__["DeactiveDialogComponent"], {
            width: '400px',
            height: '200px',
            data: data
        });
        return dialogRef.afterClosed();
    }
};
RulesetComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"] },
    { type: _services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('owlCar', { static: false })
], RulesetComponent.prototype, "owlCar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], { static: true })
], RulesetComponent.prototype, "accordion", void 0);
RulesetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ruleset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ruleset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authorized/ruleset/ruleset.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ruleset.component.scss */ "./src/app/components/authorized/ruleset/ruleset.component.scss")).default]
    })
], RulesetComponent);



/***/ }),

/***/ "./src/app/components/authorized/ruleset/ruleset.constants.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/authorized/ruleset/ruleset.constants.ts ***!
  \********************************************************************/
/*! exports provided: RuleTypeList, Operators, RuleOperatorList, RuleValueList, RuleFormatList, RuleDimenstionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleTypeList", function() { return RuleTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operators", function() { return Operators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleOperatorList", function() { return RuleOperatorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleValueList", function() { return RuleValueList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleFormatList", function() { return RuleFormatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleDimenstionList", function() { return RuleDimenstionList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const RuleTypeList = [{
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
const Operators = {
    ShouldBe: {
        label: 'Should be',
        value: 'Shouldbe'
    },
    ShouldNotBe: {
        label: 'Should not include',
        value: 'shouldnotinclude'
    },
    EqualTo: {
        label: '=',
        value: 'equalto'
    },
    CompareOperator: [{
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
        }]
};
const RuleOperatorList = {
    DataType: [Operators.ShouldBe],
    ReferenceCDE: [Operators.ShouldBe],
    Formula: [Operators.ShouldBe],
    MinLength: [Operators.EqualTo],
    MaxLength: [Operators.EqualTo],
    Length: [Operators.EqualTo].concat(Operators.CompareOperator),
    Value: [Operators.ShouldBe].concat(Operators.ShouldNotBe)
};
const RuleValueList = {
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
    ReferenceCDE: []
};
const RuleFormatList = {
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
const RuleDimenstionList = [{
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


/***/ }),

/***/ "./src/app/components/authorized/ruleset/ruleset.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/authorized/ruleset/ruleset.module.ts ***!
  \*****************************************************************/
/*! exports provided: RulesetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesetModule", function() { return RulesetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _authorized_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authorized.module */ "./src/app/components/authorized/authorized.module.ts");
/* harmony import */ var _ruleset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ruleset-routing.module */ "./src/app/components/authorized/ruleset/ruleset-routing.module.ts");
/* harmony import */ var _ruleset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ruleset.component */ "./src/app/components/authorized/ruleset/ruleset.component.ts");







let RulesetModule = class RulesetModule {
};
RulesetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ruleset_component__WEBPACK_IMPORTED_MODULE_6__["RulesetComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ruleset_routing_module__WEBPACK_IMPORTED_MODULE_5__["RulesetRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _authorized_module__WEBPACK_IMPORTED_MODULE_4__["AuthorizedModule"]
        ],
    })
], RulesetModule);



/***/ })

}]);
//# sourceMappingURL=ruleset-ruleset-module-es2015.js.map