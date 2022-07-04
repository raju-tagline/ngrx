import { createAction, props } from '@ngrx/store';

interface Idata {
  data: any[];
}

export const GET_STUDENT_DATA = '[ STUDENT DATA ] Student page';
export const GET_STUDENT_DATA_SUCCESS =
  '[ STUDENT DATA ] Student data success page';
export const GET_STUDENT_DATA_FAIL = '[ STUDENT DATA ] Student data fail page';

export const student_list = createAction(GET_STUDENT_DATA);
export const student_list_success = createAction(GET_STUDENT_DATA_SUCCESS, props<{ data:Idata }>());
export const stduent_list_fail = createAction(GET_STUDENT_DATA_FAIL);
