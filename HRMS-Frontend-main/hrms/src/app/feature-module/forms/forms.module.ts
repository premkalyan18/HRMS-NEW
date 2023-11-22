import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { BasicInputsComponent } from './basic-inputs/basic-inputs.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { HorizontalFormsComponent } from './horizontal-forms/horizontal-forms.component';
import { VerticalFormsComponent } from './vertical-forms/vertical-forms.component';
import { FormMaskComponent } from './form-mask/form-mask.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormsComponent,
    BasicInputsComponent,
    InputGroupsComponent,
    HorizontalFormsComponent,
    VerticalFormsComponent,
    FormMaskComponent,
    FormValidationComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
