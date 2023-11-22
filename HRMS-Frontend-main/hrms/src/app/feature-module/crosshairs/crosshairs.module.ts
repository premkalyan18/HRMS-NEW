import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrosshairsRoutingModule } from './crosshairs-routing.module';
import { CrosshairsComponent } from './crosshairs.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalTypeComponent } from './goal-type/goal-type.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CrosshairsComponent,
    GoalListComponent,
    GoalTypeComponent
  ],
  imports: [
    CommonModule,
    CrosshairsRoutingModule,
    SharedModule
  ]
})
export class CrosshairsModule { }
