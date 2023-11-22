import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/core/core.index';
import { SideBarService } from 'src/app/core/services/side-bar/side-bar.service';
import { WebStorage } from 'src/app/core/services/storage/web.storage';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.scss']
})
export class HeaderThreeComponent implements OnInit {
  public base ='';
  public page ='';
  public miniSidebar: boolean = false;
  public baricon: boolean = false;
  constructor( private sideBar: SideBarService, private router : Router, private web : WebStorage) {
    this.sideBar.toggleSideBar.subscribe((res: any) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
        if (this.base === 'components' || this.page === 'tasks' || this.page === 'email') {
          this.baricon = false
          localStorage.setItem('baricon', 'false');
        }
        else {
          this.baricon = true
          localStorage.setItem('baricon', 'true');
        }
      }
    });
    if(localStorage.getItem('baricon')== 'true') {
      this.baricon = true;
    }
    else {
      this.baricon = false
    }
  }

  ngOnInit(): void {
  }
  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  public togglesMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }

  logout() {
    localStorage.removeItem("LoginData");
    this.router.navigate(["/login"]);
  }

}
