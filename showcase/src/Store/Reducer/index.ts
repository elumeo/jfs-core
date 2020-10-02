import { combineReducers } from 'redux';
import Core from 'Core/Store/Reducer/Core';
import Jfc from './Jfc';
import App from './App';

namespace Global {
  export type State = {
    Core: Core.State;
    Jfc: Jfc.State,
    App: App.State;
  }
}

const Global = combineReducers({
  Core,
  Jfc,
  App
});

export default Global;
