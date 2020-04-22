## [8.9.12] - 2020-04-22
### Bugfix
- Made ModalDialog repair styles more specific. 
- Moved LoginDialog styles to LoginDialog.scss

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
