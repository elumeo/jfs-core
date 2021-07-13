import { createAction } from 'typesafe-actions';
export const regionLoaded = (createAction('region/LOADED')());
export const getRegionFailed = createAction('region/GET_FAILED')();
