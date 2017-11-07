import { combineReducers } from 'redux';
import { Action, getType } from 'utils';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './app.actions';

export interface AppState {
  counter: number;
}

const counter = (state = 0, action: Action<number>) => {
  switch (action.type) {
    case getType(INCREMENT_COUNTER):
      return state + action.payload;
    case getType(DECREMENT_COUNTER):
      return state - action.payload;
    default:
      return state;
  }
};

export const app = combineReducers({
  counter
});
