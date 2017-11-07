import { Dispatch } from 'react-redux';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';

// Action

export interface Action<T> {
  type: string,
  payload: T
}


// Action Creator

export type ActionDispatcher<T> = (payload?: T) => Action<T | undefined>;

export const actionCreator: <T>(type: string) => ActionDispatcher<T> =
  (type) => (payload?) => ({ type, payload });

export const getType: (action: ActionDispatcher<any>) => string =
  (action) => action().type;


// Async Action Creator

export interface AsyncActionDispatcher<T, U> {
  PENDING: ActionDispatcher<T>;
  SUCCESS: ActionDispatcher<U>;
  FAILURE: ActionDispatcher<string>;
}

export const asyncActionCreator: <T, U>(type: string) => AsyncActionDispatcher<T, U> =
  (type) => ({
    PENDING: actionCreator(type + '_PENDING'),
    SUCCESS: actionCreator(type + '_SUCCESS'),
    FAILURE: actionCreator(type + '_FAILURE')
  });


// Async Action Reducer

export interface AsyncReducerState<T> {
  pending: boolean;
  result: T | undefined;
  error: string | undefined;
}

export type AsyncReducer<T> = (state: AsyncReducerState<T>, action: Action<any>) => AsyncReducerState<T>;

const asyncInitialState: AsyncReducerState<any> = {
  pending: false,
  result: undefined,
  error: undefined
};

export const asyncReducer: <T>(asyncAction: AsyncActionDispatcher<any, T>) => AsyncReducer<T> =
  (asyncAction) =>
    (state = asyncInitialState, action) => {
      switch (action.type) {
        case (getType(asyncAction.PENDING)):
          return {
            ...state,
            pending: true
          };
        case (getType(asyncAction.SUCCESS)):
          return {
            ...state,
            pending: false,
            result: action.payload,
            error: undefined
          };
        case (getType(asyncAction.FAILURE)):
          return {
            ...state,
            pending: false,
            error: action.payload
          };
        default:
          return state;
      }
    };


// Epics

export type Epic = (action$: ActionsObservable<Action<any>>) => Observable<Action<any>>;
