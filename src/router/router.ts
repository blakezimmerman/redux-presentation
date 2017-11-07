import { connectRoutes } from 'redux-first-router';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const routesMap = {
  HOME: '/',
  PAGE_ONE: '/page-one',
  PAGE_TWO: '/page-two'
};

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

export { reducer as routerReducer };
export { middleware as routerMiddleware };
export { enhancer as routerEnhancer };
