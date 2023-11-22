import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAppraisalComponent } from './performance-appraisal.component';

describe('PerformanceAppraisalComponent', () => {
  let component: PerformanceAppraisalComponent;
  let fixture: ComponentFixture<PerformanceAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceAppraisalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
