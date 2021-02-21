import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletenessDialogComponent } from './completeness-dialog.component';

describe('CompletenessDialogComponent', () => {
  let component: CompletenessDialogComponent;
  let fixture: ComponentFixture<CompletenessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletenessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletenessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
