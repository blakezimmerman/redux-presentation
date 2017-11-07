// Create root reducer

import { combineReducers } from 'redux';
import { LocationState } from 'redux-first-router';
import { routerReducer as location } from 'router/router';
import { app, AppState } from 'app/app.reducer';

export interface State {
  location: LocationState;
  app: AppState;
}

const rootReducer = combineReducers({
  location,
  app
});


// Create epic middleware

import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { appEpic } from 'app/app.epics';

const rootEpic = combineEpics(appEpic);

const epicMiddleware = createEpicMiddleware(rootEpic);


// Create store

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerEnhancer } from 'router/router';

const store = createStore(
  rootReducer,
  compose(
    routerEnhancer,
    applyMiddleware(epicMiddleware, routerMiddleware)
  )
);


// Render app

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'app/app';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
