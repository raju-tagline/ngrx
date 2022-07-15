import { GET_STUDENT_LIST } from './studentData.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postsAdapter } from './studentData.state';

const getStudentList: any = createFeatureSelector<any>(GET_STUDENT_LIST);

//  ---------->> BEFORE ENTITY <<----------

// export const getStudent = createSelector(getStudentList, (state: any): any => {
//   return state?.posts;
// });

// export const getStudentProfile = createSelector(
//   getStudentList,
//   (state: any): any => {
//     return state && state.ids && state.entities
//       ? state.entities[state.ids]
//       : null;
//   }
// );

//  ---------->> AFTER ENTITY <<----------

export const getStudentsData = postsAdapter.getSelectors();

export const getStudent = createSelector(
  getStudentList,
  getStudentsData.selectAll
);

export const getStudentProfile = createSelector(
  getStudentList,
  getStudentsData.selectEntities
);
