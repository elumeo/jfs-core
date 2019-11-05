import { of, concat } from 'rxjs';
import * as rxjs from 'rxjs/operators';
import { sessionIsUnauthorizedAction } from '../action/SessionAction';

// noinspection JSDeprecatedSymbols
export const catchError = callback => rxjs.catchError(error =>
  concat(
    of(
      ...(
        error.response.status === 401
          ? [sessionIsUnauthorizedAction()]
          : []
      ),
    ),
    callback(error)
  )
);