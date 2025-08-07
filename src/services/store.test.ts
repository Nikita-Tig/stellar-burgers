import { rootReducer } from './store';

describe('Redux store', () => {
  test('initialization of the rootReducer', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const result = rootReducer(undefined, action);

    expect(result).toEqual({
      burgerConstructor: {
        constructor: {
          bun: null,
          ingredients: []
        },
        error: undefined,
        isLoading: false
      },
      feeds: {
        error: undefined,
        feed: {
          total: 0,
          totalToday: 0
        },
        isLoading: false,
        newOrder: {
          name: '',
          order: null
        },
        orderByNumber: null,
        orderRequest: false,
        orders: [],
        userOrders: []
      },
      ingredients: {
        error: undefined,
        ingredients: [],
        isLoading: false
      },
      user: {
        error: undefined,
        isAuthChecked: false,
        isLoading: false,
        user: null
      }
    });
  });
});
