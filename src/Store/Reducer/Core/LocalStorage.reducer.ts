import * as Action from 'Store/Action';
import { createReducer } from 'typesafe-actions';
import { ActionType } from 'Types/Redux';

//@INFO : IMPORTANT !!
//this shall not be the "SINGLE_SOURCE_OF_TRUTH", but rather a derived state from the window.localStorage
export type State = Record<string, string>

const initialState: State = {};

const LocalStorage = createReducer<State, ActionType>(
  initialState,
)
  .handleAction(Action.syncLocalStorageToReducer, (state, { payload }) => ({ ...state, ...payload }))

export default LocalStorage;
