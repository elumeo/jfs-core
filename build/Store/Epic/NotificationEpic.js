import { combineEpics } from 'redux-observable';
import { EMPTY, merge, of } from 'rxjs';
import { delay, filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { addNotificationAction, addNotificationWithIdAction, fadeNotificationOffScreenAction, hideNotificationDrawerAction, pinNotificationDrawerAction, showNotificationDrawerAction, toggleNotificationDrawerAction, unpinNotificationDrawerAction, } from '../Action/NotificationAction';
import { disableSplitViewAction, enableSplitViewAction } from '../Action/SplitViewAction';
import { timeToRead } from '../../Component/Notification/NotificationCard';
let notificationIncrementId = 0;
const addNotificationEpic = action$ => merge(action$.pipe(filter(isActionOf(addNotificationAction)), mergeMap(({ payload: notification }) => of(addNotificationWithIdAction(Object.assign(Object.assign({}, notification), { id: ++notificationIncrementId, count: 1, timestamp: new Date(), autoHideDelay: !notification.stayOnScreen ? timeToRead(notification) : null }))))), action$.pipe(filter(isActionOf(addNotificationWithIdAction)), mergeMap(({ payload: notification }) => notification.autoHideDelay !== null && notification.autoHideDelay !== undefined
    ? of(fadeNotificationOffScreenAction(notification.id)).pipe(delay(notification.autoHideDelay))
    : EMPTY)));
const splitViewEpic = (action$, store) => merge(action$.pipe(filter(isActionOf(toggleNotificationDrawerAction)), mergeMap(() => of(store.value.Core.Notification.notificationDrawerVisible
    ? hideNotificationDrawerAction()
    : showNotificationDrawerAction()))), action$.pipe(filter(isActionOf(showNotificationDrawerAction)), mergeMap(() => of(store.value.Core.Notification.notificationDrawerPinned
    ? enableSplitViewAction()
    : disableSplitViewAction()))), action$.pipe(filter(isActionOf(pinNotificationDrawerAction)), mergeMap(() => of(store.value.Core.Notification.notificationDrawerVisible
    ? enableSplitViewAction()
    : disableSplitViewAction()))), action$.pipe(filter(isActionOf([hideNotificationDrawerAction, unpinNotificationDrawerAction])), mergeMap(() => of(disableSplitViewAction()))));
export default combineEpics(addNotificationEpic, splitViewEpic);
//# sourceMappingURL=NotificationEpic.js.map