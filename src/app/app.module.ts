import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibModule } from 'projects/core-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CopyClipboardDirective } from './directives/copy-clipboard';

@NgModule({
  declarations: [AppComponent, DashboardComponent, CopyClipboardDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreLibModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
