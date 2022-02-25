import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { HttpService } from '../../../services/http-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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

    constructor(private http: HttpService) { }

    loadSourcePreview() {
        this.previewDataSource = new MatTableDataSource([]);
        const payload = {
            sourcepath: this.source.templateSourcePath,
            seeMoreEnabled: 'NO',
        };
        this.http.getProfileView(payload).subscribe((res: any) => {
            const details: any = res.Preview ? res.Preview : {};
            this.parseSourcePreview(details);
        }, (error) => {

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