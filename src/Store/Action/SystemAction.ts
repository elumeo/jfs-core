import { createStandardAction } from 'typesafe-actions';

export namespace regionLoaded {
  export type Payload = {
    regionName: string;
  }
}

export const regionLoaded = (
  createStandardAction('region/LOADED')<regionLoaded.Payload>()
);
export const getRegionFailed = createStandardAction('region/GET_FAILED')();
