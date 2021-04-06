import * as Action from '../../Action';
import * as TA from 'typesafe-actions';
const initialState = {
    history: [],
    isHistoryOpen: false
};
const Notification = TA.createReducer(initialState)
    .handleAction(Action.addNotification, (state, action) => (Object.assign(Object.assign({}, state), { history: [
        action.payload,
        ...state.history
    ] })))
    .handleAction(Action.removeNotification, (state, { payload: id }) => (Object.assign(Object.assign({}, state), { history: state.history.filter(notification => notification.id !== id) })))
    .handleAction(Action.removeAllNotifications, state => (Object.assign(Object.assign({}, state), { history: [] })))
    .handleAction(Action.setIsNotificationHistoryOpen, (state, { payload }) => (Object.assign(Object.assign({}, state), { isHistoryOpen: payload })));
export default Notification;
//# sourceMappingURL=Notification.js.map