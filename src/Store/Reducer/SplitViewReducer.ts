import { createReducer } from 'typesafe-actions';
import { disableSplitViewAction, enableSplitViewAction } from '../Action/SplitViewAction';

export interface ISplitViewReducerState {
  splitViewEnabled: boolean;
}

const initialState = {
  splitViewEnabled: false
};

export const splitViewReducer = createReducer(initialState)
  .handleAction(enableSplitViewAction, (state): ISplitViewReducerState => (
    {...state, splitViewEnabled: true}
  ))
  .handleAction(disableSplitViewAction, (state): ISplitViewReducerState => (
    {...state, splitViewEnabled: false}
  ))
;
