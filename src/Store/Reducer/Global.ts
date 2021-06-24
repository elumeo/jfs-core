import { History } from 'history';
import { combineReducers } from 'redux';
import Core, { State as CoreState } from './Core';
import { connectRouter, RouterState } from 'connected-react-router'

export type State = {
  Core: CoreState;
  router: RouterState
};

const Global = (history: History) => combineReducers<State>({ Core, router: connectRouter(history) });

export default Global;