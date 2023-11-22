import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { SubCompanyComponent } from './sub-company/sub-company.component';
import { SubscribedCompaniesComponent } from './subscribed-companies/subscribed-companies.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SubscriptionsComponent,
    SubAdminComponent,
    SubCompanyComponent,
    SubscribedCompaniesComponent
  ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    SharedModule
  ]
})
export class SubscriptionsModule { }
