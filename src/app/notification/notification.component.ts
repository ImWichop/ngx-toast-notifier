import { Component, Input } from '@angular/core';
import { INotification } from '../interfaces/notifications';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent  {
  @Input() notificationData!: INotification
  @Input() idx!: number
  constructor(private notificationSvc: NotificationService) { }

  onRemove():void{
    this.notificationSvc.onRemove(this.idx)
  }

}
