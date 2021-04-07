import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';

export type State = {
  data: string;
};

export const initialState: State = {
  data: null
};

const currentGameReducer = (
  createReducer(initialState)
    .handleAction(
      Action.currentGameUpdateAction,
      (state, action) => ({
        ...state,
        data: action.payload
      })
    )
);

export default currentGameReducer;
