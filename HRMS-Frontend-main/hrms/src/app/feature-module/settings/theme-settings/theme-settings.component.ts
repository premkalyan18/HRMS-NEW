import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {
  public themeSettings: FormGroup | any;
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.themeSettings = this.formBuilder.group({
      websiteName: ["Dreamguy's Technologies", [Validators.required]],
      lightLogo: [""],
      favicon: [""],
    });
  }
 

}
