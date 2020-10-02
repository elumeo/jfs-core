import { createStandardAction } from 'typesafe-actions';
const featureName = 'parallelAsyncLoopExample';
export const parallelAsyncLoopExampleRequestAction = createStandardAction(featureName + '/REQUEST')();
export const parallelAsyncLoopExampleUpdateAction = createStandardAction(featureName + '/UPDATE')();
export const parallelAsyncLoopExampleSuccessAction = createStandardAction(featureName + '/SUCCESS')();
//# sourceMappingURL=parallelAsyncLoopExampleAction.js.map