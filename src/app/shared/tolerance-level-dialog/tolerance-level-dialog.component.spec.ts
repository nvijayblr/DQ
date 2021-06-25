import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToleranceLevelDialogComponent } from './tolerance-level-dialog.component';

describe('ToleranceLevelDialogComponent', () => {
  let component: ToleranceLevelDialogComponent;
  let fixture: ComponentFixture<ToleranceLevelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToleranceLevelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToleranceLevelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
