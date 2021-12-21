import { Component, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { DataDrivenService } from "../data-driven.service";
import { HttpService } from "../../../services/http-service.service";
import { CdkStepper } from '@angular/cdk/stepper';
import { AuthGuardService } from "../../../services/auth-guard.service";
import { MatDialog } from "@angular/material/dialog";
import { CreateSourceComponent } from "../../data-driven/create-source/create-source.component";

@Component({
    selector: "app-data-quality",
    templateUrl: "./data-quality.component.html",
    styleUrls: ["./data-quality.component.scss"],
})
export class DataQualityComponent implements OnInit {
    @ViewChild('ddStepper', { static: false }) stepper: CdkStepper;

    profile = [];
    selectedSource: any = {};
    selectedStep: any = 0;
    subscription: Subscription;
    uploadFileMethod = true;
    allSourceCategory: any;
    cleanFileLog: any;
    rights: [];

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
        private dialog: MatDialog) {
        this.subscription = this.ds.getDQMSource().subscribe((data) => {
            if (data) {
                this.selectedSource = data;
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

    getProfileDetail(filePath) {
        const payload = {
            sourcepath: filePath,
        };
        this.http.getProfiles(payload).subscribe((result: any) => {
            this.profile = result.profile ? result.profile : [];
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
                alert(error.message);
            });
        }
    }

    createOrEditSource(isEditMode) {
        const dialogRef = this.dialog.open(CreateSourceComponent, {
            width: '1400px',
            data: {
                isEditMode,
                analysis: this.selectedSource
            }
        });

        dialogRef.afterClosed().subscribe(data => {
        });
    }
}
