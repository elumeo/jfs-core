import { combineEpics } from 'redux-observable';
import { EMPTY, of, merge } from 'rxjs';
import { delay, filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as Action from '../Action';
import { timeToRead } from '../../Component/Notification/NotificationCard';
let notificationIncrementId = 0;
const addNotificationEpic = action$ => merge(action$.pipe(filter(isActionOf(Action.addNotificationAction)), mergeMap(({ payload: notification }) => of(Action.addNotificationWithIdAction(Object.assign(Object.assign({}, notification), { id: ++notificationIncrementId, count: 1, timestamp: new Date(), autoHideDelay: !notification.stayOnScreen ? timeToRead(notification) : null }))))), action$.pipe(filter(isActionOf(Action.addNotificationWithIdAction)), mergeMap(({ payload: notification }) => notification.autoHideDelay !== null && notification.autoHideDelay !== undefined
    ? of(Action.fadeNotificationOffScreenAction(notification.id)).pipe(delay(notification.autoHideDelay))
    : EMPTY)));
const splitViewEpic = (action$, store) => merge(action$.pipe(filter(isActionOf(Action.toggleNotificationDrawerAction)), mergeMap(() => of(store.value.Core.Notification.notificationDrawerVisible
    ? Action.hideNotificationDrawerAction()
    : Action.showNotificationDrawerAction()))), action$.pipe(filter(isActionOf(Action.showNotificationDrawerAction)), mergeMap(() => of(store.value.Core.Notification.notificationDrawerPinned
    ? Action.enableSplitViewAction()
    : Action.disableSplitViewAction()))), action$.pipe(filter(isActionOf(Action.pinNotificationDrawerAction)), mergeMap(() => of(store.value.Core.Notification.notificationDrawerVisible
    ? Action.enableSplitViewAction()
    : Action.disableSplitViewAction()))), action$.pipe(filter(isActionOf([
    Action.hideNotificationDrawerAction,
    Action.unpinNotificationDrawerAction
])), mergeMap(() => of(Action.disableSplitViewAction()))));
export default combineEpics(addNotificationEpic, splitViewEpic);
//# sourceMappingURL=NotificationEpic.js.map