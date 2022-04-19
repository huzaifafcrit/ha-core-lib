import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CoreLibService } from '../core-lib.service';
import { CoreActionEnum } from '../enums/CoreAction.enum';
import { NotificationIcon, NotificationUnit } from '../models/NotificationUnit';

@Component({
  selector: 'ha-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() sidenav?: MatSidenav;
  @Input() isSmallScreen: boolean = false;
  @Output() headerEvent = new EventEmitter<string>();
  @Output() notificationClickEvent = new EventEmitter<NotificationUnit>();

  CoreActionEnum = CoreActionEnum;

  get unreadCount(): number {
    return this._coreService.notifications.filter((n) => n.isRead === false)
      .length;
  }

  constructor(public _coreService: CoreLibService) {}

  onClick(action: CoreActionEnum) {
    this.headerEvent.emit(CoreActionEnum[action]);
  }

  notificationClicked(notification: NotificationUnit) {
    this.notificationClickEvent.emit(notification);
  }

  trackByMethod(index: number, el: any): number {
    return el.id;
  }
}
