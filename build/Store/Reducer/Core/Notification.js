import * as Action from '../../Action';
import * as TA from 'typesafe-actions';
import { v4 } from 'uuid';
const initialState = {
    history: [],
    isHistoryOpen: false
};
const Notification = TA.createReducer(initialState)
    .handleAction(Action.addNotification, (state, action) => {
    var _a, _b;
    return (Object.assign(Object.assign({}, state), { history: [
            Object.assign({ id: (_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : v4() }, action.payload),
            ...state.history
        ] }));
})
    .handleAction(Action.removeNotification, (state, { payload: id }) => (Object.assign(Object.assign({}, state), { history: state.history.filter(notification => notification.id !== id) })))
    .handleAction(Action.removeAllNotifications, state => (Object.assign(Object.assign({}, state), { history: [] })))
    .handleAction(Action.setIsNotificationHistoryOpen, (state, { payload }) => (Object.assign(Object.assign({}, state), { isHistoryOpen: payload })));
export default Notification;
