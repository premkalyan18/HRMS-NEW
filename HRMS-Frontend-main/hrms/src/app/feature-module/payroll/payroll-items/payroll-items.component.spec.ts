import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollItemsComponent } from './payroll-items.component';

describe('PayrollItemsComponent', () => {
  let component: PayrollItemsComponent;
  let fixture: ComponentFixture<PayrollItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
