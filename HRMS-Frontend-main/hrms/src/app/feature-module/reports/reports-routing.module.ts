import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { PaymentsReportComponent } from './payments-report/payments-report.component';
import { PayslipReportComponent } from './payslip-report/payslip-report.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { ReportsComponent } from './reports.component';
import { TaskReportComponent } from './task-report/task-report.component';
import { UserReportComponent } from './user-report/user-report.component';

const routes: Routes = [
  { 
    path: '', 
    component: ReportsComponent,
    children: [
      { path: "expense-report", component: ExpenseReportComponent },
      { path: "invoice-report", component: InvoiceReportComponent },
      { path: "payments-report", component: PaymentsReportComponent },
      { path: "project-report", component: ProjectReportComponent },
      { path: "task-report", component: TaskReportComponent },
      { path: "user-report", component: UserReportComponent },
      { path: "employee-report", component: EmployeeReportComponent },
      { path: "payslip-report", component: PayslipReportComponent },
      { path: "attendance-report", component: AttendanceReportComponent },
      { path: "leave-report", component: LeaveReportComponent },
      { path: "daily-report", component: DailyReportComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
