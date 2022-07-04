import { IgetStudents } from './student.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getStudentData:any = createFeatureSelector<IgetStudents>('students');

export const getStudent = createSelector(getStudentData, (state:any):any => {
    return state.students;
})