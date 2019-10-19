import { Epic } from 'redux-observable';
import { EMPTY, merge, of } from 'rxjs';
import { delay, filter, mergeMap } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import { isActionOf } from 'typesafe-actions';
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
} from "../action/NotificationAction";
import { disableSplitViewAction, enableSplitViewAction } from "../action/SplitViewAction";

let notificationIncrementId = 0;

// noinspection JSUnusedGlobalSymbols
export const addNotificationEpic: Epic<RootAction, RootAction> = (action$) =>
  merge(
    action$.pipe(
      filter(isActionOf(addNotificationAction)),
      mergeMap((action) =>
        of(addNotificationWithIdAction({ ...action.payload, id: ++notificationIncrementId }))
      )
    ),
    action$.pipe(
      filter(isActionOf(addNotificationWithIdAction)),
      mergeMap((action) =>
        of(fadeNotificationOffScreenAction(action.payload.id)).pipe(delay(3000))
      )
    ),
  );

// noinspection JSUnusedGlobalSymbols
export const dismissAllNotificationsEpic: Epic<RootAction, RootAction> = (action$, store) =>
  action$.pipe(
    filter(isActionOf([dismissAllNotificationsAction, dismissNextNotificationAction])),
    mergeMap(() => store.value.notificationReducer.notifications.length
      ? of(dismissNextNotificationAction()).pipe(delay(10))
      : EMPTY
    )
  );

// noinspection JSUnusedGlobalSymbols
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
