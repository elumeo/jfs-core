## [11.2.7/8] - 2024-01-18
- fix/improved virtualized table styles

## [11.2.5/6] - 2024-01-18
- fix/improved handling of helperText in PriceInput Component

## [11.2.4] - 2024-01-03
- fix/improved styles for table checkboxes 

## [11.2.0] - 2023-12-08
- Reworked `PriceInput` Component.
  - PriceInput now emits a value of type `number`
  - PriceInput now validates the input value and only emits valid values. 

## [11.1.0]
- replaced deprecated dependencies

## [11.0.0] - 2023-02-01
- bump/add/remove core libraries and dependencies
- reintegrated showcase into project to faciliate development
  - added required webpack configs 
  - showcase is available at `/showcase`
  - showcase is not included in production build

## [10.5.0] 2022-11-18
- changed width style property of root element to max-width property

## [10.4.5] 2022-11-14
- added flag for overflow css style in TableDefault component

## [10.4.2] 2022-11-11
- fixed an issue in DatePicker component with missing invalidator information for useCallback
- added editorconfig to repo

## [10.3.0] 2022-09-02
- removed Content component
- added Layout component (test on route: `/app_layout`)
- updated node modules

## [10.2.0] 2022-07-18
- added doctype to `index.html` template file
- merge and bump version

## [10.1.6] 2022-07-08
- updated node modules
- created RefreshButton
- used RefreshButton in AppCardHeader component

## [10.1.5] 2022-06-13 (MT-6578)
- enhanced debug feature

## [10.1.4] 2022-05-22 (STORY-5015)
- hide select field options while loading

## [10.1.3] 2022-05-22 (STORY-5015)
- added option to hide clear button for select field

## [10.1.2] 2022-06-03
- added DebugButton handlers and store

## [10.1.1] 2022-05-30
- BUGFIX: make select clear button ready for multiple selection

## [10.1.0] 2022-05-24
- added DebugButton

## [10.0.9] 2022-05-27
- BUGFIX: make select clear button ready for multiple selection

## [10.0.8] 2022-05-22
- make select clear button ready for multiple selection

## [10.0.7] 2022-05-16
- update product table cell to show chips on right side instead below name

## [10.0.6] 2022-05-03
- Removed cypress dependencies and test script entries

## [10.0.5] 2022-04-29
- Added `mapErrorToNotificaiton` function and exported it, in order to have all notification features available also for errors

## [10.0.2] 2022-04-28
- Fixed addErrorNotification not working properly

## [10.0.0]  **** BREAKING ****
 - [Material UI](https://material-ui.com) instead of react-md
 - CSS-in-JS instead of SCSS
 - Up to date webpack 5 configuration
   - no doubled config.json needed anymore
 - Refined project structure & simpler apis
   - Core components as compound components
 - switched from tslint to eslint

### __Webpack__

We have updated our webpack version. Read more about webpack 5 [here](https://webpack.js.org/blog/2020-10-10-webpack-5-release/).

### __Location of config files__

- `/config.json`

It will be copied to `/dist/config.json` automatically when running the dev-server or creating a production build.

Changes made to the config file will cause a reload in the browser while developing.

All scripts that need config data will read from `/config.json`.

You should ignore `/config.json` and place a `/config.dist.json` next to it.

### __Reimplemented notifications__

To simplify notifications we followed the [recommendations from material-ui](https://material-ui.com/components/snackbars/#notistack) and made use of [`notistack`](https://github.com/iamhosseindhv/notistack).

- To control notifications you can simply use redux actions
- You will need to provide an id on your own when sending a notification. We recommend using `uuid` for this (already included in `@elumeo/jfs-core`).

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
  TA.createAction('notification/ADD')<Type.Notification>()
);
export const removeNotification = TA.createAction('notification/remove')<string>()
export const removeAllNotifications = TA.createAction('notification/remove_all')()
export const catchErrorNotification = TA.createAction('notification/ERROR_ADD')<AxiosError>()

export const setIsNotificationHistoryOpen = (
  TA.createAction('notification/SET_IS_HISTORY_OPEN')<boolean>()
);
```

See `HOWTO.md` for an example how to send a notification.

### __Changed files & directories__

__NOTE__: All webSocket types were moved to `/Types/WebSocket.ts`

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

## [9.10.35] 2021-02-08
## Added
- isWarning option for Notifications

## [9.10.34] 2021-02-08
## Changed
- increased Notification minimum time on screen to 5 seconds

## [9.10.32] 2021-02-04
## Changed
- updated "filter_reset" icon

## [9.10.31] 2021-02-04
## Changed
- updated "filter_reset" icon

## [9.10.30] 2021-02-04
## Changed
- updated "filter_reset" icon

## [9.10.29] 2021-02-04
## Changed
- updated "filter_reset" icon

## [9.10.28] 2021-02-04
## Fixed
- Added new font icon "filter_reset" to possible type string list

## [9.10.26] 2021-02-04
## Added
- Added new font icon "filter_reset"

## [9.10.25] 2021-02-02
## Added
- customActionTooltipTranslationValues to Notification

## [9.10.24] 2021-01-11
## Fixed
- fixed an issue that datepicker was not localized

## [9.10.23] 2021-01-05
## Changed
- added optional middle content for app header

## [9.10.22] 2020-12-30
## Changed
- fixed issue after removing web bundle analyzer

## [9.10.21] 2020-12-30
## Changed
- removed web bundle analyzer

## [9.10.19] 2020-12-22
## Added
- Added new font icon "webshop_block"

## [9.10.18] 2020-12-22
## Changed
- Added missing type for new "phone_block" icon

## [9.10.17] 2020-12-22
## Added
- Added new font icon "phone_block"

## [9.10.16] 2020-12-07
## Fixed
- fixed an issue with react-datepicker that inline datepicker results in an error because no text input was rendered

## [9.10.15] 2020-12-04
## Changed
- version of @types/react-datepicker to 3.1.2

## [9.10.14] 2020-12-04
## Fixed
- Fixed behaviour for formatNumber when passing showFraction = false

## [9.10.13] 2020-12-03
## Fixed
- Fixed value prop for <DatePicker/>
- Adjusted project config to dist/config.json for JFS-Apps when present

## [9.10.12] 2020-12-01
## Fixed
- Added floating prop for <DatePicker/>

## [9.10.11] 2020-12-01
## Fixed
- Adjustment for <DatePicker/> format/Color below input

## [9.10.10] 2020-11-30
## Fixed
- fixed view of <ReactDatePicker/>

## [9.10.9] 2020-11-26
## Added
- contentTranslationValues to IToastConfig

## [9.10.8] 2020-11-24
## Fixed
- forgot to run `npm run build` in version `9.10.6` and did it now

## [9.10.7] 2020-11-23
## Changed
- core SearchComponent (not to be confused with jfc_SearchComponent) became a functional component.
It's internal HtmlInputElement is now accessible using the onRefAvailable callback.

## [9.10.6] 2020-11-23
## Fixed
- fix for clear button for react date picker component

## [9.10.5] 2020-11-23
## Fixed
- fix for clear button for react date picker component
## Changed
- Updated react date picker version

## [9.10.4] 2020-11-13
## Changed
- The Notification spam prevention will now display the new, duplicate Notification and hide the existing one, instead.

## [9.10.3] 2020-11-10
## Fixed
- Fixed a bug within Notification spam prevention feature were consecutive but unequal notifications got ignored

## [9.10.2] 2020-11-10
## Fixed
- quickfix for sync: delayed copy by 400ms

## [9.10.1] 2020-11-10
## Fixed
- fixed an issue with the PriceInput component

## [9.10.0] 2020-11-10
## Added
- added className attribute for <JuweloFontIcon/> component

## [9.9.3] 2020-11-10
## Fixed
- fixed an issue inside scripts/package.json with downgrading tsc-alias module (^1.1.5 => 1.1.1)

## [9.9.2] 2020-11-10
## Fixed
- fixed corrupted build (rebuild)

## [9.9.1] 2020-11-09
## Added
- added more callback function to PriceInput field: onFocus, onBlur, rawOnChange

## [9.9.0] 2020-11-09
## Added
- Added optional style attribute for <JuweloFontIcon/> component

## [9.8.3] 2020-11-09
## Changed
- fixed the version to `^1.1.5` for `tsc-alias` which had a bugfix for 1.1.4

## [9.8.2] 2020-11-09
## Changed
- fixed the version to `1.1.1` for `tsc-alias` which had a bug in the latest version (`1.1.4`)

## [9.8.1] 2020-11-05
## Modified
- PriceInputComponent : changed property name from selectValue to optional param selectOnFocus
- Modified PriceInput Component to handle selection of input value on focus

## [9.8.0] 2020-11-05
## Added
- Added outlined material icon font to styles

## [9.7.21] 2020-11-04
## Added
- selectAll prop for price input field

## [9.7.20] 2020-10-29
## Fixed
- Fixed jsc-generate for nested dto namespaces

## [9.7.19] 2020-10-25
## Added
- DialogContainerProps to ModalDialog

## [9.7.18] 2020-10-23
## Fixed
- ModalDialog wrong title font size when titleIcon is present

## [9.7.17] 2020-10-15
## Fixed
- Fixed array type parameters in jsc-generate

## [9.7.16] 2020-10-15
## Fixed
- Fixed format of dates

## [9.7.15] 2020-10-15
## Fixed
- Fixed replacement of path parameters of type number in jsc-generate

## [9.7.14] 2020-10-13
## Fixed
- Added missing woff files

## [9.7.13] 2020-10-13
## Fixed
- Fixed locale for formatting

## [9.7.12] 2020-10-09
## Fixed
- ModalDialog initialFocus and closeOnEsc issues

## [9.7.11] - 2020-10-08
## Fixed
- Added new icon to juwelo icon font (box_open)

## [9.7.10] - 2020-10-08
## Fixed
- Added missing build files for release 9.7.9

## [9.7.9] - 2020-10-08
## Fixed
- Fixed keys to actions of notification card

## [9.7.8] - 2020-10-08
## Fixed
- Fixed issues with postinstall script
- Added keys to actions of notification card

## [9.7.7] - 2020-10-05
## Fixed
- Fixed path separator bug in register-scripts

## [9.7.6] - 2020-10-05
## Fixed
- Fixed propagation of postinstall script

## [9.7.5] - 2020-10-05
## Fixed
- Spawn npm processes on Windows with 'npm.cmd' rather than 'npm'

## [9.7.4] - 2020-10-05
## Fixed
- Removed Subpackage.install() from postinstall script

## [9.7.3] - 2020-10-05
## Fixed
- Reenabled subpkg install

## [9.7.2] - 2020-10-05
## Added
- Added postinstall script which cascades jfs projects
- Added history to epic middleware dependencies

## [9.7.1] - 2020-10-05
## Fixed
- Fixed handling of undefined values in PriceInput component

## [9.7.0] - 2020-10-05
## Fixed
- Fixed issues causing the app to re-render too often

## 2020-10-02
## Added
- Added mechanism for reading meta data of scripts (needed for register-scripts)

## 2020-10-02
## Fixed
- Fixed initial value for reduce() in register-scripts

## 2020-10-02
## Fixed
- Allow register-scripts to distinguish between project types

## 2020-10-02
## Added
- Added script for automated registration of core scripts

## 2020-10-02
## Added
- Added showcase project to core

## 2020-10-01
## Fixed
- Fixed freezing of app caused by route details effect
## Changed
- Refactored all components to functional components

## [9.5.29] 2020-09-29
## Added
- RouteDetails to Router State
## Changed
- ModalDialog to not use compatibility intl anymore.

## [9.5.28] - 2020-09-28
## Fixed
- Restored JFS.discover() fix

## [9.5.27] - 2020-09-28
## Fixed
- Fixed missing devtool

## [9.5.26] - 2020-09-28
## Fixed
- Fixed corruption of binary files when building or synchronizing the core (e. g. woff files)

## [9.5.25] - 2020-09-22
## Fixed
- Incorrect `.woff` files

## [9.5.24] - 2020-09-21
## Fixed
- NotificationCard timeToRead infinite recursion  

## [9.5.23] - 2020-09-18
## Fixed
- Fixed missing compiled version of Namespace.ts

## [9.5.22] - 2020-09-18
## Added
- Added new searchString param again (core-9)

## [9.5.21] - 2020-09-18
## Fixed
- Fixed JFS.discover() to point JFS.Head to process.cwd()

## [9.5.20] - 2020-09-18
## Fixed
- Fixed console.log in set-peer-dependencies

## [9.5.19] - 2020-09-17
### Changed
- ModalDialog
    * confirmButtonText and closeButtonText may contain an ReactElement
    * closeButton is now optional (for those who need to arrange the footer actions individually)
- Notifications
    * The Notifications count Badge is more visible now.
    * The Notification duplication count Badge has been removed.
### Fixed
- Added missing json-diff node module

## [9.5.18] - 2020-09-11
### Fixed
- Fix (attempt) for console.log in set-peer-dependencies

## [9.5.17] - 2020-09-07
### Added
- Added PriceInput Component.

## [9.5.16] - 2020-09-04
### Fixed
- Fixed problems with sync-development, jsc-generate

## [9.5.15] - 2020-09-04
### Fixed
- Fixed an issue Juwelo icon font

## [9.5.14] - 2020-09-03
### Fixed
- Fixed an issue with datepicker component in inline mode

## [9.5.13] - 2020-09-03
### Fixed
- Cleaned build

## [9.5.12] - 2020-09-03
### Fixed
- Added new jfs-build script for transpiling and syncing based on events

## [9.5.11] - 2020-09-02
### Fixed
- fixed sync-development on windows

## [9.5.10] - 2020-09-01
### Fixed
- fixed some style issues after change to dart-sass

## [9.5.9] - 2020-09-01 (was not released)
### Fixed
- fixed some style issues after change to dart-sass

## [9.5.8] - 2020-09-01
### Fixed
- fixed some style issues after change to dart-sass

## [9.5.7] - 2020-09-01
### Fixed
- updated sass-loader module

## [9.5.6] - 2020-09-01
### Fixed
- fixed dart sass config issue

## [9.5.5] - 2020-09-01
### Changed
- moved script package.json from node-sass to dart-sass

### Fixed
- Fixed an issue in the datepicker component where a custom input field is not compatible with react-md

## [9.5.4] - 2020-09-01
### Changed
- moved from node-sass to dart-sass
- changed multiple scss imports to use `@use` instead of `@import`

### Fixed
- Fixed an issue in the datepicker component where a custom input field is not compatible with react-md
    * the custom field isn't supported anymore
    * added styling and logic to be aligned with react md

## [9.5.3] - 2020-08-28
### Fixed
- ???

## [9.5.2] - 2020-08-28
### Fixed
- ???

## [9.5.1] - 2020-08-28
### Fixed
- Fixed scripts build/jfs-prebuild for windows platform

## [9.5.0] - 2020-08-28
### Added
- added utilities from RightsManager: Sort, Filter, Text.removeDiacritics

## [9.4.1] - 2020-08-28
### Fixed
- fixed set-peer-dependency bug

## [9.4.0] - 2020-08-28
### Added
- script for adding core dependencies as peerDependencies to jfs apps or jfc components

### Fixed
- added missing import in webpack.production.js

## [9.3.8] - 2020-08-27
### Changed
- removed usage of `config.json.dist` with `npm start` command
- it is now required (!) to have a `config.json` in a `dist` directory
- this can be manually copied from `config.json.dist` or with the `npm run build` comman

## [9.3.7] - 2020-08-21
### Fixed
- Added more error handling to websocket client

## [9.3.6] - 2020-08-18
### Fixed
- fixed unhandled error exception warning in webpack-dev-server when running on macOS (Darwin)

## [9.3.5] - 2020-08-18
### Fixed
- fixed translation checker on windows

## [9.3.4] - 2020-08-18
### Fixed
- fixed translation checker

## [9.3.3] - 2020-08-18
### Fixed
- fixed translation checker

## [9.3.2] - 2020-08-18
### Fixed
- added woff and woff2 to build pipeline

## [9.3.1] - 2020-08-18
### Changed
- updated juwelo icon font
- updated node modules versions in package.json

## [9.3.0] - 2020-08-17
### Added
- webpack-bundle-analyzer dependency

## [9.2.1] - 2020-08-17
### Fixed
- Support for external source maps in webpack

## [9.2.0] - 2020-08-17
### Added
- Added sync script for styles from src to build

## [9.1.18] - 2020-08-12
### Changes
- Changed scss imports to use only necessary files directly instead of whole react-md each time

### Bugfixes
- Fixed some missing imports

## [9.1.17] - 2020-08-12
### Bugfixes
- Fixed some missing imports

## [9.1.16] - 2020-08-12
### Changes
- Changed scss imports to use only necessary files directly instead of whole react-md each time

## [9.1.15] - 2020-08-12
### Changes
- Moved color variables from main.scss into colors.scss

## [9.1.14] - 2020-08-12
### Bugfix
- Added missing build files

## [9.1.13] - 2020-08-12
### Bugfix
- Added .idea to sync ignore list

## [9.1.12] - 2020-08-12
### Bugfix
- ???

## [9.1.11] - 2020-08-12
### Bugfix
- fixed sync-development when running in app and component simultaneously
- added ignore list for syncing

## [9.1.11] - 2020-08-11
### Bugfix
- new sync-development script (less issues with startup & syncing)
- deploy separate tsconfig files for apps, components and the core
- improved tsconfig with incremental build for faster webpack builds

## [9.1.10] - 2020-08-11
### Changes
- Disabled shadowed name variable check in tslint

## [9.1.9] - 2020-08-10
### Bugfix
- Fixed wrong font size for juwelo icon font
- update juwelo icon font with new test icon

### Changes
- extended juwelo icon font component with 2 more props: error, light

## [9.1.8] - 2020-08-10
### Bugfix
- Added missing build files

## [9.1.7] - 2020-08-07
### Changes
- Added more juwelo font icons
- changed default font size for juwelo font icons from 24px to 20px
- Implemented some default styling for font size and react virtualized tables
- fixed a typo in css class name

## [9.1.6] - 2020-08-06
### Changes
- Added more juwelo font icons

## [9.1.5] - 2020-08-06
### Changes
- Added new juwelo font icons: multiple sources, cash_on_delivery, cash_in_advance

## [9.1.4] - 2020-08-05
### Changes
- Added new juwelo font icon for bid block

## [9.1.3] - 2020-08-05
### Changes
- Updating the document.title is now optional on BaseRoute

## [9.1.2] - 2020-08-04
### Bugfix
-- Fixed build pipeline for jfc-components

## [9.1.0] - 2020-07-31
### Bugfix
-- fixes for jsc-generate to follow the given format

## [9.1.0] - 2020-07-29
### Added
-- jfs-prebuild script for transpiling the core and jfc components

## [9.0.10] - 2020-07-29
### Bugfix
-- Support for deep nested DTO namespaces in jsc-generate

## [9.0.9] - 2020-07-28
### Bugfix
- Exported history

## [9.0.7] - 2020-07-14
### Bugfix
- Fixed WebSocketConnection props

## [9.0.7] - 2020-07-13
### Bugfix
- Fixed generation of array type resources in jsc-generate

## [9.0.6] - 2020-07-10
### Bugfix
- Made all generated properties optional in jsc-generate

## [9.0.5] - 2020-07-10
### Bugfix
- Fix for formatting url in jsc-generate

## [9.0.4] - 2020-06-26
### Bugfix
- Fixes for build pipeline

## [9.0.3] - 2020-06-26
### Bugfix
- Fixes for build pipeline

## [9.0.2] - 2020-06-26
### Bugfix
- Fixes for build pipeline

## [8.15.13] - 2020-06-18
### Bugfix
- Fixed deploy-config-files script when running on windows

## [8.15.12] - 2020-06-18
### Bugfix
- Fixed deploy-config-files script when running on windows

## [8.15.11] - 2020-06-10
### Bugfix
- Added onClear callback property to SearchComponent

## [8.15.10] - 2020-06-08
### Bugfix
- Fixed an issue that google-libphonenumber throws an exception when passed phone number is not a valid phone number (e.g. '-')

## [8.15.9] - 2020-06-09
### Fixes
- Fixed DatePicker to work inline

## [8.15.8] - 2020-06-04
### Changes
- Moved from `libphonenumber-js` to `google-libphonenumber`

## [8.15.7] - 2020-06-04
### Added
- Added focus class to SearchComponent
- Added `disabled` prop to SearchComponent

## [8.15.6] - 2020-05-28
### Added
- Added new juwelo font icon: apple
- Added new juwelo font icon: webshop
- Added new juwelo font icon: webshop_bidagent

## [8.15.5] - 2020-05-27
### Bugfix
- fixed SearchComponent input doesn't get focused on clear

## [8.15.4] - 2020-05-27
### Changed
- Give the formatTime formatter method an optional options parameter to be able to add seconds as well

## [8.15.3] - 2020-05-27
### Added
- Added react-virtualized lib to package as core dependency

## [8.15.2] - 2020-05-25
### Bugfix
- fixed wrong generated script js file for generating juwelo icon font
- fixed an issue with currency helper when providing wrong number as arg

## [8.15.1] - 2020-05-22
### Bugfix
- fixed wrong naming of juwelo font icon component

## [8.15.0] - 2020-05-22
### Added
- Added a new script to generate juwelo icon font from given svgs
    + put svgs into scripts/Resources/juwelo-icon-font/svg directory
        * the filename of the svg will be used as the icon name
    + run `npm run generate-juwelo-icon-font`
- Added a new component for juwelo icon font
    + usage: `<JuweloFontIcon icon="invoice_address" />`

## [8.14.8] - 2020-05-20
### Bugfix
- SearchComponent padding adjustment

## [8.14.7?] - 2020-05-11
### Bugfix
- Fixed type errors

## [8.14.6] - 2020-05-11
### Bugfix
- Removed code for later release

## [8.14.5] - 2020-05-11
### Bugfix
- Fixed language bug in shared components

## [8.14.4] - 2020-05-10
### Bugfix
- Fixed an issue in ReactDatePicker that prop `shouldCloseOnSelect` was not recognized in custom `onChange` handler

## [8.14.3] - 2020-05-08
### Bugfix
- Removed debug output

## [8.14.2] - 2020-05-08
### Bugfix
- Fixed language settings dropdown oversize.
- Fixed missing translations for notification card action button tooltips.

## [8.14.1] - 2020-05-05
### Bugfix
- Fixed SettingsContainer component

## [8.14.0] - 2020-05-04
### Added
- Added support for components to be rendered as values in formatMessage()

### Bugfix
- Downgraded moment.js due to a bug

## [8.13.0] - 2020-05-04
### Added
- formatNumber() and formatDate are now available to the compatibility module for react-intl

## [8.12.3] - 2020-05-04
### Bugfix
- Fixed injectIntl compatibility module

## [8.12.2] - 2020-05-04
### Bugfix
- Fixed integration of locale data for react-intl

## [8.12.1] - 2020-04-30
### Bugfix
- Fixed an issue were the login was possible without providing credentials

## [8.12.0] - 2020-04-30
### Bugfix
- for the latest ModalDialog Bugfix

## [8.11.0] - 2020-04-30
### Added
- Added <DatePicker/> component
- Added outside click handler to <Popover/>

## [8.10.0] - 2020-04-30
### Added
- Compatibility mode for react-intl
- `<FormattedMessage/>` component
- `<Popover/>` component
- New Utilities class
- redux-providers for easy access to store

## [8.9.12] - 2020-04-22
### Bugfix
- Moved LoginDialog styles to LoginDialog.scss
- ⚠️ Made ModalDialog repair styles more specific.
    - This may overrule your custom styles to .md-dialog
    - In order to make your custom styles most relevant again, please use .md-dialog.md-dialog--centered

## [8.9.11] - 2020-04-21
### Bugfix
- Fixed laggy NotificationDrawer close animation

## [8.9.10] - 2020-04-21
### Bugfix
- Fixed NavigationItem onClick behaviour

## [8.9.9] - 2020-04-08
### Bugfix
- Made blurry ModalDialog Font sharp

## [8.9.8] - 2020-04-08
### Bugfix
- Removed [Object object] output when formatting non jsc errors

## [8.9.7] - 2020-04-08
### Added
- Added username as connect argument to WSClient (required for websocket monitoring)

## [8.9.6] - 2020-04-07
### Bugfix
- Fixed an issue with double room join events when reconnecting and the room name is a dynamic value

## [8.9.5] - 2020-04-06
### Added
- Added appName as connect argument to WSClient (required for websocket monitoring)

## [8.9.4] - 2020-03-27
### Bugfix
- Notification actions stay visible now

## [8.9.3] - 2020-03-26
### Bugfix
- Downgraded react-redux to ^5.0.7
- Added fallback routine for deploy-config-files

## [8.9.2] - 2020-03-25
### Changed
- Adjusted NotificationBadge size and position slightly

## [8.9.1] - 2020-03-`??`
`no details yet ...`

## [8.9.0] - 2020-03-24
### Added
- Updated react-redux to 8.9.0

## [8.8.1] - 2020-03-24
### Bugfix
- Minor adjustments for tsconfig in jfc

## [8.8.0] - 2020-03-24
### Added
- Support for path mapping in jfc components

## [8.7.0] - 2020-03-20
### Bugfixes
- Made errorContent more reliable
- Removed drop shadow from items of the NotificationDrawer

### Added
- Notifications
    - Compact NotificationCard layout (icon buttons only)
    - isSuccess option to color notifications with $juw_success_color
    - Default icons for error and success cases

## [8.6.2] - 2020-03-20
### Bugfix
- extended error message handling websocket

## [8.6.1] - 2020-03-17
### Bugfix
- Prevent websocket error to be raised more then 1 time during connection/reconnection
- Fixed a bug that changeLanguageAction prop in SettingsContainer is not required anymore
- Fixed a shadowed name issue in src/Store/Reducer/index.ts

## [8.6.0] - 2020-03-17
### Added
- Full support of react-router functionalities for AuthRoute, NoAuthRoute & BaseRoute

## [8.5.7] - 2020-03-16
### Bugfixes
- Fixed error handling in websocket context

### Added
- new config value for websocket connection: Path
  * is optional: default is `/`

## [8.5.6] - 2020-03-13
### Bugfixes
- Dismiss all Notifications will not dismiss those with dismissButtonVisible === false

## [8.5.5] - 2020-03-13
### Bugfixes
- Smoother Notification animations

## [8.5.4] - 2020-03-13
### Added
- Hide button to on screen notifications
- Hide/Dismiss-Animation optimization

## [8.5.3] - 2020-03-10
### Bugfixes
- invalid import shorthand

## [8.5.2] - 2020-03-10
### Added
- Notification
    - dismissButtonVisible option
    - message type supports string[] to render as list
    - translationId type supports string[] to render as list
### Bugfixes
- Notification
    - timeToRead will also get calculated for translations and error objects

## [8.5.1] - 2020-03-10
### Bugfixes
- fixed an issue when try to emit to websocket when no websocket connection is available

## [8.5.0] - 2020-03-10
### Added
- prettier integration for jsc-generate script

## [8.4.3] - 2020-03-10
### Bugfixes
- create local.js automatically before any build from local.js.dist

## [8.4.2] - 2020-03-09
### Bugfixes
- Rolled back IDE auto import improvement due to broken core

## [8.4.1] - 2020-03-09
### Bugfixes
- Notification Badge without children error
- Improved IDE auto import

## [8.4.0] - 2020-03-09
### Added
- formatTime and formatDate to static Translation class
- Notifications
    - stayOnScreen - adding an option to leave Notifications on screen as long as the user dismiss them.
    - intelligent autoHideTimeout - calculate the autoHideTimeout by determining the words to read for each notification
    - combine duplicates - consecutively equal notifications will be combined to a single notification indicating how often it occurred
    - TimeStamp - each Notification will show the time of it’s occurrence, also the date if it’s not today
    - Custom Actions - Notifications will give the option to add a custom action
    - Keep Track - Adding Notifications should give a handle to it to manually dismiss them later
    - Dismiss by GroupID - Multiple notifications with the same groupID should get dismissed with a single call

## [8.3.4]
### Bugfixes
- Fixed an issue with the websocket join room logic

## [8.3.3]
### Bugfixes
- Moved .babelrc settings to webpack.common.js

## [8.3.2]
### Bugfixes
- Updated version of webpack & babel

## [8.3.1]
### Bugfixes
- Fixed broken production settings (removed UglifyJsPlugin)

## [8.3.0]
### Added
- Static class for internationalized messages

## [8.2.2]
### Bugfixes
- Fixed broken tsconfig.json

## [8.2.1]

### Bugfixes
- Adjusted tsconfig for third party module auto completion

## [8.2.0]

### Bugfixes
- re-enabled recursive dependency resolution in webpack settings

### Added
- added \<International/> component for message internationalization

## [8.1.9]
### Bugfixes
- Use the INotification in websocket error handling

## [8.1.8]
### Bugfixes
- Fixed error format

## [8.1.7] - 2020-02-12
### Bugfixed
- fixed a bug in websocket connection: connection was not triggered after login

## [8.1.6] - 2020-02-10
### Bugfixed
- fixed wrong public path for bundle.js
- fixed display format for jsc error with id = 0

## [8.1.5] - 2020-02-11
### Bugfixed
- fixed style error which sets the wrong primary color

## [8.1.4] - 2020-02-11
### Bugfixed
- CircularProgress integrated within the login button of the LoginDialog to prevent size flickering
- fixed style error which sets the wrong secondary color

## [8.1.3] - 2020-02-10
### Updates
- updated react-router-dom to version 5

### Bugfixed
- fixed error occurring while leaving websocket rooms

## [8.1.2] - 2020-02-10
### Added
- Added $juw-font-color scss variable

### Updates
- Make epic property in ISharedStoreProps optional
- Updated react-router-dom library to newest version

### Bugfixes
- Fixed an error in scss colors which was introduced in 8.0.6
- Fixed a bug where 401 exception crashes the app
- Fixed error occurring when displaying non jsc error as toast/notification
- Fixed styling for NotificationDrawer
- Fixed firing of "appInitialized" after a logging in again without reload

## [8.1.0] - 2020-02-04
### Added
- Added logic to handle shared components

## [8.0.6] - 2020-02-04
### Added
- Style guide colors
