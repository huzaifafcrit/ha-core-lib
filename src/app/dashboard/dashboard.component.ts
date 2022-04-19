import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreLibService } from 'projects/core-lib/src/public-api';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    public _loggerService: LoggerService,
    public _coreService: CoreLibService,
    private _snackbarService: MatSnackBar
  ) {}

  JSONtoString(item: any): string {
    return JSON.stringify(item);
  }

  notify() {
    this._snackbarService.open('Copied to clipboard', 'dismiss', {
      duration: 1000,
    });
  }

  toggleHeader() {
    this._coreService.isHeaderVisible = !this._coreService.isHeaderVisible;
    if (this._coreService.isStickyHeader) {
      this._coreService.isStickyHeader = false;
    } else {
      this._coreService.isStickyHeader = true;
    }
  }
}
