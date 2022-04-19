import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { CoreWrapperComponent } from './core-wrapper/core-wrapper.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  declarations: [
    LeftMenuComponent,
    HeaderComponent,
    CoreWrapperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports: [CoreWrapperComponent],
})
export class CoreLibModule {}
