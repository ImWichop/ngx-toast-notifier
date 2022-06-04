import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INotification } from './interfaces/notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private $notifications : BehaviorSubject<INotification[]> = new BehaviorSubject<INotification[]>([])
  public $notificationsObs = this.$notifications.asObservable()
  constructor() {
    
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
