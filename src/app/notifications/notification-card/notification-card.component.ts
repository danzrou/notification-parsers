import { Component, Input, OnInit } from '@angular/core';
import { NotificationHandler } from '../utils/notification.handler';
import { NotificationAction } from '../utils/notification.parser';

@Component({
	selector: 'app-notification-card',
	templateUrl: './notification-card.component.html',
	styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnInit {

	@Input() notification;

	result;

	constructor(private handler: NotificationHandler) {
	}

	ngOnInit() {
	}

	wordClass(word: NotificationAction) {
		return word.ui.componentType;
	}

	handle(word: NotificationAction) {
		const result = this.handler.handle(word);
		if (result) {
			this.result = result;
		}
	}
}
