import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { WebStorage } from 'src/app/core/services/storage/web.storage';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.scss']
})
export class EmployeeModalComponent implements OnInit{
  public addEmployeeForm: FormGroup | any;
  public editEmployeeForm: FormGroup | any;
  public subscription: Subscription;
  public CustomControler :any;
  @Input() emp: any; 
  displayName:any;
  // public permissionObj:any;
  selected = 'option2';
  constructor(private formBuilder: FormBuilder, private storage: WebStorage,private elementRef: ElementRef,private authService:AuthService,) { 
      
    this.subscription = this.storage.addEmployeeValue.subscribe((data:any)=>{
      if(data != 0){
        // this.loading = false;
        this.CustomControler = data.message;
        // const modalElement: HTMLElement = this.myModal.nativeElement;
        // setTimeout(()=>{
        //   setTimeout(()=>{
        //     this.closeModal(modalElement);

        //   })
        // },1000)
      }
    })
  }
  
  ngOnInit(): void {
    
    // add employee form validation
    this.addEmployeeForm = this.formBuilder.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      // ConfirmPassword: ["", [Validators.required]],
      department: ["", [Validators.required]],
      designation: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      joining_date: ["", [Validators.required]],  
      salary: ["", [Validators.required]],
      currency: ["INR", [Validators.required]],
      // CompanyName: ["", [Validators.required]],
      emplyeeIdentficationCode: ["0", [Validators.required]],
      can_read_holidays:[false],
      can_write_holidays:[false],
      can_create_holidays: [false],
      can_delete_holidays: [false],
      can_import_holidays: [false],
      can_export_holidays: [false],

      can_read_leaves: [false],
      can_write_leaves: [false],
      can_create_leaves: [false],
      can_delete_leaves: [false],
      can_import_leaves: [false],
      can_export_leaves: [false],
      
      can_read_clients: [false],
      can_write_clients: [false],
      can_create_clients: [false],
      can_delete_clients: [false],
      can_import_clients: [false],
      can_export_clients: [false],
      
      can_read_projects: [false],
      can_write_projects: [false],
      can_create_projects: [false],
      can_delete_projects: [false],
      can_import_projects: [false],
      can_export_projects: [false],
      
      can_read_tasks: [false],
      can_write_tasks: [false],
      can_create_tasks: [false],
      can_delete_tasks: [false],
      can_import_tasks: [false],
      can_export_tasks: [false],
      
      can_read_chats: [false],
      can_write_chats: [false],
      can_create_chats: [false],
      can_delete_chats: [false],
      can_import_chats: [false],
      can_export_chats: [false],
      
      can_read_assets: [false],
      can_write_assets: [false],
      can_create_assets: [false],
      can_delete_assets: [false],
      can_import_assets: [false],
      can_export_assets: [false],

      can_read_timing_sheets: [false],
      can_write_timing_sheets: [false],
      can_create_timing_sheets: [false],
      can_delete_timing_sheets: [false],
      can_import_timing_sheets: [false],
      can_export_timing_sheets: [false]

      // ProfilePicture:["", [Validators.required]]
    });
    

    // edit form validation
    this.editEmployeeForm = this.formBuilder.group({
      FirstName: ["", [Validators.required]],
      LastName: ["", [Validators.required]],
      UserName: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      ConfirmPassword: ["", [Validators.required]],
      DepartmentName: ["", [Validators.required]],
      Designation: ["", [Validators.required]],
      Email: ["", [Validators.required]],
      PhoneNumber: ["", [Validators.required]],
      JoinDate: ["", [Validators.required]],
      CompanyName: ["", [Validators.required]],
      EmployeeID: ["", [Validators.required]],
    });
    
  }
  addEmployee(){
    let joinDate:any = this.addEmployeeForm.value['joining_date']
    const dateObject = new Date(joinDate);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    this.addEmployeeForm.value['joining_date'] = formattedDate
    this.storage.addEmployee(this.addEmployeeForm.value);
  }
 
}
