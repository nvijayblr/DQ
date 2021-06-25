import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditSourceCategoryComponent } from './create-edit-source-category.component';

describe('CreateEditSourceCategoryComponent', () => {
  let component: CreateEditSourceCategoryComponent;
  let fixture: ComponentFixture<CreateEditSourceCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditSourceCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditSourceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
