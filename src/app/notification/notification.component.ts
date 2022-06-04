import { Component, Input, OnInit } from '@angular/core';
import { INotification } from '../interfaces/notifications';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() notificationData!: INotification
  constructor(private notiSvc: NotificationService) { }

  ngOnInit(): void {
  }

  onRemove():void{
    this.notiSvc.onRemove(this.notificationData.id)
  }

}
