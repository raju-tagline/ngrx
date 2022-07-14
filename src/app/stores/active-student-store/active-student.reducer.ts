import {
  getActiveStudent,
  GET_ACTIVE_STUDENT,
  getActiveStudentSuccess,
  GET_ACTIVE_STUDENT_SUCCESS,
  getActiveStudentFail,
  GET_ACTIVE_STUDENT_FAIL,
} from './active-student.action';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './active-student.state';
import { ofType } from '@ngrx/effects';

const _activeStudentReducer = createReducer(
  initialState,
  on(getActiveStudent, (state: any, action: any) => {
    ofType(GET_ACTIVE_STUDENT);
    return {
      ...state,
      activeStudent: action.activeStudent,
    };
  }),
  on(getActiveStudentSuccess, (state: any, action: any) => {
    ofType(GET_ACTIVE_STUDENT_SUCCESS);
    return {
      ...state,
      activeStudent: action.activeStudent,
    };
  }),
  on(getActiveStudentFail, (state: any, action: any) => {
    ofType(GET_ACTIVE_STUDENT_FAIL);
    return {
      ...state,
      activeStudent: action,
    };
  })
);

export function activeStudentReducer(state: any, action: any) {
  return _activeStudentReducer(state, action);
}
