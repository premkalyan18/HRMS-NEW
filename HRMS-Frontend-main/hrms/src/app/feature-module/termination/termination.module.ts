import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminationRoutingModule } from './termination-routing.module';
import { TerminationComponent } from './termination.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TermMainComponent } from './term-main/term-main.component';


@NgModule({
  declarations: [
    TerminationComponent,
    TermMainComponent
  ],
  imports: [
    CommonModule,
    TerminationRoutingModule,
    SharedModule
  ]
})
export class TerminationModule { }
