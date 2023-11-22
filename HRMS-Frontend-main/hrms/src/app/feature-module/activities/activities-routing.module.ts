import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitesViewComponent } from './activites-view/activites-view.component';
import { ActivitiesComponent } from './activities.component';

const routes: Routes = [
  { 
    path: '', 
    component: ActivitiesComponent,
    children:[
      {
        path: 'activites-view', component: ActivitesViewComponent
      }
    ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
