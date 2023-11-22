import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form-mask',
  templateUrl: './form-mask.component.html',
  styleUrls: ['./form-mask.component.scss']
})
export class FormMaskComponent implements OnInit {
  public basicForm: FormGroup | any;
  customPatterns = {
    V: { pattern: new RegExp("-?") },
    "0": { pattern: new RegExp("[0-9]") },
  };
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.basicForm = this.formBuilder.group({
      txt: [""],
    });
  }

  basicFormSubmit() {
  }
}
