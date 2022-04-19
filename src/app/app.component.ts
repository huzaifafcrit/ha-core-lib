import { Component } from '@angular/core';
import { Brand } from 'projects/core-lib/src/lib/models/Brand';
import { LoggedInUser } from 'projects/core-lib/src/lib/models/LoggedInUser';
import { NotificationUnit } from 'projects/core-lib/src/lib/models/NotificationUnit';
import { Workspaces } from 'projects/core-lib/src/lib/models/Workspaces';
import { CoreLibService } from 'projects/core-lib/src/public-api';
import { LoggerService } from './services/logger.service';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HA-Core-Lib';

  availableWorkspaces: Workspaces[] = [
    {
      name: 'Home',
      link: 'home',
      icon: 'home',
      active: true,
      hasViewPermission: true,
    },
    {
      name: 'Dashboard',
      link: 'dashboard',
      icon: 'dashboard',
      active: true,
      hasViewPermission: true,
    },
    {
      name: 'Conversations',
      link: 'conversations',
      icon: 'question_answer',
      active: true,
      hasViewPermission: true,
    },
  ];

  constructor(_coreService: CoreLibService, private _loggerService: LoggerService, private _notificationService: NotificationService) {
    const brand =new Brand();
    brand.logoIsIcon = true;
    brand.brandIcon = 'polymer';
    brand.class = 'logo';
    // brand.logoIsImage = true;
    // brand.brandLogoImage = 'assets/imgs/profile1.jpg';
    brand.title = this.title;
    _coreService.brand = brand;
    _coreService.availableWorkspaces = this.availableWorkspaces;
    const loggedInUser = new LoggedInUser(
      'Huzaifa, Mohammed',
      'huzaifafcrit@gmail.com',
      'assets/imgs/profile1.jpg',
      true,
      true,
      true
    );
    _coreService.loggedInUser = loggedInUser;
  }

  actionPerformed(event: any) {
    this._loggerService.actions.push(event);
  }

  notificationClicked(item: NotificationUnit) {
    this._notificationService.markAsRead(item);
  }
}
