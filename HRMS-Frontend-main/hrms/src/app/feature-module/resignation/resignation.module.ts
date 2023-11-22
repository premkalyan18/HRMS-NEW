import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResignationRoutingModule } from './resignation-routing.module';
import { ResignationComponent } from './resignation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResMainComponent } from './res-main/res-main.component';


@NgModule({
  declarations: [
    ResignationComponent,
    ResMainComponent
  ],
  imports: [
    CommonModule,
    ResignationRoutingModule,
    SharedModule
  ]
})
export class ResignationModule { }
