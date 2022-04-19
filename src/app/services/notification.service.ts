import { Injectable } from '@angular/core';
import { NotificationIcon, NotificationUnit } from 'projects/core-lib/src/lib/models/NotificationUnit';
import { CoreLibService } from 'projects/core-lib/src/public-api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationsMock: NotificationUnit[] = [
    {
      id: '1',
      text: 'Query raised',
      isRead: false,
      order: 1,
      isIcon: true,
      icon: new NotificationIcon('assignment_late', 'purple'),
      isImg: false,
    },
    {
      id: '2',
      text: '3 Item Pending Review',
      isRead: false,
      order: 2,
      isIcon: true,
      icon: new NotificationIcon('grading', 'orangered'),
      isImg: false,
    },
    {
      id: '3',
      text: 'Item Resolved',
      isRead: false,
      order: 3,
      isIcon: true,
      icon: new NotificationIcon('check_circle', '#00915d'),
      isImg: false,
    },
    {
      id: '3',
      text: 'Huzaifa, Mohammed sent a message',
      isRead: false,
      order: 4,
      isIcon: false,
      isImg: true,
      imgUrl: 'assets/imgs/profile1.jpg'
    }
  ];

  private _notifications = new BehaviorSubject(this.notificationsMock);
  get notifactions() { return this._notifications.getValue(); }

  constructor(private _coreService: CoreLibService) {
    _coreService.notifications = this.notifactions;
  }

  markAsRead(item: NotificationUnit) {
    const notification = this.notificationsMock.find(n => n.id === item.id);
    if (notification) {
      notification.isRead = true;
    }
  }
}
