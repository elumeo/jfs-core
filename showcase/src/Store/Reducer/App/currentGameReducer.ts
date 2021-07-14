import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import JSCApi from 'API/JSC';

export type State = {
  data: JSCApi.DTO.Game.IGameDTO;
};

export const initialState: State = {
  data: null
};

const currentGameReducer = TA.createReducer<State, TA.ActionType<typeof Action>>(initialState)
  .handleAction(
    Action.currentGameUpdateAction,
    (state, action) => ({
      ...state,
      data: action.payload
    })
  );

export default currentGameReducer;
