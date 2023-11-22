import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipReportComponent } from './payslip-report.component';

describe('PayslipReportComponent', () => {
  let component: PayslipReportComponent;
  let fixture: ComponentFixture<PayslipReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayslipReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayslipReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
