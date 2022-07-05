import { login, LOGIN, loginSuccess, LOGIN_SUCCESS } from './auth.action';
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
  })
);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}
