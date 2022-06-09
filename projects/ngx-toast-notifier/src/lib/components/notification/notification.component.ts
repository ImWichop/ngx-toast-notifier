import { Component, Input } from '@angular/core';
import { INotification } from '../../interfaces/i-notification';
import { NgxToastNotifierService } from '../../services/ngx-toast-notifier.service';

@Component({
  selector: 'ngx-notification',
  template: `
    <div
      class="wrap-notification"
      [ngStyle]="{'background-color' : notificationData.bgColor}"
    >
      <div class="icon-start">
        <svg viewBox="0 0 24 24" *ngIf="notificationData.icon === 'success'">
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
          />
        </svg>
        <svg viewBox="0 0 24 24" *ngIf="notificationData.icon === 'info'">
          <path
            fill="currentColor"
            d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
          />
        </svg>
        <svg viewBox="0 0 24 24" *ngIf="notificationData.icon === 'warning'">
          <path
            fill="currentColor"
            d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"
          />
        </svg>

        <svg viewBox="0 0 24 24" *ngIf="notificationData.icon === 'danger'">
          <path
            fill="currentColor"
            d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
          />
        </svg>
      </div>
      <div class="wrap-texts">
        <h3>{{ notificationData.title }}</h3>
        <p>{{ notificationData.text }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      :host{
        cursor: default;
      }
      .wrap-notification {
        display: flex;
        padding: 10px 15px;
        width: 100%;
        border-radius: 5px;
        margin-bottom: 8px;
        color: #ffffff;
        min-height: 50px;
      }

      .icon-start {
        height: 30px;
        width: 30px;
        flex: 0 0 30px;
        margin-right: 5px;
      }
      
      .wrap-texts {
        flex: auto;
      }

      .wrap-texts h3 {
        font-size: 16px;
        width: 100%;
      }

      .wrap-texts p {
        font-size: 14px;
        width: 100%;
      }

      .wrap-notification:hover {
        box-shadow: 0px 10px 70px -3px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class NotificationComponent {
  @Input() notificationData!: INotification;
  constructor(private notificationSvc: NgxToastNotifierService) {}

}
