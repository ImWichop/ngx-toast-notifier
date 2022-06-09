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


  addSuccess():void{
    this.notiSvc.onSuccess('El convenio se actualizó correctamente','El convenio se actualizó correctamente')
  }

  addInfo():void{
    this.notiSvc.onInfo('El convenio se actualizó correctamente','El convenio se actualizó correctamente')
  }

  addWarning():void{
    this.notiSvc.onWarning('El convenio se actualizó correctamente','El convenio se actualizó correctamente')
  }

  addDanger():void{
    this.notiSvc.onDanger('El convenio se actualizó correctamente','El convenio se actualizó correctamente')
  }
}
