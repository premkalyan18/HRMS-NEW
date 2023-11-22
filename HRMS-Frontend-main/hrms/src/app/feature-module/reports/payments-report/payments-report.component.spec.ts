import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsReportComponent } from './payments-report.component';

describe('PaymentsReportComponent', () => {
  let component: PaymentsReportComponent;
  let fixture: ComponentFixture<PaymentsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
