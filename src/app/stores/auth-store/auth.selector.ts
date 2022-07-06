import { createFeatureSelector, createSelector } from '@ngrx/store';



export const getAuthToken = createFeatureSelector('auth');

export const getAuth = createSelector(getAuthToken,(state:any) => {
    return state?.auth?.token;
})