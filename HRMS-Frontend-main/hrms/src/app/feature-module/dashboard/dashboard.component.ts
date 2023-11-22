import { Component, OnInit, HostListener, NgZone } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
@HostListener("window: resize", ["$event"])
export class DashboardComponent implements OnInit {
  public innerHeight: any;

  getScreenHeight() {
    this.innerHeight = window.innerHeight + "px";
  }

  constructor(private ngZone: NgZone, private router: Router) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + "px";
      });
    };
    this.getScreenHeight();
  }

  ngOnInit() {
    const checkUser = localStorage.getItem('isAdmin');
    if(checkUser=='true'){
      this.router.navigateByUrl("/dashboard/admin");
    }else{
      this.router.navigateByUrl("/dashboard/employee");
    }
   
  }

  onResize(event: any) {
    this.innerHeight = event.target.innerHeight + "px";
  }
}
