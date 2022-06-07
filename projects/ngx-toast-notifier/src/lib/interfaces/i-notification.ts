import { InjectionToken } from "@angular/core";

export interface INotification{
  title: string;
  text: string;
  icon: 'success' | 'warning' | 'info' | 'danger';
}


export interface GlobalConfiguration{
  timeOut: number;
  easing: number;
  bgColors: Partial<BgColors>
}

export interface BgColors{
  success: string;
  warning: string;
  info: string;
  danger: string;
}

export const DefaultGlobalConfig: GlobalConfiguration = {
  timeOut: 3000,
  easing: 3000,
  bgColors: {
    success: '#386177',
    warning: '#e09f26',
    info: '#1976d2',
    danger: '#da2d2d',
  }
}

export interface ToastToken{
  default: GlobalConfiguration,
  config: Partial<GlobalConfiguration>
}


export const TOAST_CONFIG = new InjectionToken<ToastToken>('ToastConfig');