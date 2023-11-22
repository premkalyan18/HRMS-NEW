import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-salary-settings',
  templateUrl: './salary-settings.component.html',
  styleUrls: ['./salary-settings.component.scss']
})
export class SalarySettingsComponent implements OnInit {

  public salarySettings: FormGroup | any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.salarySettings = this.formBuilder.group({
      da: ['', [Validators.required]],
      hra: ['', [Validators.required]],
      employeeShare: ['', [Validators.required]],
      organisationShare: ['', [Validators.required]],
      esiEmployeeShare: ['', [Validators.required]],
      esiOrganisationShare: ['', [Validators.required]],
      annualSalaryFrom1: ['', [Validators.required]],
      annualSalaryTo1: ['', [Validators.required]],
      annualpercentage1: ['', [Validators.required]],
      annualSalaryFrom2: ['', [Validators.required]],
      annualSalaryTo2: ['', [Validators.required]],
      annualpercentage2: ['', [Validators.required]],
    });
  }

}
