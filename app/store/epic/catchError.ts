import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { sessionIsUnauthorizedAction } from '../action/SessionAction';

export default (errorHandler) => catchError(error => {
  return of(
    error.response.status === 401 && sessionIsUnauthorizedAction(),
    errorHandler(error)
  );
})
