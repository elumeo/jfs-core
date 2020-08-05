import { combineReducers } from 'redux';
import Core from './Core';

namespace Global {
  export type State = {
    Core: Core.State;
  }
}

const Global = combineReducers<Global.State>({
  Core,
});

export default Global;
