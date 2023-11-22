import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vertical-forms',
  templateUrl: './vertical-forms.component.html',
  styleUrls: ['./vertical-forms.component.scss']
})
export class VerticalFormsComponent implements OnInit {
  public basicForm: FormGroup | any;
  public addressForm: FormGroup | any;
  public twoColumnFormOne: FormGroup | any;
  public twoColumnFormTwo: FormGroup | any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Basic Form Validation

    this.basicForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
    });

     // Address Form Validation

     this.addressForm = this.formBuilder.group({
      addressOne: ['', [Validators.required]],
      addressTwo: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
    });

     // Vertical Form Validation

     this.twoColumnFormOne = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
      addresslineone: ['', [Validators.required]],
      addresslinetwo: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
    });


     // Vertical Form Validation

     this.twoColumnFormTwo = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      state: ['', [Validators.required]],
      textArea: ['', [Validators.required]],
      personalFirstName: ['', [Validators.required]],
      personalLastName: ['', [Validators.required]],
      personalEmail: ['', [Validators.required]],
      personalPhone: ['', [Validators.required]],
      personalCountry: ['', [Validators.required]],
      personalZipCode: ['', [Validators.required]],
      personalProvince: ['', [Validators.required]],
      personalCity: ['', [Validators.required]],
    });
}

}
