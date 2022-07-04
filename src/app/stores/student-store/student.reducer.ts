import { initialState } from './student.state';
import { createReducer, on } from '@ngrx/store';
import { addPost, deletePost, updatePost } from './student.action';

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
  }),
  on(updatePost, (state: any, action: any): any => {
    const updatedStudent = state.students.map((resp:any) => {
        return action.student.id === resp.id ? action.student : resp
    });
    return {
      ...state,
      students: updatedStudent,
    };
  }),
  on(deletePost, (state: any, action: any): any => {
    const deleteStudent = state.students.filter((resp:any) => {
        return resp.id !== action.id;
    });
    return {
      ...state,
      students:deleteStudent,
    };
  })
);

export function studentDataReducer(state: any, action: any) {
  return _studentDataReducer(state, action);
}
