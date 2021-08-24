import * as TA from 'typesafe-actions';
export const initializeApp = TA.createAction('app/INITIALZE')();
export const appInitialized = TA.createAction('app/INITIALZED')();
