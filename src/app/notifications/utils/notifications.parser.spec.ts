import { NOTIF_DATA } from '../data';
import { Context } from '../models/context.enum';
import { NotificationParser } from './notification.parser';

describe('PARSER', () => {
  it('should parse notif', () => {
    const data = NOTIF_DATA;
    const parser = new NotificationParser();
    const parsed = parser.parse(data);
    expect(parsed).toEqual([{
      id: 1,
      message: 'Dan __robbed__ a __bank__',
      messageLinks: {
        bank: {
          context: Context.BANK,
          params: {
            bankId: 1,
            headerText: 'BANK ROBBERY!!!'
          }
        },
        robbed: {
          context: Context.ROBBERY,
          params: {
            bankId: 1,
            headerText: 'AHAHAHA'
          }
        }
      },
      words: [
        {
          text: 'Dan', config: null, ui: { componentType: 'text' }
        },
        {
          text: 'robbed',
          ui: {
            componentType: 'text'
          },
          config: {
            context: Context.ROBBERY,
            params: {
              bankId: 1,
              headerText: 'AHAHAHA'
            },
            data: {ROBBERY: true, text: 'YEYYYYYYYYYYYYYY'}
          }
        },
        {
          text: 'a', config: null, ui: { componentType: 'text' }
        },
        {
          text: 'bank',
          ui: {
            componentType: 'link'
          },
          config: {
            context: Context.BANK,
            params: {
              bankId: 1,
              headerText: 'BANK ROBBERY!!!'
            },
            data: [1, 'BANK ROBBERY!!!']
          }
        }
      ]
    },
      {
        id: 2,
        message: 'Udi blown a __supermarket__',
        messageLinks: {
          supermarket: {
            context: Context.SUPERMARKET,
            params: {
              marketId: 2,
              title: 'SUPERMARKET!!!'
            }
          }
        },
        words: [
          {
            text: 'Udi', config: null, ui: { componentType: 'text' }
          },
          {
            text: 'blown', config: null, ui: { componentType: 'text' }
          },
          {
            text: 'a', config: null, ui: { componentType: 'text' }
          },
          {
            text: 'supermarket',
            ui: {
              componentType: 'button'
            },
            config: {
              context: Context.SUPERMARKET,
              params: {
                marketId: 2,
                title: 'SUPERMARKET!!!'
              },
              data: `2--SUPERMARKET!!!`
            }
          }
        ]
      }]);
  });
});
