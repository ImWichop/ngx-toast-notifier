import { Injectable } from '@angular/core';
import { INotification } from '../interfaces/i-notification';
import { NgxToastNotifierService } from './ngx-toast-notifier.service';

@Injectable({
  providedIn: 'root'
})
export class NgxToastService {

  constructor(private ngxToastService: NgxToastNotifierService) { }


  onSuccess(title: string, text: string): void {
    const notification: INotification = {
      text,
      title,
      icon: 'success',
      bgColor: this.ngxToastService.defaultConfig.config.bgColors?.success
        ? this.ngxToastService.defaultConfig.config.bgColors.success
        : this.ngxToastService.defaultConfig.default.bgColors.success,
    };
    this.ngxToastService.onShowNotification(notification);
  }

  onInfo(title: string, text: string): void {
    const notification: INotification = {
      text,
      title,
      icon: 'info',
      bgColor: this.ngxToastService.defaultConfig.config.bgColors?.info
        ? this.ngxToastService.defaultConfig.config.bgColors.info
        : this.ngxToastService.defaultConfig.default.bgColors.info,
    };
    this.ngxToastService.onShowNotification(notification);
  }

  onWarning(title: string, text: string): void {
    const notification: INotification = {
      text,
      title,
      icon: 'warning',
      bgColor: this.ngxToastService.defaultConfig.config.bgColors?.warning
        ? this.ngxToastService.defaultConfig.config.bgColors.warning
        : this.ngxToastService.defaultConfig.default.bgColors.warning,
    };
    this.ngxToastService.onShowNotification(notification);
  }

  onDanger(title: string, text: string): void {
    const notification: INotification = {
      text,
      title,
      icon: 'danger',
      bgColor: this.ngxToastService.defaultConfig.config.bgColors?.danger
        ? this.ngxToastService.defaultConfig.config.bgColors.danger
        : this.ngxToastService.defaultConfig.default.bgColors.danger,
    };
    this.ngxToastService.onShowNotification(notification);
  }
}
