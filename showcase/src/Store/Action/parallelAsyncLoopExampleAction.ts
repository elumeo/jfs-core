import { createAction } from 'typesafe-actions';

export const parallelAsyncLoopExampleRequestAction = (
  createAction('parallelAsyncLoopExample/REQUEST')<string[]>()
);

export const parallelAsyncLoopExampleUpdateAction = (
  createAction('parallelAsyncLoopExample/UPDATE')<number>()
);

export const parallelAsyncLoopExampleSuccessAction = (
  createAction('parallelAsyncLoopExample/SUCCESS')()
);
