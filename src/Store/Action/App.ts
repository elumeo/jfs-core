import { createAction } from 'typesafe-actions';

export const initializeApp = createAction('app/INITIALZE')<{
  allowRobotLogin?: boolean;
  packageJson: Record<string, unknown>;
  ForceHTTPS?: boolean;
  translations: { [language: string]: { [key: string]: string } };
}>();
export const appInitialized = createAction('app/INITIALZED')();
