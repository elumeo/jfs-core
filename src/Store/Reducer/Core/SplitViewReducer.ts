import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';
import { ActionType } from 'Types/Redux';

export type State = {
  splitViewEnabled: boolean;
}

const initialState: State = {
  splitViewEnabled: false
};

const SplitView = createReducer<State, ActionType>(initialState)
  .handleAction(Action.enableSplitViewAction, state => (
    {...state, splitViewEnabled: true}
  ))
  .handleAction(Action.disableSplitViewAction, state => (
    {...state, splitViewEnabled: false}
  ));

export default SplitView;
