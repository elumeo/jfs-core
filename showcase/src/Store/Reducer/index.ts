import { combineReducers } from 'redux';
import Core from '@elumeo/jfs-core/build/Store/Reducer/Core';
import Jfc from './Jfc';
import App from './App';

export type State = {
  Core: Core.State;
  Jfc: Jfc.State,
  App: App.State;
}

const Global = combineReducers({
  Core,
  Jfc,
  App
});

export default Global;
