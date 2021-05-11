# HOW TO ... ?

## __Work with the state__

We have introduced two hook creators to make working with the state more convinient (see this [link](https://juwelo.atlassian.net/wiki/spaces/EN/pages/1875738628/JFS+Coding+Guide) for more info).

- ```Store/createUseActions```: creates a react hook which lets you access all actions (connected to ```dispatch()```).

- ```Store/createUseSelector```: creates a react hook which lets you access the state infering the return type. In contrast to ```useSelector``` from ```react-redux``` (which is wrapped in our useSelector hook) you will only need to provide the type for the global state __once__ when you call ```createUseSelector```. Also the return type of ```useSelector``` will be inferred.

## __Send a notification__

example usage:

```
// Store/Epic/Notification.ts

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
        Actions.addNotification({                                 <---
          id,                                                     <---
          variant: 'error',                                       <---
          content: (                                              <---
            <Notification.Card.Default                            <---
              notification={{                                     <---
                id,                                               <---
                title: errorId,                                   <---
                subtitle: error,                                  <---
                content: message,                                 <---
                variant: 'error'                                  <---
              }}/>                                                <---
          ),                                                      <---
          action: (snackbar, id) => (                             <---
            <Notification.Button.Dismiss                          <---
              onClick={() => snackbar.closeSnackbar(id)}/>        <---
          ),                                                      <---
        })                                                        <---
      )
    })
  )
)

export default showError;
```