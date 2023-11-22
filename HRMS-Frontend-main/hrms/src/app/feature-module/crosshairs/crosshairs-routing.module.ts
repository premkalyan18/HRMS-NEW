import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrosshairsComponent } from './crosshairs.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalTypeComponent } from './goal-type/goal-type.component';

const routes: Routes = [
  { 
    path: '', 
    component: CrosshairsComponent,
    children: [
      { path: "list", component: GoalListComponent },
      { path: "type", component: GoalTypeComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrosshairsRoutingModule { }
