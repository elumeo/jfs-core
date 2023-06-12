import * as TA from 'typesafe-actions';

export const initializeApp = TA.createAction('app/INITIALZE')<{
  packageJson: Record<string, unknown>;
  ForceHTTPS?: boolean;
  translations: Record<string, Record<string, string>>;
}>();

export const appInitialized = TA.createAction('app/INITIALZED')();
