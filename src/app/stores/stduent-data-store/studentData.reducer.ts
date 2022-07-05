import { student_list_success, stduent_list_fail } from './studentData.action';
import { initialState } from './studentData.state';
import { createReducer, on } from '@ngrx/store';

const _studentDataReducer = createReducer(
  initialState,
  on(student_list_success, (state: any, action: any) => {
    return {
      ...state,
      studentsData: action.data,
    };
  }),
  on(stduent_list_fail, (state: any, action: any) => {
    return {
      ...state,
      studentsData: action,
    };
  })
);

export function studentDataListReducer(state: any, action: any) {
  return _studentDataReducer(state, action);
}
