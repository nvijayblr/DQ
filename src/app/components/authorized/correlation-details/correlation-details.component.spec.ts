import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationDetailsComponent } from './correlation-details.component';

describe('CorrelationDetailsComponent', () => {
  let component: CorrelationDetailsComponent;
  let fixture: ComponentFixture<CorrelationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrelationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrelationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
