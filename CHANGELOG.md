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
