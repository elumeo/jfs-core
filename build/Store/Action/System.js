import { createStandardAction } from 'typesafe-actions';
export const regionLoaded = (createStandardAction('region/LOADED')());
export const getRegionFailed = createStandardAction('region/GET_FAILED')();
