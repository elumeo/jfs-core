import { createStandardAction } from 'typesafe-actions';

export interface IInitializeAppPayload {
  allowRobotLogin?: boolean;
  packageJson: object;
}

export const initializeApp = createStandardAction('app/INITIALZE')<IInitializeAppPayload>();
export const appInitialized = createStandardAction('app/INITIALZED')();
