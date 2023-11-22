import { Component, OnInit,HostListener, NgZone  } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})


export class ProjectsComponent implements OnInit {
  public sidebarTasks : boolean = false;
  public base: string ='';
  public page: string = '';
  constructor(private ngZone: NgZone, private router: Router) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let splitVal = event.url.split('/');
          this.base = splitVal[1];
          this.page = splitVal[2];
        if (this.page === 'tasks' ) {
          this.sidebarTasks = true;
          localStorage.setItem('sidebarTasks', 'true');
        }
        else {
          this.sidebarTasks = false;
          localStorage.setItem('sidebarTasks', 'false');
        }
      }
    });
    if(localStorage.getItem('sidebarTasks')== 'true') {
      this.sidebarTasks = true;
    }
    else {
      this.sidebarTasks = false
    }

  }
  

  ngOnInit() {
  }


}
