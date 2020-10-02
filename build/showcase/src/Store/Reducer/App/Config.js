import { createReducer } from 'typesafe-actions';
import { configLoadedAction } from '@elumeo/jfs-core/build/Store/Action/ConfigAction';
const initialState = {
    config: null
};
const Config = createReducer(initialState)
    .handleAction(configLoadedAction, (_state, action) => ({
    config: action.payload.config
}));
export default Config;
//# sourceMappingURL=Config.js.map