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
  }));

export default Notification;
