import { Action, actionCreator } from 'utils';

// ***** Our Way ***** //

export const INCREMENT_COUNTER = actionCreator('INCREMENT_COUNTER');
export const DECREMENT_COUNTER = actionCreator('DECREMENT_COUNTER');


// ***** Traditional Way ***** //

// // Action Constants
// export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
// export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// // Action Creators
// export const incrementCounter: (num: number) => Action<number> =
//   (num) => ({
//     type: INCREMENT_COUNTER,
//     payload: num
//   });

// export const decrementCounter: (num: number) => Action<number> =
//   (num) => ({
//     type: DECREMENT_COUNTER,
//     payload: num
//   });
