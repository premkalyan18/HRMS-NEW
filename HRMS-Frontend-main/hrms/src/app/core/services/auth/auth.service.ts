import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/url';

@Injectable({
  providedIn: 'root',
})



export class AuthService implements CanActivate {
  
  token = localStorage.getItem('LoginData')
  httpHeaders = new HttpHeaders({
    'Accept':'application/json, */*, text/html',
    'Authorization': `Bearer ${this.token}`
  })
  dataToPass: any;
  constructor(public router: Router, private http:HttpClient) {
  }
  requestOptions={headers:this.httpHeaders}
  register(regObj:any){
    return this.http.post(apiUrl+'register/',regObj);
  }
  login(logObj:any){
    return this.http.post(apiUrl+'login/',logObj);
  }
  sendOtp(email:any){
    return this.http.post(apiUrl+'send-otp/',email);
  }
  confirmOtp(verifyObj:any){
    return this.http.post(apiUrl+'confirm-otp/',verifyObj)
  }
  resetPassword(obj:any){
    return this.http.post(apiUrl+'reset-password/',obj)
  }
  canActivate(): boolean {
    if (!localStorage.getItem('LoginData')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  getToken(){
    const t = localStorage.getItem('LoginData')
    const headers = new HttpHeaders({
      'Accept': 'application/json, */*, text/html',
      'Authorization': `Bearer ${t}`
    });

    // Include the headers in the request options
    const requestOptions = { headers };
    return requestOptions
  }
  getAllEmployees(){
    let auth = this.getToken();
    return this.http.get(apiUrl+'get_all_employees/', auth)
  }
  addEmployee(empObj:any){
    let auth = this.getToken();
    return this.http.post(apiUrl+'add-employee/', empObj, auth)
  }
  editEmployee(empObj:any){
    let auth = this.getToken();
    return this.http.put(apiUrl+'update_user/',empObj, auth)
  }
  searchUsers(obj:any){
    let auth = this.getToken();
    return this.http.post(apiUrl+'users/',obj,auth)
  }
  removeUser(obj:any){
   let auth = this.getToken();
   return this.http.post(apiUrl+'deactivate_user/',obj,auth)
  }
  addHoliday(holidObj:any){
    let auth = this.getToken();
    return this.http.post(apiUrl+'add_holiday/', holidObj, auth)
  }
  getAllHolidays(){
    let auth = this.getToken();
    return this.http.get(apiUrl+"get_holidays/", auth)
  }
  addLeave(leaveObj:any){
    let auth = this.getToken();
    return this.http.post(apiUrl+"add_leave/", leaveObj, auth)
  }
  getEmployeesLeaves(){
    let auth = this.getToken();
    return this.http.get(apiUrl+"get_employee_leave_data/",auth)
  }
  getLeaveHistory(){
    let auth = this.getToken();
    return this.http.get(apiUrl+'leave_history/',auth)
  }
  getAllRepMang(){
    let auth = this.getToken();
    return this.http.get(apiUrl+'get_all_ReportingManagers/',auth)
  }
  processLeave(processLeavObj:any){
    let auth = this.getToken();
    return this.http.post(apiUrl+"process_leave/", processLeavObj, auth)
  }
  punchIn(){
    let auth = this.getToken();
    return this.http.post(apiUrl+'punch-in/',{},auth)
  }
  punchOut(){
    let auth = this.getToken();
    return this.http.post(apiUrl+'punch-out/',{},auth)
  }
  getAttendenceData(body:any){
    let auth = this.getToken();
    return this.http.post(apiUrl+'get_attendance_data/',body,auth)
  }
  getCurrentLeaves(){
    let auth = this.getToken();
    return this.http.get(apiUrl+'currentLeaves/',auth)
  }
}
