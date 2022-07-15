import { student_list_success, stduent_list_fail } from './studentData.action';
import { initialState, postsAdapter } from './studentData.state';
import { createReducer, on } from '@ngrx/store';

// ------------->>BEFORE ENTITY<<-------------

// const _studentDataReducer = createReducer(
//   initialState,
//   on(student_list_success, (state: any, action: any) => {
//     return {
//       ...state,
//       posts: action.data,
//     };
//   }),
//   on(stduent_list_fail, (state: any, action: any) => {
//     return {
//       ...state,
//       posts: action,
//     };
//   })
// );

// ------------->>AFTER ENTITY<<-------------

const _studentDataReducer = createReducer(
  initialState,
  on(student_list_success, (state: any, action: any) => {
    return postsAdapter.setAll(action.posts, state);
  }),
  // on(stduent_list_fail, (state: any, action: any) => {
  //   return {
  //     ...state,
  //     posts: action,
  //   };
  // })
);

export function studentDataListReducer(state: any, action: any) {
  return _studentDataReducer(state, action);
}
