import * as TA from 'typesafe-actions';

export const parallelAsyncLoopExampleRequestAction = (
  TA.createStandardAction(
    'parallelAsyncLoopExample/REQUEST'
  )<string[]>()
);

export const parallelAsyncLoopExampleUpdateAction = (
  TA.createStandardAction(
    'parallelAsyncLoopExample/UPDATE'
  )<number>()
);

export const parallelAsyncLoopExampleSuccessAction = (
  TA.createStandardAction(
    'parallelAsyncLoopExample/SUCCESS'
  )()
);
