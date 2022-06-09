import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  INotification,
  NotificationToken,
  NOTIFICATION_CONFIG,
} from '../interfaces/i-notification';

@Injectable({
  providedIn: 'root',
})
export class NgxToastNotifierService {
  private $notifications: BehaviorSubject<INotification[]> =
    new BehaviorSubject<INotification[]>([]);
  public $notificationsObs = this.$notifications.asObservable();
  public defaultConfig!: NotificationToken;
  constructor(@Inject(NOTIFICATION_CONFIG) config: NotificationToken) {
    this.defaultConfig = config;
  }

  get notifications(): INotification[] {
    return this.$notifications.value;
  }

  onSuccess(title: string, text: string): void {
    const notification: INotification = {
      text,
      title,
      icon: 'success',
      bgColor: this.defaultConfig.config.bgColors?.success
        ? this.defaultConfig.config.bgColors.success
        : this.defaultConfig.default.bgColors.success,
    };
    this.onShowNotification(notification);
  }

  onInfo(title: string, text: string): void {
    const notification: INotification = {
      text,
      title,
      icon: 'info',
      bgColor: this.defaultConfig.config.bgColors?.info
        ? this.defaultConfig.config.bgColors.info
        : this.defaultConfig.default.bgColors.info,
    };
    this.onShowNotification(notification);
  }

  onWarning(title: string, text: string): void {
    const notification: INotification = {
      text,
      title,
      icon: 'warning',
      bgColor: this.defaultConfig.config.bgColors?.warning
        ? this.defaultConfig.config.bgColors.warning
        : this.defaultConfig.default.bgColors.warning,
    };
    this.onShowNotification(notification);
  }

  onDanger(title: string, text: string): void {
    const notification: INotification = {
      text,
      title,
      icon: 'danger',
      bgColor: this.defaultConfig.config.bgColors?.danger
        ? this.defaultConfig.config.bgColors.danger
        : this.defaultConfig.default.bgColors.danger,
    };
    this.onShowNotification(notification);
  }

  private onRemove(): void {
    this.notifications.shift()
    this.$notifications.next(this.notifications);
  }

  private onShowNotification(notification: INotification): void {
    this.$notifications.next([
      ...this.notifications,
      {
        ...notification,
      },
    ]);

    setTimeout(() => {
      this.onRemove()
    }, this.defaultConfig.config.timeOut ? this.defaultConfig.config.timeOut : this.defaultConfig.default.timeOut);
  }
}
