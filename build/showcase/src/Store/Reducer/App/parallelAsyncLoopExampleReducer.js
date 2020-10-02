import { createReducer } from 'typesafe-actions';
import { parallelAsyncLoopExampleUpdateAction, parallelAsyncLoopExampleSuccessAction, parallelAsyncLoopExampleRequestAction } from '../../../../../Store/Action/parallelAsyncLoopExampleAction';
const initialState = {
    progress: 0,
    isRunning: false,
    isFinished: false
};
export const parallelAsyncLoopExampleReducer = createReducer(initialState)
    .handleAction(parallelAsyncLoopExampleRequestAction, (state) => (Object.assign(Object.assign({}, state), { progress: 0, isRunning: true, isFinished: false })))
    .handleAction(parallelAsyncLoopExampleUpdateAction, (state, action) => (Object.assign(Object.assign({}, state), { progress: action.payload })))
    .handleAction(parallelAsyncLoopExampleSuccessAction, (state) => (Object.assign(Object.assign({}, state), { isRunning: false, isFinished: true })));
//# sourceMappingURL=parallelAsyncLoopExampleReducer.js.map