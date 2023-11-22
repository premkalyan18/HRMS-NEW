import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {
  public addInvoiceForm: FormGroup | any;
  public expArray: any = [1];
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     //add invoive form
     this.addInvoiceForm = this.formBuilder.group({
      client: ["", [Validators.required]],
      project: ["", [Validators.required]],
      email: ["", [Validators.required]],
      tax: ["", [Validators.required]],
      client_address: ["", [Validators.required]],
      billing_address: ["", [Validators.required]],
      invoice_date: ["", [Validators.required]],
      due_date: ["", [Validators.required]],
      other_information: ["", [Validators.required]],
      status: [""],
      totalamount: ["", [Validators.required]],
      discount: ["", [Validators.required]],
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
