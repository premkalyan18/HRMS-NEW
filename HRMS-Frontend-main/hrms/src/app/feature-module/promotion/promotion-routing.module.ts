import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionComponent } from './promotion.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { 
    path: '', 
    component: PromotionComponent,
    children:[
      { path: "views", component: ViewComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
