import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInputsComponent } from './basic-inputs/basic-inputs.component';
import { FormMaskComponent } from './form-mask/form-mask.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormsComponent } from './forms.component';
import { HorizontalFormsComponent } from './horizontal-forms/horizontal-forms.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { VerticalFormsComponent } from './vertical-forms/vertical-forms.component';

const routes: Routes = [
  { 
    path: '', 
    component: FormsComponent,
    children: [
      { path: "basic-input", component: BasicInputsComponent },
      { path: "input-groups", component: InputGroupsComponent },
      { path: "horizontal-form", component: HorizontalFormsComponent },
      { path: "vertical-form", component: VerticalFormsComponent },
      { path: "form-mask", component: FormMaskComponent },
      { path: "form-validation", component: FormValidationComponent },
    ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
