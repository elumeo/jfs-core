import { createAction } from 'typesafe-actions';

const featureName = 'splitView';

export const enableSplitViewAction = createAction(featureName + '/ENABLE')();
export const disableSplitViewAction = createAction(featureName + '/DISABLE')();
