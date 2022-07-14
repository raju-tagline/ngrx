import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ACTIVE_STUDENTS } from './active-student.action';

export const activeStudentList = createFeatureSelector<any>(ACTIVE_STUDENTS);

export const getActiveStudentSelector = createSelector(
  activeStudentList,
  (state: any):any => {
    return state && state.studentList ? state.studentList : null;
  }
);
