import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditDeptComponent } from './create-edit-dept.component';

describe('CreateEditDeptComponent', () => {
  let component: CreateEditDeptComponent;
  let fixture: ComponentFixture<CreateEditDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
