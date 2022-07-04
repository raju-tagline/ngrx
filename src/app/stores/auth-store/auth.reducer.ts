import { initialState } from './auth-state';
import { createReducer, on } from '@ngrx/store';

const _authReducer = createReducer(initialState);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}
