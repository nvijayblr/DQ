import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFormulaEditorComponent } from './advanced-formula-editor.component';

describe('AdvancedFormulaEditorComponent', () => {
  let component: AdvancedFormulaEditorComponent;
  let fixture: ComponentFixture<AdvancedFormulaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedFormulaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedFormulaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
