import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { HttpService } from '../../../services/http-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AlertService } from 'src/app/shared/alert-dialog/alert-dialog.service';

@Component({
    selector: 'app-preview-detail1',
    templateUrl: './preview-detail.component.html',
    styleUrls: ['./preview-detail.component.scss']
})
export class PreviewDetailComponent {
    @Input() source: any;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    displayedColumns: string[] = [];
    previewDataSource: MatTableDataSource<any>;
    isLoading: boolean = false;

    constructor(private http: HttpService,
        private alertService: AlertService) { }

    loadSourcePreview() {
        this.isLoading = true;
        this.previewDataSource = new MatTableDataSource([]);
        this.displayedColumns = [];
        const payload = {
            sourcepath: this.source.templateSourcePath,
            seeMoreEnabled: 'NO',
        };
        this.http.getProfileView(payload).subscribe((res: any) => {
            const details: any = res.Preview ? res.Preview : {};
            this.parseSourcePreview(details);
            this.isLoading = false;
        }, (error) => {
            this.alertService.showError('Unable to load Preview');
            this.isLoading = false;
        });

    }

    parseSourcePreview(details) {
        let rowData = [];
        this.displayedColumns = [];
        Object.keys(details).map((key, index) => {
            rowData.push({
                ...details[key]
            });
        });

        if (rowData.length) {
            Object.keys(rowData[0]).map((key, index) => {
                this.displayedColumns.push(key);
            });
        }
        this.previewDataSource = new MatTableDataSource(rowData);
        this.previewDataSource.paginator = this.paginator;
    }
}