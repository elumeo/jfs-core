import React from 'react';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as Actions from '../Action';
import * as Notification from '../../Component/Notification';
import uuid from 'uuid';
import { of } from 'rxjs';
const showError = action$ => (action$.pipe(filter(isActionOf(Actions.catchErrorNotification)), switchMap(({ payload: { response: { data } } }) => {
    const id = uuid();
    const { error, id: errorId, message } = data;
    return of(Actions.addNotification({
        id,
        variant: 'error',
        content: (React.createElement(Notification.Card.Default, { notification: {
                id,
                title: errorId,
                subtitle: error,
                content: message,
                variant: 'error'
            } })),
        action: (snackbar, id) => (React.createElement(Notification.Button.Dismiss, { onClick: () => snackbar.closeSnackbar(id) })),
    }));
})));
export default showError;
