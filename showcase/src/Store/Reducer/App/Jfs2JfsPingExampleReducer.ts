import { createReducer } from 'typesafe-actions';
import { Jfs2JfsPingExampleUpdateRoomAction } from 'Action/Jfs2JfsPingExampleAction';

export interface IJfs2JfsPingExampleState {
  data: string;
}

const Jfs2JfsPingExampleInitialState: IJfs2JfsPingExampleState = {
  data: null
};

export const jfs2JfsPingExampleReducer = createReducer(Jfs2JfsPingExampleInitialState)
  .handleAction(Jfs2JfsPingExampleUpdateRoomAction, (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  })
;
