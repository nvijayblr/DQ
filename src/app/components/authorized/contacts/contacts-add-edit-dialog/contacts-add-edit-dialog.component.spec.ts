import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsAddEditDialogComponent } from './contacts-add-edit-dialog.component';

describe('ContactsAddEditDialogComponent', () => {
  let component: ContactsAddEditDialogComponent;
  let fixture: ComponentFixture<ContactsAddEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsAddEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
