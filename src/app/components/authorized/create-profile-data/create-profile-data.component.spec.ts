import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileDataComponent } from './create-profile-data.component';

describe('CreateProfileDataComponent', () => {
  let component: CreateProfileDataComponent;
  let fixture: ComponentFixture<CreateProfileDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProfileDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
