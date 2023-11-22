import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ApprovalComponent } from './approval/approval.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { CronComponent } from './cron/cron.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { InvoiceSettingsComponent } from './invoice-settings/invoice-settings.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { LocalizationComponent } from './localization/localization.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PerformanceComponent } from './performance/performance.component';
import { RoleComponent } from './role/role.component';
import { SalarySettingsComponent } from './salary-settings/salary-settings.component';
import { ThemeSettingsComponent } from './theme-settings/theme-settings.component';
import { TokboxComponent } from './tokbox/tokbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SettingsComponent,
    ApprovalComponent,
    ChangePasswordComponent,
    CompanySettingsComponent,
    CronComponent,
    EmailSettingsComponent,
    InvoiceSettingsComponent,
    LeaveTypeComponent,
    LocalizationComponent,
    NotificationsComponent,
    PerformanceComponent,
    RoleComponent,
    SalarySettingsComponent,
    ThemeSettingsComponent,
    TokboxComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SettingsModule { }
