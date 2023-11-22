import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SideBarService } from 'src/app/core/core.index';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
 
export class AppsComponent implements OnInit {

  public sidebarchat : boolean = false;
  public sidebarcall : boolean = false;
  public sidebarEmail : boolean = false;
  public base: string ='';
  public page: string = '';


  constructor(private router: Router, private sideBar: SideBarService) {

    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let splitVal = event.url.split('/');
          this.base = splitVal[1];
          this.page = splitVal[2];
        if (this.page == 'chats' || this.page == 'voice-call' || this.page == 'video-call' || this.page == 'incoming-call' || this.page == 'outgoing-call' ) {
          this.sidebarchat = true;
          localStorage.setItem('sidebarchat', 'true');
        }
        else {
          this.sidebarchat = false;
          localStorage.setItem('sidebarchat', 'false');
        }
        if (this.page == 'email'|| this.page == 'compose') {
          this.sidebarEmail = true;
          localStorage.setItem('sidebarEmail', 'true');
        }
        else {
          this.sidebarEmail = false;
          localStorage.setItem('sidebarEmail', 'false');
        }

      }
    });
    if(localStorage.getItem('sidebarchat') == 'true') {
      this.sidebarchat = true;
    }
    else {
      this.sidebarchat = false
    }
    if(localStorage.getItem('sidebarEmail') == 'true') {
      this.sidebarEmail = true;
    }
    else {
      this.sidebarEmail = false
    }

  }

  ngOnInit() {
  }

}
