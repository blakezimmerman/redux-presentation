import { combineEpics, ActionsObservable } from 'redux-observable';
import { debounceTime, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { Action, Epic, getType } from 'utils';
import { FETCH_DATA } from './app.actions';

const fetchDataEpic: Epic = (actions$) =>
  actions$.ofType(getType(FETCH_DATA.PENDING)).pipe(
    debounceTime(500),
    mergeMap((action) =>
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => FETCH_DATA.SUCCESS(response.data))
        .catch((err) => FETCH_DATA.FAILURE(err.response.data))
    )
  );

export const appEpic = combineEpics(
  fetchDataEpic
);
