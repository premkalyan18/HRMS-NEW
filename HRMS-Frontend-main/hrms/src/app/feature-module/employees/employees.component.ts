import { Component, OnInit,HostListener, NgZone } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})


export class EmployeesComponent implements OnInit {
  

  constructor(private ngZone: NgZone) {
  }

  ngOnInit() {
  }



}
