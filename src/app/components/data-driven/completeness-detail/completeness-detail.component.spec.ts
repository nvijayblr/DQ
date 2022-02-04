import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletenessDetailComponent } from './completeness-detail.component';

describe('CompletenessDetailComponent', () => {
  let component: CompletenessDetailComponent;
  let fixture: ComponentFixture<CompletenessDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletenessDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletenessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
