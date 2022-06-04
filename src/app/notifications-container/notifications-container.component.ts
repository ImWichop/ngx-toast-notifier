import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INotification } from '../interfaces/notifications';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.scss'],
  animations: [
    trigger('onEnterLeave', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate(500, style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate(500, style({ opacity: '0' })),
      ])
    ]),
  ]
})
export class NotificationsContainerComponent implements OnInit {
  notis!: Observable<INotification[]>
  constructor(private notificationSvc: NotificationService) { }

  ngOnInit(): void {
    this.notis = this.notificationSvc.$notificationsObs
  }

}
