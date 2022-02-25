import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http-service.service';
import { AlertService } from 'src/app/shared/alert-dialog/alert-dialog.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { CreateSourceComponent } from '../create-source/create-source.component';
import { DataDrivenService } from '../data-driven.service';
import * as moment from 'moment';
import { rearg } from 'lodash';
import { CleanLogsComponent } from 'src/app/shared/clean-logs/clean-logs.component';
import { Angular2Csv } from 'angular2-csv';

@Component({
  selector: 'app-data-cleaning',
  templateUrl: './data-cleaning.component.html',
  styleUrls: ['./data-cleaning.component.scss']
})
export class DataCleaningComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  profile: any = [];
  profileSummary: any = {};
  source: any = {};
  subscription: Subscription;
  NoPreviewData: boolean = true;
  cleanLogs: any = [];
  removeItems: any = '';
  messageDisplay: any = '';

  searchValue: any = '';
  replaceValue: any = '';
  selectedSourcePath: any = '';
  cleanedFilesPath: any = '';
  replaceSourcepath: any = '';
  replaceFileName: any = '';
  filePath: any = '';

  isSaveEnable = false;
  searchDisabled = true;
  showSaveButton = false;

  displayedColumns: string[] = [];
  previewDataSource: MatTableDataSource<any>;
  showPreviewTable: boolean = false;
  uploadId: any;
  processTime: any;

  summaryDetail = {
    'Records': {
      count: 0,
      icon: 'more_vert'
    },
    'Total Columns': {
      count: 0,
      icon: 'more_horiz'
    },
    'Numeric Columns': {
      count: 0,
      icon: 'format_list_numbered'
    },
    'Alphabetic Columns': {
      count: 0,
      icon: 'format_list_bulleted'
    },
    'Alphanumeric Columns': {
      count: 0,
      icon: 'format_list_bulleted'
    },
    'Duplicates': {
      count: 0,
      icon: 'file_copy'
    },
    'Total Null Counts': {
      count: 0,
      icon: 'block'
    }
  };

  duplicate: any = {
    sourcepath: '',
    sourceFileName: '',
    column_name: '',
    columns: [],
    option: 'all'
  };

  impute: any = {
    sourcepath: '',
    sourceFileName: '',
    column: '',
    column_data_type: '',
    value: ''
  };

  mask: any = {
    sourcepath: '',
    sourceFileName: '',
    column: '',
    value: ''
  };

  delete: any = {
    sourcepath: '',
    sourceFileName: '',
    type: 'column',
    category: 'col_nan',
    column_name: '',
    column_data_type: '',
    values: '',
    formula: { operator1: '=', cond_value1: '', operator2: '', cond_value2: '' },
    threshold: 50
  };
  operators = ['', '=', '>', '>=', '<', '<='];
  numbericValues = ['Mean', 'Median', 'Mode', 'Min', 'Max', 'IQR25', 'IQR75'];
  frequncyAnalysis = [];

  constructor(private http: HttpService,
    private ds: DataDrivenService,
    private alertService: AlertService,
    private dialog: MatDialog) {
    this.subscription = this.ds.getCleaningSource().subscribe(data => {
      if (data) {
        this.source = data.source || {};
        this.initSourceSetting();
        this.cleanedFilesPath = data.cleanLogFile ? data.cleanLogFile.outputPath : '';
        if (this.cleanedFilesPath) {
          this.filePath = this.cleanedFilesPath;
          this.selectedSourcePath = this.cleanedFilesPath;
          this.source.sourceDataName = data.cleanLogFile.sourceDataName;
        } else {
          this.filePath = this.source.templateSourcePath;
          this.selectedSourcePath = this.source.sourcePath;
        }
        this.getProfileDetail(this.selectedSourcePath);
      }
    });
  }

  ngOnInit() {
    this.initProfileDetail();
  }

  initProfileDetail() {
    this.profileSummary = JSON.parse(JSON.stringify(this.summaryDetail));
  }

  initSourceSetting() {
    this.uploadId = this.source.sourceId;
    this.processTime = this.source.uploadDate;
    this.showPreviewTable = false;
    this.NoPreviewData = true;
    this.showSaveButton = false;
    this.sourcePathSelected();
  }

  getProfileDetail(filePath, profile: any = '') {
    const payload = {
      sourcepath: filePath
    };
    this.http.getProfiles(payload).subscribe((result: any) => {
      this.profile = result.profile ? result.profile : [];
      this.isSaveEnable = (profile && this.profile.length);
      this.getProfileSummary(result);
    });
    this.initProfileDetail();
  }

  getProfileSummary(result) {
    this.profileSummary = JSON.parse(JSON.stringify(this.summaryDetail));

    this.profileSummary['Records'].count = result.nr_totalrecords ? result.nr_totalrecords : 0;
    this.profileSummary['Total Columns'].count = result.nr_totalcols ? result.nr_totalcols : 0;
    this.profileSummary['Duplicates'].count = result.nr_duplicates ? result.nr_duplicates : 0;
    this.profileSummary['Numeric Columns'].count = 0;
    this.profileSummary['Alphabetic Columns'].count = 0;
    this.profileSummary['Alphanumeric Columns'].count = 0;
    this.profileSummary['Total Null Counts'].count = 0;

    result.profile.map(data => {
      if (data.attributeSummary) {
        if (data.attributeSummary.dataType === 'Numeric') {
          this.profileSummary['Numeric Columns'].count += 1;
        }
        else if (data.attributeSummary.dataType === 'Alphabetic') {
          this.profileSummary['Alphabetic Columns'].count += 1;
        }
        else if (data.attributeSummary.dataType === 'Alphanumeric') {
          this.profileSummary['Alphanumeric Columns'].count += 1;
        }
        this.profileSummary['Total Null Counts'].count += parseInt(data.attributeSummary.null_records, 0);
      }
    });
    this.getCleanedLogs();
  }

  getCleanedLogs() {
    this.cleanLogs = [];
    const payload = {
      query_col: 'sourceId',
      query_val: this.source.sourceId || this.source.cleanSourceId
    };
    this.http.getCleanedLogs(payload).subscribe((result: any) => {
      const list = result && result.Preview ? result.Preview : {};
      Object.keys(list).map((key) => {
        this.cleanLogs.push({
          ...list[key]
        });
      });
    }, (error) => {
      this.alertService.showError(error);
    });
  }

  createOrEditSource(isEditMode) {
    const dialogRef = this.dialog.open(CreateSourceComponent, {
      width: '1400px',
      disableClose: true,
      data: {
        isEditMode,
        analysis: {
          sourceId: this.source.sourceId,
          source: this.source
        },
        isSourceMode: true,
        uploadMethod: 'clean'
      }
    });

    dialogRef.afterClosed().subscribe(data => {
    });
  }

  isSourceLoaded() {
    return this.source && this.source.sourceDataName;
  }

  loadPreview(type: any, mask = '', callBack: any = '') {
    let payload = this.getPayloadByType(type);
    this.showPreviewTable = true;
    this.displayedColumns = [];
    this.previewDataSource = new MatTableDataSource([]);
    this.removeItems = '';
    this.messageDisplay = '';
    this.http.getProfilePreview(payload, type).subscribe((res: any) => {
      const details: any = res.Preview ? res.Preview : {};
      this.NoPreviewData = !Object.keys(details).length;
      this.setRemoveItemMessage(res, type);
      this.parseSourcePreview(details);
      if (callBack) {
        callBack();
      }
    }, (error) => {
      this.alertService.showWarning(error);
    });

  }

  getPayloadByType(type: any) {
    let payload: any;

    switch (type) {
      case 'duplicate':
        payload = {
          sourcepath: this.filePath,
          action: 'preview',
          select_cols: this.duplicate.columns.length ? this.duplicate.columns : '',
          keep: '',
          sourceFileName: this.source.sourceFileName,
          sourceId: this.source.sourceId,
          uploadId: this.uploadId,
          processTime: this.processTime,
        };
        break;
      case 'nan':
        payload = {
          sourcepath: this.filePath,
          column_name: this.impute.column,
        };
        break;
      case 'data_remove':
        this.delete.formula.cond_value1 = this.delete.formula.cond_value1 ? this.delete.formula.cond_value1 : '';
        this.delete.formula.cond_value2 = this.delete.formula.cond_value2 ? this.delete.formula.cond_value2 : '';
        payload = {
          sourcepath: this.filePath,
          category: this.delete.category,
          column_name: this.delete.category === 'col_with_value' ? this.delete.column_name : '',
          values: this.delete.values ? [this.delete.values] : '',
          formula:
            (this.delete.category === 'col_with_value' && this.profile.attributeSummary.dataType === 'Numeric')
              ? this.delete.formula : '',
          threshold: (this.delete.category === 'col_nan' || this.delete.category === 'row_nan') ? (this.delete.threshold / 100) : ''
        };
        break;
    }
    return payload;
  }

  setRemoveItemMessage(response, type) {
    let removeItemMessage = response.cols_removed ? response.cols_removed : [];
    if (type === 'data_remove') {
      this.removeItems = {
        cols_removed: response.cols_removed,
        nr_cols_post: response.nr_cols_post,
        nr_cols_prior: response.nr_cols_prior,
        nr_rows_post: response.nr_rows_post,
        nr_rows_prior: response.nr_rows_prior
      };
    }
    if (this.delete.category === 'col_nan') {
      if (removeItemMessage.length > 0) {
        this.messageDisplay = removeItemMessage.join(', ');
      }
    }
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

  sourcePathSelected() {
    this.mask.sourcepath = this.source.templateSourcePath;
    this.impute.sourcepath = this.source.templateSourcePath;
    this.delete.sourcepath = this.source.templateSourcePath;
    this.duplicate.sourcepath = this.source.templateSourcePath;
    this.profileSummary.sourcepath = this.source.templateSourcePath;
    this.mask.sourceFileName = this.source.templateSourcePath;
    this.impute.sourceFileName = this.source.templateSourcePath;
    this.delete.sourceFileName = this.source.templateSourcePath;
    this.duplicate.sourceFileName = this.source.templateSourcePath;
    this.profileSummary.sourceFileName = this.source.templateSourcePath;
  }

  updateSourcePath(path, outputFileName) {
    this.source.templateSourcePath = path;
    this.mask.sourcepath = path;
    this.impute.sourcepath = path;
    this.delete.sourcepath = path;
    this.mask.sourceFileName = outputFileName;
    this.impute.sourceFileName = outputFileName;
    this.delete.sourceFileName = outputFileName;
    const profileCopy = { ...this.profile };
    this.profile = [];
    this.previewDataSource = new MatTableDataSource([]);
    this.getProfileDetail(path, profileCopy);
  }

  confirmImputeColumn() {
    if (this.selectedSourcePath && this.selectedSourcePath.indexOf("cleaned_data") !== -1) {
      this.showImputeDialog();
    } else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: {
          title: 'Warning',
          message: `Are You sure you want to Impute the Original Source ?`,
          cancelLable: 'No',
          okLable: 'Yes'
        }
      });

      dialogRef.afterClosed().subscribe(data => {
        if (data.action === 'ok') {
          this.showImputeDialog();
        }
      });
    }
  }

  showImputeDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Impute columns',
        message: `Are you sure want to impute the "${this.impute.column}" column with "${this.impute.value}" value?`,
        cancelLable: 'No',
        okLable: 'Yes'
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok') {
        this.imputeColumn();
      }
    });
  }

  imputeColumn() {
    this.impute.sourcepath = this.filePath;
    this.impute = {
      ...this.impute,
      sourceFileName: this.impute.sourceFileName,
      sourceId: this.source.sourceId,
      uploadId: this.uploadId,
      processTime: this.processTime,
    };
    this.http.imputeColumnsReq(this.impute).subscribe((result: any) => {

      if (result.outputpath) {
        this.updateSourcePath(result.outputpath, result.outputFileName);
      }
      this.alertService.showAlert(`Impution has been successfully completed.`);
      this.getCleanedLogs();
    }, (error) => {
      this.alertService.showError(error);
    });
  }

  setColumnForImpute(event) {
    this.impute.column = event.column;
    this.setDatatype(this.impute.column, this.impute);
  }

  confirmDeleteDuplicates() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Remove duplicate rows',
        message: `Are you sure want to delete the duplicate rows ${this.duplicate.columns.length ? 'based on the ' + this.duplicate.columns.join(', ') + ' columns' : ''}?`,
        cancelLable: 'No',
        okLable: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok') {
        this.deleteDuplicates();
      }
    });

  }

  deleteDuplicates() {
    const payload = {
      sourcepath: this.source.templateSourcePath,
      action: 'remove_duplicates',
      select_cols: this.duplicate.columns.length ? this.duplicate.columns : '',
      keep: 'first',
      sourceFileName: this.impute.sourceFileName,
      sourceId: this.source.sourceId,
      uploadId: this.uploadId,
      processTime: this.processTime,
    };

    this.http.deleteDuplicatesReq(payload).subscribe((result: any) => {
      if (result.outputpath) {
        this.updateSourcePath(result.outputpath, result.outputFileName);
      }
      this.alertService.showAlert('Duplicate records are deleted successfully.');
    }, (error) => {
      this.alertService.showError(error);
    });
  }

  confirmColumnsRows() {
    const deleteObj = { ...this.delete };

    if (!this.removeItems) {
      this.loadPreview('data_remove', '', this.deleteColumnsRows.bind(this));
      return;
    }
    if (deleteObj.category === 'row_nan' || deleteObj.category === 'col_nan') {
      deleteObj.formula = '';
    }
    let msg = this.getDeleteMessage(deleteObj);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: `Delete ${this.delete.type}`,
        message: msg,
        cancelLable: 'No',
        okLable: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.action === 'ok') {
        this.deleteColumnsRows();
      }
    });

  }

  getDeleteMessage(deleteObj) {
    let msg = `Are you sure want to delete the ${this.delete.type} with "Null" values?`;
    if (this.delete.category === 'col_nan' && this.removeItems) {
      msg = `Are you sure want to delete the "${this.removeItems.cols_removed.join(', ')}" columns with "Null" values?`;
    }

    if (this.delete.category === 'row_nan' && this.removeItems) {
      msg = `Are you sure want to delete the ${this.removeItems.nr_rows_post} rows with Null values?`;
    }

    if (this.delete.category === 'col_with_value') {
      if (deleteObj.formula) {
        if (this.profile.attributeSummary.dataType === 'Numeric') {
          msg = `Are you sure want to delete the rows with the ${this.delete.column_name}
             column values
             "${this.delete.formula.operator1} ${this.delete.formula.cond_value1} and
             ${this.delete.formula.operator2} ${this.delete.formula.cond_value2}"?`;
        } else {
          msg = `Are you sure want to delete the rows with the ${this.delete.column_name}
             value = ${this.delete.values}?`;
        }
      }
    }
    return msg;
  }

  deleteColumnsRows() {
    const payload = {
      ...this.delete,
      sourceFileName: this.delete.sourceFileName,
      sourceId: this.source.sourceId,
      uploadId: this.uploadId,
      processTime: this.processTime,
    };
    delete payload.type;
    delete payload.dataType;
    payload.threshold = '';

    if (payload.category === 'row_nan' || this.delete.category === 'col_nan') {
      payload.formula = '';
      payload.values = '';
      payload.threshold = (this.delete.threshold / 100);
    } else if (payload.category === 'col_with_value' && this.profile.attributeSummary.dataType !== 'Numeric') {
      payload.formula = '';
    }

    payload.values = payload.values ? [payload.values] : '';

    this.http.deleteColumnsRowsReq(payload).subscribe((result: any) => {
      if (result.outputpath) {
        this.updateSourcePath(result.outputpath, result.outputFileName);
      }
      this.removeItems = '';
      this.alertService.showAlert(`${this.delete === 'column' ? 'Columns' : 'Rows'} are deleted successfully.`);
    }, (error) => {
      this.alertService.showError(error);
    });
  }

  applySearch() {
    const payload = {
      sourcepath: this.filePath,
      find_value: this.searchValue
    };
    this.showSaveButton = false;
    this.previewDataSource = new MatTableDataSource([]);
    this.displayedColumns = [];
    this.http.findReplacePreview(payload).subscribe((result: any) => {
      let details = result.Preview ? result.Preview : {};
      this.showPreviewTable = true;
      if (Object.keys(details).length === 0) {
        this.searchDisabled = true;
      } else {
        this.searchDisabled = false;
        this.parseSourcePreview(details);
      }
    }, (error) => {
      this.alertService.showError(error.message);
    });
  }

  applyReplaceSearch() {
    const current_timestamp = moment().format();
    const payload = {
      sourcepath: this.filePath,
      find_value: this.searchValue,
      replace_value: this.replaceValue,
      sourceFileName: this.source.sourceFileName,
      sourceId: this.source.sourceId,
      uploadId: this.source.sourceId,
      processTime: current_timestamp
    };
    this.previewDataSource = new MatTableDataSource([]);
    this.displayedColumns = [];
    this.showPreviewTable = false;
    this.showSaveButton = false;
    this.http.replacePreview(payload).subscribe((result: any) => {
      if (result.outputpath) {
        this.replaceSourcepath = result.outputpath;
        this.replaceFileName = result.outputFileName;
        const payload = {
          sourcepath: result.outputpath,
          seeMoreEnabled: 'NO',
        };
        this.http.getProfileView(payload).subscribe((res: any) => {
          let details = result.Preview ? result.Preview : {};
          if (details) {
            this.showSaveButton = true;
            this.parseSourcePreview(details);
            this.getCleanedLogs();
          }
        });
      }
      this.alertService.showAlert(result.result);
      this.replaceValue = '';
      this.searchValue = '';
    }, (error) => {
      this.alertService.showError(error.message);
    });
  }


  showSaveConfirm() {
    if (this.selectedSourcePath && this.selectedSourcePath.indexOf("cleaned_data") !== -1) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: {
          title: 'Save Sources',
          message: `Are You sure you want to Save the same source ?`,
          cancelLable: 'No',
          okLable: 'Yes'
        }
      });
      dialogRef.afterClosed().subscribe(data => {
        if (data.action === 'cancel') {
          const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '400px',
            data: {
              title: 'Save soruce',
              message: `Are you sure want to save this updated source?`,
              cancelLable: 'No',
              okLable: 'Yes',
              showReason: true,
              reasonLabel: 'File Name'
            }
          });

          dialogRef.afterClosed().subscribe(data => {
            if (data.action === 'ok') {
              const payload = {
                sourceId: this.source.sourceId,
                sourcePath: this.filePath,
                uploadId: this.source.sourceId,
                uploadTime: this.source.uploadDate,
                outputPath: 'cleaned_data',
                canOverwrite: "YES",
                outputFileName: this.filePath.split('/')[1]
              };
              this.saveCleanSource(data.reason, payload);
            }
          });
        } else {
          this.saveCleanSource(data.reason);
        }
      });

    } else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: {
          title: 'Save soruce',
          message: `Are you sure want to save this updated source?`,
          cancelLable: 'No',
          okLable: 'Yes',
          showReason: true,
          reasonLabel: 'File Name'
        }
      });
      dialogRef.afterClosed().subscribe(data => {
        if (data.action === 'ok') {
          this.saveCleanSource(data.reason);
        }
      });
    }
  } x

  saveCleanSource(reason, payload: any = {}) {
    if (!payload.sourceId) {
      payload = {
        sourceId: this.source.sourceId,
        sourcePath: this.source.templateSourcePath,
        uploadId: this.source.sourceId,
        uploadTime: this.source.uploadDate,
        outputPath: 'cleaned_data',
        outputFileName: reason + '.csv'
      };
    }
    this.http.saveCleanSource(payload).subscribe((result: any) => {
      if (result.errorflag === 'True') {
        this.alertService.showError(result.errorMsg);
        return;
      }
      let savedFiles = result.SourceDetailsList[0].CleanedFilesLog[result.SourceDetailsList[0].CleanedFilesLog.length - 1];
      if (savedFiles) {
        this.updateSourcePath(savedFiles.outputPath, savedFiles.outputFileName);
      }
      this.ds.setRefreshMenu(result, 2);
    });
  }

  downloadReplacedSource() {
    let sourcepath = this.replaceSourcepath,
      fileName = this.replaceFileName;
    const payload = {
      sourcepath: sourcepath,
      seeMoreEnabled: 'YES',
    };
    this.http.getProfileView(payload).subscribe((res: any) => {
      let detail = res.Preview ? res.Preview : {};
      this.downloadCSV(fileName, detail);
    }, (error) => {
      this.alertService.showError(error);
    });
  }

  downloadCSV(formula, collectionResult) {
    let data = [], fileHeaders = [];
    Object.keys(collectionResult).map((key) => {
      data.push(collectionResult[key]);
    });

    Object.keys(collectionResult[0]).map((key, index) => {
      fileHeaders.push(key);
    });
    let options = {
      title: '',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      headers: fileHeaders
    };

    new Angular2Csv(data, formula, options);
  }

  showCleanLogs() {
    this.dialog.open(CleanLogsComponent, {
      width: '900px',
      data: this.cleanLogs
    });
  }

  changeRemoveCategory(type) {
    if (type === 'column') {
      this.delete.category = 'col_nan';
    } else {
      this.delete.category = 'row_nan';
    }
  }

  setDatatype(column: any, option: any) {
    let profile = this.profile.find(item => item.column === column);
    if (profile && profile.attributeSummary) {
      option.column_data_type = profile.attributeSummary.dataType || '';
      this.frequncyAnalysis = profile.frequncyAnalysis || [];
    }
  }

  calulateRowNanThreshold() {
    const value = (this.profileSummary['Total Columns'].count - ((this.delete.threshold / 100) * this.profileSummary['Total Columns'].count));
    return value.toFixed(0);
  }

  calulateColNanThreshold() {
    const value = ((this.delete.threshold / 100) * this.profileSummary['Records'].count);
    return value.toFixed(0);
  }

}
