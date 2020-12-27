import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEditComponent } from './personal-edit.component';

describe('PersonalEditComponent', () => {
  let component: PersonalEditComponent;
  let fixture: ComponentFixture<PersonalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
