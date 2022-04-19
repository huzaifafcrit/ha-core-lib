import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { animateText, onSideNavChange } from '../animations/animations';
import { CoreLibService } from '../core-lib.service';

@Component({
  selector: 'ha-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent {

  @Input() isSmallScreen: boolean = false;
  @Input() sidenav?: MatSidenav;

  sideNavState: boolean = false;
  linkText: boolean = false;

  constructor(public _coreService: CoreLibService) { }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._coreService.sideNavState$.next(this.sideNavState)
  }

  minimise() { this.isSmallScreen ? this.sidenav?.toggle() : this.onSinenavToggle(); }
  closeNavbar() { this.sidenav?.close(); }

}
