import { of, concat } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { sessionIsUnauthorizedAction } from '../action/SessionAction';

export default errorHandler => catchError(error =>
  concat(
    of(
      ...(
        error.response.status === 401
          ? [sessionIsUnauthorizedAction()]
          : []
      ),
    ),
    errorHandler(error)
  )
)
