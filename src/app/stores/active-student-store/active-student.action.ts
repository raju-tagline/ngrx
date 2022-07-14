import { createAction, props } from '@ngrx/store';

export const ACTIVE_STUDENTS = 'activeStudent';

export const GET_ACTIVE_STUDENT = '[Active Student Page]';
export const GET_ACTIVE_STUDENT_SUCCESS = '[Active Student Page]';
export const GET_ACTIVE_STUDENT_FAIL = '[Active Student Page]';

export const getActiveStudent = createAction(GET_ACTIVE_STUDENT);
export const getActiveStudentSuccess = createAction(
  GET_ACTIVE_STUDENT_SUCCESS,
  props<{ activeStudent: any }>()
);
export const getActiveStudentFail = createAction(
  GET_ACTIVE_STUDENT_FAIL,
  props<{ errorMessage: any }>()
);
