import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,

} from "@angular/forms";
@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent implements OnInit {

  public localisation: FormGroup | any;
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.localisation = this.formBuilder.group({
      defaultCountry: ["USA", [Validators.required]],
      dateFormat: ["15/05/2016", [Validators.required]],
      timeZone: ["(UTC +5:30) Antarctica/Palmer", [Validators.required]],
      deafultLanguage: ["English", [Validators.required]],
      currencyCode: ["USD", [Validators.required]],
    });
  }

}
