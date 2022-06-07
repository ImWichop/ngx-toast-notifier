import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INotification, ToastToken, TOAST_CONFIG } from '../interfaces/i-notification';

@Injectable({
  providedIn: 'root'
})
export class NgxToastNotifierService {
  private $notifications : BehaviorSubject<INotification[]> = new BehaviorSubject<INotification[]>([])
  public $notificationsObs = this.$notifications.asObservable()
  public defaultConfig!: ToastToken
  constructor(@Inject(TOAST_CONFIG) config: ToastToken) {
    this.defaultConfig = config;
    console.log(config);
    console.log(this.defaultConfig);
    
  }

   get notifications(): INotification[]{
     return this.$notifications.value
   }

   onShowNotification(notification: INotification): void{
     this.$notifications.next([
       ...this.notifications,
       {
         ...notification
       }
     ])
   }

   onRemove(idx: number): void{
      this.notifications.splice(idx,1)
      this.$notifications.next(this.notifications)
   }
}
