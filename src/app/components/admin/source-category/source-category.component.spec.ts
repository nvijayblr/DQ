import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCategoryComponent } from './source-category.component';

describe('SourceCategoryComponent', () => {
  let component: SourceCategoryComponent;
  let fixture: ComponentFixture<SourceCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
