import { of, concat } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { logout } from '../Action/SessionAction';

export default errorHandler => catchError(error =>
  concat(
    of(
      ...(
        error && error.response && error.response.status === 401
          ? [logout({})]
          : []
      ),
    ),
    errorHandler(error)
  )
)
