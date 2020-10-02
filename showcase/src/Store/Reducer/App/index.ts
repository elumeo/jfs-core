import { combineReducers } from 'redux';
import { IParallelAsyncLoopExampleState, parallelAsyncLoopExampleReducer } from './parallelAsyncLoopExampleReducer';
import {
  IJsc2JfsPingExampleState,
  jsc2JfsPingExampleReducer
} from './Jsc2JfsPingExampleReducer';
import { currentGameReducer, ICurrentGameState } from './currentGameReducer';
import { IJfs2JfsPingExampleState, jfs2JfsPingExampleReducer } from './Jfs2JfsPingExampleReducer';
import configurationReducer from './Config';

namespace App {
  export type State = {
    parallelAsyncLoopExampleReducer: IParallelAsyncLoopExampleState;
    jsc2JfsPingExampleReducer: IJsc2JfsPingExampleState;
    jfs2JfsPingExampleReducer: IJfs2JfsPingExampleState;
    currentGameReducer: ICurrentGameState;
    configurationReducer: configurationReducer.State;
  };
}

const App = combineReducers({
  parallelAsyncLoopExampleReducer,
  jsc2JfsPingExampleReducer,
  currentGameReducer,
  jfs2JfsPingExampleReducer,
  configurationReducer
});

export default App;
