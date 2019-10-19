import { createStandardAction } from 'typesafe-actions';

export const enableSplitViewAction = createStandardAction('splitView/ENABLE')();
export const disableSplitViewAction = createStandardAction('splitView/DISABLE')();
