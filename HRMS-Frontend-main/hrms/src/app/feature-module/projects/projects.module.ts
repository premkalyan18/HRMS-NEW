import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskSidebarComponent } from './task-sidebar/task-sidebar.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectContentComponent,
    ProjectListComponent,
    ProjectViewComponent,
    TaskBoardComponent,
    TasksComponent,
    ProjectModalComponent,
    TaskSidebarComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    DragDropModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProjectsModule { }
