import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  { 
    path: '', 
    component: TicketsComponent,
    children: [
      { path: "ticket-page", component: TicketPageComponent },
      { path: "ticket-view", component: TicketViewComponent },
    ] 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
