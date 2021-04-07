import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';

export type State = {
  data: string;
};

export const initialState: State = {
  data: null
};

const Jfs2JfsPingExample = (
  createReducer(initialState)
    .handleAction(
      Action.Jfs2JfsPingExampleUpdateRoomAction,
      (state, action) => ({
        ...state,
        data: action.payload
      })
    )
);

export default Jfs2JfsPingExample;
