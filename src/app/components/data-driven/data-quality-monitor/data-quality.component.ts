import { Component, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { DataDrivenService } from "../data-driven.service";
import { HttpService } from "../../../services/http-service.service";
import { CdkStepper } from '@angular/cdk/stepper';
import { AuthGuardService } from "../../../services/auth-guard.service";
import { MatDialog } from "@angular/material/dialog";
import { CreateSourceComponent } from "../../data-driven/create-source/create-source.component";
import { DDRulesetComponent } from "../../data-driven/ruleset/ruleset.component";
import { AlertService } from "src/app/shared/alert-dialog/alert-dialog.service";
import * as moment from 'moment';
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";
import { ViewSourceRulesetComponent } from "../view-source-ruleset/view-source-ruleset.component";
import { ScrollService } from "src/app/services/scroll.service";

@Component({
    selector: "app-data-quality",
    templateUrl: "./data-quality.component.html",
    styleUrls: ["./data-quality.component.scss"],
})
export class DataQualityComponent implements OnInit {
    @ViewChild('ddStepper', { static: false }) stepper: CdkStepper;
    @ViewChild('analysisDetail', { static: false }) analysisTab: any;

    profile = [];
    selectedSource: any = {};
    selectedAnalysis: any = {};
    selectedStep: any = 0;
    subscription: Subscription;
    uploadFileMethod = true;
    allSourceCategory: any;
    cleanFileLog: any;
    rights: any;
    minDate: any;
    dateClass: any;
    isLoading: boolean = false;
    loaderMsg: any;

    selectedFileName: any;
    uploadsHistory: any;
    highlightDates: any[];
    isCleanedSource: string;
    cleanedSourcePath: any;
    fromOrginSource: string;
    selectedRuleSet: any;
    recentUploadDate: string;
    isOriginalSource: any;
    OriginalSourcePath: any;
    isMultiSource: any;
    originalSourceUploadDate: any;

    stepperDetail = [
        { label: "Data Source", completed: false },
        { label: "Ruleset", completed: false },
        { label: "Data Upload", completed: false },
        { label: "View Analysis", completed: false },
        { label: "Data Cleaning", completed: false },
    ];


    constructor(private http: HttpService,
        private ds: DataDrivenService,
        private auth: AuthGuardService,
        private alertService: AlertService,
        private scrollService: ScrollService,
        private dialog: MatDialog) {
        this.subscription = this.ds.getDQMSource().subscribe((data) => {
            if (data) {
                this.selectedSource = data;
                this.selectedAnalysis = data;
                this.setSourceSetting(data);
                this.setStepDetails();
                this.getProfileDetail(this.selectedSource.source.templateSourcePath);
            }
        });
        const rights = this.auth.getUserRole().rights;
        this.rights = rights ? rights : [];
    }

    ngOnInit() {
        this.initSettings();
    }

    initSettings() {
        this.uploadFileMethod = true;
    }

    setSourceSetting(data: any) {
        const uploadsHistory = data.UploadsHistory;
        const rules = data.rules;
        if (uploadsHistory && uploadsHistory.length) {
            const upload = uploadsHistory[uploadsHistory.length - 1];
            this.onOpenDatePicker(data);
            data.uploadDate = upload.uploadDate;
        }

        this.isOriginalSource = 'YES';
        this.OriginalSourcePath = data.source.templateSourcePath;
        this.selectedRuleSet = '';
        if (rules && rules.length) {
            const ruleset = rules[rules.length - 1];
            data.rulesetId = ruleset.rulesetId;
            this.selectedRuleSet = data.rulesetId;
        }
    }

    getProfileDetail(filePath) {
        const payload = {
            sourcepath: filePath,
        };

        this.isLoading = true;
        this.loaderMsg = 'Loading Profile...';
        this.http.getProfiles(payload).subscribe((result: any) => {
            this.profile = result.profile ? result.profile : [];
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }


    setStepDetails() {
        let previous: any;
        this.selectedStep = 0;

        this.stepperDetail.forEach((step, index) => {
            step.completed = false;
            switch (index) {
                case 0:
                    if (this.selectedSource.source && this.selectedSource.source.sourceDataName) {
                        step.completed = true;
                    } else {
                        this.selectedStep = index;
                    }
                    break;
                case 1:
                    if (previous.completed && this.selectedSource.rules.length > 0) {
                        step.completed = true;
                    } else if (previous.completed) {
                        this.selectedStep = index;
                    }
                    break;
                case 2:
                    if (previous.completed && this.selectedSource.UploadsHistory.length > 0) {
                        step.completed = true;
                    } else if (previous.completed) {
                        this.selectedStep = index;
                    }
                    break;
                case 3:
                    if (previous.completed && this.selectedSource.UploadsHistory.length > 0) {
                        step.completed = true;
                        this.selectedStep = index;
                    }
                    break;
                case 4:
                    if (previous.completed) {
                        step.completed = true;
                    }
            }
            previous = step;
        });

        setTimeout(() => (this.stepper.selectedIndex = this.selectedStep), 0);
    }

    isSourceLoaded() {
        return this.selectedSource.source && this.selectedSource.source.sourceDataName;
    }

    showCompleteIcon(index) {
        return this.stepperDetail[index].completed && !this.showEditIcon(index);
    }
    showEditIcon(index) {
        if (this.stepper) {
            return this.stepper.selectedIndex == index;
        }
        return this.selectedStep == index;
    }

    onUploadFileChange() {
        let dataFromDq;
        if (!this.uploadFileMethod) {
            this.http.getCleanSource().subscribe((result: any) => {
                this.allSourceCategory = result.SourceDetailsList;
                dataFromDq = result.SourceDetailsList.find(source => source.sourceId === this.selectedSource.sourceId);
                this.cleanFileLog = dataFromDq.CleanedFilesLog;
            }, (error) => {
                this.alertService.showError(error.message);
            });
        }
    }

    createOrEditSource(isEditMode) {
        const dialogRef = this.dialog.open(CreateSourceComponent, {
            width: '1400px',
            disableClose: true,
            data: {
                isEditMode,
                analysis: this.selectedSource
            },

        });

        dialogRef.afterClosed().subscribe(data => {

        });
    }

    viewSource() {
        const dialogRef = this.dialog.open(ViewSourceRulesetComponent, {
            width: '1400px',
            disableClose: true,
            data: {
                summary: this.selectedSource,
                isSource: true,
                isDialog: true
            }
        });
    }

    addOrUpdateRuleset(isEditMode, rule: any = {}) {
        const dialogRef = this.dialog.open(DDRulesetComponent, {
            width: '85vw',
            maxWidth: '85vw',
            disableClose: true,
            data: {
                isEditMode,
                analysis: this.selectedSource,
                ruleset: rule
            }
        });

        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.onRulsetClosed(data);
            }
        });
    }

    viewRuleset(rule) {
        const dialogRef = this.dialog.open(ViewSourceRulesetComponent, {
            width: '85vw',
            disableClose: true,
            data: {
                sourceName: this.selectedSource.source.sourceDataName,
                rulesetName: rule.rulesetName,
                selectedColumns: rule.selectedColumns,
                rules: rule.ruleset,
                isRuleset: true,
                isDialog: true
            }
        });
    }

    onRulsetClosed(data: any) {
        if (!data.isEditMode) {
            this.selectedSource.rules.push(data.ruleset);
        }
        if (!data.isUploaded) {
            this.isOriginalSource = 'YES';
            this.OriginalSourcePath = this.selectedSource.source.templateSourcePath;
            this.originalSourceUploadDate = this.selectedSource.settings.uploadDate;
            this.uploadSource(this.selectedSource);
        }
        this.setStepDetails();
        setTimeout(() => (this.stepper.selectedIndex = 2), 0);
    }


    onSourceCSVSelected(file, source) {
        source.file = file;
    }

    uploadSource(analysis, reason = '') {
        if (this.validateSource(analysis)) {
            const payload = {
                type: '',
                connectionDetails: {},
                isCleanedSource: this.isCleanedSource ? this.isCleanedSource : '',
                cleanedSourcePath: this.cleanedSourcePath ? this.cleanedSourcePath : '',
                isOriginalSource: this.isOriginalSource ? this.isOriginalSource : '',
                OriginalSourcePath: this.OriginalSourcePath ? this.OriginalSourcePath : '',
                sourceId: analysis.sourceId,
                rulesetId: this.selectedRuleSet ? this.selectedRuleSet : '',
                isMultiSource: this.isMultiSource ? 'Yes' : 'No',
                multiSourceKey: analysis.multisource ? analysis.multisource : '',
                uploadDate: this.recentUploadDate ? this.recentUploadDate : this.originalSourceUploadDate,
                uploadTime: '20:28',
                uploadReason: reason ? reason : '',
                settings: analysis.settings,
                sourceObj: analysis.source
            };
            const formData: any = new FormData();
            formData.append('file[]', analysis.file ? analysis.file : '');
            formData.append('data', JSON.stringify(payload));

            this.isLoading = true;
            this.loaderMsg = 'Uploading Source data...';
            this.http.uploadSource(formData).subscribe((result: any) => {
                if (result.errorMsg) {
                    if (result.errorCode == '103') {
                        result.errorMsg += '.Please correct the file and re-upload.';
                    }
                    this.showUploadError(result.errorMsg);
                    this.isLoading = false;
                } else {
                    setTimeout(() => {
                        this.alertService.showAlert('Source has been uploaded successfully.');
                        this.ds.setRefreshMenu(this.selectedSource, 1);
                        this.isLoading = false;
                    }, 5000);
                }
            }, (error) => {
                this.isLoading = false;
                this.alertService.showError(error);
            });
        }
    }

    validateSource(analysis) {
        this.recentUploadDate = moment(analysis.uploadDate).format("YYYY-MM-DD[T]HH:mm:ss.000[Z]");
        if (!analysis.rules || (analysis.rules && !analysis.rules.length)) {
            this.alertService.showWarning('Please create the ruleset to upload the source.');
            return;
        }

        this.selectedRuleSet = this.selectedRuleSet ? this.selectedRuleSet : analysis.rules[analysis.rules.length - 1].rulesetId;

        this.selectedAnalysis = analysis;
        this.isMultiSource = false;
        if (analysis.settings && analysis.settings.multiSourceOptions && analysis.settings.multiSourceOptions.length > 1) {
            this.isMultiSource = true;
        }
        if (this.isMultiSource && !analysis.multisource) {
            this.alertService.showWarning('Please select the source name.');
            return;
        }

        if (!analysis.file && this.uploadFileMethod && this.fromOrginSource === '') {
            this.alertService.showWarning('Please select the source file to upload.');
            return;
        }
        if (!this.uploadFileMethod && this.selectedFileName === '') {
            this.alertService.showWarning('Please Choose the source file Path.');
            return;
        }
        if (!this.uploadFileMethod && this.selectedFileName) {
            // this.http.getCleanSource().subscribe((result: any) => {
            //   console.log(result);
            // });
            this.isCleanedSource = 'YES';
            this.cleanedSourcePath = this.selectedFileName
        } else {
            this.isCleanedSource = '';
            this.cleanedSourcePath = ''
        }
        if (!analysis.uploadDate && this.fromOrginSource === '') {
            this.alertService.showWarning('Please select the upload date.');
            return;
        }
        return true;
    }

    showUploadError(msg) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '400px',
            data: {
                title: 'Upload Error',
                message: msg,
                okLable: 'OK'
            }
        });

        dialogRef.afterClosed().subscribe(data => {
            if (data.action === 'ok' && data.reason) {
                this.uploadSource(this.selectedAnalysis, data.reason);
            }
        });
    }


    scrollToId(id: any) {
        this.analysisTab.selectProfile();
        this.scrollService.scrollToElementById(id);
    }

    launchAnalysis(analysis) {
        this.selectedAnalysis = analysis;
        const uploadDate = this.selectedAnalysis.uploadDate ? moment(this.selectedAnalysis.uploadDate).format('MM-DD-YYYY') : '';
        const uploadsHistory = this.selectedAnalysis.UploadsHistory ? this.selectedAnalysis.UploadsHistory : [];
        if (!uploadsHistory.length) {
            this.alertService.showWarning('Please upload the source to launch the analysis.');
            return;
        }

        if (!uploadDate) {
            this.alertService.showWarning('Please select the upload date.');
            return;
        }

        if (!this.selectedAnalysis.highlightDates.includes(uploadDate)) {
            this.alertService.showWarning('There is no source for selected date.');
            return;
        }


    }

    onOpenDatePicker(data: any) {
        this.uploadsHistory = data.UploadsHistory ? data.UploadsHistory : [];
        this.highlightDates = [];
        this.uploadsHistory.map(history => {
            this.highlightDates.push(moment(history.uploadDate).format('MM-DD-YYYY'));
        });
        data.highlightDates = this.highlightDates;
    }

    launchDataCleaning(sourceData) {
        if (!sourceData.UploadsHistory.length || (sourceData.UploadsHistory.length && !sourceData.uploadDate)) {
            this.alertService.showWarning('Please select the upload date.');
            return;
        }
        const selectedSource = sourceData.UploadsHistory.filter(history => history.uploadDate === sourceData.uploadDate);
        if (selectedSource && selectedSource.length) {
            sourceData.source.templateSourcePath = selectedSource[0].sourceFileName;
        }
        this.createCleaningSource(sourceData);
    }

    createCleaningSource(sourceData) {
        let payload = {
            db: 'clean',
            SourceSettings: {
                sourcePath: sourceData.source.templateSourcePath,
                sourceId: sourceData.sourceId,
                sourceDataName: sourceData.source.sourceDataName,
                sourceDataDescription: sourceData.source.sourceDataDescription,
                sourceFileName: sourceData.source.sourceFileName,
                sourceCategory: sourceData.source.sourceCategory,
                dataOwner: sourceData.source.dataOwner,
                uploadDate: sourceData.uploadDate,
                department: sourceData.source.department
            }
        };
        const formData: any = new FormData();
        formData.append('file[]', "");
        formData.append('data', JSON.stringify(payload));
        this.isLoading = true;
        this.http.saveSourceProfile(formData, 'post').subscribe((result: any) => {
            this.isLoading = false;
            if (result.errorMsg) {
                this.alertService.showError(result.errorMsg);
                return;
            }
            this.ds.setRefreshMenu(result.SourceSettings || {}, 2);
        }, (error) => {
            this.isLoading = false;
            this.alertService.showError(error.errorMsg);
        });
    }

    ruleSetType(event) {
        this.selectedRuleSet = event;
    }
}
