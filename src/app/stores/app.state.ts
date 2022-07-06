import { ISharedState } from './shared-store/shared.state';
import { SHARED_STATE } from './shared-store/shared.selector';
import { IgetStudents } from './student-store/student.state';
import { Icounter } from '../stores/counter-store/counter.state';
import { counterReducer } from './counter-store/counter.reducer';
import { studentDataReducer } from './student-store/student.reducer';
import { SharedReducer } from './shared-store/shared.reducer';

// export interface AppState {
//   counter: Icounter;
//   studentsData: IgetStudents;
// }

// export const appReducer = {
//   counter: counterReducer,
//   students: studentDataReducer,
// };

export interface AppState {
  [SHARED_STATE]:ISharedState
}

export const appReducer = {
  [SHARED_STATE]:SharedReducer
}