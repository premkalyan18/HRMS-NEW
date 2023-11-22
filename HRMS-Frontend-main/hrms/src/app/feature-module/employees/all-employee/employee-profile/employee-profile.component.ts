import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
  public addEmployeeForm: FormGroup | any;
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.addEmployeeForm = this.formBuilder.group({
      client: ["", [Validators.required]],
    });
  }


}
