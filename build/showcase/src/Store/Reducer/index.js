import { combineReducers } from 'redux';
import Core from '@elumeo/jfs-core/build/Store/Reducer/Core';
import Jfc from './Jfc';
import App from './App';
const Global = combineReducers({
    Core,
    Jfc,
    App
});
export default Global;
//# sourceMappingURL=index.js.map