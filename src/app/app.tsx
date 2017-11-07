import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { State } from 'index';
import { Action } from 'utils';
import { LocationState } from 'redux-first-router';
import { AppState } from 'app/app.reducer';
import * as appStyles from './app.styles';
import { incrementCounter, decrementCounter } from './app.actions';

interface Props {
  location: LocationState,
  app: AppState,
  increment: (num: number) => Action<number>,
  decrement: (num: number) => Action<number>
}

const App = (props: Props) => {
  const incrementByTwo = () => props.increment(2);
  const decrementByTwo = () => props.decrement(2);

  return (
    <div>
      <div>Count by twos!</div>
      <button onClick={incrementByTwo}>+</button>
      <div>Current Value: {props.app.counter}</div>
      <button onClick={decrementByTwo}>-</button>
    </div>
  )
};

const mapStateToProps = (state: State) => ({
  location: state.location,
  app: state.app
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  increment: (num: number) => dispatch(incrementCounter(num)),
  decrement: (num: number) => dispatch(decrementCounter(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
