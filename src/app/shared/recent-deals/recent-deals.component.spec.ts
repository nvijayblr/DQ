import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDealsComponent } from './recent-deals.component';

describe('RecentDealsComponent', () => {
  let component: RecentDealsComponent;
  let fixture: ComponentFixture<RecentDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
