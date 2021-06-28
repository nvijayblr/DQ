import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalFormulaEditorComponent } from './conditional-formula-editor.component';

describe('ConditionalFormulaEditorComponent', () => {
  let component: ConditionalFormulaEditorComponent;
  let fixture: ComponentFixture<ConditionalFormulaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalFormulaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalFormulaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
