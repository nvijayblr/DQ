import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderChartComponent } from './cylinder-chart.component';

describe('CylinderChartComponent', () => {
  let component: CylinderChartComponent;
  let fixture: ComponentFixture<CylinderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CylinderChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
