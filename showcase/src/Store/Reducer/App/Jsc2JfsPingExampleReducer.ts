import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';

export type State = {
  data: string;
}

export const initialState: State = {
  data: null
};

const Jsc2JfsPingExample = TA.createReducer(initialState)
  .handleAction(
    Action.Jsc2JfsPingExampleUpdateRoomAction,
    (state, action) => ({
      ...state,
      data: action.payload
    })
  );

export default Jsc2JfsPingExample;
