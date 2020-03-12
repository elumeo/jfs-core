import { Epic } from 'redux-observable';
import { EMPTY, merge, of } from 'rxjs';
import { delay, filter, mergeMap } from 'rxjs/operators';
import { RootAction } from '../Action/RootAction';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import {
  addNotificationAction,
  addNotificationWithIdAction,
  dismissAllNotificationsAction,
  dismissNextNotificationAction,
  fadeNotificationOffScreenAction,
  hideNotificationDrawerAction,
  pinNotificationDrawerAction,
  showNotificationDrawerAction,
  toggleNotificationDrawerAction,
  unpinNotificationDrawerAction,
} from '../Action/NotificationAction';
import { disableSplitViewAction, enableSplitViewAction } from '../Action/SplitViewAction';
import { INotification, INotificationContent } from '../Reducer/NotificationReducer';
import { timeToRead } from '../../Component/Notification/NotificationCard';

let notificationIncrementId = 0;

export const addNotificationEpic: Epic<RootAction, RootAction> = (action$) =>
  merge(
    action$.pipe(
      filter(isActionOf(addNotificationAction)),
      mergeMap(({ payload: notification }: PayloadAction<string, INotificationContent>) => of(
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

export const dismissAllNotificationsEpic: Epic<RootAction, RootAction> = (action$, store) =>
  action$.pipe(
    filter(isActionOf([dismissAllNotificationsAction, dismissNextNotificationAction])),
    mergeMap(() => store.value.notificationReducer.notifications.length
      ? of(dismissNextNotificationAction()).pipe(delay(10))
      : EMPTY
    )
  );

export const splitViewEpic: Epic<RootAction, RootAction> = (action$, store) =>
  merge(
    action$.pipe(
      filter(isActionOf(toggleNotificationDrawerAction)),
      mergeMap(() => of(
        store.value.notificationReducer.notificationDrawerVisible
          ? hideNotificationDrawerAction()
          : showNotificationDrawerAction()
      ))
    ),
    action$.pipe(
      filter(isActionOf(showNotificationDrawerAction)),
      mergeMap(() => of(
        store.value.notificationReducer.notificationDrawerPinned
          ? enableSplitViewAction()
          : disableSplitViewAction()
      ))
    ),
    action$.pipe(
      filter(isActionOf(pinNotificationDrawerAction)),
      mergeMap(() => of(
        store.value.notificationReducer.notificationDrawerVisible
          ? enableSplitViewAction()
          : disableSplitViewAction()
      ))
    ),
    action$.pipe(
      filter(isActionOf([hideNotificationDrawerAction, unpinNotificationDrawerAction])),
      mergeMap(() => of(disableSplitViewAction()))
    )
  );
