import { createAction, props } from '@ngrx/store';
interface IloginData{
    email:string,
    password:string
}

interface Iuser {
  data:any
}

export const LOGIN = '[ LOGIN ] Login page';
export const LOGIN_SUCCESS = '[ LOGIN_SUCCESS ] Login page';
export const LOGIN_FAIL = '[ LOGIN_FAIL ] Login page';

export const login = createAction(
  LOGIN,
  props<{ loginData:IloginData }>()
);
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ data:Iuser }>());
export const loginFail = createAction(LOGIN_FAIL, props<{ errorMessage:any }>());
