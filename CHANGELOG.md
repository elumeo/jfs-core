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
