import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/core.index';
import { SideBarService } from 'src/app/core/services/side-bar/side-bar.service';
import { WebStorage } from 'src/app/core/services/storage/web.storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent implements OnInit {
  public miniSidebar: boolean = false;
  constructor(private auth: AuthService, private sideBar: SideBarService, private web: WebStorage, private router: Router) { 
    this.sideBar.toggleSideBar.subscribe((res: any) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
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
