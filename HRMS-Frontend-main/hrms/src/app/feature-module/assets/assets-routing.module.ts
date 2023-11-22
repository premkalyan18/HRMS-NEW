import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssMainComponent } from './ass-main/ass-main.component';
import { AssetsComponent } from './assets.component';

const routes: Routes = [
  { 
    path: '',
    component: AssetsComponent,
    children:[
      {
        path:"mains", component: AssMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
