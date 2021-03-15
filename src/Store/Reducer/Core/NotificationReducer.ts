import * as Action from 'Store/Action';
import * as TA from 'typesafe-actions';
import * as Type from 'Types/Notification';
import { ActionType } from 'Types/Redux';

export type State = {
  history: Type.Notification[];
};

const initialState: State = {
  history: []
};

const Notification = TA.createReducer<State, ActionType>(initialState)
  .handleAction(Action.addNotification, (state, action) => ({
    ...state,
    history: [
      action.payload,
      ...state.history
    ]
  }))
  .handleAction(Action.removeNotification, (state, {payload: id}) => ({
    ...state,
    history: state.history.filter(notification => notification.id !== id)
  }))

  .handleAction(Action.removeAllNotifications, (state) => ({
    ...state,
    history: []
  }))
  ;

export default Notification;
