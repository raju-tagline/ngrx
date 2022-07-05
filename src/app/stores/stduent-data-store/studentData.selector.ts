import { GET_STUDENT_LIST } from './studentData.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getStudentList: any = createFeatureSelector<any>(GET_STUDENT_LIST);

export const getStudent = createSelector(getStudentList, (state: any): any => {
  return state?.studentsData;
});

export const getStudentProfile = createSelector(getStudentList, (state: any): any => {
  return state?.studentsData?.[0];
});

