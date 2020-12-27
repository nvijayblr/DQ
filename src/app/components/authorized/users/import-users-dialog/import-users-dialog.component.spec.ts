import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportUsersDialogComponent } from './import-users-dialog.component';

describe('ImportUsersDialogComponent', () => {
  let component: ImportUsersDialogComponent;
  let fixture: ComponentFixture<ImportUsersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportUsersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportUsersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
