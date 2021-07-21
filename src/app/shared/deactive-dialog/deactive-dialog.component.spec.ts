import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveDialogComponent } from './deactive-dialog.component';

describe('DeactiveDialogComponent', () => {
  let component: DeactiveDialogComponent;
  let fixture: ComponentFixture<DeactiveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactiveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
