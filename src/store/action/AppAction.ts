import { createStandardAction } from 'typesafe-actions';

export interface IInitializeAppPayload {
  allowRobotLogin?: boolean;
}

const featureName = 'app';

export const initializeApp = createStandardAction(featureName + '/INITIALZE')<boolean>();
export const appInitialized = createStandardAction(featureName + '/INITIALZED')();
