## Dependencies

Latest version available for each version of Angular

| ngx-toast-notifier | Angular     |
| ----------         | ----------- |
| current            | >= 12.x     |

## Install

```bash
npm install ngx-toast-notifier --save
```

`@angular/animations` package is a required dependency for the default toast

```bash
npm install @angular/animations --save
```

Don't want to use `@angular/animations`? See
[Setup Without Animations](#setup-without-animations).

## Setup

**step 1:** add NgxToastNotifierModule to app NgModule, make sure you have BrowserAnimationsModule as well

```typescript
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxToastNotifierModule } from 'ngx-toast-notifier';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    NgxToastNotifierModule.forRoot(), // NgxToastNotifierModule added
  ],
  bootstrap: [App],
  declarations: [App],
})
class MainModule {}
```

## Use

```typescript
import { NgxToastNotifierService } from 'ngx-toast-notifier';

@Component({...})
export class YourComponent {
  constructor(private notifierSvc: NgxToastNotifierService) {}

  addSuccess():void{
    this.notifierSvc.onSuccess('This is a success alert','This is a success alert')
  }

  addInfo():void{
    this.notifierSvc.onInfo('This is a info alert','This is a info alert')
  }

  addWarning():void{
    this.notifierSvc.onWarning('This is a warning alert','This is a warning alert')
  }

  addDanger():void{
    this.notifierSvc.onDanger('This is a danger alert','This is a danger alert')
  }
}
```

## Options

#### Setting Global Options

Pass values to `NgxToastNotifierModule.forRoot()`

```typescript
// root app NgModule
imports: [
  NgxToastNotifierModule.forRoot({
    timeOut: 10000,
    bgColors: {
     success: '#54a254',
     info: '#1976d2',
     warning: '#e09f26',
     danger: '#da2d2d',
    }
  }),
],
```