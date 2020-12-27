import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnCarouselComponent } from './mn-carousel.component';

describe('MnCarouselComponent', () => {
  let component: MnCarouselComponent;
  let fixture: ComponentFixture<MnCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
