import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/sharedIndex';
import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { SideMenuOneComponent } from './common/side_menus/side-menu-one/side-menu-one.component';
import { SideMenuTwoComponent } from './common/side_menus/side-menu-two/side-menu-two.component';
import { HeaderOneComponent } from './common/headers/header-one/header-one.component';
import { SideMenuThreeComponent } from './common/side_menus/side-menu-three/side-menu-three.component';
import { SettingsMenuComponent } from './common/settings-menu/settings-menu.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HeaderTwoComponent } from './common/headers/header-two/header-two.component';
import { HeaderThreeComponent } from './common/headers/header-three/header-three.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    FeatureModuleComponent,
    SideMenuOneComponent,
    SideMenuTwoComponent,
    HeaderOneComponent,
    SideMenuThreeComponent,
    SettingsMenuComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    SharedModule,
    PerfectScrollbarModule,
    MatFormFieldModule,
    MatSnackBarModule
    
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class FeatureModuleModule {}
