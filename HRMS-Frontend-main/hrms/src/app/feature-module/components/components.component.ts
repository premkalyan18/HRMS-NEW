import { Component, OnInit,HostListener, NgZone,AfterViewInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
@HostListener('window: resize', ['$event'])
export class ComponentsComponent implements OnInit,AfterViewInit {

  public innerHeight: any;


  constructor(private myElement: ElementRef) {

  }
  @ViewChild("comp_alerts") alertsElement: ElementRef | any;
  @ViewChild("comp_breadcrumbs") breadElement: ElementRef | any;
  @ViewChild("comp_buttons") buttonElement: ElementRef | any;
  @ViewChild("comp_cards") cardElement: ElementRef | any;

  public currentActive = 0;


  ngOnInit() {
  }
  ngAfterViewInit() {}

  checkOffsetTop() {
    if (window.pageYOffset >= 10 && window.pageYOffset <= 600) {
      this.currentActive = 1;
    } else if (window.pageYOffset >= 650 && window.pageYOffset <= 1000) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= 1100 && window.pageYOffset <= 1700) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= 1800 && window.pageYOffset <= 2800) {
      this.currentActive = 4;
    } else if (window.pageYOffset >= 2987 && window.pageYOffset <= 3100) {
      this.currentActive = 5;
    } else if (window.pageYOffset >= 3327 && window.pageYOffset <= 3600) {
      this.currentActive = 6;
    } else if (window.pageYOffset >= 3793 && window.pageYOffset <= 4700) {
      this.currentActive = 7;
    } else if (window.pageYOffset >= 4856 && window.pageYOffset <= 5600) {
      this.currentActive = 8;
    } else if (window.pageYOffset >= 6000) {
      this.currentActive = 9;
    } else {
      this.currentActive = 0;
    }
  }
  breadScroll() {
    this.myElement.nativeElement.ownerDocument
      .getElementById("comp_breadcrumbs")
      .scrollIntoView({ behavior: "smooth" });
  }
  alertScroll() {
    this.myElement.nativeElement.ownerDocument
      .getElementById("comp_alerts")
      .scrollIntoView({ behavior: "smooth" });
  }
  buttonScroll() {
    this.myElement.nativeElement.ownerDocument
      .getElementById("comp_buttons")
      .scrollIntoView({ behavior: "smooth" });
  }
  buttonCards() {
    this.myElement.nativeElement.ownerDocument
      .getElementById("comp_cards")
      .scrollIntoView({ behavior: "smooth" });
  }
  buttonDropdown() {
    this.myElement.nativeElement.ownerDocument
      .getElementById("comp_dropdowns")
      .scrollIntoView({ behavior: "smooth" });
  }
  buttonPagination() {
    this.myElement.nativeElement.ownerDocument
      .getElementById("comp_pagination")
      .scrollIntoView({ behavior: "smooth" });
  }
  buttonProgress() {
    this.myElement.nativeElement.ownerDocument
      .getElementById("comp_progress")
      .scrollIntoView({ behavior: "smooth" });
  }
  buttonTabs() {
    this.myElement.nativeElement.ownerDocument
      .getElementById("comp_tabs")
      .scrollIntoView({ behavior: "smooth" });
  }
  buttonTypography() {
    this.myElement.nativeElement.ownerDocument
      .getElementById("comp_typography")
      .scrollIntoView({ behavior: "smooth" });
  }

}
