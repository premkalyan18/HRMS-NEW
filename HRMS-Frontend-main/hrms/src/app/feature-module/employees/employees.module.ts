import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeProfileComponent } from './all-employee/employee-profile/employee-profile.component';
import { EmployeeListComponent } from './all-employee/employee-list/employee-list.component';
import { EmployeePageContentComponent } from './all-employee/employee-page-content/employee-page-content.component';
import { EmployeeModalComponent } from './all-employee/employee-modal/employee-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveAdminComponent } from './leave-admin/leave-admin.component';
import { LeaveEmployeeComponent } from './leave-employee/leave-employee.component';
import { LeaveSettingsComponent } from './leave-settings/leave-settings.component';
import { AttendanceAdminComponent } from './attendance-admin/attendance-admin.component';
import { AttendanceEmployeeComponent } from './attendance-employee/attendance-employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DesignationsComponent } from './designations/designations.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { OvertimeComponent } from './overtime/overtime.component';
import { ShiftScheduleComponent } from './shift-schedule/shift-schedule.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShiftListComponent } from './shift-list/shift-list.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeProfileComponent,
    EmployeeListComponent,
    EmployeePageContentComponent,
    EmployeeModalComponent,
    HolidaysComponent,
    LeaveAdminComponent,
    LeaveEmployeeComponent,
    LeaveSettingsComponent,
    AttendanceAdminComponent,
    AttendanceEmployeeComponent,
    DepartmentsComponent,
    DesignationsComponent,
    TimesheetComponent,
    OvertimeComponent,
    ShiftScheduleComponent,
    ShiftListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MatTableModule,
    // MatSortModule,
    SharedModule

  ],
  providers: [DatePipe]
})
export class EmployeesModule { }
