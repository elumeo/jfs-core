import { createStandardAction } from 'typesafe-actions';

export const getRegion = createStandardAction('region/GET')();

export interface IRegionLoadedPayload {
  regionName: string;
}

export const regionLoaded = createStandardAction('region/LOADED')<IRegionLoadedPayload>();
export const getRegionFailed = createStandardAction('region/GET_FAILED')();
