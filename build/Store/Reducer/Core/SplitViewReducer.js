import { createReducer } from 'typesafe-actions';
import * as Action from '../../Action';
const initialState = {
    splitViewEnabled: false
};
const SplitView = createReducer(initialState)
    .handleAction(Action.enableSplitViewAction, state => (Object.assign(Object.assign({}, state), { splitViewEnabled: true })))
    .handleAction(Action.disableSplitViewAction, state => (Object.assign(Object.assign({}, state), { splitViewEnabled: false })));
export default SplitView;
//# sourceMappingURL=SplitViewReducer.js.map