## 2020-10-05
## Fixed
- Fixed handling of undefined values in PriceInput component 

## 2020-10-05
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

## 2020-09-29
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
