import { createAction } from 'typesafe-actions';

export namespace initializeApp {
  export type Payload = {
    allowRobotLogin?: boolean;
    packageJson: object;
    ForceHTTPS?: boolean;
    translations: { [language: string]: { [key: string]: string } };
  }
}

export const initializeApp = (
  createAction('app/INITIALZE')<initializeApp.Payload>()
);
export const appInitialized = createAction('app/INITIALZED')();
