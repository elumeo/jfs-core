import { createStandardAction } from 'typesafe-actions';

export interface IInitializeAppPayload {
  allowRobotLogin?: boolean;
}

export const initializeApp = createStandardAction('app/INITIALZE')();
export const appInitialized = createStandardAction('app/INITIALZED')();
