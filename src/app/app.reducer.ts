import { combineReducers } from 'redux';
import { Action, getType, AsyncReducerState, asyncReducer } from 'utils';
import { INCREMENT_COUNTER, DECREMENT_COUNTER, FETCH_DATA } from './app.actions';

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

const data = asyncReducer<Object>(FETCH_DATA);

export const app = combineReducers({
  counter,
  data
});

export interface AppState {
  counter: number;
  data: AsyncReducerState<Object>
}
