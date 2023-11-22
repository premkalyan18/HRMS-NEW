import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class WebStorage {
  fgtMail:any;
  public Loginvalue = new BehaviorSubject<any>(0);
  public Createaccountvalue = new BehaviorSubject<any>(0);
  public Forgotpasswordvalue = new BehaviorSubject<any>(0);
  public Confirmotpvalue = new BehaviorSubject<any>(0);
  public resetPasswordValue = new BehaviorSubject<any>(0);
  public addEmployeeValue =  new BehaviorSubject<any>(0);
  public getAllEmployeesValue = new BehaviorSubject<any>(0);
  public searchEmployeesValue = new BehaviorSubject<any>(0);
  public editEmployeeValue = new BehaviorSubject<any>(0);
  public deleteEmployeeValue = new BehaviorSubject<any>(0);
  public addHolidayValue = new BehaviorSubject<any>(0);
  public addLeaveValue = new BehaviorSubject<any>(0);
  public leaveProcessValue = new BehaviorSubject<any>(0);
  public punchInValue = new BehaviorSubject<any>(0);
  empObj:any;
  constructor(private router: Router, private authService:AuthService, private snackBar: MatSnackBar) {
      
    }

  /**
   * Create account Function call from Registerpage
   * @param uservalue from user form value
   */
  public Createaccount(uservalue: any): void {
    let Rawdata:any = localStorage.getItem('Loginusers');
    let Pdata: any = [];
    Pdata = JSON.parse(Rawdata);
    // console.log(Pdata,"rama")
    // Pdata.find((f: any) => {
    //   if (f.email == uservalue.email) {
    //     this.Createaccountvalue.next('This email are already exist');
    //   } else {
    //     Pdata.push(uservalue);
    //     const jsonData = JSON.stringify(Pdata);
    //     localStorage.setItem('Loginusers', jsonData);
    //     this.Login(uservalue);
    //   }
    // });
    this.authService.register(uservalue).subscribe((data:any)=>{
      if(data.message == "Mail sent successfully"){
        this.showSnackbar('Registration successful')
        this.Createaccountvalue.next({message:"Registration successful"})
        setTimeout(()=>{
          setTimeout(()=>{
            this.router.navigate(['/login'])
          })
        },2000)
        // this.router.navigate(["/login"]);
        // this.Createaccountvalue.next({message:"User registered successfully"})
      }
      
    },
    (errorResponse: HttpErrorResponse) => {
      if (errorResponse.status === 400) {
        this.Createaccountvalue.next(errorResponse.error)
      } else {
        this.Createaccountvalue.next(errorResponse.error)
      }
    })
  }

  /**
   * Login Functionality call from Login
   * @param uservalue from login page
   */
  public Login(uservalue: any): void {
    // let returndata={message:'',status:''}
    // let data:any = localStorage.getItem('Loginusers');
    // let Pdata: [] = JSON.parse(data);
    // const Eresult: any = Pdata.find(({ email }) => email === uservalue.email);
    // if (Eresult) {
    //   if (Eresult.password === uservalue.password) {
    //     this.Createtoken(uservalue);
    //     this.Loginvalue.next('Login success');
    //     localStorage.setItem('logintime',Date())
    //     this.router.navigate(["/dashboard/admin"]);
    //     this.Loginvalue.next(0);
    //   } else {
    //     returndata.message='Incorrect password'
    //     returndata.status='password'
    //     this.Loginvalue.next(returndata);
    //   }
    // } else {
    //   returndata.message='Email is  not valid'
    //   returndata.status='email'
    //   this.Loginvalue.next(returndata);
    // }
    
    this.authService.login(uservalue).subscribe((data:any)=>{
      this.Senttoken(data.data['tokens']['access'], data.userAccessData[0]['isAdmin'],data.id,data.data['username']);
      // localStorage.setItem('isAdmin')
      this.showSnackbar(data.message)
      this.Loginvalue.next(data);
      localStorage.setItem('logintime',Date())
      setTimeout(()=>{
        setTimeout(()=>{
          if(data.userAccessData[0]['isAdmin']){
            this.router.navigate(["/dashboard/admin"]);
          }
          else{
            this.router.navigate(["/dashboard/employee"]);
          }
          
        })
      },1000)
      
      // this.Loginvalue.next(0);
    },
    (errorResponse: HttpErrorResponse) => {
      if (errorResponse.status === 400) {
        this.showSnackbar(errorResponse.error)
        this.Loginvalue.next(errorResponse.error)
      } else {
        this.showSnackbar(errorResponse.error)
        this.Loginvalue.next(errorResponse.error)
      }
    })
  }

  /**
   * Create Token function for authendication
   * @param uservalue recived from login function
   */
  public Senttoken(token:any,checkAdmin:any,id:any,username:any) {
    // var result = 'ABCDEFGHI' + uservalue.email + 'ghijklmnopqrs' + 'z01234567';
    localStorage.setItem('isAdmin', checkAdmin)
    localStorage.setItem('LoginData', token);
    localStorage.setItem('userId',id);
    localStorage.setItem('username',username)
  }

  /**
   * Two Storage are used
   */
  public Deleteuser() {
    localStorage.removeItem('Loginusers');
    localStorage.removeItem('LoginData');
  }

  /**
   * called from Login page init statement
   */
  public Checkuser(): void {
    // let users = localStorage.getItem('Loginusers');
    // if (users === null) {
    //   let password = [
    //     {
    //       email: 'admin@dreamguys.in',
    //       password: '123456',
    //     },
    //   ];
    //   const jsonData = JSON.stringify(password);
    //   localStorage.setItem('Loginusers', jsonData);
    // }
  }

  /**
   * Forgot password function
   * @param uservalue email object recived from Forgot password
   */
  public Forgotpassword(email:any): void {
    // this.Forgotpasswordvalue.next('')
    localStorage.setItem('forgotEmail',email.email);
    this.authService.sendOtp(email).subscribe((data:any)=>{
      this.Forgotpasswordvalue.next(data)
      this.showSnackbar(data.message)
      setTimeout(()=>{
        setTimeout(()=>{
          this.router.navigate(['/otp'])
        })
      },1000)
      // this.Forgotpasswordvalue.next(0);
    },
    (errorResponse: HttpErrorResponse) => {
      if (errorResponse.status === 400) {
        this.Forgotpasswordvalue.next(errorResponse.error)
        this.showSnackbar(errorResponse.error)
      } else {
        this.Forgotpasswordvalue.next(errorResponse.error)
        this.showSnackbar(errorResponse.error)
      }
    })
    // let Rawdata:any = localStorage.getItem('Loginusers');
    // let Pdata: [] = [];
    // Pdata = JSON.parse(Rawdata);
    // const Eresult:any = Pdata.find(({ email }) => email === uservalue.email);
    // if (Eresult) {
    //   this.Forgotpasswordvalue.next(Eresult);
    // } else {
    //   this.Forgotpasswordvalue.next('Email Not Valid');
    // }
  }

  public confirmPassword(otp:any){
    // this.Confirmotpvalue.next('')
    this.fgtMail = localStorage.getItem('forgotEmail')
    const confPaswObj = {'email':this.fgtMail, 'otp':otp}
    this.authService.confirmOtp(confPaswObj).subscribe((data:any)=>{
      // localStorage.removeItem('forgotEmail')
      this.showSnackbar(data.message)
      this.Confirmotpvalue.next(data)
      setTimeout(()=>{
        setTimeout(()=>{
          this.router.navigate(['/lock-screen'])
        })
      },1000)
      // this.Confirmotpvalue.next(0);
    },(errorResponse: HttpErrorResponse) => {
      if (errorResponse.status === 400) {
        this.showSnackbar(errorResponse.error)
        this.Confirmotpvalue.next(errorResponse.error) 
      } else { 
        this.showSnackbar(errorResponse.error)
        this.Confirmotpvalue.next(errorResponse.error)
      }
    })
  }
  public resetPassword(resPaswObj:any){
    // this.resetPasswordValue.next('')
    const updatePaswObj = {...resPaswObj,['email']:this.fgtMail};
    this.authService.resetPassword(updatePaswObj).subscribe((data:any)=>{
      this.resetPasswordValue.next(data)
      this.showSnackbar(data.message)
      localStorage.removeItem('forgotEmail')
      setTimeout(()=>{
        setTimeout(()=>{
          this.router.navigate(['/login']);
        })
      },1000)
      // this.resetPasswordValue.next(0); 
    },(errorResponse: HttpErrorResponse) => {
      if (errorResponse.status === 400) {
        this.showSnackbar(errorResponse.error)
        this.resetPasswordValue.next(errorResponse.error) 
      } else { 
        this.showSnackbar(errorResponse.error)
        this.resetPasswordValue.next(errorResponse.error)
      }
    }
    )
  }


  public allEmployees(){
    this.authService.getAllEmployees().subscribe((data:any)=>{
      this.getAllEmployeesValue.next(data);
    },(errorResponse:HttpErrorResponse)=>{
      if(errorResponse.status===400){
        this.getAllEmployeesValue.next(errorResponse.error)
      }else{
        this.getAllEmployeesValue.next(errorResponse.error)
      }
    })
  }

  public addEmployee(empObj:any){
    this.authService.addEmployee(empObj).subscribe((data:any)=>{
       this.addEmployeeValue.next(data)
       if(data.data){
        this.showSnackbar("successfully employee added");
       }
    },(errorResponse:HttpErrorResponse)=>{
      if(errorResponse.status === 400){
        this.addEmployeeValue.next(errorResponse.error)
      } else{
        this.addEmployeeValue.next(errorResponse.error)
      }
        
    })
  }
 public editEmploye(empObj:any){
    this.authService.editEmployee(empObj).subscribe((data:any)=>{
        this.editEmployeeValue.next(data)
        this.showSnackbar(data.message)
    },(errorResponse:HttpErrorResponse)=>{
      if(errorResponse.status===400){
        this.editEmployeeValue.next(errorResponse.error)
      }else{
        this.editEmployeeValue.next(errorResponse.error)
      }
    })
 }
 public searchUser(searchObj:any){
    this.authService.searchUsers(searchObj).subscribe((data:any)=>{
      this.searchEmployeesValue.next(data)
      this.showSnackbar(data.status)
    },(errorResponse:HttpErrorResponse)=>{
      if(errorResponse.status===400){
        this.showSnackbar('no data passed')
        this.searchEmployeesValue.next(errorResponse.error)
      }else{
        this.showSnackbar(errorResponse.error)
        this.searchEmployeesValue.next(errorResponse.error)
      }
    })
 }
 public deleteUser(delObj:any){
  this.authService.removeUser(delObj).subscribe((data:any)=>{
    this.deleteEmployeeValue.next(data)
    this.showSnackbar(data.message)
  },(errorResponse:HttpErrorResponse)=>{
    if(errorResponse.status===400){
      this.showSnackbar(errorResponse.error)
      this.searchEmployeesValue.next(errorResponse.error)
    }else{
      this.showSnackbar(errorResponse.error)
      this.searchEmployeesValue.next(errorResponse.error)
    }
  })

 }
 public addedHoliday(holidObj:any){
    this.authService.addHoliday(holidObj).subscribe((data:any)=>{
        this.addHolidayValue.next(data);
        this.showSnackbar(data.message)
    },(errorResponse:HttpErrorResponse)=>{
      if(errorResponse.status===400){
        this.addHolidayValue.next(errorResponse.error)
      }else{
        this.addHolidayValue.next(errorResponse.error)
      }
    })
 }
 public addLeaveStorage(leaveObj:any){
     this.authService.addLeave(leaveObj).subscribe((data:any)=>{
        this.addLeaveValue.next(data);
        this.showSnackbar(data.message);
     },(errorResponse:HttpErrorResponse)=>{
      
      if(errorResponse.status===400){
        this.showSnackbar(errorResponse.error.message)
        
        this.addLeaveValue.next(errorResponse.error)
      }else{
        this.addLeaveValue.next(errorResponse.error)
      }
     })
 }
 public processLeaveStorage(processLeaveObj:any){
    this.authService.processLeave(processLeaveObj).subscribe((data:any)=>{
      this.leaveProcessValue.next(data)
      this.showSnackbar(data.message);
    },(errorResponse:HttpErrorResponse)=>{
      if(errorResponse.status===404){
        this.showSnackbar(errorResponse.error.message)
      }else{
        this.showSnackbar(errorResponse.error.message)
      }
    })
 }

 public punchInStorage(check:any){
  if(check){
    this.authService.punchIn().subscribe((data:any)=>{
      this.punchInValue.next(data)
      this.showSnackbar(data.message)
    },(errorResponse:HttpErrorResponse)=>{
      if(errorResponse.status===404 || errorResponse.status===400){
        this.showSnackbar(errorResponse.error.message)
      }else{
        this.showSnackbar(errorResponse.error.message)
      }
    })
  }else{
    this.authService.punchOut().subscribe((data:any)=>{
      this.showSnackbar(data.message)
    },(errorResponse:HttpErrorResponse)=>{
      if(errorResponse.status===404 || errorResponse.status===400){
        this.showSnackbar(errorResponse.error.message)
      }else{
        this.showSnackbar(errorResponse.error.message)
      }})
  }
 }
 
 showSnackbar(message: string, durationInSeconds: number = 3): void {
  const config = new MatSnackBarConfig();
  config.duration = durationInSeconds * 1000; // Convert seconds to milliseconds
  config.verticalPosition = 'top'; // Set vertical position to top
  config.horizontalPosition = 'end'; // Set horizontal position to right

  this.snackBar.open(message, 'Close', config);
}
}
