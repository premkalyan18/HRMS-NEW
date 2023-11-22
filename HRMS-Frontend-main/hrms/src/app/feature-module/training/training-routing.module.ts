import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingTypeComponent } from './training-type/training-type.component';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  { 
    path: '', 
    component: TrainingComponent,
    children: [
      { path: "lists", component: TrainingListComponent },
      { path: "types", component: TrainingTypeComponent },
      { path: "trainer", component: TrainersComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
