import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { EstimatePageComponent } from './estimates/estimate-page/estimate-page.component';
import { EstimateViewComponent } from './estimates/estimate-view/estimate-view.component';
import { CreateEstimateComponent } from './estimates/create-estimate/create-estimate.component';
import { EditEstimateComponent } from './estimates/edit-estimate/edit-estimate.component';
import { InvoicePageComponent } from './invoices/invoice-page/invoice-page.component';
import { InvoiceViewComponent } from './invoices/invoice-view/invoice-view.component';
import { EditInvoiceComponent } from './invoices/edit-invoice/edit-invoice.component';
import { CreateInvoiceComponent } from './invoices/create-invoice/create-invoice.component';
import { PaymentsComponent } from './payments/payments.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ProvidentFundComponent } from './provident-fund/provident-fund.component';
import { TaxesComponent } from './taxes/taxes.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SalesComponent,
    EstimatePageComponent,
    EstimateViewComponent,
    CreateEstimateComponent,
    EditEstimateComponent,
    InvoicePageComponent,
    InvoiceViewComponent,
    EditInvoiceComponent,
    CreateInvoiceComponent,
    PaymentsComponent,
    ExpensesComponent,
    ProvidentFundComponent,
    TaxesComponent,

  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule
  ]
})
export class SalesModule { }
