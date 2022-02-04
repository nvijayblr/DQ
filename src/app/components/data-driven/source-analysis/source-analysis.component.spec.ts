import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceAnalysisComponent } from './source-analysis.component';

describe('SourceAnalysisComponent', () => {
  let component: SourceAnalysisComponent;
  let fixture: ComponentFixture<SourceAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
