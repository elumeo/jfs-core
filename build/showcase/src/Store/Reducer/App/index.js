import { combineReducers } from 'redux';
import { parallelAsyncLoopExampleReducer } from './parallelAsyncLoopExampleReducer';
import { jsc2JfsPingExampleReducer } from './Jsc2JfsPingExampleReducer';
import { currentGameReducer } from './currentGameReducer';
import { jfs2JfsPingExampleReducer } from './Jfs2JfsPingExampleReducer';
import configurationReducer from './Config';
const App = combineReducers({
    parallelAsyncLoopExampleReducer,
    jsc2JfsPingExampleReducer,
    currentGameReducer,
    jfs2JfsPingExampleReducer,
    configurationReducer
});
export default App;
//# sourceMappingURL=index.js.map