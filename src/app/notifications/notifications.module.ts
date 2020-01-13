import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import { NotificationComponent } from './notification.component';


@NgModule({
  declarations: [NotificationCardComponent, NotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationCardComponent,
    NotificationComponent
  ]
})
export class NotificationsModule {
}
