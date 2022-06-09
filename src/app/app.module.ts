import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotificationsContainerComponent } from './notifications-container/notifications-container.component';
import { NotificationComponent } from './notification/notification.component';
import { NgxToastNotifierModule } from 'ngx-toast-notifier';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsContainerComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxToastNotifierModule.forRoot({
      timeOut: 3000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
