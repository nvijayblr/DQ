import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSourceRulesetComponent } from './view-source-ruleset.component';

describe('ViewSourceRulesetComponent', () => {
  let component: ViewSourceRulesetComponent;
  let fixture: ComponentFixture<ViewSourceRulesetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSourceRulesetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSourceRulesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
