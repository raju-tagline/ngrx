import {
  login,
  LOGIN,
  loginSuccess,
  LOGIN_SUCCESS,
  loginFail,
  LOGIN_FAIL,
} from './auth.action';
import { ofType } from '@ngrx/effects';
import { initialState } from './auth-state';
import { createReducer, on } from '@ngrx/store';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state: any, action: any) => {
    ofType(LOGIN_SUCCESS);
    return {
      ...state,
      auth: action,
    };
  }),
  on(loginFail, (state: any, action: any) => {
    ofType(LOGIN_FAIL);
    return {
      ...state,
      auth: action.errorMessage,
    };
  })
);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}
