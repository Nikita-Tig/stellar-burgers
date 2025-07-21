import { createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import {
  getFeedsThunk,
  getOrderByNumberThunk,
  OrderBurgerThunk
} from './actions';

export interface OrderState {
  orders: TOrder[];
  orderByNumber: TOrder | null;
  feed: {
    total: number;
    totalToday: number;
  };

  newOrder: { order: TOrder | null; name: string };
  orderRequest: boolean;

  isLoading: boolean;
  error: string | undefined;
}

const initialState: OrderState = {
  orders: [],
  orderByNumber: null,
  feed: {
    total: 0,
    totalToday: 0
  },

  newOrder: { order: null, name: '' },
  orderRequest: false,

  isLoading: false,
  error: undefined
};

export const ordersSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    setNewOrder: (state, action) => {
      state.orderRequest = action.payload;
      state.newOrder.order = null;
    }
  },
  selectors: {
    selectOrders: (state) => state.orders,
    selectOrderByNumber: (state) => state.orderByNumber,
    selectFeed: (state) => state.feed,
    selectNewOrder: (state) => state.newOrder,
    selectOrderRequest: (state) => state.orderRequest
  },
  extraReducers(builder) {
    builder
      .addCase(getFeedsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getFeedsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload.orders;
        state.feed.total = action.payload.total;
        state.feed.totalToday = action.payload.totalToday;
      })
      .addCase(getFeedsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(getOrderByNumberThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.orderByNumber = null;
      })
      .addCase(getOrderByNumberThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        [state.orderByNumber] = action.payload.orders;
      })
      .addCase(getOrderByNumberThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(OrderBurgerThunk.pending, (state) => {
        state.orderRequest = true;
        state.error = undefined;
      })
      .addCase(OrderBurgerThunk.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.newOrder.name = action.payload.name;
        state.newOrder.order = action.payload.order;

        const value = localStorage.getItem('userOrders');
        if (typeof value === 'string') {
          const userOrders = JSON.parse(value);
          userOrders.push(action.payload.order);
          localStorage.setItem('userOrders', JSON.stringify(userOrders));
        }
      })
      .addCase(OrderBurgerThunk.rejected, (state, action) => {
        state.orderRequest = false;
        state.error = action.error.message;
      });
  }
});

export const {
  selectOrders,
  selectOrderByNumber,
  selectFeed,
  selectNewOrder,
  selectOrderRequest
} = ordersSlice.selectors;

export const { setNewOrder } = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
