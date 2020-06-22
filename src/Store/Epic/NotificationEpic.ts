import { Epic, combineEpics, StateObservable } from 'redux-observable';
import { EMPTY, merge, of } from 'rxjs';
import { delay, filter, mergeMap } from 'rxjs/operators';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import {
  addNotificationAction,
  addNotificationWithIdAction,
  fadeNotificationOffScreenAction,
  hideNotificationDrawerAction,
  pinNotificationDrawerAction,
  showNotificationDrawerAction,
  toggleNotificationDrawerAction,
  unpinNotificationDrawerAction,
} from 'Action/NotificationAction';
import { disableSplitViewAction, enableSplitViewAction } from 'Action/SplitViewAction';
import { INotification } from 'Types/Notification';
import { timeToRead } from 'Component/Notification/NotificationCard';
import Global from 'Store/Reducer/Global';

let notificationIncrementId = 0;

const addNotificationEpic: Epic = action$ =>
  merge(
    action$.pipe(
      filter(isActionOf(addNotificationAction)),
      mergeMap(({ payload: notification }) => of(
        addNotificationWithIdAction({
          ...notification,
          id: ++notificationIncrementId,
          count: 1,
          timestamp: new Date(),
          autoHideDelay: !notification.stayOnScreen ? timeToRead(notification) : null
        })
      ))
    ),
    action$.pipe(
      filter(isActionOf(addNotificationWithIdAction)),
      mergeMap(({ payload: notification }: PayloadAction<string, INotification>) =>
        notification.autoHideDelay !== null && notification.autoHideDelay !== undefined
          ? of(fadeNotificationOffScreenAction(notification.id)).pipe(delay(notification.autoHideDelay))
          : EMPTY
      )
    ),
  );

const splitViewEpic: Epic = (action$, store: StateObservable<Global.State>) =>
  merge(
    action$.pipe(
      filter(isActionOf(toggleNotificationDrawerAction)),
      mergeMap(() => of(
        store.value.Core.Notification.notificationDrawerVisible
          ? hideNotificationDrawerAction()
          : showNotificationDrawerAction()
      ))
    ),
    action$.pipe(
      filter(isActionOf(showNotificationDrawerAction)),
      mergeMap(() => of(
        store.value.Core.Notification.notificationDrawerPinned
          ? enableSplitViewAction()
          : disableSplitViewAction()
      ))
    ),
    action$.pipe(
      filter(isActionOf(pinNotificationDrawerAction)),
      mergeMap(() => of(
        store.value.Core.Notification.notificationDrawerVisible
          ? enableSplitViewAction()
          : disableSplitViewAction()
      ))
    ),
    action$.pipe(
      filter(isActionOf([hideNotificationDrawerAction, unpinNotificationDrawerAction])),
      mergeMap(() => of(disableSplitViewAction()))
    )
  );

export default combineEpics(
  addNotificationEpic,
  splitViewEpic
);
