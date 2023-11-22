import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEstimateComponent } from './estimates/create-estimate/create-estimate.component';
import { EditEstimateComponent } from './estimates/edit-estimate/edit-estimate.component';
import { EstimatePageComponent } from './estimates/estimate-page/estimate-page.component';
import { EstimateViewComponent } from './estimates/estimate-view/estimate-view.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CreateInvoiceComponent } from './invoices/create-invoice/create-invoice.component';
import { EditInvoiceComponent } from './invoices/edit-invoice/edit-invoice.component';
import { InvoicePageComponent } from './invoices/invoice-page/invoice-page.component';
import { InvoiceViewComponent } from './invoices/invoice-view/invoice-view.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProvidentFundComponent } from './provident-fund/provident-fund.component';
import { SalesComponent } from './sales.component';
import { TaxesComponent } from './taxes/taxes.component';

const routes: Routes = [
  { 
    path: '', 
    component: SalesComponent,
    children: [
      { path: "estimate-page", component: EstimatePageComponent },
      { path: "estimate-view", component: EstimateViewComponent },
      { path: "create-estimate", component: CreateEstimateComponent },
      { path: "edit-estimate", component: EditEstimateComponent },
      { path: "invoice-page", component: InvoicePageComponent },
      { path: "invoice-view", component: InvoiceViewComponent },
      { path: "edit-invoice", component: EditInvoiceComponent },
      { path: "create-invoice", component: CreateInvoiceComponent },
      { path: "payments", component: PaymentsComponent },
      { path: "expenses", component: ExpensesComponent },
      { path: "provident-fund", component: ProvidentFundComponent },
      { path: "taxes", component: TaxesComponent },
    ] 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
