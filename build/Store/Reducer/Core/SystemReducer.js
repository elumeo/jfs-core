import { createReducer } from 'typesafe-actions';
import * as Action from '../../Action';
const initialState = {
    backendRegion: null,
    pending: false
};
const System = createReducer(initialState)
    .handleAction(Action.configLoadedAction, state => (Object.assign(Object.assign({}, state), { pending: true })))
    .handleAction(Action.regionLoaded, (state, action) => (Object.assign(Object.assign({}, state), { backendRegion: action.payload.regionName, pending: false })))
    .handleAction(Action.getRegionFailed, state => (Object.assign(Object.assign({}, state), { pending: false })));
export default System;
//# sourceMappingURL=SystemReducer.js.map