import { createAction } from 'typesafe-actions';

export namespace regionLoaded {
  export type Payload = {
    regionName: string;
  }
}

export const regionLoaded = (
  createAction('region/LOADED')<regionLoaded.Payload>()
);
export const getRegionFailed = createAction('region/GET_FAILED')();
