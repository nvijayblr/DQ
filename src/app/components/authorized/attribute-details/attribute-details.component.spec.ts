import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDetailsComponent } from './attribute-details.component';

describe('AttributeDetailsComponent', () => {
  let component: AttributeDetailsComponent;
  let fixture: ComponentFixture<AttributeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
