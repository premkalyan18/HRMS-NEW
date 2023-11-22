import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { DataService, routes } from 'src/app/core/core.index';
import { SideBarService } from 'src/app/core/services/side-bar/side-bar.service';

@Component({
  selector: 'app-side-menu-three',
  templateUrl: './side-menu-three.component.html',
  styleUrls: ['./side-menu-three.component.scss'],
})
export class SideMenuThreeComponent implements OnInit {
  public routes = routes;
  showSubMenusTab: boolean = false;
  base = 'dashboard';
  page = '';

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
      res.map((data: any) => {
        data.menu.map((menus: any) => {
          this.side_bar_data.push(menus);
          menus.showMyTab = false;
        });
        this.side_bar_data[0].showMyTab = true;
      });
    });

    this.sideBar.toggleSideBar.subscribe((res: any) => {
      if (res == true || res == 'true') this.showSubMenusTab = true;
      else this.showSubMenusTab = false;
    });
  }

  ngOnInit(): void {}

  public showTabs(mainTittle: any): void {
    this.side_bar_data.map((mainMenus: any) => {
      if (mainTittle.menuValue == mainMenus.menuValue) {
        mainMenus.showMyTab = true;
      } else {
        mainMenus.showMyTab = false;
      }
    });
  }
  public miniSideBarMouseHover(position: string): void {
    this.sideBar.toggleSideBar.subscribe((res: any) => {
      if (res == true || res == 'true') {
        if (position == 'over') {
          this.sideBar.expandSideBar.next(true);
          this.showSubMenusTab = false;
        } else {
          this.sideBar.expandSideBar.next(false);
          this.showSubMenusTab = true;
        }
      }
    });
  }
  public expandSubMenus(menu: any): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data.map((mainMenus: any) => {
      mainMenus.menu.map((resMenu: any) => {
        // collapse other submenus which are open
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
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
