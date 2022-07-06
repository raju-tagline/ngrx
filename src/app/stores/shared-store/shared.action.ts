import { createAction, props } from '@ngrx/store';
export const SET_SPINNER = '[SET SPINNER] set sinner page';

export const setSpinner = createAction(
  SET_SPINNER,
  props<{ spinner: boolean }>()
);


// export const SET_LOADING_ACTION = '[shared state] set loading spinner';

// export const setLoadingSpinner = createAction(
//   SET_LOADING_ACTION,
//   props<{ status: boolean }>()
// );