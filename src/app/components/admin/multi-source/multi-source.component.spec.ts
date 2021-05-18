import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSourceComponent } from './multi-source.component';

describe('MultiSourceComponent', () => {
  let component: MultiSourceComponent;
  let fixture: ComponentFixture<MultiSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
