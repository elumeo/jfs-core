import { createStandardAction } from 'typesafe-actions';

const featureName = 'splitView';

export namespace regionLoaded {
  export type Payload = {
    regionName: string;
  }
}

export const regionLoaded = (
  createStandardAction(featureName + '/LOADED')<regionLoaded.Payload>()
);
export const getRegionFailed = createStandardAction(featureName + '/GET_FAILED')();
