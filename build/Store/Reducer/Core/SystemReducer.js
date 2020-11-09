import { createReducer } from 'typesafe-actions';
import { getRegionFailed, regionLoaded } from 'Action/SystemAction';
import { configLoadedAction } from 'Action/ConfigAction';
const initialState = {
    backendRegion: null,
    pending: false
};
const System = createReducer(initialState)
    .handleAction(configLoadedAction, (state) => (Object.assign(Object.assign({}, state), { pending: true })))
    .handleAction(regionLoaded, (state, action) => (Object.assign(Object.assign({}, state), { backendRegion: action.payload, pending: false })))
    .handleAction(getRegionFailed, (state) => (Object.assign(Object.assign({}, state), { pending: false })));
export default System;
//# sourceMappingURL=SystemReducer.js.map