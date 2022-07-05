import { IgetStudents } from './student.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getStudentData:any = createFeatureSelector<IgetStudents>('students');

export const getStudent = createSelector(getStudentData, (state:any):any => {
    return state.students;
})

// export const getStudentById = createSelector(getStudentData, (state:any,action:any):any => {
//     const data = state.students.find((ele:any) => ele.id === action.id)
//     return data;
// })