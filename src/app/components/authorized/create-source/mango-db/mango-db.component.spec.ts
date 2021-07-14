import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangoDBComponent } from './mango-db.component';

describe('MangoDBComponent', () => {
  let component: MangoDBComponent;
  let fixture: ComponentFixture<MangoDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangoDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangoDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
