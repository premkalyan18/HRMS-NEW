import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {
  public editEstimateForm: FormGroup | any;
  public expArray: any = [1];
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //editestimate form value
    this.editEstimateForm = this.formBuilder.group({
      client: ["", [Validators.required]],
      project: [""],
      email: [""],
      tax: [""],
      client_address: [""],
      billing_address: [""],
      estimate_date: [""],
      expiry_date: [""],
      other_information: [""],
      status: [],
      totalamount: "",
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
