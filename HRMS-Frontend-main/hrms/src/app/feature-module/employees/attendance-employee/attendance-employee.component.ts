import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { WebStorage } from 'src/app/core/services/storage/web.storage';
import { DatePipe } from '@angular/common';
import { BehaviorSubject, Subscription, interval } from 'rxjs';
import { AuthService } from 'src/app/core/core.index';

@Component({
  selector: 'app-attendance-employee',
  templateUrl: './attendance-employee.component.html',
  styleUrls: ['./attendance-employee.component.scss']
})
export class AttendanceEmployeeComponent implements OnInit, OnDestroy {
  
  punching = false;
  currentDate: Date = new Date();
  punchInTime:any;
  timer: number = 0;
  attendenceData:any;
  timerSubscription: Subscription | undefined;
  userId:any
  constructor(private storage:WebStorage,private datePipe: DatePipe, private authService:AuthService, private cdRef: ChangeDetectorRef) { 
     this.storage.punchInValue.subscribe((data:any)=>{
      this.punchInTime = data.punch_in_time
     })
  }
  attendanceDataSubject = new BehaviorSubject<any[]>([]);
  initialDataLoaded = false;
  ngOnInit(): void {
    this.loadTimerValueFromLocalStorage();
    this.loadPunchingStatusFromLocalStorage();

    if (this.punching) {
      this.startTimer();
    }
    this.userId = localStorage.getItem('userId')
    this.getAttendData();
  }
  punch(){
   this.punching = !this.punching;
   localStorage.setItem('punching', this.punching.toString());
   if(this.punching){
      this.startTimer();
      this.storage.punchInStorage(this.punching)
   }else{
      this.stopTimer()
      this.storage.punchInStorage(this.punching)
      this.getAttendData();
   }
  }
  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.saveTimerValueToLocalStorage();
    }
  }
  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.timer++;
      this.saveTimerValueToLocalStorage();
    });
  }
  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.saveTimerValueToLocalStorage();
    }
  }

  loadTimerValueFromLocalStorage() {
    const savedTimerValue = localStorage.getItem('timerValuee');
    if (savedTimerValue) {
      this.timer = parseInt(savedTimerValue, 10);
    }
  }

  saveTimerValueToLocalStorage() {
    localStorage.setItem('timerValuee', this.timer.toString());
  }

  loadPunchingStatusFromLocalStorage() {
    const savedPunchingStatus = localStorage.getItem('punching');
    this.punching = savedPunchingStatus === 'true';
  }
  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${this.formatDigit(hours)}:${this.formatDigit(minutes)}:${this.formatDigit(remainingSeconds)}`;
  }

  formatDigit(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }


  getFormattedDate(): string {
    const options: any = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    return this.formatDate(this.currentDate, options);
  }

  formatDate(date: Date, options: Intl.DateTimeFormatOptions): string {
    return date.toLocaleDateString('en-US', options);
  }
  getAttendData(){
    const reqBody = { id: this.userId };
    this.authService.getAttendenceData(reqBody).subscribe((data: any) => {
      // Update the BehaviorSubject with the new data
      this.attendanceDataSubject.next(data);
  
      if (!this.initialDataLoaded) {
        this.initialDataLoaded = true;
        this.cdRef.detectChanges(); // Trigger change detection for the first load
      }
    });
  }
  attendanceData$ = this.attendanceDataSubject.asObservable();

}
