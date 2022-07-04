import { IgetStudents } from './student-store/student.state';
import { Icounter } from '../stores/counter-store/counter.state';
import { counterReducer } from './counter-store/counter.reducer';
import { studentDataReducer } from './student-store/student.reducer';

export interface AppState {
  counter: Icounter;
  studentsData: IgetStudents;
}

export const appReducer = {
  counter: counterReducer,
  students: studentDataReducer,
};
