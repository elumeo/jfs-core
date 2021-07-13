import { createAction } from 'typesafe-actions';
export const initializeApp = (createAction('app/INITIALZE')());
export const appInitialized = createAction('app/INITIALZED')();
