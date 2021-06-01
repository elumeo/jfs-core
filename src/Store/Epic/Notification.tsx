import React from 'react';
import { filter, switchMap } from 'rxjs/operators';
import { ActionType, Epic } from 'Types/Redux';
import { isActionOf } from 'typesafe-actions';
import * as Actions from 'Store/Action';
import * as Notification from 'Component/Notification';
import { v4 as uuid } from 'uuid'; 
import { of } from 'rxjs';
import { AxiosError } from 'axios';

const showError: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Actions.catchErrorNotification)),
    switchMap(({ payload: { response: { data }}}: ActionType<AxiosError>) => {
      const id = uuid();
      const { error, id: errorId, message } = data
      return of(
        Actions.addNotification({
          id,
          variant: 'error',
          content: (
            <Notification.Card.Default
              notification={{
                id,
                title: errorId,
                subtitle: error,
                content: message,
                variant: 'error'
              }}/>
          ),
          action: (snackbar, id) => (
            <></>
          ),
        })
      )
    })
  )
)

export default showError;
