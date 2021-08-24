import * as Action from '../../Action';
import { createReducer } from 'typesafe-actions';
const initialState = {
    config: null,
    pending: false,
    loaded: false,
};
const Configuration = createReducer(initialState)
    .handleAction(Action.loadConfig, state => (Object.assign(Object.assign({}, state), { pending: true, loaded: false })))
    .handleAction(Action.configLoadedAction, (state, action) => (Object.assign(Object.assign(Object.assign({}, state), action.payload), { pending: false, loaded: true })));
export default Configuration;
