import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { DataService, routes } from 'src/app/core/core.index';
import { SideBarService } from 'src/app/core/services/side-bar/side-bar.service';

@Component({
  selector: 'app-side-menu-two',
  templateUrl: './side-menu-two.component.html',
  styleUrls: ['./side-menu-two.component.scss'],
})
export class SideMenuTwoComponent implements OnInit {
  public routes = routes;
  showMoreMenu: boolean = false;
  base = 'dashboard';
  page = '';
  public hiddenMoreMenu: boolean = false;
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
    // get sidebar data as observable because data is controlled for design to expand submenus
    this.data.getSideBarData.subscribe((res: any) => {
      this.side_bar_data = res;
    });


  }

  ngOnInit(): void {}
  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next(true);
    } else {
      this.sideBar.expandSideBar.next(false);
    }
  }
  public expandSubMenus(menu: any): void {
    if (
      menu.menuValue == 'Dashboard' ||
      menu.menuValue == 'Apps' ||
      menu.menuValue == 'Employees' ||
      menu.menuValue == 'Projects' ||
      menu.menuValue == 'Sales'
    ) {
      this.showMoreMenu = false;
    }

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

  public openMoreMenus(): void {
    this.showMoreMenu = !this.showMoreMenu;
    this.side_bar_data.map((mainMenus: any) => {
      mainMenus.menu.map((resMenu: any) => {
        // collapse other submenus which are open
        let menuValue: any = sessionStorage.getItem('menuValue');
        if (
          menuValue &&
          menuValue == resMenu.menuValue &&
          (menuValue != 'Dashboard' ||
            menuValue != 'Apps' ||
            menuValue != 'Employees' ||
            menuValue != 'Projects' ||
            menuValue != 'Sales')
        ) {
          resMenu.showSubRoute = !resMenu.showSubRoute;
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
