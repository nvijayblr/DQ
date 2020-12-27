import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAddEditComponent } from './tasks-add-edit.component';

describe('TasksAddEditComponent', () => {
  let component: TasksAddEditComponent;
  let fixture: ComponentFixture<TasksAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
