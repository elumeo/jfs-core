import { createAction } from 'typesafe-actions';

const featureName = 'splitView';

export interface IRegionLoadedPayload {
  regionName: string;
}

export const regionLoaded = createAction(featureName + '/LOADED')<IRegionLoadedPayload>();
export const getRegionFailed = createAction(featureName + '/GET_FAILED')();
