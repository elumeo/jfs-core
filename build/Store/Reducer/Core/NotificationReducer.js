import * as Action from '../../Action';
import * as TA from 'typesafe-actions';
import { getPlainText } from '../../../Component/Notification/NotificationCard';
import { NOTIFICATION_LIMIT } from '../../../Constant/Notification';
const initialState = {
    notifications: [],
    dismissAnimationClassName: 'disappear',
    notificationDrawerVisible: false,
    notificationDrawerPinned: false,
};
const Notification = TA.createReducer(initialState)
    .handleAction(Action.dismissNotificationAction, (state, { payload: id }) => {
    const notifications = state.notifications.filter(n => n.id != id);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return Object.assign(Object.assign({}, state), { notifications, dismissAnimationClassName: 'disappear', notificationDrawerVisible });
})
    .handleAction(Action.dismissNotificationByGroupIdAction, (state, { payload: groupId }) => {
    const notifications = state.notifications.filter(n => n.groupId != groupId);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return Object.assign(Object.assign({}, state), { notifications, dismissAnimationClassName: 'disappear', notificationDrawerVisible });
})
    .handleAction(Action.dismissAllNotificationsAction, state => (Object.assign(Object.assign({}, state), { dismissAnimationClassName: 'disappear', notifications: state.notifications.filter(n => n.dismissButtonVisible === false) })))
    .handleAction(Action.showNotificationDrawerAction, state => (Object.assign(Object.assign({}, state), { notificationDrawerVisible: true })))
    .handleAction(Action.hideNotificationDrawerAction, state => (Object.assign(Object.assign({}, state), { notificationDrawerVisible: false })))
    .handleAction(Action.pinNotificationDrawerAction, state => (Object.assign(Object.assign({}, state), { notificationDrawerPinned: true })))
    .handleAction(Action.unpinNotificationDrawerAction, state => (Object.assign(Object.assign({}, state), { notificationDrawerPinned: false })))
    .handleAction(Action.addNotificationWithIdAction, (state, { payload: notification }) => {
    const notifications = [...state.notifications];
    const isDuplicate = notifications.length > 0 && getPlainText(notification) == getPlainText(notifications[0]);
    if (isDuplicate) {
        notification.count = notifications[0].count + 1;
        notification.onScreen = true;
        notifications[0] = notification;
        return Object.assign(Object.assign({}, state), { notifications });
    }
    else {
        if (notifications.length > NOTIFICATION_LIMIT) {
            notifications.pop();
        }
        return Object.assign(Object.assign({}, state), { notifications: [Object.assign(Object.assign({}, notification), { onScreen: true }), ...state.notifications] });
    }
})
    // @ts-ignore
    .handleAction(Action.fadeNotificationOffScreenAction, (state, { payload: id }) => (Object.assign(Object.assign({}, state), { dismissAnimationClassName: 'fadeout', notifications: state.notifications.map(n => (Object.assign(Object.assign({}, n), { onScreen: n.id == id ? false : n.onScreen }))) })));
export default Notification;
//# sourceMappingURL=NotificationReducer.js.map