import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss']
})
export class EmailSettingsComponent implements OnInit {
  public emailSettings: FormGroup | any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailSettings = this.formBuilder.group({
      phpMail: ['', [Validators.required]],
      smtp: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      emailName: ['', [Validators.required]],
      smtpHost: ['', [Validators.required]],
      smtpUser: ['', [Validators.required]],
      smtpPassword: ['', [Validators.required]],
      smtpPort: ['', [Validators.required]],
      smtpSecurity: ['', [Validators.required]],
      smtpAuthentication: ['', [Validators.required]],
    });
  }

}
