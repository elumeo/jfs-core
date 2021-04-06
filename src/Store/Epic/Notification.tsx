import React from 'react';
import { filter, switchMap } from 'rxjs/operators';
import { ActionType, Epic } from 'Types/Redux';
import { isActionOf } from 'typesafe-actions';
import * as Actions from 'Store/Action';
import * as Notification from 'Component/Notification'
import uuid from 'uuid';
import { of } from 'rxjs';
import { AxiosError } from 'axios';

const showError: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Actions.catchErrorNotification)),
    switchMap(({ payload:  { response: {data}}}: ActionType<AxiosError>) => {
      const id = uuid();
      const {error, id: errorId, message} = data
      return of(
        Actions.addNotification({
          id,
          variant: 'error',
          content: (
            <Notification.Card.Default
              id={id}
              title={errorId}
              subtitle={error}
              content={message}
              actions={[]}/>
          ),
          action: (snackbar, id) => (
            <Notification.Button.Dismiss
              onClick={() => snackbar.closeSnackbar(id)}/>
          ),
        })
      )
    })
  )
)

export default showError;
