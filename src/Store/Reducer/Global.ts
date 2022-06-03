import { History } from 'history';
import { combineReducers, Reducer } from 'redux';
import Core, { State as CoreState } from './Core';
import { connectRouter, RouterState } from 'connected-react-router';

export type State = {
  Core: CoreState;
  router: RouterState;
} & Record<string, unknown>


const Global = (history: History): Reducer<State> =>
  combineReducers<State>({
    Core,
    router: connectRouter(history),
  });

export default Global;
