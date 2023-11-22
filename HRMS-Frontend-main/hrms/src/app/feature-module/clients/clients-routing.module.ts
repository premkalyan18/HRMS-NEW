import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsContentPageComponent } from './clients-content-page/clients-content-page.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsProfileComponent } from './clients-profile/clients-profile.component';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClientsComponent,
    children: [
      { path: "client-page", component: ClientsContentPageComponent },
      { path: "client-list", component: ClientsListComponent },
      { path: "client-profile", component: ClientsProfileComponent },
    ] 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
