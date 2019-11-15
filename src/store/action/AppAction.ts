import { createAction } from 'typesafe-actions';

export interface IInitializeAppPayload {
  allowRobotLogin?: boolean;
}

const featureName = 'app';

export const initializeApp = createAction(featureName + '/INITIALZE')<boolean>();
export const appInitialized = createAction(featureName + '/INITIALZED')();
