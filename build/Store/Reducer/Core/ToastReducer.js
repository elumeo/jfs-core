import { createReducer } from 'typesafe-actions';
import { List } from 'immutable';
import { addToastAction, dismissToastAction, } from '../../Action/ToastAction';
const initialState = {
    toasts: List(),
};
const Toast = createReducer(initialState)
    .handleAction(addToastAction, (state, action) => (Object.assign(Object.assign({}, state), { toasts: state.toasts.unshift(action.payload) })))
    .handleAction(dismissToastAction, (state) => {
    let toastsCount;
    let lastToast, previousToast;
    let toastsAreEqual, messagesAreEqual, translationIdsAreEqual, errorsAreEqual;
    do {
        toastsCount = state.toasts.size;
        if (toastsCount <= 1) {
            state.toasts = state.toasts.shift();
            break;
        }
        lastToast = state.toasts.get(toastsCount - 1);
        previousToast = state.toasts.get(toastsCount - 2);
        state.toasts = state.toasts.shift();
        messagesAreEqual = lastToast.contentMessage != undefined
            && lastToast.contentMessage == previousToast.contentMessage;
        translationIdsAreEqual = lastToast.contentTranslationId != undefined
            && lastToast.contentTranslationId == previousToast.contentTranslationId;
        errorsAreEqual = lastToast.contentError != undefined && previousToast.contentError != undefined
            && lastToast.contentError.toString() == previousToast.contentError.toString();
        toastsAreEqual = messagesAreEqual || translationIdsAreEqual || errorsAreEqual;
    } while (toastsAreEqual);
    return Object.assign(Object.assign({}, state), { toasts: state.toasts });
});
export default Toast;
//# sourceMappingURL=ToastReducer.js.map