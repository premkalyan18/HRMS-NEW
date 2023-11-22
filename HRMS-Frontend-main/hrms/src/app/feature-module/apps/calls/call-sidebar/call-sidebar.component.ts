import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-call-sidebar',
  templateUrl: './call-sidebar.component.html',
  styleUrls: ['./call-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CallSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
