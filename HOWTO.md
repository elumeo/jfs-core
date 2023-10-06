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

import { of } from 'rxjs';
import { AxiosError } from 'axios';

const showError: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Actions.catchErrorNotification)),
    switchMap(({ payload: { response: { data }}}: ActionType<AxiosError>) => {
      const { error, id: errorId, message } = data
      return of(
        Actions.addNotification({                                 <---
          variant: 'error',                                       <---
          content: (                                              <---
            <Notification.Card.Default                            <---
              notification={{                                     <---
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



## __Use the DebugButton__
### required:
```JSON
//config.json
  "DebugMode": true,
  "DebugCallstackLimit": 300
```
### summary:
The DebugButton Component offers a simple API consisting of 4 properties described in `Types/Debug/Logger` (`actions`, `mapper`, `selector`, `filter`),
which can be passed down from the CallerApp.
When mounting, the component will register the actions in an epic and pipe them : actions->filter->mapper and finally log the result of the mapper function in the debug callstack.
When clicking, a Dialog with a text-input to enter additional _description_ will appear. After submitting the result of _useSelector(`selector`)_ and the _description_ will be sent to mattermost. Make sure to include the `Global.Core.Debug.callstack` state to the selector, if you want to use it. 

### example: 
```tsx
import DebugButton from 'Core/Component/Button/DebugButton'
const App: React.FC = () => {
  return (
    <DebugButton
      actions={[addNotification]}
      mapper={action => action.payload ?? action.type}
      filter={action => action.payload?.group === 'important'}
      selector={createSelector(
        Global,
        global => pick(global, 'Core.Debug' )
      )}
    />
  )
}
```
