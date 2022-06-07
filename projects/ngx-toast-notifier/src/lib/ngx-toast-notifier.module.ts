import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DefaultGlobalConfig, GlobalConfiguration, TOAST_CONFIG } from './interfaces/i-notification';
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
          provide: TOAST_CONFIG,
          useValue: {
            default: DefaultGlobalConfig,
            config
          }
        }
      ]
    }
  }
}
