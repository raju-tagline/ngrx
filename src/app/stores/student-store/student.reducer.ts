import { initialState } from './student.state';
import { createReducer, on } from '@ngrx/store';
import { addPost } from './student.action';

export const _studentDataReducer = createReducer(
  initialState,
  on(addPost, (state: any, action: any): any => {
    let student = {
      ...action.student,
    };
    return {
      ...state,
      students: [...state.students, student],
    };
  })
);

export function studentDataReducer(state: any, action: any) {
  return _studentDataReducer(state, action);
}
