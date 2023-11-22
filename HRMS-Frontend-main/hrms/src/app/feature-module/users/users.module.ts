import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserViewComponent } from './user-view/user-view.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,SharedModule
  ]
})
export class UsersModule { }
