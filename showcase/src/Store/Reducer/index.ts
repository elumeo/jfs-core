import { combineReducers } from 'redux';
import Core, { State as CoreState } from '@elumeo/jfs-core/build/Store/Reducer/Core';
import Jfc from './Jfc';
import App, { State as AppState } from './App';

export type State = {
  Core: CoreState;
  Jfc: Jfc.State,
  App: AppState;
}

const Global = combineReducers<State>({
  Core,
  Jfc,
  App
});

export default Global;
