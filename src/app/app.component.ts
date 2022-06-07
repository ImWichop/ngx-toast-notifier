import { Component } from '@angular/core';
import { NgxToastNotifierService } from 'ngx-toast-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications';

  constructor(public notiSvc: NgxToastNotifierService){

  }


  addNotification():void{

    setTimeout(() =>{
      this.notiSvc.onShowNotification({ title: 'El convenio se actualizó correctamente',text: 'El convenio se actualizó correctamente', icon: 'success' })
    },1000)

    setTimeout(() =>{
      this.notiSvc.onShowNotification({ title: '',text: '', icon: 'warning' })
    },2000)

    setTimeout(() =>{
      this.notiSvc.onShowNotification({ title: 'El convenio se actualizó correctamente',text: 'El convenio se actualizó correctamente', icon: 'info' })
    },3000)

    setTimeout(() =>{
      this.notiSvc.onShowNotification({ title: 'Test',text: 'El convenio se actualizó correctamente', icon: 'danger' })
    },4000)
  }
}
