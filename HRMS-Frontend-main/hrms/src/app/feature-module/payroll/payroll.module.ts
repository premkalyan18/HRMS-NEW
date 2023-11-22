import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollComponent } from './payroll.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PayrollItemsComponent } from './payroll-items/payroll-items.component';
import { SalaryViewComponent } from './salary-view/salary-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PayrollComponent,
    EmployeeSalaryComponent,
    PayrollItemsComponent,
    SalaryViewComponent
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule,
    SharedModule
  ]
})
export class PayrollModule { }
