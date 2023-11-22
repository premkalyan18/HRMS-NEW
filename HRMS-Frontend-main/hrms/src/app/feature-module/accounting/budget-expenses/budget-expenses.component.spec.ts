import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetExpensesComponent } from './budget-expenses.component';

describe('BudgetExpensesComponent', () => {
  let component: BudgetExpensesComponent;
  let fixture: ComponentFixture<BudgetExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
