import * as TA from 'typesafe-actions';

export const parallelAsyncLoopExampleRequestAction = (
  TA.createAction('parallelAsyncLoopExample/REQUEST')<string[]>()
);

export const parallelAsyncLoopExampleUpdateAction = (
  TA.createAction('parallelAsyncLoopExample/UPDATE')<number>()
);

export const parallelAsyncLoopExampleSuccessAction = (
  TA.createAction('parallelAsyncLoopExample/SUCCESS')()
);
