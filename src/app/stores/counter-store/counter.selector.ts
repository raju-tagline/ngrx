import { Icounter } from './counter.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCounterState = createFeatureSelector<Icounter>('counter');

export const getCounter = createSelector(getCounterState, (state: any) => {
  return state.counter;
});
