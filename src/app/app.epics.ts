import { combineEpics, ActionsObservable } from 'redux-observable';
import { Action, Epic, getType } from 'utils';

const fetchEpic: Epic<void> = (actions$) =>
  actions$.ofType();

export const appEpic = combineEpics(
  fetchEpic
);
