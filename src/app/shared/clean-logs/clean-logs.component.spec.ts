import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanLogsComponent } from './clean-logs.component';

describe('CleanLogsComponent', () => {
  let component: CleanLogsComponent;
  let fixture: ComponentFixture<CleanLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
