import { Component, OnInit } from '@angular/core';
import { WebStorage } from 'src/app/core/services/storage/web.storage';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  // form = new FormGroup({
  //   otp: new FormControl("", [Validators.required]),
  // });
  loading = false;
  otp: (number | null)[] = [null, null, null, null];
  otpLength=false;
  remainingTime: number = 300;  
  timer: any;
  interval:any;
  number=1;
  public CustomControler: any;
  constructor(private storage: WebStorage) { 
    this.storage.Confirmotpvalue.subscribe((data)=>{
      this.loading = false;
      this.CustomControler = data;
    })
  }

  ngOnInit(): void {
    this.onStart();
    this.CustomControler = '';
   
  }
  onStart(){
    this.interval = setInterval(() => {
    this.remainingTime -= 1;
    if(this.remainingTime ===0){
      clearInterval(this.interval)
    }
  }, 1000);
  
}

getMinutes() {
  return Math.floor(this.remainingTime / 60);
}

getSeconds() {
  return this.remainingTime % 60;
}
ngOnDestroy() {
  clearInterval(this.interval);
}
onOtpChange(event:any,){
   this.otp = event
   if(this.otp.length>=4){
    this.otpLength = true
   }
   else{
    this.otpLength = false
   }
}
submit(){
  this.loading = true;
  this.storage.confirmPassword(this.otp);
 
}
resendOtp(){
  let email = localStorage.getItem('forgotEmail')
  this.storage.Forgotpassword(email)
}
  
}
