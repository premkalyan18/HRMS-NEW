import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsComponent } from './assets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssMainComponent } from './ass-main/ass-main.component';


@NgModule({
  declarations: [
    AssetsComponent,
    AssMainComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    SharedModule
  ]
})
export class AssetsModule { }
