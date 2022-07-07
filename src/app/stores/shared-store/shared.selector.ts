// import { SharedState } from './shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const SHARED_STATE = 'shared';

const setSharedStaet = createFeatureSelector(SHARED_STATE);

export const getSpinner = createSelector(setSharedStaet, (state: any) => {
  return state?.spinner;
});


// export const SHARED_STATE_NAME = 'shared';

// const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

// export const getLoading = createSelector(getSharedState, (state) => {
//   return state.showLoading;
// });