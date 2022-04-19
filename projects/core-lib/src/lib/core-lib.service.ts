import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Brand } from './models/Brand';
import { LoggedInUser } from './models/LoggedInUser';
import { NotificationUnit } from './models/NotificationUnit';
import { Workspaces } from './models/Workspaces';

@Injectable({
  providedIn: 'root',
})
export class CoreLibService {
  private _availableWorkspaces = new BehaviorSubject([] as Workspaces[]);
  private _displayNotifications = new BehaviorSubject(true);
  private _loggedInEmployee: BehaviorSubject<LoggedInUser> =
    new BehaviorSubject(new LoggedInUser('', '', '', false, false, false));
  private _isStickyHeader = new BehaviorSubject(true);
  private _notifications = new BehaviorSubject([] as NotificationUnit[]);
  private _isHeaderVisible = new BehaviorSubject(true);
  private _isSideMenuVisible = new BehaviorSubject(true);
  private _brand = new BehaviorSubject<Brand>(new Brand());

  sideNavState$: Subject<boolean> = new Subject();

  get loggedInUser$() {
    return this._loggedInEmployee.asObservable();
  }
  get loggedInUser() {
    return this._loggedInEmployee.getValue();
  }
  set loggedInUser(loggedInUser: LoggedInUser) {
    this._loggedInEmployee.next(loggedInUser);
  }

  get isStickyHeader$() {
    return this._isStickyHeader.asObservable();
  }
  get isStickyHeader() {
    return this._isStickyHeader.getValue();
  }
  set isStickyHeader(isStickyHeader: boolean) {
    this._isStickyHeader.next(isStickyHeader);
  }

  get availableWorkspaces$() {
    return this._availableWorkspaces.asObservable();
  }
  get availableWorkspaces() {
    return this._availableWorkspaces.getValue();
  }
  set availableWorkspaces(availableWorkspaces: Workspaces[]) {
    if (availableWorkspaces.length > 0) {
      this._availableWorkspaces.next(availableWorkspaces);
    } else {
      console.warn('availableWorkspaces cannot be null or empty');
    }
  }

  get displayNotifications$() {
    return this._displayNotifications.asObservable();
  }
  get displayNotifications() {
    return this._displayNotifications.getValue();
  }
  set displayNotifications(displayNotifications: boolean) {
    this._displayNotifications.next(displayNotifications);
  }

  get isHeaderVisible$() {
    return this._isHeaderVisible.asObservable();
  }
  get isHeaderVisible() {
    return this._isHeaderVisible.getValue();
  }
  set isHeaderVisible(isHeaderVisible: boolean) {
    this._isHeaderVisible.next(isHeaderVisible);
  }

  get isSideMenuVisible$() {
    return this._isSideMenuVisible.asObservable();
  }
  get isSideMenuVisible() {
    return this._isSideMenuVisible.getValue();
  }
  set isSideMenuVisible(isSideMenuVisible: boolean) {
    this._isSideMenuVisible.next(isSideMenuVisible);
  }

  get notifications$() {
    return this._notifications.asObservable();
  }
  get notifications() {
    return this._notifications.getValue();
  }
  set notifications(notifications: NotificationUnit[]) {
    this._notifications.next(notifications);
  }

  get brand$() { return this._brand.asObservable(); }
  get brand() { return this._brand.getValue(); }
  set brand(brand: Brand) { this._brand.next(brand); }
}
