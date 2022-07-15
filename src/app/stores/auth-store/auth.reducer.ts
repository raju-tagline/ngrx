import {
  login,
  LOGIN,
  loginSuccess,
  signupSuccess,
  LOGIN_SUCCESS,
  loginFail,
  signupFail,
  LOGIN_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
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
      auth: action && action.token ? action : null,
    };
  }),
  on(loginFail, (state: any, action: any) => {
    ofType(LOGIN_FAIL);
    return {
      ...state,
      auth: action.errorMessage,
    };
  }),
  on(signupSuccess, (state: any, action: any) => {
    ofType(SIGN_UP_SUCCESS);
    return {
      ...state,
      auth: action,
    };
  }),
  on(signupFail, (state: any, action: any) => {
    ofType(SIGN_UP_FAIL);
    return {
      ...state,
      auth: action.errorMessage,
    };
  })
);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}
