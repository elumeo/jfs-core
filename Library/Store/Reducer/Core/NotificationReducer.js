import { addNotificationWithIdAction, dismissAllNotificationsAction, dismissNotificationAction, dismissNotificationByGroupIdAction, fadeNotificationOffScreenAction, hideNotificationDrawerAction, pinNotificationDrawerAction, showNotificationDrawerAction, unpinNotificationDrawerAction } from '../../Action/NotificationAction';
import { createReducer } from 'typesafe-actions';
import { getPlainText } from '../../../Component/Notification/NotificationCard';
import { NOTIFICATION_LIMIT } from '../../../Types/Notification';
const initialState = {
    notifications: [],
    dismissAnimationClassName: 'disappear',
    notificationDrawerVisible: false,
    notificationDrawerPinned: false,
};
const Notification = createReducer(initialState)
    .handleAction(addNotificationWithIdAction, (state, { payload: notification }) => {
    const notifications = [...state.notifications];
    const isDuplicate = notifications.length > 0 && getPlainText(notification) == getPlainText(notifications[0]);
    if (isDuplicate) {
        notifications[0].id = notification.id;
        notifications[0].count++;
        notifications[0].timestamp = new Date();
        notifications[0].onScreen = true;
        return Object.assign(Object.assign({}, state), { notifications });
    }
    else {
        if (notifications.length > NOTIFICATION_LIMIT) {
            notifications.pop();
        }
        return Object.assign(Object.assign({}, state), { notifications: [Object.assign(Object.assign({}, notification), { onScreen: true }), ...state.notifications] });
    }
})
    .handleAction(fadeNotificationOffScreenAction, (state, { payload: id }) => (Object.assign(Object.assign({}, state), { dismissAnimationClassName: 'fadeout', notifications: state.notifications.map(n => (Object.assign(Object.assign({}, n), { onScreen: n.id == id ? false : n.onScreen }))) })))
    .handleAction(dismissNotificationAction, (state, { payload: id }) => {
    const notifications = state.notifications.filter(n => n.id != id);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return Object.assign(Object.assign({}, state), { notifications, dismissAnimationClassName: 'disappear', notificationDrawerVisible });
})
    .handleAction(dismissNotificationByGroupIdAction, (state, { payload: groupId }) => {
    const notifications = state.notifications.filter(n => n.groupId != groupId);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return Object.assign(Object.assign({}, state), { notifications, dismissAnimationClassName: 'disappear', notificationDrawerVisible });
})
    .handleAction(dismissAllNotificationsAction, (state) => (Object.assign(Object.assign({}, state), { dismissAnimationClassName: 'disappear', notifications: state.notifications.filter(n => n.dismissButtonVisible === false) })))
    .handleAction(showNotificationDrawerAction, (state) => (Object.assign(Object.assign({}, state), { notificationDrawerVisible: true })))
    .handleAction(hideNotificationDrawerAction, (state) => (Object.assign(Object.assign({}, state), { notificationDrawerVisible: false })))
    .handleAction(pinNotificationDrawerAction, (state) => (Object.assign(Object.assign({}, state), { notificationDrawerPinned: true })))
    .handleAction(unpinNotificationDrawerAction, (state) => (Object.assign(Object.assign({}, state), { notificationDrawerPinned: false })));
export default Notification;
//# sourceMappingURL=NotificationReducer.js.map