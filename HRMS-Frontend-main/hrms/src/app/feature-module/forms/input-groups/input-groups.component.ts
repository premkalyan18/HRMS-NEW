import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-groups',
  templateUrl: './input-groups.component.html',
  styleUrls: ['./input-groups.component.scss']
})
export class InputGroupsComponent implements OnInit {
  public InputGroupForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Basic Form Validation
    this.InputGroupForm = this.formBuilder.group({
    });
  }

  basicFormSubmit() {
  }

}
