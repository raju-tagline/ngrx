import { ISharedState } from './shared-store/shared.state';
import { SHARED_STATE } from './shared-store/shared.selector';
import { SharedReducer } from './shared-store/shared.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

// export interface AppState {
//   counter: Icounter;
//   studentsData: IgetStudents;
// }

// export const appReducer = {
//   counter: counterReducer,
//   students: studentDataReducer,
// };

export interface AppState {
  [SHARED_STATE]: ISharedState;
  router: RouterReducerState;
}

export const appReducer = {
  [SHARED_STATE]: SharedReducer,
  router: routerReducer,
};
