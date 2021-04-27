# __jfs-core 10__

- [Material UI](https://material-ui.com) instead of react-md
  - CSS-in-JS instead of SCSS
- Up to date webpack 5 configuration
  - no doubled config.json needed anymore
- Refined project structure & simpler apis
  - Core components as compound components

## __Material UI__

### __Installed packages__

- @material-ui/core

Collection of the majority of material ui components.

- @material-ui/data-grid

Extendable data table and data grid.

- @material-ui/icons

Material icons as SVGIcon components.

- @material-ui/lab

Experimental components, which can be used. You should keep in mind that their API might change in the future.

- @material-ui/pickers

More advanced datepickers and timepickers.

### __Imports__

when importing from ```@material-ui/core``` or ```@material-ui/icons``` you should consider [these recommendations](https://material-ui.com/guides/minimizing-bundle-size/#main-content):

__Example__:
- Import in an app: ```import { TextField } from '@material-ui/core'```
- Import in a library (e. g. jfs-core or jfc-component): ```import TextField from '@material-ui/core/TextField'```

### __CSS-in-JS__

## __Webpack__

We have updated our webpack version. Read more about webpack 5 [here](https://webpack.js.org/blog/2020-10-10-webpack-5-release/).

### __Location of config files__



### __Handling config.json.dist & dist/config.json__

Instead of maintaining two config files you can now simply maintain only one file:

- ```/config.dist.json```

It will be copied to ```/dist/config.json``` automatically when running the dev-server or creating a production build.

Changes made to the config file will cause a reload in the browser while developing.

All scripts that need config data will read from ```/config.dist.json```.

## __Core components__

Here is an example how to use the new [compound components](https://blog.bitsrc.io/understanding-compound-components-in-react-23c4b84535b5)

```
<App.Container
  store={store}
  translations={Translations}
  packageJson={packageJson}>
  <Overlay>
    <Header.Toolbar
      left={<Header.BackendIndicator/>}
      right={
        <>
          <Settings.Button/>
          <Notification.Button.Show/>
        </>
      }/>
    <Navigation/>
    <Login.Dialog/>
    <Logout.Dialog/>
    <Settings.Dialog>
      <Language.Settings/>
    </Settings.Dialog>
    <Snackbar/>
  </Overlay>
  <Routes/>
</App.Container>
```

## __Project structure__

### Aliases

Here is the relevant section from the ```tsconfig.json``` file:

```
{
  "compilerOptions:": {
    ...
    "paths": {
      "Component/*": ["./Component/*"],
      "Constant/*": ["./Constant/*"],
      "Mock/*": ["./Mock/*"],
      "Setup/*": ["./Setup/*"],
      "Store/*": ["./Store/*"],
      "Types/*": ["./Types/*"],
      "Utilities/*": ["./Utilities/*"],
      "API/*" : ["./API/*"]
    }
    ...
  }
}
```

### __Hook creators__

- ```Store/createUseActions```: creates a react hook which lets you access all actions (connected to ```dispatch()```).

- ```Store/createUseSelector```: creates a react hook which lets you access the state infering the return type. In contrast to ```useSelector``` from ```react-redux``` (which is wrapped in our useSelector hook) you will only need to provide the type for the global state __once__ when you call ```createUseSelector```. Also the return type of ```useSelector``` will be inferred.

### __Reimplemented notifications__

To simplify notifications we followed the [recommendations from material-ui](https://material-ui.com/components/snackbars/#notistack) and made use of [```notistack```](https://github.com/iamhosseindhv/notistack).

- To control notifications you can simply use redux actions
- You will need to provide an id on your own when sending a notification. We recommend using ```uuid``` for this (already included in ```@elumeo/jfs-core```).

relevant sections of the implementation:
```
// Types/Notification.ts

import { SnackbarAction, useSnackbar, VariantType, OptionsObject } from 'notistack';
import React from 'react';

export type Notification = {
  id: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  variant: VariantType;
  action?: (
    snackbar: ReturnType<typeof useSnackbar>,
    id: string,
    temporary: boolean
  ) => SnackbarAction;
  notistackOptions?: OptionsObject;
};
```

```
// Store/Action/Notification.ts

import * as TA from 'typesafe-actions';
import * as Type from 'Types/Notification';
import { AxiosError } from 'axios';

export const addNotification = (
  TA.createStandardAction('notification/ADD')<Type.Notification>()
);
export const removeNotification = TA.createStandardAction('notification/remove')<string>()
export const removeAllNotifications = TA.createStandardAction('notification/remove_all')()
export const catchErrorNotification = TA.createStandardAction('notification/ERROR_ADD')<AxiosError>()

export const setIsNotificationHistoryOpen = (
  TA.createStandardAction('notification/SET_IS_HISTORY_OPEN')<boolean>()
);
```

example usage:

```
// Store/Epic/Notification.ts

import React from 'react';
import { filter, switchMap } from 'rxjs/operators';
import { ActionType, Epic } from 'Types/Redux';
import { isActionOf } from 'typesafe-actions';
import * as Actions from 'Store/Action';
import * as Notification from 'Component/Notification';
import uuid from 'uuid';
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

### __Changed files & directories__

__NOTE__: All webSocket types were moved to ```/Types/WebSocket.ts```

| Before                    | After                                                      |
|---------------------------|------------------------------------------------------------|
| /Base/HttpClient.ts       | /API/HTTP/HttpClient.ts                                    |
| /Base/Session.ts          | /API/LOCAL_STORAGE/Session.ts, /API/LOCAL_STORAGE/Token.ts |
| /Base/WSClient.ts         | /API/WS/WSClient.ts                                        |
| /Jsc/Client.ts            | /API/JSC/Client.ts                                         |
| /Jsc/Api/index.ts         | /API/JSC/index.ts                                          |
| /Jsc/Api/Config.json      | /API/JSC/Config.json                                       |
| /Jsc/Api/Description.json | /API/JSC/Description.json                                  |
| /Jsc                      | deleted                                                    |
| /Shared                   | deleted                                                    |
| /Style                    | deleted                                                    |

## Working with the core

### Icons

We now use SVG icons like material ui. So we do not need to create an icon font anymore.

These are the steps to add an icon: 

1. create a new SVG as a react component in ```Component/Icon/SVG/YOUR_ICON_NAME```
2. wrap your SVG with the ```<Wrapper/>``` component from ``` ```Component/Icon/Wrapper```
3. make sure to set the fill color to ```'currentcolor'```
4. register your icon in ```Component/Icon/SVG/index.ts```

Example svg icon component in react:

```
import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Wrapper from '../Wrapper';

const Apple: React.FC<SvgIconProps> = props => (
  <Wrapper {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(5.000000, 3.000000)" fill='currentcolor' fillRule="nonzero">
        <path d="M21.766,18.984 C21.375,20.218 20.75,21.531 19.844,22.89 C18.5,24.937 17.156,25.953 15.828,25.953 C15.297,25.953 14.578,25.781 13.64,25.453 C12.718,25.109 11.921,24.953 11.281,24.953 C10.656,24.953 9.906,25.125 9.062,25.469 C8.203,25.828 7.515,26 6.999,26 C5.39,26 3.843,24.641 2.296,21.953 C0.78,19.265 -0.001,16.656 -0.001,14.094 C-0.001,11.703 0.593,9.766 1.765,8.25 C2.937,6.75 4.406,6 6.203,6 C6.969,6 7.875,6.156 8.969,6.469 C10.047,6.782 10.766,6.938 11.125,6.938 C11.578,6.938 12.328,6.766 13.359,6.407 C14.39,6.063 15.296,5.876 16.062,5.876 C17.312,5.876 18.421,6.22 19.39,6.892 C19.937,7.267 20.484,7.798 21.015,8.455 C20.203,9.143 19.609,9.752 19.234,10.299 C18.562,11.268 18.218,12.346 18.218,13.533 C18.218,14.814 18.577,15.986 19.296,17.017 C20.015,18.048 20.843,18.704 21.765,18.986 L21.766,18.984 Z M15.891,0.656 C15.891,1.297 15.735,2.015 15.438,2.781 C15.125,3.562 14.641,4.281 13.985,4.937 C13.423,5.499 12.86,5.875 12.298,6.062 C11.939,6.171 11.407,6.265 10.673,6.328 C10.704,4.781 11.111,3.437 11.892,2.312 C12.673,1.187 13.986,0.421 15.798,4.4408921e-16 C15.829,0.141 15.861,0.25 15.876,0.344 C15.876,0.453 15.892,0.547 15.892,0.657 L15.891,0.656 Z"/>
      </g>
    </g>
  </Wrapper>
);

export default Apple;
```