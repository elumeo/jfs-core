import { createReducer } from 'typesafe-actions';
import * as Action from '../../Action';
const initialState = {
    toasts: []
};
const equal = (first, second) => (first.contentMessage !== undefined &&
    first.contentMessage === second.contentMessage ||
    first.contentTranslationId !== undefined &&
        first.contentTranslationId === second.contentTranslationId ||
    first.contentError !== undefined &&
        second.contentError !== undefined &&
        first.contentError.toString() === second.contentError.toString());
const Toast = createReducer(initialState)
    .handleAction(Action.addToastAction, (state, action) => (Object.assign(Object.assign({}, state), { toasts: (state.toasts.some(toast => equal(toast, action.payload))
        ? state.toasts
        : [action.payload, ...state.toasts]) })))
    .handleAction(Action.dismissToastAction, state => (Object.assign(Object.assign({}, state), { toasts: (state.toasts.length
        ? state.toasts.slice(1)
        : []) })));
export default Toast;
