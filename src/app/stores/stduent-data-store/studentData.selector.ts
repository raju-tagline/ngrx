import { createFeatureSelector, createSelector } from '@ngrx/store';

const getStudentList: any = createFeatureSelector<any>('studentDataList');

export const getStudent = createSelector(getStudentList, (state: any): any => {
  return state.studentsData;
});

export const getStudentById = createSelector(
  getStudentList,
  (state: any, action: any): any => {
    const data = state.studentsData.find((ele: any) => ele._id === action.id);
    return data;
  }
);
