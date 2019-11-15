import { createStandardAction } from 'typesafe-actions';

const featureName = 'splitView';

export interface IRegionLoadedPayload {
  regionName: string;
}

export const regionLoaded = createStandardAction(featureName + '/LOADED')<IRegionLoadedPayload>();
export const getRegionFailed = createStandardAction(featureName + '/GET_FAILED')();
