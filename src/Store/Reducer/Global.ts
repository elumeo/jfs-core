import { combineReducers, Reducer } from 'redux';
import Core, { State as CoreState } from './Core';
import { createRouterReducer, ReduxRouterState } from '@lagunovsky/redux-react-router'
import { history } from 'Store/Middleware';
export type State = {
  Core: CoreState;
  router: ReduxRouterState;
};

const Global: Reducer<State> =
  combineReducers<State>({
    Core,
    router: createRouterReducer(history),
  });

export default Global;
