import { createReducer } from 'typesafe-actions';
import { Jsc2JfsPingExampleUpdateRoomAction } from '../../../../../Store/Action/Jsc2JfsPingExampleAction';
const Jsc2JfsPingExampleInitialState = {
    data: null
};
export const jsc2JfsPingExampleReducer = createReducer(Jsc2JfsPingExampleInitialState)
    .handleAction(Jsc2JfsPingExampleUpdateRoomAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { data: action.payload });
});
//# sourceMappingURL=Jsc2JfsPingExampleReducer.js.map