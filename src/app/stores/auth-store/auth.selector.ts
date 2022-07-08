import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAuthToken = createFeatureSelector('auth');

export const getAuth = createSelector(getAuthToken, (state: any) => {
  return state?.auth?.token;
});

export const isAuthenticated = createSelector(getAuthToken, (state: any) => {
  return state?.auth?.name ? true : false;
});
