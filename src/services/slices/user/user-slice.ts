import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '../../../utils/types';
import {
  checkUserAuth,
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
  setIsAuthChecked
} from './actions';
import { deleteCookie, setCookie } from '../../../utils/cookie';
import { isRejectedAction } from '../common-actions/actions';

export interface UserState {
  user: TUser | null;
  isAuthChecked: boolean;

  isLoading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  user: null,
  isAuthChecked: false,

  isLoading: false,
  error: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
  selectors: {
    userSelector: (state) => state.user,
    isAuthCheckedSelector: (state) => state.isAuthChecked
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUserAuth.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })

      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        setCookie('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        state.isAuthChecked = true;
      })

      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        setCookie('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        state.isAuthChecked = true;
      })

      .addCase(logoutUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.isLoading = false;
        deleteCookie('accessToken');
        localStorage.removeItem('refreshToken');
        state.user = null;
      })

      .addCase(setIsAuthChecked, (state, action) => {
        state.isAuthChecked = action.payload;
      })

      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export const { userSelector, isAuthCheckedSelector } = userSlice.selectors;
export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
