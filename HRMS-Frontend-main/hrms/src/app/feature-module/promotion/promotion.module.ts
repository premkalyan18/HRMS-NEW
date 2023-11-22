import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    PromotionComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    SharedModule
  ]
})
export class PromotionModule { }
