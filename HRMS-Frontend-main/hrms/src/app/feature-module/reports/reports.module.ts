import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';
import { PaymentsReportComponent } from './payments-report/payments-report.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { TaskReportComponent } from './task-report/task-report.component';
import { UserReportComponent } from './user-report/user-report.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { PayslipReportComponent } from './payslip-report/payslip-report.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReportsComponent,
    ExpenseReportComponent,
    InvoiceReportComponent,
    PaymentsReportComponent,
    ProjectReportComponent,
    TaskReportComponent,
    UserReportComponent,
    EmployeeReportComponent,
    PayslipReportComponent,
    AttendanceReportComponent,
    LeaveReportComponent,
    DailyReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
