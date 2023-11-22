import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  username:any;
  currentDate: Date = new Date();
  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('username')
  }
  getFormattedDate(): string {
    const options: any = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    return this.formatDate(this.currentDate, options);
  }

  formatDate(date: Date, options: Intl.DateTimeFormatOptions): string {
    return date.toLocaleDateString('en-US', options);
  }
}
