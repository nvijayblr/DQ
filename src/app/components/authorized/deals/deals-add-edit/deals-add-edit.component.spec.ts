import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsAddEditComponent } from './deals-add-edit.component';

describe('DealsAddEditComponent', () => {
  let component: DealsAddEditComponent;
  let fixture: ComponentFixture<DealsAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
