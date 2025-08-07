import {
  checkUserAuth,
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk
} from './actions';
import { initialState, userSlice } from './user-slice';

const email = 'gigithecactus@gmail.com';
const name = 'gigi';

describe('User', () => {
  describe('CheckUserAuth', () => {
    test('pending', () => {
      expect(
        userSlice.reducer(undefined, {
          type: checkUserAuth.pending.type
        })
      ).toEqual({
        ...initialState,
        isLoading: true,
        error: undefined
      });
    });
  });

  describe('Login', () => {
    test('fulfilled', () => {
      expect(
        userSlice.reducer(undefined, {
          type: loginUserThunk.fulfilled.type,
          payload: {
            success: true,
            refreshToken: 'testRefreshToken',
            accessToken: 'testAccessToken',
            user: {
              email,
              name
            }
          }
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        isAuthChecked: true,
        user: {
          email,
          name
        }
      });
    });
    test('pending', () => {
      expect(
        userSlice.reducer(undefined, {
          type: loginUserThunk.pending.type
        })
      ).toEqual({
        ...initialState,
        isLoading: true,
        error: undefined
      });
    });
    test('rejected', () => {
      const action = {
        type: loginUserThunk.rejected.type,
        error: { message: 'test error' }
      };

      const result = userSlice.reducer(undefined, action);

      expect(result).toEqual({
        ...initialState,
        error: 'test error',
        isLoading: false
      });
    });
  });

  describe('Register', () => {
    test('fulfilled', () => {
      expect(
        userSlice.reducer(undefined, {
          type: registerUserThunk.fulfilled.type,
          payload: {
            success: true,
            refreshToken: 'testRefreshToken',
            accessToken: 'testAccessToken',
            user: {
              email,
              name
            }
          }
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        isAuthChecked: true,
        user: {
          email,
          name
        }
      });
    });
    test('pending', () => {
      expect(
        userSlice.reducer(undefined, {
          type: registerUserThunk.pending.type
        })
      ).toEqual({
        ...initialState,
        isLoading: true,
        error: undefined
      });
    });
    test('rejected', () => {
      const action = {
        type: registerUserThunk.rejected.type,
        error: { message: 'test error' }
      };

      const result = userSlice.reducer(undefined, action);

      expect(result).toEqual({
        ...initialState,
        error: 'test error',
        isLoading: false
      });
    });
  });

  describe('Logout', () => {
    test('fulfilled', () => {
      expect(
        userSlice.reducer(undefined, {
          type: logoutUserThunk.fulfilled.type
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        isAuthChecked: false,
        user: null
      });
    });
    test('pending', () => {
      expect(
        userSlice.reducer(undefined, {
          type: logoutUserThunk.pending.type
        })
      ).toEqual({
        ...initialState,
        isLoading: true,
        error: undefined
      });
    });
    test('rejected', () => {
      const action = {
        type: logoutUserThunk.rejected.type,
        error: { message: 'test error' }
      };

      const result = userSlice.reducer(undefined, action);

      expect(result).toEqual({
        ...initialState,
        error: 'test error',
        isLoading: false
      });
    });
  });
});
