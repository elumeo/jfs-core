import { createStandardAction } from 'typesafe-actions';

const featureName = 'parallelAsyncLoopExample';

export const parallelAsyncLoopExampleRequestAction = createStandardAction(featureName + '/REQUEST')<string[]>();
export const parallelAsyncLoopExampleUpdateAction = createStandardAction(featureName + '/UPDATE')<number>();
export const parallelAsyncLoopExampleSuccessAction = createStandardAction(featureName + '/SUCCESS')();
