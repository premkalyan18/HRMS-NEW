import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PayrollItemsComponent } from './payroll-items/payroll-items.component';
import { PayrollComponent } from './payroll.component';
import { SalaryViewComponent } from './salary-view/salary-view.component';

const routes: Routes = [
  { 
    path: '', 
    component: PayrollComponent,
    children: [ 
      { path: "employee-salary", component: EmployeeSalaryComponent },
      { path: "payroll-items", component: PayrollItemsComponent },
      { path: "salary-view", component: SalaryViewComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
