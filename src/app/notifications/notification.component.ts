import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications;

  constructor(private service: NotificationsService) {
  }

  ngOnInit() {
    this.service.getNotifications().subscribe(n => this.notifications = n);
  }

}
