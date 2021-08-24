import React from 'react';
import { filter, switchMap } from 'rxjs/operators';
import { ActionType, Epic } from 'Types/Redux';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';
import * as Notification from 'Component/Notification';
import { v4 as uuid } from 'uuid';
import { of } from 'rxjs';
import { AxiosError } from 'axios';

const showError: Epic = action$ =>
  action$.pipe(
    filter(isActionOf(Action.addErrorNotification)),
    switchMap(({ payload: { response } }: ActionType<AxiosError>) => {
      const id = uuid();
      const { error, id: errorId, message } = response?.data || {};
      return of(
        Action.addNotification({
          id,
          variant: 'error',
          content: (
            <Notification.Card.Default
              notification={{
                id,
                title: errorId,
                subtitle: error,
                content: message,
                variant: 'error',
              }}
            />
          ),
          action: () => <></>,
        }),
      );
    }),
  );

export default showError;
