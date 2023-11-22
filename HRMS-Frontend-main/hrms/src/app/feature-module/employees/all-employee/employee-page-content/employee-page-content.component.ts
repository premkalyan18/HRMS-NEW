import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/core.index';
import { WebStorage } from 'src/app/core/services/storage/web.storage';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



@Component({
  selector: 'app-employee-page-content',
  templateUrl: './employee-page-content.component.html',
  styleUrls: ['./employee-page-content.component.scss']
})
export class EmployeePageContentComponent implements OnInit {
  public userId : any;
  selected = 'option2';
  public addEmp = true;
  public removeEmp = true;
  public editEmp = true;
  public lstEmployee: any[] | any;
  public subscription: Subscription;
  public addEmployeeForm: FormGroup | any;
  public editEmployeeForm: FormGroup | any;
  public searchForm: FormGroup | any;
  public reportingMangers:any;
  CustomControler:any;
  @ViewChild('closeEditEmployee') closeEditEmployee :any;
  @ViewChild('closeAddEmployee') closeAddEmployee :any;
  public getEmployee :any [] | any;
  constructor(private formBuilder: FormBuilder,public router: Router, private authService: AuthService, private storage:WebStorage,private element:ElementRef) {
    this.closeEditEmployee=element;
    this.closeAddEmployee=element;
    this.subscription = this.storage.getAllEmployeesValue.subscribe((data:any)=>{
      // if(data!=0){
      //   this.lstEmployee = data.data;
      // }
      if(data != 0){
        this.lstEmployee = data.data;
        for(let each of this.lstEmployee){
           if(each.id == this.userId){
            if(each['can_add_employees'] == true){
              this.addEmp = true
            }if(each['can_add_employees'] == false){
              this.addEmp = false
            }if(each['can_remove_employees'] == true){
               this.removeEmp = true;
            }if(each['can_remove_employees'] == false){
              this.removeEmp = false;
            }if(each['can_update_employees'] == true){
               this.editEmp = true
            }if(each['can_update_employees'] == false){
               this.editEmp = false
            }
           }
        }
        
      }
       
    })
    ,  this.subscription = this.storage.addEmployeeValue.subscribe((data:any)=>{
      if(data != 0){
        this.CustomControler = data;
        this.storage.allEmployees();
      }
    }), this.subscription = this.storage.editEmployeeValue.subscribe((data:any)=>{
      if(data != 0){
        this.lstEmployee = data.data;
        this.storage.allEmployees();
      }
    }),
   this.subscription = this.storage.searchEmployeesValue.subscribe((data:any)=>{
      if(data != 0){
        this.lstEmployee = data.data;   
      this.searchForm.value=''
     
    }
   })
   ,this.subscription = this.storage.deleteEmployeeValue.subscribe((data:any)=>{
       if(data!=0){
        this.storage.allEmployees();
       }
   })
  //  if(this.searchForm.value.empId == '' && this.searchForm.value.first_Name =='' &&  this.searchForm.value.des == ''){
  //   this.subscription = this.storage.getAllEmployeesValue.subscribe((data:any)=>{
  //     if(data != 0){
  //       this.lstEmployee = data.data;
  //     }
       
  //   })
  //  }
  }


  ngOnInit(): void {
    this.storage.allEmployees();
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
      casual_leave_days: ["", [Validators.required]],
      medical_leave_days: ["", [Validators.required]],
      lop_leave_days: ["", [Validators.required]],
      currency: ["INR", [Validators.required]],
      // CompanyName: ["", [Validators.required]],
      isAdmin:[false],
      isOwner:[false],
      emplyeeIdentficationCode: ["0", [Validators.required]],
      isReportingManager: [false],
      ReportingManager: [''],
      can_add_employees:[false],
      can_remove_employees:[false],
      can_update_employees:[false],
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
    this.editEmployeeForm = this.formBuilder.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      department: ["", [Validators.required]],
      designation: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      joining_date: [new Date(), [Validators.required]], 
      salary: ["", [Validators.required]],
      casual_leave_days: ["", [Validators.required]],
      medical_leave_days: ["", [Validators.required]],
      lop_leave_days: ["", [Validators.required]],
      currency: ["INR", [Validators.required]],
      // CompanyName: ["", [Validators.required]],
      emplyeeIdentficationCode: ["0", [Validators.required]],
      confirmPassword: [''],
      isReportingManager: [false],
      ReportingManager: [''],
      isAdmin:[false],
      isOwner:[false],
      can_add_employees:[false],
      can_remove_employees:[false],
      can_update_employees:[false],
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
    });
    this.searchForm = this.formBuilder.group({
      empId: [''], // You can add validators here
      first_Name: [''],
      des: [''],
    });
    // if(this.searchForm.value.empId == '' && this.searchForm.value.first_Name =='' &&  this.searchForm.value.des == ''){
    //   this.subscription = this.storage.getAllEmployeesValue.subscribe((data:any)=>{
    //     if(data != 0){
    //       this.lstEmployee = data.data;
    //     }
         
    //   })
    //  }
    this.userId = localStorage.getItem('userId')
  this.getReportMangFun()
    // if(this.searchForm.value.empId =='' && this.searchForm.value.first_Name=='' && this.searchForm.value.des==''){
    //   this.subscription = this.storage.getAllEmployeesValue.subscribe((data:any)=>{
    //     if(data != 0){
    //       this.lstEmployee = data.data;
    //     }
         
    //   })
    // }
  }
  addEmployee(){
    this.CustomControler = '';
    let joinDate:any = this.addEmployeeForm.value['joining_date']
    const dateObject = new Date(joinDate);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    this.addEmployeeForm.value['joining_date'] = formattedDate;
    for (const key in this.addEmployeeForm.value) {
      if (this.addEmployeeForm.value.hasOwnProperty(key)) {
        if (typeof this.addEmployeeForm.value[key] === "boolean") {
          this.addEmployeeForm.value[key] = this.addEmployeeForm.value[key] ? "True" : "False";
        } else {
          this.addEmployeeForm.value[key] = this.addEmployeeForm.value[key];
        }
      }
    }
    this.storage.addEmployee(this.addEmployeeForm.value);
    this.closeAddEmployee.nativeElement.click();
  }
  edit(emp:any){
    const dateObject = new Date(emp.joining_date);
    emp['joining_date'] = dateObject.toDateString();
    this.editEmployeeForm.patchValue(emp);
  }
 
  editEmployee(){
    this.CustomControler = '';
    let joinDate:any = this.editEmployeeForm.value['joining_date']
    const dateObject = new Date(joinDate);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    this.editEmployeeForm.value['joining_date'] = formattedDate;
    for (const key in this.editEmployeeForm.value) {
      if (this.editEmployeeForm.value.hasOwnProperty(key)) {
        if (this.editEmployeeForm.value[key] === null) {
          this.editEmployeeForm.value[key] = "False";
        }
        else if (typeof this.editEmployeeForm.value[key] === "boolean") {
          this.editEmployeeForm.value[key] = this.editEmployeeForm.value[key] ? "True" : "False";
        } else {
          this.editEmployeeForm.value[key] = this.editEmployeeForm.value[key];
        }
      }
    }
    this.storage.editEmploye(this.editEmployeeForm.value);

    this.closeEditEmployee.nativeElement.click();
    
  }
  // toggleReportingManagerField() {
  //   const isReportingManagerControl = this.addEmployeeForm.get('isReportingManager');
  //   const reportingManagerControl = this.addEmployeeForm.get('ReportingManager');

  //   if (isReportingManagerControl.value) {
  //     reportingManagerControl.enable();
  //   } else {
  //     reportingManagerControl.enable();
  //   }
  // }
  getReportMangFun(){
    this.authService.getAllRepMang().subscribe((data:any)=>{
       this.reportingMangers = data.data
    })
  }
  onSubmit(){
    //  this.lstEmployee = [];
   this.storage.searchUser(this.searchForm.value);
   
  }
  delete(emp:any){
    const reqBdy = {
      "email": emp.email
    }
    this.storage.deleteUser(reqBdy)
  }
}
