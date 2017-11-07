import { Action } from 'utils';

// Action Constants
export const INCREMENT_COUNTER = 'INCREMENT';
export const DECREMENT_COUNTER = 'DECREMENT';

// Action Creators
export const incrementCounter: (num: number) => Action<number> =
  (num) => ({
    type: INCREMENT_COUNTER,
    payload: num
  });

export const decrementCounter: (num: number) => Action<number> =
  (num) => ({
    type: DECREMENT_COUNTER,
    payload: num
  });
