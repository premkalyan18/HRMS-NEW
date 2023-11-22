import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { WebStorage } from 'src/app/core/services/storage/web.storage';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.scss']
})
export class LockScreenComponent implements OnInit {
  public isvalidconfirmpassword: boolean = false;
  public subscription: Subscription;
  public CustomControler: any;
  loading = false;
  public Toggledata=true;
  form = new FormGroup({
    password: new FormControl("", [Validators.required]),
    confirm_password: new FormControl("", [Validators.required]),
  });
  get f() {
    // console.log(this.form.controls)
    return this.form.controls;
  }
  constructor(public storage:WebStorage) { 
    this.subscription = this.storage.resetPasswordValue.subscribe((data)=>{
      this.loading = false
      this.CustomControler = data
    })
  }

  ngOnInit(): void {
    this.CustomControler = '';
  }
  submit() {
    // console.log(this.isvalidconfirmpassword)
    // this.isvalidconfirmpassword = true;

    // console.log(this.form.value)
    // this.storage.Createaccount(this.form.value);
  
  // console.log(this.form.value,"sitaaa")
  // this.storage.Createaccount(this.form.value);
  this.loading = true;
  if(this.form.valid){
    if(this.form.value.password != this.form.value.confirm_password){
      this.isvalidconfirmpassword = true
      this.loading = false
    }
    else{
      this.isvalidconfirmpassword = false;
      this.storage.resetPassword(this.form.value)
    }
  }
}
iconLogle(){
  this.Toggledata = !this.Toggledata
}

}
