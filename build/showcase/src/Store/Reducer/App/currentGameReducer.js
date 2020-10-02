import { createReducer } from 'typesafe-actions';
import { currentGameUpdateAction } from '../../../../../Store/Action/currentGameAction';
const initialState = {
    data: null
};
export const currentGameReducer = createReducer(initialState)
    .handleAction(currentGameUpdateAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { data: action.payload });
});
//# sourceMappingURL=currentGameReducer.js.map