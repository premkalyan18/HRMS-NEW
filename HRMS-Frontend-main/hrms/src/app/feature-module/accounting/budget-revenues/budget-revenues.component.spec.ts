import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRevenuesComponent } from './budget-revenues.component';

describe('BudgetRevenuesComponent', () => {
  let component: BudgetRevenuesComponent;
  let fixture: ComponentFixture<BudgetRevenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetRevenuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetRevenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
