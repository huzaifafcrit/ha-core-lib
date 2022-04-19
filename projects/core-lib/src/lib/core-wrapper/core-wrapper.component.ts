import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CoreActionEnum } from '../enums/CoreAction.enum';
import { CoreLibService } from '../core-lib.service';
import { onMainContentChange } from '../animations/animations';
import { NotificationUnit } from '../models/NotificationUnit';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 770;

@Component({
  selector: 'ha-core-wrapper',
  templateUrl: './core-wrapper.component.html',
  styleUrls: ['./core-wrapper.component.css'],
  animations: [onMainContentChange]
})
export class CoreWrapperComponent implements AfterViewInit {

  @ViewChild('leftSidenav', { static: false }) leftSidenav?: MatSidenav;

  @Output() ActionEvent = new EventEmitter<string>();
  @Output() notificationClickedEvent = new EventEmitter<NotificationUnit>();

  onSideNavChange: boolean = false;
  isSmallScreen: boolean = false;
  viewInitialized = false;

  constructor(public _coreService: CoreLibService, private _breakPointObserver: BreakpointObserver) {
    this._coreService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    });

    this._breakPointObserver.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
      });
  }

  ngAfterViewInit(): void {
      setTimeout(() => {
        this.viewInitialized = true;
      }, 1);
  }

  headerEvent(event: string) {
    this.ActionEvent.emit(event);
  }

  notification(item: NotificationUnit) {
    this.notificationClickedEvent.emit(item);
  }

}
