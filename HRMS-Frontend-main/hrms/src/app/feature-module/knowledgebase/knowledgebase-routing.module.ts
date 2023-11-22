import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgebaseMainComponent } from './knowledgebase-main/knowledgebase-main.component';
import { KnowledgebaseViewComponent } from './knowledgebase-view/knowledgebase-view.component';
import { KnowledgebaseComponent } from './knowledgebase.component';

const routes: Routes = [
  { 
    path: '', 
    component: KnowledgebaseComponent,
    children: [
      { path: "main", component: KnowledgebaseMainComponent },
      { path: "view", component: KnowledgebaseViewComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgebaseRoutingModule { }
