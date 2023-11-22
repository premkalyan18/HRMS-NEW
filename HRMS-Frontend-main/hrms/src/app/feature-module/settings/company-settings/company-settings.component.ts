import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent implements OnInit {

  public companySettings: FormGroup | any;
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.companySettings = this.formBuilder.group({
      companyName: ["Delta Technoligies", [Validators.required]],
      contactPerson: ["Mclaren", [Validators.required]],
      address: ["Penning street", [Validators.required]],
      country: ["USA", [Validators.required]],
      city: ["Nyanose", [Validators.required]],
      state: ["Alabama", [Validators.required]],
      postalCode: ["845321", [Validators.required]],
      email: ["mclaren@deltatechnoligies.com", [Validators.required]],
      phoneNumber: ["071-654124", [Validators.required]],
      mobileNumber: ["8547522541", [Validators.required]],
      fax: ["012-456213", [Validators.required]],
      website: ["www.deltatechnoligies.com", [Validators.required]],
    });
  }


}
