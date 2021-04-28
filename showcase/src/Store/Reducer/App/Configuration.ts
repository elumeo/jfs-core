import * as TA from 'typesafe-actions';
import * as Action from '@elumeo/jfs-core/build/Store/Action';
import * as Type from '@elumeo/jfs-core/build/Types/Configuration';

export type State = {
  config: Type.Configuration;
};

const initialState: State = {
  config: null
};

type ActionType = TA.ActionType<typeof Action>;

const Configuration = TA.createReducer<State, ActionType>(initialState)
  .handleAction(
    Action.configLoadedAction,
    (_state, action) => ({
      config: action.payload.config
    })
  );

export default Configuration;
