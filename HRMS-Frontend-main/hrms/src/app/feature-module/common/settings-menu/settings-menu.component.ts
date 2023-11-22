import { Component, OnInit } from '@angular/core';
import { routes, SideBarService } from 'src/app/core/core.index';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss'],
})
export class SettingsMenuComponent implements OnInit {
  public showSettings: boolean = false;
  public layoutPosition: string = '1';
  public layoutColor: string = '1';
  public layoutWidth: string = '1';
  public layoutTopColor: string = '1';
  public layoutSidebarColor: string = '1';
  public layoutPositionScroll: string = '1';
  public layoutSidebarSize: string = '1';
  public layoutSidebarView: string = '1';
  constructor(public sideBar: SideBarService) {
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
    // <* to check layout sidebar color *>
    this.sideBar.layoutSidebarColor.subscribe((res: any) => {
      this.layoutSidebarColor = res;
    });
    // <* to check layout topcolor *>
    this.sideBar.layoutTopColor.subscribe((res: any) => {
      this.layoutTopColor = res;
    });
     // <* to check layout positionscroll *>
     this.sideBar.layoutPositionScroll.subscribe((res: any) => {
      this.layoutPositionScroll = res;
    });
     // <* to check layout sidebarsize *>
     this.sideBar.layoutSidebarSize.subscribe((res: any) => {
      this.layoutSidebarSize = res;
    });
     // <* to check layout sidebarview *>
     this.sideBar.layoutSidebarView.subscribe((res: any) => {
      this.layoutSidebarView = res;
    });
  }

  showSetting() {
    this.showSettings = false;
    this.sideBar.changeLayout('1'),
    this.sideBar.changeColors('1'),
    this.sideBar.changeWidth('1');
    this.sideBar.changeTopcolor('1'), 
    this.sideBar.changeSidebarColor('1'),
    this.sideBar.changepositionscroll('1'),
    this.sideBar.changeSidebarSize('1'),
    this.sideBar.changeSidebarView('1');
  }

  boxedLayout(): void {
    this.sideBar.changeWidth('2');
  }

  ngOnInit(): void {}
}
