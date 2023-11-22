import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeadsPageComponent } from './leads-page/leads-page.component';


@NgModule({
  declarations: [
    LeadsComponent,
    LeadsPageComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    SharedModule
  ]
})
export class LeadsModule { }
