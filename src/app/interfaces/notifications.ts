export interface INotification{
  id?: number | undefined;
  title: string;
  text: string;
  icon: 'success' | 'warning' | 'info' | 'danger';
}