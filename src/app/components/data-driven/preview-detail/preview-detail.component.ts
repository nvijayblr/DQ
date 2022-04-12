import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { HttpService } from '../../../services/http-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AlertService } from 'src/app/shared/alert-dialog/alert-dialog.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-preview-detail1',
    templateUrl: './preview-detail.component.html',
    styleUrls: ['./preview-detail.component.scss']
})
export class PreviewDetailComponent {
    @Input() source: any;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    displayedColumns: string[] = [];
    displayedColumns_Filter: string[] = [];
    previewDataSource: MatTableDataSource<any>;
    filterForm: FormGroup;
    isLoading: boolean = false;
    loaderMsg : any;

    constructor(private http: HttpService,
        private alertService: AlertService) {
        this.filterForm = new FormGroup({});
    }

    loadSourcePreview() {
        this.isLoading = true;
        this.previewDataSource = new MatTableDataSource([]);
        this.displayedColumns = [];
        this.displayedColumns_Filter = [];
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
        this.displayedColumns_Filter = [];
        Object.keys(details).map((key, index) => {
            rowData.push({
                ...details[key]
            });
        });

        if (rowData.length) {
            Object.keys(rowData[0]).map((key, index) => {
                this.displayedColumns.push(key);
                this.displayedColumns_Filter.push(key + '_filter');
            });
        }
        this.previewDataSource = new MatTableDataSource(rowData);
        this.previewDataSource.paginator = this.paginator;
        this.previewDataSource.filterPredicate = this.createFilter();
        this.initFilterForm();
    }

    initFilterForm() {
        let group = {}
        this.displayedColumns.forEach(column => {
            group[column] = new FormControl('');
        })
        this.filterForm = new FormGroup(group);

        this.filterForm.valueChanges.subscribe(value => {
            this.setFilter();
        });
    }

    setFilter() {
        let filter = {
            ...this.filterForm.value
        };
        filter = JSON.stringify(filter);
        this.previewDataSource.filter = filter;
    }

    createFilter() {
        let filterFunction = function (data: any, filter: any): boolean {
            let result = true;
            filter = JSON.parse(filter);
            Object.keys(filter).forEach((column) => {
                if (filter[column] && data[column] != undefined && data[column] != null) {
                    result = result && data[column].toString().toLowerCase().indexOf(filter[column].toLowerCase()) >= 0;
                }
            });
            return result;
        }
        return filterFunction;
    }

}