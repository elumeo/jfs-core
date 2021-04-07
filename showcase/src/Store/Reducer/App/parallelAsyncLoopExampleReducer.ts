import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';

export type State = {
  progress: number;
  isRunning: boolean;
  isFinished: boolean;
};

export const initialState: State = {
  progress: 0,
  isRunning: false,
  isFinished: false
};

const ParallelAsyncLoopExample = (
  createReducer(initialState)
    .handleAction(
      Action.parallelAsyncLoopExampleRequestAction,
      state => ({
        ...state,
        progress: 0,
        isRunning: true,
        isFinished: false
      })
    )
    .handleAction(
      Action.parallelAsyncLoopExampleUpdateAction,
      (state, action) => ({
        ...state,
        progress: action.payload
      })
    )
    .handleAction(
      Action.parallelAsyncLoopExampleSuccessAction,
      state => ({
        ...state,
        isRunning: false,
        isFinished: true
      })
    )
);

export default ParallelAsyncLoopExample;
