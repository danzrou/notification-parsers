import { Injectable } from '@angular/core';
import { Context } from '../models/context.enum';

export interface Parser<T> {
  parse(data: any): T;
}

export type NotificationComponentType = 'link' | 'button' | 'text';

export interface NotificationAction {
  ui: {
    componentType: 'link' | 'button' | 'text';
  };
  text: string;
  config: {
    params: any;
    context: Context;
    data: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NotificationParser implements Parser<any> {

  parse(notification: any): any {
    const parsed = this.parseNotification(notification);
    return parsed;
  }

  private parseNotification(n: any) {
    const {message, messageLinks} = n;
    const words = message.split(' ');
    const parsedWords = words.map(w => this.parseWord(w, messageLinks));
    return {
      ...n,
      words: parsedWords
    };
  }

  private parseWord(w: string, messageLinks: any): NotificationAction {
    if (this.shouldParse(w)) {
      const clean = this.removePrefix(w);
      const {context, params} = messageLinks[clean];
      const data = this.buildData(context, params);
      const ui = this.getUiRep(context, params);
      return {
        text: clean,
        ui,
        config: {
          context,
          params,
          data
        }
      };
    }

    return {text: w, config: null, ui: {componentType: 'text'}};
  }

  private shouldParse(w: string) {
    return w.startsWith('__') && w.endsWith('__');
  }

  private buildData(context: Context, params: any) {
    if (context === Context.BANK) {
      return [params.bankId, params.headerText];
    } else if (context === Context.SUPERMARKET) {
      return `${params.marketId}--${params.title}`;
    } else {
      return {ROBBERY: true, text: 'YEYYYYYYYYYYYYYY'};
    }
  }

  private getUiRep(context: Context, params: any): NotificationAction['ui'] {
    const componentType = context === Context.BANK ? 'link' : context === Context.SUPERMARKET ? 'button' : 'text';
    return {
      componentType
    };
  }

  private removePrefix(w: string) {
    return w.replace('__', '').replace('__', '');
  }
}
