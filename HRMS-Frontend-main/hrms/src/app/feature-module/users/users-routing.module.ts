import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { 
    path: '', 
    component: UsersComponent,
    children:[
      {
        path:"user-view", component: UserViewComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
