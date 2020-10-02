import Core from '@elumeo/jfs-core/build/Store/Reducer/Core';
import Jfc from './Jfc';
import App from './App';
declare namespace Global {
    type State = {
        Core: Core.State;
        Jfc: Jfc.State;
        App: App.State;
    };
}
declare const Global: import("redux").Reducer<import("redux").CombinedState<{
    Core: unknown;
    Jfc: import("redux").CombinedState<{
        HelloWorld: import("jfc-hello-world/build/Store/Reducer").default.State;
    }>;
    App: import("redux").CombinedState<{
        parallelAsyncLoopExampleReducer: unknown;
        jsc2JfsPingExampleReducer: import("./App/Jsc2JfsPingExampleReducer").IJsc2JfsPingExampleState;
        currentGameReducer: import("./App/currentGameReducer").ICurrentGameState;
        jfs2JfsPingExampleReducer: import("./App/Jfs2JfsPingExampleReducer").IJfs2JfsPingExampleState;
        configurationReducer: import("./App/Config").default.State;
    }>;
}>, import("redux").Action<any>>;
export default Global;
