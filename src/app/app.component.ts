import { Component } from '@angular/core';
import { NgxToastNotifierService } from 'ngx-toast-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGX-TOAST-NOTIFIER';

  constructor(public notiSvc: NgxToastNotifierService){

  }


  addSuccess():void{
    this.notiSvc.onSuccess('This is a success alert','This is a success alert')
  }

  addInfo():void{
    this.notiSvc.onInfo('This is a info alert','This is a info alert')
  }

  addWarning():void{
    this.notiSvc.onWarning('This is a warning alert','This is a warning alert')
  }

  addDanger():void{
    this.notiSvc.onDanger('This is a danger alert','This is a danger alert')
  }
}
