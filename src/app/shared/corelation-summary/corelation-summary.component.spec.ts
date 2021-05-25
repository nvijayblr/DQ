import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorelationSummaryComponent } from './corelation-summary.component';

describe('CorelationSummaryComponent', () => {
  let component: CorelationSummaryComponent;
  let fixture: ComponentFixture<CorelationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorelationSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorelationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
