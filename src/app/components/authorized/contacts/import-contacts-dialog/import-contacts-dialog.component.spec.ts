import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportContactsDialogComponent } from './import-contacts-dialog.component';

describe('ImportContactsDialogComponent', () => {
  let component: ImportContactsDialogComponent;
  let fixture: ComponentFixture<ImportContactsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportContactsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportContactsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
