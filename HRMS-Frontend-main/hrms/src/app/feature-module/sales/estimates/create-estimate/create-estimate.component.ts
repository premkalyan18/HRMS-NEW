import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-create-estimate',
  templateUrl: './create-estimate.component.html',
  styleUrls: ['./create-estimate.component.scss']
})
export class CreateEstimateComponent implements OnInit {
  public addEstimateForm: FormGroup | any;
  public expArray: any = [1];
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     // add estimation form value
     this.addEstimateForm = this.formBuilder.group({
      client: ["", [Validators.required]],
      project: ["", [Validators.required]],
      email: ["", [Validators.required]],
      tax: ["", [Validators.required]],
      client_address: ["", [Validators.required]],
      billing_address: ["", [Validators.required]],
      estimate_date: ["", [Validators.required]],
      expiry_date: ["", [Validators.required]],
      other_information: [""],
      status: [""],
      totalamount: ["", [Validators.required]],
      discount: [""],
      grandTotal: [""],
      items: this.formBuilder.array([]),
    });
  }
  public addExp():void {
    this.expArray.push(1)
  }
  public deleteExp(index:any):void {
    this.expArray.splice(index, 1)
  }


}
