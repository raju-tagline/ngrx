import { initialState } from './student.state';
import { createReducer, on } from '@ngrx/store';
import { addPost, updatePost } from './student.action';

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
        console.log('action.student.id :>> ', action.student.id);
        if(action.student.id === resp.id){
            console.log('resp :>> ', resp);
        }
        return action.student.id === resp.id ? action.student : resp
    });
    console.log('updatedStudent::: :>> ', updatedStudent);
    return {
      ...state,
      students: updatedStudent,
    };
  })
);

export function studentDataReducer(state: any, action: any) {
  return _studentDataReducer(state, action);
}
