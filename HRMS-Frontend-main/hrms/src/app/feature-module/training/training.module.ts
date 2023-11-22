import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingTypeComponent } from './training-type/training-type.component';
import { TrainersComponent } from './trainers/trainers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TrainingComponent,
    TrainingListComponent,
    TrainingTypeComponent,
    TrainersComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule
  ]
})
export class TrainingModule { }
