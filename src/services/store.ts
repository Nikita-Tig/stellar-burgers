import { combineSlices, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { ingredientsSlice } from './slices/ingredients/ingredients-slice';
import { userSlice } from './slices/user/user-slice';
import { ordersSlice } from './slices/orders/orders-slice';
import { userOrdersSlice } from './slices/burger-constructor/burger-constructor-slice';

export const rootReducer = combineSlices(
  ingredientsSlice,
  userSlice,
  ordersSlice,
  userOrdersSlice
);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
