import { IParallelAsyncLoopExampleState } from './parallelAsyncLoopExampleReducer';
import { IJsc2JfsPingExampleState } from './Jsc2JfsPingExampleReducer';
import { ICurrentGameState } from './currentGameReducer';
import { IJfs2JfsPingExampleState } from './Jfs2JfsPingExampleReducer';
import configurationReducer from './Config';
declare namespace App {
    type State = {
        parallelAsyncLoopExampleReducer: IParallelAsyncLoopExampleState;
        jsc2JfsPingExampleReducer: IJsc2JfsPingExampleState;
        jfs2JfsPingExampleReducer: IJfs2JfsPingExampleState;
        currentGameReducer: ICurrentGameState;
        configurationReducer: configurationReducer.State;
    };
}
declare const App: import("redux").Reducer<import("redux").CombinedState<{
    parallelAsyncLoopExampleReducer: unknown;
    jsc2JfsPingExampleReducer: IJsc2JfsPingExampleState;
    currentGameReducer: ICurrentGameState;
    jfs2JfsPingExampleReducer: IJfs2JfsPingExampleState;
    configurationReducer: configurationReducer.State;
}>, import("redux").Action<any>>;
export default App;
