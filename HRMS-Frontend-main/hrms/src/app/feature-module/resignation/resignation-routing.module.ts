import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResMainComponent } from './res-main/res-main.component';
import { ResignationComponent } from './resignation.component';

const routes: Routes = [
  { 
    path: '', 
    component: ResignationComponent,
    children:[
      {
        path:"res-main", component: ResMainComponent 
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResignationRoutingModule { }
