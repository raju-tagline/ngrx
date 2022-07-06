import { initialState } from './shared.state';
import { createReducer, on } from '@ngrx/store';
import { setSpinner } from './shared.action';

export const _sharedReducer = createReducer(
  initialState,
  on(setSpinner, (state: any, action: any) => {
    return{
        ...state,
        spinner:action.spinner
    }
  })
);

export function SharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}


// const _sharedReducer = createReducer(
//     initialState,
//     on(setLoadingSpinner, (state, action) => {
//       return {
//         state,
//         showLoading: action.status,
//       };
//     })
//   );
  
//   export function SharedReducer(state:any, action:any) {
//     return _sharedReducer(state, action);
//   }