import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermMainComponent } from './term-main/term-main.component';
import { TerminationComponent } from './termination.component';

const routes: Routes = [
  {
     path: '', 
     component: TerminationComponent,
    children:[
      {
        path:"term-main", component:TermMainComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminationRoutingModule { }
