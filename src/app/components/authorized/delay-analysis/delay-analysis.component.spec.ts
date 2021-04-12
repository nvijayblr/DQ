import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayAnalysisComponent } from './delay-analysis.component';

describe('DelayAnalysisComponent', () => {
  let component: DelayAnalysisComponent;
  let fixture: ComponentFixture<DelayAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
