import { createAction, props } from '@ngrx/store';

interface Idata {
  data: any[];
}

export const GET_STUDENT_LIST = 'studentDataList';

export const GET_STUDENT_DATA = '[ STUDENT DATA ] Student page';
export const GET_STUDENT_DATA_SUCCESS =
  '[ STUDENT DATA ] Student data success page';
export const GET_STUDENT_DATA_FAIL = '[ STUDENT DATA ] Student data fail page';

export const student_list = createAction(GET_STUDENT_DATA);
export const student_list_success = createAction(
  GET_STUDENT_DATA_SUCCESS,
  props<{ data: Idata }>()
);
export const stduent_list_fail = createAction(GET_STUDENT_DATA_FAIL);

// STUDENT PROFILE

// export const GET_STUDENT_PROFILE = 'studentProfile';

export const GET_STUDENT_DETAILS = '[ STUDENT DETAILS ] Student page';
export const GET_STUDENT_DETAILS_SUCCESS =
  '[ STUDENT DETAILS ] Student DETAILS success page';
export const GET_STUDENT_DETAILS_FAIL =
  '[ STUDENT DETAILS ] Student DETAILS fail page';

export const student_profile = createAction(
  GET_STUDENT_DETAILS,
  props<{ id: Idata }>()
);
export const student_profile_success = createAction(
  GET_STUDENT_DETAILS_SUCCESS,
  props<{ data: Idata }>()
);
export const stduent_profile_fail = createAction(GET_STUDENT_DETAILS_FAIL);
