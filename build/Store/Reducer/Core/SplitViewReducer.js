import { createReducer } from 'typesafe-actions';
import { disableSplitViewAction, enableSplitViewAction } from '../../Action/SplitViewAction';
const initialState = {
    splitViewEnabled: false
};
const SplitView = createReducer(initialState)
    .handleAction(enableSplitViewAction, (state) => (Object.assign(Object.assign({}, state), { splitViewEnabled: true })))
    .handleAction(disableSplitViewAction, (state) => (Object.assign(Object.assign({}, state), { splitViewEnabled: false })));
export default SplitView;
//# sourceMappingURL=SplitViewReducer.js.map