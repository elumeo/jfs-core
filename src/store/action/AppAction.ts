import { createStandardAction } from 'typesafe-actions';

export interface IInitializeAppPayload {
  allowRobotLogin?: boolean;
  packageJson: object;
  ForceHTTPS?: boolean;
  translations: { [language: string]: { [key: string]: string } };
}

const featureName = 'app';

export const initializeApp = createStandardAction(featureName + '/INITIALZE')<IInitializeAppPayload>();
export const appInitialized = createStandardAction(featureName + '/INITIALZED')();
