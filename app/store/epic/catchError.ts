import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { sessionIsUnauthorizedAction } from '../action/SessionAction';

export default errorHandler => catchError(error =>
  of(
    ...(
      error.response.status === 401
        ? [sessionIsUnauthorizedAction()]
        : []
    ),
    ...errorHandler(error)
  )
)
