import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-invoice-settings',
  templateUrl: './invoice-settings.component.html',
  styleUrls: ['./invoice-settings.component.scss']
})
export class InvoiceSettingsComponent implements OnInit {
  public invoiceSettings: FormGroup | any;
  constructor(
    private formBuilder: FormBuilder,
    
  ) {}

  ngOnInit() {
    this.invoiceSettings = this.formBuilder.group({
      invoicePrefix: ["INV", [Validators.required]],
      invoiceLogo: [""],
    });
  }


}
