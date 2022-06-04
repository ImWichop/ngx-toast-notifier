import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INotification } from './interfaces/notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private $notifications : BehaviorSubject<INotification[]> = new BehaviorSubject<INotification[]>([]);
  public $notificationsObs = this.$notifications.asObservable();
  constructor() {
    
   }

   get notifications(): INotification[]{
     return this.$notifications.value
   }

   onShowNotification(notification: INotification): void{
     const id = Date.now()
     this.$notifications.next([
       ...this.notifications,
       {
         ...notification,
         id
       }
     ])
   }

   onRemove(id: number | undefined):void{
     const currentNotifications = this.notifications.filter((x: INotification) => x.id !== id)
     this.$notifications.next(currentNotifications)
   }
}
