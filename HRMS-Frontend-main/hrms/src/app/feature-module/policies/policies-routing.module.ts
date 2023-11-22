import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliciesPageComponent } from './policies-page/policies-page.component';
import { PoliciesComponent } from './policies.component';

const routes: Routes = [
  { 
    path: '', 
    component: PoliciesComponent,
    children:[
      { path: "main", component: PoliciesPageComponent },
    ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
