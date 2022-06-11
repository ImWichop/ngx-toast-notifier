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

  onShowNotification(notification: INotification): void {
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

  private onRemove(): void {
    this.notifications.shift()
    this.$notifications.next(this.notifications);
  }

}
