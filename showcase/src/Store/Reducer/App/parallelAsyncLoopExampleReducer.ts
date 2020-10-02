import { createReducer, PayloadAction } from 'typesafe-actions';

import {
  parallelAsyncLoopExampleUpdateAction,
  parallelAsyncLoopExampleSuccessAction, parallelAsyncLoopExampleRequestAction
} from 'Action/parallelAsyncLoopExampleAction';

export interface IParallelAsyncLoopExampleState {
  progress: number;
  isRunning: boolean;
  isFinished: boolean;
}

const initialState: IParallelAsyncLoopExampleState = {
  progress: 0,
  isRunning: false,
  isFinished: false
};

export const parallelAsyncLoopExampleReducer = createReducer(initialState)
  .handleAction(parallelAsyncLoopExampleRequestAction, (state: IParallelAsyncLoopExampleState): IParallelAsyncLoopExampleState => (
    {
      ...state,
      progress: 0,
      isRunning: true,
      isFinished: false
    }
  ))
  .handleAction(parallelAsyncLoopExampleUpdateAction, (state: IParallelAsyncLoopExampleState, action: PayloadAction<string, number>): IParallelAsyncLoopExampleState => (
    {
      ...state,
      progress: action.payload
    }
  ))
  .handleAction(parallelAsyncLoopExampleSuccessAction, (state: IParallelAsyncLoopExampleState): IParallelAsyncLoopExampleState => (
    {
      ...state,
      isRunning: false,
      isFinished: true
    }
  ))
;
