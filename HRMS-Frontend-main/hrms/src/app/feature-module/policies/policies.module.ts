import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PoliciesPageComponent } from './policies-page/policies-page.component';


@NgModule({
  declarations: [
    PoliciesComponent,
    PoliciesPageComponent
  ],
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    SharedModule
  ]
})
export class PoliciesModule { }
