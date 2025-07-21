import {
  TLoginData,
  loginUserApi,
  TRegisterData,
  registerUserApi,
  getUserApi,
  logoutApi
} from '@api';

import { Action, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getCookie } from '../../../utils/cookie';
import { setUser } from './user-slice';

export const setIsAuthChecked = createAction<boolean, 'user/setIsAuthChecked'>(
  'user/setIsAuthChecked'
);

export const loginUserThunk = createAsyncThunk(
  'user/login',
  async (data: TLoginData) => loginUserApi(data)
);

export const registerUserThunk = createAsyncThunk(
  'user/register',
  async (data: TRegisterData) => registerUserApi(data)
);

export const checkUserAuth = createAsyncThunk(
  'user/checkUserAuth',
  async (_, { dispatch }) => {
    if (getCookie('accessToken')) {
      getUserApi().then((user) => dispatch(setUser(user.user)));
    }
  }
);

export const logoutUserThunk = createAsyncThunk('user/logoutUser', async () =>
  logoutApi()
);

interface RejectedAction extends Action {
  error: Error;
}

export function isRejectedAction(action: Action): action is RejectedAction {
  return action.type.endsWith('rejected');
}

export function isFulfilledAction(action: Action): action is RejectedAction {
  return action.type.endsWith('rejected');
}
