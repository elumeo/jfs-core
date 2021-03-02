import { createStandardAction } from 'typesafe-actions';

export namespace initializeApp {
  export type Payload = {
    allowRobotLogin?: boolean;
    packageJson: object;
    ForceHTTPS?: boolean;
    translations: { [language: string]: { [key: string]: string } };
  }
}

export const initializeApp = (
  createStandardAction('app/INITIALZE')<initializeApp.Payload>()
);
export const appInitialized = createStandardAction('app/INITIALZED')();
