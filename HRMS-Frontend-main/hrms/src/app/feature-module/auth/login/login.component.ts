import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { WebStorage } from "src/app/core/services/storage/web.storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  public CustomControler : any;
  public subscription: Subscription;
  public Toggledata=true;
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private storage: WebStorage) {
    this.subscription = this.storage.Loginvalue.subscribe((data) => { 
      if(data != 0){
        // console.log(data, "ram")
        this.loading = false;
        this.CustomControler = data;
      }
    });
  }

  ngOnInit() {
    this.CustomControler=''
    this.storage.Checkuser();
    localStorage.removeItem('LoginData');
  }

  submit() {
    this.loading = true;
    this.CustomControler = '';
    // console.log(this.form.value, "login form")
    this.storage.Login(this.form.value);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  iconLogle(){
    this.Toggledata = !this.Toggledata
  }
}
