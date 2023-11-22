import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { SubCompanyComponent } from './sub-company/sub-company.component';
import { SubscribedCompaniesComponent } from './subscribed-companies/subscribed-companies.component';
import { SubscriptionsComponent } from './subscriptions.component';

const routes: Routes = [
  { 
    path: '', 
    component: SubscriptionsComponent,
    children: [
      { path: "admins", component: SubAdminComponent },
      { path: "company", component: SubCompanyComponent },
      { path: "subscribed-companies", component: SubscribedCompaniesComponent },

    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule { }
