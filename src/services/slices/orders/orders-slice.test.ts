import {
  getFeedsThunk,
  getOrderByNumberThunk,
  getOrdersThunk,
  OrderBurgerThunk
} from './actions';
import { initialState, ordersSlice } from './orders-slice';

const ordersResult = {
  success: true,
  orders: [
    {
      _id: '68944929d5ca30001cffde24',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Био-марсианский флюоресцентный люминесцентный метеоритный бургер',
      createdAt: '2025-08-07T06:35:21.423Z',
      updatedAt: '2025-08-07T06:35:22.332Z',
      number: 85966
    },
    {
      _id: '68943b2ad5ca30001cffde10',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бургер',
      createdAt: '2025-08-07T05:35:38.934Z',
      updatedAt: '2025-08-07T05:35:39.719Z',
      number: 85965
    },
    {
      _id: '689438a5d5ca30001cffde0e',
      ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный бургер',
      createdAt: '2025-08-07T05:24:53.280Z',
      updatedAt: '2025-08-07T05:24:54.145Z',
      number: 85964
    },
    {
      _id: '68943279d5ca30001cffde09',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный люминесцентный бургер',
      createdAt: '2025-08-07T04:58:33.474Z',
      updatedAt: '2025-08-07T04:58:34.310Z',
      number: 85963
    }
  ],
  total: 85592,
  totalToday: 97
};

const orderBurgerResult = {
  success: true,
  name: 'Краторный spicy био-марсианский бургер',
  order: {
    ingredients: [
      {
        _id: '643d69a5c3f7b9001cfa093c',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa0941',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa0942',
        name: 'Соус Spicy-X',
        type: 'sauce',
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa093c',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0
      }
    ],
    _id: '68946124d5ca30001cffde3b',
    owner: {
      name: 'Gigi',
      email: 'gigithecactus@gmail.com',
      createdAt: '2025-08-05T07:53:33.099Z',
      updatedAt: '2025-08-05T07:53:33.099Z'
    },
    status: 'done',
    name: 'Краторный spicy био-марсианский бургер',
    createdAt: '2025-08-07T08:17:40.891Z',
    updatedAt: '2025-08-07T08:17:41.833Z',
    number: 85967,
    price: 3024
  }
};

const userOrdersResult = {
  success: true,
  orders: [
    {
      _id: '68922aa5d5ca30001cffd9e9',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный spicy био-марсианский бургер',
      createdAt: '2025-08-05T16:00:37.811Z',
      updatedAt: '2025-08-05T16:00:39.163Z',
      number: 85829
    },
    {
      _id: '68930477d5ca30001cffdb52',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный spicy био-марсианский бургер',
      createdAt: '2025-08-06T07:29:59.393Z',
      updatedAt: '2025-08-06T07:30:00.232Z',
      number: 85857
    },
    {
      _id: '689304fdd5ca30001cffdb57',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный spicy био-марсианский бургер',
      createdAt: '2025-08-06T07:32:13.705Z',
      updatedAt: '2025-08-06T07:32:14.549Z',
      number: 85859
    }
  ]
};

describe('Orders', () => {
  describe('Get feeds', () => {
    test('fulfilled', () => {
      expect(
        ordersSlice.reducer(undefined, {
          type: getFeedsThunk.fulfilled.type,
          payload: ordersResult
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        orders: ordersResult.orders,
        feed: {
          total: 85592,
          totalToday: 97
        }
      });
    });
    test('pending', () => {
      expect(
        ordersSlice.reducer(undefined, {
          type: getFeedsThunk.pending.type
        })
      ).toEqual({
        ...initialState,
        isLoading: true,
        error: undefined
      });
    });
    test('rejected', () => {
      const action = {
        type: getFeedsThunk.rejected.type,
        error: { message: 'test error' }
      };

      const result = ordersSlice.reducer(undefined, action);

      expect(result).toEqual({
        ...initialState,
        error: 'test error',
        isLoading: false
      });
    });
  });

  describe('Get order by number', () => {
    test('fulfilled', () => {
      expect(
        ordersSlice.reducer(undefined, {
          type: getOrderByNumberThunk.fulfilled.type,
          payload: { success: true, orders: [ordersResult.orders[0]] }
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        orderByNumber: {
          _id: '68944929d5ca30001cffde24',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa0940',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Био-марсианский флюоресцентный люминесцентный метеоритный бургер',
          createdAt: '2025-08-07T06:35:21.423Z',
          updatedAt: '2025-08-07T06:35:22.332Z',
          number: 85966
        }
      });
    });
    test('pending', () => {
      expect(
        ordersSlice.reducer(undefined, {
          type: getOrderByNumberThunk.pending.type
        })
      ).toEqual({
        ...initialState,
        isLoading: true,
        error: undefined
      });
    });
    test('rejected', () => {
      const action = {
        type: getOrderByNumberThunk.rejected.type,
        error: { message: 'test error' }
      };

      const result = ordersSlice.reducer(undefined, action);

      expect(result).toEqual({
        ...initialState,
        error: 'test error',
        isLoading: false
      });
    });
  });

  describe('Order burger', () => {
    test('fulfilled', () => {
      expect(
        ordersSlice.reducer(undefined, {
          type: OrderBurgerThunk.fulfilled.type,
          payload: orderBurgerResult
        })
      ).toEqual({
        ...initialState,
        orderRequest: false,
        newOrder: {
          order: orderBurgerResult.order,
          name: 'Краторный spicy био-марсианский бургер'
        }
      });
    });
    test('pending', () => {
      expect(
        ordersSlice.reducer(undefined, {
          type: OrderBurgerThunk.pending.type
        })
      ).toEqual({
        ...initialState,
        orderRequest: true,
        error: undefined
      });
    });
    test('rejected', () => {
      const action = {
        type: OrderBurgerThunk.rejected.type,
        error: { message: 'test error' }
      };

      const result = ordersSlice.reducer(undefined, action);

      expect(result).toEqual({
        ...initialState,
        error: 'test error',
        orderRequest: false,
        isLoading: false
      });
    });
  });

  describe('Get user order', () => {
    test('fulfilled', () => {
      expect(
        ordersSlice.reducer(undefined, {
          type: getOrdersThunk.fulfilled.type,
          payload: userOrdersResult.orders
        })
      ).toEqual({
        ...initialState,
        orderRequest: false,
        userOrders: userOrdersResult.orders
      });
    });
    test('pending', () => {
      expect(
        ordersSlice.reducer(undefined, {
          type: getOrdersThunk.pending.type
        })
      ).toEqual({
        ...initialState,
        orderRequest: false,
        isLoading: true,
        error: undefined
      });
    });
    test('rejected', () => {
      const action = {
        type: getOrdersThunk.rejected.type,
        error: { message: 'test error' }
      };

      const result = ordersSlice.reducer(undefined, action);

      expect(result).toEqual({
        ...initialState,
        error: 'test error',
        orderRequest: false,
        isLoading: false
      });
    });
  });
});
