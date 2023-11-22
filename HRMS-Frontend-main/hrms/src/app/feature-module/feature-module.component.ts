import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../core/core.index';
import { SideBarService } from '../core/services/side-bar/side-bar.service';

@Component({
  selector: 'app-feature-module',
  templateUrl: './feature-module.component.html',
  styleUrls: ['./feature-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureModuleComponent implements OnInit {
  public authenticated: boolean = false;
  public miniSidebar: boolean = false;
  public expandMenu: boolean = false;
  public mobileSidebar: boolean = false;
  public layoutSidebarColor: string = '1';
  public layoutTopColor: string = '1';
  public layoutColor: string = '1';
  public layoutWidth: string = '1';
  public layoutPosition: string = '1';
  public layoutPositionScroll: string = '1';
  public layoutSidebarSize: string = '1';
  public layoutSidebarView: string = '1';
  public sidebarshow: boolean = false;
  public isAuthenticated: boolean = false;
  public secondSideBar: boolean = false;

  public base = '';
  public page = '';
  constructor(
    private sideBar: SideBarService,
    public router: Router,
    private data: DataService
  ) {
    this.getRoutes(this.router)

    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event)
      }
    });
    // <* condition to check weather login *>

    // <* condition to check side bar position *>
    this.sideBar.toggleSideBar.subscribe((res: any) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    // <* condition to check side bar position *>

    // <* condition to check mobile side bar position *>
    this.sideBar.toggleMobileSideBar.subscribe((res: any) => {
      if (res == 'true' || res == true) {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });
    // <* condition to check mobile side bar position *>

    this.sideBar.expandSideBar.subscribe((res: any) => {
      this.expandMenu = res;
      // <* to collapse submenu while toggling side menu*>
      if (res == false && this.miniSidebar == true) {
        this.data.sideBar.map((mainMenus: any) => {
          mainMenus.menu.map((resMenu: any) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      // <* to expand submenu while hover toggled side menu*>
      if (res == true && this.miniSidebar == true) {
        this.data.sideBar.map((mainMenus: any) => {
          mainMenus.menu.map((resMenu: any) => {
            let menuValue = sessionStorage.getItem('menuValue');
            if (menuValue && menuValue == resMenu.menuValue) {
              resMenu.showSubRoute = true;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
    });
    // <* to check layout position *>
    this.sideBar.layoutPosition.subscribe((res: any) => {
      this.layoutPosition = res;
    });
    // <* to check layout colors *>
    this.sideBar.layoutColor.subscribe((res: any) => {
      this.layoutColor = res;
    });
    // <* to check layout width *>
    this.sideBar.layoutWidth.subscribe((res: any) => {
      this.layoutWidth = res;
    });
    // <* to check layout topcolor *>
    this.sideBar.layoutTopColor.subscribe((res: any) => {
      this.layoutTopColor = res;
    });
    // <* to check layout color *>
    this.sideBar.layoutSidebarColor.subscribe((res: any) => {
      this.layoutSidebarColor = res;
    });
    // <* to check layout position *>
    this.sideBar.layoutPositionScroll.subscribe((res: any) => {
      this.layoutPositionScroll = res;
    });
    // <* to check layout width *>
    this.sideBar.layoutSidebarSize.subscribe((res: any) => {
      this.layoutSidebarSize = res;
    });
    // <* to check layout view *>
    this.sideBar.layoutSidebarView.subscribe((res: any) => {
      this.layoutSidebarView = res;
    });
    if (window.innerWidth < 991) {
      this.sideBar.layoutPosition.next('1');
    }
    this.getRoutes(this.router);
  }

  ngOnInit(): void { }

  ngAfterViewInit() { }


  ngOnDestroy(): void {
    sessionStorage.clear();
  }

  private getRoutes(event: any): void {
    let splitVal = event.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    if (localStorage.getItem('LoginData')) {
      this.sidebarshow = true;
      this.isAuthenticated = true;
    } else {
      this.sidebarshow = false;
      this.isAuthenticated = false;
    }

    if (
      this.page == 'voice-call' ||
      this.page == 'chats' ||
      this.page == 'video-call' ||
      this.page == 'outgoing-call' ||
      this.page == 'incoming-call' ||
      this.base == 'components' ||
      this.page == 'company-settings' ||
      this.page == 'email' ||
      this.page == 'tasks' || 
      this.page == 'compose'
    ) {
      this.sidebarshow = false;
    }

    if (this.page == 'chats' || this.base == 'components' || this.page == 'tasks' || this.page == 'email') {
      this.secondSideBar = true
    }else {
      this.secondSideBar = false
    }
    if (localStorage.getItem('logintime')) {
      let loginTime: any = localStorage.getItem('logintime') || Date();
      let timeDifference: any =
        Math.abs(new Date().getTime() - new Date(loginTime).getTime()) /
        10000 /
        60;
      if (timeDifference > 15) {
        localStorage.removeItem('LoginData');
        this.router.navigate(['/login']);
      }
    }
  }
}
