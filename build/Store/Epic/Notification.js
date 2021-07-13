import React from 'react';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as Action from '../Action';
import * as Notification from '../../Component/Notification';
import { v4 as uuid } from 'uuid';
import { of } from 'rxjs';
const showError = (action$, state$) => (action$.pipe(filter(isActionOf(Action.addErrorNotification)), switchMap(({ payload: { response } }) => {
    const id = uuid();
    const { error, id: errorId, message } = (response === null || response === void 0 ? void 0 : response.data) || {};
    return of(Action.addNotification({
        id,
        variant: 'error',
        content: (React.createElement(Notification.Card.Default, { notification: {
                id,
                title: errorId,
                subtitle: error,
                content: message,
                variant: 'error'
            } })),
        action: (snackbar, id) => (React.createElement(React.Fragment, null)),
    }));
})));
export default showError;
