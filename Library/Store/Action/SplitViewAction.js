import { createStandardAction } from 'typesafe-actions';
const featureName = 'splitView';
export const enableSplitViewAction = createStandardAction(featureName + '/ENABLE')();
export const disableSplitViewAction = createStandardAction(featureName + '/DISABLE')();
//# sourceMappingURL=SplitViewAction.js.map