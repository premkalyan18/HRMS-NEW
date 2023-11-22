import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { DataService, routes } from 'src/app/core/core.index';
import { SideBarService } from 'src/app/core/services/side-bar/side-bar.service';

@Component({
  selector: 'app-side-menu-one',
  templateUrl: './side-menu-one.component.html',
  styleUrls: ['./side-menu-one.component.scss'],
})
export class SideMenuOneComponent implements OnInit {
  public routes = routes;

  base = 'dashboard';
  page = '';
  isAdmin:any;
  side_bar_data: Array<any> = [];
  constructor(
    public router: Router,
    private data: DataService,
    private sideBar: SideBarService
  ) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
      }
    });
    this.isAdmin = localStorage.getItem('isAdmin')
    // get sidebar data as observable because data is controlled for design to expand submenus
    if(this.isAdmin == "true"){
      this.data.getSideBarData.subscribe((res: any) => {
        this.side_bar_data = res;
      }); 
    }
    else{
      this.data.getSideBarData2.subscribe((res: any) => {
        this.side_bar_data = res;
      }); 

    }
   
  }

  ngOnInit(): void {
    
  }
  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next(true);
    } else {
      this.sideBar.expandSideBar.next(false);
    }
  }
  public expandSubMenus(menu: any): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data.map((mainMenus: any) => {
      mainMenus.menu.map((resMenu: any) => {
        // collapse other submenus which are open
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
          if (menu.showSubRoute == false) {
            sessionStorage.removeItem('menuValue');
          }
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.data.resetData();
    this.data.resetData2();
  }
}
