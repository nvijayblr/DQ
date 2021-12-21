import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdStepperComponent } from './dd-stepper.component';

describe('DdStepperComponent', () => {
  let component: DdStepperComponent;
  let fixture: ComponentFixture<DdStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
