import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';

export type State = {
  data: string;
};

export const initialState: State = {
  data: null
};

const Jfs2JfsPingExample = TA.createReducer<State, TA.ActionType<typeof Action>>(initialState)
  .handleAction(
    Action.Jfs2JfsPingExampleUpdateRoomAction,
    (state, action) => ({
      ...state,
      data: action.payload
    })
  );

export default Jfs2JfsPingExample;
