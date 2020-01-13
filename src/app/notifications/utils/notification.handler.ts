import { Injectable } from '@angular/core';
import { Context } from '../models/context.enum';
import { NotificationAction } from './notification.parser';

@Injectable({
	providedIn: 'root'
})
export class NotificationHandler {

	constructor() {
	}

	handle(action: NotificationAction) {
		if (action.config.context === Context.SUPERMARKET) {
			alert(`Navigating to ${action.config.data}`);
		} else if (action.config.context === Context.BANK) {
			return action.config.data;
		} else {
			confirm(`${action.config.data.ROBBERY ? 'ROBBED!' : 'NOT ROBBED'} ${action.config.data.text}`);
			return action.config.data;
		}
	}
}
