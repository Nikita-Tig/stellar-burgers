import { getFeedsApi, getOrderByNumberApi, getOrdersApi } from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { orderBurgerApi } from '@api';

export const getFeedsThunk = createAsyncThunk('feeds/fetchFeeds', async () =>
  getFeedsApi()
);

export const getOrderByNumberThunk = createAsyncThunk(
  'orders/fetchOrder',
  async (number: number) => getOrderByNumberApi(number)
);

export const OrderBurgerThunk = createAsyncThunk(
  'userOrders/order',
  async (data: string[]) => orderBurgerApi(data)
);

export const getOrdersThunk = createAsyncThunk('orders/fetchOrders', async () =>
  getOrdersApi()
);
