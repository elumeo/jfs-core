import { createStandardAction } from 'typesafe-actions';

const featureName = 'app';

export namespace initializeApp {
  export type Payload = {
    allowRobotLogin?: boolean;
    packageJson: object;
    ForceHTTPS?: boolean;
    translations: { [language: string]: { [key: string]: string } };
  }
}

export const initializeApp = (
  createStandardAction(featureName + '/INITIALZE')<initializeApp.Payload>()
);
export const appInitialized = createStandardAction(featureName + '/INITIALZED')();
