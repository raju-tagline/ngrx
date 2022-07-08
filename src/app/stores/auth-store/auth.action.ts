import { createAction, props } from '@ngrx/store';
interface IloginData {
  email: string;
  password: string;
}

interface Iuser {
  data: any;
}

export const LOGIN = '[ LOGIN ] Login page';
export const LOGIN_SUCCESS = '[ LOGIN_SUCCESS ] Login page';
export const LOGIN_FAIL = '[ LOGIN_FAIL ] Login page';

export const SIGN_UP = '[ SIGN_UP ] Sign up page';
export const SIGN_UP_SUCCESS = '[ SIGN_UP_SUCCESS ] Sign up page';
export const SIGN_UP_FAIL = '[ SIGN_UP_FAIL ] Sign up page';

export const login = createAction(LOGIN, props<{ loginData: IloginData }>());
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ data: Iuser }>()
);
export const loginFail = createAction(
  LOGIN_FAIL,
  props<{ errorMessage: any }>()
);

export const signup = createAction(SIGN_UP, props<{ signupData: any }>());
export const signupSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ data: any }>()
);
export const signupFail = createAction(
  LOGIN_FAIL,
  props<{ errorMessage: any }>()
);
