import { Component, Input } from '@angular/core';
import { HttpService } from '../../../services/http-service.service';

@Component({
    selector: 'app-correlation-detail',
    templateUrl: './correlation-detail.component.html',
    styleUrls: ['../data-profile/data-profile.component.scss']
})
export class CorrelationDetailComponent {
    @Input() source: any;

    coMatrix: any = {};
    method: any = '';
    datatype: any = 'mixed';
    isLoading: boolean = false;

    constructor(private http: HttpService) { }

    loadCorrelation() {
        const payload = {
            sourcepath: this.source.templateSourcePath,
            cols_data_type: this.datatype,
            method: this.method
        };
        this.isLoading = true;
        this.http.getCorrMatrix(payload).subscribe((result: any) => {
            this.coMatrix = result ? result : {};
            this.isLoading = false;
        }, (error) => {
            this.coMatrix = {};
            this.isLoading = false;
        });
    }

    changeType(type) {
        if (type === 'numeric') {
            this.method = 'pearson';
        }
        if (type === 'categorical') {
            this.method = 'theils_u';
        }
        if (type === 'mixed') {
            this.method = '';
        }
        this.loadCorrelation();
    }
}