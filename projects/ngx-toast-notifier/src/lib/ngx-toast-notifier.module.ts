import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DefaultGlobalConfig, GlobalConfiguration, NOTIFICATION_CONFIG } from './interfaces/i-notification';
import { NgxToastNotifierComponent } from './components/ngx-toast-notifier.component';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [
    NgxToastNotifierComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxToastNotifierComponent
  ]
})
export class NgxToastNotifierModule {
  static forRoot(config : Partial<GlobalConfiguration> = {}): ModuleWithProviders<NgxToastNotifierModule>{
    return {
      ngModule: NgxToastNotifierModule,
      providers: [
        {
          provide: NOTIFICATION_CONFIG,
          useValue: {
            default: DefaultGlobalConfig,
            config
          }
        }
      ]
    }
  }
}
