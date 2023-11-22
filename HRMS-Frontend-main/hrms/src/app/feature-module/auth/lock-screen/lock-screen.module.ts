import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LockScreenRoutingModule } from './lock-screen-routing.module';
import { LockScreenComponent } from './lock-screen.component';


@NgModule({
  declarations: [
    LockScreenComponent
  ],
  imports: [
    CommonModule,
    LockScreenRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class LockScreenModule { }
