import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { validateHeaderName } from "http";
import { Subscription } from "rxjs";
import { WebStorage } from "src/app/core/services/storage/web.storage";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loading = false;
  public form: FormGroup | any;
  public isvalidconfirmpassword: boolean = false;
  public subscription: Subscription;
  public CustomControler: any;
  // form = new FormGroup({
  //   first_name: new FormControl("", [Validators.required]),
  //   last_name: new FormControl("", [Validators.required]),
  //   username: new FormControl("", [Validators.required]),
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   phone: new FormControl("", [Validators.required]),
  //   password: new FormControl("", [Validators.required]),
  //   joining_date: new FormControl("", [Validators.required]),
  //   department: new FormControl("", [Validators.required]),
  //   designation: new FormControl("", [Validators.required]),
  //   isAdmin: new FormControl(true, [Validators.required]),
  //   emplyeeIdentficationCode: new FormControl("0")
    
  //   // confirmPassword: new FormControl("", [Validators.required]),
    
  // });
  

  get f() {
    return this.form.controls;
  }

  constructor(private storage: WebStorage,private formBuilder: FormBuilder) {
    this.subscription = this.storage.Createaccountvalue.subscribe((data) => {
      this.loading = false
      this.CustomControler = data;
    });
    
  }

  ngOnInit() {
    this.CustomControler = '';
    this.form = this.formBuilder.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      // ConfirmPassword: ["", [Validators.required]],
      // department: ["", [Validators.required]],
      designation: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      joining_date: [""],  
      salary: ["",],
      isAdmin:true,
      currency: ["INR", [Validators.required]],
      // CompanyName: ["", [Validators.required]],
      emplyeeIdentficationCode: ["0"],
      isReportingManager: [true],
      ReportingManager: [''],
      casual_leave_days: [1],
      medical_leave_days: [1],
      lop_leave_days: [1],
      isOwner:[true],
      can_add_employees:[true],
      can_remove_employees:[true],
      can_update_employees:[true],
      can_read_holidays:[true],
      can_write_holidays:[true],
      can_create_holidays: [true],
      can_delete_holidays: [true],
      can_import_holidays: [true],
      can_export_holidays: [true],

      can_read_leaves: [true],
      can_write_leaves: [true],
      can_create_leaves: [true],
      can_delete_leaves: [true],
      can_import_leaves: [true],
      can_export_leaves: [true],
      
      can_read_clients: [true],
      can_write_clients: [true],
      can_create_clients: [true],
      can_delete_clients: [true],
      can_import_clients: [true],
      can_export_clients: [true],
      
      can_read_projects: [true],
      can_write_projects: [true],
      can_create_projects: [true],
      can_delete_projects: [true],
      can_import_projects: [true],
      can_export_projects: [true],
      
      can_read_tasks: [true],
      can_write_tasks: [true],
      can_create_tasks: [true],
      can_delete_tasks: [true],
      can_import_tasks: [true],
      can_export_tasks: [true],
      
      can_read_chats: [true],
      can_write_chats: [true],
      can_create_chats: [true],
      can_delete_chats: [true],
      can_import_chats: [true],
      can_export_chats: [true],
      
      can_read_assets: [true],
      can_write_assets: [true],
      can_create_assets: [true],
      can_delete_assets: [true],
      can_import_assets: [true],
      can_export_assets: [true],

      can_read_timing_sheets: [true],
      can_write_timing_sheets: [true],
      can_create_timing_sheets: [true],
      can_delete_timing_sheets: [true],
      can_import_timing_sheets: [true],
      can_export_timing_sheets: [true]

      // ProfilePicture:["", [Validators.required]]
    });

  }

  submit() {
      this.loading = true;
      this.isvalidconfirmpassword = false;
      // let joinDate:any = this.form.value['joining_date']
      // const dateObject = new Date(joinDate);
      // const year = dateObject.getFullYear();
      // const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
      // const day = dateObject.getDate().toString().padStart(2, '0');
      // const formattedDate = `${year}-${month}-${day}`;
      this.form.value['joining_date'] = '0001-01-01'
      this.form.value['ReportingManager'] = this.form.value['username']
      // if(this.form.value['isAdmin']){
      //   this.form.value['isAdmin'] = true;
      // }
      // else{
      //   this.form.value['isAdmin'] = false;
      // }
      this.storage.Createaccount(this.form.value);
    
    // this.storage.Createaccount(this.form.value);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
