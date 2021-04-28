import { combineReducers } from 'redux';
import ParallelAsyncLoopExample, {
  State as ParallelAsyncLoopExampleState
} from './parallelAsyncLoopExampleReducer';
import Jsc2JfsPingExample, {
  State as Jsc2JfsPingExampleState
} from './Jsc2JfsPingExampleReducer';

import CurrentGame, { State as CurrentGameState } from './currentGameReducer';

import Jfs2JfsPingExample, {
  State as Jfs2JfsPingExampleState
} from './Jfs2JfsPingExampleReducer';

import Configuration, { State as ConfigurationState } from './Configuration';

export type State = {
  ParallelAsyncLoopExample: ParallelAsyncLoopExampleState;
  Jsc2JfsPingExample: Jsc2JfsPingExampleState;
  Jfs2JfsPingExample: Jfs2JfsPingExampleState;
  CurrentGame: CurrentGameState;
  Configuration: ConfigurationState;
};

const App = combineReducers<State>({
  ParallelAsyncLoopExample,
  Jsc2JfsPingExample,
  CurrentGame,
  Jfs2JfsPingExample,
  Configuration
});

export default App;
