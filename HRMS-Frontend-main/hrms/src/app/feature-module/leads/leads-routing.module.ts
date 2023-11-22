import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsPageComponent } from './leads-page/leads-page.component';
import { LeadsComponent } from './leads.component';

const routes: Routes = [
  { 
    path: '', 
    component: LeadsComponent,
    children:[
      { path: "main", component: LeadsPageComponent },
    ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
