import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { WebStorage } from "src/app/core/services/storage/web.storage";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  loading = false;
  public CustomControler: any;
  public subscription: Subscription | any;
  messageLength:any;

  constructor(private storage: WebStorage, private router:Router) { 
    this.subscription = this.storage.Forgotpasswordvalue.subscribe((data)=>{
      this.loading = false;
      this.CustomControler = data;
     
    })
  }
  get f() {
    return this.form.controls;
  }
  ngOnInit() {
    this.CustomControler = '';
  }
  submit() {
    this.loading = true;
    this.CustomControler = 0;
    this.storage.Forgotpassword(this.form.value);
  }
}
