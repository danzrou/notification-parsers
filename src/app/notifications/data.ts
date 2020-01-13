import { Context } from './models/context.enum';

export const NOTIF_DATA = [
  {
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
    }
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
    }
  }
]
