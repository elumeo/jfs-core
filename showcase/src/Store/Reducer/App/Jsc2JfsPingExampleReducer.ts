import { createReducer } from 'typesafe-actions';
import { Jsc2JfsPingExampleUpdateRoomAction } from 'Action/Jsc2JfsPingExampleAction';

export interface IJsc2JfsPingExampleState {
  data: string;
}

const Jsc2JfsPingExampleInitialState: IJsc2JfsPingExampleState = {
  data: null
};

export const jsc2JfsPingExampleReducer = createReducer(Jsc2JfsPingExampleInitialState)
  .handleAction(Jsc2JfsPingExampleUpdateRoomAction, (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  })
;
