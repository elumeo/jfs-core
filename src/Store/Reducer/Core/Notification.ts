import * as Action from 'Store/Action';
import * as TA from 'typesafe-actions';
import * as Type from 'Types/Notification';
import { ActionType } from 'Types/Redux';
import { v4 } from 'uuid';

export type State = {
  history: Type.Notification[];
  isHistoryOpen: boolean;
};

const initialState: State = {
  history: [],
  isHistoryOpen: false,
};

const Notification = TA.createReducer<State, ActionType>(initialState)
  .handleAction(Action.addNotification, (state, action) => ({
    ...state,
    history: [
      { id: action.payload?.id ?? v4(), timeStamp: action.payload?.timeStamp ?? new Date(), ...action.payload },
      ...state.history,
    ],
  }))
  .handleAction(Action.removeNotification, (state, { payload: id }) => ({
    ...state,
    history: state.history.filter(notification => notification.id !== id),
  }))
  .handleAction(Action.removeNotificationGroup, (state, { payload: group }): State => ({
    ...state,
    history: state.history.filter(notification => notification.group != group)
  }))

  .handleAction(Action.removeAllNotifications, state => ({
    ...state,
    history: [],
  }))
  .handleAction(Action.setIsNotificationHistoryOpen, (state, { payload }) => ({
    ...state,
    isHistoryOpen: payload,
  }));

export default Notification;
