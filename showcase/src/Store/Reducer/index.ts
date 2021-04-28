import { combineReducers } from 'redux';
import Core, { State as CoreState } from '@elumeo/jfs-core/build/Store/Reducer/Core';
import Jfc, { State as JfcState } from './Jfc';
import App, { State as AppState } from './App';

export type State = {
  Core: CoreState;
  Jfc: JfcState,
  App: AppState;
}

const Global = combineReducers<State>({
  Core,
  Jfc,
  App
});

export default Global;
