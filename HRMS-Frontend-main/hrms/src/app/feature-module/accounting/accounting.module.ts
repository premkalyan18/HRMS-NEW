import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './accounting.component';
import { CategoriesComponent } from './categories/categories.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { BudgetExpensesComponent } from './budget-expenses/budget-expenses.component';
import { BudgetRevenuesComponent } from './budget-revenues/budget-revenues.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AccountingComponent,
    CategoriesComponent,
    BudgetsComponent,
    BudgetExpensesComponent,
    BudgetRevenuesComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    SharedModule
  ]
})
export class AccountingModule { }
