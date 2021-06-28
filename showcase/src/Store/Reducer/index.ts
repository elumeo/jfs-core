import { combineReducers } from 'redux';
import Core, { State as CoreState } from '@elumeo/jfs-core/build/Store/Reducer/Core';
import Jfc, { State as JfcState } from './Jfc';
import App, { State as AppState } from './App';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

export type State = {
  Core: CoreState;
  Jfc: JfcState,
  App: AppState;
  router: RouterState;
}

const Global = (history: History) => combineReducers<State>({
  Core,
  Jfc,
  App,
  router: connectRouter(history)
});

export default Global;
