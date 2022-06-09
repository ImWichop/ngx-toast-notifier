import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { onEnterLeave } from '../animations/animations';
import { INotification } from '../interfaces/i-notification';
import { NgxToastNotifierService } from '../services/ngx-toast-notifier.service';

@Component({
  selector: 'ngx-toast-notifier',
  template: `
    <div class="wrap-notifications">
      <ngx-notification
        [notificationData]="item"
        *ngFor="let item of $notifications | async"
        @onEnterLeave
      >
      </ngx-notification>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        position: fixed;
        width: 300px;
        height: auto;
        max-height: 100vh;
        overflow: auto;
        top: 80px;
        right: 15px;
        z-index: 99;
      }

      .wrap-notifications {
        position: relative;
        width: 100%;
        overflow: hidden;
      }

      @media only screen and (max-width: 500px) {
        :host {
          width: 95%;
          top: 20px;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
      }
    `,
  ],
  animations: [onEnterLeave],
})
export class NgxToastNotifierComponent implements OnInit {
  $notifications!: Observable<INotification[]>;
  constructor(private notificationSvc: NgxToastNotifierService) {}

  ngOnInit(): void {
    this.$notifications = this.notificationSvc.$notificationsObs;
  }
}
