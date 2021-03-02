import { createStandardAction } from 'typesafe-actions';
const featureName = 'splitView';
export const regionLoaded = (createStandardAction(featureName + '/LOADED')());
export const getRegionFailed = createStandardAction(featureName + '/GET_FAILED')();
//# sourceMappingURL=SystemAction.js.map