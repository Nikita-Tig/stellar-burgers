import { createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import {
  getFeedsThunk,
  getOrderByNumberThunk,
  getOrdersThunk,
  OrderBurgerThunk
} from './actions';
import { isRejectedAction } from '../common-actions/actions';

export interface OrderState {
  orders: TOrder[];
  orderByNumber: TOrder | null;
  feed: {
    total: number;
    totalToday: number;
  };

  newOrder: { order: TOrder | null; name: string };
  orderRequest: boolean;

  userOrders: TOrder[];

  isLoading: boolean;
  error: string | undefined;
}

export const initialState: OrderState = {
  orders: [],
  orderByNumber: null,
  feed: {
    total: 0,
    totalToday: 0
  },

  newOrder: { order: null, name: '' },
  orderRequest: false,

  userOrders: [],

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
    selectOrderRequest: (state) => state.orderRequest,
    selectUserOrders: (state) => state.userOrders
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

      .addCase(getOrderByNumberThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.orderByNumber = null;
      })
      .addCase(getOrderByNumberThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        [state.orderByNumber] = action.payload.orders;
      })

      .addCase(OrderBurgerThunk.pending, (state) => {
        state.orderRequest = true;
        state.error = undefined;
      })
      .addCase(OrderBurgerThunk.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.newOrder.name = action.payload.name;
        state.newOrder.order = action.payload.order;
      })

      .addCase(getOrdersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getOrdersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userOrders = action.payload;
      })

      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
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
  selectOrderRequest,
  selectUserOrders
} = ordersSlice.selectors;

export const { setNewOrder } = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
