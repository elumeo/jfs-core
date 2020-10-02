import { createReducer } from 'typesafe-actions';
import { Jfs2JfsPingExampleUpdateRoomAction } from '../../../../../Store/Action/Jfs2JfsPingExampleAction';
const Jfs2JfsPingExampleInitialState = {
    data: null
};
export const jfs2JfsPingExampleReducer = createReducer(Jfs2JfsPingExampleInitialState)
    .handleAction(Jfs2JfsPingExampleUpdateRoomAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { data: action.payload });
});
//# sourceMappingURL=Jfs2JfsPingExampleReducer.js.map