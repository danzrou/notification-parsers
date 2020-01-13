import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { NOTIF_DATA } from './data';
import { NotificationParser } from './utils/notification.parser';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private parser: NotificationParser) {
  }

  getNotifications() {
    return of(NOTIF_DATA).pipe(
      delay(1000),
      map(notifications => this.parseNotifications(notifications))
    );
  }

  parseNotifications(notifications) {
    return notifications.map(n => this.parser.parse(n));
  }
}
